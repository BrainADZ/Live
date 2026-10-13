import type { FieldHook } from "payload";
import { randomUUID } from "node:crypto";

export const formatSlug = (value: unknown): string =>
  String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const populateSlug: FieldHook = ({ data, operation, value }) => {
  const titleSlug = formatSlug(data?.title);
  const isTemporary = typeof value === "string" && /^draft-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(value);

  if (isTemporary && titleSlug) {
    return titleSlug;
  }

  if (typeof value === "string" && value.trim()) {
    return formatSlug(value);
  }

  if (titleSlug) {
    return titleSlug;
  }

  if (operation === "create" && data?._status !== "published") {
    return `draft-${randomUUID()}`;
  }

  return value;
};
