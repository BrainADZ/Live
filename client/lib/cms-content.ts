// Public REST response shapes. Keep the frontend independent of the CMS runtime.
export type Media = {
  url?: string | null;
  alt?: string | null;
  caption?: string | null;
  width?: number | null;
  height?: number | null;
  sizes?: Partial<Record<"card" | "thumbnail" | "og", { url?: string | null }>>;
};
export type MediaRelation = string | Media | null;
export type RichTextNode = {
  type: string;
  text?: string;
  children?: RichTextNode[];
  format?: number | string;
  tag?: string;
  listType?: string;
  start?: number;
  checked?: boolean;
  direction?: "ltr" | "rtl" | null;
  indent?: number;
  colSpan?: number;
  rowSpan?: number;
  headerState?: number;
  value?: MediaRelation | { title?: string; slug?: string };
  relationTo?: string;
  fields?: {
    url?: string;
    newTab?: boolean;
    linkType?: string;
    doc?: { relationTo?: string; value?: string | { slug?: string } };
    blockType?: string;
    heading?: string;
    items?: { question: string; answer: string }[];
  };
};
export type RichText = { root: RichTextNode };
export type SEO = {
  metaTitle?: string | null;
  metaDescription?: string | null;
  focusKeyword?: string | null;
  canonicalURL?: string | null;
  robots?: string | null;
  noIndex?: boolean | null;
  ogTitle?: string | null;
  ogDescription?: string | null;
  ogImage?: MediaRelation;
  image?: MediaRelation;
};
export type ContentDocument = {
  id: string;
  slug: string;
  title: string;
  category?: string | null;
  categoryRelation?: string | { title: string; slug: string } | null;
  heroImage: MediaRelation;
  featured?: boolean;
  authorName?: string | null;
  publishedAt?: string | null;
  createdAt: string;
  updatedAt: string;
  readTime?: number | null;
  seo?: SEO | null;
  _status?: "draft" | "published";
};
export type BlogPost = ContentDocument & {
  excerpt?: string | null;
  content: RichText;
  tagsText?: string | null;
  tags?: (string | { title: string })[] | null;
};
export type CaseStudy = ContentDocument & {
  summary: string;
  industry: string;
  services: { name: string }[];
  challenge: RichText;
  approach: { title: string; description: string }[];
  beforeAfter?: { title?: string | null; description?: string | null; items?: { label: string; beforeValue: string; afterValue: string }[] | null } | null;
  results?: { value: string; label: string }[] | null;
  performanceEvidence?: { title?: string | null; description?: string | null; images?: { image: MediaRelation; altText: string; caption?: string | null }[] | null } | null;
  finalOutcome?: { title?: string | null; description?: RichText | null } | null;
};

export function categoryName(doc: ContentDocument): string {
  return typeof doc.categoryRelation === "object" && doc.categoryRelation
    ? doc.categoryRelation.title
    : doc.category || "Insights";
}

export function safeURL(value?: string | null): string | undefined {
  if (!value) return undefined;
  if (value.startsWith("/") && !value.startsWith("//") && !value.includes("\\")) return value;
  try {
    const parsed = new URL(value);
    return ["http:", "https:", "mailto:", "tel:"].includes(parsed.protocol) ? value : undefined;
  } catch { return undefined; }
}

export function mediaURL(media?: MediaRelation, size?: "card" | "thumbnail" | "og"): string | undefined {
  if (!media || typeof media === "string") return undefined;
  const value = (size && media.sizes?.[size]?.url) || media.url;
  const safe = safeURL(value);
  if (!safe) return undefined;
  const cmsURL = process.env.CMS_API_URL || process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3001";
  const resolved = new URL(safe, `${cmsURL.replace(/\/api\/?$/, "").replace(/\/$/, "")}/`);
  return ["http:", "https:"].includes(resolved.protocol) ? resolved.toString() : undefined;
}

export function mediaAlt(media: MediaRelation, fallback: string): string {
  return media && typeof media === "object" ? media.alt || fallback : fallback;
}

export function richTextPlainText(content?: RichText | null): string {
  const walk = (node: RichTextNode): string => {
    if (node.text) return node.text;
    if (node.type === "linebreak") return " ";
    return (node.children || []).map(walk).join(["root", "list", "table", "tablerow"].includes(node.type) ? " " : "");
  };
  return content?.root ? walk(content.root).replace(/\s+/g, " ").trim() : "";
}

export function readingTime(doc: ContentDocument, text: string): number {
  return doc.readTime || Math.max(1, Math.ceil(text.split(/\s+/).filter(Boolean).length / 200));
}

export type ArticleCard = { title: string; description: string; category: string; image: string; imageAlt: string; href: string; readTime: string; date: string };
export function blogCard(post: BlogPost): ArticleCard {
  return {
    title: post.title,
    description: richTextPlainText(post.content).slice(0, 200) || post.excerpt || "",
    category: categoryName(post),
    image: mediaURL(post.heroImage, "card") || "/hero/blog.webp",
    imageAlt: mediaAlt(post.heroImage, post.title),
    href: `/blog/${encodeURIComponent(post.slug)}`,
    readTime: `${readingTime(post, richTextPlainText(post.content))} min read`,
    date: formatDate(post.publishedAt || post.createdAt),
  };
}
export type CaseStudyCard = { title: string; summary: string; category: string; industry: string; image: string; imageAlt: string; href: string; services: string[]; featured?: boolean };
export function caseStudyCard(study: CaseStudy): CaseStudyCard {
  return { title: study.title, summary: study.summary, category: categoryName(study), industry: study.industry,
    image: mediaURL(study.heroImage, "card") || "/hero/case-studies.webp", imageAlt: mediaAlt(study.heroImage, study.title),
    href: `/case-studies/${encodeURIComponent(study.slug)}`, services: (study.services || []).map(service => service.name), featured: study.featured };
}
export function formatDate(value: string): string {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" });
}
