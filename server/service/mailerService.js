const nodemailer = require("nodemailer");

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

const sendMail = async ({ to, subject, html, replyTo }) => {
  const enquiryRecipients = [
    process.env.ENQUIRY_EMAIL_1,
    process.env.ENQUIRY_EMAIL_2,
  ]
    .map((email) => String(email || "").trim())
    .filter(Boolean);

  const transporter = createTransporter();

  const result = await transporter.sendMail({
    from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_EMAIL}>`,
    // Explicit recipients are required for messages such as ERP login emails.
    to: to || (enquiryRecipients.length ? enquiryRecipients : process.env.MAIL_TO),
    replyTo,
    subject,
    html,
  });

  // SMTP can accept one recipient and reject another without throwing.
  if (result.rejected && result.rejected.length) {
    const error = new Error(
      `SMTP rejected email recipients: ${result.rejected.join(", ")}`
    );
    error.code = "EMAIL_RECIPIENT_REJECTED";
    error.accepted = result.accepted;
    error.rejected = result.rejected;
    error.rejectedErrors = result.rejectedErrors;
    throw error;
  }

  return result;
};

module.exports = { sendMail };
