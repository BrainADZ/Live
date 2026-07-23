/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Bell,
  Bug,
  CheckCircle2,
  Code2,
  Gauge,
  GraduationCap,
  HeartPulse,
  Landmark,
  LifeBuoy,
  MapPinned,
  Minus,
  MonitorSmartphone,
  PackageCheck,
  Plus,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Store,
  Truck,
  Users,
  WalletCards,
  Workflow,
} from "lucide-react";
import IndustriesSection from "@/components/home/Industries"
import PopupForm from "@/components/PopupForm";

type TabType = "languages" | "frameworks" | "backend";

type StackItem = {
  name: string;
  icon: string;
};

const processSteps = [
  {
    title: "Product & User Discovery",
    text: "We understand your app idea, target users, business workflow, required features, integrations and success goals before planning the build.",
    icon: Search,
  },
  {
    title: "App Flow & UI/UX Planning",
    text: "We map user journeys, screens, navigation, forms and key actions so the app feels simple and practical on mobile.",
    icon: Smartphone,
  },
  {
    title: "Backend & App Architecture",
    text: "We plan the app structure, APIs, database, admin panel, security, notifications and future scalability.",
    icon: Workflow,
  },
  {
    title: "Mobile App Development",
    text: "We build Android, iOS or cross-platform apps with clean code, stable features and connected backend functionality.",
    icon: Code2,
  },
  {
    title: "Testing & Quality Check",
    text: "We test devices, performance, crashes, APIs, security, usability and real user scenarios before release.",
    icon: ShieldCheck,
  },
  {
    title: "Launch, Updates & Support",
    text: "We support store submission, deployment, bug fixes, updates and feature improvements after launch.",
    icon: Rocket,
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

const appSolutions = [
  { title: "Ecommerce & Shopping Apps", icon: ShoppingCart },
  { title: "Booking & Appointment Apps", icon: Bell },
  { title: "Delivery & Tracking Apps", icon: Truck },
  { title: "Learning & Training Apps", icon: GraduationCap },
  { title: "Healthcare Service Apps", icon: HeartPulse },
  { title: "Finance & Payment Apps", icon: WalletCards },
  { title: "Logistics & Field Apps", icon: MapPinned },
  { title: "Internal Business Apps", icon: Users },
];

const appTypes = [
  {
    title: "Android App Development",
    text: "Native Android apps planned for smooth performance, practical user flows and Play Store readiness.",
    icon: "/icons/Android.svg",
  },
  {
    title: "iOS App Development",
    text: "iPhone and iPad apps with clean interfaces, secure app logic and App Store preparation.",
    icon: "/icons/Swift.svg",
  },
  {
    title: "Flutter App Development",
    text: "Cross-platform mobile apps for Android and iOS using one maintainable codebase.",
    icon: "/icons/Flutter.svg",
  },
  {
    title: "React Native Apps",
    text: "Flexible mobile apps with reusable components, faster development and connected backend features.",
    icon: "/icons/React.svg",
  },
  {
    title: "Progressive Web Apps",
    text: "App-like web experiences that work across devices and can support faster access for users.",
    icon: "/icons/Next.js.svg",
  },
  {
    title: "Enterprise Mobile Apps",
    text: "Secure mobile apps for teams, approvals, reporting, field activity and internal business workflows.",
    icon: "/icons/NET.svg",
  },
];

const caseStudies = [
  {
    title: "Ecommerce Mobile App",
    image: "/services/hero/ecommerce-app.jpg",
  },
  {
    title: "Healthcare Booking App",
    image: "/services/hero/healthcare-app.jpg",
  },
  {
    title: "Delivery Tracking App",
    image: "/services/hero/delivery-app.jpg",
  },
  {
    title: "Learning Platform App",
    image: "/services/hero/learning-app.jpg",
  },
];

const whyChoose = [
  {
    title: "User-Focused Mobile UX",
    text: "We plan app screens around simple navigation, quick actions and practical user journeys.",
  },
  {
    title: "Backend + API Capability",
    text: "Your app can be connected with secure APIs, databases, admin panels and third-party tools.",
  },
  {
    title: "Security in App Workflows",
    text: "We plan secure login, user roles, data protection, payment flow and API communication from the start.",
  },
  {
    title: "Launch & Improvement Support",
    text: "We support testing, deployment, store submission and future updates after the first release.",
  },
];

const supportItems = [
  {
    title: "Bug & Crash Fixing",
    text: "Resolve app crashes, bugs, broken flows and device-specific issues after release.",
    icon: Bug,
  },
  {
    title: "OS Compatibility Updates",
    text: "Keep the app aligned with Android, iOS and device-level changes over time.",
    icon: MonitorSmartphone,
  },
  {
    title: "Performance Monitoring",
    text: "Review loading speed, API response, app stability and user experience issues.",
    icon: Gauge,
  },
  {
    title: "Feature Enhancements",
    text: "Add new features, improve user flows and extend app functionality as your business grows.",
    icon: PackageCheck,
  },
  {
    title: "Ongoing Technical Support",
    text: "Support updates, maintenance, backend changes and continuous product improvements.",
    icon: LifeBuoy,
  },
];

const tabs: { label: string; value: TabType }[] = [
  { label: "Languages", value: "languages" },
  { label: "Frameworks", value: "frameworks" },
  { label: "Backend & Tools", value: "backend" },
];

const techStack: Record<TabType, StackItem[]> = {
  languages: [
    { name: "Kotlin", icon: "/icons/Kotlin.svg" },
    { name: "Swift", icon: "/icons/Swift.svg" },
    { name: "Dart", icon: "/icons/Dart.svg" },
    { name: "Java", icon: "/icons/Java.svg" },
    { name: "JavaScript", icon: "/icons/JavaScript.svg" },
    { name: "TypeScript", icon: "/icons/TypeScript.svg" },
  ],
  frameworks: [
    { name: "Flutter", icon: "/icons/Flutter.svg" },
    { name: "React Native", icon: "/icons/React.svg" },
    { name: "Android", icon: "/icons/Android.svg" },
    { name: "iOS", icon: "/icons/Swift.svg" },
    { name: "Next.js", icon: "/icons/Next.js.svg" },
    { name: "Node.js", icon: "/icons/Node.js.svg" },
  ],
  backend: [
    { name: "Firebase", icon: "/icons/Firebase.svg" },
    { name: "Node.js", icon: "/icons/Node.js.svg" },
    { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg" },
    { name: "MongoDB", icon: "/icons/MongoDB.svg" },
    { name: "MySQL", icon: "/icons/MySQL.svg" },
    { name: "Redis", icon: "/icons/Redis.svg" },
  ],
};

const faqs = [
  {
    q: "Do you develop both Android and iOS apps?",
    a: "Yes. We build Android apps, iOS apps and cross-platform mobile apps depending on your users, features, budget and long-term product plan.",
  },
  {
    q: "Which technology should I choose for my mobile app?",
    a: "The right technology depends on performance needs, timeline, budget, integrations and future scaling. We suggest the best approach after understanding your app requirements.",
  },
  {
    q: "Can you build the backend, APIs and admin panel also?",
    a: "Yes. We can build the backend, database, APIs, admin dashboard, user management and integrations required to run the mobile app.",
  },
  {
    q: "Do you help with Play Store and App Store publishing?",
    a: "Yes. We help prepare builds, testing, store assets and submission steps for Play Store and App Store launch.",
  },
  {
    q: "Can you improve or rebuild my existing mobile app?",
    a: "Yes. We can improve UI/UX, fix bugs, optimize performance, add features, upgrade technology and rebuild app flows where needed.",
  },
  {
    q: "Do you provide maintenance after launch?",
    a: "Yes. We provide app maintenance, bug fixing, OS compatibility updates, backend support, performance improvements and feature enhancements.",
  },
];

export default function MobileAppDevelopmentPage() {
  const [activeTab, setActiveTab] = useState<TabType>("languages");
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
<section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
  <img
    src="/hero/mobile-app.webp"
    alt="Mobile App Development Services"
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
      <span className="text-white/90">Mobile App Development</span>
    </div>

    <div className="mt-12 max-w-205 md:mt-14">
      <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
        Custom Mobile App Development Services
      </h1>
    </div>

    <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
      <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
        We design and develop Android, iOS and cross-platform mobile apps
        with clean UI, secure backend systems and workflows built around your
        business goals.
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

            <h2 className="max-w-170 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Build mobile apps that solve real user and business problems.
            </h2>

            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ Live builds mobile applications for customer engagement,
              internal operations, bookings, payments, delivery, reporting and
              connected business workflows. We focus on the full product flow:
              mobile UI, backend, APIs, admin panels, security and post-launch
              improvements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Android, iOS & Cross-Platform Apps",
                text: "Build mobile apps using the technology that fits your users, budget and product roadmap.",
                icon: Smartphone,
              },
              {
                title: "Backend, APIs & Admin Panels",
                text: "Connect your app with secure databases, dashboards, notifications and third-party systems.",
                icon: Code2,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-black/10 bg-[#f8faff] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.04)]"
                >
                  <div className="mb-6 flex h-15 w-15 items-center justify-center rounded-2xl bg-[#193175]/10">
                    <Icon size={28} className="text-[#193175]" />
                  </div>

                  <h3 className="text-[22px] font-normal tracking-[-0.4px]">
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

{/* DEVELOPMENT PROCESS */}
<section className="relative overflow-hidden bg-[#f6f8fc] px-5 py-16 md:px-4 lg:px-12 lg:py-14">
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
      <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
        Mobile App Development Process
      </p>

      <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
        From idea to launch, our mobile app development roadmap
      </h2>

      <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
        We move from product discovery and user-flow planning to development,
        testing, store launch and continuous improvement so your app is built
        with clarity from the start.
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
            id="mobile-process-arrowhead"
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
          markerEnd="url(#mobile-process-arrowhead)"
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
          markerEnd="url(#mobile-process-arrowhead)"
        />
        <path
          d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613"
          stroke="#193175"
          strokeDasharray="10 12"
          strokeLinecap="round"
          strokeWidth="2.5"
          markerEnd="url(#mobile-process-arrowhead)"
        />
        <path
          d="M 392 613 L 1208 613"
          stroke="#193175"
          strokeDasharray="10 12"
          strokeLinecap="round"
          strokeWidth="2.5"
          markerEnd="url(#mobile-process-arrowhead)"
        />
      </svg>

      {processLayout.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group absolute z-10 w-[390px] -translate-x-1/2 text-center"
            style={{ left: item.left, top: item.top }}
          >
            <div className="mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-full border-2 border-[#193175] bg-[#edf3ff] shadow-[0_16px_42px_rgba(60,91,155,0.16)] transition duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)]">
              <Icon size={36} strokeWidth={2.25} className="text-[#193175]" />
            </div>

            <h3 className="mt-6 text-[30px] font-normal leading-[1.15] tracking-[-0.8px] text-black xl:text-[32px]">
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

      {/* SOLUTIONS */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Mobile App Solutions
              </p>

              <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
                Mobile apps for customer-facing and internal business use.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              We build mobile apps that support digital sales, bookings,
              service requests, field teams, payments, delivery tracking,
              learning experiences and internal business workflows.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {appSolutions.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[26px] border border-black/10 bg-[#f8faff] p-6 transition hover:-translate-y-1 hover:border-[#193175]/30 hover:bg-white hover:shadow-[0_22px_65px_rgba(60,91,155,0.1)]"
                >
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-full bg-[#193175]/10 transition group-hover:bg-[#193175]">
                    <Icon
                      size={24}
                      className="text-[#193175] transition group-hover:text-white"
                    />
                  </div>

                  <h3 className="text-[20px] font-normal tracking-[-0.3px]">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* APP TYPES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              App Types We Build
            </p>

            <h2 className="mx-auto max-w-210 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Choose the right app approach for your users and product goals.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {appTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_18px_55px_rgba(0,0,0,0.04)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#193175]/10">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="max-h-9 max-w-9 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <h3 className="text-[23px] font-normal tracking-[-0.4px]">
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
                Mobile app solutions designed around real business workflows.
              </h2>
            </div>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-3 text-[14px] font-semibold text-[#193175]"
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
                  <div className="flex items-center justify-between gap-5">
                    <h3 className="text-[24px] font-normal tracking-[-0.5px]">
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

      <IndustriesSection />

      {/* CTA */}
      <section className="lazy-section bg-white py-8">
        <div className="mx-auto max-w-450 px-4 lg:px-10">
          <div className="flex min-h-65 overflow-hidden bg-[#193175] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/CTA/App-CTA.jpg"
                alt="BrainADZ Live Mobile App Development"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Have a mobile app idea for your business?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Let BrainADZ Live turn your idea into a mobile application
                  with clean design, secure backend, practical features and
                  smooth user experience.
                </p>
              </div>

              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#193175] md:min-w-57.5"
>
                <span>Enquire Now</span>
                <ArrowRight size={26} strokeWidth={1.8} className="text-[26px] transition-transform group-hover:translate-x-1" />
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

      <h2 className="mx-auto max-w-210 text-[38px] font-normal leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
        Technologies we use for mobile app development
      </h2>

      <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
        We use the right mobile technologies, frameworks and backend tools to
        build Android, iOS and cross-platform apps with secure APIs, databases
        and admin systems.
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

      {/* WHY CHOOSE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why Choose BrainADZ Live
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              We build mobile apps around users, business workflows and long-term product growth.
            </h2>
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

      {/* MAINTENANCE */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                App Maintenance & Growth
              </p>

              <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
                Support that keeps your mobile app stable after launch.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              Mobile apps need regular updates after release. We support your
              app with issue fixing, OS compatibility, performance improvements,
              backend changes and new feature development.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {supportItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="grid grid-cols-[68px_1fr] gap-5 border-t border-black/10 pt-7"
                >
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
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              FAQ
            </p>

            <h2 className="mx-auto max-w-230 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about custom mobile app development.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
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
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
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
                                        src="/CTA/App-CTA.jpg"
                                        alt="BrainADZ Live Mobile App Development Services"
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover"
                                      />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
                                      <div className="max-w-145">
                                        <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                                          Ready to build a mobile app your users can rely on?
                                        </h3>
                                        <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                                          Let BrainADZ Live design and develop a mobile app with the right user flow, secure backend, integrations and long-term support.
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
