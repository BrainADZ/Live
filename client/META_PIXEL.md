# ERP Meta Pixel

Pixel ID: `1114302264165671` (a public identifier, not a secret).

- The base script is placed in the head for `/smart-erp` and
  `/thank-you?from=smart-erp`. The supplied noscript PageView image is in the body.
- A client component also supports entering the landing page through Next.js
  navigation, when the existing root layout is reused.
- Each visit sends `PageView`. The form marks a pending conversion only after
  the demo API returns success. The ERP thank-you screen sends the standard
  `Lead` event, with the demo request UUID as its event ID.
- A one-time session marker prevents another Lead on refresh or direct
  thank-you visits. Name, email, phone, company details, requirements and ERP
  passwords are not sent in our Lead event. If session storage is blocked, the
  success event is attempted before redirecting instead.
- Other website pages and non-ERP-campaign demo forms do not initialize this
  pixel. No new environment variables or backend deployment are needed.

Deploy the updated frontend. In Meta Events Manager, choose this pixel and use
Test Events: open `/smart-erp` to verify PageView, then submit a successful demo
request to verify Lead. Use the `Lead` website event when configuring the ERP
lead campaign. Opening thank-you directly, refreshing it, or a failed form
submission must not send a new Lead. Ad blockers can prevent browser events.

Run `node --test tests/meta-pixel.test.cjs`. These tests use a mocked browser and
SDK; they do not send events to Meta. Live receipt in Events Manager must be
verified after deployment.
