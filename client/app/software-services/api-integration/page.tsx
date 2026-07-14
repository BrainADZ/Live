/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Gauge,
  GraduationCap,
  HeartPulse,
  Landmark,
  LifeBuoy,
  Link2,
  LockKeyhole,
  Minus,
  Network,
  PackageCheck,
  PlugZap,
  Plus,
  RefreshCcw,
  Search,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Store,
  Truck,
  Users,
  WalletCards,
  Workflow,
} from "lucide-react";
import IndustriesSection from "@/components/home/Industries"
import PopupForm from "@/components/PopupForm";

type TabType = "languages" | "frameworks" | "databases" | "cloud";

type StackItem = {
  name: string;
  icon: string;
  text?: string;
};

const processSteps = [
  {
    title: "Discovery & System Analysis",
    text: "We review your existing applications, business workflows, data flow and integration requirements before defining the right connection approach.",
    icon: Search,
  },
  {
    title: "Integration Planning & Design",
    text: "We define endpoints, authentication, data mapping, error handling and the integration logic required between your systems.",
    icon: Workflow,
  },
  {
    title: "API Development & Integration",
    text: "We build custom APIs or connect existing ones using secure, scalable and maintainable integration patterns.",
    icon: Code2,
  },
  {
    title: "Testing & Security Validation",
    text: "We test functionality, permissions, data accuracy, response handling and failure scenarios across every connected system.",
    icon: ShieldCheck,
  },
  {
    title: "Deployment & Documentation",
    text: "We deploy the integration with access controls, environment configuration, monitoring and clear technical documentation.",
    icon: Cloud,
  },
  {
    title: "Support & Optimization",
    text: "We monitor performance, resolve integration issues and update connections as your applications, APIs and business needs change.",
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

const challenges = [
  {
    title: "Data Silos",
    text: "Disconnected systems create scattered data and poor business visibility.",
    icon: Database,
  },
  {
    title: "Repeated Manual Work",
    text: "Teams lose time entering the same information and updating multiple systems separately.",
    icon: Settings2,
  },
  {
    title: "Fragile Connections",
    text: "Unplanned point-to-point connections become difficult to maintain as more tools are added.",
    icon: Gauge,
  },
  {
    title: "Security & Access Gaps",
    text: "Poor authentication, weak permissions and unsafe data transfer can expose business-critical information.",
    icon: LockKeyhole,
  },
];

const services = [
  {
    title: "Custom API Development",
    text: "Purpose-built APIs for web apps, mobile apps, dashboards and internal business systems.",
    icon: Code2,
  },
  {
    title: "Third-Party API Integration",
    text: "Connect payment gateways, maps, WhatsApp, SMS, email, analytics and other external platforms.",
    icon: PlugZap,
  },
  {
    title: "CRM & ERP Integration",
    text: "Connect CRM, ERP, sales, inventory and other business systems so data moves between them reliably.",
    icon: Network,
  },
  {
    title: "Legacy & System Integration",
    text: "Connect existing software, databases and newer applications without rebuilding your entire technology setup.",
    icon: Settings2,
  },
];

const integrationTypes = [
  {
    title: "Web & Mobile App Integration",
    text: "Connect web applications, mobile apps, admin panels and backend systems through reliable APIs.",
    icon: Link2,
  },
  {
    title: "Data & Database Integration",
    text: "Synchronize data between databases, dashboards and business applications with accurate data mapping.",
    icon: Database,
  },
  {
    title: "Cloud & SaaS Integration",
    text: "Connect cloud services, SaaS tools and hosted platforms with your existing applications and workflows.",
    icon: Cloud,
  },
  {
    title: "Business System Integration",
    text: "Connect CRM, ERP, sales, inventory, support and other operational systems around one data flow.",
    icon: Users,
  },
];

const whyChoose = [
  {
    title: "End-to-End Integration Capability",
    text: "From custom software and mobile apps to CRM and ERP systems, we understand how different business platforms need to work together.",
  },
  {
    title: "Security Built Into Every Connection",
    text: "Authentication, permissions, validation and protected data exchange are planned as part of the integration architecture.",
  },
  {
    title: "Scalable, Maintainable Architecture",
    text: "We build integrations that can handle growing data, new tools and changing business workflows without becoming difficult to manage.",
  },
  {
    title: "Ongoing Technical Support",
    text: "We help maintain, troubleshoot and update integrations when APIs, platforms or business requirements change.",
  },
];

const supportItems = [
  "API Monitoring & Error Alerts",
  "Security & Access Updates",
  "Performance Optimization",
  "Version & Compatibility Updates",
  "Troubleshooting & Technical Support",
];

const caseStudies = [
  {
    title: "CRM Integration",
    text: "Connected lead sources, CRM workflows and customer communication tools so teams could manage updates from one connected flow.",
    image: "/services/hero/crm-integration.jpg",
  },
  {
    title: "Payment Gateway API",
    text: "Connected online payments with order status, invoice generation and reporting so transaction data moved automatically across systems.",
    image: "/services/hero/payment-api.jpg",
  },
  {
    title: "ERP Data Sync",
    text: "Synchronized ERP, inventory and internal applications to reduce duplicate updates and keep operational data consistent.",
    image: "/services/hero/erp-integration.jpg",
  },
  {
    title: "Logistics API Platform",
    text: "Connected shipment tracking, delivery updates and customer notifications through one structured integration flow.",
    image: "/services/hero/logistics-api.jpg",
  },
];

const tabs: { label: string; value: TabType }[] = [
  { label: "Languages", value: "languages" },
  { label: "Frameworks", value: "frameworks" },
  { label: "Databases", value: "databases" },
  { label: "Cloud & DevOps", value: "cloud" },
];

const techStack: Record<TabType, StackItem[]> = {
  languages: [
    { name: "JavaScript", icon: "/icons/JavaScript.svg" },
    { name: "Python", icon: "/icons/Python.svg" },
    { name: "Java", icon: "/icons/Java.svg" },
    { name: ".NET", icon: "/icons/NET.svg" },
    { name: "PHP", icon: "/icons/PHP.svg" },
    { name: "Golang", icon: "/icons/GoLand.svg" },
  ],
  frameworks: [
    { name: "Node.js", icon: "/icons/Node.js.svg" },
    { name: "Express.js", icon: "/icons/Express.js.svg" },
    { name: "Django", icon: "/icons/Django.svg" },
    { name: "Laravel", icon: "/icons/Laravel.svg" },
    { name: "Spring Boot", icon: "/icons/Spring.svg" },
    { name: "FastAPI", icon: "/icons/FastAPI.svg" },
  ],
  databases: [
    { name: "MongoDB", icon: "/icons/MongoDB.svg" },
    { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg" },
    { name: "MySQL", icon: "/icons/MySQL.svg" },
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
    { name: "GitHub Actions", icon: "/icons/GitHub.svg" },
  ],
};

const faqs = [
  {
    q: "What is API integration?",
    a: "API integration allows different applications, software systems and third-party platforms to exchange data and trigger actions without teams moving information manually between them.",
  },
  {
    q: "Which systems and APIs can you integrate?",
    a: "We work with payment gateways, CRM and ERP systems, WhatsApp, SMS, email, maps, analytics tools, cloud platforms, ecommerce systems and custom or third-party APIs.",
  },
  {
    q: "Can you integrate with our existing or legacy software?",
    a: "Yes. We can connect existing software, databases and legacy systems with modern applications when the required access methods and technical interfaces are available.",
  },
  {
    q: "How do you keep API integrations secure?",
    a: "We plan authentication, authorization, validation, encrypted communication and access controls according to the systems and data involved in the integration.",
  },
  {
    q: "Do you provide support after the integration goes live?",
    a: "Yes. We provide troubleshooting, monitoring, performance optimization and compatibility updates when APIs, platforms or business requirements change.",
  },
];

function createRows(items: StackItem[]) {
  return [items.slice(0, 4), items.slice(4, 6)];
}

export default function ApiIntegrationPage() {
  const [activeTab, setActiveTab] = useState<TabType>("languages");
  const [openFaq, setOpenFaq] = useState(0);
  const rows = createRows(techStack[activeTab]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/api-integration.jpg"
          alt="API Integration Services"
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
            <span className="text-white/90">API Integration</span>
          </div>

          <div className="mt-12 max-w-220 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Connect Your Business Systems with Secure API Integration
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-205 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              We connect web apps, mobile apps, CRM, ERP and third-party
              platforms through secure API integrations that keep your data,
              workflows and digital services working together.
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
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Overview
            </p>

            <h2 className="max-w-170 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Make your systems work together.
            </h2>

            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              Our API integration services connect the software your business
              already uses—from web and mobile apps to CRM, ERP, databases,
              cloud services and third-party platforms. We create reliable data
              flows that reduce repeated work and keep operations connected.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {[
              [
                "Unified Data Flow",
                "Move information accurately between applications, databases and business systems.",
              ],
              [
                "Less Manual Work",
                "Reduce repeated data entry and handoffs between disconnected tools.",
              ],
              [
                "Faster Operations",
                "Trigger updates and actions automatically across connected workflows.",
              ],
              [
                "Scalable Connections",
                "Add new tools and services without rebuilding your entire setup.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="border-t border-black/10 pt-6">
                <CheckCircle2
                  size={27}
                  className="mb-4 text-[#193175]"
                />
                <h3 className="text-[22px] font-light tracking-[-0.4px]">
                  {title}
                </h3>
                <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Challenges Without API Integration
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Disconnected systems slow down everyday operations.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              When business systems do not exchange information properly, teams
              repeat work, data becomes inconsistent and important processes
              depend on manual updates.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {challenges.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border-t border-black/10 pt-7"
                >
                  <Icon size={30} className="mb-5 text-[#193175]" />

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

      {/* SERVICES */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Our API Integration Services
            </p>

            <h2 className="mx-auto max-w-220 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              API integration services built around your systems.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_20px_65px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:border-[#193175]/30 hover:shadow-[0_28px_80px_rgba(60,91,155,0.12)]"
                >
                  <div className="mb-6 flex h-15 w-15 items-center justify-center rounded-2xl bg-[#193175]/10 transition group-hover:bg-[#193175]">
                    <Icon
                      size={27}
                      className="text-[#193175] transition group-hover:text-white"
                    />
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

      {/* API INTEGRATION PROCESS */}
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
              API Integration Process
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              From disconnected systems to one reliable integration flow.
            </h2>

            <p className="mx-auto mt-5 max-w-245 text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              We follow a clear process to understand your systems, build the
              right connections, test every data flow and support the
              integration after launch.
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
                  id="api-process-arrowhead"
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
                markerEnd="url(#api-process-arrowhead)"
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
                markerEnd="url(#api-process-arrowhead)"
              />

              <path
                d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#api-process-arrowhead)"
              />

              <path
                d="M 392 613 L 1208 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#api-process-arrowhead)"
              />
            </svg>

            {processLayout.map((item) => {
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

      {/* TYPES OF INTEGRATIONS */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Types of API Integrations
            </p>

            <h2 className="max-w-175 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Connect every part of your digital ecosystem.
            </h2>

            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              Whether you need to connect customer-facing apps, internal
              business software, databases, cloud platforms or third-party
              tools, we build integration flows around the way your systems
              actually operate.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {integrationTypes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border-t border-black/10 pt-7"
                >
                  <Icon size={30} className="mb-5 text-[#193175]" />

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

      {/* TECH STACK */}
      <section className="lazy-section bg-white px-5 py-20 text-[#161616] md:px-4 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#193175]">
              Tech Stack
            </p>

            <h2 className="mx-auto max-w-210 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Technologies powering API integration
            </h2>

            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              We use reliable languages, frameworks, databases and cloud tools
              to build secure, scalable and maintainable API integrations.
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

      <IndustriesSection />

      {/* WHY CHOOSE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why Choose BrainADZ Live
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              We connect technology around the way your business works.
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
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[28px] bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <img
              src="/services/hero/api-support.jpg"
              alt="API support and maintenance"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Support & Maintenance
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Keep every integration stable after launch.
            </h2>

            <p className="mt-5 text-[16px] font-light leading-[1.7] text-black/65">
              APIs and third-party platforms change over time. We help monitor,
              troubleshoot and update your integrations so connected systems
              continue to work reliably.
            </p>

            <div className="mt-8 space-y-4">
              {supportItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-t border-black/10 pt-4"
                >
                  <CheckCircle2 size={22} className="text-[#193175]" />

                  <span className="text-[17px] font-light text-black/75">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Case Studies
              </p>

              <h2 className="max-w-195 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Integration solutions built around real operational needs.
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
                  <div className="mb-4 flex items-center justify-between gap-5">
                    <h3 className="text-[23px] font-light tracking-[-0.5px]">
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

      {/* FAQ */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-300">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              FAQ
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              What businesses usually ask before an API integration project.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-[26px] border bg-white transition ${
                  openFaq === index
                    ? "border-[#193175]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]"
                    : "border-black/10"
                }`}
              >
                <button
                  type="button"
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

      {/* Final CTA */}
      <section className="lazy-section bg-white py-8">
        <div className="mx-auto max-w-450 px-4 lg:px-10">
          <div className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/CTA/ApiIntegration-CTA.jpg"
                alt="BrainADZ Live API Integration Services"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Ready to connect your systems and simplify your workflows?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Let BrainADZ Live connect your applications, business software
                  and third-party platforms through secure, reliable API
                  integrations.
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
