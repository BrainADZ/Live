import type { CollectionAfterReadHook, CollectionBeforeChangeHook } from "payload";

import { formatSlug } from "./formatSlug";

const tagNames = (value: string): string[] =>
  [...new Map(value.split(",").map((item) => item.trim()).filter(Boolean).map((item) => [item.toLowerCase(), item])).values()];

export const prepareBlogFields: CollectionBeforeChangeHook = async ({ data, originalDoc, req }) => {
  const slug = formatSlug(data.slug || originalDoc?.slug || data.title);
  if (slug && !slug.startsWith("draft-")) {
    data.seo = { ...(originalDoc?.seo || {}), ...(data.seo || {}), canonicalURL: `${(process.env.CLIENT_URL || "https://brainadzlive.com").replace(/\/$/, "")}/blog/${slug}` };
  }

  if (typeof data.tagsText !== "string") return data;

  const ids: Array<number | string> = [];
  for (const title of tagNames(data.tagsText)) {
    const tagSlug = formatSlug(title);
    if (!tagSlug) continue;
    const existing = await req.payload.find({
      collection: "tags",
      where: { slug: { equals: tagSlug } },
      depth: 0,
      limit: 1,
      overrideAccess: true,
      req,
    });
    if (existing.docs[0]) {
      ids.push(existing.docs[0].id);
      continue;
    }
    try {
      const created = await req.payload.create({
        collection: "tags",
        data: { title, slug: tagSlug },
        overrideAccess: true,
        req,
      });
      ids.push(created.id);
    } catch (error) {
      // Another save may have created the same tag at the same time.
      const match = await req.payload.find({
        collection: "tags",
        where: { slug: { equals: tagSlug } },
        depth: 0,
        limit: 1,
        overrideAccess: true,
        req,
      });
      if (!match.docs[0]) throw error;
      ids.push(match.docs[0].id);
    }
  }
  data.tags = ids;
  return data;
};

export const populateBlogTagNames: CollectionAfterReadHook = async ({ doc, req }) => {
  const tags = Array.isArray(doc.tags) ? doc.tags : [];
  const titles = await Promise.all(tags.map(async (tag: unknown) => {
    if (tag && typeof tag === "object" && "title" in tag && typeof tag.title === "string") return tag.title;
    const id = tag && typeof tag === "object" && "id" in tag ? tag.id : tag;
    if (typeof id !== "string" && typeof id !== "number") return null;
    try {
      const found = await req.payload.findByID({ collection: "tags", id, depth: 0, overrideAccess: true, req });
      return found?.title || null;
    } catch {
      return null;
    }
  }));
  doc.tagsText = titles.filter(Boolean).join(", ");
  return doc;
};
