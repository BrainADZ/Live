/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Box,
  Boxes,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Database,
  Factory,
  FileText,
  Gauge,
  GitBranch,
  GraduationCap,
  Landmark,
  Layers3,
  LifeBuoy,
  LineChart,
  LockKeyhole,
  Minus,
  PackageCheck,
  Plus,
  RefreshCcw,
  Search,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Truck,
  UsersRound,
  Workflow,
} from "lucide-react";
import IndustriesSection from "@/components/home/Industries"
import PopupForm from "@/components/PopupForm";

type TabType = "languages" | "databases" | "frameworks";

type StackItem = {
  name: string;
  icon: string;
};

const processSteps = [
  {
    title: "Business & ERP Discovery",
    text: "We study your departments, handoffs, approvals, data, reports, existing tools and operational bottlenecks.",
    icon: Search,
  },
  {
    title: "Module & Workflow Planning",
    text: "We define required modules, user roles, forms, approvals, reports, integrations and a practical phased roadmap.",
    icon: Layers3,
  },
  {
    title: "Data & System Architecture",
    text: "We plan shared data structures, permissions, audit trails, integration points and a maintainable ERP foundation.",
    icon: Box,
  },
  {
    title: "Custom ERP Development",
    text: "We build the required modules, dashboards, workflows, APIs, reports and admin controls around your operations.",
    icon: Code2,
  },
  {
    title: "Testing, Migration & Training",
    text: "We validate workflows, permissions and reports, migrate agreed data and prepare users for the new system.",
    icon: ShieldCheck,
  },
  {
    title: "Launch & Continuous Improvement",
    text: "We deploy in planned stages, support adoption and improve modules, workflows and integrations as needs change.",
    icon: RocketIcon,
  },
];

function RocketIcon(props: React.ComponentProps<typeof RefreshCcw>) {
  return <RefreshCcw {...props} />;
}

const processLayout = [
  { ...processSteps[0], left: "21.75%", top: "0px" },
  { ...processSteps[1], left: "78.25%", top: "0px" },
  { ...processSteps[2], left: "21.75%", top: "300px" },
  { ...processSteps[3], left: "78.25%", top: "300px" },
  { ...processSteps[4], left: "21.75%", top: "570px" },
  { ...processSteps[5], left: "78.25%", top: "570px" },
];

const erpModules = [
  { title: "Finance & Accounts", icon: Landmark },
  { title: "Inventory & Warehouse", icon: Boxes },
  { title: "Sales Management", icon: LineChart },
  { title: "Purchase & Vendor Management", icon: ShoppingCart },
  { title: "HR & Payroll", icon: UsersRound },
  { title: "Production & Manufacturing", icon: Factory },
  { title: "Logistics & Dispatch", icon: Truck },
  { title: "Reports & Dashboards", icon: BarChart3 },
];

const services = [
  {
    title: "Custom ERP Platform Development",
    text: "ERP software built around your departments, responsibilities, approvals, data and day-to-day business processes.",
    icon: Building2,
  },
  {
    title: "ERP Module & Workflow Development",
    text: "Build only the modules and workflows you need, from finance and inventory to HR, purchase, production and reporting.",
    icon: Layers3,
  },
  {
    title: "ERP Integration & Data Sync",
    text: "Connect the ERP with existing software, CRM, ecommerce, payment, accounting and other business systems.",
    icon: GitBranch,
  },
  {
    title: "ERP Upgrade & Modernization",
    text: "Improve older ERP systems with better interfaces, workflows, integrations, performance and maintainability.",
    icon: RefreshCcw,
  },
];

const caseStudies = [
  {
    title: "Manufacturing ERP Platform",
    text: "A centralized system for production activity, inventory, purchase, dispatch and operational reporting.",
    image: "/services/hero/download.jpeg",
  },
  {
    title: "Retail Operations ERP",
    text: "A connected ERP for sales, stock, billing, branch activity and management reporting.",
    image: "/services/hero/Retail-CRM-and-Campaign-Management-System.png",
  },
  {
    title: "Finance & Approval Platform",
    text: "A role-based system for finance records, expense approvals, reporting and management visibility.",
    image: "/services/hero/serviceadmin.jpeg",
  },
  {
    title: "Logistics Operations ERP",
    text: "A connected platform for warehouse activity, shipments, delivery updates and team coordination.",
    image: "/services/hero/hopitality.png",
  },
];

const whyChoose = [
  {
    title: "Process-First ERP Planning",
    text: "We study how departments, approvals, records and handoffs actually work before defining modules.",
  },
  {
    title: "Modular & Phased Implementation",
    text: "Core modules can be prioritized first, with additional workflows, reports and integrations added in planned stages.",
  },
  {
    title: "Role-Based Control",
    text: "Permissions, approvals and data visibility are planned around real responsibilities across teams and management.",
  },
  {
    title: "Ongoing ERP Evolution",
    text: "We support the ERP with user assistance, workflow changes, new modules, integration updates and technical improvements.",
  },
];

const supportItems = [
  "Issue resolution and performance monitoring",
  "Security updates and access control reviews",
  "New modules and workflow changes as operations evolve",
  "User support, training and adoption improvements",
  "Integration maintenance, backup planning and report optimization",
];

const tabs: { label: string; value: TabType }[] = [
  { label: "Languages", value: "languages" },
  { label: "Databases", value: "databases" },
  { label: "Frameworks", value: "frameworks" },
];

const techStack: Record<TabType, StackItem[]> = {
  languages: [
    { name: "JavaScript", icon: "/icons/JavaScript.svg" },
    { name: "TypeScript", icon: "/icons/TypeScript.svg" },
    { name: "Java", icon: "/icons/Java.svg" },
    { name: "C#", icon: "/icons/CSharp.svg" },
    { name: "Python", icon: "/icons/Python.svg" },
    { name: "PHP", icon: "/icons/PHP.svg" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg" },
    { name: "MySQL", icon: "/icons/MySQL.svg" },
    { name: "SQL Server", icon: "/icons/SQLServer.svg" },
    { name: "MongoDB", icon: "/icons/MongoDB.svg" },
    { name: "Redis", icon: "/icons/Redis.svg" },
    { name: "Oracle", icon: "/icons/Oracle.svg" },
  ],
  frameworks: [
    { name: "React", icon: "/icons/React.svg" },
    { name: "Next.js", icon: "/icons/Next.js.svg" },
    { name: "Node.js", icon: "/icons/Node.js.svg" },
    { name: ".NET", icon: "/icons/NET.svg" },
    { name: "Laravel", icon: "/icons/Laravel.svg" },
    { name: "Django", icon: "/icons/Django.svg" },
  ],
};

const faqs = [
  {
    q: "What type of ERP software can you develop?",
    a: "We build custom ERP platforms with modules for finance, inventory, sales, purchase, HR, production, logistics, reporting and multi-location operations based on business requirements.",
  },
  {
    q: "Can the ERP match our existing business processes?",
    a: "Yes. We plan modules, user roles, approvals, forms, reports and workflows around the way your departments actually operate.",
  },
  {
    q: "Can the ERP connect with our existing software?",
    a: "Yes. Depending on available APIs and system access, we can connect the ERP with CRM, ecommerce, accounting, payment, HR and other business platforms.",
  },
  {
    q: "Can you migrate data from an old ERP or spreadsheets?",
    a: "Yes. We can assess, map and migrate agreed data from legacy systems, spreadsheets or databases, subject to the quality and structure of the source data.",
  },
  {
    q: "Can we start with a few ERP modules and add more later?",
    a: "Yes. A modular rollout can prioritize the most important departments first and add new modules, reports, workflows and integrations in later phases.",
  },
];

export default function ERPDevelopmentPage() {
  const [activeTab, setActiveTab] = useState<TabType>("languages");
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/erp-development.jpg"
          alt="ERP Development Services"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-4 lg:min-h-135 lg:px-12">
          <div className="flex items-center gap-3 text-[16px] font-light md:text-[18px]">
            <Link href="/" className="text-[#6da0ff] hover:underline">
              Home
            </Link>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Services</span>
            <span className="text-white/80">/</span>
            <span className="text-white/90">ERP Development</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Custom ERP Development for Connected Business Operations
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              We build custom ERP platforms that connect departments, shared
              data, approvals, reports and business workflows in one system
              designed around the way your operations run.
            </p>

            <div className="mt-8">
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-4 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
>
  Enquire Now
  <span className="text-[20px] leading-none">↗</span>
</button>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Overview
            </p>

            <h2 className="max-w-180 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Connect departments, workflows and business data in one ERP.
            </h2>

            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ Live builds custom ERP platforms for businesses that
              need multiple departments to work from shared data and structured
              workflows. We connect operations such as finance, inventory,
              sales, purchase, HR, production and reporting without forcing
              every business into the same fixed setup.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Connected Departments",
                text: "Bring cross-department work, handoffs and approvals into one coordinated system.",
                icon: Workflow,
              },
              {
                title: "Shared Operational Data",
                text: "Reduce repeated entries by giving teams controlled access to the same business information.",
                icon: BarChart3,
              },
              {
                title: "Controlled Access & Approvals",
                text: "Define who can view, update, approve and manage information across modules.",
                icon: LockKeyhole,
              },
              {
                title: "Modular ERP Growth",
                text: "Start with priority modules and expand workflows, users and integrations over time.",
                icon: Gauge,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="border-l-2 border-[#193175] pl-5">
                  <Icon size={26} className="mb-4 text-[#193175]" />
                  <h3 className="text-[21px] font-light tracking-[-0.3px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] font-light leading-[1.65] text-black/60">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ERP PROBLEMS */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-22">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                ERP Challenges
              </p>
              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                When disconnected tools make daily operations harder to manage.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              When every department uses separate tools and spreadsheets,
              information gets repeated, approvals slow down and reporting
              becomes difficult. A custom ERP creates one structured flow for
              the operations that need to work together.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Separate tools and spreadsheets across departments",
              "Manual approvals and repeated operational handoffs",
              "Different versions of the same business data",
              "Slow reporting from scattered records and systems",
            ].map((item, index) => (
              <div key={item} className="border-t border-black/10 pt-7">
                <span className="text-[13px] font-semibold text-[#193175]">
                  0{index + 1}
                </span>
                <p className="mt-4 text-[20px] font-light leading-[1.45] tracking-[-0.4px] text-black/80">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP SERVICES - CARDS */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Custom ERP Development for Connected Business Operations
            </p>
            <h2 className="mx-auto max-w-220 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Build the ERP modules, workflows and integrations your operations actually need.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_18px_55px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#193175]/35 hover:shadow-[0_28px_80px_rgba(60,91,155,0.1)]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#193175]/10 transition group-hover:bg-[#193175]">
                    <Icon size={27} className="text-[#193175] transition group-hover:text-white" />
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

      {/* WORKFLOW SECTION */}
      <section className="relative overflow-hidden bg-[#f6f8fc] px-5 py-16 md:px-4 lg:px-12 lg:py-14">
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
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              ERP Development Process
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              From operational discovery to a usable ERP rollout
            </h2>
            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              We move from process discovery and module planning to
              development, data migration and staged rollout so the ERP matches
              real business operations and user responsibilities.
            </p>
          </div>

          <div className="lg:hidden">
            <div className="space-y-5">
              {processSteps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="group relative rounded-[26px] border border-black/10 bg-white p-6">
                    {index !== processSteps.length - 1 && (
                      <div className="absolute left-11 top-18 h-[calc(100%+20px)] border-l-2 border-dashed border-[#193175]/45" />
                    )}
                    <div className="relative z-10 flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#193175] bg-[#edf3ff] transition duration-300 ease-out group-hover:-translate-y-1.5 group-hover:bg-white group-hover:shadow-[0_18px_42px_rgba(60,91,155,0.24)]">
                        <Icon size={23} strokeWidth={2.4} className="text-[#193175]" />
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
                  <path d="M 0 0 L 18 7 L 0 14 z" fill="#193175" />
                </marker>
              </defs>
              <path d="M 392 43 L 1208 43" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#erp-arrowhead)" />
              <path d="M 1294 43 C 1480 43 1515 150 1515 230 C 1515 318 1440 343 1294 343" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 1208 343 L 392 343" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#erp-arrowhead)" />
              <path d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#erp-arrowhead)" />
              <path d="M 392 613 L 1208 613" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#erp-arrowhead)" />
            </svg>

            {processLayout.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group absolute z-10 w-[390px] -translate-x-1/2 text-center" style={{ left: item.left, top: item.top }}>
                  <div className="mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-full border-2 border-[#193175] bg-[#edf3ff] shadow-[0_16px_42px_rgba(60,91,155,0.16)] transition duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)]">
                    <Icon size={36} strokeWidth={2.25} className="text-[#193175]" />
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

      {/* ERP MODULES */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              ERP Modules
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              ERP modules that can work together around shared business data.
            </h2>
            <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
              Start with the modules that matter most, then add new workflows,
              reports and integrations as your operational needs evolve.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
            {erpModules.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group flex items-center gap-5 border-b border-black/10 pb-6">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#193175]/10 text-[#193175] transition group-hover:bg-[#193175] group-hover:text-white">
                    <Icon size={23} />
                  </div>
                  <div>
                    <span className="text-[12px] font-semibold text-[#193175]">
                      0{index + 1}
                    </span>
                    <h3 className="mt-1 text-[21px] font-light tracking-[-0.3px]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEPARTMENT FLOW */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative overflow-hidden bg-white p-7 shadow-[0_24px_80px_rgba(0,0,0,0.06)] md:p-10">
            <div className="mb-8 flex items-center justify-between gap-5 border-b border-black/10 pb-5">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                  ERP Flow
                </p>
                <h3 className="mt-2 text-[30px] font-light tracking-[-0.7px]">
                  Shared data across connected departments.
                </h3>
              </div>
              <Database size={38} className="text-[#193175]" />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {["Sales", "Inventory", "Finance", "Purchase", "HR", "Reports"].map((item) => (
                <div key={item} className="border border-black/10 bg-[#f8faff] px-5 py-4 text-center text-[15px] font-light text-black/75">
                  {item}
                </div>
              ))}
            </div>

            <div className="my-7 flex items-center justify-center">
              <ArrowRight className="rotate-90 text-[#193175]" size={30} />
            </div>

            <div className="bg-[#193175] px-6 py-5 text-center text-[18px] font-light text-white">
              Centralized ERP Dashboard + Role-Based Reports
            </div>
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Connected Architecture
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Give connected departments one structured source of operational data.
            </h2>
            <p className="mt-6 text-[16px] font-light leading-[1.75] text-black/65">
              A custom ERP can give each department the right level of access
              to shared information while keeping approvals, updates and
              reporting in one connected flow. The goal is not to put every
              process into one screen, but to make dependent processes work
              together.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Case Studies
              </p>
              <h2 className="max-w-195 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                ERP platforms shaped around real operational workflows.
              </h2>
            </div>
            <Link href="/case-studies" className="inline-flex items-center gap-3 text-[14px] font-semibold text-[#193175]">
              View Case Studies <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-2 md:grid-cols-4">
            {caseStudies.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[10px] border border-black/10 bg-white shadow-[0_22px_70px_rgba(0,0,0,0.06)]">
                <div className="h-64 overflow-hidden bg-[#dde6f6] md:h-72">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="p-7 md:p-8">
                  <h3 className="text-[24px] font-light tracking-[-0.5px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-light leading-[1.65] text-black/60">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <IndustriesSection />

      {/* TECH STACK */}
      <section className="lazy-section bg-white px-5 py-20 text-[#161616] md:px-4 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#193175]">
              Tech Stack
            </p>
            <h2 className="mx-auto max-w-210 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Technologies we use to build custom ERP platforms
            </h2>
            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              We use reliable languages, databases and frameworks to build ERP
              platforms with maintainable modules, controlled access and room
              for future integrations.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-24">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <button key={tab.value} type="button" onClick={() => setActiveTab(tab.value)} className={`relative pb-3 text-[17px] font-light leading-none tracking-[-0.2px] transition-all duration-300 md:text-[19px] ${isActive ? "text-[#161616]" : "text-[#8d8d8d] hover:text-[#193175]"}`}>
                  {tab.label}
                  <span className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#193175] transition-all duration-300 ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}`} />
                </button>
              );
            })}
          </div>

          <div className="mx-auto max-w-315">
            <div className="space-y-5 md:space-y-6">
              {[techStack[activeTab].slice(0, 4), techStack[activeTab].slice(4, 6)].map((row, rowIndex) => (
                <div key={`${activeTab}-${rowIndex}`} className="flex flex-wrap items-center justify-center gap-y-5">
                  {row.map((item, index) => (
                    <div key={item.name} className={`group flex min-h-29.5 w-1/2 flex-col items-center justify-center px-5 py-4 text-center transition-all duration-300 hover:bg-[#f8faff] sm:w-1/3 md:w-37.5 lg:w-36.25 ${index !== row.length - 1 ? "md:border-r md:border-dotted md:border-[#bdbdbd]" : ""}`}>
                      <div className="flex h-11.5 w-full items-center justify-center">
                        <img src={item.icon} alt={item.name} loading="lazy" decoding="async" className="max-h-10 max-w-18.5 object-contain transition-all duration-300 group-hover:scale-105" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                      </div>
                      <h3 className="mt-4 text-[15px] font-light leading-[1.3] tracking-[-0.2px] text-[#193175] transition duration-300 group-hover:text-[#2f4a82] md:text-[16px]">
                        {item.name}
                      </h3>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why Choose BrainADZ Live
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              ERP development planned around real processes, roles and shared data.
            </h2>
            <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
              We combine workflow discovery, modular development and
              integration planning to build an ERP that teams can use and
              continue improving over time.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {whyChoose.map((item, index) => (
              <div key={item.title} className="border-t border-black/10 pt-7">
                <span className="text-[13px] font-semibold text-[#193175]">
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

      {/* SUPPORT */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.07)]">
            <img src="/about.avif" alt="ERP support and maintenance" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Support & Maintenance
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Keep your ERP useful as operations, users and modules change.
            </h2>
            <div className="mt-8 space-y-5">
              {supportItems.map((item) => (
                <div key={item} className="flex gap-4 border-b border-black/10 pb-5">
                  <CheckCircle2 size={24} className="mt-1 shrink-0 text-[#193175]" />
                  <p className="text-[16px] font-light leading-[1.65] text-black/65">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              FAQ
            </p>
            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about custom ERP development.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div key={faq.q} className={`group overflow-hidden rounded-[26px] border bg-white transition-all duration-300 ${openFaq === index ? "border-[#193175]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]" : "border-black/10 shadow-[0_12px_42px_rgba(0,0,0,0.035)] hover:-translate-y-1 hover:border-[#193175]/25"}`}>
                <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6">
                  <span className="flex items-center gap-4">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold transition duration-300 ${openFaq === index ? "bg-[#193175] text-white" : "bg-[#193175]/10 text-[#193175]"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[16px] font-light leading-[1.45] text-black md:text-[17px]">
                      {faq.q}
                    </span>
                  </span>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition duration-300 ${openFaq === index ? "bg-[#193175] text-white" : "bg-[#f6f8fc] text-[#193175]"}`}>
                    {openFaq === index ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="mx-5 border-t border-[#193175]/15 px-15 pb-6 pt-4 md:mx-6">
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

      {/* Final CTA */}
                  <section className="lazy-section bg-white py-8">
                                <div className="mx-auto max-w-450 px-4 lg:px-10">
                                  <div className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75">
                                    <div className="hidden w-[32%] shrink-0 md:block">
                                      <img
                                        src="/CTA/ERP-CTA.jpg"
                                        alt="BrainADZ Live ERP Development Services"
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover"
                                      />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
                                      <div className="max-w-145">
                                        <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                                          Ready to connect your business operations with a custom ERP?
                                        </h3>
                                        <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                                          Let BrainADZ Live turn your departments, approvals, data and reports into one connected ERP platform built around your operational workflows.
                                        </p>
                                      </div>
                                      <button
                          type="button"
                          onClick={() => setIsPopupOpen(true)}
                          className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#193175] md:min-w-57.5"
                        >
                                        <span>Enquire Now</span>
                                        <span className="text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                                          →
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </section>
                        
                              <PopupForm
                                isOpen={isPopupOpen}
                                onClose={() => setIsPopupOpen(false)}
                              />
    </main>
  );
}
