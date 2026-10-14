import type { Field } from "payload";

/** Unnamed tabs organize the editor without changing stored field paths. */
export function editorLayout(fields: Field[]): Field[] {
  const sidebar = fields.filter((field) => field.admin?.position === "sidebar");
  const main = fields.filter((field) => field.admin?.position !== "sidebar");
  const seo = main.filter((field) => "name" in field && field.name === "seo");
  const content = main.filter((field) => !("name" in field && field.name === "seo"));

  return [
    {
      type: "tabs",
      tabs: [
        { label: "Content", description: "Write your story and choose its images.", fields: content },
        { label: "SEO & Social", description: "Control search results and social sharing previews.", fields: seo },
      ],
    },
    ...sidebar,
  ];
}
