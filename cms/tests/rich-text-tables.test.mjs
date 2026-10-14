import assert from "node:assert/strict";
import test from "node:test";
import { Window } from "happy-dom";

// Exercise Lexical's real clipboard importer using the editors from Payload's
// sanitized config. No database connection or content writes are needed.
const browser = new Window();
for (const key of ["window", "document", "DOMParser", "HTMLElement", "Node", "DocumentFragment"]) {
  globalThis[key] = key === "window" ? browser : browser[key];
}
process.env.PAYLOAD_SECRET ||= "table-editor-regression-test";
const { default: configPromise } = await import("../payload.config.ts");
const config = await configPromise;
const { createHeadlessEditor } = await import("@payloadcms/richtext-lexical/lexical/headless");
const { $getRoot } = await import("@payloadcms/richtext-lexical/lexical");
const { $insertDataTransferForRichText } = await import("@lexical/clipboard");

function findRichText(fields, name) {
  for (const field of fields) {
    if (field.type === "richText" && field.name === name) return field;
    const found = field.fields && findRichText(field.fields, name);
    if (found) return found;
    for (const tab of field.tabs || []) {
      const foundInTab = findRichText(tab.fields, name);
      if (foundInTab) return foundInTab;
    }
  }
}

const blog = config.collections.find((collection) => collection.slug === "blog-posts");
const caseStudies = config.collections.find((collection) => collection.slug === "case-studies");
const fields = [
  findRichText(blog.fields, "content"),
  findRichText(caseStudies.fields, "challenge"),
  findRichText(caseStudies.fields, "description"),
];

for (const field of fields) {
  test(`${field.name}: copied HTML table survives paste and editor-state reload`, () => {
    const nodes = field.editor.editorConfig.features.nodes.map((entry) => entry.node);
    for (const type of ["table", "tablerow", "tablecell"]) {
      assert.ok(nodes.some((node) => node.getType() === type), `Missing ${type}`);
    }
    const editor = createHeadlessEditor({ nodes, onError: (error) => { throw error; } });
    const clipboard = new browser.DataTransfer();
    clipboard.setData("text/html", `
      <table>
        <thead><tr><th colspan="2"><p><strong>Results</strong></p></th></tr></thead>
        <tbody>
          <tr><td rowspan="2"><p>Leads</p></td><td><p>120</p></td></tr>
          <tr><td><p>240</p></td></tr>
        </tbody>
      </table>
    `);
    clipboard.setData("text/plain", "Results\nLeads\t120\n\t240");
    editor.update(() => {
      $insertDataTransferForRichText(clipboard, $getRoot().selectEnd(), editor);
    }, { discrete: true });

    const saved = editor.getEditorState().toJSON();
    const table = saved.root.children.find((node) => node.type === "table");
    assert.ok(table, "Paste must produce a table instead of flattened paragraphs");
    assert.equal(table.children.length, 3);
    assert.equal(table.children[0].children[0].headerState, 1);
    assert.equal(table.children[0].children[0].colSpan, 2);
    assert.equal(table.children[1].children[0].rowSpan, 2);
    assert.match(JSON.stringify(table), /"text":"240"/);

    editor.setEditorState(editor.parseEditorState(JSON.stringify(saved)));
    assert.deepEqual(editor.getEditorState().toJSON(), saved);
  });
}
