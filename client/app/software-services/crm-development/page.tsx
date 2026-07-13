/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  Code2,
  Database,
  FileChartColumn,
  Gauge,
  Headphones,
  LifeBuoy,
  Mail,
  MessageSquareText,
  Minus,
  Network,
  PieChart,
  Plus,
  RefreshCcw,
  Rocket,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  UserCheck,
  UsersRound,
  Workflow,
} from "lucide-react";
import IndustriesSection from "@/components/home/Industries"
import PopupForm from "@/components/PopupForm";

type TabType = "frontend" | "backend" | "database" | "integrations";

type StackItem = {
  name: string;
  icon: string;
};

const crmProcess = [
  {
    title: "Business & CRM Discovery",
    text: "We understand your sales process, customer journey, lead sources, team roles, existing tools and reporting needs.",
    icon: Search,
  },
  {
    title: "Workflow & Data Mapping",
    text: "We map lead stages, ownership, follow-ups, approvals, customer touchpoints and the data your teams need at each step.",
    icon: Workflow,
  },
  {
    title: "CRM Architecture",
    text: "We plan modules, roles, permissions, data structure, integrations, dashboards and automation rules before development begins.",
    icon: Network,
  },
  {
    title: "Custom CRM Development",
    text: "We build the required CRM modules, including lead management, pipelines, customer records, tasks, reports and admin controls.",
    icon: Code2,
  },
  {
    title: "Testing, Migration & Training",
    text: "We test workflows, permissions and data accuracy, migrate agreed records and prepare your team to use the CRM confidently.",
    icon: UserCheck,
  },
  {
    title: "Launch & Continuous Improvement",
    text: "We deploy the CRM, review how teams use it and improve workflows, reports, integrations and features as business needs change.",
    icon: Rocket,
  },
];

const crmProcessLayout = [
  { ...crmProcess[0], left: "21.75%", top: "0px" },
  { ...crmProcess[1], left: "78.25%", top: "0px" },
  { ...crmProcess[2], left: "21.75%", top: "300px" },
  { ...crmProcess[3], left: "78.25%", top: "300px" },
  { ...crmProcess[4], left: "21.75%", top: "570px" },
  { ...crmProcess[5], left: "78.25%", top: "570px" },
];

const overviewHighlights = [
  {
    title: "Lead & Enquiry Control",
    text: "Track every lead, source, owner, status and next action from one place.",
    icon: Target,
  },
  {
    title: "Follow-up Automation",
    text: "Automate reminders, assignments, tasks, notifications and selected workflow actions.",
    icon: BellRing,
  },
  {
    title: "Complete Customer Context",
    text: "Give teams one view of customer details, conversations, activities, deals and service history.",
    icon: UsersRound,
  },
  {
    title: "Actionable Reporting",
    text: "Track lead sources, pipeline movement, conversions, follow-ups and team activity with relevant reports.",
    icon: FileChartColumn,
  },
];

const crmModules = [
  {
    title: "Lead & Enquiry Management",
    text: "Capture leads from different channels, assign ownership, qualify enquiries and track every next step.",
    icon: Target,
  },
  {
    title: "Sales Pipeline & Follow-ups",
    text: "Manage deal stages, follow-up activity, proposals and sales progress without losing visibility.",
    icon: BarChart3,
  },
  {
    title: "Customer 360° Profiles",
    text: "Keep customer details, notes, communication, activities, documents and transaction history together.",
    icon: UserCheck,
  },
  {
    title: "Tasks, Alerts & Workflow Automation",
    text: "Automate reminders, lead routing, recurring tasks, status changes and role-based notifications.",
    icon: SlidersHorizontal,
  },
];

const lifecycle = [
  "Enquiry Capture",
  "Qualification & Assignment",
  "Follow-up & Activity Tracking",
  "Proposal & Deal Management",
  "Customer Onboarding",
  "Retention, Renewal & Support",
];

const integrations = [
  { title: "WhatsApp & SMS", icon: MessageSquareText },
  { title: "Email Marketing", icon: Mail },
  { title: "Payment & Billing", icon: BriefcaseBusiness },
  { title: "ERP & Business Systems", icon: Boxes },
  { title: "Calendar Tools", icon: CalendarCheck },
  { title: "Support Desk", icon: Headphones },
];

const caseStudies = [
  {
    title: "Retail Sales CRM",
    text: "A CRM to centralize enquiries, customer follow-ups, sales pipelines and store-level performance reporting.",
    image: "/services/hero/Retail-CRM-and-Campaign-Management-System.png",
  },
  {
    title: "Education Admission CRM",
    text: "A centralized CRM for enquiries, counsellor assignments, follow-ups, admission stages and conversion reporting.",
    image: "/services/hero/education-crm.jpeg",
  },
  {
    title: "Real Estate CRM",
    text: "A CRM to manage property enquiries, site visits, broker coordination, reminders and deal progress.",
    image: "/services/hero/real-estate-crm.jpeg",
  },
  {
    title: "Service Business CRM",
    text: "A customer operations platform for service requests, renewals, tasks, customer history and reporting.",
    image: "/services/hero/serviceadmin.jpeg",
  },
];

const whyChoose = [
  {
    title: "Configured Around Your Process",
    text: "We plan the CRM around the way your teams actually capture leads, follow up, sell and manage customers.",
  },
  {
    title: "Clear Roles & Data Access",
    text: "Sales, managers, admins and service teams get the permissions and visibility required for their responsibilities.",
  },
  {
    title: "Practical Workflow Automation",
    text: "We automate repetitive actions such as reminders, assignments, status updates and notifications where they add real value.",
  },
  {
    title: "Reporting Built for Decisions",
    text: "Dashboards and reports focus on the metrics your teams need, from lead sources and follow-ups to conversions and activity.",
  },
];

const supportItems = [
  "User onboarding, role setup and CRM training",
  "Workflow refinement based on real team usage",
  "Issue resolution and performance monitoring",
  "New modules, reports, integrations and automation updates",
  "Data backup, security updates and access review",
];

const tabs: { label: string; value: TabType }[] = [
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Database", value: "database" },
  { label: "Integrations", value: "integrations" },
];

const techStack: Record<TabType, StackItem[]> = {
  frontend: [
    { name: "React", icon: "/icons/React.svg" },
    { name: "Next.js", icon: "/icons/Next.js.svg" },
    { name: "Vue.js", icon: "/icons/Vue.js.svg" },
    { name: "Angular", icon: "/icons/Angular.svg" },
    { name: "TypeScript", icon: "/icons/TypeScript.svg" },
    { name: "Tailwind CSS", icon: "/icons/TailwindCSS.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/icons/Node.js.svg" },
    { name: ".NET", icon: "/icons/NET.svg" },
    { name: "Laravel", icon: "/icons/Laravel.svg" },
    { name: "Django", icon: "/icons/Django.svg" },
    { name: "Java", icon: "/icons/Java.svg" },
    { name: "Python", icon: "/icons/Python.svg" },
  ],
  database: [
    { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg" },
    { name: "MySQL", icon: "/icons/MySQL.svg" },
    { name: "MongoDB", icon: "/icons/MongoDB.svg" },
    { name: "SQL Server", icon: "/icons/SQLServer.svg" },
    { name: "Redis", icon: "/icons/Redis.svg" },
    { name: "Firebase", icon: "/icons/Firebase.svg" },
  ],
  integrations: [
    { name: "REST API", icon: "/icons/API.svg" },
    { name: "GraphQL", icon: "/icons/GraphQL.svg" },
    { name: "WhatsApp", icon: "/icons/WhatsApp.svg" },
    { name: "Stripe", icon: "/icons/Stripe.svg" },
    { name: "Razorpay", icon: "/icons/Razorpay.svg" },
    { name: "Zapier", icon: "/icons/Zapier.svg" },
  ],
};

const faqs = [
  {
    q: "What is custom CRM development?",
    a: "Custom CRM development means building a customer and sales management system around your own workflows, users, data, reports and integrations instead of forcing teams into a fixed ready-made setup.",
  },
  {
    q: "Can the CRM match our existing sales process and team roles?",
    a: "Yes. We can configure lead stages, ownership rules, permissions, follow-up workflows, approvals, dashboards and reports around the way your teams already work.",
  },
  {
    q: "Can the CRM integrate with our website, WhatsApp, email or ERP?",
    a: "Yes. Depending on available APIs and access, we can connect the CRM with websites, forms, WhatsApp, SMS, email, payment systems, ERP, billing tools and other business platforms.",
  },
  {
    q: "Can you migrate data from spreadsheets or an existing CRM?",
    a: "Yes. We can assess and migrate agreed records such as leads, customers, activities and other important data, subject to the quality and structure of the existing source data.",
  },
  {
    q: "Can the CRM be expanded after launch?",
    a: "Yes. We can add new modules, reports, integrations, workflow changes and automation as your teams, processes and customer operations evolve.",
  },
];

export default function CRMDevelopmentPage() {
  const [activeTab, setActiveTab] = useState<TabType>("frontend");
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/crm-development.jpg"
          alt="CRM Development Services"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-8 lg:min-h-135 lg:px-12">
          <div className="flex items-center gap-3 text-[16px] font-light md:text-[18px]">
            <Link href="/" className="text-[#6da0ff] hover:underline">
              Home
            </Link>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Services</span>
            <span className="text-white/80">/</span>
            <span className="text-white/90">CRM Development</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Custom CRM Development for Connected Sales & Customer Operations
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              We build custom CRM systems that bring leads, follow-ups, customer records, sales pipelines, tasks, reporting and integrations into one connected workflow.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Enquire Now
                <span className="text-[20px] leading-none">↗</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Overview
            </p>
            <h2 className="max-w-170 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Bring leads, customers and team activity into one connected CRM.
            </h2>
            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ Live builds custom CRM platforms around the way your teams work. From lead capture and follow-ups to customer history, sales pipelines, tasks and reporting, we bring the information and actions your teams need into one connected system.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {overviewHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="border-t border-black/10 pt-7">
                  <Icon size={30} className="mb-5 text-[#193175]" />
                  <h3 className="text-[22px] font-light tracking-[-0.4px]">
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

      {/* CRM MODULES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                CRM Modules
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                The CRM modules your teams need to manage leads and customers every day.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              We focus on the modules that support real customer and sales work,
              while keeping room to add the workflows, permissions and
              integrations your business specifically needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {crmModules.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_18px_55px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:border-[#193175]/30 hover:shadow-[0_26px_75px_rgba(60,91,155,0.1)]"
                >
                  <div className="mb-6 flex h-15 w-15 items-center justify-center rounded-2xl bg-[#193175]/10 transition group-hover:bg-[#193175]">
                    <Icon
                      size={28}
                      className="text-[#193175] transition group-hover:text-white"
                    />
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

      {/* CRM PROCESS */}
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
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              CRM Development Process
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              From workflow discovery to a CRM your team can use every day.
            </h2>

            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              We translate your lead, sales and customer workflows into a
              structured CRM, then test, launch and improve it around real team
              usage.
            </p>
          </div>

          <div className="lg:hidden">
            <div className="space-y-5">
              {crmProcess.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative rounded-[26px] border border-black/10 bg-white p-6"
                  >
                    {index !== crmProcess.length - 1 && (
                      <div className="absolute left-11 top-18 h-[calc(100%+20px)] border-l-2 border-dashed border-[#193175]/45" />
                    )}

                    <div className="relative z-10 flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#193175] bg-[#edf3ff] transition duration-300 ease-out group-hover:-translate-y-1.5 group-hover:bg-white group-hover:shadow-[0_18px_42px_rgba(60,91,155,0.24)]">
                        <Icon
                          size={23}
                          strokeWidth={2.4}
                          className="text-[#193175]"
                        />
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
            <svg
              className="pointer-events-none absolute inset-0 z-0 h-full w-full"
              viewBox="0 0 1600 790"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id="crm-process-arrowhead"
                  markerHeight="14"
                  markerUnits="userSpaceOnUse"
                  markerWidth="18"
                  orient="auto"
                  refX="16"
                  refY="7"
                >
                  <path d="M 0 0 L 18 7 L 0 14 z" fill="#193175" />
                </marker>
              </defs>

              <path
                d="M 392 43 L 1208 43"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#crm-process-arrowhead)"
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
                markerEnd="url(#crm-process-arrowhead)"
              />

              <path
                d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#crm-process-arrowhead)"
              />

              <path
                d="M 392 613 L 1208 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#crm-process-arrowhead)"
              />
            </svg>

            {crmProcessLayout.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group absolute z-10 w-[390px] -translate-x-1/2 text-center"
                  style={{ left: item.left, top: item.top }}
                >
                  <div className="mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-full border-2 border-[#193175] bg-[#edf3ff] shadow-[0_16px_42px_rgba(60,91,155,0.16)] transition duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)]">
                    <Icon
                      size={36}
                      strokeWidth={2.25}
                      className="text-[#193175]"
                    />
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

      {/* CUSTOMER LIFECYCLE */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Customer Lifecycle
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Manage every step from first enquiry to long-term customer relationship.
            </h2>

            <p className="mt-5 max-w-160 text-[16px] font-light leading-[1.7] text-black/65">
              A useful CRM should do more than store contacts. It should show
              what has happened, what needs to happen next and who is
              responsible at every stage of the customer journey.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
            {lifecycle.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-5 border-b border-black/10 pb-6"
              >
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#193175]/10 text-[13px] font-semibold text-[#193175]">
                  0{index + 1}
                </div>

                <h3 className="text-[20px] font-light tracking-[-0.3px]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM INTEGRATIONS */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              CRM Integrations
            </p>

            <h2 className="mx-auto max-w-220 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Connect your CRM with the channels and systems your teams already use.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {integrations.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border-t border-black/10 bg-white/50 pt-7 text-center"
                >
                  <Icon size={30} className="mx-auto mb-4 text-[#193175]" />

                  <h3 className="text-[16px] font-light tracking-[-0.2px]">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Case Studies
              </p>

              <h2 className="max-w-195 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                CRM platforms shaped around different sales and customer workflows.
              </h2>
            </div>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-3 text-[14px] font-semibold text-[#193175]"
            >
              View Case Studies
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-2 md:grid-cols-4">
            {caseStudies.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[10px] border border-black/10 bg-white shadow-[0_22px_70px_rgba(0,0,0,0.06)]"
              >
                <div className="h-64 overflow-hidden bg-[#dde6f6] md:h-72">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-7 md:p-8">
                  <div className="mb-4 flex items-center justify-between gap-5">
                    <h3 className="text-[24px] font-light tracking-[-0.5px]">
                      {item.title}
                    </h3>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#193175]/10">
                      <ArrowRight size={18} className="text-[#193175]" />
                    </span>
                  </div>

                  <p className="text-[15px] font-light leading-[1.7] text-black/65">
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
      <section className="lazy-section bg-white px-5 py-20 text-[#161616] md:px-8 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#193175]">
              Tech Stack
            </p>

            <h2 className="mx-auto max-w-210 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Technologies we use to build custom CRM platforms
            </h2>

            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              We use modern frontend, backend, database and integration
              technologies to build CRM platforms that are secure, maintainable
              and ready to connect with your wider business systems.
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
                    isActive
                      ? "text-[#161616]"
                      : "text-[#8d8d8d] hover:text-[#193175]"
                  }`}
                >
                  {tab.label}

                  <span
                    className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#193175] transition-all duration-300 ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="mx-auto max-w-315">
            <div className="space-y-5 md:space-y-6">
              {[
                techStack[activeTab].slice(0, 4),
                techStack[activeTab].slice(4, 6),
              ].map((row, rowIndex) => (
                <div
                  key={`${activeTab}-${rowIndex}`}
                  className="flex flex-wrap items-center justify-center gap-y-5"
                >
                  {row.map((item, index) => (
                    <div
                      key={item.name}
                      className={`group flex min-h-29.5 w-1/2 flex-col items-center justify-center px-5 py-4 text-center transition-all duration-300 hover:bg-[#f8faff] sm:w-1/3 md:w-37.5 lg:w-36.25 ${
                        index !== row.length - 1
                          ? "md:border-r md:border-dotted md:border-[#bdbdbd]"
                          : ""
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
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why Choose BrainADZ Live
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              We build CRM software around real workflows—not a fixed template.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {whyChoose.map((item, index) => (
              <div
                key={item.title}
                className="border-t border-black/10 pt-7"
              >
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
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <img
              src="/services/hero/crm-support.jpg"
              alt="CRM support and optimization"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              CRM Support & Adoption
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Keep your CRM useful as teams and processes change.
            </h2>

            <p className="mt-5 text-[16px] font-light leading-[1.7] text-black/65">
              After launch, we support user adoption, resolve issues and refine
              workflows, reports and modules so the CRM continues to match the
              way your teams work.
            </p>

            <div className="mt-8 space-y-4">
              {supportItems.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 border-b border-black/10 pb-4"
                >
                  <CheckCircle2
                    size={22}
                    className="mt-0.5 shrink-0 text-[#193175]"
                  />

                  <p className="text-[16px] font-light leading-[1.6] text-black/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              FAQ
            </p>

            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about custom CRM development.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`group overflow-hidden rounded-[26px] border bg-white transition-all duration-300 ${
                  openFaq === index
                    ? "border-[#193175]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]"
                    : "border-black/10 shadow-[0_12px_42px_rgba(0,0,0,0.035)] hover:border-[#193175]/25"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                >
                  <span className="text-[16px] font-light leading-[1.45] text-black md:text-[17px]">
                    {faq.q}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                      openFaq === index
                        ? "bg-[#193175] text-white"
                        : "bg-[#f6f8fc] text-[#193175]"
                    }`}
                  >
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

      {/* Final CTA */}
      <section className="lazy-section bg-white py-12">
        <div className="mx-auto max-w-450 px-8 lg:px-10">
          <div className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/CTA/CRM-CTA.jpg"
                alt="BrainADZ Live CRM Development Services"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Ready to build a CRM around the way your business works?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Let BrainADZ Live turn your lead, sales and customer workflows
                  into one connected CRM with the modules, reports and
                  integrations your teams need.
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
