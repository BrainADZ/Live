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
    title: "Discovery & Requirement Mapping",
    desc: "We understand the business problem, users, current process, existing systems, constraints and the outcome the project needs to support.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Scope & Delivery Planning",
    desc: "We define the project scope, priorities, responsibilities, technical direction, delivery stages and the information needed before development begins.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "UX & Workflow Design",
    desc: "We map user journeys, screens, permissions and operational flows so the product is clear for users and practical for the team that will manage it.",
    icon: Users,
  },
  {
    number: "04",
    title: "Development & Integration",
    desc: "We build the agreed modules, interfaces, APIs and integrations in controlled development cycles with regular internal review.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Validation & Quality Checks",
    desc: "We test core workflows, permissions, integrations, responsive behaviour and agreed business scenarios before release.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Deployment & Improvement",
    desc: "We prepare the release, support handover and continue with fixes, updates or new requirements based on the agreed support scope.",
    icon: Rocket,
  },
];

const functionCards = [
  {
    title: "Business & Discovery Team",
    desc: "Clarifies the business problem, users, priorities, process gaps and the expected project outcome.",
  },
  {
    title: "Product & Design Team",
    desc: "Maps user flows, screens, interactions and design decisions before and during development.",
  },
  {
    title: "Engineering & Integration Team",
    desc: "Builds the application, APIs, data flows and system connections defined in the project scope.",
  },
  {
    title: "QA, Deployment & Support Team",
    desc: "Validates agreed workflows, supports release and handles post-launch work within the support plan.",
  },
];

const principles = [
  "Understand the problem before defining the solution",
  "Agree scope, priorities and responsibilities before build",
  "Review work at clear project checkpoints",
  "Design permissions and data access around real roles",
  "Test the workflows the product is expected to support",
  "Document handover, release and agreed support responsibilities",
];

export default function HowWeWorkPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <main className="bg-white text-[#161616]">
  {/* HERO SECTION */}
  <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
    <img
      src="/hero/work-function.webp"
      alt="Page Hero"
      className="absolute inset-0 h-full w-full object-cover"
    />

    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

    <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-4 lg:min-h-135 lg:px-12">
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
          How We Plan, Build and Deliver Projects
        </h1>
      </div>

      <div
        className="mt-auto pb-8 md:pb-9 lg:pb-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
          Our teams move from discovery and scope planning to design,
            development, validation, deployment and agreed post-launch support.
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
      <section className="px-5 py-22 md:px-4 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-450 grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
              Our Working Approach
            </p>

            <h2 className="text-[38px] font-normal leading-[1.1] tracking-[-1.5px] text-[#262626] md:text-[52px]">
              Every project starts with the problem, not the technology
            </h2>
          </div>

          <div>
            <p className="text-[18px] font-light leading-[1.8] text-[#525252] md:text-[20px]">
              At BrainADZ Live, we first understand what needs to change,
              who will use the solution and how the current process works. From
              there, we define the scope and move through design, development,
              validation, deployment and agreed post-launch work with clear
              responsibilities at each stage.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              <div className="border border-[#e5e5e5] p-6">
                <LineChart className="mb-5 text-[#193175]" size={30} />
                <h3 className="text-[32px] font-normal text-[#161616]">
                  6
                </h3>
                <p className="mt-2 text-[15px] font-light leading-[1.6] text-[#525252]">
                  Defined project delivery stages
                </p>
              </div>

              <div className="border border-[#e5e5e5] p-6">
                <Headphones className="mb-5 text-[#193175]" size={30} />
                <h3 className="text-[32px] font-normal text-[#161616]">
                  4
                </h3>
                <p className="mt-2 text-[15px] font-light leading-[1.6] text-[#525252]">
                  Cross-functional team functions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f7f8fb] px-5 py-22 md:px-4 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-450">
          <div className="mb-16 max-w-220">
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
              Our Process
            </p>

            <h2 className="text-[38px] font-normal leading-[1.1] tracking-[-1.5px] text-[#262626] md:text-[52px]">
              A six-stage process from requirement mapping to release
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group border border-[#e3e6ec] bg-white p-8 transition hover:-translate-y-1 hover:border-[#193175] hover:shadow-[0_22px_60px_rgba(0,0,0,0.08)]"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-[42px] font-light tracking-[-1.5px] text-[#d7dce8] transition group-hover:text-[#193175]">
                      {step.number}
                    </span>

                    <div className="flex h-13 w-13 items-center justify-center rounded-full bg-[#eef3ff] text-[#193175]">
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
      <section className="px-5 py-22 md:px-4 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-450 grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative">
            <img
              src="/about/TeamF.jpeg"
              alt="Team function"
              className="h-[520px] w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-white/85 p-6 backdrop-blur-xl">
              <p className="text-[15px] font-light leading-[1.7] text-[#525252]">
                Discovery, design, engineering and QA stay connected so project
                decisions do not get lost between separate teams.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
              Team Function
            </p>

            <h2 className="max-w-190 text-[38px] font-normal leading-[1.1] tracking-[-1.5px] text-[#262626] md:text-[52px]">
              Different functions stay connected through the project
            </h2>

            <div className="mt-10 space-y-5">
              {functionCards.map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-[#193175] bg-[#f7f8fb] px-6 py-5"
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
      <section className="bg-[#050505] px-5 py-22 text-white md:px-4 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-450 grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#8fb1ff]">
              Delivery Principles
            </p>

            <h2 className="text-[38px] font-normal leading-[1.1] tracking-[-1.5px] md:text-[52px]">
              The working principles behind our delivery process
            </h2>

            <p className="mt-7 text-[18px] font-light leading-[1.8] text-white/65">
              These principles help us keep decisions visible, responsibilities
              clear and project work connected to the agreed business need.
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
      <section className="px-5 py-22 md:px-4 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-450">
          <div className="mb-14 max-w-230">
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
              Operating Model
            </p>

            <h2 className="text-[38px] font-normal leading-[1.1] tracking-[-1.5px] text-[#262626] md:text-[52px]">
              A simple operating model: understand, build and improve
            </h2>
          </div>

          <div className="grid grid-cols-1 border border-[#e5e5e5] lg:grid-cols-3">
            <div className="border-b border-[#e5e5e5] p-8 lg:border-b-0 lg:border-r">
              <Database className="mb-8 text-[#193175]" size={34} />
              <h3 className="mb-4 text-[25px] font-normal tracking-[-0.5px]">
                Understand
              </h3>
              <p className="text-[16px] font-light leading-[1.75] text-[#525252]">
                We clarify the problem, users, current workflow, priorities,
                constraints and the scope the project needs to cover.
              </p>
            </div>

            <div className="border-b border-[#e5e5e5] p-8 lg:border-b-0 lg:border-r">
              <Code2 className="mb-8 text-[#193175]" size={34} />
              <h3 className="mb-4 text-[25px] font-normal tracking-[-0.5px]">
                Build
              </h3>
              <p className="text-[16px] font-light leading-[1.75] text-[#525252]">
                We design, develop, integrate and review the agreed product
                through controlled project stages and clear checkpoints.
              </p>
            </div>

            <div className="p-8">
              <Headphones className="mb-8 text-[#193175]" size={34} />
              <h3 className="mb-4 text-[25px] font-normal tracking-[-0.5px]">
                Improve
              </h3>
              <p className="text-[16px] font-light leading-[1.75] text-[#525252]">
                After release, we handle agreed fixes, enhancements, updates
                and support requirements based on how the product is being used.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="lazy-section bg-white py-8">
      <div className="mx-auto max-w-450 px-4 lg:px-10">
        <div
          className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75"
          data-aos="zoom-in"
        >
          {/* LEFT IMAGE */}
          <div className="hidden w-[32%] shrink-0 md:block">
            <img
              src="/CTA/home-cta.png"
              alt="How BrainADZ Live works with clients"
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
                Have a project that needs a clearer delivery plan?
              </h3>

              <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                Tell us what you are trying to build, improve or connect.
                We can start by understanding the requirement and defining the
                right next steps for the project.
              </p>
            </div>

            {/* BUTTON */}
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
