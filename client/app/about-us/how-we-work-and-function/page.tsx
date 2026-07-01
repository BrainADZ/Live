/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link"
import PopupForm from "@/components/PopupForm";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Database,
  Headphones,
  Layers3,
  LineChart,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useState } from "react";

const processSteps = [
  {
    number: "01",
    title: "Understanding Your Business",
    desc: "We begin by understanding your goals, audience, current systems, operational gaps, and the outcomes your business wants to achieve.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Strategy & Planning",
    desc: "Our team creates a clear execution plan with scope, timeline, technology direction, user flow, and measurable delivery milestones.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Design & Experience Mapping",
    desc: "We design user journeys, wireframes, interfaces, and experience flows that are simple, practical, and aligned with real users.",
    icon: Users,
  },
  {
    number: "04",
    title: "Development & Integration",
    desc: "Our engineering team builds secure, scalable, and performance-focused systems using modern development practices.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Testing & Quality Checks",
    desc: "Every feature goes through functionality, performance, security, device, and user experience testing before launch.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Launch & Continuous Support",
    desc: "After launch, we help with monitoring, maintenance, improvements, upgrades, and long-term technical support.",
    icon: Rocket,
  },
];

const functionCards = [
  {
    title: "Business & Consulting Team",
    desc: "Converts your business requirement into a clear digital roadmap.",
  },
  {
    title: "UI/UX & Product Team",
    desc: "Creates simple, modern, and user-friendly product experiences.",
  },
  {
    title: "Development Team",
    desc: "Builds reliable software, apps, platforms, integrations, and digital products.",
  },
  {
    title: "QA & Support Team",
    desc: "Tests, improves, maintains, and supports your solution after delivery.",
  },
];

const principles = [
  "Clear communication at every stage",
  "Transparent planning and timelines",
  "Scalable and future-ready architecture",
  "Security-first development approach",
  "Practical design focused on real users",
  "Long-term support after project launch",
];

export default function HowWeWorkPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <main className="bg-white text-[#161616]">
  {/* HERO SECTION */}
  <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
    <img
      src="/about/HwwF.jpeg"
      alt="Page Hero"
      className="absolute inset-0 h-full w-full object-cover"
    />

    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

    <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-8 lg:min-h-135 lg:px-12">
      <div
        className="flex items-center gap-3 text-[16px] font-light md:text-[18px]"
        data-aos="fade-up"
      >
        <Link href="/" className="text-[#6da0ff] hover:underline">
          Home
        </Link>
        <span className="text-white/80">/</span>
        <span className="text-white/90">How We Work And Function</span>
      </div>

      <div
        className="mt-12 max-w-205 md:mt-14"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
          How We Work And Function
        </h1>
      </div>

      <div
        className="mt-auto pb-8 md:pb-9 lg:pb-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
          We combine strategy, design, engineering, testing, and support to
            deliver software, platforms, and digital signage solutions with
            clarity and control.
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
      <section className="px-5 py-22 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-450 grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
              Our Working System
            </p>

            <h2 className="text-[38px] font-light leading-[1.1] tracking-[-1.5px] text-[#262626] md:text-[52px]">
              We work with clarity, process, and responsibility
            </h2>
          </div>

          <div>
            <p className="text-[18px] font-light leading-[1.8] text-[#525252] md:text-[20px]">
              At BrainADZLive, every project starts with understanding the
              client’s business problem, not just the technical requirement. Our
              team works across research, planning, design, development, testing,
              deployment, and support so the final solution is useful,
              scalable, and easy to manage.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              <div className="border border-[#e5e5e5] p-6">
                <LineChart className="mb-5 text-[#3c5b9b]" size={30} />
                <h3 className="text-[32px] font-light text-[#161616]">
                  360°
                </h3>
                <p className="mt-2 text-[15px] font-light leading-[1.6] text-[#525252]">
                  End-to-end project approach
                </p>
              </div>

              <div className="border border-[#e5e5e5] p-6">
                <Headphones className="mb-5 text-[#3c5b9b]" size={30} />
                <h3 className="text-[32px] font-light text-[#161616]">
                  24/7
                </h3>
                <p className="mt-2 text-[15px] font-light leading-[1.6] text-[#525252]">
                  Support-focused delivery mindset
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f7f8fb] px-5 py-22 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-450">
          <div className="mb-16 max-w-220">
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
              Our Process
            </p>

            <h2 className="text-[38px] font-light leading-[1.1] tracking-[-1.5px] text-[#262626] md:text-[52px]">
              From first discussion to final launch, every stage has a purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group border border-[#e3e6ec] bg-white p-8 transition hover:-translate-y-1 hover:border-[#3c5b9b] hover:shadow-[0_22px_60px_rgba(0,0,0,0.08)]"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-[42px] font-light tracking-[-1.5px] text-[#d7dce8] transition group-hover:text-[#3c5b9b]">
                      {step.number}
                    </span>

                    <div className="flex h-13 w-13 items-center justify-center rounded-full bg-[#eef3ff] text-[#3c5b9b]">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="mb-4 text-[24px] font-normal tracking-[-0.5px] text-[#161616]">
                    {step.title}
                  </h3>

                  <p className="text-[16px] font-light leading-[1.75] text-[#525252]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW OUR TEAMS FUNCTION */}
      <section className="px-5 py-22 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-450 grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative">
            <img
              src="/about/TeamF.jpeg"
              alt="Team function"
              className="h-[520px] w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-white/85 p-6 backdrop-blur-xl">
              <p className="text-[15px] font-light leading-[1.7] text-[#525252]">
                Different teams work together with one shared goal: building
                reliable digital solutions that support your business growth.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
              Team Function
            </p>

            <h2 className="max-w-190 text-[38px] font-light leading-[1.1] tracking-[-1.5px] text-[#262626] md:text-[52px]">
              Our teams work together, not separately
            </h2>

            <div className="mt-10 space-y-5">
              {functionCards.map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-[#3c5b9b] bg-[#f7f8fb] px-6 py-5"
                >
                  <h3 className="text-[21px] font-normal tracking-[-0.4px] text-[#161616]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[16px] font-light leading-[1.7] text-[#525252]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY PRINCIPLES */}
      <section className="bg-[#050505] px-5 py-22 text-white md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-450 grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#8fb1ff]">
              Delivery Principles
            </p>

            <h2 className="text-[38px] font-light leading-[1.1] tracking-[-1.5px] md:text-[52px]">
              The standards we follow in every project
            </h2>

            <p className="mt-7 text-[18px] font-light leading-[1.8] text-white/65">
              Our process is built to reduce confusion, improve quality, and
              keep every stakeholder aligned from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {principles.map((item) => (
              <div
                key={item}
                className="flex gap-4 border border-white/10 bg-white/[0.04] p-5"
              >
                <CheckCircle2
                  size={22}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0 text-[#8fb1ff]"
                />

                <p className="text-[16px] font-light leading-[1.65] text-white/78">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATING MODEL */}
      <section className="px-5 py-22 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-450">
          <div className="mb-14 max-w-230">
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
              Operating Model
            </p>

            <h2 className="text-[38px] font-light leading-[1.1] tracking-[-1.5px] text-[#262626] md:text-[52px]">
              A balanced system between business clarity, technology, and
              support
            </h2>
          </div>

          <div className="grid grid-cols-1 border border-[#e5e5e5] lg:grid-cols-3">
            <div className="border-b border-[#e5e5e5] p-8 lg:border-b-0 lg:border-r">
              <Database className="mb-8 text-[#3c5b9b]" size={34} />
              <h3 className="mb-4 text-[25px] font-normal tracking-[-0.5px]">
                Plan
              </h3>
              <p className="text-[16px] font-light leading-[1.75] text-[#525252]">
                We define the business goal, project scope, technical
                requirements, timeline, and success metrics.
              </p>
            </div>

            <div className="border-b border-[#e5e5e5] p-8 lg:border-b-0 lg:border-r">
              <Code2 className="mb-8 text-[#3c5b9b]" size={34} />
              <h3 className="mb-4 text-[25px] font-normal tracking-[-0.5px]">
                Build
              </h3>
              <p className="text-[16px] font-light leading-[1.75] text-[#525252]">
                We design, develop, integrate, test, and improve the product
                through controlled development cycles.
              </p>
            </div>

            <div className="p-8">
              <Headphones className="mb-8 text-[#3c5b9b]" size={34} />
              <h3 className="mb-4 text-[25px] font-normal tracking-[-0.5px]">
                Support
              </h3>
              <p className="text-[16px] font-light leading-[1.75] text-[#525252]">
                We continue with maintenance, optimization, updates, monitoring,
                and long-term technical assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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