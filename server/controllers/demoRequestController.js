const crypto = require("crypto");
const { sendMail } = require("../service/mailerService");
const {
  normalizeDemoRequest,
  escapeHtml,
  getDemoUrl,
  syncDemoRequest,
  generatePassword,
  requestError,
} = require("../service/demoRequestService");

const pendingRequests = new Map();
const RETENTION_MS = 15 * 60 * 1000;
const preparedAccess = new Map();

const provisionErpAccess = async (fields) => {
  const baseUrl = String(process.env.ERP_API_URL || "").replace(/\/+$/, "");
  const key = process.env.ERP_DEMO_PROVISION_KEY || "";
  if (!baseUrl || key.length < 32)
    throw requestError(
      503,
      "ERP demo access is temporarily unavailable. Please try again shortly.",
      "ERP_NOT_CONFIGURED",
    );
  const password = generatePassword();
  const response = await fetch(`${baseUrl}/api/demo/provision`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-demo-provision-key": key,
    },
    body: JSON.stringify({
      name: fields.name,
      email: fields.email,
      password,
    }),
    signal: AbortSignal.timeout(15000),
  });
  const data = await response.json().catch(() => ({}));
  if (response.status === 409) return { accessType: "existing_account" };
  if (!response.ok || data.success === false)
    throw requestError(
      502,
      "Your request was saved, but ERP access could not be prepared. Please try again.",
      "ERP_PROVISION_FAILED",
    );
  if (data.existingUser || data.alreadyExists || data.created === false)
    return { accessType: "existing_account" };
  return { accessType: "account", password };
};

const processDemoRequest = async (fields) => {
  const demoUrl = getDemoUrl(fields.demoType);
  const saved = await syncDemoRequest(null, fields);
  if (saved.request?.deliveryStatus === "sent") return;

  let access = { accessType: "link" };
  try {
    if (fields.demoType === "erp") {
      const cached = preparedAccess.get(fields.requestId);
      access = cached?.access || (await provisionErpAccess(fields));
      preparedAccess.set(fields.requestId, {
        access,
        expiresAt: Date.now() + RETENTION_MS,
      });
    }
    const label =
      fields.demoType === "software"
        ? "Software"
        : fields.demoType.toUpperCase();
    const accountDetails =
      access.accessType === "account"
        ? `<p><strong>Login ID:</strong> ${escapeHtml(fields.email)}</p><p><strong>Password:</strong> ${escapeHtml(access.password)}</p>`
        : access.accessType === "existing_account"
          ? `<p><strong>Login ID:</strong> ${escapeHtml(fields.email)}</p><p>Your demo account already exists. Use your existing password. Contact our team if you need help signing in.</p>`
          : "";
    await sendMail({
      to: fields.email,
      subject: `Your BrainADZ Live ${label} Demo Access`,
      html: `<div style="font-family:Arial,sans-serif;color:#17243b;max-width:640px;margin:auto;line-height:1.7;">
        <h2 style="color:#193175;">Your ${escapeHtml(label)} demo is ready</h2>
        <p>Hello ${escapeHtml(fields.name)},</p>
        <p>Thank you for requesting a demo for ${escapeHtml(fields.companyName)}.</p>
        <div style="padding:20px;background:#f3f6fc;border:1px solid #dce5f2;border-radius:12px;">
          <p><strong>Demo link:</strong> <a href="${escapeHtml(demoUrl)}">${escapeHtml(demoUrl)}</a></p>
          ${accountDetails}
        </div>
        <p>Please keep any login credentials private.</p>
        <p>Regards,<br>BrainADZ Live</p>
      </div>`,
    });
  } catch (error) {
    await syncDemoRequest(fields.requestId, {
      deliveryStatus: "failed",
      accessType: access.accessType,
      deliveryError:
        error.code === "ERP_PROVISION_FAILED" ||
        error.code === "ERP_NOT_CONFIGURED"
          ? "ERP access could not be prepared"
          : "Demo email delivery failed",
    }).catch(() => {});
    if (error.status) throw error;
    throw requestError(
      503,
      "We could not send your demo email. Please try again shortly.",
      "DEMO_EMAIL_FAILED",
    );
  }

  // Email is already sent: a tracking outage must not ask the visitor to resubmit.
  await syncDemoRequest(fields.requestId, {
    deliveryStatus: "sent",
    accessType: access.accessType,
    demoUrl,
    deliveryError: "",
  }).catch(() =>
    console.error("Demo delivery tracking failed", {
      requestId: fields.requestId,
    }),
  );
  preparedAccess.delete(fields.requestId);

  const recipients = [
    ...new Set(
      [process.env.ENQUIRY_EMAIL_1, process.env.ENQUIRY_EMAIL_2]
        .map((email) => String(email || "").trim())
        .filter(Boolean),
    ),
  ];
  if (recipients.length) {
    await sendMail({
      to: recipients.join(", "),
      replyTo: fields.email,
      subject: `New ${fields.demoType.toUpperCase()} Demo Request`,
      html: `<div style="font-family:Arial,sans-serif;line-height:1.7;"><h2>New demo request</h2>${Object.entries(
        {
          Name: fields.name,
          Company: fields.companyName,
          Email: fields.email,
          Phone: fields.phone,
          "Company size": fields.companySize,
          Requirements: fields.requirements,
          "Source page": fields.pageUrl,
        },
      )
        .map(
          ([label, value]) =>
            `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`,
        )
        .join(
          "",
        )}<p>The demo access email has been sent. This request is available in the Live CRM Demo Requests page.</p></div>`,
    }).catch(() =>
      console.error("Demo team notification failed", {
        requestId: fields.requestId,
      }),
    );
  }
};

const submitDemoRequest = async (req, res) => {
  res.set("Cache-Control", "no-store");
  try {
    const fields = normalizeDemoRequest(req.body);
    for (const [key, entry] of pendingRequests) {
      if (entry.expiresAt < Date.now()) pendingRequests.delete(key);
    }
    for (const [key, entry] of preparedAccess) {
      if (entry.expiresAt < Date.now()) preparedAccess.delete(key);
    }
    const fingerprint = crypto
      .createHash("sha256")
      .update(JSON.stringify(fields))
      .digest("hex");
    let entry = pendingRequests.get(fields.requestId);
    if (entry && entry.fingerprint !== fingerprint)
      throw requestError(
        409,
        "This request has changed. Please refresh and submit again.",
        "REQUEST_CONFLICT",
      );
    if (!entry) {
      entry = {
        fingerprint,
        expiresAt: Date.now() + RETENTION_MS,
        promise: processDemoRequest(fields),
      };
      pendingRequests.set(fields.requestId, entry);
    }
    try {
      await entry.promise;
    } catch (error) {
      pendingRequests.delete(fields.requestId);
      throw error;
    }
    return res
      .status(201)
      .json({
        success: true,
        message: "Your demo access details have been emailed to you.",
        requestId: fields.requestId,
        thankYouUrl: "/thank-you",
      });
  } catch (error) {
    console.error("Demo request failed", {
      code: error.code || "REQUEST_FAILED",
    });
    return res
      .status(error.status || 503)
      .json({
        success: false,
        message: error.status
          ? error.message
          : "Unable to submit your demo request. Please try again shortly.",
      });
  }
};

module.exports = { submitDemoRequest };
