const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { createRequire } = require("node:module");
const test = require("node:test");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

// Compile isolated frontend modules with the installed TypeScript version.
// This exercises the real adapters/renderers without writing to the CMS database.
const root = path.resolve(__dirname, "..");
function load(relative, overrides = {}, cache = new Map()) {
  const filename = path.resolve(root, relative);
  if (cache.has(filename)) return cache.get(filename).exports;
  const module = { exports: {} };
  cache.set(filename, module);
  const nativeRequire = createRequire(filename);
  const localRequire = (name) => {
    if (name in overrides) return overrides[name];
    if (name === "server-only" || name.endsWith(".css")) return {};
    if (name.startsWith("@/") || name.startsWith(".")) {
      const target = name.startsWith("@/") ? path.resolve(root, name.slice(2)) : path.resolve(path.dirname(filename), name);
      const extension = target.includes("components/") || target.includes("components\\") ? ".tsx" : ".ts";
      return load(path.relative(root, target + extension), overrides, cache);
    }
    return nativeRequire(name);
  };
  const code = ts.transpileModule(readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  }).outputText;
  const run = vm.runInThisContext(`(function(require,module,exports){${code}\n})`, { filename });
  run(localRequire, module, module.exports);
  return module.exports;
}

const content = load("lib/cms-content.ts");
const rich = (children) => ({ root: { type: "root", children } });
const paragraph = (text) => ({ type: "paragraph", children: [{ type: "text", text }] });
const base = { id: "post-1", title: "CMS article", slug: "cms-article", heroImage: { url: "/api/media/file/hero.jpg", alt: "CMS image alt" }, createdAt: "2026-10-01T12:00:00Z", updatedAt: "2026-10-10T12:00:00Z", categoryRelation: { title: "Software", slug: "software" } };

test("CMS adapters preserve categories, media alt text and article routes", () => {
  const post = { ...base, content: rich([paragraph("First paragraph."), paragraph("Second paragraph.")]) };
  const card = content.blogCard(post);
  assert.equal(card.category, "Software");
  assert.equal(card.href, "/blog/cms-article");
  assert.equal(card.imageAlt, "CMS image alt");
  assert.match(card.image, /\/api\/media\/file\/hero.jpg$/);
  assert.equal(card.description, "First paragraph. Second paragraph.");
  assert.equal(card.readTime, "1 min read");
  assert.equal(content.mediaURL("unpopulated-id"), undefined);
  assert.equal(content.safeURL("javascript:alert(1)"), undefined);
  assert.equal(content.safeURL("//untrusted.example"), undefined);
});

test("rich text preserves headings, formatting, tables, images and FAQ blocks", () => {
  const { default: RichText } = load("components/content/RichText.tsx");
  const state = rich([
    { type: "heading", tag: "h3", children: [{ type: "text", text: "CMS heading" }] },
    { type: "paragraph", children: [{ type: "text", text: "Bold", format: 1 }, { type: "text", text: "Italic", format: 2 }] },
    { type: "table", children: [{ type: "tablerow", children: [{ type: "tablecell", headerState: 1, colSpan: 2, rowSpan: 2, children: [paragraph("Table value")] }] }] },
    { type: "upload", value: { url: "/api/media/file/content.jpg", alt: "Content image", caption: "CMS caption" } },
    { type: "block", fields: { blockType: "faq", heading: "Questions", items: [{ question: "How?", answer: "CMS answer" }] } },
    { type: "link", fields: { url: "javascript:alert(1)" }, children: [{ type: "text", text: "Unsafe link" }] },
    { type: "link", fields: { url: "https://example.com", newTab: true }, children: [{ type: "text", text: "Safe link" }] },
    { type: "relationship", relationTo: "case-studies", value: { title: "Project", slug: "project" } },
  ]);
  const html = renderToStaticMarkup(React.createElement(RichText, { content: state }));
  assert.match(html, /<h3[^>]*>CMS heading<\/h3>/);
  assert.match(html, /<strong>Bold<\/strong>/);
  assert.match(html, /<em>Italic<\/em>/);
  assert.match(html, /<th[^>]*colSpan="2"[^>]*rowSpan="2"/i);
  assert.match(html, /alt="Content image"/);
  assert.match(html, /<figcaption>CMS caption<\/figcaption>/);
  assert.match(html, /<summary>How\?<\/summary>/);
  assert.match(html, /CMS answer/);
  assert.doesNotMatch(html, /javascript:/);
  assert.match(html, /rel="noopener noreferrer"/);
  assert.match(html, /href="\/case-studies\/project"/);
});

test("SEO uses this website for imported canonicals and honors robots/social settings", () => {
  const seo = load("lib/cms-seo.ts");
  const doc = { ...base, seo: { canonicalURL: "https://brainadz.marketing/blog/old-slug", metaTitle: "SEO title", metaDescription: "SEO description", ogTitle: "Social title", robots: "noindex, nofollow" } };
  const metadata = seo.contentMetadata(doc, "/blog/cms-article", "Fallback");
  assert.equal(metadata.alternates.canonical, `${seo.siteURL}/blog/cms-article`);
  assert.equal(metadata.title, "SEO title");
  assert.equal(metadata.openGraph.title, "Social title");
  assert.equal(metadata.robots.index, false);
  assert.equal(metadata.robots.follow, false);
  assert.equal(seo.contentCanonical({ ...base, seo: { canonicalURL: "https://partner.example/article" } }, "/blog/cms-article"), "https://partner.example/article");
});

test("REST reads only published content, populates relationships and follows pagination", async () => {
  const originalFetch = global.fetch;
  const requests = [];
  global.fetch = async (url, options) => {
    requests.push({ url: new URL(url), options });
    const page = new URL(url).searchParams.get("page");
    return { ok: true, json: async () => ({ docs: [{ id: page }], hasNextPage: page === "1" }) };
  };
  try {
    const cms = load("lib/cms.ts");
    const docs = await cms.getBlogs();
    assert.deepEqual(docs.map(doc => doc.id), ["1", "2"]);
    for (const { url, options } of requests) {
      assert.equal(url.searchParams.get("where[_status][equals]"), "published");
      assert.equal(url.searchParams.get("depth"), "2");
      assert.equal(url.searchParams.get("sort"), "-publishedAt");
      assert.equal(options.cache, "no-store");
      assert.equal(options.headers, undefined);
    }
    requests.length = 0;
    await cms.getBlogs(3);
    assert.equal(requests.length, 1);
    assert.equal(requests[0].url.searchParams.get("limit"), "3");
    global.fetch = async () => ({ ok: true, json: async () => ({ docs: [] }) });
    assert.equal(await cms.getBlog("missing"), null);
    global.fetch = async () => ({ ok: false, status: 503 });
    await assert.rejects(cms.getCaseStudy("sample"), /503/);
  } finally { global.fetch = originalFetch; }
});

test("case study details render all existing CMS sections in order", async () => {
  const study = { ...base, summary: "Project summary", industry: "Retail", services: [{ name: "Development" }], challenge: rich([paragraph("Disconnected workflows")]), approach: [{ title: "Discovery", description: "Map workflows" }], beforeAfter: { title: "Before vs After", items: [{ label: "Time", beforeValue: "10 hours", afterValue: "2 hours" }] }, results: [{ value: "80%", label: "Less manual work" }], performanceEvidence: { title: "Performance Evidence", images: [{ image: { url: "/api/media/file/proof.jpg" }, altText: "Evidence alt", caption: "Measured results" }] }, finalOutcome: { title: "Final Outcome", description: rich([paragraph("Connected operations")]) } };
  const module = load("app/case-studies/[slug]/page.tsx", {
    "@/lib/cms": { getCaseStudy: async () => study },
    "@/components/home/CTA": { __esModule: true, default: () => React.createElement("div", null, "Site CTA") },
  });
  const page = await module.default({ params: Promise.resolve({ slug: study.slug }) });
  const html = renderToStaticMarkup(page);
  let previous = -1;
  for (const label of ["The Challenge", "Our Approach", "Before vs After", ">Results<", "Performance Evidence", "Final Outcome", "Site CTA"]) {
    const position = html.indexOf(label);
    assert.ok(position > previous, `${label} must appear in CMS section order`);
    previous = position;
  }
  assert.match(html, /alt="Evidence alt"/);
  assert.match(html, /10 hours/);
  assert.match(html, /2 hours/);
  assert.match(html, /Connected operations/);
});
