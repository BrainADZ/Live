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
    text: "Legacy applications often load slowly, respond late and affect user experience.",
    icon: Gauge,
  },
  {
    title: "High Maintenance Cost",
    text: "Old systems usually need more time, effort and specialized support to maintain.",
    icon: Settings2,
  },
  {
    title: "Security Risks",
    text: "Outdated systems can expose business data because of old dependencies and weak controls.",
    icon: LockKeyhole,
  },
  {
    title: "Integration Issues",
    text: "Legacy apps often struggle to connect with modern APIs, cloud tools and third-party systems.",
    icon: Network,
  },
  {
    title: "Poor User Experience",
    text: "Old interfaces slow down teams and make daily workflows harder than they should be.",
    icon: MonitorCog,
  },
  {
    title: "Limited Scalability",
    text: "Traditional systems are difficult to scale when users, data and business needs grow.",
    icon: SplitSquareVertical,
  },
];

const modernizationServices = [
  {
    title: "Replatforming",
    text: "Move applications to a better platform or cloud environment without changing the full core logic.",
    icon: Cloud,
  },
  {
    title: "Refactoring",
    text: "Improve existing code structure, performance and maintainability without changing business behavior.",
    icon: Code2,
  },
  {
    title: "Rehosting",
    text: "Shift existing applications to cloud infrastructure for better flexibility and easier management.",
    icon: Rocket,
  },
  {
    title: "Rebuilding",
    text: "Rebuild outdated applications using modern architecture, UI and technology stack.",
    icon: Layers3,
  },
  {
    title: "API Modernization",
    text: "Create secure and scalable APIs to connect systems, services, dashboards and third-party tools.",
    icon: Network,
  },
  {
    title: "UI/UX Modernization",
    text: "Redesign old interfaces into cleaner, faster and more user-friendly digital experiences.",
    icon: MonitorCog,
  },
];

const modernizationProcess = [
  {
    title: "Assess & Analyze",
    text: "We evaluate your existing app, codebase, infrastructure, risks and modernization opportunities.",
    icon: Search,
  },
  {
    title: "Modernization Strategy",
    text: "We define the right approach, migration path, technology stack and delivery roadmap.",
    icon: Workflow,
  },
  {
    title: "Architecture Upgrade",
    text: "We redesign the system architecture for better scalability, security and long-term flexibility.",
    icon: Layers3,
  },
  {
    title: "Migration & Refactoring",
    text: "We migrate data, improve code, modernize modules and reduce disruption during transformation.",
    icon: Code2,
  },
  {
    title: "Testing & Optimization",
    text: "We test performance, security, integrations, user flows and system reliability before release.",
    icon: ShieldCheck,
  },
  {
    title: "Deploy & Evolve",
    text: "We deploy the modernized app and continuously improve it with monitoring, updates and support.",
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
    title: "Zero Downtime Planning",
    text: "We plan modernization carefully so business operations continue with minimum disruption.",
  },
  {
    title: "Future-Ready Architecture",
    text: "Your application is redesigned to support future users, features, integrations and scaling needs.",
  },
  {
    title: "Cloud-Native Approach",
    text: "We modernize systems with cloud-ready patterns, automation, monitoring and flexible deployment.",
  },
  {
    title: "Security-First Delivery",
    text: "We improve authentication, access control, API protection, data security and deployment practices.",
  },
];

const supportItems = [
  {
    title: "Monitoring",
    text: "Track uptime, performance, errors, infrastructure health and important business systems.",
    icon: Gauge,
  },
  {
    title: "Security Updates",
    text: "Keep applications protected with dependency updates, access improvements and security patches.",
    icon: ShieldCheck,
  },
  {
    title: "Performance Tuning",
    text: "Improve loading speed, database queries, APIs and overall system efficiency.",
    icon: Settings2,
  },
  {
    title: "Feature Enhancements",
    text: "Add new capabilities, improve workflows and upgrade existing modules as business needs change.",
    icon: PackageCheck,
  },
  {
    title: "Infrastructure Scaling",
    text: "Scale servers, cloud resources and deployment workflows as your users and data grow.",
    icon: RefreshCcw,
  },
  {
    title: "Ongoing Support",
    text: "Get technical support for improvements, fixes, releases and long-term product stability.",
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
    a: "Application modernization means upgrading legacy applications with better architecture, cloud infrastructure, modern UI, APIs, security and performance improvements.",
  },
  {
    q: "Do you rebuild the whole application or improve the existing one?",
    a: "It depends on the condition of your current system. We can refactor, replatform, rehost, rebuild or modernize selected modules based on business needs.",
  },
  {
    q: "Will there be downtime during migration?",
    a: "We plan migration carefully to reduce downtime as much as possible. For critical systems, we can use phased migration and controlled releases.",
  },
  {
    q: "Can you modernize old ERP or CRM systems?",
    a: "Yes. We can modernize ERP, CRM, internal portals, dashboards, ecommerce platforms, customer apps and enterprise systems.",
  },
  {
    q: "Can you move our application to cloud?",
    a: "Yes. We help move applications to cloud platforms with improved deployment, monitoring, security and scalability.",
  },
  {
    q: "Do you provide support after modernization?",
    a: "Yes. We provide ongoing monitoring, maintenance, security updates, performance tuning, feature enhancements and technical support.",
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
          src="/services/hero/app-modernization.jpg"
          alt="App Modernization Services"
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
            <span className="text-white/90">App Modernization</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              App Modernization Services
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              We modernize legacy applications with cloud, automation,
              microservices and secure architecture to improve performance,
              scalability and long-term business agility.
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
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Overview
            </p>

            <h2 className="max-w-170 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Build better. Run smarter. Scale faster.
            </h2>

            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              App modernization helps you move from outdated systems to modern,
              cloud-ready applications that improve speed, security, user
              experience and business flexibility. We help businesses upgrade
              existing applications without losing the value of what already
              works.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Improve Performance",
                text: "Faster applications, better response time and smoother user experience.",
                icon: Gauge,
              },
              {
                title: "Enhance Security",
                text: "Stronger authentication, protected APIs and improved access control.",
                icon: ShieldCheck,
              },
              {
                title: "Increase Scalability",
                text: "Cloud-ready architecture that can handle growth and larger workloads.",
                icon: Cloud,
              },
              {
                title: "Drive Business Agility",
                text: "Modern systems that adapt faster to new features, markets and integrations.",
                icon: Rocket,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-black/10 bg-[#f8faff] p-7 transition hover:-translate-y-1 hover:border-[#3C5B9B]/30 hover:bg-white hover:shadow-[0_24px_70px_rgba(60,91,155,0.1)]"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3C5B9B]/10 transition group-hover:bg-[#3C5B9B]">
                    <Icon
                      size={26}
                      className="text-[#3C5B9B] transition group-hover:text-white"
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
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Challenges With Legacy Systems
              </p>
              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Outdated applications quietly slow down growth.
              </h2>
            </div>
            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              Legacy systems often become expensive to maintain, difficult to
              integrate and risky to scale. Modernization helps you remove these
              limits without losing business continuity.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[26px] border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#3C5B9B]/30 hover:shadow-[0_24px_70px_rgba(60,91,155,0.1)]"
                >
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-full bg-[#3C5B9B]/10 transition group-hover:bg-[#3C5B9B]">
                    <Icon
                      size={24}
                      className="text-[#3C5B9B] transition group-hover:text-white"
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
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Modernization Services
            </p>
            <h2 className="mx-auto max-w-220 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Modernize your applications with the right approach.
            </h2>
            <p className="mx-auto mt-5 max-w-210 text-[16px] font-light leading-[1.7] text-black/65 md:text-[18px]">
              Every legacy system is different. We choose the modernization path
              that fits your current architecture, business priority, budget and
              long-term roadmap.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modernizationServices.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-black/10 bg-[#f8faff] p-7 transition hover:-translate-y-1 hover:border-[#3C5B9B]/30 hover:bg-white hover:shadow-[0_24px_70px_rgba(60,91,155,0.1)]"
                >
                  <div className="mb-6 flex h-15 w-15 items-center justify-center rounded-2xl bg-[#3C5B9B]/10">
                    <Icon size={27} className="text-[#3C5B9B]" />
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
              Modernization Roadmap
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              Our App Modernization Approach
            </h2>
            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              A proven step-by-step roadmap to transform legacy applications
              into secure, scalable and future-ready systems.
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
                      <div className="absolute left-11 top-18 h-[calc(100%+20px)] border-l-2 border-dashed border-[#3C5B9B]/45" />
                    )}

                    <div className="relative z-10 flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#3C5B9B] bg-[#edf3ff] transition duration-300 ease-out group-hover:-translate-y-1.5 group-hover:bg-white group-hover:shadow-[0_18px_42px_rgba(60,91,155,0.24)]">
                        <Icon
                          size={23}
                          strokeWidth={2.4}
                          className="text-[#3C5B9B]"
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
                  id="modernization-arrowhead"
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

              <path
                d="M 392 43 L 1208 43"
                stroke="#3C5B9B"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#modernization-arrowhead)"
              />
              <path
                d="M 1294 43 C 1480 43 1515 150 1515 230 C 1515 318 1440 343 1294 343"
                stroke="#3C5B9B"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
              />
              <path
                d="M 1208 343 L 392 343"
                stroke="#3C5B9B"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#modernization-arrowhead)"
              />
              <path
                d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613"
                stroke="#3C5B9B"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#modernization-arrowhead)"
              />
              <path
                d="M 392 613 L 1208 613"
                stroke="#3C5B9B"
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
                  className="group absolute z-10 w-[390px] -translate-x-1/2 text-center"
                  style={{ left: item.left, top: item.top }}
                >
                  <div className="mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-full border-2 border-[#3C5B9B] bg-[#edf3ff] shadow-[0_16px_42px_rgba(60,91,155,0.16)] transition duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)]">
                    <Icon
                      size={36}
                      strokeWidth={2.25}
                      className="text-[#3C5B9B]"
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

      {/* BEFORE AFTER */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
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

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#3C5B9B] text-[16px] font-semibold text-white shadow-[0_16px_42px_rgba(60,91,155,0.3)]">
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
      </section>

      {/* USE CASES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Modernization Use Cases
              </p>
              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                We modernize systems that run daily operations.
              </h2>
              <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
                From internal platforms to customer-facing applications, we
                modernize systems to improve speed, usability, integration and
                scalability.
              </p>
            </div>

            <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
              {useCases.map((item, index) => (
                <div key={item} className="group flex items-center gap-5 border-b border-black/10 pb-6">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#3C5B9B]/10 text-[13px] font-semibold text-[#3C5B9B] transition group-hover:bg-[#3C5B9B] group-hover:text-white">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-[20px] font-light tracking-[-0.3px]">
                      {item}
                    </h3>
                    <p className="mt-1 text-[14px] font-light leading-[1.55] text-black/55">
                      Upgrade existing systems into faster and more scalable
                      digital platforms.
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
                Practical modernization outcomes for real business systems.
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
                    <h3 className="text-[23px] font-light tracking-[-0.5px]">
                      {item.title}
                    </h3>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3C5B9B]/10">
                      <ArrowRight size={18} className="text-[#3C5B9B]" />
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
      <section className="lazy-section bg-white py-12">
        <div className="mx-auto max-w-450 px-8 lg:px-10">
          <div className="flex min-h-65 overflow-hidden rounded-none bg-[#3C5B9B] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img src="/about.avif" alt="BrainADZ Live App Modernization" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Ready to modernize your legacy application?
                </h3>
                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Let BrainADZ Live help you upgrade old systems into secure,
                  scalable and future-ready digital platforms.
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

      {/* TECH STACK */}
      <section className="lazy-section bg-white px-5 py-20 text-[#161616] md:px-8 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#3c5b9b]">
              Tech Stack
            </p>
            <h2 className="mx-auto max-w-210 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Technologies powering application modernization
            </h2>
            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              We use cloud platforms, DevOps tools, databases and modern
              frameworks to re-architect, migrate and optimize legacy systems.
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
                  <span className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#3c5b9b] transition-all duration-300 ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}`} />
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
              We modernize applications with business continuity in mind.
            </h2>
            <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
              Our modernization approach focuses on stable migration, better
              performance, secure architecture and future-ready digital systems.
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

      {/* SUPPORT */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Support & Continuous Optimization
              </p>
              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Modernization continues after deployment.
              </h2>
            </div>
            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              We help your modernized applications stay stable, secure and
              optimized with monitoring, upgrades, scaling and long-term
              technical support.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
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
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              FAQ
            </p>
            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about app modernization.
            </h2>
            <p className="mx-auto mt-5 max-w-210 text-[16px] font-light leading-[1.7] text-black/65 md:text-[18px]">
              Clear answers about modernization approach, migration, cloud,
              downtime, security and post-launch support.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`group overflow-hidden rounded-[26px] border bg-white transition-all duration-300 ${
                  openFaq === index
                    ? "border-[#3C5B9B]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]"
                    : "border-black/10 shadow-[0_12px_42px_rgba(0,0,0,0.035)] hover:-translate-y-1 hover:border-[#3C5B9B]/25 hover:shadow-[0_18px_56px_rgba(60,91,155,0.08)]"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                >
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
          <div className="flex min-h-65 overflow-hidden rounded-none bg-[#3C5B9B] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img src="/about.avif" alt="BrainADZ Live App Modernization" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Build future-ready applications with BrainADZ Live
                </h3>
                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Discover how our team can modernize your applications with
                  cloud, automation, secure architecture and scalable technology.
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