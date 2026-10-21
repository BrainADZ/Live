const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

const filename = path.join(__dirname, "../lib/metaPixel.ts");
const source = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020,
  },
}).outputText;

const REQUEST_ID = "a8228842-6230-45d8-8d15-d6b209ceef61";
const PENDING_KEY = "brainadz:erp-demo-lead";

const fixture = () => {
  const calls = [];
  const storage = new Map();
  const browser = {
    fbq: (...args) => calls.push(args),
    sessionStorage: {
      getItem: (key) => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, value),
      removeItem: (key) => storage.delete(key),
    },
  };
  const api = {};
  vm.runInNewContext(source, { exports: api, window: browser, Date });
  return { api, browser, calls, storage };
};

test("the supplied pixel initializes once and loads the official SDK once", () => {
  const { api } = fixture();
  const inserted = [];
  const sandbox = {
    document: {
      createElement: () => ({}),
      getElementsByTagName: () => [
        {
          parentNode: { insertBefore: (element) => inserted.push(element) },
        },
      ],
    },
  };
  sandbox.window = sandbox;
  vm.runInNewContext(api.META_PIXEL_BASE_CODE, sandbox);
  vm.runInNewContext(api.META_PIXEL_BASE_CODE, sandbox);
  assert.equal(inserted.length, 1);
  assert.equal(
    inserted[0].src,
    "https://connect.facebook.net/en_US/fbevents.js",
  );
  assert.equal(sandbox.fbq.queue.length, 1);
  assert.deepEqual(Array.from(sandbox.fbq.queue[0]), [
    "init",
    "1114302264165671",
  ]);
});

test("successful requests defer Lead until the thank-you screen, with no form data", () => {
  const { api, calls, storage } = fixture();
  api.prepareErpDemoLead(REQUEST_ID);
  assert.equal(calls.length, 0);
  assert.deepEqual(Object.keys(JSON.parse(storage.get(PENDING_KEY))).sort(), [
    "createdAt",
    "requestId",
  ]);
  assert.equal(api.trackErpPageView(), true);
  assert.equal(api.consumeErpDemoLead(), true);
  assert.equal(calls[0][1], "PageView");
  assert.equal(calls[1][0], "track");
  assert.equal(calls[1][1], "Lead");
  assert.deepEqual(Object.keys(calls[1][2]).sort(), [
    "content_category",
    "content_name",
  ]);
  assert.equal(calls[1][3].eventID, REQUEST_ID);
});

test("refreshing or directly opening thank-you does not create another Lead", () => {
  const { api, calls } = fixture();
  assert.equal(api.consumeErpDemoLead(), false);
  api.prepareErpDemoLead(REQUEST_ID);
  assert.equal(api.consumeErpDemoLead(), true);
  assert.equal(api.consumeErpDemoLead(), false);
  assert.equal(calls.filter((call) => call[1] === "Lead").length, 1);
});

test("stale, malformed and invalid pending conversions cannot send a Lead", () => {
  const { api, calls, storage } = fixture();
  for (const pending of [
    { requestId: REQUEST_ID, createdAt: Date.now() - 31 * 60 * 1000 },
    { requestId: REQUEST_ID, createdAt: Date.now() + 60 * 1000 },
    { requestId: "not-a-request", createdAt: Date.now() },
    { requestId: REQUEST_ID },
  ]) {
    storage.set(PENDING_KEY, JSON.stringify(pending));
    assert.equal(api.consumeErpDemoLead(), false);
  }
  storage.set(PENDING_KEY, "malformed JSON");
  assert.equal(api.consumeErpDemoLead(), false);
  api.prepareErpDemoLead("not-a-request");
  assert.equal(calls.length, 0);
});

test("blocked storage falls back to the success event without breaking submission", () => {
  const { api, browser, calls } = fixture();
  browser.sessionStorage.setItem = () => {
    throw new Error("Storage blocked");
  };
  browser.sessionStorage.getItem = () => {
    throw new Error("Storage blocked");
  };
  assert.doesNotThrow(() => api.prepareErpDemoLead(REQUEST_ID));
  assert.equal(calls.filter((call) => call[1] === "Lead").length, 1);
  assert.equal(api.consumeErpDemoLead(), false);
});

test("SDK failures never break the form or consume a pending conversion", () => {
  const { api, browser, storage } = fixture();
  api.prepareErpDemoLead(REQUEST_ID);
  browser.fbq = () => {
    throw new Error("SDK blocked");
  };
  assert.equal(api.trackErpPageView(), false);
  assert.equal(api.consumeErpDemoLead(), false);
  assert.ok(storage.has(PENDING_KEY));
  browser.fbq = undefined;
  assert.equal(api.trackErpPageView(), false);
  assert.equal(api.consumeErpDemoLead(), false);
});

test("tracking helpers are safe during server rendering", () => {
  const api = {};
  vm.runInNewContext(source, { exports: api, Date });
  assert.equal(api.trackErpPageView(), false);
  assert.equal(api.consumeErpDemoLead(), false);
  assert.doesNotThrow(() => api.prepareErpDemoLead(REQUEST_ID));
});
