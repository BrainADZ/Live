const crypto = require("node:crypto");
const fs = require("node:fs/promises");
const path = require("node:path");

const UUID =
  /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i;
const deliveries = new Map();
let flushInFlight;
let retryTimer;

const directory = () =>
  path.resolve(
    process.env.ENQUIRY_OUTBOX_DIR ||
      path.join(__dirname, "../data/enquiry-outbox"),
  );
const filename = (requestId) => {
  if (!UUID.test(requestId)) throw new Error("Invalid enquiry request ID");
  return path.join(directory(), `${requestId}.json`);
};
const writeEntry = async (file, entry) => {
  await fs.mkdir(path.dirname(file), { recursive: true, mode: 0o700 });
  const temporary = `${file}.${crypto.randomUUID()}.tmp`;
  try {
    await fs.writeFile(temporary, JSON.stringify(entry), { mode: 0o600 });
    await fs.rename(temporary, file);
  } finally {
    await fs.unlink(temporary).catch(() => {});
  }
};

const enqueueLiveEnquiry = async (payload) => {
  const file = filename(payload.requestId);
  try {
    await fs.access(file);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    await writeEntry(file, { payload, attempts: 0, nextAttemptAt: Date.now() });
  }
};

const sendToCrm = async (payload) => {
  const base = String(process.env.CRM_API_URL || "")
    .trim()
    .replace(/\/+$/, "");
  const key = process.env.WEBSITE_INGESTION_KEY || "";
  if (!base || key.length < 32) {
    throw Object.assign(
      new Error("Live enquiry CRM integration is not configured"),
      { code: "CRM_NOT_CONFIGURED" },
    );
  }
  const endpoint = new URL(`${base}/api/website-enquiries/public/live`);
  if (
    !["http:", "https:"].includes(endpoint.protocol) ||
    endpoint.username ||
    endpoint.password
  ) {
    throw Object.assign(new Error("Invalid CRM API URL"), {
      code: "CRM_INVALID_URL",
    });
  }
  const response = await fetch(endpoint.href, {
    method: "POST",
    redirect: "error",
    headers: { "Content-Type": "application/json", "X-Website-Key": key },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(12000),
  });
  const data = await response.json().catch(() => ({}));
  if (
    !response.ok ||
    typeof data.enquiryNumber !== "string" ||
    !data.enquiryNumber.startsWith("LIVE-")
  ) {
    throw Object.assign(new Error("CRM did not confirm the Live enquiry"), {
      code: "CRM_SAVE_FAILED",
      status: response.status,
    });
  }
  return data.enquiryNumber;
};

const deliverQueuedLiveEnquiry = (requestId) => {
  if (deliveries.has(requestId)) return deliveries.get(requestId);
  const delivery = (async () => {
    const file = filename(requestId);
    let entry;
    try {
      entry = JSON.parse(await fs.readFile(file, "utf8"));
    } catch (error) {
      if (error.code === "ENOENT") return { saved: true };
      throw error;
    }
    if (entry.nextAttemptAt > Date.now()) return { saved: false, queued: true };
    try {
      const enquiryNumber = await sendToCrm(entry.payload);
      await fs.unlink(file);
      return { saved: true, enquiryNumber };
    } catch (error) {
      entry.attempts += 1;
      entry.nextAttemptAt =
        Date.now() +
        Math.min(15 * 60 * 1000, 30000 * 2 ** Math.min(entry.attempts - 1, 5));
      await writeEntry(file, entry);
      console.error("Live enquiry CRM delivery queued for retry", {
        requestId,
        code: error.code || "CRM_UNAVAILABLE",
        status: error.status,
      });
      return { saved: false, queued: true };
    }
  })();
  deliveries.set(requestId, delivery);
  delivery.finally(() => deliveries.delete(requestId)).catch(() => {});
  return delivery;
};

const flushLiveEnquiries = () => {
  if (flushInFlight) return flushInFlight;
  flushInFlight = (async () => {
    let files;
    try {
      files = await fs.readdir(directory());
    } catch (error) {
      if (error.code === "ENOENT") return;
      throw error;
    }
    const ids = files
      .filter((file) => file.endsWith(".json") && UUID.test(file.slice(0, -5)))
      .map((file) => file.slice(0, -5));
    for (let index = 0; index < ids.length; index += 4) {
      const results = await Promise.allSettled(
        ids.slice(index, index + 4).map(deliverQueuedLiveEnquiry),
      );
      for (const result of results) {
        if (result.status === "rejected")
          console.error("Live enquiry outbox could not be processed", {
            code: result.reason.code || "OUTBOX_ERROR",
          });
      }
    }
  })().finally(() => {
    flushInFlight = undefined;
  });
  return flushInFlight;
};

const startLiveEnquiryRetries = () => {
  if (retryTimer) return;
  const flush = () =>
    flushLiveEnquiries().catch((error) =>
      console.error("Live enquiry outbox unavailable", {
        code: error.code || "OUTBOX_ERROR",
      }),
    );
  flush();
  retryTimer = setInterval(flush, 30000);
  retryTimer.unref();
};

module.exports = {
  enqueueLiveEnquiry,
  deliverQueuedLiveEnquiry,
  flushLiveEnquiries,
  startLiveEnquiryRetries,
};
