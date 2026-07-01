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
    title: "Discovery & Analysis",
    text: "We understand your business workflows, existing systems, pain points and enterprise goals.",
    icon: Search,
  },
  {
    title: "Planning & Strategy",
    text: "We define modules, architecture, integrations, permissions, timeline and delivery roadmap.",
    icon: GitBranch,
  },
  {
    title: "Design & Prototyping",
    text: "We create clean enterprise interfaces, dashboards and user flows before development begins.",
    icon: Workflow,
  },
  {
    title: "Development",
    text: "We build secure, scalable and high-performance enterprise software with clean architecture.",
    icon: Code2,
  },
  {
    title: "Testing & QA",
    text: "We test security, roles, workflows, reports, integrations, performance and business logic.",
    icon: ShieldCheck,
  },
  {
    title: "Deployment & Support",
    text: "We deploy the solution and provide continuous monitoring, improvements and long-term support.",
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
    title: "Operational Efficiency",
    text: "Automate workflows and reduce manual processes across departments.",
    icon: Gauge,
  },
  {
    title: "Data-Driven Decisions",
    text: "Gain real-time visibility with dashboards, analytics and reporting.",
    icon: BarChart3,
  },
  {
    title: "Enterprise Security",
    text: "Protect data with secure roles, access controls and compliance-ready systems.",
    icon: LockKeyhole,
  },
  {
    title: "Scalable Systems",
    text: "Build software that grows with users, teams, locations and business needs.",
    icon: Boxes,
  },
];

const challenges = [
  {
    title: "Siloed Systems",
    text: "Disconnected tools create duplicate work, delays and limited business visibility.",
  },
  {
    title: "Manual Processes",
    text: "Time-consuming manual workflows reduce productivity and increase errors.",
  },
  {
    title: "High Operational Cost",
    text: "Outdated systems and inefficient processes increase cost of ownership.",
  },
  {
    title: "Security & Compliance",
    text: "Growing data, users and regulations need secure and compliant software systems.",
  },
];

const services = [
  {
    title: "ERP Solutions",
    text: "End-to-end ERP platforms to manage operations, inventory, teams, finance and business workflows.",
    icon: BriefcaseBusiness,
  },
  {
    title: "CRM Solutions",
    text: "Customer relationship systems to manage leads, sales pipelines, follow-ups and customer activity.",
    icon: Users,
  },
  {
    title: "Process Automation",
    text: "Automation tools that reduce repetitive work and improve operational speed across departments.",
    icon: Settings2,
  },
  {
    title: "System Integration",
    text: "Connect existing software, APIs, dashboards, CRMs, ERPs and third-party business tools.",
    icon: Network,
  },
];

const solutionsLeft = [
  "Enterprise Portals",
  "Supply Chain Management",
  "Human Resource Management",
  "Project Management Systems",
];

const solutionsRight = [
  "Document Management Systems",
  "Asset Management Solutions",
  "Reporting & Analytics Platforms",
  "Role-Based Admin Dashboards",
];

const caseStudies = [
  {
    title: "Manufacturing ERP System",
    text: "A centralized ERP system for production, inventory, operations and team visibility.",
    image: "/services/hero/download.jpeg",
  },
  {
    title: "Retail Management System",
    text: "A retail platform for orders, stock, billing, reporting and customer operations.",
    image: "/services/hero/Retail-CRM-and-Campaign-Management-System.png",
  },
  {
    title: "Financial Analytics Platform",
    text: "A secure analytics dashboard for reports, business insights and decision-making.",
    image: "/services/hero/serviceadmin.jpeg",
  },
  {
    title: "Healthcare Management System",
    text: "A healthcare platform for records, appointments, staff workflows and secure access.",
    image: "/services/hero/hopitality.png",
  },
];

const whyChoose = [
  {
    title: "Enterprise Expertise",
    text: "We understand complex workflows, multiple departments, user roles and business operations.",
  },
  {
    title: "Secure & Compliant",
    text: "We plan secure authentication, access control, protected APIs and data handling from day one.",
  },
  {
    title: "Agile Development",
    text: "We deliver in planned stages so your team can review, improve and scale the solution smoothly.",
  },
  {
    title: "Long-Term Partnership",
    text: "We support your enterprise software with updates, enhancements and technical guidance after launch.",
  },
];

const supportItems = [
  "24/7 support for business-critical systems",
  "System monitoring for uptime and performance",
  "Security updates, patches and access reviews",
  "Performance optimization for speed and scalability",
  "Feature enhancements based on business growth",
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
    q: "What types of enterprise software solutions do you offer?",
    a: "We build ERP systems, CRM platforms, enterprise portals, dashboards, workflow automation tools, reporting systems and custom internal software.",
  },
  {
    q: "Can you integrate enterprise software with our existing systems?",
    a: "Yes. We integrate enterprise software with APIs, CRMs, ERPs, payment systems, reporting tools, databases and third-party platforms.",
  },
  {
    q: "How do you ensure enterprise software security?",
    a: "We use secure authentication, role-based access, protected APIs, data validation, secure deployment and access-control practices.",
  },
  {
    q: "What is the typical timeline for enterprise software development?",
    a: "The timeline depends on the size and complexity of the project. Smaller systems can take a few weeks, while larger enterprise platforms need a planned phased timeline.",
  },
  {
    q: "Do you provide post-deployment support?",
    a: "Yes. We provide monitoring, maintenance, bug fixing, performance improvements, security updates and feature enhancements after launch.",
  },
];

export default function EnterpriseSoftwareSolutionsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("frontend");
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const rows = [techStack[activeTab].slice(0, 4), techStack[activeTab].slice(4, 6)];

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/services/hero/enterprise-software-solutions.jpg"
          alt="Enterprise Software Solutions"
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
            <span className="text-white/90">Enterprise Software Solutions</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Enterprise Software Solutions
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Secure, scalable and future-ready enterprise software that connects teams,
              processes and data to improve productivity and business growth.
            </p>

            <div className="mt-8">
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#3C5B9B] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
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
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Overview
            </p>
            <h2 className="max-w-165 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Software solutions built for enterprise success.
            </h2>
            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              We deliver custom enterprise software that aligns with your business objectives,
              connects departments, improves visibility and adapts to future needs. From ERP
              and CRM systems to dashboards and workflow automation, every solution is planned
              for security, scalability and long-term value.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {overviewHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="border-t border-black/10 pt-7">
                  <Icon size={28} className="mb-5 text-[#3C5B9B]" />
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

      {/* CHALLENGES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-22">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Challenges Enterprises Face
              </p>
              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Enterprise growth needs connected, reliable systems.
              </h2>
            </div>
            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              Many enterprises struggle with scattered systems, manual processes and limited
              visibility. We help simplify operations with software built around real workflows.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {challenges.map((item, index) => (
              <div key={item.title} className="border-t border-black/10 pt-7">
                <span className="text-[13px] font-semibold text-[#3C5B9B]">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-[23px] font-light tracking-[-0.4px]">
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
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Enterprise Software Services
            </p>
            <h2 className="mx-auto max-w-220 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Custom enterprise systems designed around your operations.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_18px_55px_rgba(0,0,0,0.045)] transition duration-300 hover:-translate-y-1 hover:border-[#3C5B9B]/30 hover:shadow-[0_26px_80px_rgba(60,91,155,0.11)]"
                >
                  <div className="mb-6 flex h-15 w-15 items-center justify-center rounded-2xl bg-[#3C5B9B]/10 transition group-hover:bg-[#3C5B9B]">
                    <Icon size={28} className="text-[#3C5B9B] transition group-hover:text-white" />
                  </div>
                  <h3 className="text-[23px] font-light tracking-[-0.4px]">
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
              Enterprise Software Development Process
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              Our proven enterprise software development roadmap
            </h2>
            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              We follow a structured roadmap to design, develop, test and deploy enterprise
              software with security, scalability and long-term reliability.
            </p>
          </div>

          <div className="lg:hidden">
            <div className="space-y-5">
              {processSteps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="group relative rounded-[26px] border border-black/10 bg-white p-6">
                    {index !== processSteps.length - 1 && (
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
            <svg
              className="pointer-events-none absolute inset-0 z-0 h-full w-full"
              viewBox="0 0 1600 790"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <defs>
                <marker id="enterprise-arrowhead" markerHeight="14" markerUnits="userSpaceOnUse" markerWidth="18" orient="auto" refX="16" refY="7">
                  <path d="M 0 0 L 18 7 L 0 14 z" fill="#3C5B9B" />
                </marker>
              </defs>
              <path d="M 392 43 L 1208 43" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#enterprise-arrowhead)" />
              <path d="M 1294 43 C 1480 43 1515 150 1515 230 C 1515 318 1440 343 1294 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 1208 343 L 392 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#enterprise-arrowhead)" />
              <path d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#enterprise-arrowhead)" />
              <path d="M 392 613 L 1208 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#enterprise-arrowhead)" />
            </svg>

            {processLayout.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group absolute z-10 w-[390px] -translate-x-1/2 text-center" style={{ left: item.left, top: item.top }}>
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

      {/* SOLUTIONS WE BUILD */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Enterprise Solutions We Build
            </p>
            <h2 className="max-w-180 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Connected platforms for people, processes and data.
            </h2>
            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              Our enterprise solutions are designed to simplify internal workflows,
              improve visibility and connect business functions across departments.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="space-y-5">
                {solutionsLeft.map((item) => (
                  <div key={item} className="flex items-center gap-4 border-b border-black/10 pb-4">
                    <CheckCircle2 size={22} className="text-[#3C5B9B]" />
                    <span className="text-[18px] font-light text-black/75">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-5">
                {solutionsRight.map((item) => (
                  <div key={item} className="flex items-center gap-4 border-b border-black/10 pb-4">
                    <CheckCircle2 size={22} className="text-[#3C5B9B]" />
                    <span className="text-[18px] font-light text-black/75">{item}</span>
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
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Case Studies
              </p>
              <h2 className="max-w-195 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Enterprise systems built for real business operations.
              </h2>
            </div>
            <Link href="/case-studies" className="inline-flex items-center gap-3 text-[14px] font-semibold text-[#3C5B9B]">
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
                  <div className="mb-5 flex items-center justify-between gap-5">
                    <h3 className="text-[24px] font-light tracking-[-0.5px]">{item.title}</h3>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3C5B9B]/10">
                      <ArrowRight size={18} className="text-[#3C5B9B]" />
                    </span>
                  </div>
                  <p className="text-[15px] font-light leading-[1.7] text-black/65">{item.text}</p>
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
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#3c5b9b]">
              Tech Stack
            </p>
            <h2 className="mx-auto max-w-210 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Technologies powering enterprise software solutions
            </h2>
            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              We use modern frontend, backend, database and cloud technologies to build secure,
              scalable and reliable enterprise-grade applications.
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
                    isActive ? "text-[#161616]" : "text-[#8d8d8d] hover:text-[#3c5b9b]"
                  }`}
                >
                  {tab.label}
                  <span
                    className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#3c5b9b] transition-all duration-300 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="mx-auto max-w-315">
            <div className="space-y-5 md:space-y-6">
              {rows.map((row, rowIndex) => (
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
                      <h3 className="mt-4 text-[15px] font-light leading-[1.3] tracking-[-0.2px] text-[#3c5b9b] transition duration-300 group-hover:text-[#2f4a82] md:text-[16px]">
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
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Why Choose BrainADZ Live
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Enterprise software planned for stability, scale and long-term success.
            </h2>
            <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
              We combine practical workflow understanding with secure engineering to deliver
              software that supports critical business operations.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {whyChoose.map((item, index) => (
              <div key={item.title} className="border-t border-black/10 pt-7">
                <span className="text-[13px] font-semibold text-[#3C5B9B]">0{index + 1}</span>
                <h3 className="mt-3 text-[24px] font-light tracking-[-0.4px]">{item.title}</h3>
                <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <img src="/services/hero/enterprise-support.jpg" alt="Enterprise software support" className="h-full w-full object-cover" />
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Support & Maintenance
            </p>
            <h2 className="max-w-185 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Continuous support for business-critical systems.
            </h2>
            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              Enterprise systems need regular monitoring, upgrades and improvements. Our support
              keeps your platform stable, secure and aligned with changing business needs.
            </p>

            <div className="mt-9 space-y-4">
              {supportItems.map((item) => (
                <div key={item} className="flex items-start gap-4 border-b border-black/10 pb-4">
                  <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-[#3C5B9B]" />
                  <span className="text-[16px] font-light leading-[1.6] text-black/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-300">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              FAQ
            </p>
            <h2 className="mx-auto max-w-220 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about enterprise software solutions.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.q} className={`overflow-hidden rounded-[26px] border bg-white transition-all duration-300 ${
                openFaq === index ? "border-[#3C5B9B]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]" : "border-black/10 shadow-[0_12px_42px_rgba(0,0,0,0.035)]"
              }`}>
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                >
                  <span className="text-[16px] font-light leading-[1.45] text-black md:text-[17px]">{faq.q}</span>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                    openFaq === index ? "bg-[#3C5B9B] text-white" : "bg-[#f6f8fc] text-[#3C5B9B]"
                  }`}>
                    {openFaq === index ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="mx-5 border-t border-[#3C5B9B]/15 pb-6 pt-4 md:mx-6">
                    <p className="text-[15px] font-light leading-[1.75] text-black/65">{faq.a}</p>
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
          <div className="flex min-h-65 overflow-hidden rounded-none bg-[#3C5B9B] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img src="/about.avif" alt="BrainADZ Live Enterprise Software" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-150">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Ready to transform your enterprise?
                </h3>
                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Build robust, scalable and intelligent software solutions that improve operations,
                  connect teams and support business growth.
                </p>
              </div>

              <a href="/contact" className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#3C5B9B] md:min-w-57.5">
                <span>Enquire Now</span>
                <span className="text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
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