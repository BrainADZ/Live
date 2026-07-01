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
import IndustriesSection from "@/components/home/Industries"
import DemoForm from "@/components/DemoForm";
const modules = [
  {
    title: "Lead Management",
    text: "Capture, organize and qualify leads from multiple channels in one CRM dashboard.",
    icon: Target,
  },
  {
    title: "Contact Management",
    text: "Maintain complete customer profiles, communication history and business details.",
    icon: ContactRound,
  },
  {
    title: "Sales Pipeline",
    text: "Track deals from first enquiry to final conversion with clear pipeline stages.",
    icon: LineChart,
  },
  {
    title: "Reports & Analytics",
    text: "Monitor sales performance, follow-ups, conversions and team productivity.",
    icon: BarChart3,
  },
];

const pipeline = [
  {
    title: "New Lead",
    text: "Capture enquiries from campaigns, forms, calls and manual entries with source tracking.",
    status: "Incoming",
    icon: Mail,
  },
  {
    title: "Qualified",
    text: "Validate budget, requirement, priority and fit before the lead moves ahead.",
    status: "Scored",
    icon: Target,
  },
  {
    title: "Follow-up",
    text: "Assign owners, schedule reminders and keep all customer touchpoints visible.",
    status: "Active",
    icon: Bell,
  },
  {
    title: "Proposal",
    text: "Share commercials, scope and documents while keeping every update in the CRM.",
    status: "Sent",
    icon: Settings2,
  },
  {
    title: "Negotiation",
    text: "Track objections, revised offers, approvals and next actions before closure.",
    status: "Review",
    icon: Handshake,
  },
  {
    title: "Won",
    text: "Convert successful deals into customers with handoff notes and reporting data.",
    status: "Closed",
    icon: CheckCircle2,
  },
];

const features = [
  {
    title: "Smart Lead Capture",
    text: "Bring leads from website forms, calls, campaigns, social channels and manual entries into one centralized system.",
  },
  {
    title: "Automated Follow-ups",
    text: "Set reminders, task alerts and follow-up schedules so your sales team never misses important customer communication.",
  },
  {
    title: "Role-Based Access",
    text: "Control what each team member can view, edit or manage based on their role, department and responsibility.",
  },
  {
    title: "Customer Timeline",
    text: "View complete communication history, notes, meetings, deal updates and activity logs for every customer.",
  },
  {
    title: "Sales Performance Reports",
    text: "Understand lead source quality, conversion rate, revenue pipeline, team activity and sales growth trends.",
  },
  {
    title: "CRM Integrations",
    text: "Connect your CRM with email, WhatsApp, website forms, payment systems, ERP tools and third-party APIs.",
  },
];

const workflowSteps = [
  {
    title: "CRM Discovery",
    text: "We study your sales process, customer journey, team roles and reporting needs.",
    icon: Search,
  },
  {
    title: "Pipeline Planning",
    text: "We define stages, lead sources, follow-up rules and automation workflows.",
    icon: Workflow,
  },
  {
    title: "Dashboard Design",
    text: "We design clean CRM screens for sales teams, managers and business owners.",
    icon: Layers3,
  },
  {
    title: "CRM Development",
    text: "We build modules, APIs, dashboards, notifications and user management.",
    icon: Database,
  },
  {
    title: "Testing & Training",
    text: "We test CRM flows and help your team understand the daily usage process.",
    icon: ShieldCheck,
  },
  {
    title: "Launch & Support",
    text: "We deploy the CRM and support improvements, integrations and new features.",
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
  "Email",
  "WhatsApp",
  "Payment Gateway",
  "ERP",
  "Google Sheets",
  "Analytics",
  "SMS",
];

const faqs = [
  {
    q: "Can BrainADZ build a custom CRM for my sales team?",
    a: "Yes. BrainADZ can build a CRM around your sales pipeline, lead sources, team roles, follow-up process and reporting needs.",
  },
  {
    q: "Can the CRM include WhatsApp or email integration?",
    a: "Yes. We can integrate WhatsApp, email, website forms, SMS, payment systems and other third-party APIs depending on your requirements.",
  },
  {
    q: "Can managers track team performance?",
    a: "Yes. The CRM can include manager dashboards, sales reports, activity tracking, conversion reports and follow-up monitoring.",
  },
  {
    q: "Can we customize user roles?",
    a: "Yes. Role-based access can be configured for admins, managers, sales executives and support teams.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. BrainADZ provides post-launch support, improvements, bug fixing and feature upgrades.",
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
          src="/hero/crm.avif"
          alt="CRM Software"
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
            <span className="text-white/90">CRM Software</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              CRM Software
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              A custom CRM platform to manage leads, customers, sales pipelines,
              follow-ups, team activities and business reports from one connected dashboard.
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
              A CRM platform built around your actual sales process.
            </h2>

            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ CRM Software helps businesses organize leads, track customer interactions,
              manage follow-ups, automate sales activities and monitor team performance.
              Instead of forcing your team into a fixed template, we design CRM workflows
              around your business process.
            </p>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              <div className="border-l-2 border-[#3C5B9B] pl-5">
                <h3 className="text-[20px] font-light">Sales Visibility</h3>
                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Track every lead, deal and follow-up with better clarity.
                </p>
              </div>

              <div className="border-l-2 border-[#3C5B9B] pl-5">
                <h3 className="text-[20px] font-light">Team Productivity</h3>
                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Reduce manual tracking and improve sales team coordination.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#3C5B9B]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[30px] bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
              <img
                src="/software/crm-dashboard.webp"
                alt="CRM Dashboard Preview"
                className="h-[520px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CRM */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Why CRM Software
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Better customer management starts with a connected system.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {[
              {
                title: "Centralized Customer Data",
                text: "Keep leads, contacts, notes, calls, emails and deal history in one place.",
              },
              {
                title: "Faster Follow-ups",
                text: "Never miss important sales activities with reminders and task tracking.",
              },
              {
                title: "Clear Sales Pipeline",
                text: "Understand where each opportunity stands and what needs attention.",
              },
              {
                title: "Actionable Reports",
                text: "Make decisions using sales performance, source quality and conversion data.",
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
                Core Modules
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                CRM modules that support sales from enquiry to conversion.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              Every module is planned to simplify daily sales activity, improve customer communication
              and give management better visibility into the business pipeline.
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

      {/* SALES PIPELINE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Sales Pipeline
            </p>

            <h2 className="max-w-175 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              See every deal, owner and next action without guesswork.
            </h2>

            <p className="mt-5 max-w-160 text-[16px] font-light leading-[1.7] text-black/65">
              The CRM pipeline gives sales teams a stage-by-stage operating view:
              what came in, who owns it, what is pending and which opportunities
              are close to conversion.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:max-w-135">
              <div className="border border-black/10 bg-white p-5">
                <span className="text-[36px] font-light leading-none tracking-[-1px] text-[#3C5B9B]">
                  06
                </span>
                <p className="mt-3 text-[14px] font-light leading-[1.5] text-black/60">
                  Defined stages from first enquiry to closed deal.
                </p>
              </div>

              <div className="border border-black/10 bg-white p-5">
                <span className="text-[36px] font-light leading-none tracking-[-1px] text-[#3C5B9B]">
                  Live
                </span>
                <p className="mt-3 text-[14px] font-light leading-[1.5] text-black/60">
                  Owner visibility, reminders and conversion status.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-8 top-8 hidden w-px bg-[#3C5B9B]/25 md:block" />

            <div className="space-y-5">
              {pipeline.map((item, index) => {
                const Icon = item.icon;
                const isFinalStage = index === pipeline.length - 1;

                return (
                  <div
                    key={item.title}
                    className="relative grid gap-5 border border-black/10 bg-white p-5 shadow-[0_18px_55px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#3C5B9B]/35 hover:shadow-[0_24px_70px_rgba(60,91,155,0.12)] md:grid-cols-[64px_1fr_auto] md:items-center md:p-6"
                  >
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#3C5B9B]/25 bg-[#eef4ff] text-[#3C5B9B]">
                      <Icon size={26} strokeWidth={2.1} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                          Stage {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="h-px w-8 bg-[#3C5B9B]/25" />
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
                          ? "border-[#3C5B9B] bg-[#3C5B9B] text-white"
                          : "border-[#3C5B9B]/25 bg-[#f6f8fc] text-[#3C5B9B]"
                      }`}
                    >
                      {isFinalStage ? "Converted" : "In Motion"}
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
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Platform Features
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              CRM features that make sales management easier.
            </h2>

            <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
              BrainADZ CRM Software gives your team the tools to manage customers,
              follow-ups, deals, reporting and integrations without scattered spreadsheets.
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
              How It Works
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              Our CRM Software Implementation Roadmap
            </h2>
            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              A structured process to plan, build and launch CRM software that fits your team.
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
                <marker id="crm-arrowhead" markerHeight="14" markerUnits="userSpaceOnUse" markerWidth="18" orient="auto" refX="16" refY="7">
                  <path d="M 0 0 L 18 7 L 0 14 z" fill="#3C5B9B" />
                </marker>
              </defs>

              <path d="M 392 43 L 1208 43" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#crm-arrowhead)" />
              <path d="M 1294 43 C 1480 43 1515 150 1515 230 C 1515 318 1440 343 1294 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 1208 343 L 392 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#crm-arrowhead)" />
              <path d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#crm-arrowhead)" />
              <path d="M 392 613 L 1208 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#crm-arrowhead)" />
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
                Connect CRM with your daily business tools.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              BrainADZ CRM can connect with marketing, sales, communication and business platforms to reduce manual work.
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
              A clean CRM dashboard for sales teams and decision makers.
            </h2>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-black/10 bg-white p-4 shadow-[0_30px_90px_rgba(0,0,0,0.08)] md:p-6">
            <img
              src="/software/crm-preview-large.webp"
              alt="CRM Software Dashboard"
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
              CRM software planned around your workflow, not generic templates.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {[
              {
                title: "Custom CRM Logic",
                text: "We design CRM modules around your exact lead, sales and customer workflows.",
              },
              {
                title: "Secure Architecture",
                text: "Role-based access, protected APIs and clean data structure keep your system reliable.",
              },
              {
                title: "Scalable Platform",
                text: "Your CRM can grow with more users, reports, branches, teams and integrations.",
              },
              {
                title: "Long-Term Support",
                text: "We support improvements, automation, maintenance and new feature development.",
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
              Common questions about CRM Software.
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
                  Ready to manage sales with a smarter CRM?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Let BrainADZ build a CRM platform that connects your leads, customers,
                  sales team and reports in one powerful system.
                </p>
              </div>

              <a
                href="/contact"
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition hover:bg-white hover:text-[#3C5B9B]"
              >
                <span>Get CRM Consultation</span>
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
