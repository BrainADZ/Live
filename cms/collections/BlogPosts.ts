import type { CollectionConfig } from "payload";
import { BlocksFeature, lexicalEditor } from "@payloadcms/richtext-lexical";

import { authenticated, publishedOrAuthenticated } from "../access/contentAccess";
import { FAQBlock } from "../blocks/FAQ";
import { blogSeoFields } from "../fields/seoFields";
import { editorLayout } from "../fields/editorLayout";
import { populateSlug } from "../hooks/formatSlug";
import { populateBlogTagNames, prepareBlogFields } from "../hooks/blogFields";

export const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  labels: {
    singular: "Blog Post",
    plural: "Blog Posts",
  },
  admin: {
    defaultColumns: ["title", "categoryRelation", "publishedAt", "_status"],
    group: "Content",
    useAsTitle: "title",
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: publishedOrAuthenticated,
    update: authenticated,
  },
  defaultSort: "-publishedAt",
  hooks: {
    beforeChange: [prepareBlogFields],
    afterRead: [async ({ doc, req }) => {
      // Expose only the byline; user accounts remain private.
      const authorID = typeof doc.author === "object" ? doc.author?.id : doc.author;
      if (authorID) {
        try {
          const author = await req.payload.findByID({
            collection: "users",
            id: authorID,
            select: { name: true },
            depth: 0,
            overrideAccess: true,
            req,
          });
          doc.authorName = author?.name || null;
        } catch {
          // A missing author must not break the public article response.
          doc.authorName = null;
        }
      }
      return doc;
    }, populateBlogTagNames],
  },
  fields: editorLayout([
    {
      name: "title",
      type: "text",
      required: true,
      maxLength: 140,
    },
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
      type: "text",
      maxLength: 80,
      admin: { hidden: true },
    },
    {
      name: "categoryRelation",
      label: "Category",
      type: "relationship",
      relationTo: "blog-categories",
      required: true,
      admin: { position: "sidebar" },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      maxDepth: 0,
      required: true,
      admin: { position: "sidebar" },
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
      admin: { hidden: true },
    },
    {
      name: "tagsText",
      label: "Tags",
      type: "text",
      admin: {
        position: "sidebar",
        components: { Field: "/components/CommaSeparatedField#CommaSeparatedField" },
      },
    },
    {
      name: "publishedAt",
      type: "date",
      required: true,
      defaultValue: () => new Date().toISOString(),
      admin: { date: { pickerAppearance: "dayAndTime" }, position: "sidebar" },
    },
    {
      name: "readTime",
      type: "number",
      min: 1,
      max: 120,
      defaultValue: 5,
      admin: { description: "Estimated reading time in minutes.", position: "sidebar" },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: { position: "sidebar", description: "Mark this post as a featured editorial pick. The current blog page lists posts by date and does not use this flag for placement." },
    },
    {
      name: "excerpt",
      type: "textarea",
      admin: { description: "Optional article introduction. Blog cards show the first 200 characters of Content instead." },
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: { description: "Select an image with descriptive Alt Text for accessibility and SEO." },
    },
    {
      name: "content",
      type: "richText",
      required: true,
      admin: { description: "Write the article here. Uploaded images and heading levels appear on the website as entered." },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          BlocksFeature({ blocks: [FAQBlock] }),
        ],
      }),
    },
    blogSeoFields,
  ]),
  versions: {
    drafts: {
      autosave: { interval: 30000 },
      schedulePublish: true,
    },
    maxPerDoc: 25,
  },
};
