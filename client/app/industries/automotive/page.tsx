/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Bus,
  CheckCircle2,
  Cloud,
  Code2,
  CreditCard,
  Database,
  Gauge,
  LifeBuoy,
  MapPinned,
  Minus,
  MonitorSmartphone,
  PackageCheck,
  Plus,
  Rocket,

  Search,
  Settings2,
  ShieldCheck,
  Truck,
  Users,
  Workflow,
  Layers3,
  Car,
} from "lucide-react";

type TabType = "frontend" | "backend" | "databases" | "cloud";

type StackItem = {
  name: string;
  icon: string;
};

const workflow = [
  {
    title: "Automotive Workflow Discovery",
    text: "We understand your dealer, vehicles, dealers, bookings, dispatch flow, delivery process and operational goals.",
    icon: Search,
  },
  {
    title: "Mobility Architecture Planning",
    text: "We plan connected vehicle management, vehicle management, booking flow, dealer panels, admin dashboards and cloud infrastructure.",
    icon: Layers3,
  },
  {
    title: "UI/UX & Prototype",
    text: "We design clean dashboards, dealer apps, customer booking screens and real-time automotive management interfaces.",
    icon: MonitorSmartphone,
  },
  {
    title: "Secure Platform Development",
    text: "We build core automotive modules including tracking, bookings, dispatch, dealer, billing, notifications and reporting.",
    icon: Code2,
  },
  {
    title: "Connected Vehicle & System Integration",
    text: "We integrate maps, Connected Vehicle tracking, payment gateways, APIs, notifications, ERPs and third-party automotive tools.",
    icon: Workflow,
  },
  {
    title: "Testing & Optimization",
    text: "We test location accuracy, performance, vehicle flow, user roles, data security and platform reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Cloud Deployment",
    text: "We deploy your automotive platform on reliable cloud infrastructure with proper monitoring and backup setup.",
    icon: Rocket,
  },
  {
    title: "Support & Maintenance",
    text: "We provide updates, monitoring, issue fixing, performance improvements and new feature enhancements.",
    icon: LifeBuoy,
  },
];

const automotiveBenefits = [
  {
    title: "Real-Time Visibility",
    text: "Track vehicles, vehicles, dealers and deliveries through real-time dashboards.",
    icon: MapPinned,
  },
  {
    title: "Faster Dispatch",
    text: "Manage bookings, dealer allocation, vehicle planning and service status from one system.",
    icon: Rocket,
  },
  {
    title: "Better Dealer Control",
    text: "Monitor vehicle usage, fuel, maintenance, delays and dealer performance.",
    icon: Truck,
  },
  {
    title: "Smarter Decisions",
    text: "Use analytics to improve delivery time, vehicle efficiency and operational cost.",
    icon: BarChart3,
  },
];

const challenges = [
  {
    title: "Manual Trip Management",
    text: "Replace manual booking, dispatch and service tracking with a connected digital platform.",
  },
  {
    title: "Limited Vehicle Visibility",
    text: "Track vehicles, dealers, vehicles and delivery status in real time.",
  },
  {
    title: "Vehicle Inefficiency",
    text: "Improve vehicle planning, reduce delays and optimize automotive movement.",
  },
  {
    title: "Disconnected Operations",
    text: "Connect customers, dealers, dealer teams, dispatchers and admins in one workflow.",
  },
];

const solutions = [
  {
    title: "Dealer Management System",
    text: "Manage vehicles, dealers, vehicles, maintenance, fuel, services and dealer performance from one dashboard.",
    icon: Truck,
  },
  {
    title: "Automotive Booking Platform",
    text: "Create booking flows for passengers, shipments, automotive, rentals and automotive services.",
    icon: Bus,
  },
  {
    title: "Vehicle Optimization System",
    text: "Plan smarter vehicles, reduce delays, optimize deliveries and improve vehicle utilization.",
    icon: Car,
  },
  {
    title: "Driver Management App",
    text: "Give dealers service details, vehicle guidance, delivery updates, payments and task status.",
    icon: Users,
  },
  {
    title: "Logistics Tracking Dashboard",
    text: "Track shipment status, delivery progress, vehicle movement and customer updates.",
    icon: PackageCheck,
  },
  {
    title: "Automotive Analytics Platform",
    text: "Analyze service performance, dealer activity, delivery time, cost and dealer efficiency.",
    icon: BarChart3,
  },
];

const architectureItems = [
  "Customer booking flow",
  "Driver mobile app",
  "Dealer admin dashboard",
  "Connected Vehicle & vehicle tracking",
  "Billing & payments",
  "Reports & analytics",
];

const automotiveTypes = [
  {
    title: "Dealer Management Platforms",
    text: "We build dealer management systems for tracking vehicles, dealers, vehicles, fuel, maintenance, service status and operational performance across your automotive network.",
    icon: Truck,
  },
  {
    title: "Logistics & Delivery Systems",
    text: "Our automotive platforms help manage shipments, delivery tracking, dealer allocation, customer updates, vehicle planning and proof-of-delivery workflows.",
    icon: PackageCheck,
  },
  {
    title: "Passenger Automotive Apps",
    text: "We create passenger automotive apps for bookings, seat management, service status, ticketing, payments, dealer details and notifications.",
    icon: Bus,
  },
  {
    title: "Vehicle Planning Solutions",
    text: "We develop vehicle planning tools that help reduce travel time, improve vehicle usage, manage delivery zones and optimize automotive operations.",
    icon: Car,
  },
  {
    title: "Driver & Dispatcher Panels",
    text: "We design dealer and dispatcher systems for service allocation, live status updates, vehicle instructions, task completion and internal communication.",
    icon: Users,
  },
  {
    title: "Automotive Analytics Dashboards",
    text: "We build dashboards that help automotive businesses track delays, service costs, dealer performance, vehicle efficiency and business KPIs.",
    icon: BarChart3,
  },
];

const coreFeatures = [
  "Dealer dashboard",
  "Connected Vehicle tracking",
  "Driver management",
  "Vehicle planning",
  "Trip scheduling",
  "Booking system",
  "Payment gateway",
  "Reports & analytics",
];

const securityItems = [
  "Role-based access",
  "Secure dealer data",
  "Cloud backup",
  "Protected APIs",
  "Trip activity logs",
  "Payment security",
];

const caseStudies = [
  {
    title: "Dealer Management Platform",
    text: "A digital dealer platform for connected vehicle management, dealer management, vehicle planning and maintenance alerts.",
    image: "/industries/automotive/dealer-management.jpg",
  },
  {
    title: "Logistics Tracking System",
    text: "A real-time automotive dashboard for shipment tracking, delivery status, dealer updates and customer notifications.",
    image: "/industries/automotive/automotive-tracking.jpg",
  },
  {
    title: "Passenger Booking App",
    text: "A automotive booking app with seat booking, vehicle details, service tracking, ticketing and payments.",
    image: "/industries/automotive/passenger-booking.jpg",
  },
  {
    title: "Vehicle Analytics Dashboard",
    text: "A automotive analytics platform for vehicle efficiency, delivery delays, dealer activity and operational insights.",
    image: "/industries/automotive/vehicle-analytics.jpg",
  },
];

const whyChoose = [
  {
    title: "Automotive Workflow Understanding",
    text: "We design platforms around real dealer, automotive, booking, dealer and dispatch operations.",
  },
  {
    title: "Tracking-Ready Architecture",
    text: "We build systems that support Connected Vehicle tracking, vehicle visibility, live updates and scalable data flow.",
  },
  {
    title: "Custom Development",
    text: "Your automotive platform is built according to your vehicle types, users, vehicles and business model.",
  },
  {
    title: "Long-Term Support",
    text: "We support your platform with updates, monitoring, performance improvements and new features.",
  },
];

const supportItems = [
  "Dealer platform monitoring",
  "New automotive modules and features",
  "Performance and speed optimization",
  "Security updates and access improvements",
  "Dashboard, vehicle and reporting upgrades",
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
    q: "Do you build automotive management software?",
    a: "Yes, we build custom automotive management platforms for dealers, automotive, passenger automotive, delivery businesses and mobility startups.",
  },
  {
    q: "Can you build dealer management systems?",
    a: "Yes, we develop dealer management systems with connected vehicle management, dealer management, vehicle planning, maintenance alerts and reporting.",
  },
  {
    q: "Can you integrate Connected Vehicle tracking?",
    a: "Yes, we can integrate Connected Vehicle tracking, live vehicle maps, service status, vehicle movement and location-based notifications.",
  },
  {
    q: "Do you build dealer mobile apps?",
    a: "Yes, we can build dealer apps with service details, vehicle guidance, status updates, delivery proof, payment details and notifications.",
  },
  {
    q: "Can you create automotive tracking dashboards?",
    a: "Yes, we create automotive dashboards for shipment tracking, delivery updates, vehicle status, dealer performance and customer communication.",
  },
  {
    q: "Can the platform support multiple branches?",
    a: "Yes, we can build multi-branch automotive platforms with branch-wise dealer data, centralized admin access and reporting.",
  },
  {
    q: "Can payment systems be integrated?",
    a: "Yes, we can integrate payment gateways, invoice management, customer billing, dealer payments and subscription-based billing flows.",
  },
  {
    q: "Is the platform secure?",
    a: "Yes, we use secure authentication, role-based access, protected APIs, cloud backup and safe handling of operational data.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes, we provide maintenance, updates, bug fixing, monitoring, performance optimization and new feature development.",
  },
  {
    q: "How long does automotive software development take?",
    a: "Timeline depends on features, integrations, user roles, Connected Vehicle requirements and platform complexity. A basic system can take a few weeks, while advanced platforms need more time.",
  },
];

export default function AutomotiveIndustryPage() {
  const [activeTab, setActiveTab] = useState<TabType>("frontend");
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/industries/automotive/automotive-hero.jpg"
          alt="Automotive Software Solutions"
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
            <span className="text-white/90">Automotive</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Automotive Software Solutions
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Smart, scalable and tracking-ready automotive platforms for dealers,
              automotive, passenger mobility, delivery operations and automotive businesses.
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
              Digital automotive systems built for visibility, speed and control.
            </h2>
            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ Live helps automotive companies build custom platforms for
              dealer management, Connected Vehicle tracking, booking, vehicle planning, dispatch,
              dealer management, payments and analytics.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {automotiveBenefits.map((item) => {
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
              Automotive Challenges
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Solving real operational problems in automotive.
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
              Automotive Solutions We Build
            </p>
            <h2 className="mx-auto max-w-220 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Custom platforms for dealer, automotive, booking and mobility operations.
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
              Automotive Architecture
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              A connected architecture for automotive operations.
            </h2>
            <p className="mt-5 max-w-165 text-[16px] font-light leading-[1.7] text-black/65">
              We plan automotive systems with connected modules for customers,
              dealers, dispatchers, dealer managers, payments, Connected Vehicle tracking and analytics.
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

      {/* TRANSPORT DEVELOPMENT PROCESS */}
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
              Our automotive software development roadmap
            </h2>

            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              From automotive workflow discovery to secure deployment, we follow
              a clear zig-zag process to build platforms with better visibility,
              automation and scalability.
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
                  id="automotive-zigzag-arrow"
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

              <path d="M 392 43 L 1208 43" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#automotive-zigzag-arrow)" />
              <path d="M 1294 43 C 1480 43 1515 150 1515 230 C 1515 318 1440 343 1294 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 1208 343 L 392 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#automotive-zigzag-arrow)" />
              <path d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#automotive-zigzag-arrow)" />
              <path d="M 392 613 L 1208 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#automotive-zigzag-arrow)" />
              <path d="M 1294 613 C 1480 613 1515 720 1515 800 C 1515 888 1440 913 1294 913" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 1208 913 L 392 913" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#automotive-zigzag-arrow)" />
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
              Automotive Platforms
            </p>
            <h2 className="max-w-175 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Types of automotive solutions we develop
            </h2>
            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70 md:text-[18px]">
              We create automotive systems for dealer companies, automotive providers,
              delivery businesses, passenger mobility services and automotive startups.
            </p>

            <div className="mt-12 overflow-hidden rounded-[28px] bg-[#f6f8fc] p-8 shadow-[0_22px_70px_rgba(0,0,0,0.05)]">
              <h3 className="max-w-110 text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-[#0f5f95] md:text-[34px]">
                Build Smarter Automotive Platforms
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
            {automotiveTypes.map((item) => {
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
                Core Automotive Features
              </p>
              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Essential features for a complete automotive platform.
              </h2>
            </div>
            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              We build automotive platforms with practical features for customers,
              dealers, dispatchers, dealer managers and business teams.
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
              Reliable automotive software for live operations.
            </h2>
            <p className="mt-5 text-[16px] font-light leading-[1.75] text-black/65">
              Automotive platforms depend on accurate data, live tracking and secure
              access. We focus on platform stability, protected APIs, user roles,
              backups and payment security.
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
                Automotive platforms built for real operational improvement.
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
              Technologies powering smart automotive platforms
            </h2>
            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              We use modern frontend, backend, database and cloud technologies
              to build automotive platforms with tracking, performance and scalability.
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
              We build automotive platforms around visibility, automation and growth.
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
              src="/industries/automotive/automotive-support.jpg"
              alt="Automotive Support and Maintenance"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Automotive Support & Growth
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Support that keeps your automotive platform reliable.
            </h2>
            <p className="mt-5 text-[16px] font-light leading-[1.7] text-black/65">
              Automotive software needs continuous updates, tracking improvements,
              monitoring and performance optimization. We support your platform after launch.
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
              Common questions about automotive software development.
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
                alt="BrainADZ Live Automotive Software"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Ready to build your automotive platform?
                </h3>
                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Let BrainADZ Live help you create a scalable, tracking-ready
                  and operations-focused automotive solution.
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