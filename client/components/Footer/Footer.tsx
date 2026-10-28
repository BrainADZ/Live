
"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import { titleCaseHeading } from "@/lib/title-case-heading";
import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const INITIAL_VISIBLE_LINKS = 5;

/* =========================================
   CONTACT DETAILS - EDIT HERE
========================================= */

const contactDetails = {
  email: "corpsales@brainadzlive.com",

  phone1: "+91 92113 66484",
  phone2: "+91 92112 93332",

  locations: "Delhi / Mumbai / Dubai / Thailand",

  contactPage: "/contact-us",
};

/* =========================================
   FOOTER COLUMNS
========================================= */

const footerColumns = [
  {
    title: "Software Services",
    links: [
      {
        label: "Software Development",
        href: "/software-services/software-development",
      },
      {
        label: "Mobile App Development",
        href: "/software-services/mobile-app-development",
      },
      {
        label: "Application Modernization",
        href: "/software-services/application-modernization",
      },
      {
        label: "Web App Development",
        href: "/software-services/web-app-development",
      },
      {
        label: "Enterprise Software Solutions",
        href: "/software-services/enterprise-software-solutions",
      },
      {
        label: "API Integration",
        href: "/software-services/api-integration",
      },
      {
        label: "CRM Development",
        href: "/software-services/crm-development",
      },
      {
        label: "ERP Development",
        href: "/software-services/erp-development",
      },
      {
        label: "UI/UX Design",
        href: "/software-services/ui-ux-design",
      },
      {
        label: "SaaS Development",
        href: "/software-services/saas-development",
      },
      {
        label: "Cloud Consulting",
        href: "/software-services/cloud-consulting",
      },
    ],
  },
  {
    title: "Digital Signage Products",
    links: [
      {
        label: "A-Frame Digital Standee",
        href: "/digital-signage-products/a-frame-digital-standee",
      },
      {
        label: "D-Model Floor Mount Digital Kiosk",
        href: "/digital-signage-products/d-model-floor-mount-digital-kiosk",
      },
      {
        label: "Commercial LED Displays & Screens",
        href: "/digital-signage-products/commercial-led-displays-screens",
      },
      {
        label: "LFD Video Walls",
        href: "/digital-signage-products/lfd-video-walls",
      },
      {
        label: "Self Ordering Kiosk",
        href: "/digital-signage-products/self-ordering-kiosk",
      },
      {
        label: "Vertical Floor Mount Digital Kiosk",
        href: "/digital-signage-products/vertical-floor-mount-digital-kiosk",
      },
      {
        label: "Digital Teaching & Conference Board (IFPD)",
        href: "/digital-signage-products/digital-teaching-conference-board-ifpd",
      },
      {
        label: "Wall Mount Digital Signage",
        href: "/digital-signage-products/wall-mount-digital-signage",
      },
    ],
  },
  {
    title: "Software Platforms",
    links: [
      {
        label: "CRM Software",
        href: "/software-platforms/crm-software",
      },
      {
        label: "ERP Software",
        href: "/software-platforms/erp-software",
      },
      {
        label: "Signage Application",
        href: "/software-platforms/signage-application",
      },
      {
        label: "Cloud Signage Software",
        href: "/software-platforms/cloud-signage-software",
      },
      {
        label: "POS Software",
        href: "/software-platforms/pos",
      },
    ],
  },
  {
    title: "Industries",
    links: [
      {
        label: "Health Care",
        href: "/industries/health-care",
      },
      {
        label: "Education Tech",
        href: "/industries/education-tech",
      },
      {
        label: "Finance Tech",
        href: "/industries/finance-tech",
      },
      {
        label: "Property Tech",
        href: "/industries/property-tech",
      },
      {
        label: "Retail",
        href: "/industries/retail",
      },
      {
        label: "Transport",
        href: "/industries/transport",
      },
      {
        label: "Telecom",
        href: "/industries/telecom",
      },
      {
        label: "Automotive",
        href: "/industries/automotive",
      },
      {
        label: "Insurance Tech",
        href: "/industries/insurance-tech",
      },
      {
        label: "Travel & Hospitality",
        href: "/industries/travel-hospitality",
      },
      {
        label: "Facility Management",
        href: "/industries/facility-management",
      },
      {
        label: "Media & Entertainment",
        href: "/industries/media-entertainment",
      },
    ],
  },
  {
    title: "Quick Links",
    links: [
      {
        label: "Blogs",
        href: "/blog",
      },
      {
        label: "Case studies",
        href: "/case-studies",
      },
      {
        label: "Overview",
        href: "/about-us",
      },
      {
        label: "Careers",
        href: "/careers",
      },
      {
        label: "Contact us",
        href: "/contact-us",
      },
    ],
  },
];

/* =========================================
   BOTTOM LINKS
========================================= */

const bottomLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
  {
    label: "Return Policy",
    href: "/return-policy",
  },
];

/* =========================================
   FOOTER COMPONENT
========================================= */

export default function Footer() {
  const [expandedColumns, setExpandedColumns] = useState<
    Record<string, boolean>
  >({});

  const toggleColumn = (title: string) => {
    setExpandedColumns((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const phoneHref = (number: string) => {
    return `tel:${number.replace(/[^\d+]/g, "")}`;
  };

  return (
    <footer className="lazy-section bg-[#f2f2f2] text-[#616161]">

      {/* =====================================
          TOP FOOTER LINKS
      ===================================== */}

      <div className="site-container section-spacing">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-12">

          {/* EXISTING FOOTER COLUMNS */}

          {footerColumns.map((column) => {
            const isExpanded = expandedColumns[column.title];

            const hasMoreLinks =
              column.links.length > INITIAL_VISIBLE_LINKS;

            const visibleLinks = isExpanded
              ? column.links
              : column.links.slice(0, INITIAL_VISIBLE_LINKS);

            return (
              <div key={column.title}>

                {/* COLUMN HEADING */}

                <h3 className="mb-5 text-[14px] font-semibold leading-none text-[#616161]">
                  {titleCaseHeading(column.title)}
                </h3>

                {/* LINKS */}

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

                {/* VIEW MORE / VIEW LESS */}

                {hasMoreLinks && (
                  <button
                    type="button"
                    onClick={() => toggleColumn(column.title)}
                    aria-expanded={!!isExpanded}
                    className="mt-5 text-[12px] font-medium text-[#193175] transition hover:underline"
                  >
                    {isExpanded ? "View less" : "View more"}
                  </button>
                )}

              </div>
            );
          })}

          {/* =====================================
              CONTACT US COLUMN
          ===================================== */}

          <div>

            {/* HEADING */}

            <h3 className="mb-5 text-[14px] font-semibold leading-none text-[#616161]">
              Contact Us
            </h3>

            <div className="space-y-5">

              {/* EMAIL */}

              <a
                href={`mailto:${contactDetails.email}`}
                className="group flex items-start gap-2.5 text-[12px] font-normal leading-[1.5] text-[#616161] transition-colors duration-300 hover:text-[#193175]"
              >
                <Mail
                  size={16}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[#193175]"
                />

                <span className="break-all group-hover:underline">
                  {contactDetails.email}
                </span>
              </a>

              {/* PHONE NUMBER 1 */}

              <a
                href={phoneHref(contactDetails.phone1)}
                className="group flex items-start gap-2.5 text-[12px] font-normal leading-[1.5] text-[#616161] transition-colors duration-300 hover:text-[#193175]"
              >
                <Phone
                  size={16}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[#193175]"
                />

                <span className="group-hover:underline">
                  {contactDetails.phone1}
                </span>
              </a>

              {/* PHONE NUMBER 2 */}

              <a
                href={phoneHref(contactDetails.phone2)}
                className="group flex items-start gap-2.5 text-[12px] font-normal leading-[1.5] text-[#616161] transition-colors duration-300 hover:text-[#193175]"
              >
                <Phone
                  size={16}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[#193175]"
                />

                <span className="group-hover:underline">
                  {contactDetails.phone2}
                </span>
              </a>

              {/* LOCATIONS */}

              <div className="flex items-start gap-2.5 text-[12px] font-normal leading-[1.6] text-[#616161]">
                <MapPin
                  size={16}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[#193175]"
                />

                <span>
                  {contactDetails.locations}
                </span>
              </div>

            </div>

            {/* GET IN TOUCH BUTTON */}

            <Link
              href={contactDetails.contactPage}
              className="group mt-7 inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#193175] px-4 py-2.5 text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#161616] hover:shadow-[0_6px_20px_rgba(25,49,117,0.2)]"
            >
              <span>Get In Touch</span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

          </div>

        </div>
      </div>

      {/* =====================================
          BOTTOM FOOTER BAR
      ===================================== */}

      <div className="site-container flex flex-col gap-4 pb-7 md:flex-row md:items-center md:justify-between">

        {/* COPYRIGHT */}

        <span className="shrink-0 text-[12px] text-[#616161]">
          © BrainADZ Live 2026 | All rights reserved.
        </span>

        {/* LEGAL LINKS */}

        <nav
          aria-label="Legal policies"
          className="flex flex-wrap items-center gap-x-6 gap-y-3 md:justify-end"
        >
          {bottomLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              prefetch={false}
              className="text-[12px] text-[#616161] transition hover:text-[#193175] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#193175]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

      </div>
    </footer>
  );
}
