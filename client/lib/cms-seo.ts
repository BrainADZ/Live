import type { Metadata } from "next";
import { mediaURL, safeURL, type ContentDocument } from "./cms-content";

export const siteURL = (process.env.NEXT_PUBLIC_SITE_URL || "https://brainadzlive.com").replace(/\/$/, "");

export function contentCanonical(doc: ContentDocument, path: string): string {
  const configured = safeURL(doc.seo?.canonicalURL);
  if (configured) {
    const url = new URL(configured, siteURL);
    // Imported content has automatically generated marketing-site canonicals.
    // Use this website's domain when rendering that same content here.
    if (["brainadz.marketing", "www.brainadz.marketing"].includes(url.hostname)) return `${siteURL}${path}`;
    if (["http:", "https:"].includes(url.protocol)) return url.toString();
  }
  return `${siteURL}${path}`;
}

export function contentMetadata(doc: ContentDocument, path: string, description: string): Metadata {
  const seo = doc.seo;
  const title = seo?.metaTitle || doc.title;
  const metaDescription = seo?.metaDescription || description.slice(0, 160);
  const socialTitle = seo?.ogTitle || title;
  const socialDescription = seo?.ogDescription || metaDescription;
  const image = mediaURL(seo?.ogImage || seo?.image || doc.heroImage, "og");
  const canonical = contentCanonical(doc, path);
  return {
    title, description: metaDescription,
    keywords: seo?.focusKeyword?.split(",").map(word => word.trim()).filter(Boolean),
    authors: [{ name: doc.authorName || "BrainADZ Live" }],
    alternates: { canonical },
    robots: { index: !seo?.noIndex && !seo?.robots?.includes("noindex"), follow: !seo?.robots?.includes("nofollow") },
    openGraph: { title: socialTitle, description: socialDescription, url: canonical, type: "article", siteName: "BrainADZ Live", publishedTime: doc.publishedAt || doc.createdAt, modifiedTime: doc.updatedAt, ...(image ? { images: [{ url: image }] } : {}) },
    twitter: { card: "summary_large_image", title: socialTitle, description: socialDescription, ...(image ? { images: [image] } : {}) },
  };
}

export function contentSchema(doc: ContentDocument, path: string, description: string, type: "BlogPosting" | "Article") {
  return {
    "@context": "https://schema.org", "@type": type,
    headline: doc.title, description, image: mediaURL(doc.heroImage),
    datePublished: doc.publishedAt || doc.createdAt, dateModified: doc.updatedAt,
    author: { "@type": "Person", name: doc.authorName || "BrainADZ Live" },
    publisher: { "@type": "Organization", name: "BrainADZ Live", url: siteURL },
    mainEntityOfPage: contentCanonical(doc, path),
  };
}
