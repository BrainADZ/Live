"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Link from "next/link";
import LocationsSection from "./Location";

const INITIAL_VISIBLE_LINKS = 5;

const footerColumns = [
  {
    title: "Software Services",
    links: [
      { label: "Software Development", href: "/software-services/software-development" },
      { label: "Mobile App Development", href: "/software-services/mobile-app-development" },
      { label: "Application Modernization", href: "/software-services/application-modernization" },
      { label: "Web App Development", href: "/software-services/web-app-development" },
      { label: "Enterprise Software Solutions", href: "/software-services/enterprise-software-solutions" },
      { label: "API Integration", href: "/software-services/api-integration" },
      { label: "CRM Development", href: "/software-services/crm-development" },
      { label: "ERP Development", href: "/software-services/erp-development" },
      { label: "UI/UX Design", href: "/software-services/ui-ux-design" },
      { label: "SaaS Development", href: "/software-services/saas-development" },
      { label: "Cloud Consulting", href: "/software-services/cloud-consulting" },
    ],
  },
  {
    title: "Digital Signage Products",
    links: [
      { label: "A-Frame Digital Standee", href: "/digital-signage-products/a-frame-digital-standee" },
      { label: "D-Model Floor Mount Digital Kiosk", href: "/digital-signage-products/d-model-floor-mount-digital-kiosk" },
      { label: "Commercial LED Displays & Screens", href: "/digital-signage-products/commercial-led-displays-screens" },
      { label: "LFD Video Walls", href: "/digital-signage-products/lfd-video-walls" },
      { label: "Self Ordering Kiosk", href: "/digital-signage-products/self-ordering-kiosk" },
      { label: "Vertical Floor Mount Digital Kiosk", href: "/digital-signage-products/vertical-floor-mount-digital-kiosk" },
      { label: "Digital Teaching & Conference Board (IFPD)", href: "/digital-signage-products/digital-teaching-conference-board-ifpd" },
      { label: "Wall Mount Digital Signage", href: "/digital-signage-products/wall-mount-digital-signage" },
    ],
  },
  {
    title: "Software Platforms",
    links: [
      { label: "CRM Software", href: "/software-platforms/crm-software" },
      { label: "ERP Software", href: "/software-platforms/erp-software" },
      { label: "Signage Application", href: "/software-platforms/signage-application" },
      { label: "Cloud Signage Software", href: "/software-platforms/cloud-signage-software" },
      { label: "POS Software", href: "/software-platforms/pos" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Health Care", href: "/industries/health-care" },
      { label: "Education Tech", href: "/industries/education-tech" },
      { label: "Finance Tech", href: "/industries/finance-tech" },
      { label: "Property Tech", href: "/industries/property-tech" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Transport", href: "/industries/transport" },
      { label: "Telecom", href: "/industries/telecom" },
      { label: "Automotive", href: "/industries/automotive" },
      { label: "Insurance Tech", href: "/industries/insurance-tech" },
      { label: "Travel & Hospitality", href: "/industries/travel-hospitality" },
      { label: "Facility Management", href: "/industries/facility-management" },
      { label: "Media & Entertainment", href: "/industries/media-entertainment" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Blogs", href: "/blog" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Consulting", href: "/consulting" },
      { label: "Contact", href: "/contact-us" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Overview", href: "/about-us" },
      { label: "Careers", href: "/careers" },
      { label: "Contact us", href: "/contact-us" },
    ],
  },
];

// const bottomLinks = [
//   { label: "Contact BrainADZ", href: "/contact" },
//   { label: "Privacy", href: "/privacy-policy" },
//   { label: "About our ads", href: "/ads" },
// ];

export default function Footer() {
  const [expandedColumns, setExpandedColumns] = useState<Record<string, boolean>>({});

  const toggleColumn = (title: string) => {
    setExpandedColumns((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <footer className="lazy-section bg-[#f2f2f2] text-[#616161]">
      {/* TOP FOOTER LINKS */}
      <div className="mx-auto max-w-450 px-6 pb-20 pt-14 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-12">
          {footerColumns.map((column) => {
            const isExpanded = expandedColumns[column.title];
            const hasMoreLinks = column.links.length > INITIAL_VISIBLE_LINKS;

            const visibleLinks = isExpanded
              ? column.links
              : column.links.slice(0, INITIAL_VISIBLE_LINKS);

            return (
              <div key={column.title}>
                <h3 className="mb-5 text-[14px] font-semibold leading-none text-[#616161]">
                  {column.title}
                </h3>

                <ul className="space-y-5">
                  {visibleLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[12px] font-normal leading-[1.35] text-[#616161] transition hover:text-[#193175] hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {hasMoreLinks && (
                  <button
                    type="button"
                    onClick={() => toggleColumn(column.title)}
                    className="mt-5 text-[12px] font-medium text-[#193175] transition hover:underline"
                  >
                    {isExpanded ? "View less" : "View more"}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* BOTTOM FOOTER BAR */}
      <div className="mx-auto flex max-w-450 flex-col gap-4 px-6 pb-7 md:px-10 lg:px-12 xl:flex-row xl:items-center xl:justify-between">
        {/* LEFT */}
        {/* RIGHT */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          {/* {bottomLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[12px] text-[#616161] transition hover:text-[#193175] hover:underline"
            >
              {link.label}
            </Link>
          ))} */}

          <span className="text-[12px] text-[#616161]">
            © BrainADZ Live 2026 | All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
