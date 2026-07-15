/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import PopupForm from "@/components/PopupForm";
import {
  ArrowRight,
  BarChart3,
  Car,
  CheckCircle2,
  Code2,
  Database,
  Gauge,
  Layers3,
  LifeBuoy,
  Minus,
  MonitorSmartphone,
  PackageCheck,
  Plus,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

type TabType = "frontend" | "backend" | "databases" | "cloud";

type StackItem = {
  name: string;
  icon: string;
};

const workflow = [
  {
    title: "Automotive Business Discovery",
    text: "We understand your dealership, sales, service, inventory, customer and branch workflows before defining the platform.",
    icon: Search,
  },
  {
    title: "Process & Data Mapping",
    text: "We map lead stages, vehicle records, service processes, parts data, user roles and required system connections.",
    icon: Layers3,
  },
  {
    title: "Customer & Team Experience Design",
    text: "We design the required customer journeys, staff dashboards, management views and mobile or web interfaces.",
    icon: MonitorSmartphone,
  },
  {
    title: "Platform Development",
    text: "We configure or develop the required CRM, ERP, portal, application and operational modules for the project.",
    icon: Code2,
  },
  {
    title: "System & API Integration",
    text: "We plan connections with compatible websites, business systems, payment providers or external APIs where required.",
    icon: Workflow,
  },
  {
    title: "Workflow Testing",
    text: "We test the configured sales, service, inventory, user and integration workflows before deployment.",
    icon: ShieldCheck,
  },
  {
    title: "Deployment & Rollout",
    text: "The platform is deployed according to the agreed environment, branch structure and implementation plan.",
    icon: Rocket,
  },
  {
    title: "Handover & Support Scope",
    text: "Users are guided through the agreed workflow, with post-launch support provided according to the project scope.",
    icon: LifeBuoy,
  },
];

const automotiveBenefits = [
  {
    title: "Sales Pipeline Visibility",
    text: "Organize enquiries, customer follow-ups, vehicle interest and opportunity stages through a structured workflow.",
    icon: BarChart3,
  },
  {
    title: "Vehicle & Inventory Coordination",
    text: "Keep relevant vehicle, variant, availability and inventory records connected with the required business processes.",
    icon: Car,
  },
  {
    title: "Structured Service Operations",
    text: "Manage booking, service requests, job progress and customer communication through configured workflows.",
    icon: Settings2,
  },
  {
    title: "Connected Customer Experience",
    text: "Bring customer-facing web, mobile and showroom experiences closer to the business systems behind them.",
    icon: Users,
  },
];

const challenges = [
  {
    title: "Scattered Sales Follow-Ups",
    text: "Customer enquiries, test-drive requests and follow-up information often remain spread across calls, sheets and disconnected tools.",
  },
  {
    title: "Disconnected Vehicle & Parts Records",
    text: "Vehicle availability, variant information, parts records and operational data can become difficult to coordinate across teams.",
  },
  {
    title: "Manual Service Coordination",
    text: "Service bookings, workshop updates and customer communication can become difficult to track without a structured workflow.",
  },
  {
    title: "Inconsistent Multi-Location Operations",
    text: "Dealerships and branches may use different processes, making reporting, access and customer experience harder to standardize.",
  },
];

const solutions = [
  {
    title: "Automotive CRM & Sales Pipeline",
    text: "Organize enquiries, customer records, vehicle interest, test-drive requests, follow-up activities and opportunity stages.",
    icon: Users,
  },
  {
    title: "Dealer & Branch Management Portal",
    text: "Create a central platform for branch records, users, vehicle information and selected operational workflows.",
    icon: Car,
  },
  {
    title: "Service & Workshop Management",
    text: "Manage service bookings, job progress, assigned responsibilities, customer updates and configured workshop processes.",
    icon: Settings2,
  },
  {
    title: "Vehicle & Parts Inventory ERP",
    text: "Organize vehicle records, parts inventory, procurement, stock movement and related business information.",
    icon: Database,
  },
  {
    title: "Customer Booking & Service App",
    text: "Build customer-facing web or mobile experiences for enquiries, test drives, service requests and selected account workflows.",
    icon: MonitorSmartphone,
  },
  {
    title: "Showroom Digital Experience",
    text: "Use digital displays and signage software for product content, launches, campaigns and customer-facing communication.",
    icon: PackageCheck,
  },
];

const architectureItems = [
  "Customer enquiry & lead flow",
  "Vehicle catalogue & availability",
  "Service booking & job workflow",
  "Dealer, branch & user access",
  "Inventory, billing & reports",
  "Digital experience integration",
];

const automotiveTypes = [
  {
    title: "Dealer & Branch Management Platforms",
    text: "Plan central systems for dealership records, branch operations, users, vehicle information and selected management workflows.",
    icon: Car,
  },
  {
    title: "Vehicle Sales CRM Solutions",
    text: "Organize customer enquiries, vehicle interest, test-drive requests, opportunity stages and follow-up activities through CRM.",
    icon: Users,
  },
  {
    title: "Service & Workshop Management Systems",
    text: "Create workflows for service requests, bookings, job progress, assigned teams and customer status communication.",
    icon: Settings2,
  },
  {
    title: "Parts & Inventory ERP",
    text: "Manage parts records, stock movement, procurement information and inventory workflows through a connected ERP structure.",
    icon: Database,
  },
  {
    title: "Customer Apps & Booking Portals",
    text: "Build web and mobile experiences for enquiries, test-drive requests, service bookings and selected customer interactions.",
    icon: MonitorSmartphone,
  },
  {
    title: "Showroom Digital Experience Systems",
    text: "Plan digital displays, signage applications and content workflows for product presentation and showroom communication.",
    icon: PackageCheck,
  },
];

const coreFeatures = [
  "Lead and enquiry management",
  "Vehicle catalogue and availability",
  "Test-drive and service requests",
  "Workshop and job status",
  "Parts and inventory records",
  "Customer communication workflow",
  "Role-based user access",
  "Dashboards and reports",
];

const securityItems = [
  "Role-based user access",
  "Customer and vehicle records",
  "API and integration controls",
  "Activity and status history",
  "Backup and recovery planning",
  "Payment integration scope",
];

const solutionScenarios = [
  {
    title: "Dealer Operations Platform",
    text: "A connected platform concept for dealership records, branches, users, vehicle data and management workflows.",
    image: "/industries/automotive/dealer-management.jpg",
  },
  {
    title: "Workshop & Service Management",
    text: "A service workflow concept for customer requests, bookings, job progress and operational coordination.",
    image: "/industries/automotive/automotive-tracking.jpg",
  },
  {
    title: "Vehicle Sales CRM",
    text: "A CRM concept for enquiries, vehicle interest, test-drive requests, follow-ups and opportunity stages.",
    image: "/industries/automotive/passenger-booking.jpg",
  },
  {
    title: "Showroom Digital Experience",
    text: "A connected showroom concept combining customer-facing displays, product content and digital communication.",
    image: "/industries/automotive/vehicle-analytics.jpg",
  },
];

const whyChoose = [
  {
    title: "Automotive Workflow Mapping",
    text: "We start with the real sales, service, inventory and branch processes that the platform needs to support.",
  },
  {
    title: "Relevant Service Mix",
    text: "We combine custom software, CRM, ERP, applications and digital signage only where they fit the project requirement.",
  },
  {
    title: "Integration-Aware Planning",
    text: "Existing systems and third-party connections are reviewed according to available APIs and technical interfaces.",
  },
  {
    title: "Scope-Based Implementation Support",
    text: "Deployment guidance, handover and support are provided according to the agreed project scope.",
  },
];

const supportItems = [
  "User onboarding and workflow handover",
  "Agreed post-launch issue support",
  "Integration and workflow review",
  "Dashboard and report adjustments",
  "Future enhancements as separate scope",
];

const tabs: { label: string; value: TabType }[] = [
  { label: "Web & Mobile", value: "frontend" },
  { label: "Backend", value: "backend" },
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
    { name: "Express.js", icon: "/icons/Express.svg" },
    { name: "Django", icon: "/icons/Django.svg" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg" },
    { name: "SQL Server", icon: "/icons/SQLServer.svg" },
    { name: "MySQL", icon: "/icons/MySQL.svg" },
    { name: "Redis", icon: "/icons/Redis.svg" },
    { name: "MongoDB", icon: "/icons/MongoDB.svg" },
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
    q: "What solutions can BrainADZ Live build for automotive businesses?",
    a: "We can plan and build dealership platforms, sales CRM systems, service and workshop workflows, inventory ERP modules, customer applications and showroom digital experiences according to the project requirement.",
  },
  {
    q: "Can you build a dealership management platform?",
    a: "Yes. A dealership platform can be planned around branches, users, vehicle records, customer workflows and selected operational requirements.",
  },
  {
    q: "Can CRM Software manage automotive leads and test-drive requests?",
    a: "Yes. CRM workflows can be configured for enquiries, vehicle interest, test-drive requests, follow-up activities and sales stages.",
  },
  {
    q: "Can ERP Software manage vehicles, parts and inventory?",
    a: "ERP modules can be planned for relevant vehicle records, parts inventory, procurement, stock movement and related business processes.",
  },
  {
    q: "Can service booking and workshop workflows be included?",
    a: "Yes. Service requests, bookings, job stages, assigned responsibilities and customer updates can be included according to the required workflow.",
  },
  {
    q: "Can one platform support multiple dealerships or branches?",
    a: "Yes. Branch and user structures can be planned for multi-location operations according to the required access and reporting model.",
  },
  {
    q: "Can automotive software connect with existing systems?",
    a: "Yes. Integration can be planned with compatible business systems and third-party services where suitable APIs or technical interfaces are available.",
  },
  {
    q: "Can digital signage be included for automotive showrooms?",
    a: "Yes. Relevant digital displays, signage applications or cloud signage workflows can be included for product content, campaigns and showroom communication.",
  },
  {
    q: "How do you approach security for automotive platforms?",
    a: "Security planning can include authentication, role-based access, data controls, integration protection and backup requirements according to the platform scope.",
  },
  {
    q: "How long does automotive software development take?",
    a: "The timeline depends on the number of modules, user roles, integrations, data migration requirements and deployment scope. It should be estimated after the required workflows are defined.",
  },
];

export default function AutomotiveIndustryPage() {
  const [activeTab, setActiveTab] = useState<TabType>("frontend");
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/automotive.jpg"
          alt="Automotive technology solutions by BrainADZ Live"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-4 lg:min-h-135 lg:px-12">
          <div className="flex items-center gap-3 text-[16px] font-light md:text-[18px]">
            <Link href="/" className="text-[#6da0ff] hover:underline">
              Home
            </Link>

            <span className="text-white/80">/</span>

            <span className="text-white/90">Industries</span>

            <span className="text-white/80">/</span>

            <span className="text-white/90">Automotive</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Technology Solutions for Automotive Businesses
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Custom software, CRM, ERP, customer applications and digital
              experience solutions for dealerships, service operations and
              automotive business workflows.
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
              Connect automotive sales, service and operational workflows.
            </h2>

            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ Live helps automotive businesses plan and build digital
              platforms for customer enquiries, dealership operations, service
              workflows, inventory, reporting and showroom communication. The
              final solution is planned around the business process and project
              scope.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {automotiveBenefits.map((item) => {
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

      {/* CHALLENGES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Automotive Challenges
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common workflow problems across automotive businesses.
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

      {/* SOLUTIONS */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Automotive Solutions We Build
            </p>

            <h2 className="mx-auto max-w-220 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Digital systems for sales, service, inventory and customer
              experience.
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

      {/* ARCHITECTURE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Solution Architecture
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Plan connected workflows around the actual automotive business.
            </h2>

            <p className="mt-5 max-w-165 text-[16px] font-light leading-[1.7] text-black/65">
              The platform structure can connect customer journeys, vehicle
              information, service operations, inventory, users and reporting
              according to the project requirement.
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

      {/* AUTOMOTIVE DEVELOPMENT PROCESS */}
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
              Our automotive solution implementation roadmap
            </h2>

            <p className="mx-auto mt-5 max-w-245 text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              A practical process for understanding automotive workflows,
              planning the right solution and deploying the required platform.
            </p>
          </div>

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
                  id="automotive-zigzag-arrow"
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
                markerEnd="url(#automotive-zigzag-arrow)"
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
                markerEnd="url(#automotive-zigzag-arrow)"
              />

              <path
                d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#automotive-zigzag-arrow)"
              />

              <path
                d="M 392 613 L 1208 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#automotive-zigzag-arrow)"
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
                markerEnd="url(#automotive-zigzag-arrow)"
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

      {/* PLATFORM TYPES */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Automotive Platforms
            </p>

            <h2 className="max-w-175 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Types of automotive solutions we plan and build
            </h2>

            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70 md:text-[18px]">
              We combine relevant BrainADZ Live software services and platforms
              according to the automotive workflow that needs to be improved.
            </p>

            <div className="mt-12 overflow-hidden rounded-[28px] bg-[#f6f8fc] p-8 shadow-[0_22px_70px_rgba(0,0,0,0.05)]">
              <h3 className="max-w-110 text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-[#0f5f95] md:text-[34px]">
                Plan Your Automotive Platform
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
            {automotiveTypes.map((item) => {
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
                Core Automotive Features
              </p>

              <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
                Practical features for automotive sales and operations.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              Final features are selected according to the dealership, service,
              inventory and customer workflows included in the project.
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

      {/* SECURITY */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Platform Controls & Reliability
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Plan access, data and operational controls around the platform.
            </h2>

            <p className="mt-5 text-[16px] font-light leading-[1.75] text-black/65">
              Authentication, user access, integration controls, activity
              records and backup requirements should be planned according to
              the information and workflows included in the system.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {securityItems.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-black/10 pb-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#193175]/10 text-[#193175]">
                  {index === 0 && <Users size={20} />}
                  {index === 1 && <ShieldCheck size={20} />}
                  {index === 2 && <Workflow size={20} />}
                  {index === 3 && <Database size={20} />}
                  {index === 4 && <PackageCheck size={20} />}
                  {index === 5 && <Gauge size={20} />}
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
                Examples of automotive workflows we can plan and build.
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
              Technologies selected around the automotive platform requirement
            </h2>

            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              Technology choices depend on the web, mobile, data, integration
              and deployment requirements of the project.
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
              Automotive technology planning based on real business workflows.
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
              src="/industries/automotive/automotive-support.jpg"
              alt="Automotive platform implementation and support"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Implementation & Support Scope
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Handover and support aligned with the project scope.
            </h2>

            <p className="mt-5 text-[16px] font-light leading-[1.7] text-black/65">
              The final implementation can include user guidance, agreed
              post-launch support and future enhancement planning according to
              the delivered platform and commercial scope.
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
              Common questions about automotive technology solutions.
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
                alt="Automotive technology solutions by BrainADZ Live"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Planning an automotive technology platform?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Tell us about your dealership, sales, service, inventory or
                  customer workflow so the right solution can be planned.
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
