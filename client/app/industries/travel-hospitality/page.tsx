/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  Cloud,
  Code2,
  CreditCard,
  Database,
  FileCheck2,
  FileText,
  LifeBuoy,
  Layers3,
  Minus,
  MonitorSmartphone,
  Plus,
  Rocket,
  Search,
  ShieldCheck,
  ShieldPlus,
  UserCheck,
  Users,
  WalletCards,
  Workflow,
} from "lucide-react";

type TabType = "frontend" | "backend" | "databases" | "cloud";

type StackItem = {
  name: string;
  icon: string;
};

const workflow = [
  {
    title: "Travel Workflow Discovery",
    text: "We understand your hotel, travel, booking, guest, vendor, operations and customer experience workflows.",
    icon: Search,
  },
  {
    title: "Travel Architecture Planning",
    text: "We plan booking engines, guest portals, vendor dashboards, payment flows, inventory, CRM, integrations and cloud infrastructure.",
    icon: Layers3,
  },
  {
    title: "UI/UX & Prototype",
    text: "We design clean booking journeys, guest portals, hotel dashboards, vendor panels and admin workflows.",
    icon: MonitorSmartphone,
  },
  {
    title: "Secure Platform Development",
    text: "We build core travel modules including bookings, rooms, packages, guests, vendors, payments, notifications and reporting.",
    icon: Code2,
  },
  {
    title: "System Integration",
    text: "We integrate payment gateways, CRMs, channel managers, booking APIs, maps, notifications and third-party travel platforms.",
    icon: Workflow,
  },
  {
    title: "Testing & Security Review",
    text: "We test booking flows, inventory, user roles, payment journeys, notifications, performance and data security.",
    icon: ShieldCheck,
  },
  {
    title: "Cloud Deployment",
    text: "We deploy your travel platform on reliable cloud infrastructure with monitoring, backup and scalability setup.",
    icon: Rocket,
  },
  {
    title: "Support & Maintenance",
    text: "We provide updates, monitoring, issue fixing, booking improvements, performance optimization and new feature enhancements.",
    icon: LifeBuoy,
  },
];

const travelBenefits = [
  {
    title: "Faster Bookings",
    text: "Simplify room booking, tour booking, package selection, payment and confirmation workflows.",
    icon: FileCheck2,
  },
  {
    title: "Better Guest Management",
    text: "Manage guests, bookings, rooms, packages, vendors, payments and communication from one platform.",
    icon: ShieldPlus,
  },
  {
    title: "Improved Guest Experience",
    text: "Give guests self-service access to bookings, invoices, travel details, support and updates.",
    icon: Users,
  },
  {
    title: "Smarter Travel Decisions",
    text: "Use reports and analytics to track bookings, occupancy, revenue, guests, vendors and demand.",
    icon: BarChart3,
  },
];

const challenges = [
  {
    title: "Manual Booking Management",
    text: "Digitize booking requests, confirmations, payments, cancellations and customer communication.",
  },
  {
    title: "Disconnected Guest Data",
    text: "Bring guest, booking, room, package, payment and vendor data into one connected system.",
  },
  {
    title: "Slow Guest Support",
    text: "Improve guest queries, booking updates, travel support, reminders and communication.",
  },
  {
    title: "Limited Occupancy Visibility",
    text: "Track bookings, occupancy, revenue, guest activity, vendors and operational KPIs through dashboards.",
  },
];

const solutions = [
  {
    title: "Hotel Booking System",
    text: "Manage rooms, availability, guests, bookings, payments, invoices, cancellations and hotel operations from one dashboard.",
    icon: ShieldPlus,
  },
  {
    title: "Travel Booking Platform",
    text: "Create travel package booking, itinerary management, customer inquiries, payments and confirmation workflows.",
    icon: FileCheck2,
  },
  {
    title: "Guest Self-Service Portal",
    text: "Let guests view bookings, invoices, travel details, check-in information, support requests and updates.",
    icon: Users,
  },
  {
    title: "Vendor & Partner Portal",
    text: "Give hotels, vendors and partners tools for inventory, pricing, bookings, availability and communication.",
    icon: UserCheck,
  },
  {
    title: "Hospitality Billing System",
    text: "Manage invoices, payments, refunds, taxes, receipts, room charges and secure billing workflows.",
    icon: WalletCards,
  },
  {
    title: "Travel Analytics Dashboard",
    text: "Analyze bookings, occupancy, revenue, guest behavior, package performance and operational insights.",
    icon: BarChart3,
  },
];

const architectureItems = [
  "Guest portal",
  "Vendor dashboard",
  "Booking management",
  "Room & package workflow",
  "Billing & payments",
  "Reports & analytics",
];

const travelTypes = [
  {
    title: "Hotel Management Platforms",
    text: "We build hotel management platforms for rooms, availability, reservations, guests, housekeeping, payments, invoices and daily operations.",
    icon: ShieldPlus,
  },
  {
    title: "Travel Agency Platforms",
    text: "Our travel agency platforms simplify inquiries, packages, itineraries, customer follow-ups, booking confirmations and payment workflows.",
    icon: FileCheck2,
  },
  {
    title: "Guest Experience Portals",
    text: "We create guest portals where travelers can view bookings, itineraries, invoices, check-in details, support updates and travel documents.",
    icon: Users,
  },
  {
    title: "Vendor & Partner Platforms",
    text: "We build vendor and partner platforms for hotel inventory, travel packages, pricing, availability, booking updates and communication.",
    icon: UserCheck,
  },
  {
    title: "Travel Billing Solutions",
    text: "We develop billing systems for bookings, invoices, refunds, taxes, receipts, payment collection and customer payment history.",
    icon: CreditCard,
  },
  {
    title: "Travel Analytics Dashboards",
    text: "We build dashboards for booking trends, occupancy, revenue, customer behavior, package performance and operational insights.",
    icon: BarChart3,
  },
];

const coreFeatures = [
  "Booking dashboard",
  "Room availability",
  "Guest portal",
  "Vendor management",
  "Itinerary management",
  "Online billing",
  "Payment gateway",
  "Reports & analytics",
];

const securityItems = [
  "Role-based access",
  "Secure guest data",
  "Cloud backup",
  "Protected APIs",
  "Booking activity logs",
  "Payment security",
];

const caseStudies = [
  {
    title: "Hotel Booking Platform",
    text: "A hotel booking platform for rooms, guests, availability, payments, invoices and reservation management.",
    image: "/industries/travel-hospitality/hotel-booking.jpg",
  },
  {
    title: "Travel Package Platform",
    text: "A package booking platform for itineraries, inquiries, payments, confirmations and customer communication.",
    image: "/industries/travel-hospitality/travel-package.jpg",
  },
  {
    title: "Vendor Portal",
    text: "A vendor portal for availability, pricing, booking updates, inventory and communication.",
    image: "/industries/travel-hospitality/vendor-portal.jpg",
  },
  {
    title: "Travel Analytics Dashboard",
    text: "A dashboard for occupancy, bookings, revenue, guest trends and package performance.",
    image: "/industries/travel-hospitality/travel-analytics.jpg",
  },
];

const whyChoose = [
  {
    title: "Travel Workflow Understanding",
    text: "We design platforms around real travel workflows including bookings, guests, hotels, vendors, billing and support.",
  },
  {
    title: "Booking-Ready Architecture",
    text: "We build systems that support live inventory, bookings, payments, guest data and integrations.",
  },
  {
    title: "Custom Development",
    text: "Your travel platform is built according to your booking model, users, vendors, packages and business goals.",
  },
  {
    title: "Long-Term Support",
    text: "We support your platform with updates, monitoring, performance improvements, security updates and new features.",
  },
];

const supportItems = [
  "Travel platform monitoring",
  "New booking and guest modules",
  "Performance and speed optimization",
  "Security updates and access improvements",
  "Dashboard, booking and reporting upgrades",
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
    q: "Do you build custom travel and hospitality software?",
    a: "Yes, we build custom travel platforms for hotels, travel agencies, resorts, tour operators, booking businesses and hospitality startups.",
  },
  {
    q: "Can you build hotel booking software?",
    a: "Yes, we develop hotel booking systems with room availability, reservations, guest management, payments, invoices and reporting.",
  },
  {
    q: "Can you create guest self-service portals?",
    a: "Yes, we can build portals where guests can view bookings, invoices, itineraries, check-in details, support requests and updates.",
  },
  {
    q: "Can you build vendor or partner portals?",
    a: "Yes, we create vendor and partner portals for availability, pricing, bookings, inventory, package updates and communication.",
  },
  {
    q: "Can payment systems be integrated?",
    a: "Yes, we can integrate payment gateways, invoices, refunds, taxes, receipts and payment history.",
  },
  {
    q: "Is the platform secure?",
    a: "Yes, we use secure authentication, role-based access, protected APIs, cloud backup, audit logs and safe handling of customer data.",
  },
  {
    q: "Can the software support multiple hotels or branches?",
    a: "Yes, we can build multi-hotel and multi-branch travel platforms with centralized admin access and location-wise reporting.",
  },
  {
    q: "Can you integrate third-party travel tools?",
    a: "Yes, we can integrate CRMs, channel managers, booking APIs, maps, payment providers, notification tools and custom APIs.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes, we provide maintenance, updates, bug fixing, monitoring, performance optimization, security updates and new feature development.",
  },
  {
    q: "How long does travel software development take?",
    a: "Timeline depends on features, integrations, booking flows, user roles and platform complexity. A basic platform can take a few weeks, while advanced systems need more time.",
  },
];

export default function TravelHospitalityIndustryPage() {
  const [activeTab, setActiveTab] = useState<TabType>("frontend");
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/industries/travel-hospitality/travel-hospitality-hero.jpg"
          alt="Travel & Hospitality Software Solutions"
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
            <span className="text-white/90">Travel & Hospitality</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Travel & Hospitality Software Solutions
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Secure, scalable and workflow-driven travel platforms for policy
              management, claims, customer portals, agent systems and analytics.
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
              Digital travel systems built for speed, trust and control.
            </h2>
            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ Live helps travel businesses build platforms for policy
              administration, claims processing, customer self-service, agent
              management, premium billing, documents and analytics.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {travelBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="border-l-2 border-[#3C5B9B] pl-5">
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

      {/* CHALLENGES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Travel & Hospitality Challenges
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Solving real operational problems in travel and hospitality.
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

      {/* SOLUTIONS */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Travel & Hospitality Solutions We Build
            </p>
            <h2 className="mx-auto max-w-220 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Custom platforms for hotels, travel agencies, tour operators and hospitality businesses.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_18px_55px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:border-[#3C5B9B]/30 hover:shadow-[0_24px_75px_rgba(60,91,155,0.1)]"
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

      {/* ARCHITECTURE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Travel Architecture
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              A connected architecture for travel and hospitality operations.
            </h2>
            <p className="mt-5 max-w-165 text-[16px] font-light leading-[1.7] text-black/65">
              We plan travel systems with connected modules for guests, bookings, rooms, packages, vendors, payments, support and analytics.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {architectureItems.map((item, index) => (
              <div key={item} className="flex items-center gap-4 border-b border-black/10 pb-5">
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

      {/* TRAVEL & HOSPITALITY DEVELOPMENT PROCESS */}
      <section className="relative overflow-hidden bg-white px-5 py-16 md:px-8 lg:px-12 lg:py-14">
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
              Our travel and hospitality software development roadmap
            </h2>

            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              From travel workflow discovery to secure deployment, we follow a clear zig-zag process to build platforms with better booking, guest experience and scalability.
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
                        <Icon size={23} strokeWidth={2.4} className="text-[#3C5B9B]" />
                      </div>

                      <div>
                        <span className="text-[13px] font-semibold text-[#3C5B9B]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="mt-2 text-[22px] font-light leading-tight tracking-[-0.5px]">
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
                  id="travel-zigzag-arrow"
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

              <path d="M 392 43 L 1208 43" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#travel-zigzag-arrow)" />
              <path d="M 1294 43 C 1480 43 1515 150 1515 230 C 1515 318 1440 343 1294 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 1208 343 L 392 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#travel-zigzag-arrow)" />
              <path d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#travel-zigzag-arrow)" />
              <path d="M 392 613 L 1208 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#travel-zigzag-arrow)" />
              <path d="M 1294 613 C 1480 613 1515 720 1515 800 C 1515 888 1440 913 1294 913" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 1208 913 L 392 913" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#travel-zigzag-arrow)" />
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
          </div>
        </div>
      </section>

      {/* PLATFORM TYPES */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Travel & Hospitality Platforms
            </p>
            <h2 className="max-w-175 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Types of travel and hospitality solutions we develop
            </h2>
            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70 md:text-[18px]">
              We create travel and hospitality systems for hotels, resorts, travel agencies, tour operators, booking companies and hospitality startups.
            </p>

            <div className="mt-12 overflow-hidden rounded-[28px] bg-[#f6f8fc] p-8 shadow-[0_22px_70px_rgba(0,0,0,0.05)]">
              <h3 className="max-w-110 text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-[#0f5f95] md:text-[34px]">
                Build Smarter Travel Platforms
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
            {travelTypes.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="grid gap-5 border-b border-black/10 py-8 first:pt-0 md:grid-cols-[72px_1fr]">
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
                Core Travel Features
              </p>
              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Essential features for a complete travel and hospitality platform.
              </h2>
            </div>
            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              We build travel platforms with practical features for guests, hotels, agents, vendors, billing teams and admins.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
            {coreFeatures.map((item) => (
              <div key={item} className="flex items-center gap-4 border-b border-black/10 pb-5">
                <CheckCircle2 size={24} className="shrink-0 text-[#3C5B9B]" />
                <span className="text-[17px] font-light text-black/75">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Security & Reliability
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Reliable travel software for live booking operations.
            </h2>
            <p className="mt-5 text-[16px] font-light leading-[1.75] text-black/65">
              Travel platforms manage sensitive guest, booking and payment data. We focus on secure access, protected APIs, cloud backup, activity logs and payment security.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {securityItems.map((item, index) => (
              <div key={item} className="flex items-center gap-4 border-b border-black/10 pb-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3C5B9B]/10 text-[#3C5B9B]">
                  {index === 0 && <Users size={20} />}
                  {index === 1 && <ShieldCheck size={20} />}
                  {index === 2 && <Cloud size={20} />}
                  {index === 3 && <Database size={20} />}
                  {index === 4 && <Bell size={20} />}
                  {index === 5 && <CreditCard size={20} />}
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
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Case Studies
              </p>
              <h2 className="max-w-195 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Travel platforms built for real operational improvement.
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
      <section className="lazy-section bg-white px-5 py-20 text-[#161616] md:px-8 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#3c5b9b]">
              Tech Stack
            </p>
            <h2 className="mx-auto max-w-210 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Technologies powering modern travel platforms
            </h2>
            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              We use modern frontend, backend, database and cloud technologies
              to build travel platforms with performance, booking reliability and scalability.
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
              {[techStack[activeTab].slice(0, 4), techStack[activeTab].slice(4, 6)].map((row, rowIndex) => (
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
              We build travel platforms around guest experience, automation and growth.
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
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden bg-[#f6f8fc] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <img
              src="/industries/travel-hospitality/travel-support.jpg"
              alt="Travel & Hospitality Support and Maintenance"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Travel Support & Growth
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Support that keeps your travel platform reliable.
            </h2>
            <p className="mt-5 text-[16px] font-light leading-[1.7] text-black/65">
              Travel software needs continuous updates, booking improvements, monitoring and performance optimization. We support your platform after launch.
            </p>
            <div className="mt-8 space-y-4">
              {supportItems.map((item) => (
                <div key={item} className="flex items-center gap-4 border-b border-black/10 pb-4">
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
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              FAQ
            </p>
            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about travel and hospitality software development.
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-[26px] border bg-white transition-all duration-300 ${
                  openFaq === index ? "border-[#3C5B9B]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]" : "border-black/10"
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
                    {openFaq === index ? <Minus size={18} /> : <Plus size={18} />}
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
                alt="BrainADZ Live Travel & Hospitality Software"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Ready to build your travel platform?
                </h3>
                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Let BrainADZ Live help you create a scalable, booking-ready and guest-focused travel technology solution.
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