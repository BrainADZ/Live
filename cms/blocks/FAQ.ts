import type { Block } from "payload";

export const FAQBlock: Block = {
  slug: "faq",
  labels: { singular: "FAQ Accordion", plural: "FAQ Accordions" },
  fields: [
    { name: "heading", type: "text", defaultValue: "Frequently Asked Questions", maxLength: 120 },
    {
      name: "items",
      type: "array",
      required: true,
      minRows: 1,
      fields: [
        { name: "question", type: "text", required: true, maxLength: 220 },
        { name: "answer", type: "textarea", required: true, maxLength: 1500 },
      ],
    },
  ],
};
