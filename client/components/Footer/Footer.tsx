/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import { Globe2, ShieldCheck } from "lucide-react";

const footerColumns = [
  {
    title: "What's new",
    links: [
      { label: "AI-powered kiosks", href: "/services/ai-kiosks" },
      { label: "Digital standee solutions", href: "/services/digital-standee" },
      { label: "Automation services", href: "/services/automation" },
      { label: "AI agents", href: "/services/ai-agents" },
      { label: "Analytics dashboard", href: "/services/analytics" },
      { label: "Smart display systems", href: "/services/smart-displays" },
    ],
  },
  {
    title: "Hardware Solutions",
    links: [
      { label: "Kiosk solutions", href: "/hardware/kiosk" },
      { label: "Digital standees", href: "/hardware/digital-standees" },
      { label: "LED display systems", href: "/hardware/led-displays" },
      { label: "Interactive screens", href: "/hardware/interactive-screens" },
      { label: "Installation support", href: "/support/installation" },
    ],
  },
  {
    title: "Software Services",
    links: [
      { label: "Website development", href: "/services/web-development" },
      { label: "Web applications", href: "/services/web-applications" },
      { label: "CRM / ERP software", href: "/services/crm-erp" },
      { label: "Cloud solutions", href: "/services/cloud" },
      { label: "API development", href: "/services/api-development" },
      { label: "AI solutions", href: "/services/ai-solutions" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Retail", href: "/industries/retail" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Education", href: "/industries/education" },
      { label: "Real estate", href: "/industries/real-estate" },
      { label: "Hospitality", href: "/industries/hospitality" },
      { label: "Corporate", href: "/industries/corporate" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs", href: "/blog" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Help center", href: "/support" },
      { label: "FAQs", href: "/faqs" },
      { label: "Technology insights", href: "/resources/insights" },
      { label: "Product guide", href: "/resources/product-guide" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About BrainADZ Live", href: "/about-us" },
      { label: "Careers", href: "/careers" },
      { label: "Contact us", href: "/contact-us" },
      { label: "Company news", href: "/news" },
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of use", href: "/terms" },
    ],
  },
];

const bottomLinks = [
  { label: "Contact BrainADZ", href: "/contact" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms of use", href: "/terms" },
  { label: "Trademarks", href: "/trademarks" },
  { label: "About our ads", href: "/ads" },
];

export default function Footer() {
  return (
    <footer className="lazy-section bg-[#f2f2f2] text-[#616161]">
      {/* TOP FOOTER LINKS */}
      <div className="mx-auto max-w-450 px-6 pb-20 pt-14 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-12">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-5 text-[14px] font-semibold leading-none text-[#616161]">
                {column.title}
              </h3>

              <ul className="space-y-5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12px] font-normal leading-[1.35] text-[#616161] transition hover:text-[#3c5b9b] hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM FOOTER BAR */}
      <div className="mx-auto flex max-w-450 flex-col gap-4 px-6 pb-7 md:px-10 lg:px-12 xl:flex-row xl:items-center xl:justify-between">
        {/* LEFT */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
         
          <Link
            href="/privacy-choices"
            className="flex items-center gap-2 text-[12px] text-[#616161] transition hover:text-[#3c5b9b] hover:underline"
          >
            <span className="flex h-5.5 w-11.5 items-center justify-center rounded-full bg-[#0067ff] text-white">
              <ShieldCheck size={15} strokeWidth={2} />
            </span>
            Your Privacy Choices
          </Link>

          <Link
            href="/consumer-health-privacy"
            className="text-[12px] text-[#616161] transition hover:text-[#3c5b9b] hover:underline"
          >
            Consumer Health Privacy
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          {bottomLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[12px] text-[#616161] transition hover:text-[#3c5b9b] hover:underline"
            >
              {link.label}
            </Link>
          ))}

          <span className="text-[12px] text-[#616161]">
            © BrainADZ Live 2026 | All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
