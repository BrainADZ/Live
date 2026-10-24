const { test } = require("node:test");
const assert = require("node:assert/strict");
const { randomUUID } = require("node:crypto");

// Stub SMTP before loading the controller. These tests never send real emails.
const mailPath = require.resolve("../service/mailerService");
const messages = [];
let rejectMail = false;
require.cache[mailPath] = {
  id: mailPath,
  filename: mailPath,
  loaded: true,
  exports: {
    sendMail: async (mail) => {
      if (rejectMail) throw new Error("SMTP unavailable");
      messages.push(mail);
    },
  },
};
const { submitDemoRequest } = require("../controllers/demoRequestController");
const { normalizeDemoRequest } = require("../service/demoRequestService");

const fields = (overrides = {}) => ({
  requestId: randomUUID(),
  demoType: "erp",
  name: "Test <Visitor>",
  companyName: "Example & Company",
  email: "visitor@example.com",
  phone: "+91 98765 43210",
  location: "New Delhi",
  companySize: "11-50 employees",
  requirements: "Inventory and accounts",
  ...overrides,
});

const submit = async (body) => {
  const res = {
    statusCode: 200,
    set() {
      return this;
    },
    status(value) {
      this.statusCode = value;
      return this;
    },
    json(value) {
      this.body = value;
      return this;
    },
  };
  await submitDemoRequest({ body }, res);
  return res;
};

test("demo submission, delivery and retry behavior", async (t) => {
  const originalFetch = global.fetch;
  const originalEnv = { ...process.env };
  Object.assign(process.env, {
    CRM_API_URL: "https://crm-api.example.test",
    WEBSITE_INGESTION_KEY: "test-key-".repeat(8),
    ERP_API_URL: "https://erp-api.example.test",
    ERP_DEMO_PROVISION_KEY: "erp-key-".repeat(8),
    ERP_DEMO_URL: "https://erp.example.test",
    CRM_DEMO_URL: "https://crm.example.test",
    ENQUIRY_EMAIL_1: "",
    ENQUIRY_EMAIL_2: "",
  });
  let provisionCalls = [];
  let crmRequests = [];
  let tracking = [];
  let provisioningStatus = 201;
  let crmAvailable = true;
  let alreadySent = false;
  let trackingAvailable = true;
  global.fetch = async (url, options) => {
    if (url.includes("/api/demo/provision")) {
      provisionCalls.push(JSON.parse(options.body));
      return {
        ok: provisioningStatus < 400,
        status: provisioningStatus,
        json: async () => ({}),
      };
    }
    assert.equal(
      options.headers["X-Website-Key"],
      process.env.WEBSITE_INGESTION_KEY,
    );
    if (!crmAvailable || (options.method === "PATCH" && !trackingAvailable)) {
      return { ok: false, status: 503, json: async () => ({}) };
    }
    if (options.method === "PATCH") tracking.push(JSON.parse(options.body));
    if (options.method === "POST") crmRequests.push(JSON.parse(options.body));
    return {
      ok: true,
      status: 200,
      json: async () => ({
        request: { deliveryStatus: alreadySent ? "sent" : "pending" },
      }),
    };
  };
  t.after(() => {
    global.fetch = originalFetch;
    process.env = originalEnv;
  });
  t.beforeEach(() => {
    messages.length = 0;
    provisionCalls = [];
    crmRequests = [];
    tracking = [];
    rejectMail = false;
    provisioningStatus = 201;
    crmAvailable = true;
    alreadySent = false;
    trackingAvailable = true;
  });

  await t.test(
    "new ERP credentials go only to email, then thank-you",
    async () => {
      const result = await submit(fields());
      assert.equal(result.statusCode, 201);
      assert.equal(result.body.thankYouUrl, "/thank-you");
      assert.equal(result.body.redirectUrl, undefined);
      assert.equal(messages.length, 1);
      assert.deepEqual(Object.keys(provisionCalls[0]).sort(), [
        "email",
        "name",
        "password",
      ]);
      assert.equal(crmRequests[0].companyName, "Example & Company");
      assert.equal(crmRequests[0].location, "New Delhi");
      assert.match(messages[0].html, /Test &lt;Visitor&gt;/);
      assert.match(messages[0].html, /Login ID/);
      const password = provisionCalls[0].password;
      assert.equal(password.length, 16);
      assert.ok(!JSON.stringify(result.body).includes(password));
      assert.ok(!JSON.stringify(tracking).includes(password));
      assert.equal(tracking[0].deliveryStatus, "sent");
    },
  );
  await t.test("a link demo does not provision an ERP account", async () => {
    const result = await submit(fields({ demoType: "crm" }));
    assert.equal(result.statusCode, 201);
    assert.equal(provisionCalls.length, 0);
    assert.match(messages[0].html, /https:\/\/crm.example.test/);
    assert.ok(!messages[0].html.includes("<strong>Password:"));
  });
  await t.test(
    "concurrent duplicate submissions provision and email once",
    async () => {
      const body = fields();
      const results = await Promise.all([submit(body), submit(body)]);
      assert.ok(results.every((result) => result.statusCode === 201));
      assert.equal(provisionCalls.length, 1);
      assert.equal(messages.length, 1);
      const changed = await submit({ ...body, companyName: "Another company" });
      assert.equal(changed.statusCode, 409);
    },
  );
  await t.test(
    "already emailed requests stay idempotent after cache misses",
    async () => {
      alreadySent = true;
      assert.equal((await submit(fields())).statusCode, 201);
      assert.equal(messages.length, 0);
      assert.equal(provisionCalls.length, 0);
    },
  );
  await t.test(
    "failed SMTP retries reuse newly created credentials",
    async () => {
      const body = fields();
      rejectMail = true;
      assert.equal((await submit(body)).statusCode, 503);
      assert.equal(tracking[0].deliveryStatus, "failed");
      const password = provisionCalls[0].password;
      rejectMail = false;
      assert.equal((await submit(body)).statusCode, 201);
      assert.equal(provisionCalls.length, 1);
      const escaped = require("../service/demoRequestService").escapeHtml(
        password,
      );
      assert.ok(messages[0].html.includes(escaped));
    },
  );
  await t.test(
    "existing accounts receive existing-account instructions",
    async () => {
      provisioningStatus = 409;
      assert.equal((await submit(fields())).statusCode, 201);
      assert.match(messages[0].html, /already exists/);
      assert.ok(!messages[0].html.includes("<strong>Password:"));
    },
  );
  await t.test("CRM failure does not provision or email", async () => {
    crmAvailable = false;
    assert.equal((await submit(fields())).statusCode, 503);
    assert.equal(provisionCalls.length, 0);
    assert.equal(messages.length, 0);
  });
  await t.test(
    "ERP failure is tracked without sending false access details",
    async () => {
      provisioningStatus = 502;
      assert.equal((await submit(fields())).statusCode, 502);
      assert.equal(messages.length, 0);
      assert.equal(tracking[0].deliveryStatus, "failed");
    },
  );
  await t.test(
    "tracking outage after SMTP acceptance still succeeds",
    async () => {
      trackingAvailable = false;
      assert.equal((await submit(fields())).statusCode, 201);
      assert.equal(messages.length, 1);
    },
  );
  await t.test(
    "removed fields are unnecessary and cannot enter the payload",
    async () => {
      const result = normalizeDemoRequest(
        fields({
          industry: "Ignored",
          companyWebsite: "ignored",
          password: "ignored",
        }),
      );
      assert.equal(result.industry, undefined);
      assert.equal(result.companyWebsite, undefined);
      assert.equal(result.password, undefined);
      assert.throws(
        () => normalizeDemoRequest(fields({ companyName: " " })),
        /required/,
      );
      assert.throws(
        () => normalizeDemoRequest(fields({ companyName: "Example123" })),
        /cannot contain numbers/,
      );
      assert.throws(
        () => normalizeDemoRequest(fields({ companyName: "Example१२३" })),
        /cannot contain numbers/,
      );
      assert.throws(
        () => normalizeDemoRequest(fields({ location: " " })),
        /required/,
      );
      assert.throws(
        () => normalizeDemoRequest(fields({ phone: "nope" })),
        /phone/,
      );
    },
  );
});
