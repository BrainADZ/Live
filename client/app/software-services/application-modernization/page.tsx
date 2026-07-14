/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Bug,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Gauge,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  Layers3,
  LifeBuoy,
  LockKeyhole,
  Minus,
  MonitorCog,
  Network,
  PackageCheck,
  Plus,
  RefreshCcw,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  SplitSquareVertical,
  Stethoscope,
  Store,
  Truck,
  Workflow,
  Factory,
} from "lucide-react";
import IndustriesSection from "@/components/home/Industries"
import PopupForm from "@/components/PopupForm";

type TabType = "cloud" | "devops" | "databases" | "frameworks";

type StackItem = {
  name: string;
  icon: string;
};

const challenges = [
  {
    title: "Slow Performance",
    text: "Older applications can become slower over time as usage, data and business requirements grow.",
    icon: Gauge,
  },
  {
    title: "High Maintenance Cost",
    text: "Outdated code, dependencies and infrastructure can make routine fixes and updates harder to manage.",
    icon: Settings2,
  },
  {
    title: "Security Risks",
    text: "Unsupported technologies, outdated dependencies and weak access controls can increase security exposure.",
    icon: LockKeyhole,
  },
  {
    title: "Integration Issues",
    text: "Older applications may not connect cleanly with modern APIs, cloud services and the tools your teams now use.",
    icon: Network,
  },
  {
    title: "Poor User Experience",
    text: "Outdated interfaces and complicated user flows make everyday tasks slower for employees and customers.",
    icon: MonitorCog,
  },
  {
    title: "Limited Scalability",
    text: "Legacy architecture can make it difficult to support more users, larger workloads and new capabilities.",
    icon: SplitSquareVertical,
  },
];

const modernizationServices = [
  {
    title: "Replatforming",
    text: "Move the application to a more suitable platform or managed environment while keeping most of its core functionality intact.",
    icon: Cloud,
  },
  {
    title: "Refactoring",
    text: "Restructure and improve existing code to make the application easier to maintain, optimize and extend.",
    icon: Code2,
  },
  {
    title: "Rehosting",
    text: "Move an existing application to modern cloud infrastructure with minimal changes to the application itself.",
    icon: Rocket,
  },
  {
    title: "Rebuilding",
    text: "Rebuild applications or critical modules when the existing technology can no longer support business needs effectively.",
    icon: Layers3,
  },
  {
    title: "API Modernization",
    text: "Replace rigid connections with secure APIs that help applications, databases and third-party services work together.",
    icon: Network,
  },
  {
    title: "UI/UX Modernization",
    text: "Improve outdated interfaces and user flows so employees and customers can complete tasks more easily.",
    icon: MonitorCog,
  },
];

const modernizationProcess = [
  {
    title: "Assess & Analyze",
    text: "We review your current application, codebase, integrations, infrastructure, dependencies and business-critical workflows.",
    icon: Search,
  },
  {
    title: "Modernization Strategy",
    text: "We decide what should be retained, refactored, replatformed, migrated or rebuilt and define a practical delivery roadmap.",
    icon: Workflow,
  },
  {
    title: "Architecture Upgrade",
    text: "We improve the application architecture, data flow and integration model where the existing structure limits future changes.",
    icon: Layers3,
  },
  {
    title: "Migration & Refactoring",
    text: "We modernize code and modules, move data where required and use phased changes to reduce disruption to live operations.",
    icon: Code2,
  },
  {
    title: "Testing & Optimization",
    text: "We validate business workflows, data accuracy, integrations, performance, security and compatibility before release.",
    icon: ShieldCheck,
  },
  {
    title: "Deploy & Evolve",
    text: "We release the modernized application with monitoring, documentation and ongoing support for future improvements.",
    icon: Rocket,
  },
];

const modernizationLayout = [
  { ...modernizationProcess[0], left: "21.75%", top: "0px" },
  { ...modernizationProcess[1], left: "78.25%", top: "0px" },
  { ...modernizationProcess[2], left: "21.75%", top: "300px" },
  { ...modernizationProcess[3], left: "78.25%", top: "300px" },
  { ...modernizationProcess[4], left: "21.75%", top: "570px" },
  { ...modernizationProcess[5], left: "78.25%", top: "570px" },
];

const useCases = [
  "ERP Modernization",
  "CRM Upgrade",
  "E-commerce Platforms",
  "Enterprise Portals",
  "Internal Tools",
  "Customer Applications",
];

const caseStudies = [
  {
    title: "Banking Platform Upgrade",
    text: "Modernized a secure financial platform for faster performance, improved security and better reliability.",
    image: "/services/hero/banking-modernization.jpg",
  },
  {
    title: "ERP Transformation",
    text: "Upgraded a legacy ERP into a scalable, cloud-ready system with improved workflows and reporting.",
    image: "/services/hero/erp-modernization.jpg",
  },
  {
    title: "Healthcare System Migration",
    text: "Migrated healthcare workflows to a modern application with secure data handling and smoother access.",
    image: "/services/hero/healthcare-modernization.jpg",
  },
  {
    title: "Retail Platform Modernization",
    text: "Re-architected an ecommerce platform for faster checkout, improved integrations and better scalability.",
    image: "/services/hero/retail-modernization.jpg",
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
    title: "Business Continuity Planning",
    text: "We plan phased migrations, release steps and fallback options to reduce disruption to ongoing business operations.",
  },
  {
    title: "Modernization Around Real Needs",
    text: "We modernize the parts that genuinely need change instead of forcing a complete rebuild when it is not required.",
  },
  {
    title: "Scalable Architecture",
    text: "We improve architecture and deployment so the application can support future users, integrations and business growth.",
  },
  {
    title: "Security Built Into Modernization",
    text: "We review authentication, permissions, APIs, dependencies and deployment practices as part of the modernization work.",
  },
];

const supportItems = [
  {
    title: "Monitoring",
    text: "Track uptime, errors, performance and application health so issues can be identified early.",
    icon: Gauge,
  },
  {
    title: "Security Updates",
    text: "Keep dependencies, access controls and application components updated as technologies and risks change.",
    icon: ShieldCheck,
  },
  {
    title: "Performance Tuning",
    text: "Review slow workflows, database queries, APIs and application performance as usage grows.",
    icon: Settings2,
  },
  {
    title: "Feature Enhancements",
    text: "Extend the modernized application with new features, integrations and workflow improvements over time.",
    icon: PackageCheck,
  },
  {
    title: "Infrastructure Scaling",
    text: "Adjust infrastructure, deployment and application capacity as users, data and workloads increase.",
    icon: RefreshCcw,
  },
  {
    title: "Ongoing Support",
    text: "Get ongoing technical support for fixes, releases, compatibility changes and future improvements.",
    icon: LifeBuoy,
  },
];

const tabs: { label: string; value: TabType }[] = [
  { label: "Cloud Platforms", value: "cloud" },
  { label: "DevOps & Tools", value: "devops" },
  { label: "Databases", value: "databases" },
  { label: "Frameworks", value: "frameworks" },
];

const techStack: Record<TabType, StackItem[]> = {
  cloud: [
    { name: "AWS", icon: "/icons/AWS.svg" },
    { name: "Microsoft Azure", icon: "/icons/Azure.svg" },
    { name: "Google Cloud", icon: "/icons/GoogleCloud.svg" },
    { name: "Oracle Cloud", icon: "/icons/Oracle.svg" },
    { name: "IBM Cloud", icon: "/icons/IBM.svg" },
    { name: "Alibaba Cloud", icon: "/icons/AlibabaCloud.svg" },
  ],
  devops: [
    { name: "Docker", icon: "/icons/Docker.svg" },
    { name: "Kubernetes", icon: "/icons/Kubernetes.svg" },
    { name: "Jenkins", icon: "/icons/Jenkins.svg" },
    { name: "Terraform", icon: "/icons/Terraform.svg" },
    { name: "Ansible", icon: "/icons/Ansible.svg" },
    { name: "GitLab", icon: "/icons/GitLab.svg" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg" },
    { name: "MongoDB", icon: "/icons/MongoDB.svg" },
    { name: "Redis", icon: "/icons/Redis.svg" },
    { name: "MySQL", icon: "/icons/MySQL.svg" },
    { name: "Cassandra", icon: "/icons/Cassandra.svg" },
    { name: "SQL Server", icon: "/icons/SQLServer.svg" },
  ],
  frameworks: [
    { name: "Spring Boot", icon: "/icons/Spring.svg" },
    { name: ".NET", icon: "/icons/NET.svg" },
    { name: "Node.js", icon: "/icons/Node.js.svg" },
    { name: "React", icon: "/icons/React.svg" },
    { name: "Angular", icon: "/icons/Angular.svg" },
    { name: "Next.js", icon: "/icons/Next.js.svg" },
  ],
};

const faqs = [
  {
    q: "What is application modernization?",
    a: "Application modernization is the process of improving an existing application so it is easier to maintain, integrate, secure, scale and use. Depending on the system, this may involve refactoring, replatforming, cloud migration, API work, UI improvements or rebuilding selected modules.",
  },
  {
    q: "Do you rebuild the whole application or improve the existing one?",
    a: "It depends on the current application and the problems you need to solve. We may refactor existing code, move the application to a better platform, modernize selected modules or rebuild only the parts that no longer make sense to retain.",
  },
  {
    q: "Will there be downtime during migration?",
    a: "We plan releases and migrations to reduce disruption. Where the system allows it, phased migration, parallel environments and controlled deployment can help keep critical workflows available during the transition.",
  },
  {
    q: "Can you modernize old ERP or CRM systems?",
    a: "Yes. We can modernize existing ERP and CRM platforms, internal tools, business portals, dashboards and connected applications when the current system needs better performance, usability, integration or maintainability.",
  },
  {
    q: "Can you move our application to cloud?",
    a: "Yes. We can assess whether rehosting, replatforming or a deeper architecture change is the right approach before moving the application to a cloud environment.",
  },
  {
    q: "Do you provide support after modernization?",
    a: "Yes. We provide ongoing technical support, monitoring, compatibility updates, performance improvements, fixes and future enhancements after the modernized application goes live.",
  },
];

export default function AppModernizationPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>("cloud");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/app-modernization.jpg"
          alt="App Modernization Services"
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
            <span className="text-white/90">App Modernization</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Modernize Legacy Applications Without Starting From Scratch
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              We upgrade existing applications, architecture, integrations and
              user experience so your systems become easier to maintain, secure,
              scale and extend as your business evolves.
            </p>

            <div className="mt-8">
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-4 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
>
  Enquire Now
  <span className="text-[20px] leading-none">↗</span>
</button>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Overview
            </p>

            <h2 className="max-w-170 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Keep what works. Modernize what holds you back.
            </h2>

            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              Application modernization helps you improve existing software
              without replacing everything unnecessarily. We assess what should
              stay, what needs to change and which modernization approach will
              improve maintainability, performance, integration, security and
              user experience.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Improve Maintainability",
                text: "Make the application easier to update, support and extend as requirements change.",
                icon: Gauge,
              },
              {
                title: "Strengthen Security",
                text: "Address outdated dependencies, access controls and other risks in the existing application.",
                icon: ShieldCheck,
              },
              {
                title: "Improve Performance & Scale",
                text: "Optimize architecture, data flow and infrastructure for growing users and workloads.",
                icon: Cloud,
              },
              {
                title: "Support Future Change",
                text: "Make new features, integrations and business workflow changes easier to introduce.",
                icon: Rocket,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-black/10 bg-[#f8faff] p-7 transition hover:-translate-y-1 hover:border-[#193175]/30 hover:bg-white hover:shadow-[0_24px_70px_rgba(60,91,155,0.1)]"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#193175]/10 transition group-hover:bg-[#193175]">
                    <Icon
                      size={26}
                      className="text-[#193175] transition group-hover:text-white"
                    />
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
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Challenges With Legacy Systems
              </p>
              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Legacy applications become harder to change as business needs grow.
              </h2>
            </div>
            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              The longer an outdated system stays unchanged, the harder it can
              become to maintain, secure and connect with newer tools. Modernization
              helps reduce these limitations while protecting important workflows
              and existing business logic.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[26px] border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#193175]/30 hover:shadow-[0_24px_70px_rgba(60,91,155,0.1)]"
                >
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-full bg-[#193175]/10 transition group-hover:bg-[#193175]">
                    <Icon
                      size={24}
                      className="text-[#193175] transition group-hover:text-white"
                    />
                  </div>
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

      {/* MODERNIZATION SERVICES */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Modernization Services
            </p>
            <h2 className="mx-auto max-w-220 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Choose the right modernization path for your existing application.
            </h2>
            <p className="mx-auto mt-5 max-w-210 text-[16px] font-light leading-[1.7] text-black/65 md:text-[18px]">
              Not every application needs a full rebuild. We assess the current
              system and choose a practical approach based on technical condition,
              business priorities, integration needs and future plans.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modernizationServices.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-black/10 bg-[#f8faff] p-7 transition hover:-translate-y-1 hover:border-[#193175]/30 hover:bg-white hover:shadow-[0_24px_70px_rgba(60,91,155,0.1)]"
                >
                  <div className="mb-6 flex h-15 w-15 items-center justify-center rounded-2xl bg-[#193175]/10">
                    <Icon size={27} className="text-[#193175]" />
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

      {/* APP MODERNIZATION PROCESS */}
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
              Modernization Roadmap
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              Our Application Modernization Roadmap
            </h2>
            <p className="mx-auto mt-5 max-w-245 text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              A structured process to understand the current system, choose the
              right modernization approach and improve it without unnecessary
              disruption.
            </p>
          </div>

          <div className="lg:hidden">
            <div className="space-y-5">
              {modernizationProcess.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative rounded-[26px] border border-black/10 bg-white p-6"
                  >
                    {index !== modernizationProcess.length - 1 && (
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
                  id="modernization-arrowhead"
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
                markerEnd="url(#modernization-arrowhead)"
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
                markerEnd="url(#modernization-arrowhead)"
              />
              <path
                d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#modernization-arrowhead)"
              />
              <path
                d="M 392 613 L 1208 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#modernization-arrowhead)"
              />
            </svg>

            {modernizationLayout.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group absolute z-10 w-97.5 -translate-x-1/2 text-center"
                  style={{ left: item.left, top: item.top }}
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

      {/* BEFORE AFTER */}
      {/* <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Before vs After Modernization
            </p>
            <h2 className="mx-auto max-w-220 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Move from legacy limitations to modern capability.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div className="rounded-[30px] border border-red-200 bg-red-50/70 p-7 md:p-9">
              <h3 className="text-[26px] font-light tracking-[-0.5px] text-red-700">
                Legacy Applications
              </h3>
              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {[
                  "Monolithic Architecture",
                  "Slow Performance",
                  "Difficult to Maintain",
                  "High Infrastructure Cost",
                  "Security Vulnerabilities",
                  "Limited Scalability",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[15px] font-light text-black/70">
                    <Bug size={18} className="text-red-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#193175] text-[16px] font-semibold text-white shadow-[0_16px_42px_rgba(60,91,155,0.3)]">
              VS
            </div>

            <div className="rounded-[30px] border border-emerald-200 bg-emerald-50/70 p-7 md:p-9">
              <h3 className="text-[26px] font-light tracking-[-0.5px] text-emerald-700">
                Modern Applications
              </h3>
              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {[
                  "Microservices Architecture",
                  "High Performance",
                  "Easy to Maintain",
                  "Optimized Cost",
                  "Enhanced Security",
                  "API-Driven Integration",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[15px] font-light text-black/70">
                    <CheckCircle2 size={18} className="text-emerald-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* USE CASES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Modernization Use Cases
              </p>
              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Modernize the applications your business already depends on.
              </h2>
              <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
                From ERP and CRM platforms to internal tools and customer-facing
                applications, we improve the systems that support everyday work and
                long-term growth.
              </p>
            </div>

            <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
              {useCases.map((item, index) => (
                <div key={item} className="group flex items-center gap-5 border-b border-black/10 pb-6">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#193175]/10 text-[13px] font-semibold text-[#193175] transition group-hover:bg-[#193175] group-hover:text-white">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-[20px] font-light tracking-[-0.3px]">
                      {item}
                    </h3>
                    <p className="mt-1 text-[14px] font-light leading-[1.55] text-black/55">
                      Improve performance, usability, integration and maintainability
                      without replacing useful business logic unnecessarily.
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
              <h2 className="max-w-195 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Modernization projects built around existing business systems.
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
                    <h3 className="text-[23px] font-light tracking-[-0.5px]">
                      {item.title}
                    </h3>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#193175]/10">
                      <ArrowRight size={18} className="text-[#193175]" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <IndustriesSection />

      {/* CTA */}
                  <section className="lazy-section bg-white py-8">
                                <div className="mx-auto max-w-450 px-4 lg:px-10">
                                  <div className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75">
                                    <div className="hidden w-[32%] shrink-0 md:block">
                                      <img
                                        src="/CTA/AppModernization-CTA.jpg"
                                        alt="BrainADZ Live Application Modernization Services"
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover"
                                      />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
                                      <div className="max-w-145">
                                        <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                                          Is your existing application becoming difficult to maintain or scale?
                                        </h3>
                                        <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                                          We can assess your current system and define the right path to refactor, replatform, migrate or rebuild only what is necessary.
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

      {/* TECH STACK */}
      <section className="lazy-section bg-white px-5 py-20 text-[#161616] md:px-4 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#193175]">
              Tech Stack
            </p>
            <h2 className="mx-auto max-w-210 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Technologies used to modernize existing applications
            </h2>
            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              We use modern cloud platforms, deployment tools, databases and
              frameworks according to the current application and the modernization
              approach it requires.
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
                    isActive ? "text-[#161616]" : "text-[#8d8d8d] hover:text-[#193175]"
                  }`}
                >
                  {tab.label}
                  <span className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#193175] transition-all duration-300 ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}`} />
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
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why Choose BrainADZ Live
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Modernization decisions based on your current system—not a one-size-fits-all approach.
            </h2>
            <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
              We assess the application first, protect important business workflows
              and modernize the areas that create the most technical or operational
              limitations.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {whyChoose.map((item, index) => (
              <div key={item.title} className="border-t border-black/10 pt-7">
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
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Support & Continuous Optimization
              </p>
              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Keep the modernized application reliable after launch.
              </h2>
            </div>
            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              After release, we help maintain application stability, resolve
              compatibility issues and support performance, security and future
              improvements as your system continues to evolve.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {supportItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="grid grid-cols-[68px_1fr] gap-5 border-t border-black/10 pt-7">
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
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              FAQ
            </p>
            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about application modernization.
            </h2>
            <p className="mx-auto mt-5 max-w-210 text-[16px] font-light leading-[1.7] text-black/65 md:text-[18px]">
              Understand how we assess existing systems, choose a modernization
              approach, manage migration and support the application after release.
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
                                        src="/CTA/AppModernization-CTA.jpg"
                                        alt="BrainADZ Live Application Modernization Services"
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover"
                                      />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
                                      <div className="max-w-145">
                                        <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                                          Ready to modernize the application your business already relies on?
                                        </h3>
                                        <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                                          Let BrainADZ Live help you improve your existing application with the right mix of refactoring, migration, integration and rebuilding.
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