/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  CreditCard,
  Database,
  Gauge,
  GraduationCap,
  KeyRound,
  Layers3,
  LifeBuoy,
  LockKeyhole,
  Minus,
  MonitorSmartphone,
  Plus,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Store,
  Users,
  Workflow,
} from "lucide-react";
import IndustriesSection from "@/components/home/Industries"
import PopupForm from "@/components/PopupForm";

type TabType = "frontend" | "backend" | "databases" | "cloud";

type StackItem = {
  name: string;
  icon: string;
};

const workflow = [
  {
    title: "Product Discovery",
    text: "We understand the product idea, target users, core problem, business model, feature priorities and launch goals.",
    icon: Search,
  },
  {
    title: "Product & Architecture Planning",
    text: "We define user roles, account structure, modules, billing needs, APIs, data flow, integrations and cloud architecture.",
    icon: Layers3,
  },
  {
    title: "UI/UX & Prototype",
    text: "We design onboarding, dashboards, product workflows and admin experiences before development begins.",
    icon: MonitorSmartphone,
  },
  {
    title: "MVP & Core Product Development",
    text: "We build the priority features, user accounts, admin controls, subscriptions and integrations required for launch.",
    icon: Code2,
  },
  {
    title: "Testing & Deployment",
    text: "We test workflows, permissions, billing, performance and security before deploying the platform to the selected environment.",
    icon: ShieldCheck,
  },
  {
    title: "Measure, Improve & Scale",
    text: "We improve features, performance, reporting, integrations and infrastructure as product usage and requirements grow.",
    icon: Rocket,
  },
];

const workflowLayout = [
  { ...workflow[0], left: "21.75%", top: "0px" },
  { ...workflow[1], left: "78.25%", top: "0px" },
  { ...workflow[2], left: "21.75%", top: "300px" },
  { ...workflow[3], left: "78.25%", top: "300px" },
  { ...workflow[4], left: "21.75%", top: "570px" },
  { ...workflow[5], left: "78.25%", top: "570px" },
];

const saasBenefits = [
  {
    title: "Subscription & Account Management",
    text: "Support plans, user accounts, renewals and billing workflows based on the product model you choose.",
    icon: CreditCard,
  },
  {
    title: "Scalable Product Foundation",
    text: "Add users, modules, integrations and infrastructure capacity as product usage grows.",
    icon: Gauge,
  },
  {
    title: "Centralized Product Operations",
    text: "Manage users, permissions, plans, reports and product activity from one controlled platform.",
    icon: Settings2,
  },
  {
    title: "Accessible Digital Product",
    text: "Deliver a web-based product that authorized users can access across devices through secure accounts.",
    icon: Rocket,
  },
];

const solutions = [
  { title: "CRM SaaS Platforms", text: "Lead management, sales workflows, customer history, team access and reporting.", icon: Users },
  { title: "ERP SaaS Platforms", text: "Connected modules for operations, finance, inventory, HR, approvals and reporting.", icon: BriefcaseBusiness },
  { title: "Marketplace Platforms", text: "Vendor onboarding, listings, orders, payments, commissions and admin control.", icon: Store },
  { title: "Project & Workflow SaaS", text: "Tasks, approvals, timelines, collaboration, status tracking and team visibility.", icon: Workflow },
  { title: "Learning SaaS Platforms", text: "Courses, users, progress, assessments, content management and reporting.", icon: GraduationCap },
  { title: "Analytics & Reporting SaaS", text: "Dashboards, KPIs, custom reports, data views and controlled user access.", icon: BarChart3 },
];

const architectureItems = [
  "Account & tenant structure",
  "User roles & permissions",
  "Plans, subscriptions & billing",
  "APIs & third-party integrations",
  "Cloud deployment & scaling",
  "Product analytics & reporting",
];

const saasTypes = [
  {
    title: "Business Management SaaS",
    text: "Custom platforms that bring users, records, approvals, tasks, dashboards and reporting into one online product.",
    icon: Layers3,
  },
  {
    title: "ERP & Operations SaaS",
    text: "Modular platforms for operations, inventory, finance, HR, purchasing, approvals and management reporting.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Project & Workflow SaaS",
    text: "Products for tasks, projects, approvals, timelines, collaboration and progress visibility across teams.",
    icon: Workflow,
  },
  {
    title: "Communication & Service Platforms",
    text: "Account-based platforms for messages, notifications, service requests, conversations and team coordination.",
    icon: Bell,
  },
  {
    title: "HR & Workforce SaaS",
    text: "Systems for employee records, onboarding, attendance, workflows, documents, permissions and reports.",
    icon: Users,
  },
  {
    title: "CRM & Customer Operations SaaS",
    text: "Platforms for enquiries, leads, follow-ups, pipelines, customer history, tasks and customer-facing workflows.",
    icon: ShoppingCart,
  },
];

const coreFeatures = [
  "Admin dashboard",
  "User & role management",
  "Plans & subscriptions",
  "Payment & billing flow",
  "Notifications & alerts",
  "Reports & product analytics",
  "API & third-party integrations",
  "Security & access controls",
];

const caseStudies = [
  {
    title: "CRM SaaS Platform",
    text: "A subscription-based CRM platform with lead tracking, sales pipeline, role-based access and reporting.",
    image: "/services/hero/crm-saas.jpg",
  },
  {
    title: "Project Management SaaS",
    text: "A collaborative SaaS product for tasks, teams, timelines, approvals and project visibility.",
    image: "/services/hero/project-management-saas.jpg",
  },
  {
    title: "Learning SaaS Platform",
    text: "An LMS platform with courses, student progress, assessments, content management and analytics.",
    image: "/services/hero/learning-saas.jpg",
  },
  {
    title: "Analytics Dashboard SaaS",
    text: "A data dashboard product for KPIs, custom reports, team activity and business intelligence.",
    image: "/services/hero/analytics-saas.jpg",
  },
];

const whyChoose = [
  {
    title: "Product-First Planning",
    text: "We define users, workflows, feature priorities and MVP scope before development so the product starts with a clear purpose.",
  },
  {
    title: "Architecture for Future Growth",
    text: "We plan accounts, permissions, billing, data, integrations and deployment with room for future modules and usage growth.",
  },
  {
    title: "Security & Access by Design",
    text: "Authentication, permissions, protected APIs and controlled data access are planned as core parts of the product.",
  },
  {
    title: "Continuous Product Improvement",
    text: "We support the SaaS after launch with fixes, feature development, performance work, integration updates and technical guidance.",
  },
];

const supportItems = [
  "Issue monitoring and production support",
  "New features, modules and workflow improvements",
  "Performance and database optimization",
  "Security, dependency and access updates",
  "Subscription, billing and integration improvements",
];

const tabs: { label: string; value: TabType }[] = [
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Databases", value: "databases" },
  { label: "Cloud & DevOps", value: "cloud" },
];

const techStack: Record<TabType, StackItem[]> = {
  frontend: [
    { name: "React", icon: "/icons/React.svg" },
    { name: "Next.js", icon: "/icons/Next.js.svg" },
    { name: "Vue.js", icon: "/icons/Vue.js.svg" },
    { name: "Angular", icon: "/icons/Angular.svg" },
    { name: "TypeScript", icon: "/icons/TypeScript.svg" },
    { name: "Tailwind CSS", icon: "/icons/Tailwind CSS.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/icons/Node.js.svg" },
    { name: "Express.js", icon: "/icons/Express.svg" },
    { name: "Python", icon: "/icons/Python.svg" },
    { name: "Django", icon: "/icons/Django.svg" },
    { name: ".NET", icon: "/icons/NET.svg" },
    { name: "Java", icon: "/icons/Java.svg" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg" },
    { name: "MySQL", icon: "/icons/MySQL.svg" },
    { name: "MongoDB", icon: "/icons/MongoDB.svg" },
    { name: "Redis", icon: "/icons/Redis.svg" },
    { name: "SQL Server", icon: "/icons/SQLServer.svg" },
    { name: "Cassandra", icon: "/icons/Cassandra.svg" },
  ],
  cloud: [
    { name: "AWS", icon: "/icons/AWS.svg" },
    { name: "Azure", icon: "/icons/Azure.svg" },
    { name: "Google Cloud", icon: "/icons/Google Cloud.svg" },
    { name: "Docker", icon: "/icons/Docker.svg" },
    { name: "Kubernetes", icon: "/icons/Kubernetes.svg" },
    { name: "GitHub Actions", icon: "/icons/GitHub Actions.svg" },
  ],
};

const faqs = [
  {
    q: "What is custom SaaS development?",
    a: "Custom SaaS development means building an online software product around your own users, workflows, modules, account structure, billing model, integrations and business requirements.",
  },
  {
    q: "Can you build an MVP before developing the full SaaS product?",
    a: "Yes. We can prioritize the core user journey and must-have features for an MVP, then expand the product based on feedback, usage and business priorities.",
  },
  {
    q: "Can you add subscription plans and online billing?",
    a: "Yes. Depending on the product model and payment provider, we can build plans, subscriptions, payment flows, invoices, renewals and related admin controls.",
  },
  {
    q: "Can a SaaS platform support different user roles or organizations?",
    a: "Yes. We can build role-based access and account structures for admins, teams, customers, vendors, managers or multiple organizations based on the product requirements.",
  },
  {
    q: "Can you integrate a SaaS product with other software and APIs?",
    a: "Yes. Depending on available APIs and access, we can connect the product with payment systems, CRM, ERP, communication tools, analytics services and other third-party platforms.",
  },
  {
    q: "Do you support SaaS products after launch?",
    a: "Yes. We provide issue resolution, performance improvements, security and dependency updates, integration maintenance and ongoing feature development.",
  },
];

export default function SaaSDevelopmentPage() {
  const [activeTab, setActiveTab] = useState<TabType>("frontend");
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/saas-development.jpg"
          alt="SaaS Development Services"
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
            <span className="text-white/90">SaaS Development</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              SaaS Development Services
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              We design and develop custom SaaS products with secure user accounts,
              admin controls, subscriptions, integrations and cloud-ready architecture
              built around your product goals.
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
            <h2 className="max-w-170 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Turn your software idea into a SaaS product people can use and manage.
            </h2>
            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ Live designs and develops custom SaaS platforms around your
              users, workflows and business model. From user accounts and admin
              dashboards to subscriptions, integrations and reporting, we help you
              move from product idea to MVP and continue improving the platform after launch.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {saasBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="border-l-2 border-[#193175] pl-5">
                  <Icon size={28} className="mb-4 text-[#193175]" />
                  <h3 className="text-[20px] font-light">{item.title}</h3>
                  <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY BUILD SAAS */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why Build SaaS
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Build one online product that can serve users, teams and customers at scale.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {saasBenefits.map((item, index) => (
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

      {/* SAAS SOLUTIONS */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              SaaS Solutions We Build
            </p>
            <h2 className="mx-auto max-w-220 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              SaaS products built around different workflows and product models.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_18px_55px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:border-[#193175]/30 hover:shadow-[0_24px_75px_rgba(60,91,155,0.1)]"
                >
                  <div className="mb-6 flex h-15 w-15 items-center justify-center rounded-2xl bg-[#193175]/10 transition group-hover:bg-[#193175]">
                    <Icon size={27} className="text-[#193175] transition group-hover:text-white" />
                  </div>
                  <h3 className="text-[23px] font-light tracking-[-0.4px]">{item.title}</h3>
                  <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SAAS ARCHITECTURE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              SaaS Architecture
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Plan the product foundation before adding more users and features.
            </h2>
            <p className="mt-5 max-w-165 text-[16px] font-light leading-[1.7] text-black/65">
              A SaaS product needs more than screens. We plan how accounts,
              permissions, billing, data, integrations, reporting and deployment
              should work together before the product grows.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {architectureItems.map((item, index) => (
              <div key={item} className="flex items-center gap-4 border-b border-black/10 pb-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#193175]/10 text-[13px] font-semibold text-[#193175]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[18px] font-light tracking-[-0.3px] text-black/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAAS DEVELOPMENT PROCESS */}
      <section className="relative overflow-hidden bg-white px-5 py-16 md:px-4 lg:px-12 lg:py-14">
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
              SaaS Development Process
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              From product idea to launch and continuous improvement
            </h2>
            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              We move from product discovery and architecture to MVP development,
              testing, deployment and ongoing improvement through one connected process.
            </p>
          </div>

          <div className="lg:hidden">
            <div className="space-y-5">
              {workflow.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="group relative rounded-[26px] border border-black/10 bg-white p-6">
                    {index !== workflow.length - 1 && (
                      <div className="absolute left-11 top-18 h-[calc(100%+20px)] border-l-2 border-dashed border-[#193175]/45" />
                    )}
                    <div className="relative z-10 flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#193175] bg-[#edf3ff] transition duration-300 ease-out group-hover:-translate-y-1.5 group-hover:bg-white group-hover:shadow-[0_18px_42px_rgba(60,91,155,0.24)]">
                        <Icon size={23} strokeWidth={2.4} className="text-[#193175]" />
                      </div>
                      <div>
                        <h3 className="text-[22px] font-light leading-tight tracking-[-0.5px]">{item.title}</h3>
                        <p className="mt-3 text-[15px] font-light leading-[1.65] text-black/65">{item.text}</p>
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
                <marker id="saas-arrowhead" markerHeight="14" markerUnits="userSpaceOnUse" markerWidth="18" orient="auto" refX="16" refY="7">
                  <path d="M 0 0 L 18 7 L 0 14 z" fill="#193175" />
                </marker>
              </defs>
              <path d="M 392 43 L 1208 43" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#saas-arrowhead)" />
              <path d="M 1294 43 C 1480 43 1515 150 1515 230 C 1515 318 1440 343 1294 343" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 1208 343 L 392 343" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#saas-arrowhead)" />
              <path d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#saas-arrowhead)" />
              <path d="M 392 613 L 1208 613" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#saas-arrowhead)" />
            </svg>

            {workflowLayout.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group absolute z-10 w-[390px] -translate-x-1/2 text-center" style={{ left: item.left, top: item.top }}>
                  <div className="mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-full border-2 border-[#193175] bg-[#edf3ff] shadow-[0_16px_42px_rgba(60,91,155,0.16)] transition duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)]">
                    <Icon size={36} strokeWidth={2.25} className="text-[#193175]" />
                  </div>
                  <h3 className="mt-6 text-[30px] font-light leading-[1.15] tracking-[-0.8px] text-black xl:text-[32px]">{item.title}</h3>
                  <p className="mx-auto mt-4 max-w-[330px] text-[17px] font-light leading-[1.55] text-black/65 xl:text-[18px]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TYPES OF APPS STICKY SECTION */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              SaaS Platforms We Build
            </p>
            <h2 className="max-w-175 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Flexible SaaS products for different business and operational needs
            </h2>
            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70 md:text-[18px]">
              BrainADZ Live builds custom SaaS products around the workflow,
              users and operating model of each product. The structure can include
              customer-facing accounts, internal teams, admin controls, subscriptions,
              integrations and reporting based on what the platform actually needs.
            </p>

            <div className="mt-12 overflow-hidden rounded-[28px] bg-[#f6f8fc] p-8 shadow-[0_22px_70px_rgba(0,0,0,0.05)]">
              <h3 className="max-w-110 text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-[#0f5f95] md:text-[34px]">
                Build the Right SaaS Product Foundation
              </h3>
              <a
                href="/contact"
                className="mt-8 inline-flex h-13 min-w-52 items-center justify-center rounded-lg bg-[#193175] px-6 text-[15px] font-semibold text-white transition hover:bg-[#2f4a82]"
              >
                Discuss Your SaaS Product
              </a>
            </div>
          </div>

          <div>
            {saasTypes.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="grid gap-5 border-b border-black/10 py-8 first:pt-0 md:grid-cols-[72px_1fr]">
                  <div className="flex h-15 w-15 items-center justify-center rounded-2xl bg-[#193175]/10">
                    <Icon size={29} className="text-[#193175]" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-light tracking-[-0.4px] text-black md:text-[26px]">{item.title}</h3>
                    <p className="mt-3 text-[16px] font-light leading-[1.75] text-black/65 md:text-[17px]">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">Core SaaS Features</p>
              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">Core capabilities that support users, operations and product management.</h2>
            </div>
            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              We build the features required to manage users, permissions, billing,
              notifications, integrations, reporting and day-to-day product operations.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
            {coreFeatures.map((item, index) => (
              <div key={item} className="flex items-center gap-4 border-b border-black/10 pb-5">
                <CheckCircle2 size={24} className="shrink-0 text-[#193175]" />
                <span className="text-[17px] font-light text-black/75">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MVP TO FULL PRODUCT */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-8 lg:grid-cols-2">
          <div className="border-t border-black/10 pt-8">
            <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">MVP Launch</span>
            <h2 className="mt-4 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[42px]">Launch the core product before adding everything.</h2>
            <p className="mt-5 text-[16px] font-light leading-[1.75] text-black/65">
              We define the first usable version around the core user journey,
              essential admin controls and priority features so the product can be
              tested without building every future module at once.
            </p>
          </div>
          <div className="border-t border-black/10 pt-8">
            <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">Full Product Scaling</span>
            <h2 className="mt-4 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[42px]">Expand the product as real needs become clearer.</h2>
            <p className="mt-5 text-[16px] font-light leading-[1.75] text-black/65">
              After launch, we can add modules, automation, billing improvements,
              integrations, reporting and performance work based on usage, feedback
              and product priorities.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">Case Studies</p>
              <h2 className="max-w-195 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">SaaS platforms built around real product and operational workflows.</h2>
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
                  <div className="mb-4 flex items-center justify-between gap-5">
                    <h3 className="text-[23px] font-light tracking-[-0.5px]">{item.title}</h3>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#193175]/10">
                      <ArrowRight size={18} className="text-[#193175]" />
                    </span>
                  </div>
                  <p className="text-[14px] font-light leading-[1.65] text-black/60">{item.text}</p>
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
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#193175]">Tech Stack</p>
            <h2 className="mx-auto max-w-210 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Technologies we use to build custom SaaS products
            </h2>
            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              We use modern frontend, backend, database and cloud technologies to
              build maintainable SaaS products with secure access, integrations and
              room for future features.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-24">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveTab(tab.value)}
                  className={`relative pb-3 text-[17px] font-light leading-none tracking-[-0.2px] transition-all duration-300 md:text-[19px] ${
                    isActive ? "text-[#161616]" : "text-[#8d8d8d] hover:text-[#193175]"
                  }`}
                >
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
                    <div
                      key={item.name}
                      className={`group flex min-h-29.5 w-1/2 flex-col items-center justify-center px-5 py-4 text-center transition-all duration-300 hover:bg-[#f8faff] sm:w-1/3 md:w-37.5 lg:w-36.25 ${
                        index !== row.length - 1 ? "md:border-r md:border-dotted md:border-[#bdbdbd]" : ""
                      }`}
                    >
                      <div className="flex h-11.5 w-full items-center justify-center">
                        <img
                          src={item.icon}
                          alt={item.name}
                          loading="lazy"
                          decoding="async"
                          className="max-h-10 max-w-18.5 object-contain transition-all duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
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
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">Why Choose BrainADZ Live</p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">We build SaaS products around users, workflows and a clear product roadmap.</h2>
          </div>
          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {whyChoose.map((item, index) => (
              <div key={item.title} className="border-t border-black/10 pt-7">
                <span className="text-[13px] font-semibold text-[#193175]">0{index + 1}</span>
                <h3 className="mt-3 text-[24px] font-light tracking-[-0.4px]">{item.title}</h3>
                <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden bg-[#f6f8fc] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <img src="/services/hero/saas-support.jpg" alt="SaaS Support and Growth" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">SaaS Support & Growth</p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">Keep improving the product after launch.</h2>
            <p className="mt-5 text-[16px] font-light leading-[1.7] text-black/65">
              After launch, we help resolve issues, improve performance and continue
              developing features, integrations, billing flows and product operations
              as requirements change.
            </p>
            <div className="mt-8 space-y-4">
              {supportItems.map((item) => (
                <div key={item} className="flex items-center gap-4 border-b border-black/10 pb-4">
                  <CheckCircle2 size={23} className="shrink-0 text-[#193175]" />
                  <span className="text-[16px] font-light text-black/70">{item}</span>
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
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">FAQ</p>
            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">Common questions about custom SaaS development.</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div key={faq.q} className={`overflow-hidden rounded-[26px] border bg-white transition-all duration-300 ${openFaq === index ? "border-[#193175]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]" : "border-black/10"}`}>
                <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6">
                  <span className="text-[16px] font-light leading-[1.45] text-black md:text-[17px]">{faq.q}</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f6f8fc] text-[#193175]">
                    {openFaq === index ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="mx-5 border-t border-[#193175]/15 pb-6 pt-4 md:mx-6">
                    <p className="text-[15px] font-light leading-[1.75] text-black/65">{faq.a}</p>
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
                                        src="/CTA/Saas-CTA.jpg"
                                        alt="BrainADZ Live SaaS Development Services"
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover"
                                      />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
                                      <div className="max-w-145">
                                        <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                                          Ready to turn your software idea into a SaaS product?
                                        </h3>
                                        <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                                          Let BrainADZ Live design and build your SaaS platform around the users, workflows, subscriptions, integrations and product roadmap you actually need.
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
