const { sendMail } = require("../service/mailerService");

/* =========================================================
   EMAIL ASSETS
   =========================================================

   IMPORTANT:
   Email ke andar relative paths jaise:
   /logo.png
   ../images/logo.png

   kaam nahi karenge.

   Hamesha public absolute HTTPS URLs use karo.

   Example:
   https://brainadzlive.com/email-assets/logo.png
========================================================= */

const EMAIL_ASSETS = {
  // Top main BrainADZ Live logo
  mainLogo:
    "https://brainadzlive.in/enquire-form/BrainADZ-Icon.png",

  // Main enquiry heading ke left wala circular icon
  enquiryIcon:
    "https://brainadzlive.com/enquire-form/BrainADZ-Icon.png",

  // Bottom Thank You section wala small logo/icon
  footerIcon:
    "https://brainadzlive.com/enquire-form/BrainADZ-Icon.png",

  // Table row icons
  nameIcon:
    "https://brainadzlive.com/enquire-form/name.svg",

  emailIcon:
    "https://brainadzlive.com/enquire-form/email.svg",

  phoneIcon:
    "https://brainadzlive.com/enquire-form/phn.svg",

  companyIcon:
    "https://brainadzlive.com/enquire-form/company.svg",

  solutionIcon:
    "https://brainadzlive.com/enquire-form/solutions.svg",

  serviceIcon:
    "https://brainadzlive.com/enquire-form/services.svg",

  messageIcon:
    "https://brainadzlive.com/enquire-form/message.svg",

  pageUrlIcon:
    "https://brainadzlive.com/enquire-form/url.svg",

  submittedIcon:
    "https://brainadzlive.com/enquire-form/submitted.svg",
};


/* =========================================================
   HTML ESCAPE
========================================================= */

const escapeHtml = (value = "") => {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};


/* =========================================================
   EMAIL VALIDATION
========================================================= */

const isValidEmail = (email = "") => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
};


/* =========================================================
   CREATE DETAIL ROW
========================================================= */

const createDetailRow = ({
  icon,
  label,
  value,
  isLink = false,
  href = "",
  isMessage = false,
  isLast = false,
}) => {
  const borderStyle = isLast
    ? ""
    : "border-bottom:1px solid #e2e8f0;";

  const valueContent = isLink
    ? `
      <a
        href="${href}"
        target="_blank"
        style="
          color:#0b63e5;
          text-decoration:none;
          font-size:15px;
          font-weight:500;
          line-height:1.6;
          word-break:break-word;
        "
      >
        ${value}
      </a>
    `
    : `
      <div
        style="
          color:#26364d;
          font-size:${isMessage ? "15px" : "15px"};
          font-weight:${isMessage ? "400" : "500"};
          line-height:${isMessage ? "1.75" : "1.6"};
          word-break:break-word;
          white-space:pre-line;
        "
      >
        ${value}
      </div>
    `;

  return `
    <tr>
      <td
        style="
          width:200px;
          padding:15px 18px;
          vertical-align:${isMessage ? "top" : "middle"};
          ${borderStyle}
          border-right:1px solid #e2e8f0;
        "
      >
        <table
          cellpadding="0"
          cellspacing="0"
          border="0"
          role="presentation"
        >
          <tr>
            <td
              width="28"
              valign="${isMessage ? "top" : "middle"}"
              style="padding-right:12px;"
            >
              <img
                src="${icon}"
                alt=""
                width="20"
                height="20"
                style="
                  display:block;
                  width:20px;
                  height:20px;
                  border:0;
                  object-fit:contain;
                "
              />
            </td>

            <td
              valign="${isMessage ? "top" : "middle"}"
              style="
                color:#172033;
                font-size:15px;
                font-weight:700;
                line-height:1.5;
                white-space:nowrap;
              "
            >
              ${label}
            </td>
          </tr>
        </table>
      </td>

      <td
        style="
          padding:15px 22px;
          vertical-align:${isMessage ? "top" : "middle"};
          ${borderStyle}
        "
      >
        ${valueContent}
      </td>
    </tr>
  `;
};


/* =========================================================
   SEND ENQUIRY EMAIL
========================================================= */

const sendEnquireNow = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      solution,
      service,
      message,
      pageUrl,
    } = req.body;


    /* =====================================================
       REQUIRED FIELDS
    ===================================================== */

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email and phone are required.",
      });
    }


    /* =====================================================
       VALIDATE EMAIL
    ===================================================== */

    const rawEmail = String(email).trim();

    if (!isValidEmail(rawEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }


    /* =====================================================
       SAFE VALUES
    ===================================================== */

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(rawEmail);
    const safePhone = escapeHtml(phone);

    const safeCompany = escapeHtml(
      company || "Not provided"
    );

    const safeSolution = escapeHtml(
      solution || "Not selected"
    );

    const safeService = escapeHtml(
      service || "Not selected"
    );

    const safeMessage = escapeHtml(
      message || "No message provided"
    );

    const rawPageUrl = pageUrl || "";

    const safePageUrl = escapeHtml(
      rawPageUrl || "Not available"
    );


    /* =====================================================
       SUBMITTED DATE & TIME
    ===================================================== */

    const submittedOn = new Intl.DateTimeFormat(
      "en-IN",
      {
        timeZone: "Asia/Kolkata",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }
    ).format(new Date());


    /* =====================================================
       SEND EMAIL
    ===================================================== */

    await sendMail({
      replyTo: rawEmail,

      subject: `New Website Enquiry Received - ${safeName}`,

      html: `
<!DOCTYPE html>

<html lang="en">

<head>

  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <meta
    name="color-scheme"
    content="light"
  />

  <meta
    name="supported-color-schemes"
    content="light"
  />

  <title>
    New Website Enquiry Received
  </title>

</head>


<body
  style="
    margin:0;
    padding:0;
    background:#f5f7fb;
    font-family:Arial,Helvetica,sans-serif;
    color:#172033;
  "
>


  <!-- EMAIL BACKGROUND -->

  <table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
    role="presentation"
    style="
      width:100%;
      background:#f5f7fb;
    "
  >

    <tr>

      <td
        align="center"
        style="
          padding:32px 12px;
        "
      >


        <!-- MAIN EMAIL CONTAINER -->

        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          role="presentation"
          style="
            width:100%;
            max-width:760px;
            background:#ffffff;
            border:1px solid #e2e8f0;
            border-radius:18px;
            border-collapse:separate;
            overflow:hidden;
          "
        >


          <!-- =================================================
               TOP LOGO AREA
          ================================================== -->

          <tr>

            <td
              align="center"
              style="
                padding:28px 28px 18px;
                background:#ffffff;
              "
            >

              <img
                src="${EMAIL_ASSETS.mainLogo}"
                alt="BrainADZ Live"
                width="260"
                style="
                  display:block;
                  width:260px;
                  max-width:100%;
                  height:auto;
                  margin:0 auto;
                  border:0;
                "
              />

            </td>

          </tr>


          <!-- BLUE DIVIDER -->

          <tr>

            <td
              style="
                padding:0 32px;
              "
            >

              <div
                style="
                  width:100%;
                  height:4px;
                  background:#1769e0;
                  border-radius:10px;
                "
              ></div>

            </td>

          </tr>


          <!-- =================================================
               HEADING SECTION
          ================================================== -->

          <tr>

            <td
              style="
                padding:28px 32px 22px;
              "
            >

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                role="presentation"
              >

                <tr>


                  <!-- HEADING ICON -->

                  <td
                    width="78"
                    valign="middle"
                    style="
                      width:78px;
                      padding-right:18px;
                    "
                  >

                    <table
                      width="70"
                      height="70"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      role="presentation"
                      style="
                        width:70px;
                        height:70px;
                        background:#1769e0;
                        border-radius:50%;
                      "
                    >

                      <tr>

                        <td
                          align="center"
                          valign="middle"
                        >

                          <img
                            src="${EMAIL_ASSETS.enquiryIcon}"
                            alt=""
                            width="34"
                            height="34"
                            style="
                              display:block;
                              width:34px;
                              height:34px;
                              object-fit:contain;
                              border:0;
                            "
                          />

                        </td>

                      </tr>

                    </table>

                  </td>


                  <!-- HEADING TEXT -->

                  <td
                    valign="middle"
                  >

                    <h1
                      style="
                        margin:0;
                        color:#10223f;
                        font-size:26px;
                        font-weight:700;
                        line-height:1.25;
                        letter-spacing:-0.4px;
                      "
                    >
                      New Website Enquiry Received
                    </h1>

                    <p
                      style="
                        margin:8px 0 0;
                        color:#5f6b7a;
                        font-size:15px;
                        line-height:1.6;
                      "
                    >
                      A new enquiry has been submitted through your website.
                    </p>

                  </td>


                </tr>

              </table>

            </td>

          </tr>


          <!-- =================================================
               DETAILS TABLE
          ================================================== -->

          <tr>

            <td
              style="
                padding:0 32px 28px;
              "
            >

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                role="presentation"
                style="
                  width:100%;
                  background:#ffffff;
                  border:1px solid #dfe5ee;
                  border-radius:14px;
                  border-collapse:separate;
                  overflow:hidden;
                "
              >

                ${createDetailRow({
                  icon: EMAIL_ASSETS.nameIcon,
                  label: "Name:",
                  value: safeName,
                })}


                ${createDetailRow({
                  icon: EMAIL_ASSETS.emailIcon,
                  label: "Email:",
                  value: safeEmail,
                  isLink: true,
                  href: `mailto:${rawEmail}`,
                })}


                ${createDetailRow({
                  icon: EMAIL_ASSETS.phoneIcon,
                  label: "Phone:",
                  value: safePhone,
                })}


                ${createDetailRow({
                  icon: EMAIL_ASSETS.companyIcon,
                  label: "Company:",
                  value: safeCompany,
                })}


                ${createDetailRow({
                  icon: EMAIL_ASSETS.solutionIcon,
                  label: "Solution:",
                  value: safeSolution,
                })}


                ${createDetailRow({
                  icon: EMAIL_ASSETS.serviceIcon,
                  label: "Service:",
                  value: safeService,
                })}


                ${createDetailRow({
                  icon: EMAIL_ASSETS.messageIcon,
                  label: "Message:",
                  value: safeMessage,
                  isMessage: true,
                })}


                ${createDetailRow({
                  icon: EMAIL_ASSETS.pageUrlIcon,
                  label: "Page URL:",
                  value: safePageUrl,
                  isLink: Boolean(rawPageUrl),
                  href: rawPageUrl || "#",
                })}


                ${createDetailRow({
                  icon: EMAIL_ASSETS.submittedIcon,
                  label: "Submitted On:",
                  value: submittedOn,
                  isLast: true,
                })}

              </table>

            </td>

          </tr>


          <!-- =================================================
               FOOTER THANK YOU SECTION
          ================================================== -->

          <tr>

            <td
              style="
                padding:0 32px 28px;
              "
            >

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                role="presentation"
                style="
                  width:100%;
                  background:#f2f7ff;
                  border-radius:14px;
                "
              >

                <tr>

                  <td
                    align="center"
                    style="
                      padding:20px 20px 22px;
                    "
                  >


                    <!-- MANUAL FOOTER LOGO / ICON -->

                    <img
                      src="${EMAIL_ASSETS.footerIcon}"
                      alt="BrainADZ Live"
                      width="48"
                      height="48"
                      style="
                        display:block;
                        width:48px;
                        height:48px;
                        object-fit:contain;
                        margin:0 auto 12px;
                        border:0;
                      "
                    />


                    <p
                      style="
                        margin:0;
                        color:#435067;
                        font-size:15px;
                        line-height:1.5;
                      "
                    >
                      Thank you,
                    </p>


                    <p
                      style="
                        margin:4px 0 0;
                        color:#172033;
                        font-size:16px;
                        font-weight:700;
                        line-height:1.5;
                      "
                    >
                      BrainADZ Live Team
                    </p>


                    <p
                      style="
                        margin:8px 0 0;
                      "
                    >

                      <a
                        href="https://brainadzlive.com"
                        target="_blank"
                        style="
                          color:#1769e0;
                          text-decoration:none;
                          font-size:14px;
                          font-weight:500;
                        "
                      >
                        www.brainadzlive.com
                      </a>

                    </p>


                  </td>

                </tr>

              </table>

            </td>

          </tr>


        </table>


        <!-- SMALL SYSTEM NOTE -->

        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          role="presentation"
          style="
            width:100%;
            max-width:760px;
          "
        >

          <tr>

            <td
              align="center"
              style="
                padding:16px 12px 0;
              "
            >

              <p
                style="
                  margin:0;
                  color:#8a94a6;
                  font-size:11px;
                  line-height:1.6;
                "
              >
                Automated website enquiry notification from BrainADZ Live.
              </p>

            </td>

          </tr>

        </table>


      </td>

    </tr>

  </table>


</body>

</html>
      `,
    });


    /* =====================================================
       SUCCESS RESPONSE
    ===================================================== */

    return res.status(200).json({
      success: true,
      message: "Enquiry submitted successfully.",
    });

  } catch (error) {

    console.error(
      "Enquire now mail error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to send enquiry.",
    });

  }
};


module.exports = {
  sendEnquireNow,
};