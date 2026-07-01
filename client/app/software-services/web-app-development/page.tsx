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
    title: "Discovery & Planning",
    text: "We understand your business goals, users, workflows and technical requirements before planning the web app.",
    icon: Search,
  },
  {
    title: "UX & Interface Design",
    text: "We create clean wireframes, user journeys and responsive layouts that make the application easy to use.",
    icon: TabletSmartphone,
  },
  {
    title: "Architecture Setup",
    text: "We define frontend, backend, database, API, security and deployment structure for long-term scalability.",
    icon: Workflow,
  },
  {
    title: "Web App Development",
    text: "We build fast, secure and scalable web applications using modern frameworks and clean coding practices.",
    icon: Code2,
  },
  {
    title: "Testing & Optimization",
    text: "We test performance, responsiveness, usability, security and browser compatibility before release.",
    icon: ShieldCheck,
  },
  {
    title: "Deployment & Support",
    text: "We deploy your web app with reliable cloud setup and provide ongoing improvements after launch.",
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
    title: "Poor Performance",
    text: "Slow loading, heavy interfaces and outdated code can reduce conversions and user trust.",
    icon: Gauge,
  },
  {
    title: "Limited Scalability",
    text: "Weak architecture can fail when traffic, users, data or business operations start growing.",
    icon: Layers3,
  },
  {
    title: "Security Risks",
    text: "Unprotected forms, APIs and access flows can expose business data and customer information.",
    icon: LockKeyhole,
  },
  {
    title: "Integration Issues",
    text: "Disconnected systems make it difficult to connect payments, CRM, ERP, analytics and APIs.",
    icon: Network,
  },
  {
    title: "Poor User Experience",
    text: "Confusing navigation, weak design and non-responsive screens create friction for users.",
    icon: MonitorSmartphone,
  },
  {
    title: "High Maintenance",
    text: "Unstructured code and outdated systems become harder and more costly to maintain over time.",
    icon: MonitorCog,
  },
];

const services = [
  {
    title: "Custom Web Applications",
    text: "Tailored web solutions built around your business workflow and user requirements.",
    icon: Code2,
  },
  {
    title: "Enterprise Web Apps",
    text: "Secure and scalable applications for teams, operations, data and internal business systems.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Progressive Web Apps",
    text: "Fast, reliable and responsive app-like web experiences that work across devices.",
    icon: TabletSmartphone,
  },
  {
    title: "API Development",
    text: "Backend APIs and integrations for payments, CRMs, ERPs, maps, analytics and third-party tools.",
    icon: Network,
  },
  {
    title: "Web App Maintenance",
    text: "Bug fixing, upgrades, monitoring, improvements and ongoing support after deployment.",
    icon: LifeBuoy,
  },
  {
    title: "UI/UX for Web Apps",
    text: "Clean, responsive and conversion-focused interfaces for better user engagement.",
    icon: MonitorSmartphone,
  },
];

const architectureLayers = [
  {
    title: "Users",
    items: ["Web Browser", "Mobile", "API Clients"],
    icon: Users,
  },
  {
    title: "Frontend",
    items: ["React / Next.js", "HTML / CSS", "JavaScript / TS"],
    icon: MonitorSmartphone,
  },
  {
    title: "API Gateway",
    items: ["Routing", "Authentication", "Rate Limiting"],
    icon: Network,
  },
  {
    title: "Backend Services",
    items: ["Business Logic", "Microservices", "Background Jobs"],
    icon: ServerCog,
  },
  {
    title: "Data Layer",
    items: ["Relational DB", "NoSQL DB", "Cache"],
    icon: Database,
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS / Azure", "Docker / K8s", "CI/CD Pipeline"],
    icon: Boxes,
  },
];

const useCases = [
  { title: "SaaS Platforms", icon: Layers3 },
  { title: "Admin Dashboards", icon: MonitorCog },
  { title: "Customer Portals", icon: Users },
  { title: "E-commerce Platforms", icon: ShoppingCart },
  { title: "Booking Systems", icon: Bell },
  { title: "ERP / CRM Tools", icon: BriefcaseBusiness },
  { title: "Analytics Dashboards", icon: Gauge },
  { title: "Internal Business Apps", icon: Workflow },
];

const caseStudies = [
  {
    title: "E-commerce Platform",
    text: "A scalable online selling platform with payments, product management and analytics.",
    image: "/services/hero/ecommerce-app.jpg",
  },
  {
    title: "SaaS Dashboard",
    text: "A multi-tenant dashboard with role-based access, reporting and subscription flow.",
    image: "/services/hero/saas-dashboard.jpg",
  },
  {
    title: "Healthcare Portal",
    text: "A secure patient portal with appointment booking, reports and reminders.",
    image: "/services/hero/healthcare-app.jpg",
  },
  {
    title: "Real Estate Platform",
    text: "A property listing system with advanced search, filters and map-based browsing.",
    image: "/services/hero/real-estate-platform.jpg",
  },
];

const whyChoose = [
  {
    title: "Experienced Team",
    text: "Skilled developers with strong experience in modern web technologies and scalable architecture.",
  },
  {
    title: "Agile Approach",
    text: "Flexible sprint-based development with regular updates, feedback and transparent progress.",
  },
  {
    title: "Quality Assurance",
    text: "Focused testing to ensure stable, secure and reliable web applications before launch.",
  },
  {
    title: "On-Time Delivery",
    text: "Clear milestones and planned delivery approach to keep your project on track.",
  },
  {
    title: "Scalable Architecture",
    text: "Web apps planned for more users, more data, new features and future integrations.",
  },
  {
    title: "Long-Term Support",
    text: "Ongoing maintenance, improvements and technical support for continuous growth.",
  },
];

const supportItems = [
  {
    title: "Bug Fixing",
    text: "Identify issues, fix errors and keep your application stable for users.",
    icon: Bug,
  },
  {
    title: "Performance Tuning",
    text: "Improve page speed, API performance, database queries and overall responsiveness.",
    icon: Gauge,
  },
  {
    title: "Security Updates",
    text: "Keep authentication, permissions, APIs and deployment environments secure.",
    icon: ShieldCheck,
  },
  {
    title: "Feature Enhancements",
    text: "Add new modules, improve workflows and expand your application over time.",
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
    a: "We build custom web apps, SaaS platforms, admin dashboards, customer portals, ecommerce platforms, booking systems, ERP/CRM tools and internal business applications.",
  },
  {
    q: "Can you build both frontend and backend?",
    a: "Yes. We handle frontend, backend, databases, APIs, integrations, deployment and post-launch support.",
  },
  {
    q: "Will my web app be mobile responsive?",
    a: "Yes. We design responsive interfaces that work smoothly on desktop, tablet and mobile screens.",
  },
  {
    q: "Can you integrate third-party APIs?",
    a: "Yes. We integrate payment gateways, CRM systems, ERP tools, maps, analytics, notifications, email, SMS and other APIs.",
  },
  {
    q: "Do you provide support after deployment?",
    a: "Yes. We provide maintenance, bug fixing, security updates, performance optimization and feature enhancements after launch.",
  },
  {
    q: "How long does web app development take?",
    a: "The timeline depends on the project size and features. A small web app may take a few weeks, while larger enterprise systems require a planned development timeline.",
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
          src="/services/hero/web-app-development.jpg"
          alt="Web App Development Services"
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
            <span className="text-white/90">Web App Development</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Web App Development Services
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Secure, scalable and high-performance web applications built for
              business workflows, customer platforms, dashboards and digital
              products.
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
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Overview
            </p>

            <h2 className="max-w-175 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Powerful web solutions for modern businesses.
            </h2>

            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              We design and develop custom web applications that are fast,
              secure, user-friendly and ready to scale. From internal tools to
              customer portals and SaaS platforms, every solution is built
              around real business needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Better User Experience",
                text: "Clean responsive interfaces that help users complete actions faster.",
                icon: MonitorSmartphone,
              },
              {
                title: "Scalable Architecture",
                text: "Web apps planned for more traffic, data, users and future features.",
                icon: Layers3,
              },
              {
                title: "Secure & Reliable",
                text: "Authentication, role access, secure APIs and stable deployment practices.",
                icon: ShieldCheck,
              },
              {
                title: "Business Growth",
                text: "Digital systems that improve operations, sales and customer engagement.",
                icon: Rocket,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-black/10 bg-[#f8faff] p-7 shadow-[0_18px_55px_rgba(0,0,0,0.04)]"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3C5B9B]/10">
                    <Icon size={26} className="text-[#3C5B9B]" />
                  </div>

                  <h3 className="text-[21px] font-light tracking-[-0.4px]">
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
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Web App Challenges
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Common problems that hold web applications back.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              Poor performance, weak architecture and confusing user experience
              can directly affect growth. We build web apps with speed,
              usability, security and scalability in mind.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[26px] border border-black/10 bg-white p-6 shadow-[0_18px_55px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:border-[#3C5B9B]/30 hover:shadow-[0_24px_70px_rgba(60,91,155,0.1)]"
                >
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-full bg-[#3C5B9B]/10">
                    <Icon size={24} className="text-[#3C5B9B]" />
                  </div>

                  <h3 className="text-[21px] font-light tracking-[-0.3px]">
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
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Web App Development Services
            </p>

            <h2 className="mx-auto max-w-220 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Web applications designed for performance, usability and growth.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-black/10 bg-[#f8faff] p-7 transition hover:-translate-y-1 hover:border-[#3C5B9B]/30 hover:bg-white hover:shadow-[0_22px_70px_rgba(60,91,155,0.1)]"
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
              Web App Development Process
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              Our proven web app development process roadmap
            </h2>

            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              We follow a clear development path from discovery and design to
              deployment, optimization and long-term support.
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
                      <div className="absolute left-11 top-18 h-[calc(100%+20px)] border-l-2 border-dashed border-[#3C5B9B]/45" />
                    )}

                    <div className="relative z-10 flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#3C5B9B] bg-[#edf3ff] transition duration-300 ease-out hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_18px_42px_rgba(60,91,155,0.24)] group-hover:-translate-y-1.5 group-hover:bg-white group-hover:shadow-[0_18px_42px_rgba(60,91,155,0.24)]">
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
                <marker
                  id="web-workflow-arrowhead"
                  markerHeight="14"
                  markerUnits="userSpaceOnUse"
                  markerWidth="18"
                  orient="auto"
                  refX="16"
                  refY="7"
                >
                  <path d="M 0 0 L 18 7 L 0 14 z" fill="#3C5B9B" />
                </marker>
              </defs>

              <path d="M 392 43 L 1208 43" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#web-workflow-arrowhead)" />
              <path d="M 1294 43 C 1480 43 1515 150 1515 230 C 1515 318 1440 343 1294 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 1208 343 L 392 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#web-workflow-arrowhead)" />
              <path d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#web-workflow-arrowhead)" />
              <path d="M 392 613 L 1208 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#web-workflow-arrowhead)" />
            </svg>

            {workflowLayout.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group absolute z-10 w-[390px] -translate-x-1/2 text-center"
                  style={{ left: item.left, top: item.top }}
                >
                  <div className="mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-full border-2 border-[#3C5B9B] bg-[#edf3ff] shadow-[0_16px_42px_rgba(60,91,155,0.16)] transition duration-300 ease-out hover:-translate-y-2 hover:bg-white hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)] group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)]">
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

      {/* WEB APP ARCHITECTURE */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Web App Architecture
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Modern and scalable web application architecture.
              </h2>
            </div>

            <p className="max-w-190 text-[16px] font-light leading-[1.7] text-black/65">
              We plan architecture that connects users, frontend, APIs, backend
              services, databases and cloud infrastructure into one reliable
              digital system.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-6">
            {architectureLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <div key={layer.title} className="rounded-[24px] border border-black/10 bg-[#f8faff] p-5">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3C5B9B]/10">
                      <Icon size={20} className="text-[#3C5B9B]" />
                    </div>
                    <h3 className="text-[18px] font-light tracking-[-0.3px]">{layer.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {layer.items.map((subItem) => (
                      <div key={subItem} className="rounded-[16px] border border-black/10 bg-white px-4 py-3 text-[14px] font-light text-black/65">
                        {subItem}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 rounded-[24px] border border-black/10 bg-[#f8faff] p-6 md:grid-cols-4">
            {["Monitoring", "Logging", "Alerts", "Performance Tracking"].map((item) => (
              <div key={item} className="flex items-center justify-center gap-3 text-[15px] font-light text-black/65">
                <CheckCircle2 size={20} className="text-[#3C5B9B]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Web App Use Cases
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Web applications for practical business operations.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              From SaaS platforms to internal tools, we create web applications
              that simplify processes, connect teams and support digital growth.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="group rounded-[26px] border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#3C5B9B]/30 hover:shadow-[0_22px_65px_rgba(60,91,155,0.1)]">
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-full bg-[#3C5B9B]/10 transition group-hover:bg-[#3C5B9B]">
                    <Icon size={24} className="text-[#3C5B9B] transition group-hover:text-white" />
                  </div>

                  <h3 className="text-[20px] font-light tracking-[-0.3px]">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="lazy-section bg-white px-5 py-20 text-[#161616] md:px-8 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#3c5b9b]">
              Tech Stack
            </p>

            <h2 className="mx-auto max-w-210 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Technologies powering modern web app development
            </h2>

            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              We use the right frontend, backend, database and cloud
              technologies to build secure, scalable and high-performing web
              applications.
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
                      : "text-[#8d8d8d] hover:text-[#3c5b9b]"
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

      <IndustriesSection />

      {/* WHY CHOOSE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Why Choose BrainADZ Live
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              We build web apps around users, performance and business growth.
            </h2>

            <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
              Our approach keeps your web application practical, scalable,
              secure and easy to use across business operations.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {whyChoose.map((item, index) => (
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

      {/* CASE STUDIES */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Case Studies
              </p>

              <h2 className="max-w-195 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Practical web applications built for real businesses.
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
                    <h3 className="text-[24px] font-light tracking-[-0.5px]">
                      {item.title}
                    </h3>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3C5B9B]/10">
                      <ArrowRight size={18} className="text-[#3C5B9B]" />
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
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Support & Optimization
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Web app support that continues after launch.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              We keep your web application stable, secure and continuously
              improving with monitoring, updates, optimization and new feature
              development.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {supportItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="grid grid-cols-[68px_1fr] gap-5 border-t border-black/10 pt-7">
                  <div className="flex h-17 w-17 items-center justify-center rounded-[20px] bg-[#3C5B9B]/10">
                    <Icon size={28} className="text-[#3C5B9B]" />
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
              Common questions about web app development.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div key={faq.q} className={`group overflow-hidden rounded-[26px] border bg-white transition-all duration-300 ${openFaq === index ? "border-[#3C5B9B]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]" : "border-black/10 shadow-[0_12px_42px_rgba(0,0,0,0.035)] hover:-translate-y-1 hover:border-[#3C5B9B]/25 hover:shadow-[0_18px_56px_rgba(60,91,155,0.08)]"}`}>
                <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6">
                  <span className="flex items-center gap-4">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold transition duration-300 ${openFaq === index ? "bg-[#3C5B9B] text-white" : "bg-[#3C5B9B]/10 text-[#3C5B9B] group-hover:bg-[#3C5B9B] group-hover:text-white"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[16px] font-light leading-[1.45] text-black md:text-[17px]">
                      {faq.q}
                    </span>
                  </span>

                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition duration-300 ${openFaq === index ? "bg-[#3C5B9B] text-white" : "bg-[#f6f8fc] text-[#3C5B9B] group-hover:bg-[#3C5B9B]/10"}`}>
                    {openFaq === index ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="mx-5 border-t border-[#3C5B9B]/15 px-15 pb-6 pt-4 md:mx-6">
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
          <div className="flex min-h-65 overflow-hidden rounded-none bg-[#3C5B9B] md:min-h-75" data-aos="zoom-in">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img src="/about.avif" alt="BrainADZ Live Web App Development" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Ready to build your next web application?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Let BrainADZ Live create a secure, scalable and high-performing
                  web application for your business.
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