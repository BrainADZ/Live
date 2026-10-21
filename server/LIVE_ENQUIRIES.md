# General website enquiries

Both the shared enquiry popup and Contact Us form post to `/api/enquire-now`.
The existing email template and configured enquiry recipients are retained.
Each accepted enquiry is also sent server-to-server to the company CRM's
`POST /api/website-enquiries/public/live`, using `X-Website-Key`.

The same `CRM_API_URL` and quoted `WEBSITE_INGESTION_KEY` used by demo requests
configure this connection. The CRM saves these records under `live`, with
`LIVE-` enquiry numbers. Marketing's existing `/public` ingestion is unchanged.

Before email delivery, a CRM copy is written to a private local outbox. After
email delivery the API attempts CRM delivery immediately. If CRM is unavailable,
the enquiry remains queued and is retried automatically, including after an API
restart. The CRM request UUID prevents duplicate records on delivery retries.
An SMTP failure leaves the CRM copy queued and the form can retry email.

The default directory is `server/data/enquiry-outbox`. It is ignored by Git and
contains personal enquiry information until CRM delivery succeeds. For container
deployments or checkouts replaced on deploy, set `ENQUIRY_OUTBOX_DIR` to a private,
writable persistent directory outside the checkout. Do not serve this directory
as static files. Keep it on persistent storage and monitor outbox error logs.

Deploy the CRM backend first, then this website API and the CRM dashboard.
Restart the website API to start automatic retries. MongoDB's unique partial
index on `(communityKey, websiteRequestId)` must be present when automatic index
creation is disabled in production. No website frontend deployment is needed.

The CRM page is **Website Enquiry → Live Enquiry**. It uses the current Marketing
table, with Live records and employees. Authorized Live staff see unassigned
enquiries; the first status change claims a record atomically. Admin assignment,
follow-up, remarks and history use the existing permission checks.

Run `node --test tests/live-enquiry.test.cjs` in `server`. SMTP and CRM requests
are stubbed; no real emails or production enquiries are created by these tests.
