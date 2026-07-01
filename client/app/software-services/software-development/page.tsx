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
    title: "Discovery Phase",
    text: "We analyze goals and challenges to craft tailored, business-aligned software solutions.",
    icon: Search,
  },
  {
    title: "Architecture Planning",
    text: "We design scalable, secure, and efficient blueprints for long-term adaptability.",
    icon: Box,
  },
  {
    title: "Agile Development",
    text: "We develop in sprints, ensuring rapid delivery and continuous client collaboration.",
    icon: Code2,
  },
  {
    title: "Design Prototyping",
    text: "We create intuitive prototypes to visualize seamless user experiences early.",
    icon: Star,
  },
  {
    title: "Testing & Deployment",
    text: "We ensure flawless performance through testing and secure deployment.",
    icon: ShieldCheck,
  },
  {
    title: "Performance Scaling",
    text: "We optimize speed, security, and scalability for growing business needs.",
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
  "CRM Solutions",
  "ERP Systems",
  "Admin Panels",
  "Inventory Systems",
  "Booking Systems",
  "Billing Software",
  "Internal Portals",
  "Reporting Dashboards",
];

const caseStudies = [
  {
    title: "Retail CRM Platform",
    text: "A centralized CRM system for lead management, follow-ups, sales tracking and customer communication.",
    image: "/services/hero/Retail-CRM-and-Campaign-Management-System.png",
  },
  {
    title: "Manufacturing ERP System",
    text: "A custom ERP solution for inventory, production workflow, team activity and operational visibility.",
    image: "/services/hero/download.jpeg",
  },
  {
    title: "Service Admin Dashboard",
    text: "A role-based dashboard to manage users, reports, tasks, approvals and real-time business activity.",
    image: "/services/hero/serviceadmin.jpeg",
  },
  {
    title: "Hospitality Booking System",
    text: "A booking platform for reservations, payments, customer data and staff coordination.",
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
    title: "Business-First Development",
    text: "We create software around real business operations instead of forcing ready-made templates.",
  },
  {
    title: "Scalable Architecture",
    text: "Your software is planned for future users, data growth, new features and integrations.",
  },
  {
    title: "Clean User Experience",
    text: "Every dashboard, form and screen is designed to be simple, fast and easy for teams.",
  },
  {
    title: "Secure Delivery Process",
    text: "We follow secure coding, testing, deployment and access-control practices.",
  },
];

const supportItems = [
  {
    title: "Performance Monitoring",
    text: "We monitor uptime, loading speed, server health and critical software performance.",
    icon: Gauge,
  },
  {
    title: "Bug Fixing",
    text: "We identify issues, fix bugs and keep your software stable after launch.",
    icon: Bug,
  },
  {
    title: "Feature Improvements",
    text: "We improve your software with new features, modules and business process upgrades.",
    icon: RefreshCcw,
  },
  {
    title: "Ongoing Support",
    text: "We provide technical support for updates, changes, improvements and maintenance.",
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
    q: "What type of software development services do you provide?",
    a: "We build custom business software, CRM systems, ERP platforms, admin panels, dashboards, booking systems, billing software and internal portals.",
  },
  {
    q: "Can BrainADZ Live build software from scratch?",
    a: "Yes. We handle the complete process including discovery, planning, UI/UX design, development, testing, deployment and support.",
  },
  {
    q: "Can you modernize our existing software?",
    a: "Yes. We can improve UI, add features, optimize performance, fix bugs, upgrade technology and improve the system architecture.",
  },
  {
    q: "Do you build custom dashboards?",
    a: "Yes. We build dashboards for operations, sales, users, reports, inventory, finance, analytics and team management.",
  },
  {
    q: "Can you integrate third-party APIs?",
    a: "Yes. We integrate payment gateways, CRM tools, ERP systems, WhatsApp, SMS, email, analytics, maps and other APIs.",
  },
  {
    q: "Will the software be mobile responsive?",
    a: "Yes. We design responsive interfaces that work smoothly on desktop, tablet and mobile screens.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. We provide support, maintenance, bug fixing, monitoring, updates and feature improvements after launch.",
  },
  {
    q: "How do you manage software security?",
    a: "We use role-based access, secure authentication, protected APIs, data validation and secure deployment practices.",
  },
  {
    q: "How long does custom software development take?",
    a: "The timeline depends on the project scope. Small systems may take a few weeks, while larger enterprise systems need a longer planned timeline.",
  },
  {
    q: "Can the software scale as our business grows?",
    a: "Yes. We plan scalable architecture so your software can handle more users, more data, new modules and future integrations.",
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
          src="/services/hero/how-to-be-a-software-developer.jpg"
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
              Custom software, enterprise applications, automation dashboards
              and scalable digital systems built around your business workflow.
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

      {/* OVERVIEW SECTION */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Overview
            </p>

            <h2 className="max-w-170 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Software built for real business operations, not just screens.
            </h2>

            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ Live designs and develops custom software for business
              operations, automation, internal teams and customer platforms. We
              focus on practical workflows, clean dashboards, secure systems and
              scalable architecture.
            </p>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              <div className="border-l-2 border-[#3C5B9B] pl-5">
                <h3 className="text-[20px] font-light">Business Automation</h3>
                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Reduce manual work with connected software workflows.
                </p>
              </div>

              <div className="border-l-2 border-[#3C5B9B] pl-5">
                <h3 className="text-[20px] font-light">Enterprise Systems</h3>
                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Build reliable systems for teams, data and daily operations.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#3C5B9B]/10 blur-3xl" />
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
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Work Flow
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              Our Proven Software Development Process Roadmap
            </h2>
            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              We ensure every solution combines innovation, reliability, and
              scalability for sustainable growth.
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
                  id="workflow-arrowhead"
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
                markerEnd="url(#workflow-arrowhead)"
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
                markerEnd="url(#workflow-arrowhead)"
              />
              <path
                d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613"
                stroke="#3C5B9B"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#workflow-arrowhead)"
              />
              <path
                d="M 392 613 L 1208 613"
                stroke="#3C5B9B"
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
                  <div className="mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-full border-2 border-[#3C5B9B] bg-[#edf3ff] shadow-[0_16px_42px_rgba(60,91,155,0.16)] transition duration-300 ease-out hover:-translate-y-2 hover:bg-white hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)] group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)]">
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

      {/* BUSINESS USE CASES */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Business Use Cases
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Software systems for daily business needs.
              </h2>

              <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
                From internal operations to customer-facing platforms, we build
                software that keeps teams, data and workflows connected.
              </p>
            </div>

            <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
              {useCases.map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center gap-5 border-b border-black/10 pb-6"
                >
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#3C5B9B]/10 text-[13px] font-semibold text-[#3C5B9B] transition group-hover:bg-[#3C5B9B] group-hover:text-white">
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="text-[20px] font-light tracking-[-0.3px]">
                      {item}
                    </h3>
                    <p className="mt-1 text-[14px] font-light leading-[1.55] text-black/55">
                      Custom modules designed around your business process.
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
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Case Studies
              </p>

              <h2 className="max-w-195 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Practical software solutions built for real operations.
              </h2>
            </div>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-3 text-[14px] font-semibold text-[#3C5B9B]"
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

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3C5B9B]/10">
                      <ArrowRight size={18} className="text-[#3C5B9B]" />
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
            className="flex min-h-65 overflow-hidden rounded-none bg-[#3C5B9B] md:min-h-75"
            data-aos="zoom-in"
          >
            {/* LEFT IMAGE */}
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/about.avif"
                alt="BrainADZ Live AI Technology"
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
                  Build smarter digital systems with BrainADZ Live
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Discover how our team can help you transform hardware,
                  software, automation, and AI into reliable business solutions.
                </p>
              </div>

              {/* BUTTON */}
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#3C5B9B] md:min-w-57.5"
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
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#3c5b9b]">
              Tech Stack
            </p>

            <h2 className="mx-auto max-w-210 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Modern technologies powering custom software development
            </h2>

            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              We use the right programming languages, databases and frameworks
              to build scalable business applications, dashboards, enterprise
              platforms and custom software solutions.
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
              We design software around your workflow, users and growth.
            </h2>

            <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
              Our focus is simple: create software that is useful, scalable,
              secure and easy for your team to use every day.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {whyChoose.map((item, index) => (
              <div
                key={item.title}
                className="border-t border-black/10 pt-7"
              >
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

      {/* SUPPORT & MAINTENANCE */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Support & Maintenance
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Software support that continues after launch.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              We do not stop at deployment. BrainADZ Live supports your software
              with monitoring, improvements, bug fixing, updates and technical
              guidance.
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

          <div className="mt-14 overflow-hidden rounded-[30px] border border-black/10 bg-[#f6f8fc] p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <h3 className="text-[28px] font-light tracking-[-0.6px] md:text-[34px]">
                  Maintenance includes performance, security and feature
                  improvements.
                </h3>

                <p className="mt-4 text-[15px] font-light leading-[1.7] text-black/65">
                  Your software keeps improving with changing business needs,
                  user feedback and new operational requirements.
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
                      className="mx-auto mb-3 text-[#3C5B9B]"
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
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              FAQ
            </p>

            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about software development.
            </h2>

            <p className="mx-auto mt-5 max-w-210 text-[16px] font-light leading-[1.7] text-black/65 md:text-[18px]">
              Clear answers about our process, custom software capabilities,
              integrations, security, scalability and post-launch support.
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
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold transition duration-300 ${
                        openFaq === index
                          ? "bg-[#3C5B9B] text-white"
                          : "bg-[#3C5B9B]/10 text-[#3C5B9B] group-hover:bg-[#3C5B9B] group-hover:text-white"
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
                        ? "bg-[#3C5B9B] text-white"
                        : "bg-[#f6f8fc] text-[#3C5B9B] group-hover:bg-[#3C5B9B]/10"
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
          <div
            className="flex min-h-65 overflow-hidden rounded-none bg-[#3C5B9B] md:min-h-75"
            data-aos="zoom-in"
          >
            {/* LEFT IMAGE */}
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/about.avif"
                alt="BrainADZ Live AI Technology"
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
                  Build smarter digital systems with BrainADZ Live
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Discover how our team can help you transform hardware,
                  software, automation, and AI into reliable business solutions.
                </p>
              </div>

              {/* BUTTON */}
<button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#3C5B9B] md:min-w-57.5"
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