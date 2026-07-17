/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  Bug,
  CheckCircle2,
  Code2,
  Database,
  Gauge,
  GitBranch,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  LifeBuoy,
  LineChart,
  LockKeyhole,
  Minus,
  Network,
  PackageCheck,
  Plus,
  RefreshCcw,
  Search,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Users,
  Workflow,
} from "lucide-react";
import IndustriesSection from "@/components/home/Industries"
import PopupForm from "@/components/PopupForm";

type TabType = "frontend" | "backend" | "databases" | "devops";

type StackItem = {
  name: string;
  icon: string;
};

const processSteps = [
  {
    title: "Business & Workflow Discovery",
    text: "We understand your departments, users, existing systems, data flow, bottlenecks and operational priorities.",
    icon: Search,
  },
  {
    title: "Solution Planning & Architecture",
    text: "We define modules, roles, permissions, data structure, integrations and a practical phased delivery roadmap.",
    icon: GitBranch,
  },
  {
    title: "UX & Process Design",
    text: "We design dashboards, forms, approval flows and user journeys around the tasks each team needs to complete.",
    icon: Workflow,
  },
  {
    title: "Custom Software Development",
    text: "We build the required modules, workflows, dashboards, APIs and admin controls on a maintainable architecture.",
    icon: Code2,
  },
  {
    title: "Testing & Business Validation",
    text: "We test roles, workflows, integrations, reports, data handling and performance against real business scenarios.",
    icon: ShieldCheck,
  },
  {
    title: "Deployment & Ongoing Improvement",
    text: "We deploy in planned stages, support adoption and continue improving the platform as processes and requirements change.",
    icon: LifeBuoy,
  },
];

const processLayout = [
  { ...processSteps[0], left: "21.75%", top: "0px" },
  { ...processSteps[1], left: "78.25%", top: "0px" },
  { ...processSteps[2], left: "21.75%", top: "300px" },
  { ...processSteps[3], left: "78.25%", top: "300px" },
  { ...processSteps[4], left: "21.75%", top: "570px" },
  { ...processSteps[5], left: "78.25%", top: "570px" },
];

const overviewHighlights = [
  {
    title: "Connected Operations",
    text: "Bring departments, workflows and business data into one coordinated system.",
    icon: Gauge,
  },
  {
    title: "Clear Business Visibility",
    text: "Use dashboards and reports to understand activity, bottlenecks and performance.",
    icon: BarChart3,
  },
  {
    title: "Role-Based Access",
    text: "Control what users can view, update and approve based on their responsibilities.",
    icon: LockKeyhole,
  },
  {
    title: "Built to Evolve",
    text: "Add users, modules, workflows and integrations as business requirements change.",
    icon: Boxes,
  },
];

const challenges = [
  {
    title: "Disconnected Tools",
    text: "Separate systems and spreadsheets create duplicate work, missed updates and inconsistent information.",
  },
  {
    title: "Manual Handoffs",
    text: "Approvals, updates and repetitive data entry slow work down and make errors more likely.",
  },
  {
    title: "Limited Visibility",
    text: "When data is spread across teams and tools, management lacks a clear view of work and performance.",
  },
  {
    title: "Inflexible Legacy Software",
    text: "Rigid systems become difficult to adapt when workflows, users, locations or integrations change.",
  },
];

const services = [
  {
    title: "Custom Operations Platforms",
    text: "Centralized software for managing multi-step business operations, teams, records and internal processes.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Enterprise Portals & Dashboards",
    text: "Role-based portals and dashboards that give teams one place to access tasks, data, reports and actions.",
    icon: Users,
  },
  {
    title: "Workflow Automation Systems",
    text: "Automate approvals, assignments, notifications and repetitive handoffs across departments.",
    icon: Settings2,
  },
  {
    title: "System & API Integration",
    text: "Connect existing software, databases, APIs and third-party platforms so information moves between systems.",
    icon: Network,
  },
];

const solutionsLeft = [
  "Enterprise Portals",
  "Operations Management Systems",
  "Workflow & Approval Systems",
  "Project & Task Management",
];

const solutionsRight = [
  "Document & Record Management",
  "Asset & Resource Management",
  "Reporting & Analytics Platforms",
  "Role-Based Admin Dashboards",
];

const caseStudies = [
  {
    title: "Manufacturing Operations Platform",
    text: "A centralized platform for production activity, inventory movement, operational records and team visibility.",
    image: "/services/hero/download.jpeg",
  },
  {
    title: "Retail Management Platform",
    text: "A connected platform for orders, stock, billing, reporting and day-to-day operational activity.",
    image: "/services/hero/Retail-CRM-and-Campaign-Management-System.png",
  },
  {
    title: "Financial Reporting Platform",
    text: "A role-based platform that brought reporting, business data and management views into one controlled workspace.",
    image: "/services/hero/serviceadmin.jpeg",
  },
  {
    title: "Healthcare Operations System",
    text: "A management system for records, appointments, staff workflows and role-based access to operational data.",
    image: "/services/hero/hopitality.png",
  },
];

const whyChoose = [
  {
    title: "Workflow-First Planning",
    text: "We start with how departments, users, approvals and data actually move before deciding what the software should contain.",
  },
  {
    title: "Role-Based Security",
    text: "Authentication, permissions, protected APIs and controlled data access are planned around real user responsibilities.",
  },
  {
    title: "Modular, Phased Delivery",
    text: "We break complex systems into manageable stages so teams can review priorities and improve the platform as it grows.",
  },
  {
    title: "Ongoing Product Improvement",
    text: "We support the platform after launch with fixes, performance work, new modules, integration updates and technical guidance.",
  },
];

const supportItems = [
  "System monitoring, issue resolution and operational support",
  "Security updates, dependency maintenance and access reviews",
  "Performance optimization for growing users, data and workloads",
  "New modules and workflow improvements as business needs change",
  "Integration and API maintenance across connected systems",
  "Backup, recovery and continuity planning",
];

const tabs: { label: string; value: TabType }[] = [
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Databases", value: "databases" },
  { label: "DevOps & Cloud", value: "devops" },
];

const techStack: Record<TabType, StackItem[]> = {
  frontend: [
    { name: "React", icon: "/icons/React.svg" },
    { name: "Next.js", icon: "/icons/Next.js.svg" },
    { name: "Vue.js", icon: "/icons/Vue.js.svg" },
    { name: "TypeScript", icon: "/icons/TypeScript.svg" },
    { name: "Tailwind CSS", icon: "/icons/TailwindCSS.svg" },
    { name: "Angular", icon: "/icons/Angular.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/icons/Node.js.svg" },
    { name: ".NET", icon: "/icons/NET.svg" },
    { name: "Java", icon: "/icons/Java.svg" },
    { name: "Python", icon: "/icons/Python.svg" },
    { name: "PHP", icon: "/icons/PHP.svg" },
    { name: "Golang", icon: "/icons/GoLand.svg" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg" },
    { name: "MySQL", icon: "/icons/MySQL.svg" },
    { name: "MongoDB", icon: "/icons/MongoDB.svg" },
    { name: "Redis", icon: "/icons/Redis.svg" },
    { name: "SQL Server", icon: "/icons/SQLServer.svg" },
    { name: "Oracle", icon: "/icons/Oracle.svg" },
  ],
  devops: [
    { name: "AWS", icon: "/icons/AWS.svg" },
    { name: "Azure", icon: "/icons/Azure.svg" },
    { name: "Google Cloud", icon: "/icons/GoogleCloud.svg" },
    { name: "Docker", icon: "/icons/Docker.svg" },
    { name: "Kubernetes", icon: "/icons/Kubernetes.svg" },
    { name: "Jenkins", icon: "/icons/Jenkins.svg" },
  ],
};

const faqs = [
  {
    q: "What types of enterprise software can you build?",
    a: "We build custom operations platforms, enterprise portals, workflow and approval systems, dashboards, reporting platforms, document systems and other internal business software.",
  },
  {
    q: "Can the software connect with our existing systems?",
    a: "Yes. Depending on available access and APIs, we can connect the platform with existing CRM, ERP, databases, payment systems, reporting tools and other business software.",
  },
  {
    q: "Can different departments have different roles and permissions?",
    a: "Yes. We can define role-based access so users only see the modules, records and actions relevant to their responsibilities.",
  },
  {
    q: "Can a large enterprise platform be developed in phases?",
    a: "Yes. For larger systems, we can prioritize core modules first and deliver additional workflows, reports and integrations in planned stages.",
  },
  {
    q: "Do you support the platform after launch?",
    a: "Yes. We provide issue resolution, performance improvements, security and access updates, integration maintenance and ongoing feature enhancements.",
  },
];

export default function EnterpriseSoftwareSolutionsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("frontend");
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const rows = [
    techStack[activeTab].slice(0, 4),
    techStack[activeTab].slice(4, 6),
  ];

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/enterprise-solution.jpg"
          alt="Enterprise Software Solutions"
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
            <span className="text-white/90">
              Enterprise Software Solutions
            </span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Enterprise Software Solutions
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              We build custom enterprise software that connects departments,
              workflows, data and existing systems so teams can manage complex
              operations with better visibility and control.
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
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Overview
            </p>

            <h2 className="max-w-165 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Connect complex operations through software built around your
              business.
            </h2>

            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ Live designs and develops custom enterprise software for
              businesses managing multiple teams, workflows, locations, data
              sources or internal systems. We build platforms that centralize
              operations, automate handoffs, control access and provide clearer
              reporting without forcing teams into a fixed process.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {overviewHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="border-t border-black/10 pt-7">
                  <Icon size={28} className="mb-5 text-[#193175]" />

                  <h3 className="text-[22px] font-normal tracking-[-0.4px]">
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

      {/* CHALLENGES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-22">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Challenges Enterprises Face
              </p>

              <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
                Complex operations become harder when systems and teams stay
                disconnected.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              When teams depend on disconnected tools, spreadsheets and manual
              handoffs, information moves slowly and management loses
              visibility. We build connected software around the workflows that
              need to work together.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {challenges.map((item, index) => (
              <div
                key={item.title}
                className="border-t border-black/10 pt-7"
              >
                <span className="text-[13px] font-semibold text-[#193175]">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-[23px] font-normal tracking-[-0.4px]">
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

      {/* SERVICES - CARDS */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Enterprise Software Services
            </p>

            <h2 className="mx-auto max-w-220 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Enterprise software built around the way your teams operate.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_18px_55px_rgba(0,0,0,0.045)] transition duration-300 hover:-translate-y-1 hover:border-[#193175]/30 hover:shadow-[0_26px_80px_rgba(60,91,155,0.11)]"
                >
                  <div className="mb-6 flex h-15 w-15 items-center justify-center rounded-2xl bg-[#193175]/10 transition group-hover:bg-[#193175]">
                    <Icon
                      size={28}
                      className="text-[#193175] transition group-hover:text-white"
                    />
                  </div>

                  <h3 className="text-[23px] font-normal tracking-[-0.4px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
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
              Enterprise Software Development Process
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              How we turn complex workflows into connected enterprise software
            </h2>

            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              We move from workflow discovery and architecture to development,
              business validation and staged deployment so the software
              reflects how your operations work.
            </p>
          </div>

          <div className="lg:hidden">
            <div className="space-y-5">
              {processSteps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative rounded-[26px] border border-black/10 bg-white p-6"
                  >
                    {index !== processSteps.length - 1 && (
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
                        <h3 className="text-[22px] font-normal leading-tight tracking-[-0.5px]">
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
                  id="enterprise-arrowhead"
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
                markerEnd="url(#enterprise-arrowhead)"
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
                markerEnd="url(#enterprise-arrowhead)"
              />

              <path
                d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#enterprise-arrowhead)"
              />

              <path
                d="M 392 613 L 1208 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#enterprise-arrowhead)"
              />
            </svg>

            {processLayout.map((item) => {
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

                  <h3 className="mt-6 text-[30px] font-normal leading-[1.15] tracking-[-0.8px] text-black xl:text-[32px]">
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

      {/* SOLUTIONS WE BUILD */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Enterprise Solutions We Build
            </p>

            <h2 className="max-w-180 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              One connected software environment for teams, workflows and
              business data.
            </h2>

            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              We build custom internal platforms that reduce fragmented work,
              give teams clearer access to information and connect the
              processes that depend on one another.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="space-y-5">
                {solutionsLeft.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-black/10 pb-4"
                  >
                    <CheckCircle2 size={22} className="text-[#193175]" />
                    <span className="text-[18px] font-light text-black/75">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-5">
                {solutionsRight.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-black/10 pb-4"
                  >
                    <CheckCircle2 size={22} className="text-[#193175]" />
                    <span className="text-[18px] font-light text-black/75">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <img
              src="/services/hero/enterprise-dashboard.jpg"
              alt="Enterprise dashboard software"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CASE STUDIES - CARDS */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Case Studies
              </p>

              <h2 className="max-w-195 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
                Enterprise software shaped around real operational workflows.
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
                  <div className="mb-5 flex items-center justify-between gap-5">
                    <h3 className="text-[24px] font-normal tracking-[-0.5px]">
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
      <section className="lazy-section bg-white px-5 py-20 text-[#161616] md:px-4 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#193175]">
              Tech Stack
            </p>

            <h2 className="mx-auto max-w-210 text-[38px] font-normal leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Technologies we use to build custom enterprise software
            </h2>

            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              We use modern frontend, backend, database and cloud technologies
              to build maintainable platforms with secure access, connected
              data and room for future modules.
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
              Enterprise software planned around real workflows, users and
              connected systems.
            </h2>

            <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
              We combine workflow discovery, modular engineering and
              integration planning to build software that teams can use, manage
              and continue improving over time.
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
          <div className="relative overflow-hidden bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <img
              src="/services/hero/enterprise-support.jpg"
              alt="Enterprise software support"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Support & Maintenance
            </p>

            <h2 className="max-w-185 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Keep your enterprise platform stable as operations continue to
              change.
            </h2>

            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              Enterprise software changes with users, workflows and connected
              systems. We help resolve issues, maintain integrations, improve
              performance and extend the platform as new operational needs
              appear.
            </p>

            <div className="mt-9 space-y-4">
              {supportItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 border-b border-black/10 pb-4"
                >
                  <CheckCircle2
                    size={22}
                    className="mt-0.5 shrink-0 text-[#193175]"
                  />

                  <span className="text-[16px] font-light leading-[1.6] text-black/70">
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
        <div className="mx-auto max-w-300">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              FAQ
            </p>

            <h2 className="mx-auto max-w-220 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about custom enterprise software.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-[26px] border bg-white transition-all duration-300 ${
                  openFaq === index
                    ? "border-[#193175]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]"
                    : "border-black/10 shadow-[0_12px_42px_rgba(0,0,0,0.035)]"
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
      <section className="lazy-section bg-white py-8">
        <div className="mx-auto max-w-450 px-4 lg:px-10">
          <div className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/CTA/Enterprise-CTA.jpg"
                alt="BrainADZ Live Enterprise Software Solutions"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Ready to connect your teams, workflows and business systems?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Let BrainADZ Live design and build custom enterprise software
                  around your operations, users, data and integrations.
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
