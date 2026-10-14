import type { CollectionConfig } from "payload";

import { authenticated, publishedOrAuthenticated } from "../access/contentAccess";
import { seoFields } from "../fields/seoFields";
import { editorLayout } from "../fields/editorLayout";
import { populateSlug } from "../hooks/formatSlug";

const categoryOptions = [
  "Digital Marketing",
  "Performance Marketing",
  "SEO",
  "Web Design & Development",
  "Creative & Media",
].map((category) => ({ label: category, value: category }));

export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  labels: { singular: "Case Study", plural: "Case Studies" },
  admin: {
    defaultColumns: ["title", "categoryRelation", "industry", "featured", "_status"],
    group: "Content",
    useAsTitle: "title",
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: publishedOrAuthenticated,
    update: authenticated,
  },
  defaultSort: "sortOrder",
  hooks: {
    beforeChange: [({ data, originalDoc }) => {
      if (data._status === "published" && !data.publishedAt && !originalDoc?.publishedAt) {
        data.publishedAt = originalDoc?._status === "published"
          ? originalDoc.createdAt
          : new Date().toISOString();
      }
      return data;
    }],
  },
  fields: editorLayout([
    { name: "title", type: "text", required: true, maxLength: 160 },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: { position: "sidebar" },
      hooks: { beforeValidate: [populateSlug] },
    },
    {
      name: "category",
      type: "select",
      options: categoryOptions,
      admin: { hidden: true },
    },
    {
      name: "categoryRelation",
      label: "Category",
      type: "relationship",
      relationTo: "case-study-categories",
      required: true,
      admin: { position: "sidebar" },
    },
    { name: "industry", type: "text", required: true, maxLength: 100, admin: { position: "sidebar" } },
    {
      name: "authorName",
      label: "Author / Byline",
      type: "text",
      defaultValue: "BrainADZ Marketing",
      maxLength: 120,
      admin: { position: "sidebar", description: "Public author name shown on the case study." },
    },
    {
      name: "publishedAt",
      type: "date",
      admin: { position: "sidebar", date: { pickerAppearance: "dayAndTime" } },
    },
    {
      name: "readTime",
      type: "number",
      min: 1,
      max: 120,
      admin: { position: "sidebar", description: "Reading time in minutes. Leave blank to estimate from content." },
    },
    { name: "featured", type: "checkbox", defaultValue: false, admin: { position: "sidebar" } },
    { name: "sortOrder", type: "number", defaultValue: 100, min: 0, admin: { position: "sidebar" } },
    { name: "summary", type: "textarea", required: true, maxLength: 420 },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: { description: "Select an image with descriptive Alt Text for accessibility and SEO." },
    },
    {
      name: "services",
      type: "array",
      required: true,
      minRows: 1,
      fields: [{ name: "name", type: "text", required: true, maxLength: 100 }],
    },
    { name: "challenge", type: "richText", required: true },
    {
      name: "approach",
      type: "array",
      required: true,
      minRows: 1,
      fields: [
        { name: "title", type: "text", required: true, maxLength: 140 },
        { name: "description", type: "textarea", required: true, maxLength: 600 },
      ],
    },
    {
      name: "beforeAfter",
      label: "Before vs After Section",
      type: "group",
      admin: { description: "Optional comparison section, displayed after Approach." },
      fields: [
        { name: "title", label: "Section Title", type: "text", maxLength: 160 },
        { name: "description", type: "textarea" },
        {
          name: "items",
          label: "Comparisons",
          type: "array",
          fields: [
            { name: "label", type: "text", required: true },
            { name: "beforeValue", label: "Before Value", type: "text", required: true },
            { name: "afterValue", label: "After Value", type: "text", required: true },
          ],
        },
      ],
    },
    {
      name: "results",
      type: "array",
      fields: [
        { name: "value", type: "text", required: true, maxLength: 40 },
        { name: "label", type: "text", required: true, maxLength: 120 },
      ],
    },
    {
      name: "performanceEvidence",
      label: "Performance Evidence Section",
      type: "group",
      admin: { description: "Optional supporting images, displayed after Results." },
      fields: [
        { name: "title", label: "Section Title", type: "text", maxLength: 160 },
        { name: "description", type: "textarea" },
        {
          name: "images",
          type: "array",
          fields: [
            { name: "image", type: "upload", relationTo: "media", required: true },
            { name: "altText", label: "Alt Text", type: "text", required: true, maxLength: 240 },
            { name: "caption", type: "textarea" },
          ],
        },
      ],
    },
    {
      name: "finalOutcome",
      label: "Final Outcome Section",
      type: "group",
      admin: { description: "Optional closing summary, displayed before the shared site CTA." },
      fields: [
        { name: "title", type: "text", maxLength: 160 },
        { name: "description", type: "richText" },
      ],
    },
    seoFields,
  ]),
  versions: {
    drafts: {
      autosave: { interval: 30000 },
      schedulePublish: true,
    },
    maxPerDoc: 25,
  },
};
