const crypto = require("crypto");

const DEMO_TYPES = ["erp", "crm", "pos", "hospitality", "software"];
const COMPANY_SIZES = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501+ employees",
];
const normalize = (value, limit) =>
  typeof value === "string" ? value.trim().slice(0, limit) : "";
const requestError = (status, message, code) =>
  Object.assign(new Error(message), { status, code });

const normalizeDemoRequest = (body = {}) => {
  const fields = {
    requestId: normalize(body.requestId, 80),
    demoType: normalize(body.demoType || "software", 30),
    name: normalize(body.name, 100),
    companyName: normalize(body.companyName, 200),
    email: normalize(body.email, 254).toLowerCase(),
    phone: normalize(body.phone, 30),
    companySize: normalize(body.companySize, 50),
    requirements: normalize(body.requirements, 4000),
    pageUrl: normalize(body.pageUrl, 2048),
    campaign: Object.fromEntries(
      [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
        "gclid",
      ].map((key) => [key, normalize(body.campaign?.[key], 500)]),
    ),
  };
  if (
    !/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(
      fields.requestId,
    )
  ) {
    throw requestError(
      400,
      "Please refresh the page and submit the form again.",
      "INVALID_REQUEST_ID",
    );
  }
  if (
    !fields.name ||
    !fields.companyName ||
    !fields.email ||
    !fields.phone ||
    !fields.requirements ||
    !COMPANY_SIZES.includes(fields.companySize) ||
    !DEMO_TYPES.includes(fields.demoType)
  ) {
    throw requestError(
      400,
      "Please complete all required demo fields.",
      "INVALID_FIELDS",
    );
  }
  if (/[0-9]/.test(fields.companyName))
    throw requestError(
      400,
      "Company name cannot contain numbers.",
      "INVALID_COMPANY_NAME",
    );
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    throw requestError(
      400,
      "Please enter a valid email address.",
      "INVALID_EMAIL",
    );
  if (
    !/^\+?[\d\s().-]+$/.test(fields.phone) ||
    !/^\d{7,15}$/.test(fields.phone.replace(/\D/g, ""))
  )
    throw requestError(
      400,
      "Please enter a valid phone number.",
      "INVALID_PHONE",
    );
  if (fields.pageUrl && !/^https?:\/\//i.test(fields.pageUrl))
    fields.pageUrl = "";
  return fields;
};

const escapeHtml = (value = "") =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character],
  );

const getDemoUrl = (demoType) => {
  const urls = {
    erp: process.env.ERP_DEMO_URL || "https://erp.brainadzlive.in/",
    crm: process.env.CRM_DEMO_URL || "https://democrm.brainadzlive.in/",
    pos: process.env.POS_DEMO_URL || "https://posbadz.onrender.com/",
    hospitality:
      process.env.HOSPITALITY_DEMO_URL || "https://brainadzlive.com/demos",
    software: process.env.SOFTWARE_DEMO_URL || "https://brainadzlive.com/demos",
  };
  const url = new URL(urls[demoType]);
  if (
    !["https:", "http:"].includes(url.protocol) ||
    url.username ||
    url.password
  )
    throw requestError(
      503,
      "Demo access is temporarily unavailable. Please try again later.",
      "INVALID_DEMO_URL",
    );
  return url.href;
};

const syncDemoRequest = async (requestId, payload) => {
  const baseUrl = String(process.env.CRM_API_URL || "").replace(/\/+$/, "");
  const key = process.env.WEBSITE_INGESTION_KEY || "";
  if (!baseUrl || key.length < 32)
    throw requestError(
      503,
      "Demo requests are temporarily unavailable. Please try again shortly.",
      "CRM_NOT_CONFIGURED",
    );
  const response = await fetch(
    `${baseUrl}/api/demo-requests/ingest${requestId ? `/${encodeURIComponent(requestId)}` : ""}`,
    {
      method: requestId ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json", "X-Website-Key": key },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(12000),
    },
  );
  const data = await response.json().catch(() => ({}));
  if (!response.ok)
    throw requestError(
      response.status === 409 ? 409 : 503,
      "Unable to save your demo request. Please try again.",
      "CRM_SYNC_FAILED",
    );
  return data;
};

const generatePassword = () => {
  const groups = [
    "ABCDEFGHJKLMNPQRSTUVWXYZ",
    "abcdefghijkmnopqrstuvwxyz",
    "23456789",
    "!@#$%",
  ];
  const characters = groups.map(
    (group) => group[crypto.randomInt(group.length)],
  );
  const all = groups.join("");
  while (characters.length < 16)
    characters.push(all[crypto.randomInt(all.length)]);
  for (let index = characters.length - 1; index > 0; index -= 1) {
    const swap = crypto.randomInt(index + 1);
    [characters[index], characters[swap]] = [
      characters[swap],
      characters[index],
    ];
  }
  return characters.join("");
};

module.exports = {
  normalizeDemoRequest,
  escapeHtml,
  getDemoUrl,
  syncDemoRequest,
  generatePassword,
  requestError,
};
