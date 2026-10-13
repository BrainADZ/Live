# CMS integration

The website reads published `blog-posts` and `case-studies` from the Payload CMS REST API. The CMS editor, collections, fields, media library and custom admin components stay the same.

## Local development

1. Configure `cms/.env.local` using `cms/.env.example`. Keep your existing `DATABASE_URL` and `PAYLOAD_SECRET`. Use `NEXT_PUBLIC_SERVER_URL=http://localhost:3001` and `CLIENT_URL=http://localhost:3000`.
2. Set `CMS_API_URL=http://localhost:3001` in `client/.env.local` (also the default). `CMS_API_URL` is an origin; an optional trailing `/api` is supported.
3. Run `npm run dev` in `cms`, then `npm run dev` in `client`.
4. Open `http://localhost:3001/admin`, add categories and media, and publish a blog post or case study. Drafts and autosaves are private.

Published content appears on `/blog`, `/case-studies`, the homepage blog section, and `/sitemap.xml`. Cards open `/blog/[slug]` or `/case-studies/[slug]`. Requests fetch fresh content; no rebuild is needed after publishing. Blog cards are ordered by publication date; the first four appear in the featured section. Search and category filters cover all published articles. Case studies use `sortOrder`, with the first featured entry (or first entry) in the featured section.

## Production

Set `client`'s `CMS_API_URL` to the deployed CMS origin, and `NEXT_PUBLIC_SITE_URL` to the website origin. In `cms`, set `NEXT_PUBLIC_SERVER_URL` to the public CMS origin and `CLIENT_URL` to the website origin, e.g. `https://brainadzlive.com`. Restart after changing environment variables. The frontend needs no CMS password or API key for published content. Keep the CMS MongoDB and SMTP credentials in the CMS environment only.

Blog canonical URLs now use `CLIENT_URL` when saving. Existing automatically generated `brainadz.marketing` canonicals are translated to this website's origin during rendering. Other explicit canonical URLs remain supported.

The frontend supports headings, inline formatting, links, lists, uploaded images and captions, rich text tables and FAQ blocks. Case study details render challenge, approach, optional before/after comparisons, results, evidence images and final outcome in the CMS field order. CMS SEO fields drive metadata, social sharing, robots and the sitemap.

Missing or unpublished slugs return 404. An unavailable CMS produces a retry screen on detail pages and a temporary-unavailability message on listing pages; it does not restore static demo articles.

API reference: [Payload REST API](https://payloadcms.com/docs/rest-api/overview).

## Verification

Run `npm run test:cms` in `client` for public API pagination, rich text rendering, canonical/robots metadata, and case study section order checks. Run `npm run build` for production compilation.
