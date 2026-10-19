# Demo requests

The shared website form posts to `POST /api/demo-request`. The server first saves
the lead in the company CRM, prepares ERP access when requested, emails the
customer and returns `/thank-you`. Credentials never appear in the API response
or in the CRM record. `/api/erp-demo` remains an alias for ERP submissions.

## Configuration

- Set `CRM_API_URL` to the company CRM backend, without `/api` at the end.
- Set the same random `WEBSITE_INGESTION_KEY` (at least 32 characters) in this
  server and the CRM backend. Keep it out of browser environment variables.
- Keep the existing SMTP and ERP provisioning settings. The ERP provisioning
  endpoint accepts `name`, `email`, `password` and `companyName`.
- Product demo links are controlled by `ERP_DEMO_URL`, `CRM_DEMO_URL`,
  `POS_DEMO_URL`, `HOSPITALITY_DEMO_URL` and `SOFTWARE_DEMO_URL`.
- Configure `ENQUIRY_EMAIL_1` / `ENQUIRY_EMAIL_2` for team notifications.

Local configuration uses website API port 5000 and company CRM API port 5002.
The CRM dashboard local environment points to port 5002. Restart both backends
and the frontends after changing environment variables.

For production, deploy the CRM backend routes/model first, then deploy this API
with the deployed CRM URL and matching secret, and deploy the website. Deploy
the company CRM dashboard to expose `/dashboard/demo-requests`. Local `.env`
changes do not configure hosted services automatically.

## Behavior and verification

Email delivery must succeed before the visitor reaches the thank-you page.
Failed delivery leaves the request in CRM with a failed delivery status and
allows the visitor to retry. During a short SMTP retry, newly generated ERP
credentials are retained in server memory for up to 15 minutes. Existing accounts
receive instructions to use their existing password. Request IDs prevent
duplicate lead creation; concurrent retries within one API process share work.

Run `node --test tests/demo-request.test.cjs` from `server`. SMTP, CRM and ERP are
mocked, so tests do not create accounts or send email. A production smoke test
with a controlled email inbox is still needed after deployment.
