import assert from "node:assert/strict";
import test from "node:test";

import { populateSlug } from "../hooks/formatSlug.ts";

test("successive blank drafts receive different nonempty slugs", () => {
  const first = populateSlug({ data: {}, operation: "create" });
  const second = populateSlug({ data: {}, operation: "create" });
  assert.match(first, /^draft-/);
  assert.notEqual(first, second);
});

test("a draft gets its readable slug when a title is entered", () => {
  const value = populateSlug({ data: {}, operation: "create" });
  assert.equal(populateSlug({ data: { title: "Our Second Case Study" }, operation: "update", value }), "our-second-case-study");
});

test("custom slugs are preserved, including draft-prefixed titles", () => {
  assert.equal(populateSlug({ data: { title: "New title" }, operation: "update", value: "draft-guide" }), "draft-guide");
});

test("a published document does not receive a temporary slug", () => {
  assert.equal(populateSlug({ data: { _status: "published" }, operation: "create", value: "" }), "");
});
