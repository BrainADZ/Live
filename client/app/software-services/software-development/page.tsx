/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Box,
  Bug,
  CheckCircle2,
  Code2,
  Gauge,
  GraduationCap,
  Hotel,
  Landmark,
  LifeBuoy,
  Plus,
  Minus,
  RefreshCcw,
  Search,
  ShieldCheck,
  ShoppingCart,
  Star,
  Stethoscope,
  Truck,
  Factory,
  Settings2,
  Rocket,
} from "lucide-react";
import IndustriesSection from "@/components/home/Industries"
import PopupForm from "@/components/PopupForm";

type TabType = "languages" | "databases" | "frameworks";

type StackItem = {
  name: string;
  icon: string;
  text: string;
};
const workflow = [
  {
    title: "Business & System Discovery",
    text: "We understand your users, workflows, existing tools, data and the operational problems the software needs to solve.",
    icon: Search,
  },
  {
    title: "Solution Architecture",
    text: "We plan modules, permissions, data structure, integrations and the technical foundation required for the product.",
    icon: Box,
  },
  {
    title: "UX & Workflow Design",
    text: "We design screens, forms, dashboards and user flows around the tasks people need to complete every day.",
    icon: Star,
  },
  {
    title: "Software Development",
    text: "We build the required frontend, backend, business logic, APIs and integrations in planned development stages.",
    icon: Code2,
  },
  {
    title: "Testing & Deployment",
    text: "We test workflows, permissions, data handling, integrations and performance before a controlled release.",
    icon: ShieldCheck,
  },
  {
    title: "Support & Evolution",
    text: "We monitor the software, resolve issues and improve features as users, processes and business needs change.",
    icon: Gauge,
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

const useCases = [
  "Operations Management Systems",
  "Workflow Automation Tools",
  "Admin & Management Portals",
  "Inventory & Order Systems",
  "Booking & Scheduling Platforms",
  "Billing & Invoicing Software",
  "Internal Team Portals",
  "Reporting & Analytics Dashboards",
];

const caseStudies = [
  {
    title: "Retail Operations Platform",
    text: "A connected platform for customer activity, sales workflows, team follow-ups and operational reporting.",
    image: "/services/hero/Retail-CRM-and-Campaign-Management-System.png",
  },
  {
    title: "Manufacturing Operations System",
    text: "A custom system for inventory movement, production workflows, team activity and operational visibility.",
    image: "/services/hero/download.jpeg",
  },
  {
    title: "Service Management Dashboard",
    text: "A role-based dashboard for users, tasks, approvals, service activity and management reporting.",
    image: "/services/hero/serviceadmin.jpeg",
  },
  {
    title: "Booking & Reservation Platform",
    text: "A booking system for availability, reservations, payments, customer records and staff coordination.",
    image: "/services/hero/hopitality.png",
  },
];

const industries = [
  { name: "Retail", icon: ShoppingCart },
  { name: "Healthcare", icon: Stethoscope },
  { name: "Education", icon: GraduationCap },
  { name: "Finance", icon: Landmark },
  { name: "Hospitality", icon: Hotel },
  { name: "Manufacturing", icon: Factory },
  { name: "Logistics", icon: Truck },
];

const whyChoose = [
  {
    title: "Workflow-First Planning",
    text: "We start with your users, data and day-to-day process before deciding what the software should contain.",
  },
  {
    title: "Architecture That Can Evolve",
    text: "We plan software so new users, modules, data and integrations can be added as requirements change.",
  },
  {
    title: "Usable Interfaces",
    text: "Dashboards, forms and screens are designed around the actions each user needs to complete efficiently.",
  },
  {
    title: "Secure, Tested Delivery",
    text: "Authentication, permissions, data handling, testing and deployment are planned as part of the development process.",
  },
];

const supportItems = [
  {
    title: "Application Monitoring",
    text: "We track important application, server and performance signals so issues can be identified and addressed.",
    icon: Gauge,
  },
  {
    title: "Issue Resolution",
    text: "We investigate bugs, errors and workflow issues that appear after the software is in real use.",
    icon: Bug,
  },
  {
    title: "Feature & Workflow Enhancements",
    text: "We add modules and improve existing workflows as business requirements and user needs change.",
    icon: RefreshCcw,
  },
  {
    title: "Ongoing Technical Support",
    text: "We support updates, integrations, releases and maintenance required to keep the software useful over time.",
    icon: LifeBuoy,
  },
];

const tabs: { label: string; value: TabType }[] = [
  {
    label: "Languages",
    value: "languages",
  },
  {
    label: "Databases",
    value: "databases",
  },
  {
    label: "Frameworks",
    value: "frameworks",
  },
];

const techStack: Record<TabType, StackItem[]> = {
  languages: [
    {
      name: "JavaScript",
      icon: "/icons/JavaScript.svg",
      text: "Interactive web apps, dashboards and API-driven interfaces.",
    },
    {
      name: "Python",
      icon: "/icons/Python.svg",
      text: "Automation, backend systems, analytics and business logic.",
    },
    {
      name: "Java",
      icon: "/icons/Java.svg",
      text: "Enterprise-grade applications, secure APIs and scalable services.",
    },
    {
      name: "C#",
      icon: "/icons/CSharp.svg",
      text: "Windows, enterprise software and .NET-based business systems.",
    },
    {
      name: "PHP",
      icon: "/icons/PHP.svg",
      text: "Custom web portals, admin panels and CMS-backed platforms.",
    },
    {
      name: "Golang",
      icon: "/icons/GoLand.svg",
      text: "High-performance services, concurrent systems and backend APIs.",
    },
    {
      name: "Swift",
      icon: "/icons/Swift.svg",
      text: "Native iOS apps and Apple ecosystem software experiences.",
    },
    {
      name: "R",
      icon: "/icons/R.svg",
      text: "Reporting, statistical workflows and data-heavy business tools.",
    },
  ],

  databases: [
    {
      name: "PostgreSQL",
      icon: "/icons/PostgresSQL.svg",
      text: "Reliable relational data for SaaS, ERP, CRM and dashboards.",
    },
    {
      name: "MySQL",
      icon: "/icons/MySQL.svg",
      text: "Stable business applications, portals and transaction systems.",
    },
    {
      name: "MongoDB",
      icon: "/icons/MongoDB.svg",
      text: "Flexible document data for fast-moving custom applications.",
    },
    {
      name: "SQL Server",
      icon: "/icons/SQLServer.svg",
      text: "Enterprise reporting, internal tools and Microsoft ecosystems.",
    },
    {
      name: "Redis",
      icon: "/icons/Redis.svg",
      text: "Caching, queues, sessions and faster real-time experiences.",
    },
    {
      name: "Oracle",
      icon: "/icons/Oracle.svg",
      text: "Large-scale enterprise data and complex operational systems.",
    },
    {
      name: "MariaDB",
      icon: "/icons/Maria.svg",
      text: "Open-source SQL storage for secure web-based applications.",
    },
    {
      name: "Cassandra",
      icon: "/icons/Cassandra.svg",
      text: "Distributed data workloads for high-availability platforms.",
    },
  ],

  frameworks: [
    {
      name: "React",
      icon: "/icons/React.svg",
      text: "Modern user interfaces for dashboards and business workflows.",
    },
    {
      name: "Next.js",
      icon: "/icons/Next.js.svg",
      text: "SEO-ready web apps, portals and scalable frontend architecture.",
    },
    {
      name: "Node.js",
      icon: "/icons/Node.js.svg",
      text: "API services, integrations and real-time backend applications.",
    },
    {
      name: ".NET",
      icon: "/icons/NET.svg",
      text: "Secure enterprise applications and structured backend systems.",
    },
    {
      name: "Laravel",
      icon: "/icons/Laravel.svg",
      text: "Business portals, admin panels and custom web applications.",
    },
    {
      name: "Django",
      icon: "/icons/Django.svg",
      text: "Rapid, secure backend development for data-driven products.",
    },
    {
      name: "Angular",
      icon: "/icons/Angular.svg",
      text: "Structured enterprise frontend apps and complex workflows.",
    },
    {
      name: "Flutter",
      icon: "/icons/Flutter.svg",
      text: "Cross-platform mobile and desktop apps from one codebase.",
    },
  ],
};

const rowPattern: Record<TabType, number[]> = {
  languages: [5, 3],
  databases: [5, 3],
  frameworks: [5, 3],
};

function createRows(items: StackItem[], pattern: number[]) {
  let start = 0;

  return pattern.map((count) => {
    const row = items.slice(start, start + count);
    start += count;
    return row;
  });
}


const faqs = [
  {
    q: "What types of custom software do you build?",
    a: "We build operations platforms, workflow tools, admin portals, dashboards, inventory and order systems, booking platforms, billing software and other custom business applications.",
  },
  {
    q: "Can BrainADZ Live build software from scratch?",
    a: "Yes. We can handle discovery, workflow planning, UI/UX design, architecture, development, testing, deployment and post-launch support.",
  },
  {
    q: "Can you improve or extend our existing software?",
    a: "Yes. We can add modules, improve user flows, fix issues, update integrations, optimize performance and modernize selected parts of an existing system.",
  },
  {
    q: "Can you replace spreadsheets and disconnected tools with one system?",
    a: "Yes. We can map the current workflow and build a connected system for records, approvals, tasks, reporting and other processes that are currently handled across separate tools.",
  },
  {
    q: "Can the software integrate with third-party systems and APIs?",
    a: "Yes. Depending on available APIs and access, we can connect payment systems, CRM and ERP platforms, WhatsApp, SMS, email, maps, analytics and other services.",
  },
  {
    q: "Will the software work on desktop, tablet and mobile?",
    a: "For web-based software, we design responsive interfaces for desktop, tablet and mobile use according to the project requirements.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. We can support issue resolution, monitoring, updates, integration maintenance and ongoing feature or workflow improvements.",
  },
  {
    q: "How do you approach software security?",
    a: "Security depends on the system, but we can plan authentication, role-based permissions, protected APIs, input validation and controlled deployment practices as part of the project.",
  },
  {
    q: "How long does custom software development take?",
    a: "The timeline depends on scope, integrations, workflows and technical complexity. After discovery, we define a practical delivery plan and can phase larger systems into manageable releases.",
  },
  {
    q: "Can the software expand as our requirements change?",
    a: "Yes. We can plan the architecture so new users, modules, reports and integrations can be added as the product and business requirements evolve.",
  },
];

export default function SoftwareDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>("languages");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const activeItems = techStack[activeTab];
  const rows = createRows(activeItems, rowPattern[activeTab]);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/software-development.jpg"
          alt="Software Development Services"
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
            <span className="text-white/90">Software Development</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Software Development Services
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              We design and build custom software, internal platforms,
              dashboards and workflow systems around the way your teams, data
              and business processes actually work.
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

      {/* OVERVIEW SECTION */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Overview
            </p>

            <h2 className="max-w-170 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Turn manual processes and disconnected tools into one working system.
            </h2>

            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ Live develops custom software for businesses that need
              more control than spreadsheets, disconnected tools or fixed
              off-the-shelf products can provide. We turn workflows, data,
              permissions and reporting needs into software built around real
              day-to-day operations.
            </p>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              <div className="border-l-2 border-[#193175] pl-5">
                <h3 className="text-[20px] font-light">Workflow Automation</h3>
                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Replace repeated handoffs, approvals and updates with structured digital workflows.
                </p>
              </div>

              <div className="border-l-2 border-[#193175] pl-5">
                <h3 className="text-[20px] font-light">Custom Business Platforms</h3>
                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Bring users, records, tasks and reporting into software designed for your operations.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#193175]/10 blur-3xl" />
            <div className="relative overflow-hidden bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
              <img
                src="/services/Software-Development-Models.avif"
                alt="Software development dashboard"
                className="h-full w-full object-cover"
              />
            </div>
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
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Software Development Process
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              How we turn business requirements into working software
            </h2>
            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              We move from workflow discovery and architecture to design,
              development, testing and ongoing improvement through one connected process.
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
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#193175] bg-[#edf3ff] transition duration-300 ease-out hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_18px_42px_rgba(60,91,155,0.24)] group-hover:-translate-y-1.5 group-hover:bg-white group-hover:shadow-[0_18px_42px_rgba(60,91,155,0.24)]">
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
                  id="workflow-arrowhead"
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
                markerEnd="url(#workflow-arrowhead)"
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
                markerEnd="url(#workflow-arrowhead)"
              />
              <path
                d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#workflow-arrowhead)"
              />
              <path
                d="M 392 613 L 1208 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#workflow-arrowhead)"
              />
            </svg>

            {workflowLayout.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group absolute z-10 w-[390px] -translate-x-1/2 text-center"
                  style={{ left: item.left, top: item.top }}
                >
                  <div className="mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-full border-2 border-[#193175] bg-[#edf3ff] shadow-[0_16px_42px_rgba(60,91,155,0.16)] transition duration-300 ease-out hover:-translate-y-2 hover:bg-white hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)] group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)]">
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

      {/* BUSINESS USE CASES */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Business Use Cases
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Custom software for the processes your teams manage every day.
              </h2>

              <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
                From internal operations to customer-facing platforms, we build
                software around the users, rules, data and actions that need to
                work together.
              </p>
            </div>

            <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
              {useCases.map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center gap-5 border-b border-black/10 pb-6"
                >
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#193175]/10 text-[13px] font-semibold text-[#193175] transition group-hover:bg-[#193175] group-hover:text-white">
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="text-[20px] font-light tracking-[-0.3px]">
                      {item}
                    </h3>
                    <p className="mt-1 text-[14px] font-light leading-[1.55] text-black/55">
                      Built around your users, data, rules and day-to-day process.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Case Studies
              </p>

              <h2 className="max-w-195 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Custom software shaped around real business workflows.
              </h2>
            </div>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-3 text-[14px] font-semibold text-[#193175]"
            >
              View Case Studies <ArrowRight size={18} />
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
                  <div className="mb-5 flex items-center justify-between gap-5">
                    <h3 className="text-[24px] font-light tracking-[-0.5px]">
                      {item.title}
                    </h3>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#193175]/10">
                      <ArrowRight size={18} className="text-[#193175]" />
                    </span>
                  </div>

                  {/* <p className="text-[15px] font-light leading-[1.7] text-black/65">
                    {item.text}
                  </p> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE BUILD FOR */}
<IndustriesSection/>

      {/* MIDDLE CTA */}
      <section className="lazy-section bg-white py-12">
        <div className="mx-auto max-w-450 px-8 lg:px-10">
          <div
            className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75"
            data-aos="zoom-in"
          >
            {/* LEFT IMAGE */}
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/CTA/SoftwareDev-CTA.jpg"
                alt="BrainADZ Live Custom Software Development"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              {/* TEXT */}
              <div className="max-w-140">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Have a process that still depends on spreadsheets and disconnected tools?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Let BrainADZ Live turn that workflow into custom software with the right users, permissions, integrations and reporting.
                </p>
              </div>

              {/* BUTTON */}
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


      {/* TECH STACK */}
      <section className="lazy-section bg-white px-5 py-20 text-[#161616] md:px-8 lg:px-12">
        <div className="mx-auto max-w-450">
          {/* HEADING */}
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#193175]">
              Tech Stack
            </p>

            <h2 className="mx-auto max-w-210 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Technologies we use to build custom software systems
            </h2>

            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              We use programming languages, databases and frameworks selected
              around the product requirements, integrations, users and long-term
              maintenance needs.
            </p>
          </div>

          {/* TABS */}
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
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* TECH STACK ROWS */}
          <div className="mx-auto max-w-315">
            <div className="space-y-5 md:space-y-6">
              {rows.map((row, rowIndex) => (
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
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why Choose BrainADZ Live
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              We build software around how your teams actually work.
            </h2>

            <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
              Our focus is to understand the workflow first, then build the
              right modules, permissions, interfaces and integrations around it.
            </p>
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

      {/* SUPPORT & MAINTENANCE */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Support & Maintenance
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Keep your software useful as workflows and requirements change.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              After launch, we help resolve issues, maintain integrations and
              improve the software as users, workflows and operational needs change.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {supportItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="grid grid-cols-[68px_1fr] gap-5 border-t border-black/10 pt-7"
                >
                  <div className="flex h-17 w-17 items-center justify-center rounded-[20px] bg-[#193175]/10">
                    <Icon size={28} className="text-[#193175]" />
                  </div>

                  <div>
                    <h3 className="text-[23px] font-light tracking-[-0.4px]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 overflow-hidden rounded-[30px] border border-black/10 bg-[#f6f8fc] p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <h3 className="text-[28px] font-light tracking-[-0.6px] md:text-[34px]">
                  Maintenance can include monitoring, updates and product improvements.
                </h3>

                <p className="mt-4 text-[15px] font-light leading-[1.7] text-black/65">
                  Support is planned around the system in use, including issues,
                  performance, security updates and new workflow requirements.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {["Updates", "Monitoring", "Security"].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] bg-white p-5 text-center shadow-[0_16px_45px_rgba(0,0,0,0.04)]"
                  >
                    <CheckCircle2
                      size={28}
                      className="mx-auto mb-3 text-[#193175]"
                    />
                    <p className="text-[15px] font-light text-black/70">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ SECTION */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              FAQ
            </p>

            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about custom software development.
            </h2>

            <p className="mx-auto mt-5 max-w-210 text-[16px] font-light leading-[1.7] text-black/65 md:text-[18px]">
              Clear answers about project scope, existing systems, integrations,
              security, delivery planning and post-launch support.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`group overflow-hidden rounded-[26px] border bg-white transition-all duration-300 ${
                  openFaq === index
                    ? "border-[#193175]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]"
                    : "border-black/10 shadow-[0_12px_42px_rgba(0,0,0,0.035)] hover:-translate-y-1 hover:border-[#193175]/25 hover:shadow-[0_18px_56px_rgba(60,91,155,0.08)]"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold transition duration-300 ${
                        openFaq === index
                          ? "bg-[#193175] text-white"
                          : "bg-[#193175]/10 text-[#193175] group-hover:bg-[#193175] group-hover:text-white"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[16px] font-light leading-[1.45] text-black md:text-[17px]">
                      {faq.q}
                    </span>
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                      openFaq === index
                        ? "bg-[#193175] text-white"
                        : "bg-[#f6f8fc] text-[#193175] group-hover:bg-[#193175]/10"
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

      {/* FINAL CTA */}
      <section className="lazy-section bg-white py-12">
        <div className="mx-auto max-w-450 px-8 lg:px-10">
          <div
            className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75"
            data-aos="zoom-in"
          >
            {/* LEFT IMAGE */}
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/CTA/SoftwareDev-CTA.jpg"
                alt="BrainADZ Live Custom Software Development"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              {/* TEXT */}
              <div className="max-w-140">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Ready to build software around the way your business actually works?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Let BrainADZ Live design and develop a custom software system around your users, workflows, data and connected tools.
                </p>
              </div>

              {/* BUTTON */}
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
