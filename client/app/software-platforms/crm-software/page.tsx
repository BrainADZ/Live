/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  ContactRound,
  Database,
  Download,
  Gauge,
  Handshake,
  Layers3,
  LineChart,
  Mail,
  Minus,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";
import IndustriesSection from "@/components/home/Industries";
import DemoForm from "@/components/DemoForm";

const modules = [
  {
    title: "Lead Management",
    text: "Organize enquiries, lead details, sources, owners and current status through one CRM workflow.",
    icon: Target,
  },
  {
    title: "Contact Management",
    text: "Maintain customer and contact information with relevant notes, activities and business details.",
    icon: ContactRound,
  },
  {
    title: "Sales Pipeline",
    text: "Track opportunities through configurable stages with owners, next actions and deal status.",
    icon: LineChart,
  },
  {
    title: "Reports & Dashboards",
    text: "Review configured sales, pipeline and activity information from CRM data available in the system.",
    icon: BarChart3,
  },
];

const pipeline = [
  {
    title: "New Lead",
    text: "Add new enquiries with available contact details, source information and initial requirements.",
    status: "Incoming",
    icon: Mail,
  },
  {
    title: "Qualified",
    text: "Review the opportunity and capture the information needed before moving it to the next stage.",
    status: "Reviewed",
    icon: Target,
  },
  {
    title: "Follow-up",
    text: "Assign an owner, record activities and plan the next customer action within the CRM.",
    status: "Active",
    icon: Bell,
  },
  {
    title: "Proposal",
    text: "Record proposal progress, commercials, relevant documents and the next planned action.",
    status: "Shared",
    icon: Settings2,
  },
  {
    title: "Negotiation",
    text: "Track discussions, revisions, approvals and pending actions before the opportunity is closed.",
    status: "Review",
    icon: Handshake,
  },
  {
    title: "Won",
    text: "Mark the opportunity as converted and retain relevant deal information for the next business process.",
    status: "Closed",
    icon: CheckCircle2,
  },
];

const features = [
  {
    title: "Lead Intake & Organization",
    text: "Bring enquiries into a structured CRM workflow through available forms, manual entries or planned integrations.",
  },
  {
    title: "Follow-up Tasks & Reminders",
    text: "Create activities, assign responsibilities and plan follow-ups according to the sales process.",
  },
  {
    title: "Configurable User Access",
    text: "Plan user access according to teams, responsibilities and the information different users need to manage.",
  },
  {
    title: "Customer Activity History",
    text: "Keep relevant notes, activities, meetings and deal updates connected with the customer or opportunity record.",
  },
  {
    title: "Pipeline & Sales Reporting",
    text: "Create dashboards and reports from the CRM data and performance indicators defined for the project.",
  },
  {
    title: "Integration Planning",
    text: "Connect the CRM with selected forms, communication tools or business systems where compatible interfaces are available.",
  },
];

const workflowSteps = [
  {
    title: "CRM Discovery",
    text: "We understand the sales process, lead flow, customer journey, team roles and reporting requirements.",
    icon: Search,
  },
  {
    title: "Process & Pipeline Mapping",
    text: "We define stages, ownership rules, activities, data fields and the required CRM workflow.",
    icon: Workflow,
  },
  {
    title: "Dashboard Planning",
    text: "We plan CRM screens and views around the daily needs of users, managers and decision makers.",
    icon: Layers3,
  },
  {
    title: "Platform Configuration",
    text: "The required CRM modules, workflows, dashboards and integrations are configured or developed for the project.",
    icon: Database,
  },
  {
    title: "Testing & Handover",
    text: "We test the configured workflows and prepare users for the agreed CRM operating process.",
    icon: ShieldCheck,
  },
  {
    title: "Deployment Support",
    text: "The CRM is deployed with implementation support according to the agreed project scope.",
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
  "Website Forms",
  "Email Services",
  "Messaging APIs",
  "ERP Systems",
  "Payment Systems",
  "Spreadsheets",
  "Analytics Tools",
  "SMS Providers",
];

const faqs = [
  {
    q: "Can BrainADZ configure CRM Software around our sales process?",
    a: "Yes. The CRM workflow can be planned around your lead stages, customer process, team responsibilities, required data and reporting needs.",
  },
  {
    q: "Can the CRM connect with website forms or communication tools?",
    a: "Yes. Integrations can be planned for compatible forms, email services, messaging APIs and other systems based on the available interfaces and project scope.",
  },
  {
    q: "Can managers view pipeline and team activity?",
    a: "Yes. Dashboards and reports can be configured using the CRM data, activities and performance indicators defined for the project.",
  },
  {
    q: "Can different users have different levels of access?",
    a: "Yes. User access can be planned according to team roles, responsibilities and the information each user needs to view or manage.",
  },
  {
    q: "Can the CRM be integrated with other business systems?",
    a: "Yes. Integration can be planned with compatible business systems and third-party services where suitable APIs or technical interfaces are available.",
  },
];

export default function CRMSoftwarePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/crm-software.jpg"
          alt="CRM Software by BrainADZ Live"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-8 lg:min-h-135 lg:px-12">
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

            <span className="text-white/90">CRM Software</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              CRM Software for Leads, Customers and Sales Workflows
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              A CRM platform for organizing leads, customer information, sales
              stages, follow-up activities and business reporting through one
              connected workflow.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                View Demo
                <span className="text-[20px] leading-none">↗</span>
              </button>

              <a
                href="/brochure/BrainADZLive.pdf"
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-3 rounded-full border border-white/35 px-8 text-[13px] font-bold text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#193175]"
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
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Software Overview
            </p>

            <h2 className="max-w-180 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              A CRM platform planned around how your team manages sales.
            </h2>

            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ Live CRM Software helps businesses organize enquiries,
              customer information, sales opportunities and follow-up
              activities through one structured platform. The CRM workflow can
              be configured around the stages, responsibilities, data and
              reporting needs of the business.
            </p>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              <div className="border-l-2 border-[#193175] pl-5">
                <h3 className="text-[20px] font-light">
                  Pipeline Visibility
                </h3>

                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Keep leads, opportunities, owners and next actions visible
                  through one sales workflow.
                </p>
              </div>

              <div className="border-l-2 border-[#193175] pl-5">
                <h3 className="text-[20px] font-light">
                  Structured Team Coordination
                </h3>

                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Organize sales activities and responsibilities without
                  depending only on scattered spreadsheets or notes.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#193175]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[30px] bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
              <img
                src="/software/crm-dashboard.webp"
                alt="CRM Software dashboard preview"
                className="h-130 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CRM */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why CRM Software
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Bring customer and sales information into one structured system.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {[
              {
                title: "Centralized Customer Records",
                text: "Keep relevant lead, contact, activity and opportunity information connected in one platform.",
              },
              {
                title: "Planned Follow-up Activities",
                text: "Assign tasks, record activities and keep the next customer action visible to the responsible user.",
              },
              {
                title: "Clear Sales Stages",
                text: "Organize opportunities through a pipeline that reflects how the business actually manages sales.",
              },
              {
                title: "Business Reporting",
                text: "Create dashboards and reports using the CRM data and performance indicators defined for the project.",
              },
            ].map((item, index) => (
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

      {/* CORE MODULES */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Core Modules
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                CRM modules for managing the sales and customer workflow.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              The module structure can be planned around the information,
              activities and reporting requirements your team needs to manage
              during the sales process.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {modules.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-black/10 bg-[#f8faff] p-7 transition hover:-translate-y-1 hover:border-[#193175]/30 hover:bg-white hover:shadow-[0_22px_65px_rgba(60,91,155,0.1)]"
                >
                  <div className="mb-6 flex h-15 w-15 items-center justify-center rounded-2xl bg-[#193175]/10 transition group-hover:bg-[#193175]">
                    <Icon
                      size={27}
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

      {/* SALES PIPELINE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Sales Pipeline
            </p>

            <h2 className="max-w-175 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Follow opportunities from first enquiry to closure.
            </h2>

            <p className="mt-5 max-w-160 text-[16px] font-light leading-[1.7] text-black/65">
              A CRM pipeline gives teams a stage-by-stage view of opportunities,
              ownership and planned actions. The stages can be configured around
              the actual sales process used by the business.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:max-w-135">
              <div className="border border-black/10 bg-white p-5">
                <span className="text-[36px] font-light leading-none tracking-[-1px] text-[#193175]">
                  06
                </span>

                <p className="mt-3 text-[14px] font-light leading-normal text-black/60">
                  Example stages shown from new enquiry to closed opportunity.
                </p>
              </div>

              <div className="border border-black/10 bg-white p-5">
                <span className="text-[36px] font-light leading-none tracking-[-1px] text-[#193175]">
                  Custom
                </span>

                <p className="mt-3 text-[14px] font-light leading-normal text-black/60">
                  Stages and activities can be planned around your workflow.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-8 top-8 hidden w-px bg-[#193175]/25 md:block" />

            <div className="space-y-5">
              {pipeline.map((item, index) => {
                const Icon = item.icon;
                const isFinalStage = index === pipeline.length - 1;

                return (
                  <div
                    key={item.title}
                    className="relative grid gap-5 border border-black/10 bg-white p-5 shadow-[0_18px_55px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#193175]/35 hover:shadow-[0_24px_70px_rgba(60,91,155,0.12)] md:grid-cols-[64px_1fr_auto] md:items-center md:p-6"
                  >
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#193175]/25 bg-[#eef4ff] text-[#193175]">
                      <Icon size={26} strokeWidth={2.1} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                          Stage {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="h-px w-8 bg-[#193175]/25" />

                        <span className="text-[12px] font-light uppercase tracking-[0.16em] text-black/45">
                          {item.status}
                        </span>
                      </div>

                      <h3 className="mt-3 text-[24px] font-light tracking-[-0.5px] text-black md:text-[28px]">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-175 text-[15px] font-light leading-[1.7] text-black/62">
                        {item.text}
                      </p>
                    </div>

                    <div
                      className={`flex h-12 min-w-30 items-center justify-center border px-5 text-[13px] font-semibold uppercase tracking-[0.14em] ${
                        isFinalStage
                          ? "border-[#193175] bg-[#193175] text-white"
                          : "border-[#193175]/25 bg-[#f6f8fc] text-[#193175]"
                      }`}
                    >
                      {isFinalStage ? "Converted" : "In Progress"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* STICKY FEATURES */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.76fr_1.24fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Platform Features
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Practical CRM capabilities for daily sales management.
            </h2>

            <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
              BrainADZ Live CRM Software can bring customer information,
              activities, opportunities, reporting and planned integrations
              into one structured sales workflow.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Discuss Your CRM Requirement
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="border-t border-black/10">
            {features.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[75px_1fr]"
              >
                <span className="text-[14px] font-semibold text-[#193175]">
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
          className="pointer-events-none absolute right-[-9%] top-[-8%] hidden h-[116%] w-[32%] opacity-35 lg:block"
          style={{
            backgroundImage:
              "repeating-radial-gradient(ellipse at center, rgba(60, 91, 155, 0.18) 0 1px, transparent 1px 14px)",
            transform: "rotate(5deg) scaleX(0.72)",
          }}
        />

        <div className="mx-auto max-w-375">
          <div className="relative z-10 mx-auto mb-12 max-w-295 text-center lg:mb-14">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              How It Works
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              Our CRM Software Implementation Roadmap
            </h2>

            <p className="mx-auto mt-5 max-w-245 text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              A practical process for mapping, configuring and deploying CRM
              software around the required business workflow.
            </p>
          </div>

          <div className="lg:hidden">
            <div className="space-y-5">
              {workflowSteps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative rounded-[26px] border border-black/10 bg-white p-6"
                  >
                    {index !== workflowSteps.length - 1 && (
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
                  id="crm-arrowhead"
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
                markerEnd="url(#crm-arrowhead)"
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
                markerEnd="url(#crm-arrowhead)"
              />

              <path
                d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#crm-arrowhead)"
              />

              <path
                d="M 392 613 L 1208 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#crm-arrowhead)"
              />
            </svg>

            {workflowLayout.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group absolute z-10 w-97.5 -translate-x-1/2 text-center"
                  style={{
                    left: item.left,
                    top: item.top,
                  }}
                >
                  <div className="mx-auto flex h-21.5 w-21.5 items-center justify-center rounded-full border-2 border-[#193175] bg-[#edf3ff] shadow-[0_16px_42px_rgba(60,91,155,0.16)] transition duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)]">
                    <Icon
                      size={36}
                      strokeWidth={2.25}
                      className="text-[#193175]"
                    />
                  </div>

                  <h3 className="mt-6 text-[30px] font-light leading-[1.15] tracking-[-0.8px] text-black xl:text-[32px]">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-82.5 text-[17px] font-light leading-[1.55] text-black/65 xl:text-[18px]">
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
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Integration Planning
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Connect CRM with selected business and communication tools.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              Integration scope can be planned according to the systems you
              already use and the APIs or technical interfaces available for
              connection.
            </p>
          </div>

          <div className="grid gap-y-5 md:grid-cols-4">
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

      {/* DASHBOARD PREVIEW */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Dashboard Preview
            </p>

            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              A central CRM view for customers, opportunities and sales
              activity.
            </h2>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-black/10 bg-white p-4 shadow-[0_30px_90px_rgba(0,0,0,0.08)] md:p-6">
            <img
              src="/software/crm-preview-large.webp"
              alt="CRM Software dashboard preview"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY BRAINADZ */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why BrainADZ
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              CRM planning based on real sales and customer workflows.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {[
              {
                title: "Workflow-First Planning",
                text: "We start with how your team manages leads, customers and opportunities before defining the CRM structure.",
              },
              {
                title: "Configurable Module Structure",
                text: "CRM modules and data fields can be planned around the information and processes required by the project.",
              },
              {
                title: "Integration Planning",
                text: "Connections with selected tools and systems are planned according to available technical interfaces.",
              },
              {
                title: "Scope-Based Implementation Support",
                text: "Configuration, deployment guidance and support are provided according to the agreed project scope.",
              },
            ].map((item, index) => (
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

      {/* FAQ */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              FAQ
            </p>

            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about CRM Software.
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
      <section className="lazy-section bg-white py-12">
        <div className="mx-auto max-w-450 px-8 lg:px-10">
          <div className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/CTA/home-cta.png"
                alt="CRM Software platform by BrainADZ Live"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Ready to review your CRM workflow?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  See how leads, customers, opportunities and follow-up
                  activities can be organized through one CRM platform.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#193175] md:min-w-57.5"
              >
                <span>Request a Demo</span>

                <span className="text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
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
