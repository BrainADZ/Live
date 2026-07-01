/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  CreditCard,
  Database,
  FileText,
  Home,
  KeyRound,
  Layers3,
  LifeBuoy,
  LockKeyhole,
  MapPin,
  Minus,
  MonitorSmartphone,
  Plus,
  Rocket,
  Search,
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
    title: "Requirement Analysis",
    text: "We understand your real estate business, property users, listing flow, sales process, tenant needs and platform goals.",
    icon: Search,
  },
  {
    title: "Property Workflow Mapping",
    text: "We map property listings, leads, visits, agents, owners, tenants, payments, approvals and admin operations.",
    icon: Workflow,
  },
  {
    title: "UI/UX Design",
    text: "We design clean property search screens, listing pages, dashboards, booking flows and mobile-first user journeys.",
    icon: MonitorSmartphone,
  },
  {
    title: "Secure Development",
    text: "We build secure modules for listings, inquiries, visits, documents, payments, users and property management.",
    icon: Code2,
  },
  {
    title: "System Integration",
    text: "We integrate maps, payment gateways, CRM tools, notifications, document systems, analytics and third-party APIs.",
    icon: Layers3,
  },
  {
    title: "Testing & Quality Review",
    text: "We test search, listing accuracy, user roles, payments, performance, security and complete property workflows.",
    icon: ShieldCheck,
  },
  {
    title: "Deployment",
    text: "We deploy the property platform on reliable cloud infrastructure with monitoring and production-ready setup.",
    icon: Rocket,
  },
  {
    title: "Support & Maintenance",
    text: "We provide updates, bug fixing, listing improvements, feature upgrades, performance tuning and long-term support.",
    icon: LifeBuoy,
  },
];

const propertyTechBenefits = [
  {
    title: "Better Property Discovery",
    text: "Help buyers, tenants and investors find the right properties through search, filters, maps and smart listings.",
    icon: Home,
  },
  {
    title: "Faster Lead Management",
    text: "Manage inquiries, visits, follow-ups, agents and owner communication from one connected platform.",
    icon: Rocket,
  },
  {
    title: "Secure Document Handling",
    text: "Handle agreements, verification documents, invoices and property records with secure access and storage.",
    icon: ShieldCheck,
  },
  {
    title: "Smarter Property Insights",
    text: "Track listings, leads, conversions, occupancy, revenue, agent performance and market activity.",
    icon: BarChart3,
  },
];

const challenges = [
  {
    title: "Scattered Property Listings",
    text: "Bring listings, details, photos, availability, prices and property status into one organized system.",
  },
  {
    title: "Slow Lead Follow-Ups",
    text: "Improve inquiry tracking, agent assignment, visit scheduling, reminders and lead conversion workflows.",
  },
  {
    title: "Manual Rental Operations",
    text: "Digitize tenant onboarding, rent collection, maintenance requests, documents and property management tasks.",
  },
  {
    title: "Limited Business Visibility",
    text: "Track property demand, lead sources, sales activity, rentals, revenue and operational performance clearly.",
  },
];

const solutions = [
  {
    title: "Property Listing Platform",
    text: "Property search, filters, images, map view, inquiries, lead capture and admin listing management.",
    icon: Home,
  },
  {
    title: "Real Estate CRM",
    text: "Lead tracking, agent assignment, follow-ups, site visits, customer history and sales pipeline management.",
    icon: Users,
  },
  {
    title: "Rental Management System",
    text: "Tenant onboarding, rent tracking, invoices, agreements, maintenance requests and owner reporting.",
    icon: KeyRound,
  },
  {
    title: "Property Management Software",
    text: "Manage buildings, units, occupancy, service requests, documents, billing and operational workflows.",
    icon: Building2,
  },
  {
    title: "Broker & Agent Portal",
    text: "Agent dashboards, assigned leads, visit schedules, commission tracking and property inventory access.",
    icon: Users,
  },
  {
    title: "Property Analytics Dashboard",
    text: "Track leads, conversions, listing performance, revenue, occupancy and market insights from one dashboard.",
    icon: BarChart3,
  },
];

const architectureItems = [
  "Property listing engine",
  "User & agent access",
  "Lead and visit workflow",
  "Documents & payments",
  "Map and CRM integrations",
  "Analytics & reporting",
];

const propertyTechTypes = [
  {
    title: "Real Estate Marketplace Platforms",
    text: "We build property marketplace platforms with search, filters, map view, property details, inquiries, saved listings, agent communication and admin control.",
    icon: Home,
  },
  {
    title: "Property Management Systems",
    text: "Our property management systems help manage buildings, units, tenants, owners, maintenance requests, documents, payments and reports in one place.",
    icon: Building2,
  },
  {
    title: "Real Estate CRM Solutions",
    text: "We develop CRM systems for brokers, builders and property teams to manage leads, site visits, follow-ups, customers, agents and sales pipelines.",
    icon: Users,
  },
  {
    title: "Rental & Tenant Portals",
    text: "We create rental platforms for tenant onboarding, rent collection, lease documents, maintenance tickets, notices and owner-tenant communication.",
    icon: KeyRound,
  },
  {
    title: "Location-Based Property Apps",
    text: "We build map-driven property apps with nearby search, locality data, availability, property comparison and location-based user experiences.",
    icon: MapPin,
  },
  {
    title: "Property Analytics Dashboards",
    text: "We build dashboards that help real estate businesses track leads, listings, occupancy, revenue, agent performance and property demand.",
    icon: BarChart3,
  },
];

const coreFeatures = [
  "Property listings",
  "Advanced search",
  "Map integration",
  "Lead management",
  "Visit scheduling",
  "Document upload",
  "Payment gateway",
  "Reports & analytics",
];

const useCases = [
  "Real estate marketplaces",
  "Brokerage firms",
  "Builders and developers",
  "Rental platforms",
  "Co-living businesses",
  "Property management companies",
  "Commercial real estate teams",
  "Facility and building operators",
];

const caseStudies = [
  {
    title: "Property Listing Marketplace",
    text: "A property discovery platform with search, filters, maps, inquiries and admin listing management.",
    image: "/industries/property-tech/property-marketplace.jpg",
  },
  {
    title: "Real Estate CRM",
    text: "A CRM platform for leads, visits, agents, customer follow-ups and sales pipeline visibility.",
    image: "/industries/property-tech/real-estate-crm.jpg",
  },
  {
    title: "Rental Management System",
    text: "A rental workflow system for tenants, rent tracking, documents, maintenance requests and owner reports.",
    image: "/industries/property-tech/rental-management.jpg",
  },
  {
    title: "Property Analytics Dashboard",
    text: "A dashboard for listing performance, lead sources, occupancy, revenue and agent productivity.",
    image: "/industries/property-tech/property-dashboard.jpg",
  },
];

const whyChoose = [
  {
    title: "Property Workflow Understanding",
    text: "We design solutions around real buyer, tenant, broker, builder and property management workflows.",
  },
  {
    title: "Scalable Platform Architecture",
    text: "Your platform is planned for listings, users, locations, agents, documents, payments and future growth.",
  },
  {
    title: "Custom Development",
    text: "We build property platforms according to your business model, user roles, features and operational goals.",
  },
  {
    title: "Long-Term Support",
    text: "We support your platform with updates, listing improvements, integrations, optimization and feature expansion.",
  },
];

const supportItems = [
  "Platform monitoring and bug fixing",
  "New property modules and features",
  "Search and listing improvements",
  "Performance and speed optimization",
  "CRM, reports and workflow upgrades",
];

const securityItems = [
  "Role-based permissions",
  "Secure property records",
  "Cloud backup and recovery",
  "Protected APIs",
  "Audit logs",
  "Payment security",
];

const tabs: { label: string; value: TabType }[] = [
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Databases", value: "databases" },
  { label: "Cloud & DevOps", value: "cloud" },
];

const techStack: Record<TabType, StackItem[]> = {
  frontend: [
    { name: "React", icon: "/icons/React.svg" },
    { name: "Next.js", icon: "/icons/Next.js.svg" },
    { name: "Vue.js", icon: "/icons/Vue.js.svg" },
    { name: "Angular", icon: "/icons/Angular.svg" },
    { name: "TypeScript", icon: "/icons/TypeScript.svg" },
    { name: "Tailwind CSS", icon: "/icons/Tailwind CSS.svg" },
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
    { name: "Google Cloud", icon: "/icons/Google Cloud.svg" },
    { name: "Docker", icon: "/icons/Docker.svg" },
    { name: "Kubernetes", icon: "/icons/Kubernetes.svg" },
    { name: "GitHub Actions", icon: "/icons/GitHub Actions.svg" },
  ],
};

const faqs = [
  {
    q: "Do you build custom property technology platforms?",
    a: "Yes, we build custom PropTech platforms for property listings, real estate CRM, rental management, tenant portals, broker tools and property analytics.",
  },
  {
    q: "Can you create a property listing website or app?",
    a: "Yes, we can build property listing platforms with search, filters, maps, property details, image galleries, inquiry forms and admin management.",
  },
  {
    q: "Do you develop real estate CRM software?",
    a: "Yes, we build real estate CRM systems for lead tracking, agent assignment, site visits, follow-ups, customer records and sales pipeline management.",
  },
  {
    q: "Can you integrate maps and location search?",
    a: "Yes, we can integrate map views, nearby search, locality filters, property pins, route data and location-based discovery features.",
  },
  {
    q: "Can the platform manage rentals and tenants?",
    a: "Yes, we can build rental management features for tenant onboarding, rent tracking, lease documents, maintenance requests, notices and owner reporting.",
  },
  {
    q: "Do you provide mobile apps for property businesses?",
    a: "Yes, we can build mobile apps for buyers, tenants, brokers, agents, property managers, builders and real estate teams.",
  },
  {
    q: "Can you integrate payments and documents?",
    a: "Yes, we can integrate payment gateways, invoices, document uploads, digital agreements, verification documents and secure storage workflows.",
  },
  {
    q: "Can it support multiple agents or branches?",
    a: "Yes, we can build multi-agent and multi-branch property platforms with separate access, assignments, reports and centralized admin control.",
  },
  {
    q: "Do you offer maintenance after launch?",
    a: "Yes, we provide maintenance, updates, bug fixing, performance optimization, listing improvements, security updates and new feature development.",
  },
  {
    q: "How long does Property Tech development take?",
    a: "Timeline depends on features, integrations, user roles and platform complexity. A basic property platform can take a few weeks, while advanced systems need more time.",
  },
];

export default function PropertyTechIndustryPage() {
  const [activeTab, setActiveTab] = useState<TabType>("frontend");
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/industries/property-tech/property-tech-hero.jpg"
          alt="Property Tech Software Solutions"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-8 lg:min-h-135 lg:px-12">
          <div className="flex items-center gap-3 text-[16px] font-light md:text-[18px]">
            <Link href="/" className="text-[#6da0ff] hover:underline">
              Home
            </Link>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Industries</span>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Property Tech</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Property Tech Software Solutions
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Secure, scalable and user-focused property platforms for banks,
              NBFCs, payment companies, subscription businesses and PropTech
              startups.
            </p>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#3C5B9B] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Enquire Now
                <span className="text-[20px] leading-none">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Overview
            </p>
            <h2 className="max-w-170 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Digital property platforms built for smoother discovery, sales and property operations.
            </h2>
            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ Live helps real estate and property businesses build custom platforms for listings, CRM, rentals, tenant portals, payments, documents, analytics and secure digital workflows.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {propertyTechBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="border-l-2 border-[#3C5B9B] pl-5"
                >
                  <Icon size={28} className="mb-4 text-[#3C5B9B]" />
                  <h3 className="text-[20px] font-light">{item.title}</h3>
                  <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDUCATION TECH CHALLENGES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Challenges We Solve
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Solving real operational problems in property technology.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {challenges.map((item, index) => (
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

      {/* EDUCATION TECH SOLUTIONS */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Property Tech Solutions We Build
            </p>
            <h2 className="mx-auto max-w-220 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Custom platforms for finances, businesss, service platforms and
              PropTech businesses.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="border-t border-black/10 pt-7">
                  <Icon size={29} className="mb-5 text-[#3C5B9B]" />
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

      {/* EDUCATION TECH ARCHITECTURE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Property Tech Digital Architecture
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              A connected architecture for digital property operations.
            </h2>
            <p className="mt-5 max-w-165 text-[16px] font-light leading-[1.7] text-black/65">
              We plan PropTech platforms with connected modules for buyers, tenants, owners, agents, admins, listings, payments, documents, analytics and cloud security.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {architectureItems.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-black/10 pb-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3C5B9B]/10 text-[13px] font-semibold text-[#3C5B9B]">
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

      {/* PROPERTY TECH DEVELOPMENT PROCESS */}
      <section className="relative overflow-hidden bg-white px-5 py-16 md:px-8 lg:px-12 lg:py-20">
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
              Our Process
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              Our property technology development roadmap
            </h2>
            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              From property workflow discovery to secure deployment, we follow a clear zig-zag process to build property platforms with strong usability and reliable architecture.
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

          <div className="relative hidden h-[1060px] lg:block">
            <svg
              className="pointer-events-none absolute inset-0 z-0 h-full w-full"
              viewBox="0 0 1600 1060"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id="proptech-zigzag-arrow"
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

              <path d="M 392 43 L 1208 43" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#proptech-zigzag-arrow)" />
              <path d="M 1294 43 C 1480 43 1515 150 1515 230 C 1515 318 1440 343 1294 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 1208 343 L 392 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#proptech-zigzag-arrow)" />
              <path d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#proptech-zigzag-arrow)" />
              <path d="M 392 613 L 1208 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#proptech-zigzag-arrow)" />
              <path d="M 1294 613 C 1480 613 1515 720 1515 800 C 1515 888 1440 913 1294 913" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 1208 913 L 392 913" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#proptech-zigzag-arrow)" />
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
                  className="group absolute z-10 w-[390px] -translate-x-1/2 text-center"
                  style={{ left: item.left, top: item.top }}
                >
                  <div className="mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-full border-2 border-[#3C5B9B] bg-[#edf3ff] shadow-[0_16px_42px_rgba(60,91,155,0.16)] transition duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)]">
                    <Icon size={36} strokeWidth={2.25} className="text-[#3C5B9B]" />
                  </div>

                  <span className="mt-5 inline-block text-[13px] font-semibold text-[#3C5B9B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-3 text-[30px] font-light leading-[1.15] tracking-[-0.8px] text-black xl:text-[32px]">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-[330px] text-[17px] font-light leading-[1.55] text-black/65 xl:text-[18px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>        </div>
      </section>

      {/* PROPERTY TECH USE CASES */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Use Cases
            </p>
            <h2 className="max-w-175 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Property Tech solutions for different real estate businesses
            </h2>
            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70 md:text-[18px]">
              We create property platforms for banks, NBFCs, lenders, payment businesses, investment platforms and PropTech
              startups with practical features and secure architecture.
            </p>

            <div className="mt-12 overflow-hidden rounded-[28px] bg-[#f6f8fc] p-8 shadow-[0_22px_70px_rgba(0,0,0,0.05)]">
              <h3 className="max-w-110 text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-[#0f5f95] md:text-[34px]">
                Build Smarter Property Systems
              </h3>
              <a
                href="/contact"
                className="mt-8 inline-flex h-13 min-w-52 items-center justify-center rounded-lg bg-[#3C5B9B] px-6 text-[15px] font-semibold text-white transition hover:bg-[#2f4a82]"
              >
                Get Expert Guidance
              </a>
            </div>
          </div>

          <div>
            {propertyTechTypes.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="grid gap-5 border-b border-black/10 py-8 first:pt-0 md:grid-cols-[72px_1fr]"
                >
                  <div className="flex h-15 w-15 items-center justify-center rounded-2xl bg-[#3C5B9B]/10">
                    <Icon size={29} className="text-[#3C5B9B]" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-light tracking-[-0.4px] text-black md:text-[26px]">
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
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Key Features
              </p>
              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Features that make property-tech platforms easier to manage.
              </h2>
            </div>
            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              We build property platforms with practical features for customers,
              advisors, parents, admins, finance teams and management teams.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-6 md:grid-cols-2 lg:grid-cols-5">
            {coreFeatures.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-black/10 pb-5"
              >
                <CheckCircle2 size={24} className="shrink-0 text-[#3C5B9B]" />
                <span className="text-[17px] font-light text-black/75">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASE LIST */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Property Tech Use Cases
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Platforms for every property-tech business model.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {useCases.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-black/10 pb-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3C5B9B]/10 text-[13px] font-semibold text-[#3C5B9B]">
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

      {/* SECURITY */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Security & Access Control
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Security-first development for customer and property data.
            </h2>
            <p className="mt-5 text-[16px] font-light leading-[1.75] text-black/65">
              PropTech platforms handle customer records, payments and property
              data, so we focus on secure access, user permissions, cloud backup
              and reliable system architecture.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {securityItems.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-black/10 pb-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3C5B9B]/10 text-[#3C5B9B]">
                  {index === 0 && <LockKeyhole size={20} />}
                  {index === 1 && <ShieldCheck size={20} />}
                  {index === 2 && <Users size={20} />}
                  {index === 3 && <FileText size={20} />}
                  {index === 4 && <Cloud size={20} />}
                  {index === 5 && <Database size={20} />}
                </span>
                <p className="text-[18px] font-light tracking-[-0.3px] text-black/80">
                  {item}
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
                Finance platforms built for real property and operational
                improvement.
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
                  <div className="mb-4 flex items-center justify-between gap-5">
                    <h3 className="text-[23px] font-light tracking-[-0.5px]">
                      {item.title}
                    </h3>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3C5B9B]/10">
                      <ArrowRight size={18} className="text-[#3C5B9B]" />
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
      <section className="lazy-section bg-[#f6f8fc] px-5 py-20 text-[#161616] md:px-8 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#3c5b9b]">
              Tech Stack
            </p>
            <h2 className="mx-auto max-w-210 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Technologies powering scalable PropTech development
            </h2>
            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              We use modern frontend, backend, database and cloud technologies
              to build PropTech platforms with strong performance, security and
              scalability.
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
                    className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#3c5b9b] transition-all duration-300 ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}`}
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
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Why Choose BrainADZ Live
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              We build PropTech solutions around property experience, security
              and growth.
            </h2>
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
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <img
              src="/industries/property-tech/property-tech-support.jpg"
              alt="Property Tech Support and Maintenance"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Property Tech Support & Growth
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Support that keeps your property platform reliable.
            </h2>
            <p className="mt-5 text-[16px] font-light leading-[1.7] text-black/65">
              PropTech software needs regular updates, listing improvements, workflow changes and performance monitoring. We support your
              platform after launch so it keeps improving.
            </p>
            <div className="mt-8 space-y-4">
              {supportItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-black/10 pb-4"
                >
                  <CheckCircle2 size={23} className="shrink-0 text-[#3C5B9B]" />
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
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              FAQ
            </p>
            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about Property Tech development.
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-[26px] border bg-white transition-all duration-300 ${
                  openFaq === index
                    ? "border-[#3C5B9B]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]"
                    : "border-black/10"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                >
                  <span className="text-[16px] font-light leading-[1.45] text-black md:text-[17px]">
                    {faq.q}
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f6f8fc] text-[#3C5B9B]">
                    {openFaq === index ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="mx-5 border-t border-[#3C5B9B]/15 pb-6 pt-4 md:mx-6">
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
              <img
                src="/about.avif"
                alt="BrainADZ Live Property Tech Software"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Ready to build your Property Tech platform?
                </h3>
                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Let BrainADZ Live help you create a secure, scalable and
                  user-focused property technology solution.
                </p>
              </div>
              <a
                href="/contact"
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#3C5B9B] md:min-w-57.5"
              >
                <span>Enquire Now</span>
                <span className="text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}