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
    title: "App Discovery",
    text: "We understand your idea, target users, features, business goals and app flow before planning the build.",
    icon: Search,
  },
  {
    title: "UI/UX Wireframing",
    text: "We create clean mobile-first screens, user journeys and clickable layouts for a smooth app experience.",
    icon: Smartphone,
  },
  {
    title: "App Architecture",
    text: "We plan the right structure for frontend, backend, database, APIs, security and future scalability.",
    icon: Workflow,
  },
  {
    title: "App Development",
    text: "We build Android, iOS or cross-platform apps with clean code, reusable components and stable features.",
    icon: Code2,
  },
  {
    title: "Testing & QA",
    text: "We test performance, crashes, usability, security, devices and real user scenarios before launch.",
    icon: ShieldCheck,
  },
  {
    title: "Launch & Support",
    text: "We help with deployment, store submission, updates, bug fixing and continuous app improvements.",
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
  { title: "Ecommerce Apps", icon: ShoppingCart },
  { title: "Booking Apps", icon: Bell },
  { title: "Delivery Apps", icon: Truck },
  { title: "Learning Apps", icon: GraduationCap },
  { title: "Healthcare Apps", icon: HeartPulse },
  { title: "Fintech Apps", icon: WalletCards },
  { title: "Logistics Apps", icon: MapPinned },
  { title: "Enterprise Apps", icon: Users },
];

const appTypes = [
  {
    title: "Android App Development",
    text: "Native and scalable Android apps for smartphones, tablets and business users.",
    icon: "/icons/Android.svg",
  },
  {
    title: "iOS App Development",
    text: "Smooth iPhone and iPad apps designed for Apple users and App Store launch.",
    icon: "/icons/Swift.svg",
  },
  {
    title: "Flutter App Development",
    text: "Cross-platform apps with one codebase for Android and iOS.",
    icon: "/icons/Flutter.svg",
  },
  {
    title: "React Native Apps",
    text: "Fast mobile apps using reusable components and modern app architecture.",
    icon: "/icons/React.svg",
  },
  {
    title: "Progressive Web Apps",
    text: "App-like web experiences that work smoothly across devices and browsers.",
    icon: "/icons/Next.js.svg",
  },
  {
    title: "Enterprise Mobile Apps",
    text: "Secure mobile apps for teams, workflows, reporting and internal operations.",
    icon: "/icons/NET.svg",
  },
];

const caseStudies = [
  {
    title: "Ecommerce Shopping App",
    image: "/services/hero/ecommerce-app.jpg",
  },
  {
    title: "Healthcare Appointment App",
    image: "/services/hero/healthcare-app.jpg",
  },
  {
    title: "Delivery Tracking App",
    image: "/services/hero/delivery-app.jpg",
  },
  {
    title: "Learning Management App",
    image: "/services/hero/learning-app.jpg",
  },
];

const whyChoose = [
  {
    title: "Mobile-First UX",
    text: "Every screen is planned for simple navigation, fast actions and better user engagement.",
  },
  {
    title: "Scalable Backend",
    text: "Your app is backed by secure APIs, clean database planning and growth-ready architecture.",
  },
  {
    title: "Secure App Flow",
    text: "We focus on secure login, protected data, payments, permissions and API communication.",
  },
  {
    title: "Store-Ready Delivery",
    text: "We prepare your app for smooth deployment, testing and app store submission.",
  },
];

const supportItems = [
  {
    title: "Crash Fixing",
    text: "Quick resolution of app crashes, bugs and device-specific issues.",
    icon: Bug,
  },
  {
    title: "OS Updates",
    text: "Keep your app compatible with latest Android and iOS versions.",
    icon: MonitorSmartphone,
  },
  {
    title: "Performance Monitoring",
    text: "Monitor speed, loading, uptime and user experience.",
    icon: Gauge,
  },
  {
    title: "Feature Enhancements",
    text: "Add new features, improve existing flows and grow your app.",
    icon: PackageCheck,
  },
  {
    title: "Ongoing Support",
    text: "Technical support for updates, improvements and maintenance.",
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
    a: "Yes. We build Android apps, iOS apps and cross-platform mobile apps depending on your business goals and budget.",
  },
  {
    q: "Which technology is best for my mobile app?",
    a: "It depends on the app features, timeline, performance needs and future scaling plan. We suggest the right technology after understanding your project.",
  },
  {
    q: "Can you build the backend and APIs also?",
    a: "Yes. We build secure backend systems, databases, admin panels and APIs required to run the mobile app smoothly.",
  },
  {
    q: "Do you help with app store publishing?",
    a: "Yes. We help prepare the app for Play Store and App Store submission with testing, build setup and required assets.",
  },
  {
    q: "Can you improve or rebuild my existing app?",
    a: "Yes. We can redesign UI, fix bugs, improve performance, add features and upgrade your existing mobile app.",
  },
  {
    q: "Do you provide maintenance after launch?",
    a: "Yes. We provide app maintenance, crash fixing, OS updates, performance improvements and feature upgrades.",
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
    src="/services/hero/mobile.jpeg"
    alt="Mobile App Development Services"
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
      <span className="text-white/90">Mobile App Development</span>
    </div>

    <div className="mt-12 max-w-205 md:mt-14">
      <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
        Mobile App Development Services
      </h1>
    </div>

    <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
      <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
        Powerful, secure and user-friendly mobile apps for iOS, Android and
        cross-platform experiences built around your business goals.
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

            <h2 className="max-w-170 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Build apps that deliver real impact, not just downloads.
            </h2>

            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              From idea to app store, we design and develop mobile applications
              that are fast, secure and built for growth. Whether it is a
              customer-facing app or an internal business app, we create
              solutions that solve real problems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Native & Cross-Platform Apps",
                text: "High-performance apps for iOS, Android and cross-platform users.",
                icon: Smartphone,
              },
              {
                title: "Backend + API Connected Apps",
                text: "Secure apps connected with dashboards, databases and powerful APIs.",
                icon: Code2,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-black/10 bg-[#f8faff] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.04)]"
                >
                  <div className="mb-6 flex h-15 w-15 items-center justify-center rounded-2xl bg-[#3C5B9B]/10">
                    <Icon size={28} className="text-[#3C5B9B]" />
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

{/* DEVELOPMENT PROCESS */}
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
        Development Process
      </p>

      <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
        Our Mobile App Development Process Roadmap
      </h2>

      <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
        From idea validation to app launch, we follow a clear connected process
        to build secure, scalable and user-friendly mobile applications.
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
                <div className="absolute left-11 top-18 h-[calc(100%+20px)] border-l-2 border-dashed border-[#3C5B9B]/45" />
              )}

              <div className="relative z-10 flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#3C5B9B] bg-[#edf3ff] transition duration-300 ease-out group-hover:-translate-y-1.5 group-hover:bg-white group-hover:shadow-[0_18px_42px_rgba(60,91,155,0.24)]">
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
            id="mobile-process-arrowhead"
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
          markerEnd="url(#mobile-process-arrowhead)"
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
          markerEnd="url(#mobile-process-arrowhead)"
        />
        <path
          d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613"
          stroke="#3C5B9B"
          strokeDasharray="10 12"
          strokeLinecap="round"
          strokeWidth="2.5"
          markerEnd="url(#mobile-process-arrowhead)"
        />
        <path
          d="M 392 613 L 1208 613"
          stroke="#3C5B9B"
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
            <div className="mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-full border-2 border-[#3C5B9B] bg-[#edf3ff] shadow-[0_16px_42px_rgba(60,91,155,0.16)] transition duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)]">
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

      {/* SOLUTIONS */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Mobile App Solutions
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Apps for different business needs.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              We build apps for customer engagement, digital sales, internal
              workflows, bookings, payments, learning, delivery and operational
              visibility.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {appSolutions.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[26px] border border-black/10 bg-[#f8faff] p-6 transition hover:-translate-y-1 hover:border-[#3C5B9B]/30 hover:bg-white hover:shadow-[0_22px_65px_rgba(60,91,155,0.1)]"
                >
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-full bg-[#3C5B9B]/10 transition group-hover:bg-[#3C5B9B]">
                    <Icon
                      size={24}
                      className="text-[#3C5B9B] transition group-hover:text-white"
                    />
                  </div>

                  <h3 className="text-[20px] font-light tracking-[-0.3px]">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* APP TYPES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              App Types We Build
            </p>

            <h2 className="mx-auto max-w-210 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Mobile applications built with the right technology.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {appTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_18px_55px_rgba(0,0,0,0.04)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3C5B9B]/10">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="max-h-9 max-w-9 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <h3 className="text-[23px] font-light tracking-[-0.4px]">
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
                App ideas designed for real business use.
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
                  <div className="flex items-center justify-between gap-5">
                    <h3 className="text-[24px] font-light tracking-[-0.5px]">
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

      <IndustriesSection />

      {/* CTA */}
      <section className="lazy-section bg-white py-12">
        <div className="mx-auto max-w-450 px-8 lg:px-10">
          <div className="flex min-h-65 overflow-hidden bg-[#3C5B9B] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/about.avif"
                alt="BrainADZ Live Mobile App Development"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Have an app idea for your business?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Let BrainADZ Live turn your idea into a powerful mobile
                  application with clean design, secure backend and smooth user
                  experience.
                </p>
              </div>

              <a
                href="/contact"
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition hover:bg-white hover:text-[#3C5B9B]"
              >
                <span>Enquire Now</span>
                <span className="text-[26px] transition-transform group-hover:translate-x-1">
                  →
                </span>
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
        Technologies powering modern mobile app development
      </h2>

      <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
        We use the right mobile technologies, frameworks and backend tools to
        build secure, scalable and high-performing apps for Android, iOS and
        cross-platform experiences.
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
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Why Choose BrainADZ Live
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              We build apps around users, performance and business growth.
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

      {/* MAINTENANCE */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                App Maintenance & Growth
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Support that keeps your app stable after launch.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              Mobile apps need regular care. We support your app with updates,
              monitoring, issue fixing, performance improvements and new feature
              development.
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
              Common questions about mobile app development.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-[26px] border bg-white transition ${
                  openFaq === index
                    ? "border-[#3C5B9B]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]"
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
      <section className="bg-white py-12">
        <div className="mx-auto max-w-450 px-8 lg:px-10">
          <div className="flex min-h-65 overflow-hidden bg-[#3C5B9B] md:min-h-75">
            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-150">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Ready to launch your mobile app?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Partner with BrainADZ Live and bring your mobile app idea to
                  life with a reliable development team.
                </p>
              </div>

              <a
                href="/contact"
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition hover:bg-white hover:text-[#3C5B9B]"
              >
                <span>Let’s Get Started</span>
                <span className="text-[26px] transition-transform group-hover:translate-x-1">
                  →
                </span>
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