import type { GroupField } from "payload";

export const seoFields: GroupField = {
  name: "seo",
  label: "SEO & Social Sharing",
  type: "group",
  admin: {
    description: "Search result and social sharing settings.",
  },
  fields: [
    {
      name: "metaTitle",
      label: "Meta Title",
      type: "text",
      maxLength: 60,
      admin: {
        components: { afterInput: ["/components/CharacterCounter#CharacterCounter"] },
        description: "Recommended length: 50–60 characters.",
      },
    },
    {
      name: "metaDescription",
      label: "Meta Description",
      type: "textarea",
      maxLength: 160,
      admin: {
        components: { afterInput: ["/components/CharacterCounter#CharacterCounter"] },
        description: "Recommended length: 120–160 characters.",
      },
    },
    {
      name: "focusKeyword",
      label: "Focus Keywords",
      type: "text",
      admin: {
        components: { Field: "/components/CommaSeparatedField#CommaSeparatedField" },
        description: "Add several search phrases at once, separated by commas.",
      },
    },
    {
      name: "canonicalURL",
      label: "Canonical URL",
      type: "text",
      admin: {
        description: "Optional. Leave blank to use the page's default URL.",
        placeholder: "https://brainadz.marketing/blog/example",
      },
      validate: (value: null | string | undefined) => {
        if (!value) return true;
        try {
          const url = new URL(value);
          return ["http:", "https:"].includes(url.protocol)
            ? true
            : "Canonical URL must use http or https.";
        } catch {
          return "Enter a valid absolute canonical URL.";
        }
      },
    },
    {
      name: "robots",
      label: "Robots Meta Tag",
      type: "select",
      defaultValue: "index, follow",
      options: ["index, follow", "index, nofollow", "noindex, follow", "noindex, nofollow"],
    },
    {
      name: "ogTitle",
      label: "OG Title",
      type: "text",
      maxLength: 60,
      admin: {
        components: { afterInput: ["/components/CharacterCounter#CharacterCounter"] },
        description: "Social title. Falls back to Meta Title.",
      },
    },
    {
      name: "ogDescription",
      label: "OG Description",
      type: "textarea",
      maxLength: 200,
      admin: {
        components: { afterInput: ["/components/CharacterCounter#CharacterCounter"] },
        description: "Social description. Falls back to Meta Description.",
      },
    },
    {
      name: "ogImage",
      label: "OG Image",
      type: "upload",
      relationTo: "media",
      admin: { description: "Recommended size: 1200 × 630 px." },
    },
    {
      name: "noIndex",
      type: "checkbox",
      defaultValue: false,
      admin: { hidden: true },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      admin: { hidden: true },
    },
  ],
};

export const blogSeoFields: GroupField = {
  ...seoFields,
  fields: seoFields.fields.map((field) =>
    field.type === "text" && field.name === "canonicalURL"
      ? {
          ...field,
          admin: {
            ...field.admin,
            readOnly: true,
            description: "Generated automatically from the blog slug when you save.",
          },
        }
      : field,
  ),
};
