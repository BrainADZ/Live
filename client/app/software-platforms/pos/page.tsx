/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Download,
  Minus,
  Plus,
} from "lucide-react";
import IndustriesSection from "@/components/home/Industries";
import DemoForm from "@/components/DemoForm";

const modules = [
  {
    title: "Fast Billing & Checkout",
    text: "Create quick and accurate billing workflows with product search, barcode scanning, discounts, taxes and multiple payment options.",
    iconSrc: "/icons/pos-software/key-features/fast-billing-checkout.svg",
  },
  {
    title: "Inventory Management",
    text: "Track stock availability, product movement, low-stock levels and inventory updates from one connected POS platform.",
    iconSrc: "/icons/pos-software/key-features/inventory-management.svg",
  },
  {
    title: "Product & Pricing Control",
    text: "Manage products, categories, variants, pricing, tax rules and promotional offers through a centralized catalogue.",
    iconSrc:
      "/icons/pos-software/key-features/product-pricing-control.svg",
  },
  {
    title: "Sales & Business Reports",
    text: "Review sales, payments, products, employees and store performance through practical dashboards and reports.",
    iconSrc:
      "/icons/pos-software/key-features/sales-business-reports.svg",
  },
];

const experienceItems = [
  {
    title: "Billing & Checkout",
    text: "Process sales through a simple billing interface with product search, barcode support, quantity updates, taxes, discounts and payment selection.",
  },
  {
    title: "Product & Category Management",
    text: "Create and manage products, categories, variants, units, prices, tax settings and catalogue details from one administrative system.",
  },
  {
    title: "Inventory & Stock Tracking",
    text: "Monitor stock quantities, product movement, low-stock alerts, stock adjustments and inventory availability across configured locations.",
  },
  {
    title: "Customer Management",
    text: "Maintain customer profiles, purchase history, contact details, loyalty information and selected customer-specific offers when required.",
  },
  {
    title: "Discount, Tax & Promotion Rules",
    text: "Configure discounts, promotional pricing, coupon rules and applicable tax structures according to the business workflow.",
  },
  {
    title: "Multi-Store Management",
    text: "Manage products, users, stock and sales visibility across multiple outlets through a connected POS environment.",
  },
  {
    title: "Employee Roles & Access",
    text: "Create role-based access for cashiers, store managers, administrators and other users according to operational responsibility.",
  },
  {
    title: "Reports & Analytics",
    text: "Review daily sales, payment methods, products, inventory, employees and store performance through selected dashboards and reports.",
  },
];

const workflowSteps = [
  {
    title: "Requirement Discovery",
    text: "We understand the business type, billing workflow, products, users, stores, inventory and reporting requirements.",
    iconSrc: "/icons/pos-software/workflow/requirement-discovery.svg",
  },
  {
    title: "POS & UX Planning",
    text: "We plan the billing flow, product structure, user roles, dashboard experience and required operational modules.",
    iconSrc: "/icons/pos-software/workflow/pos-ux-planning.svg",
  },
  {
    title: "Interface Configuration",
    text: "We configure or design the billing screen, product catalogue, administrative dashboard and selected user journeys.",
    iconSrc:
      "/icons/pos-software/workflow/interface-configuration.svg",
  },
  {
    title: "Data & Integrations",
    text: "Products, inventory, taxes, payment workflows, devices and required third-party integrations are configured or developed.",
    iconSrc: "/icons/pos-software/workflow/data-integrations.svg",
  },
  {
    title: "Testing & Staff Training",
    text: "We validate billing, inventory, permissions, reports and connected workflows before guiding the operational team.",
    iconSrc:
      "/icons/pos-software/workflow/testing-staff-training.svg",
  },
  {
    title: "Deployment & Support",
    text: "The POS platform is deployed with implementation guidance, handover and support according to the agreed scope.",
    iconSrc: "/icons/pos-software/workflow/deployment-support.svg",
  },
];

const workflowLayout = [
  { ...workflowSteps[0], left: "21.75%", top: "0px" },
  { ...workflowSteps[1], left: "78.25%", top: "0px" },
  { ...workflowSteps[2], left: "21.75%", top: "300px" },
  { ...workflowSteps[3], left: "78.25%", top: "300px" },
  { ...workflowSteps[4], left: "21.75%", top: "570px" },
  { ...workflowSteps[5], left: "78.25%", top: "570px" },
];

const integrations = [
  "Payment Gateways",
  "Barcode Scanners",
  "Receipt Printers",
  "Inventory Systems",
  "CRM Platforms",
  "Accounting Software",
  "Ecommerce Platforms",
  "External APIs",
];

const faqs = [
  {
    q: "What is POS Software?",
    a: "POS Software is a business system used to manage billing, payments, products, inventory, customers, employees and sales reporting from a connected point-of-sale interface.",
  },
  {
    q: "Can BrainADZ build custom POS Software?",
    a: "Yes. The billing flow, product catalogue, inventory, user roles, reports, store structure and integrations can be planned according to the business requirement.",
  },
  {
    q: "Can the POS support multiple stores?",
    a: "Yes. Multi-store access, outlet-wise products, inventory, users and sales reporting can be included according to the required operating model.",
  },
  {
    q: "Can POS Software connect with hardware devices?",
    a: "Integration can be planned for supported barcode scanners, receipt printers, cash drawers, customer displays and other compatible devices required by the project.",
  },
  {
    q: "Can the POS connect with ecommerce, CRM or accounting software?",
    a: "Yes. Integration with ecommerce platforms, CRM systems, accounting software, payment services and external APIs can be planned where suitable technical interfaces are available.",
  },
];

export default function POSSoftwarePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/pos-software.webp"
          alt="POS Software by BrainADZ Live"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-4 lg:min-h-135 lg:px-12">
          <div className="flex items-center gap-3 text-[16px] font-light md:text-[18px]">
            <Link
              href="/"
              className="text-[#6da0ff] hover:underline"
            >
              Home
            </Link>

            <span className="text-white/80">/</span>

            <span className="text-white/90">Software Platforms</span>

            <span className="text-white/80">/</span>

            <span className="text-white/90">POS Software</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              POS Software for Billing, Inventory and Retail Operations
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              A configurable POS platform for managing billing, payments, products,
              inventory, customers and store operations through one connected
              business system.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-4 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                View Demo
                <ArrowRight size={20} strokeWidth={1.8} className="text-[20px] leading-none" />
              </button>

              <a
                href="/brochure/BrainADZLive.pdf"
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-3 rounded-full border border-white/35 px-4 text-[13px] font-bold text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#193175]"
              >
                Download Brochure
                <Download size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Software Overview
            </p>

            <h2 className="max-w-180 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Bring billing, inventory and store operations into one POS platform.
            </h2>

            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ Live POS Software is designed for retail stores,
              restaurants, service businesses and multi-location operations that
              need a connected system for billing, products, inventory, customers,
              users and business reporting.
            </p>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              <div className="border-l-2 border-[#193175] pl-5">
                <h3 className="text-[20px] font-normal">
                  Faster Billing Operations
                </h3>

                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Help teams process sales through a clear and efficient billing workflow.
                </p>
              </div>

              <div className="border-l-2 border-[#193175] pl-5">
                <h3 className="text-[20px] font-normal">
                  Centralized Store Management
                </h3>

                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Manage products, stock, users and reports through one connected
                  platform.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#193175]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[30px] bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
              <img
                src="/software/pos-software-dashboard.webp"
                alt="POS Software dashboard preview"
                className="h-130 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Benefits
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Improve billing accuracy and gain better control over daily operations.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {[
              {
                title: "Faster Billing Operations",
                text: "Help cashiers and teams complete billing with faster product selection, taxes, discounts and payment handling.",
              },
              {
                title: "Connected Inventory Visibility",
                text: "Keep stock quantities, sales movement and low-stock information connected with billing activity.",
              },
              {
                title: "Consistent Operational Control",
                text: "Standardize products, pricing, discounts, taxes and user permissions across the required business setup.",
              },
              {
                title: "Scalable Store Management",
                text: "Plan the POS for a single outlet, multiple stores or selected business locations according to the requirement.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="border-t border-black/10 pt-7"
              >
                <span className="text-[13px] font-semibold text-[#193175]">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-[24px] font-normal tracking-[-0.4px]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY MODULES */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Key Features
              </p>

              <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
                Core capabilities for connected billing and store operations.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              The platform can combine billing, product management, inventory,
              customer records, employee access and operational reporting
              according to the project scope.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {modules.map((item) => (
              <div
                key={item.title}
                className="group rounded-[28px] border border-black/10 bg-[#f8faff] p-7 transition hover:-translate-y-1 hover:border-[#193175]/30 hover:bg-white hover:shadow-[0_22px_65px_rgba(60,91,155,0.1)]"
              >
                <div className="manual-icon-box mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#193175]/10 p-4">
                  <img
                    src={item.iconSrc}
                    alt=""
                    aria-hidden="true"
                    className="manual-icon object-contain"
                  />
                </div>

                <h3 className="text-[23px] font-normal tracking-[-0.4px]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POS CAPABILITIES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.76fr_1.24fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              POS Capabilities
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Plan the POS workflow around real billing and operational
              requirements.
            </h2>

            <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
              BrainADZ Live plans POS Software around the business type,
              billing process, product catalogue, inventory structure, user roles
              and required store environment.
            </p>

            <div className="mt-8 rounded-[26px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <h3 className="text-[22px] font-normal tracking-[-0.4px]">
                Plan the right POS system
              </h3>

              <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">
                Define billing, products, inventory, users, stores, devices and
                reporting needs before finalizing the POS configuration.
              </p>

              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-4 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Discuss Your Requirement
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="border-t border-black/10">
            {experienceItems.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[75px_1fr]"
              >
                <span className="text-[14px] font-semibold text-[#193175]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-[26px] font-normal tracking-[-0.5px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] font-light leading-[1.75] text-black/65 md:text-[16px]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="relative overflow-hidden bg-white px-5 py-16 md:px-4 lg:px-12 lg:py-14">
        <div
          className="pointer-events-none absolute right-[-9%] top-[-8%] hidden h-[116%] w-[32%] opacity-35 lg:block"
          style={{
            backgroundImage:
              "repeating-radial-gradient(ellipse at center, rgba(60, 91, 155, 0.18) 0 1px, transparent 1px 14px)",
            transform: "rotate(5deg) scaleX(0.72)",
          }}
        />

        <div className="mx-auto max-w-450">
          <div className="relative z-10 mx-auto mb-12 max-w-295 text-center lg:mb-14">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Workflow
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              Our POS Software Implementation Roadmap
            </h2>

            <p className="mx-auto mt-5 max-w-245 text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              A practical process for planning, configuring and deploying a
              connected point-of-sale platform.
            </p>
          </div>

          <div className="lg:hidden">
            <div className="space-y-5">
              {workflowSteps.map((item, index) => (
                <div
                  key={item.title}
                  className="group relative rounded-[26px] border border-black/10 bg-white p-6"
                >
                  {index !== workflowSteps.length - 1 && (
                    <div className="absolute left-11 top-18 h-[calc(100%+20px)] border-l-2 border-dashed border-[#193175]/45" />
                  )}

                  <div className="relative z-10 flex gap-5">
                    <div className="manual-icon-box flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#193175] bg-[#edf3ff]">
                      <img
                        src={item.iconSrc}
                        alt=""
                        aria-hidden="true"
                        className="manual-icon object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-[22px] font-normal leading-tight tracking-[-0.5px]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-[15px] font-light leading-[1.65] text-black/65">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden h-197.5 lg:block">
            <svg
              className="pointer-events-none absolute inset-0 z-0 h-full w-full"
              viewBox="0 0 1600 790"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id="pos-arrowhead"
                  markerHeight="14"
                  markerUnits="userSpaceOnUse"
                  markerWidth="18"
                  orient="auto"
                  refX="16"
                  refY="7"
                >
                  <path
                    d="M 0 0 L 18 7 L 0 14 z"
                    fill="#193175"
                  />
                </marker>
              </defs>

              <path
                d="M 392 43 L 1208 43"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#pos-arrowhead)"
              />

              <path
                d="M 1294 43 C 1480 43 1515 150 1515 230 C 1515 318 1440 343 1294 343"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
              />

              <path
                d="M 1208 343 L 392 343"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#pos-arrowhead)"
              />

              <path
                d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#pos-arrowhead)"
              />

              <path
                d="M 392 613 L 1208 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#pos-arrowhead)"
              />
            </svg>

            {workflowLayout.map((item) => (
              <div
                key={item.title}
                className="group absolute z-10 w-97.5 -translate-x-1/2 text-center"
                style={{
                  left: item.left,
                  top: item.top,
                }}
              >
                <div className="manual-icon-box mx-auto flex h-21.5 w-21.5 items-center justify-center rounded-full border-2 border-[#193175] bg-[#edf3ff]">
                  <img
                    src={item.iconSrc}
                    alt=""
                    aria-hidden="true"
                    className="manual-icon object-contain"
                  />
                </div>

                <h3 className="mt-6 text-[30px] font-normal leading-[1.15] tracking-[-0.8px] text-black xl:text-[32px]">
                  {item.title}
                </h3>

                <p className="mx-auto mt-4 max-w-82.5 text-[17px] font-light leading-[1.55] text-black/65 xl:text-[18px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                POS Integrations
              </p>

              <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
                Connect POS operations with selected business systems and devices.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              Integration scope can be planned around payments, barcode devices,
              printers, inventory, ecommerce, CRM, accounting software and
              available APIs.
            </p>
          </div>

          <div className="grid gap-y-5 bg-white py-4 md:grid-cols-4">
            {integrations.map((item, index) => (
              <div
                key={item}
                className={`flex min-h-24 items-center justify-center px-5 text-center ${
                  index % 4 !== 3
                    ? "md:border-r md:border-dotted md:border-[#bdbdbd]"
                    : ""
                }`}
              >
                <span className="text-[18px] font-light tracking-[-0.3px] text-[#193175]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesSection />

      {/* POS DASHBOARD PREVIEW */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Platform Preview
            </p>

            <h2 className="mx-auto max-w-230 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              A central view for sales, products, inventory and operational
              activity.
            </h2>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-black/10 bg-white p-4 shadow-[0_30px_90px_rgba(0,0,0,0.08)] md:p-6">
            <img
              src="/software/pos-software-preview-large.webp"
              alt="POS Software dashboard preview"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY BRAINADZ */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why BrainADZ
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              POS Software planning based on billing, products, inventory, users
              and business operations.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {[
              {
                title: "Business-First Planning",
                text: "We start with the business type, billing workflow, products, users and operational priorities before selecting the final approach.",
              },
              {
                title: "Billing & Catalogue Alignment",
                text: "The POS workflow is planned around products, categories, pricing, taxes, discounts and the required billing structure.",
              },
              {
                title: "POS Integrations",
                text: "Connections with payment, inventory, ecommerce, CRM, accounting and device systems are reviewed according to available technical interfaces.",
              },
              {
                title: "Scope-Based Implementation Support",
                text: "Configuration, deployment guidance, staff handover and implementation support are provided according to the agreed project scope.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="border-t border-black/10 pt-7"
              >
                <span className="text-[13px] font-semibold text-[#193175]">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-[24px] font-normal tracking-[-0.4px]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              FAQ
            </p>

            <h2 className="mx-auto max-w-230 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about POS Software.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-[26px] border bg-white transition ${
                  openFaq === index
                    ? "border-[#193175]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]"
                    : "border-black/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                >
                  <span className="text-[16px] font-light leading-[1.45] text-black md:text-[17px]">
                    {faq.q}
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f6f8fc] text-[#193175]">
                    {openFaq === index ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="mx-5 border-t border-[#193175]/15 pb-6 pt-4 md:mx-6">
                    <p className="text-[15px] font-light leading-[1.75] text-black/65">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="lazy-section bg-white py-8">
        <div className="mx-auto max-w-450 px-4 lg:px-10">
          <div className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/CTA/cta.webp"
                alt="POS Software by BrainADZ Live"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Ready to improve your billing and store operations?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  See how billing, inventory, products, customers and business
                  reporting can be managed through one connected POS platform.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#193175] md:min-w-57.5"
              >
                <span>Request a Demo</span>

                <ArrowRight size={26} strokeWidth={1.8} className="text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <DemoForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        demoType="pos"
        demoHref="https://posbadz.onrender.com/"
      />
    </main>
  );
}
