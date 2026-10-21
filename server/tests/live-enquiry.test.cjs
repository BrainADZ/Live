const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const crypto = require("node:crypto");
const { createRequire } = require("node:module");
const vm = require("node:vm");

test("Live CRM outbox persists, retries and sends each queued request once", async (t) => {
  const folder = await fs.mkdtemp(path.join(os.tmpdir(), "live-enquiry-test-"));
  const previousEnv = { ...process.env };
  const previousFetch = global.fetch;
  Object.assign(process.env, {
    ENQUIRY_OUTBOX_DIR: folder,
    CRM_API_URL: "https://crm.example.test",
    WEBSITE_INGESTION_KEY: "test-key-".repeat(8),
  });
  t.after(async () => {
    global.fetch = previousFetch;
    process.env = previousEnv;
    for (const file of await fs.readdir(folder))
      await fs.unlink(path.join(folder, file));
    await fs.rmdir(folder);
  });
  let service = require("../service/liveEnquiryService");
  let attempts = 0;
  const payload = {
    requestId: crypto.randomUUID(),
    name: "Visitor",
    email: "visitor@example.test",
    phone: "+91 9999999999",
    company: "Example",
    serviceCategory: "Software Services",
    service: "ERP Development",
    message: "Need ERP",
    pageUrl: "https://brainadzlive.com/contact-us",
  };
  global.fetch = async (url, options) => {
    attempts += 1;
    assert.equal(
      url,
      "https://crm.example.test/api/website-enquiries/public/live",
    );
    assert.equal(
      options.headers["X-Website-Key"],
      process.env.WEBSITE_INGESTION_KEY,
    );
    assert.equal(JSON.parse(options.body).serviceCategory, "Software Services");
    return {
      ok: true,
      status: 201,
      json: async () => ({ enquiryNumber: "LIVE-00001" }),
    };
  };
  await service.enqueueLiveEnquiry(payload);
  assert.equal((await fs.readdir(folder)).length, 1);
  const results = await Promise.all([
    service.deliverQueuedLiveEnquiry(payload.requestId),
    service.deliverQueuedLiveEnquiry(payload.requestId),
  ]);
  assert.ok(results.every((result) => result.saved));
  assert.equal(attempts, 1);
  assert.equal((await fs.readdir(folder)).length, 0);

  const retry = { ...payload, requestId: crypto.randomUUID() };
  global.fetch = async () => {
    throw new Error("CRM offline");
  };
  await service.enqueueLiveEnquiry(retry);
  assert.equal(
    (await service.deliverQueuedLiveEnquiry(retry.requestId)).queued,
    true,
  );
  const retryFile = path.join(folder, `${retry.requestId}.json`);
  const queued = JSON.parse(await fs.readFile(retryFile, "utf8"));
  assert.equal(queued.attempts, 1);
  assert.equal(queued.payload.requestId, retry.requestId);
  queued.nextAttemptAt = 0;
  await fs.writeFile(retryFile, JSON.stringify(queued));
  delete require.cache[require.resolve("../service/liveEnquiryService")];
  service = require("../service/liveEnquiryService");
  global.fetch = async () => ({
    ok: true,
    status: 200,
    json: async () => ({ enquiryNumber: "LIVE-00002", duplicate: true }),
  });
  await service.flushLiveEnquiries();
  assert.equal((await fs.readdir(folder)).length, 0);
  await assert.rejects(
    service.enqueueLiveEnquiry({ requestId: "../../outside" }),
    /Invalid/,
  );
});

test("existing enquiry emails and Live CRM delivery share the same submission", async (t) => {
  const previousEnv = { ...process.env };
  process.env.ENQUIRY_EMAIL_1 = "sales@example.test";
  process.env.ENQUIRY_EMAIL_2 = "team@example.test";
  t.after(() => {
    process.env = previousEnv;
  });
  const filename = path.resolve(
    __dirname,
    "../controllers/mailerController.js",
  );
  const realRequire = createRequire(filename);
  const mail = [];
  const queued = [];
  let failMail = false;
  let crmQueued = false;
  const stubs = {
    "../service/mailerService": {
      sendMail: async (message) => {
        if (failMail) throw new Error("SMTP offline");
        mail.push(message);
      },
    },
    "../service/liveEnquiryService": {
      enqueueLiveEnquiry: async (payload) => {
        queued.push(payload);
      },
      deliverQueuedLiveEnquiry: async () => ({
        saved: !crmQueued,
        queued: crmQueued,
      }),
    },
  };
  const context = {
    require: (name) => stubs[name] || realRequire(name),
    module: { exports: {} },
    process,
    console: { error() {} },
  };
  vm.runInNewContext(await fs.readFile(filename, "utf8"), context, {
    filename,
  });
  const submit = async (body) => {
    const response = {
      set() {
        return this;
      },
      status(code) {
        this.code = code;
        return this;
      },
      json(value) {
        this.body = value;
        return this;
      },
    };
    await context.module.exports.sendEnquireNow({ body }, response);
    return response;
  };
  const fields = {
    name: "Visitor <One>",
    email: "visitor@example.test",
    phone: "9876543210",
    company: "Example & Co",
    solution: "Software Platforms",
    service: "ERP",
    message: "Need inventory & accounts",
    pageUrl: "https://brainadzlive.com/contact-us",
  };
  const results = await Promise.all([submit(fields), submit(fields)]);
  assert.ok(results.every((response) => response.code === 200));
  assert.equal(mail.length, 1);
  assert.equal(queued.length, 1);
  assert.equal(queued[0].company, fields.company);
  assert.equal(queued[0].serviceCategory, fields.solution);
  assert.equal(queued[0].message, fields.message);
  assert.equal(queued[0].phone, "+91 9876543210");
  assert.equal(mail[0].to, "sales@example.test, team@example.test");
  assert.match(mail[0].html, /Visitor &lt;One&gt;/);

  crmQueued = true;
  const deferred = await submit({ ...fields, email: "deferred@example.test" });
  assert.equal(deferred.code, 200);
  assert.equal(deferred.body.crmQueued, true);
  assert.equal(mail.length, 2);

  failMail = true;
  const failedFields = { ...fields, email: "retry@example.test" };
  assert.equal((await submit(failedFields)).code, 500);
  const requestId = queued.at(-1).requestId;
  failMail = false;
  assert.equal((await submit(failedFields)).code, 200);
  assert.equal(queued.at(-1).requestId, requestId);
  const before = queued.length;
  assert.equal((await submit({ ...fields, phone: "invalid" })).code, 400);
  assert.equal(queued.length, before);
});
