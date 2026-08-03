const crypto = require("crypto");
const { sendMail } = require("../service/mailerService");

const ERP_DEMO_URL =
  process.env.ERP_DEMO_URL || "https://erp.brainadzlive.in/";

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const isValidEmail = (email = "") =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());

const normalizeField = (value, maxLength) =>
  String(value || "").trim().slice(0, maxLength);

const generatePassword = () => {
  const groups = [
    "ABCDEFGHJKLMNPQRSTUVWXYZ",
    "abcdefghijkmnopqrstuvwxyz",
    "23456789",
    "!@#$%",
  ];
  const allCharacters = groups.join("");
  const characters = groups.map(
    (group) => group[crypto.randomInt(0, group.length)]
  );

  while (characters.length < 16) {
    characters.push(
      allCharacters[crypto.randomInt(0, allCharacters.length)]
    );
  }

  for (let index = characters.length - 1; index > 0; index -= 1) {
    const swapIndex = crypto.randomInt(0, index + 1);
    [characters[index], characters[swapIndex]] = [
      characters[swapIndex],
      characters[index],
    ];
  }

  return characters.join("");
};

const detailRow = (label, value) => `
  <tr>
    <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;font-weight:600;width:190px;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;white-space:pre-wrap;">${escapeHtml(value || "Not provided")}</td>
  </tr>
`;

const submitErpDemo = async (req, res) => {
  try {
    const {
      name,
      companyWebsite,
      email,
      phone,
      industry,
      companySize,
      requirements,
      preferredLanguage,
      source,
    } = req.body;

    if (!name || !companyWebsite || !email || !phone || !industry || !companySize || !requirements || !preferredLanguage) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required demo fields.",
      });
    }

    const normalizedEmail = normalizeField(email, 254).toLowerCase();
    if (!isValidEmail(normalizedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid work email address.",
      });
    }

    const fields = {
      "Full Name": normalizeField(name, 100),
      "Company Website": normalizeField(companyWebsite, 300),
      "Work Email": normalizedEmail,
      "Phone Number": normalizeField(phone, 40),
      Industry: normalizeField(industry, 100),
      "Company Size": normalizeField(companySize, 50),
      Requirements: normalizeField(requirements, 4000),
      "Preferred Demo Language": normalizeField(preferredLanguage, 50),
      "How They Heard About BrainADZ": normalizeField(source || "Not provided", 300),
    };

    if (Object.values(fields).some((value) => !value)) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required demo fields.",
      });
    }

    const subjectName = fields["Full Name"].replace(/[\r\n]+/g, " ");

    await sendMail({
      replyTo: normalizedEmail,
      subject: `New ERP Demo Request - ${subjectName}`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#1f2937;max-width:760px;margin:auto;">
          <h2 style="color:#193175;">New ERP Demo Request</h2>
          <p>A visitor submitted the ERP Software demo form.</p>
          <table style="width:100%;border:1px solid #e5e7eb;border-collapse:collapse;">
            ${Object.entries(fields)
              .map(([label, value]) => detailRow(label, value))
              .join("")}
          </table>
        </div>
      `,
    });

    const provisionKey = process.env.ERP_DEMO_PROVISION_KEY || "";
    const erpApiUrl = (process.env.ERP_API_URL || "").replace(/\/$/, "");
    if (!erpApiUrl || provisionKey.length < 32) {
      throw new Error("ERP demo provisioning is not configured.");
    }

    const password = generatePassword();
    const erpResponse = await fetch(`${erpApiUrl}/api/demo/provision`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-demo-provision-key": provisionKey,
      },
      body: JSON.stringify({
        name: fields["Full Name"],
        email: normalizedEmail,
        password,
      }),
      signal: AbortSignal.timeout(15000),
    });
    const erpData = await erpResponse.json().catch(() => ({}));

    if (!erpResponse.ok) {
      return res.status(erpResponse.status).json({
        success: false,
        message:
          erpData.message ||
          "Your request was received, but the ERP demo account could not be created.",
      });
    }

    await sendMail({
      to: normalizedEmail,
      subject: "Your BrainADZ Live ERP Demo Access",
      html: `
        <div style="font-family:Arial,sans-serif;color:#1f2937;max-width:640px;margin:auto;line-height:1.6;">
          <h2 style="color:#193175;">Your ERP demo is ready</h2>
          <p>Hello ${escapeHtml(fields["Full Name"])},</p>
          <p>Your BrainADZ Live ERP demo account has been created. Use the credentials below to sign in:</p>
          <div style="background:#f4f7fc;border:1px solid #dce5f2;border-radius:12px;padding:20px;">
            <p style="margin:0 0 8px;"><strong>ERP URL:</strong> <a href="${ERP_DEMO_URL}">${ERP_DEMO_URL}</a></p>
            <p style="margin:0 0 8px;"><strong>Email:</strong> ${escapeHtml(normalizedEmail)}</p>
            <p style="margin:0;"><strong>Password:</strong> ${escapeHtml(password)}</p>
          </div>
          <p style="margin-top:20px;">For security, please do not share these credentials.</p>
          <p>Regards,<br />BrainADZ Live</p>
        </div>
      `,
    });

    return res.status(201).json({
      success: true,
      message: "ERP demo account created. Login details have been emailed to you.",
      redirectUrl: ERP_DEMO_URL,
    });
  } catch (error) {
    console.error("ERP demo provisioning error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to create ERP demo access. Please try again.",
    });
  }
};

module.exports = { submitErpDemo };
