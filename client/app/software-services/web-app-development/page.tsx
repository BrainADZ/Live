/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Bell,
  Boxes,
  BriefcaseBusiness,
  Bug,
  CheckCircle2,
  Code2,
  Database,
  Gauge,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers3,
  LifeBuoy,
  LockKeyhole,
  Minus,
  MonitorCog,
  MonitorSmartphone,
  Network,
  PackageCheck,
  Plus,
  Rocket,
  Search,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Store,
  TabletSmartphone,
  Truck,
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
    title: "Discovery & Workflow Mapping",
    text: "We understand your users, business processes, data needs, existing systems and the actions the web app needs to support.",
    icon: Search,
  },
  {
    title: "UX & Interface Planning",
    text: "We map user journeys, screen structure and responsive layouts before development begins.",
    icon: TabletSmartphone,
  },
  {
    title: "Architecture & Integration Planning",
    text: "We define frontend, backend, database, APIs, access control and deployment requirements around the project scope.",
    icon: Workflow,
  },
  {
    title: "Web App Development",
    text: "We build the frontend, backend, business logic, dashboards and integrations required for the application.",
    icon: Code2,
  },
  {
    title: "Testing & Release Validation",
    text: "We test workflows, permissions, responsiveness, browser behavior, integrations and performance before release.",
    icon: ShieldCheck,
  },
  {
    title: "Deployment & Ongoing Improvement",
    text: "We deploy the web app and continue with issue resolution, updates and improvements as requirements evolve.",
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

const challenges = [
  {
    title: "Slow or Unstable Performance",
    text: "Heavy pages, inefficient queries and weak backend logic can make everyday tasks frustrating for users.",
    icon: Gauge,
  },
  {
    title: "Rigid Architecture",
    text: "Poorly planned systems become difficult to extend when users, data, workflows or integrations increase.",
    icon: Layers3,
  },
  {
    title: "Weak Access Control",
    text: "Unclear permissions and unprotected endpoints can expose business data or allow the wrong actions.",
    icon: LockKeyhole,
  },
  {
    title: "Disconnected Business Tools",
    text: "Manual movement of data between web apps, payment systems, CRM, ERP and other tools creates repeated work.",
    icon: Network,
  },
  {
    title: "Confusing User Flows",
    text: "Complex navigation and inconsistent screens make it harder for users to complete tasks accurately.",
    icon: MonitorSmartphone,
  },
  {
    title: "Difficult Maintenance",
    text: "Unstructured code and outdated dependencies make fixes, releases and future development harder to manage.",
    icon: MonitorCog,
  },
];

const services = [
  {
    title: "Custom Business Web Apps",
    text: "Browser-based applications built around your workflows, users, data and operational requirements.",
    icon: Code2,
  },
  {
    title: "Customer & Partner Portals",
    text: "Secure self-service portals for accounts, requests, documents, orders, status updates and communication.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Progressive Web Applications",
    text: "Responsive web experiences with app-like behavior for users who need access across devices.",
    icon: TabletSmartphone,
  },
  {
    title: "Backend & API Integration",
    text: "Connect the web app with databases, payment systems and approved third-party or internal APIs.",
    icon: Network,
  },
  {
    title: "Web App Modernization",
    text: "Improve outdated interfaces, workflows, performance and application structure without rebuilding more than needed.",
    icon: LifeBuoy,
  },
  {
    title: "Web App Support & Enhancement",
    text: "Resolve issues, improve existing workflows and add features as the application continues to evolve.",
    icon: MonitorSmartphone,
  },
];

const architectureLayers = [
  {
    title: "Users",
    items: ["Web Browser", "Mobile Browser", "API Clients"],
    icon: Users,
  },
  {
    title: "Frontend",
    items: ["Responsive UI", "Forms & Dashboards", "Client-Side Logic"],
    icon: MonitorSmartphone,
  },
  {
    title: "Access & APIs",
    items: ["Authentication", "Authorization", "Request Handling"],
    icon: Network,
  },
  {
    title: "Backend Services",
    items: ["Business Logic", "API Services", "Background Jobs"],
    icon: ServerCog,
  },
  {
    title: "Data Layer",
    items: ["Relational Data", "Document Data", "Caching"],
    icon: Database,
  },
  {
    title: "Deployment",
    items: ["Cloud Hosting", "Containers", "CI/CD"],
    icon: Boxes,
  },
];

const useCases = [
  { title: "Operations Management Systems", icon: Workflow },
  { title: "Admin & Management Dashboards", icon: MonitorCog },
  { title: "Customer & Partner Portals", icon: Users },
  { title: "Order & Commerce Platforms", icon: ShoppingCart },
  { title: "Booking & Scheduling Systems", icon: Bell },
  { title: "Multi-Role Internal Applications", icon: BriefcaseBusiness },
  { title: "Reporting & Analytics Platforms", icon: Gauge },
  { title: "Workflow & Approval Applications", icon: Layers3 },
];

const caseStudies = [
  {
    title: "Commerce Operations Platform",
    text: "A web platform for product management, orders, payments and operational reporting.",
    image: "/services/hero/ecommerce-app.jpg",
  },
  {
    title: "Multi-Role Operations Dashboard",
    text: "A role-based web application for teams, tasks, reports and business activity.",
    image: "/services/hero/saas-dashboard.jpg",
  },
  {
    title: "Healthcare Service Portal",
    text: "A secure web portal for appointments, records, status updates and user access.",
    image: "/services/hero/healthcare-app.jpg",
  },
  {
    title: "Property Search Platform",
    text: "A responsive web application with listings, filters, enquiry flows and map-based browsing.",
    image: "/services/hero/real-estate-platform.jpg",
  },
];

const whyChoose = [
  {
    title: "Workflow-First Planning",
    text: "We start with users, actions, data and business rules before deciding how the web app should be structured.",
  },
  {
    title: "Frontend & Backend Ownership",
    text: "We plan the interface, APIs, database and application logic as one connected product.",
  },
  {
    title: "Practical Architecture",
    text: "The technical structure is matched to the actual scale, integrations and future changes the application needs.",
  },
  {
    title: "Testing Across Real Scenarios",
    text: "We test workflows, permissions, browser behavior, responsive layouts and connected systems before release.",
  },
  {
    title: "Integration-Ready Development",
    text: "We plan clean data flows between the web app and approved business systems or third-party platforms.",
  },
  {
    title: "Ongoing Product Improvement",
    text: "After launch, we support fixes, workflow changes, performance work and new feature development.",
  },
];

const supportItems = [
  {
    title: "Issue Resolution",
    text: "Investigate application errors, failed workflows and browser-specific problems that affect users.",
    icon: Bug,
  },
  {
    title: "Performance Improvement",
    text: "Review page loading, API response times, database queries and other application bottlenecks.",
    icon: Gauge,
  },
  {
    title: "Security & Access Updates",
    text: "Maintain authentication, permissions, dependencies and protected application endpoints.",
    icon: ShieldCheck,
  },
  {
    title: "Workflow & Feature Enhancements",
    text: "Improve existing flows and add new modules as users and business requirements change.",
    icon: PackageCheck,
  },
];

const tabs: { label: string; value: TabType }[] = [
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Databases", value: "databases" },
  { label: "DevOps & Cloud", value: "cloud" },
];

const techStack: Record<TabType, StackItem[]> = {
  frontend: [
    { name: "React", icon: "/icons/React.svg" },
    { name: "Next.js", icon: "/icons/Next.js.svg" },
    { name: "Vue.js", icon: "/icons/Vue.svg" },
    { name: "TypeScript", icon: "/icons/TypeScript.svg" },
    { name: "JavaScript", icon: "/icons/JavaScript.svg" },
    { name: "Tailwind CSS", icon: "/icons/Tailwind.svg" },
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
    { name: "Firebase", icon: "/icons/Firebase.svg" },
  ],
  cloud: [
    { name: "AWS", icon: "/icons/AWS.svg" },
    { name: "Azure", icon: "/icons/Azure.svg" },
    { name: "Google Cloud", icon: "/icons/GoogleCloud.svg" },
    { name: "Docker", icon: "/icons/Docker.svg" },
    { name: "Kubernetes", icon: "/icons/Kubernetes.svg" },
    { name: "GitHub Actions", icon: "/icons/Github.svg" },
  ],
};

const faqs = [
  {
    q: "What types of web applications do you develop?",
    a: "We build custom business web apps, customer and partner portals, admin dashboards, booking systems, order platforms, reporting tools and internal workflow applications.",
  },
  {
    q: "Can you build the frontend, backend and database together?",
    a: "Yes. We can handle the interface, backend logic, database, APIs, integrations and deployment required for the web application.",
  },
  {
    q: "Can the web app have different user roles and permissions?",
    a: "Yes. We can define role-based access so different users see and manage only the features, records and actions relevant to them.",
  },
  {
    q: "Can you connect the web app with our existing systems?",
    a: "Yes. Depending on available access and APIs, we can connect payment systems, CRM, ERP, maps, email, SMS, analytics and other business tools.",
  },
  {
    q: "Can you improve an existing web application?",
    a: "Yes. We can review existing code and improve selected areas such as UI, workflows, performance, integrations, security or application structure.",
  },
  {
    q: "Do you provide support after deployment?",
    a: "Yes. We provide issue resolution, performance work, security and dependency updates, workflow changes and new feature development after launch.",
  },
  {
    q: "How do you estimate the timeline for a web app project?",
    a: "The timeline depends on the number of workflows, user roles, screens, integrations, data requirements and testing scope. We estimate it after reviewing the actual project requirements.",
  },
];

export default function WebAppDevelopmentPage() {
  const [activeTab, setActiveTab] = useState<TabType>("frontend");
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const techRows = [
    techStack[activeTab].slice(0, 4),
    techStack[activeTab].slice(4, 6),
  ];

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/web-app.webp"
          alt="Web App Development Services"
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
            <span className="text-white/90">Web App Development</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Web App Development Services
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Custom web applications for business workflows, customer portals,
              dashboards and browser-based digital products—built with the
              frontend, backend and integrations they actually need.
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
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Overview
            </p>

            <h2 className="max-w-175 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Web applications built around real users, workflows and business data.
            </h2>

            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ Live builds browser-based applications for internal teams,
              customers and partners. We plan the interface, backend logic,
              database, user roles and integrations around the tasks the
              application needs to support.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Clear User Workflows",
                text: "Responsive interfaces that help users complete important tasks with less friction.",
                icon: MonitorSmartphone,
              },
              {
                title: "Maintainable Structure",
                text: "Application architecture planned for future users, data, features and integrations.",
                icon: Layers3,
              },
              {
                title: "Controlled Access",
                text: "Authentication, role permissions and protected data flows built around user responsibilities.",
                icon: ShieldCheck,
              },
              {
                title: "Connected Systems",
                text: "Integrations that reduce repeated work between the web app and the tools your business already uses.",
                icon: Rocket,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-black/10 bg-[#f8faff] p-7 shadow-[0_18px_55px_rgba(0,0,0,0.04)]"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#193175]/10">
                    <Icon size={26} className="text-[#193175]" />
                  </div>

                  <h3 className="text-[21px] font-normal tracking-[-0.4px]">
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
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Web App Challenges
              </p>

              <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
                Problems that make web applications difficult to use and maintain.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              Web applications become harder to rely on when workflows are slow,
              permissions are unclear or systems do not exchange data properly.
              We address these issues through better structure, testing and integration planning.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[26px] border border-black/10 bg-white p-6 shadow-[0_18px_55px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:border-[#193175]/30 hover:shadow-[0_24px_70px_rgba(60,91,155,0.1)]"
                >
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-full bg-[#193175]/10">
                    <Icon size={24} className="text-[#193175]" />
                  </div>

                  <h3 className="text-[21px] font-normal tracking-[-0.3px]">
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

      {/* SERVICES */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Web App Development Services
            </p>

            <h2 className="mx-auto max-w-220 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Web app development for connected workflows, users and data.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-black/10 bg-[#f8faff] p-7 transition hover:-translate-y-1 hover:border-[#193175]/30 hover:bg-white hover:shadow-[0_22px_70px_rgba(60,91,155,0.1)]"
                >
                  <div className="mb-6 flex h-15 w-15 items-center justify-center rounded-2xl bg-[#193175]/10 transition group-hover:bg-[#193175]">
                    <Icon size={27} className="text-[#193175] transition group-hover:text-white" />
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

      {/* WORKFLOW SECTION */}
      <section className="relative overflow-hidden bg-[#f6f8fc] px-5 py-16 md:px-4 lg:px-12 lg:py-14">
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
              Web App Development Process
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              From workflow discovery to a stable web application
            </h2>

            <p className="mx-auto mt-5 max-w-245 text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              We move from user and workflow discovery to architecture,
              development, testing and release so each part of the application
              is planned around real use.
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
                        <Icon size={23} strokeWidth={2.4} className="text-[#193175]" />
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
                  id="web-workflow-arrowhead"
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

              <path d="M 392 43 L 1208 43" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#web-workflow-arrowhead)" />
              <path d="M 1294 43 C 1480 43 1515 150 1515 230 C 1515 318 1440 343 1294 343" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 1208 343 L 392 343" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#web-workflow-arrowhead)" />
              <path d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#web-workflow-arrowhead)" />
              <path d="M 392 613 L 1208 613" stroke="#193175" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#web-workflow-arrowhead)" />
            </svg>

            {workflowLayout.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group absolute z-10 w-97.5 -translate-x-1/2 text-center"
                  style={{ left: item.left, top: item.top }}
                >
                  <div className="mx-auto flex h-21.5 w-21.5 items-center justify-center rounded-full border-2 border-[#193175] bg-[#edf3ff] shadow-[0_16px_42px_rgba(60,91,155,0.16)] transition duration-300 ease-out hover:-translate-y-2 hover:bg-white hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)] group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)]">
                    <Icon size={36} strokeWidth={2.25} className="text-[#193175]" />
                  </div>

                  <h3 className="mt-6 text-[30px] font-normal leading-[1.15] tracking-[-0.8px] text-black xl:text-[32px]">
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

      {/* WEB APP ARCHITECTURE */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Web App Architecture
              </p>

              <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
                A connected architecture for the complete web application.
              </h2>
            </div>

            <p className="max-w-190 text-[16px] font-light leading-[1.7] text-black/65">
              We plan how users, interfaces, access controls, APIs, backend
              logic, data and deployment fit together before the application
              grows more complex.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-6">
            {architectureLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <div key={layer.title} className="rounded-3xl border border-black/10 bg-[#f8faff] p-5">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#193175]/10">
                      <Icon size={20} className="text-[#193175]" />
                    </div>
                    <h3 className="text-[18px] font-normal tracking-[-0.3px]">{layer.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {layer.items.map((subItem) => (
                      <div key={subItem} className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-[14px] font-light text-black/65">
                        {subItem}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 rounded-3xl border border-black/10 bg-[#f8faff] p-6 md:grid-cols-4">
            {["Monitoring", "Logging", "Alerts", "Performance Tracking"].map((item) => (
              <div key={item} className="flex items-center justify-center gap-3 text-[15px] font-light text-black/65">
                <CheckCircle2 size={20} className="text-[#193175]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Web App Use Cases
              </p>

              <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
                Web applications for everyday business and customer workflows.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              We build browser-based systems that help teams manage work,
              customers access services and information move through connected
              processes.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="group rounded-[26px] border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#193175]/30 hover:shadow-[0_22px_65px_rgba(60,91,155,0.1)]">
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-full bg-[#193175]/10 transition group-hover:bg-[#193175]">
                    <Icon size={24} className="text-[#193175] transition group-hover:text-white" />
                  </div>

                  <h3 className="text-[20px] font-normal tracking-[-0.3px]">{item.title}</h3>
                </div>
              );
            })}
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
              Technologies we use for custom web app development
            </h2>

            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              We use frontend, backend, database and cloud technologies
              according to the application&apos;s workflows, data, integration
              needs and deployment requirements.
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
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="mx-auto max-w-315">
            <div className="space-y-5 md:space-y-6">
              {techRows.map((row, rowIndex) => (
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

      <IndustriesSection />

      {/* WHY CHOOSE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why Choose BrainADZ Live
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              We build web apps around workflows, users and connected systems.
            </h2>

            <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
              Our approach combines workflow planning, product design,
              application engineering and integration thinking so the web app
              remains useful as requirements change.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {whyChoose.map((item, index) => (
              <div key={item.title} className="border-t border-black/10 pt-7">
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

      {/* CASE STUDIES */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Case Studies
              </p>

              <h2 className="max-w-195 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
                Web applications shaped around real workflows and users.
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

      {/* SUPPORT */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Support & Optimization
              </p>

              <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
                Keep your web app stable as requirements continue to change.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              After launch, we help resolve issues, maintain access and
              integrations, improve performance and extend workflows as the
              application evolves.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {supportItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="grid grid-cols-[68px_1fr] gap-5 border-t border-black/10 pt-7">
                  <div className="flex h-17 w-17 items-center justify-center rounded-[20px] bg-[#193175]/10">
                    <Icon size={28} className="text-[#193175]" />
                  </div>

                  <div>
                    <h3 className="text-[23px] font-normal tracking-[-0.4px]">
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
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              FAQ
            </p>

            <h2 className="mx-auto max-w-230 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about custom web app development.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div key={faq.q} className={`group overflow-hidden rounded-[26px] border bg-white transition-all duration-300 ${openFaq === index ? "border-[#193175]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]" : "border-black/10 shadow-[0_12px_42px_rgba(0,0,0,0.035)] hover:-translate-y-1 hover:border-[#193175]/25 hover:shadow-[0_18px_56px_rgba(60,91,155,0.08)]"}`}>
                <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6">
                  <span className="flex items-center gap-4">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold transition duration-300 ${openFaq === index ? "bg-[#193175] text-white" : "bg-[#193175]/10 text-[#193175] group-hover:bg-[#193175] group-hover:text-white"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[16px] font-light leading-[1.45] text-black md:text-[17px]">
                      {faq.q}
                    </span>
                  </span>

                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition duration-300 ${openFaq === index ? "bg-[#193175] text-white" : "bg-[#f6f8fc] text-[#193175] group-hover:bg-[#193175]/10"}`}>
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
                                        src="/CTA/WebApp-CTA.jpg"
                                        alt="BrainADZ Live Web App Development Services"
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover"
                                      />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
                                      <div className="max-w-145">
                                        <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                                          Ready to build a web application around your business workflow?
                                        </h3>
                                        <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                                          Let BrainADZ Live design and develop the frontend, backend, data flows and integrations your web application needs.
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