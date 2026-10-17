import { contentList, getBlogs, getCaseStudies } from "@/lib/cms";
import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brainadzlive.com";

const routes = [
  "",
  "/about-us",
  "/about-us/how-we-work-and-function",
  "/about-us/our-core-team",
  "/about-us/overview",
  "/blog",
  "/careers",
  "/case-studies",
  "/community",
  "/consulting",
  "/contact-us",
  "/privacy-policy",
  "/terms-and-conditions",
  "/return-policy",
  "/demos",
  "/smart-erp",
  "/digital-signage-products",
  "/digital-signage-products/a-frame-digital-standee",
  "/digital-signage-products/d-model-floor-mount-digital-kiosk",
  "/digital-signage-products/vertical-floor-mount-digital-kiosk",
  "/digital-signage-products/digital-teaching-conference-board-ifpd",
  "/digital-signage-products/commercial-led-displays-screens",
  "/digital-signage-products/lfd-video-walls",
  "/digital-signage-products/self-ordering-kiosk",
  "/digital-signage-products/vertical-mobile-charging-digital-kiosk",
  "/digital-signage-products/wall-mount-digital-signage",
  "/industries",
  "/industries/automotive",
  "/industries/education-tech",
  "/industries/facility-management",
  "/industries/finance-tech",
  "/industries/health-care",
  "/industries/insurance-tech",
  "/industries/media-entertainment",
  "/industries/property-tech",
  "/industries/retail",
  "/industries/telecom",
  "/industries/transport",
  "/industries/travel-hospitality",
  "/software-platforms",
  "/software-platforms/cloud-signage-software",
  "/software-platforms/crm-software",
  "/software-platforms/erp-software",
  "/software-platforms/pos",
  "/software-platforms/signage-application",
  "/software-services",
  "/software-services/api-integration",
  "/software-services/application-modernization",
  "/software-services/cloud-consulting",
  "/software-services/crm-development",
  "/software-services/enterprise-software-solutions",
  "/software-services/erp-development",
  "/software-services/mobile-app-development",
  "/software-services/saas-development",
  "/software-services/software-development",
  "/software-services/ui-ux-design",
  "/software-services/web-app-development",
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogs, studies] = await Promise.all([
    contentList(() => getBlogs()),
    contentList(getCaseStudies),
  ]);
  const content = [
    ...blogs.docs.map((doc) => ({ doc, prefix: "/blog" })),
    ...studies.docs.map((doc) => ({ doc, prefix: "/case-studies" })),
  ]
    .filter(
      ({ doc }) => !doc.seo?.noIndex && !doc.seo?.robots?.includes("noindex"),
    )
    .map(({ doc, prefix }) => ({
      url: `${siteUrl}${prefix}/${encodeURIComponent(doc.slug)}`,
      lastModified: doc.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route}`,
      changeFrequency:
        route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route.split("/").length === 2 ? 0.8 : 0.7,
    })),
    ...content,
  ];
}
