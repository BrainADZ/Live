/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Boxes,
  Database,
  Gauge,
  Layers3,
  Minus,
  Plus,
  Download,
  Search,
  ShieldCheck,
  ShoppingCart,
  Users,
  WalletCards,
  Workflow,
} from "lucide-react";
import IndustriesSection from "@/components/home/Industries"
import DemoForm from "@/components/DemoForm";
const modules = [
  {
    title: "Finance Management",
    text: "Manage invoices, expenses, billing, accounts and financial reports from one system.",
    icon: WalletCards,
  },
  {
    title: "Inventory Control",
    text: "Track stock, warehouses, product movement, purchase needs and inventory reports.",
    icon: Boxes,
  },
  {
    title: "HR Management",
    text: "Manage employees, attendance, payroll support, roles, leaves and department records.",
    icon: Users,
  },
  {
    title: "Purchase & Sales",
    text: "Connect purchase orders, sales orders, vendors, customers and approval workflows.",
    icon: ShoppingCart,
  },
];

const departmentModules = [
  "Finance",
  "HR",
  "Inventory",
  "Procurement",
  "Sales",
  "Operations",
  "Reports",
  "Admin Control",
];

const features = [
  {
    title: "Centralized Business Data",
    text: "Bring finance, sales, inventory, HR, procurement and operations into one connected ERP system instead of scattered tools.",
  },
  {
    title: "Department-Wise Workflows",
    text: "Create structured workflows for approvals, requests, tasks, reports and daily operational activities.",
  },
  {
    title: "Role-Based Access Control",
    text: "Define clear access for admins, managers, department heads and staff to keep business data protected.",
  },
  {
    title: "Real-Time Reporting",
    text: "View operational performance, financial summaries, inventory status, employee data and business activity from dashboards.",
  },
  {
    title: "Approval Automation",
    text: "Reduce delays with digital approvals for purchases, leaves, invoices, stock requests and internal processes.",
  },
  {
    title: "System Integrations",
    text: "Connect ERP with CRM, accounting tools, payment systems, ecommerce platforms, APIs and reporting systems.",
  },
];

const workflowSteps = [
  {
    title: "Business Analysis",
    text: "We study your departments, workflows, approval needs, data flow and reporting structure.",
    icon: Search,
  },
  {
    title: "ERP Architecture",
    text: "We plan modules, user roles, database design, integrations and system scalability.",
    icon: Layers3,
  },
  {
    title: "Module Planning",
    text: "We define ERP modules for finance, HR, inventory, procurement, sales and operations.",
    icon: Workflow,
  },
  {
    title: "ERP Development",
    text: "We build dashboards, workflows, APIs, reports and department-specific modules.",
    icon: Database,
  },
  {
    title: "Testing & Migration",
    text: "We test workflows, validate data and support migration from existing systems.",
    icon: ShieldCheck,
  },
  {
    title: "Launch & Optimization",
    text: "We deploy the ERP and continuously improve modules, reports and automation.",
    icon: Gauge,
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
  "CRM",
  "Accounting",
  "Payment Gateway",
  "Ecommerce",
  "HR Tools",
  "Inventory Devices",
  "Analytics",
  "APIs",
];

const faqs = [
  {
    q: "Can BrainADZ build a custom ERP for my business?",
    a: "Yes. BrainADZ can build a custom ERP system around your departments, workflows, approvals, reports and integration needs.",
  },
  {
    q: "Which ERP modules can be included?",
    a: "ERP modules can include finance, HR, inventory, procurement, sales, operations, reporting, admin control and custom business modules.",
  },
  {
    q: "Can ERP integrate with existing software?",
    a: "Yes. ERP can be integrated with CRM, accounting tools, ecommerce platforms, payment gateways, APIs and other internal systems.",
  },
  {
    q: "Can you migrate existing data?",
    a: "Yes. We can plan data migration from spreadsheets, old software or existing databases depending on data quality and structure.",
  },
  {
    q: "Do you provide ERP support after launch?",
    a: "Yes. BrainADZ provides ERP support, maintenance, improvements, bug fixing and new module development.",
  },
];

export default function ERPSoftwarePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/erp.jpeg"
          alt="ERP Software"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-8 lg:min-h-135 lg:px-12">
          <div className="flex items-center gap-3 text-[16px] font-light md:text-[18px]">
            <Link href="/" className="text-[#6da0ff] hover:underline">
              Home
            </Link>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Software Platforms</span>
            <span className="text-white/80">/</span>
            <span className="text-white/90">ERP Software</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              ERP Software
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              A connected ERP platform to manage finance, inventory, HR,
              procurement, sales, approvals and business reports from one system.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#3C5B9B] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
>
  View Demo
  <span className="text-[20px] leading-none">↗</span>
</button>

<a
                href="/brochure/BrainADZLive.pdf"
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-3 rounded-full border border-white/35 px-8 text-[13px] font-bold text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#3C5B9B]"
              >
                Download Brochure
                <Download size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Software Overview
            </p>

            <h2 className="max-w-180 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              ERP software that connects departments, data and decisions.
            </h2>

            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ ERP Software helps businesses manage core operations through one centralized platform.
              From inventory and finance to HR, procurement, approvals and reporting, the system is designed
              to reduce manual work and improve operational visibility.
            </p>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              <div className="border-l-2 border-[#3C5B9B] pl-5">
                <h3 className="text-[20px] font-light">Connected Departments</h3>
                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Align finance, HR, inventory, procurement and sales workflows.
                </p>
              </div>

              <div className="border-l-2 border-[#3C5B9B] pl-5">
                <h3 className="text-[20px] font-light">Operational Control</h3>
                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Track activities, approvals, reports and business performance.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#3C5B9B]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[30px] bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
              <img
                src="/software/erp-dashboard.webp"
                alt="ERP Dashboard Preview"
                className="h-[520px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY ERP */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Why ERP Software
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Replace disconnected tools with one business operating system.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {[
              {
                title: "Single Source of Truth",
                text: "Keep department data connected instead of scattered across spreadsheets and different tools.",
              },
              {
                title: "Process Automation",
                text: "Automate approvals, requests, reports, inventory updates and recurring business activities.",
              },
              {
                title: "Better Decision Making",
                text: "Use dashboards and reports to understand finance, stock, operations and team performance.",
              },
              {
                title: "Scalable Operations",
                text: "Build a system that supports more departments, users, branches and integrations over time.",
              },
            ].map((item, index) => (
              <div key={item.title} className="border-t border-black/10 pt-7">
                <span className="text-[13px] font-semibold text-[#3C5B9B]">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-[24px] font-light tracking-[-0.4px]">
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

      {/* CORE MODULES */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                ERP Modules
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Core modules designed for daily business operations.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              BrainADZ ERP can be customized with department-specific modules that fit your operational model,
              approval process and reporting structure.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {modules.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-black/10 bg-[#f8faff] p-7 transition hover:-translate-y-1 hover:border-[#3C5B9B]/30 hover:bg-white hover:shadow-[0_22px_65px_rgba(60,91,155,0.1)]"
                >
                  <div className="mb-6 flex h-15 w-15 items-center justify-center rounded-2xl bg-[#3C5B9B]/10 transition group-hover:bg-[#3C5B9B]">
                    <Icon size={27} className="text-[#3C5B9B] transition group-hover:text-white" />
                  </div>

                  <h3 className="text-[23px] font-light tracking-[-0.4px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEPARTMENT MANAGEMENT */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Department Management
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Manage every department from one connected ERP dashboard.
            </h2>

            <p className="mt-5 max-w-165 text-[16px] font-light leading-[1.7] text-black/65">
              Each department can have its own workflows, reports, roles and approval logic,
              while management gets a unified view of the full business.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {departmentModules.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-black/10 bg-white px-5 py-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3C5B9B]/10 text-[12px] font-semibold text-[#3C5B9B]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[19px] font-light tracking-[-0.3px]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STICKY FEATURES */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.76fr_1.24fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Platform Features
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              ERP features that bring structure to business operations.
            </h2>

            <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
              BrainADZ ERP Software connects data, teams, approvals and reports in a clean,
              role-based system built for everyday usage.
            </p>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex h-13 min-w-52 items-center justify-center gap-3 rounded-full bg-[#3C5B9B] px-7 text-[13px] font-bold text-white transition hover:bg-[#2f4a82]"
              >
                Get Expert Guidance <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="border-t border-black/10">
            {features.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[75px_1fr]"
              >
                <span className="text-[14px] font-semibold text-[#3C5B9B]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-[26px] font-light tracking-[-0.5px]">
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
      <section className="relative overflow-hidden bg-[#f6f8fc] px-5 py-16 md:px-8 lg:px-12 lg:py-14">
        <div
          className="pointer-events-none absolute -right-[9%] -top-[8%] hidden h-[116%] w-[32%] opacity-35 lg:block"
          style={{
            backgroundImage:
              "repeating-radial-gradient(ellipse at center, rgba(60, 91, 155, 0.18) 0 1px, transparent 1px 14px)",
            transform: "rotate(5deg) scaleX(0.72)",
          }}
        />

        <div className="mx-auto max-w-[1500px]">
          <div className="relative z-10 mx-auto mb-12 max-w-[1180px] text-center lg:mb-14">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Implementation Process
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              Our ERP Software Implementation Roadmap
            </h2>
            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              A structured process to analyze, build, migrate and launch ERP software.
            </p>
          </div>

          <div className="lg:hidden">
            <div className="space-y-5">
              {workflowSteps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="group relative rounded-[26px] border border-black/10 bg-white p-6">
                    {index !== workflowSteps.length - 1 && (
                      <div className="absolute left-11 top-18 h-[calc(100%+20px)] border-l-2 border-dashed border-[#3C5B9B]/45" />
                    )}

                    <div className="relative z-10 flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#3C5B9B] bg-[#edf3ff] transition duration-300 ease-out group-hover:-translate-y-1.5 group-hover:bg-white group-hover:shadow-[0_18px_42px_rgba(60,91,155,0.24)]">
                        <Icon size={23} strokeWidth={2.4} className="text-[#3C5B9B]" />
                      </div>

                      <div>
                        <h3 className="text-[22px] font-light leading-tight tracking-[-0.5px]">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-[15px] font-light leading-[1.65] text-black/65">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative hidden h-[790px] lg:block">
            <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full" viewBox="0 0 1600 790" fill="none" aria-hidden="true" preserveAspectRatio="none">
              <defs>
                <marker id="erp-arrowhead" markerHeight="14" markerUnits="userSpaceOnUse" markerWidth="18" orient="auto" refX="16" refY="7">
                  <path d="M 0 0 L 18 7 L 0 14 z" fill="#3C5B9B" />
                </marker>
              </defs>

              <path d="M 392 43 L 1208 43" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#erp-arrowhead)" />
              <path d="M 1294 43 C 1480 43 1515 150 1515 230 C 1515 318 1440 343 1294 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 1208 343 L 392 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#erp-arrowhead)" />
              <path d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#erp-arrowhead)" />
              <path d="M 392 613 L 1208 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#erp-arrowhead)" />
            </svg>

            {workflowLayout.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group absolute z-10 w-[390px] -translate-x-1/2 text-center"
                  style={{ left: item.left, top: item.top }}
                >
                  <div className="mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-full border-2 border-[#3C5B9B] bg-[#edf3ff] shadow-[0_16px_42px_rgba(60,91,155,0.16)] transition duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)]">
                    <Icon size={36} strokeWidth={2.25} className="text-[#3C5B9B]" />
                  </div>

                  <h3 className="mt-6 text-[30px] font-light leading-[1.15] tracking-[-0.8px] text-black xl:text-[32px]">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-[330px] text-[17px] font-light leading-[1.55] text-black/65 xl:text-[18px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Integrations
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Connect ERP with your business ecosystem.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              ERP can be connected with sales, finance, inventory, ecommerce, payment and reporting systems.
            </p>
          </div>

          <div className="grid gap-y-5 md:grid-cols-4">
            {integrations.map((item, index) => (
              <div
                key={item}
                className={`flex min-h-24 items-center justify-center px-5 text-center ${
                  index % 4 !== 3 ? "md:border-r md:border-dotted md:border-[#bdbdbd]" : ""
                }`}
              >
                <span className="text-[18px] font-light tracking-[-0.3px] text-[#3C5B9B]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesSection />

      {/* DASHBOARD PREVIEW */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Dashboard Preview
            </p>

            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              A unified ERP dashboard for departments and leadership.
            </h2>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-black/10 bg-white p-4 shadow-[0_30px_90px_rgba(0,0,0,0.08)] md:p-6">
            <img
              src="/software/erp-preview-large.webp"
              alt="ERP Software Dashboard"
              className="h-full w-full rounded-[24px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY BRAINADZ */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Why BrainADZ
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              ERP software planned around business operations and long-term growth.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {[
              {
                title: "Custom ERP Modules",
                text: "We build ERP modules around your departments, approvals and reporting needs.",
              },
              {
                title: "Secure Data Flow",
                text: "Protected APIs, role access and clean database design keep business data safe.",
              },
              {
                title: "Scalable Architecture",
                text: "Your ERP can grow with branches, teams, warehouses, modules and integrations.",
              },
              {
                title: "Continuous Support",
                text: "We support improvements, optimization, maintenance and new module development.",
              },
            ].map((item, index) => (
              <div key={item.title} className="border-t border-black/10 pt-7">
                <span className="text-[13px] font-semibold text-[#3C5B9B]">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-[24px] font-light tracking-[-0.4px]">
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
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              FAQ
            </p>

            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about ERP Software.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-[26px] border bg-white transition ${
                  openFaq === index
                    ? "border-[#3C5B9B]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]"
                    : "border-black/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                >
                  <span className="text-[16px] font-light leading-[1.45] text-black md:text-[17px]">
                    {faq.q}
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f6f8fc] text-[#3C5B9B]">
                    {openFaq === index ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="mx-5 border-t border-[#3C5B9B]/15 pb-6 pt-4 md:mx-6">
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
      <section className="bg-white py-12">
        <div className="mx-auto max-w-450 px-8 lg:px-10">
          <div className="flex min-h-65 overflow-hidden bg-[#3C5B9B] md:min-h-75">
            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-150">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Ready to connect your business operations?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Let BrainADZ build ERP software that brings your departments,
                  approvals, reports and operations into one connected system.
                </p>
              </div>

              <a
                href="/contact"
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition hover:bg-white hover:text-[#3C5B9B]"
              >
                <span>Get ERP Consultation</span>
                <span className="text-[26px] transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <DemoForm
  isOpen={isPopupOpen}
  onClose={() => setIsPopupOpen(false)}
  demoHref="/demos"
/>
    </main>
  );
}
