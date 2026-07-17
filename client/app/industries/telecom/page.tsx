/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import PopupForm from "@/components/PopupForm";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cloud,
  Code2,
  CreditCard,
  Database,
  FileText,
  Layers3,
  LifeBuoy,
  LockKeyhole,
  Minus,
  MonitorSmartphone,
  Plus,
  RadioTower,
  Rocket,
  Search,
  ShieldCheck,
  Signal,
  Users,
  Wifi,
  Workflow,
} from "lucide-react";

type TabType = "frontend" | "backend" | "databases" | "cloud";

type StackItem = {
  name: string;
  icon: string;
};

const workflow = [
  {
    title: "Telecom Operations Discovery",
    text: "We understand the service model, customer journeys, plans, subscriptions, support teams, field operations and project goals.",
    icon: Search,
  },
  {
    title: "Customer & Service Workflow Mapping",
    text: "We map onboarding, plans, service requests, tickets, billing, renewals, field tasks and internal operational workflows.",
    icon: Workflow,
  },
  {
    title: "Access, Data & Integration Planning",
    text: "We plan user roles, customer records, data relationships and required connections with existing or third-party systems.",
    icon: Layers3,
  },
  {
    title: "Customer & Team Experience Design",
    text: "We design the required customer portals, mobile experiences, support panels, field interfaces and administration workflows.",
    icon: MonitorSmartphone,
  },
  {
    title: "Platform Development",
    text: "We configure or develop the required CRM, portal, billing, support, ERP, field service and reporting modules.",
    icon: Code2,
  },
  {
    title: "Integration & Workflow Testing",
    text: "We test customer journeys, service workflows, user roles and compatible integrations before deployment.",
    icon: ShieldCheck,
  },
  {
    title: "Deployment & Rollout",
    text: "The platform is deployed according to the agreed environment, user structure, locations and implementation plan.",
    icon: Rocket,
  },
  {
    title: "Handover & Support Scope",
    text: "Users are guided through the delivered workflows, with post-launch support provided according to the agreed project scope.",
    icon: LifeBuoy,
  },
];

const telecomBenefits = [
  {
    title: "Structured Customer Operations",
    text: "Organize customer, plan, subscription and account activities through a clearer digital workflow.",
    icon: Wifi,
  },
  {
    title: "Connected Service Workflows",
    text: "Bring service requests, tickets, follow-ups and internal responsibilities into one coordinated process.",
    icon: RadioTower,
  },
  {
    title: "Field & Support Coordination",
    text: "Create structured workflows for support teams, field tasks, customer visits and completion updates.",
    icon: Users,
  },
  {
    title: "Operational Visibility",
    text: "Create dashboards and reports using the customer, service, billing and operational data included in the platform.",
    icon: BarChart3,
  },
];

const challenges = [
  {
    title: "Scattered Customer & Plan Records",
    text: "Customer information, plans, subscriptions, renewals and service history can become difficult to manage across disconnected tools.",
  },
  {
    title: "Disconnected Support Workflows",
    text: "Tickets, complaints, service requests and follow-up activities may remain spread across multiple channels.",
  },
  {
    title: "Manual Field Service Coordination",
    text: "Installation, maintenance and customer visit tasks can become difficult to assign and track without a structured workflow.",
  },
  {
    title: "Limited Operational Visibility",
    text: "Teams may struggle to review customer activity, service requests, billing information and field operations from one place.",
  },
];

const solutions = [
  {
    title: "Telecom CRM",
    text: "Manage customers, leads, plans, renewals, follow-ups, complaints and selected communication activities through CRM.",
    icon: Wifi,
  },
  {
    title: "Customer Self-Service Portal",
    text: "Create web or mobile experiences for account information, plans, invoices, service requests, tickets and selected activities.",
    icon: RadioTower,
  },
  {
    title: "Subscription & Billing Workflow",
    text: "Organize plan records, invoices, payment status, renewals, upgrades and related customer account activities.",
    icon: CreditCard,
  },
  {
    title: "Support & Ticketing Platform",
    text: "Create structured workflows for complaints, service requests, assignments, status changes and customer communication.",
    icon: Signal,
  },
  {
    title: "Field Service Application",
    text: "Plan mobile workflows for assigned tasks, customer details, site visits, updates, notes and completion records.",
    icon: Users,
  },
  {
    title: "Telecom Operations ERP & Reporting",
    text: "Plan relevant ERP workflows for billing, expenses, vendors, field operations, approvals and management reporting.",
    icon: Database,
  },
];

const architectureItems = [
  "Customer, staff & admin access",
  "Plans, accounts & subscriptions",
  "Tickets & service requests",
  "Field service workflows",
  "CRM, ERP & integrations",
  "Dashboards & reporting",
];

const telecomTypes = [
  {
    title: "Telecom CRM Platforms",
    text: "Organize customer records, leads, plans, renewals, follow-ups, complaints and selected communication activities through CRM.",
    icon: Wifi,
  },
  {
    title: "Customer Self-Service Portals",
    text: "Create digital experiences for account information, plans, invoices, service requests, tickets and selected customer activities.",
    icon: RadioTower,
  },
  {
    title: "Subscription & Billing Systems",
    text: "Plan workflows for plan records, invoices, payment status, renewals, upgrades and related customer account activities.",
    icon: CreditCard,
  },
  {
    title: "Support & Ticketing Systems",
    text: "Create structured workflows for complaints, service requests, assignments, priorities, status changes and customer communication.",
    icon: Signal,
  },
  {
    title: "Field Service Management",
    text: "Plan mobile and dashboard workflows for assigned tasks, customer locations, site visits, updates and completion records.",
    icon: Users,
  },
  {
    title: "Service Operations Dashboards",
    text: "Present customer, ticket, billing and service information from connected systems according to available data sources and interfaces.",
    icon: BarChart3,
  },
];

const coreFeatures = [
  "Customer and account records",
  "Plan and subscription workflows",
  "Service request management",
  "Support ticket workflows",
  "Field service activities",
  "CRM and customer follow-ups",
  "Billing and payment integration",
  "Dashboards and reports",
];

const securityItems = [
  "Role-based user access",
  "Customer and service records",
  "API and integration controls",
  "Ticket and activity history",
  "Backup and recovery planning",
  "Payment integration scope",
];

const solutionScenarios = [
  {
    title: "Telecom CRM Platform",
    text: "A CRM concept for customers, plans, renewals, follow-ups, service requests and communication activities.",
    image: "/industries/telecom/telecom-crm.jpg",
  },
  {
    title: "Service Operations Dashboard",
    text: "A dashboard concept for service status, tickets, alerts and operational information from connected systems.",
    image: "/industries/telecom/network-monitoring.jpg",
  },
  {
    title: "Customer Billing Portal",
    text: "A portal concept for account information, invoices, payment status, plans, renewals and support requests.",
    image: "/industries/telecom/billing-portal.jpg",
  },
  {
    title: "Telecom Operations Dashboard",
    text: "A dashboard concept for customers, tickets, subscriptions, billing and configured management reporting.",
    image: "/industries/telecom/telecom-analytics.jpg",
  },
];

const whyChoose = [
  {
    title: "Telecom Workflow Mapping",
    text: "We start with how customers, plans, support teams, field operations and internal departments actually move through the business.",
  },
  {
    title: "Relevant Solution Planning",
    text: "We combine custom software, mobile apps, CRM, ERP and integrations only where they fit the project requirement.",
  },
  {
    title: "Customer & Team Experience Design",
    text: "Customer, support, field staff and administration journeys are planned according to their actual responsibilities.",
  },
  {
    title: "Scope-Based Implementation Support",
    text: "Deployment guidance, handover and post-launch support are provided according to the agreed project scope.",
  },
];

const supportItems = [
  "User onboarding and workflow handover",
  "Agreed post-launch issue support",
  "Customer and support workflow review",
  "Dashboard and report adjustments",
  "Future modules as separate scope",
];

const tabs: { label: string; value: TabType }[] = [
  { label: "Customer Experience", value: "frontend" },
  { label: "Application Backend", value: "backend" },
  { label: "Data Layer", value: "databases" },
  { label: "Cloud & Delivery", value: "cloud" },
];

const techStack: Record<TabType, StackItem[]> = {
  frontend: [
    { name: "React", icon: "/icons/React.svg" },
    { name: "Next.js", icon: "/icons/Next.js.svg" },
    { name: "TypeScript", icon: "/icons/TypeScript.svg" },
    { name: "Flutter", icon: "/icons/Flutter.svg" },
    { name: "Angular", icon: "/icons/Angular.svg" },
    { name: "Tailwind CSS", icon: "/icons/Tailwind CSS.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/icons/Node.js.svg" },
    { name: ".NET", icon: "/icons/NET.svg" },
    { name: "Java", icon: "/icons/Java.svg" },
    { name: "Python", icon: "/icons/Python.svg" },
    { name: "Django", icon: "/icons/Django.svg" },
    { name: "Express.js", icon: "/icons/Express.svg" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg" },
    { name: "MySQL", icon: "/icons/MySQL.svg" },
    { name: "MongoDB", icon: "/icons/MongoDB.svg" },
    { name: "Redis", icon: "/icons/Redis.svg" },
    { name: "SQL Server", icon: "/icons/SQLServer.svg" },
    { name: "Firebase", icon: "/icons/Firebase.svg" },
  ],
  cloud: [
    { name: "AWS", icon: "/icons/AWS.svg" },
    { name: "Azure", icon: "/icons/Azure.svg" },
    { name: "Docker", icon: "/icons/Docker.svg" },
    { name: "Kubernetes", icon: "/icons/Kubernetes.svg" },
    { name: "GitHub Actions", icon: "/icons/GitHub Actions.svg" },
    { name: "Google Cloud", icon: "/icons/Google Cloud.svg" },
  ],
};

const faqs = [
  {
    q: "What Telecom solutions can BrainADZ Live build?",
    a: "We can plan and build Telecom CRM platforms, customer portals, subscription and billing workflows, support systems, field service applications, ERP modules and reporting dashboards according to the project requirement.",
  },
  {
    q: "Can you build Telecom CRM Software?",
    a: "Yes. CRM workflows can be configured for customer records, leads, plans, renewals, follow-ups, complaints and selected communication activities.",
  },
  {
    q: "Can you build a customer self-service portal?",
    a: "Yes. A web or mobile portal can be planned for account information, plans, invoices, service requests, tickets and selected customer activities.",
  },
  {
    q: "Can billing and subscription workflows be included?",
    a: "Yes. The platform can include plan records, invoices, payment status, renewals, upgrades and related account workflows according to the project scope.",
  },
  {
    q: "Can you build support and ticketing software?",
    a: "Yes. Support workflows can include complaints, service requests, assignments, priorities, status changes and selected customer communication.",
  },
  {
    q: "Can field service teams use a mobile application?",
    a: "Yes. A field service app can be planned for assigned tasks, customer details, site visits, updates, notes and completion records.",
  },
  {
    q: "Can network or service monitoring tools be integrated?",
    a: "Yes. Integration can be planned with compatible network or service tools where suitable APIs, data feeds or technical interfaces are available.",
  },
  {
    q: "Can ERP Software support telecom operations?",
    a: "Relevant ERP modules can be planned for billing, expenses, vendors, field operations, approvals and other required business workflows.",
  },
  {
    q: "Can the platform support multiple branches or service regions?",
    a: "Yes. Location, user, customer and reporting structures can be planned according to the required operating model.",
  },
  {
    q: "How long does Telecom software development take?",
    a: "The timeline depends on the number of modules, user roles, service workflows, integrations, data migration requirements and deployment scope. It should be estimated after the required processes are defined.",
  },
];

export default function TelecomIndustryPage() {
  const [activeTab, setActiveTab] = useState<TabType>("frontend");
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/telecom.jpg"
          alt="Telecom technology solutions by BrainADZ Live"
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

            <span className="text-white/90">Industries</span>

            <span className="text-white/80">/</span>

            <span className="text-white/90">Telecom</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Technology Solutions for Telecom Customer and Service Operations
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Custom software, customer portals, CRM, ERP, billing workflows and
              field service applications for telecom businesses and service
              teams.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-4 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Enquire Now
                <ArrowRight size={20} strokeWidth={1.8} className="text-[20px] leading-none" />
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

            <h2 className="max-w-170 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Connect customer, service, billing and field workflows.
            </h2>

            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ Live helps telecom businesses plan digital systems for
              customers, subscriptions, service requests, billing, field teams,
              CRM, ERP and reporting. The final solution is shaped around the
              services, users and workflows included in the project.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {telecomBenefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border-l-2 border-[#193175] pl-5"
                >
                  <Icon size={28} className="mb-4 text-[#193175]" />

                  <h3 className="text-[20px] font-normal">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TELECOM CHALLENGES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Telecom Challenges
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common workflow problems across telecom operations.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {challenges.map((item, index) => (
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

      {/* TELECOM SOLUTIONS */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Telecom Solutions We Build
            </p>

            <h2 className="mx-auto max-w-220 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Digital systems for customers, subscriptions, support and telecom
              operations.
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
                    <Icon
                      size={27}
                      className="text-[#193175] transition group-hover:text-white"
                    />
                  </div>

                  <h3 className="text-[23px] font-normal tracking-[-0.4px]">
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

      {/* TELECOM ARCHITECTURE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Solution Architecture
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Plan connected customer and telecom operational workflows.
            </h2>

            <p className="mt-5 max-w-165 text-[16px] font-light leading-[1.7] text-black/65">
              The platform structure can connect customers, subscriptions,
              tickets, field activities, billing, integrations and reporting
              according to the required telecom workflow.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {architectureItems.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-black/10 pb-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#193175]/10 text-[13px] font-semibold text-[#193175]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-[18px] font-light tracking-[-0.3px] text-black/80">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TELECOM DEVELOPMENT PROCESS */}
      <section className="relative overflow-hidden bg-white px-5 py-16 md:px-4 lg:px-12 lg:py-14">
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
              Our Process
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              Our Telecom technology implementation roadmap
            </h2>

            <p className="mx-auto mt-5 max-w-245 text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              A practical process for understanding telecom workflows, planning
              the right solution and deploying the required platform.
            </p>
          </div>

          {/* MOBILE ROADMAP */}
          <div className="lg:hidden">
            <div className="space-y-5">
              {workflow.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative rounded-[26px] border border-black/10 bg-white p-6"
                  >
                    {index !== workflow.length - 1 && (
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
                        <span className="text-[13px] font-semibold text-[#193175]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="mt-2 text-[22px] font-normal leading-tight tracking-[-0.5px]">
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

          {/* DESKTOP ZIG-ZAG ROADMAP */}
          <div className="relative hidden h-265 lg:block">
            <svg
              className="pointer-events-none absolute inset-0 z-0 h-full w-full"
              viewBox="0 0 1600 1060"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id="telecom-zigzag-arrow"
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
                markerEnd="url(#telecom-zigzag-arrow)"
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
                markerEnd="url(#telecom-zigzag-arrow)"
              />

              <path
                d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#telecom-zigzag-arrow)"
              />

              <path
                d="M 392 613 L 1208 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#telecom-zigzag-arrow)"
              />

              <path
                d="M 1294 613 C 1480 613 1515 720 1515 800 C 1515 888 1440 913 1294 913"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
              />

              <path
                d="M 1208 913 L 392 913"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#telecom-zigzag-arrow)"
              />
            </svg>

            {[
              { ...workflow[0], left: "21.75%", top: "0px" },
              { ...workflow[1], left: "78.25%", top: "0px" },
              { ...workflow[2], left: "78.25%", top: "300px" },
              { ...workflow[3], left: "21.75%", top: "300px" },
              { ...workflow[4], left: "21.75%", top: "570px" },
              { ...workflow[5], left: "78.25%", top: "570px" },
              { ...workflow[6], left: "78.25%", top: "870px" },
              { ...workflow[7], left: "21.75%", top: "870px" },
            ].map((item, index) => {
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

                  <span className="mt-5 inline-block text-[13px] font-semibold text-[#193175]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-3 text-[30px] font-normal leading-[1.15] tracking-[-0.8px] text-black xl:text-[32px]">
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

      {/* TELECOM PLATFORM TYPES */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Telecom Platforms
            </p>

            <h2 className="max-w-175 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Types of Telecom solutions we plan and build
            </h2>

            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70 md:text-[18px]">
              We combine relevant BrainADZ Live software services, CRM, ERP,
              mobile applications and integrations according to the telecom
              workflow that needs to be improved.
            </p>

            <div className="mt-12 overflow-hidden rounded-[28px] bg-[#f6f8fc] p-8 shadow-[0_22px_70px_rgba(0,0,0,0.05)]">
              <h3 className="max-w-110 text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-[#0f5f95] md:text-[34px]">
                Plan Your Telecom Platform
              </h3>

              <a
                href="/contact"
                className="mt-8 inline-flex h-13 min-w-52 items-center justify-center rounded-lg bg-[#193175] px-6 text-[15px] font-semibold text-white transition hover:bg-[#2f4a82]"
              >
                Discuss Your Requirement
              </a>
            </div>
          </div>

          <div>
            {telecomTypes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="grid gap-5 border-b border-black/10 py-8 first:pt-0 md:grid-cols-[72px_1fr]"
                >
                  <div className="flex h-15 w-15 items-center justify-center rounded-2xl bg-[#193175]/10">
                    <Icon size={29} className="text-[#193175]" />
                  </div>

                  <div>
                    <h3 className="text-[24px] font-normal tracking-[-0.4px] text-black md:text-[26px]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[16px] font-light leading-[1.75] text-black/65 md:text-[17px]">
                      {item.text}
                    </p>
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
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Core Telecom Features
              </p>

              <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
                Practical features for customer and service workflows.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              Final features are selected according to the services, customer
              journeys, teams and operational processes included in the
              project.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
            {coreFeatures.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-black/10 pb-5"
              >
                <CheckCircle2
                  size={24}
                  className="shrink-0 text-[#193175]"
                />

                <span className="text-[17px] font-light text-black/75">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCESS & DATA CONTROLS */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Access, Data & Platform Controls
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Plan access and data handling around the telecom workflow.
            </h2>

            <p className="mt-5 text-[16px] font-light leading-[1.75] text-black/65">
              Authentication, permissions, customer records, integrations and
              recovery requirements should be planned according to the users,
              information and processes included in the platform.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {securityItems.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-black/10 pb-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#193175]/10 text-[#193175]">
                  {index === 0 && <LockKeyhole size={20} />}
                  {index === 1 && <ShieldCheck size={20} />}
                  {index === 2 && <Workflow size={20} />}
                  {index === 3 && <FileText size={20} />}
                  {index === 4 && <Cloud size={20} />}
                  {index === 5 && <CreditCard size={20} />}
                </span>

                <p className="text-[18px] font-light tracking-[-0.3px] text-black/80">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION SCENARIOS */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Solution Scenarios
              </p>

              <h2 className="max-w-195 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
                Examples of telecom workflows we can plan and build.
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
            {solutionScenarios.map((item) => (
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
                    <h3 className="text-[23px] font-normal tracking-[-0.5px]">
                      {item.title}
                    </h3>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#193175]/10">
                      <ArrowRight
                        size={18}
                        className="text-[#193175]"
                      />
                    </span>
                  </div>

                  <p className="text-[14px] font-light leading-[1.65] text-black/60">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="lazy-section bg-white px-5 py-20 text-[#161616] md:px-4 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#193175]">
              Tech Stack
            </p>

            <h2 className="mx-auto max-w-210 text-[38px] font-normal leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Technologies selected around the Telecom platform requirement
            </h2>

            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              Technology choices depend on the customer experience, service
              workflows, data model, integrations and deployment requirements.
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

                      <h3 className="mt-4 text-[15px] font-normal leading-[1.3] tracking-[-0.2px] text-[#193175] transition duration-300 group-hover:text-[#2f4a82] md:text-[16px]">
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

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Telecom technology planning based on real customer and service
              workflows.
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

      {/* SUPPORT */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden bg-[#f6f8fc] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <img
              src="/industries/telecom/telecom-support.jpg"
              alt="Telecom technology platform implementation and support"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Implementation & Support Scope
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Handover and support aligned with the delivered telecom platform.
            </h2>

            <p className="mt-5 text-[16px] font-light leading-[1.7] text-black/65">
              The final implementation can include user guidance, agreed
              post-launch support and future enhancement planning according to
              the delivered system and commercial scope.
            </p>

            <div className="mt-8 space-y-4">
              {supportItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-black/10 pb-4"
                >
                  <CheckCircle2
                    size={23}
                    className="shrink-0 text-[#193175]"
                  />

                  <span className="text-[16px] font-light text-black/70">
                    {item}
                  </span>
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

            <h2 className="mx-auto max-w-230 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about Telecom technology solutions.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-[26px] border bg-white transition-all duration-300 ${
                  openFaq === index
                    ? "border-[#193175]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]"
                    : "border-black/10"
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
                src="/CTA/home-cta.png"
                alt="Telecom technology solutions by BrainADZ Live"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Planning a Telecom technology platform?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Tell us about your customers, plans, service requests, field
                  operations and billing workflows so the right solution can be
                  planned.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#193175] md:min-w-57.5"
              >
                <span>Enquire Now</span>

                <ArrowRight size={26} strokeWidth={1.8} className="text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1" />
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
