/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useState, type SVGProps } from "react";
import PopupForm from "@/components/PopupForm";
import BrandCarousel from "@/components/home/BrandCarousel";
import TestimonialSection from "@/components/home/Testimonials";

type IconProps = SVGProps<SVGSVGElement>;

function ArrowRightIcon({ className, strokeWidth = 1.6, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

type Service = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
};

type Story = {
  title: string;
  description: string;
  image: string;
};

type NewsCard = {
  category: string;
  title: string;
  description: string;
};

type Success = {
  name: string;
  title: string;
  description: string;
};

const quickStories: Story[] = [
  {
    title: "Plan a new software or platform initiative",
    description:
      "Clarify the business problem, users, workflows, scope and technical direction before development begins.",
    image: "/about/story1.jpeg",
  },
  {
    title: "Improve an existing application or process",
    description:
      "Identify what should be retained, modernized, integrated or rebuilt based on current limitations and priorities.",
    image: "/about/story2.jpeg",
  },
  {
    title: "Connect systems that currently work in isolation",
    description:
      "Map data flows, APIs, responsibilities and integration points across CRM, ERP, applications and third-party tools.",
    image: "/about/story1.jpeg",
  },
  {
    title: "Plan digital signage and customer experiences",
    description:
      "Define the right mix of displays, kiosks, content software and operational workflows for a physical environment.",
    image: "/about/story2.jpeg",
  },
];

const services: Service[] = [
  {
    title: "Software & Platform Planning",
    description:
      "Define product scope, users, workflows, modules and technical direction for custom software, web apps, mobile apps and SaaS platforms.",
    icon: "/consulting/software.svg",
    iconAlt: "Software and platform planning",
  },
  {
    title: "Automation, Data & AI Advisory",
    description:
      "Review repetitive work, reporting needs and available data to identify where automation or AI-assisted features may be practical.",
    icon: "/consulting/automation.svg",
    iconAlt: "Automation data and AI advisory",
  },
  {
    title: "Application & Cloud Modernization",
    description:
      "Assess existing applications and infrastructure to plan upgrades, migration, refactoring, integrations or phased modernization.",
    icon: "/consulting/cloud-app.svg",
    iconAlt: "Application and cloud modernization",
  },
  {
    title: "CRM & ERP Process Planning",
    description:
      "Map sales, customer, inventory, finance and operational workflows before configuring or developing the right CRM or ERP solution.",
    icon: "/consulting/crm.svg",
    iconAlt: "CRM and ERP process planning",
  },
  {
    title: "Digital Signage Experience Planning",
    description:
      "Plan display types, screen placement, content control, kiosk interactions and management workflows for signage deployments.",
    icon: "/consulting/digital-signage.svg",
    iconAlt: "Digital signage experience planning",
  },
  {
    title: "Integration & Solution Architecture",
    description:
      "Map how applications, APIs, platforms and devices should exchange data so the overall solution can work as one connected system.",
    icon: "/consulting/integration.svg",
    iconAlt: "Integration and solution architecture",
  },
];

const approachSteps = [
  {
    title: "Understand",
    description:
      "Review the business problem, users, current workflow, existing tools, constraints and the outcome the project needs to support.",
  },
  {
    title: "Define",
    description:
      "Translate the requirement into priorities, scope, solution options, dependencies and a practical delivery direction.",
  },
  {
    title: "Plan",
    description:
      "Map workflows, architecture, integrations, responsibilities and implementation stages before major build work begins.",
  },
  {
    title: "Execute & Review",
    description:
      "Move into design, development or deployment with agreed checkpoints, validation and improvements based on the project scope.",
  },
];

const newsCards: NewsCard[] = [
  {
    category: "Digital Transformation",
    title: "Building connected digital ecosystems",
    description:
      "How businesses can connect software, platforms, devices, data, and workflows into one scalable technology environment.",
  },
  {
    category: "Enterprise Systems",
    title: "Moving beyond disconnected business tools",
    description:
      "Why integrated ERP, CRM, APIs, and automation create better visibility and stronger operational control.",
  },
  {
    category: "Digital Experiences",
    title: "The future of connected displays and kiosks",
    description:
      "How smart displays, self-service kiosks, and cloud signage platforms are transforming physical customer experiences.",
  },
  {
    category: "AI & Automation",
    title: "From repetitive processes to intelligent workflows",
    description:
      "How practical automation and AI can help businesses reduce manual work and operate more efficiently.",
  },
];

const customerSuccess: Success[] = [
  {
    name: "Retail & Customer Experience",
    title: "Connected digital experience ecosystem",
    description:
      "Combining digital standees, interactive displays, kiosks, and centralized content management to create more engaging customer journeys.",
  },
  {
    name: "Enterprise Operations",
    title: "Integrated ERP and CRM systems",
    description:
      "Connecting teams, customers, inventory, sales, finance, and reporting through scalable business platforms.",
  },
  {
    name: "Hospitality & Service Businesses",
    title: "Smarter self-service experiences",
    description:
      "Using kiosks, applications, dashboards, and connected workflows to improve service speed and operational visibility.",
  },
  {
    name: "Growing Digital Businesses",
    title: "Scalable software and cloud platforms",
    description:
      "Building web applications, SaaS platforms, APIs, cloud systems, and automation designed to grow with the business.",
  },
];

const partners = [
  "AWS",
  "Google Cloud",
  "Microsoft Azure",
  "Salesforce",
  "Oracle",
  "SAP",
  "Adobe",
];

const outcomes = [
  "Clear digital transformation roadmap",
  "Scalable software architecture",
  "Connected business systems",
  "Smarter automation and workflows",
  "Better operational visibility",
  "Long-term technology support",
];

const insightIcons = {
  strategicPartnerships: "/consulting/solution.svg",
  aiNewsroom: "/consulting/automate-integration.svg",
  recognition: "/consulting/customer-experience.svg",
};

export default function ConsultingPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <main className="bg-white text-[#161616]">
      {/* HERO */}
    <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
      <img
        src="/hero/consulting.jpg"
        alt="Consulting BrainADZ Live"
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

          <span className="text-white/90">Consulting</span>
        </div>

        <div
          className="mt-12 max-w-205 md:mt-14"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
            Technology Consulting for Practical Business Decisions
          </h1>
        </div>

        <div
          className="mt-auto pb-8 md:pb-9 lg:pb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
            Get clarity before you invest in software, platforms, integrations,
            cloud modernization or digital signage technology.
          </p>

          <div className="mt-8">
            <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
              Discuss Your Requirement
              <span className="text-[20px] leading-none">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>

      {/* ORCHESTRATE AI */}
      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -right-45 -top-40 h-105 w-105 rounded-full bg-[#193175]/[0.07] blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-450">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div data-aos="fade-right">
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                Consulting Before Execution
              </p>

              <h2 className="max-w-180 text-[46px] font-light leading-[1.08] tracking-[-2px] text-[#193175] md:text-[66px] lg:text-[82px]">
                Turn business requirements into a practical technology plan
              </h2>
            </div>

            <div data-aos="fade-left" data-aos-delay="100">
              <p className="max-w-220 text-[20px] font-light leading-[1.65] tracking-[-0.4px] text-[#262626] md:text-[24px]">
                BrainADZ Live helps businesses clarify technology decisions
                before major design, development or deployment work begins.
              </p>

              <p className="mt-7 max-w-210 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
                We review the problem, current process, existing systems and
                delivery constraints, then define what should be built,
                modernized, connected or deployed and in what order.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { value: "6", label: "Consulting focus areas" },
                  { value: "4", label: "Consulting and delivery stages" },
                  { value: "3", label: "Core solution categories" },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    data-aos="card-reveal"
                    data-aos-delay={index * 100}
                    className="rounded-2xl border border-[#dfe6f1] bg-[#f8faff] p-6"
                  >
                    <p className="text-[36px] font-light leading-none tracking-[-1.3px] text-[#193175]">
                      {item.value}
                    </p>

                    <p className="mt-3 text-[15px] font-light leading-[1.55] text-[#616161]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STORY CARDS */}
      <section className="bg-white px-5 pb-20 md:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-450">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {quickStories.map((story, index) => (
              <Link
                key={story.title}
                href="#services"
                data-aos="card-reveal"
                data-aos-delay={(index % 4) * 80}
                className="group grid min-h-33 grid-cols-[92px_1fr] gap-4 rounded-md border border-[#dfe6f1] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#193175] hover:shadow-[0_18px_45px_rgba(22,22,22,0.08)]"
              >
                <div className="relative overflow-hidden rounded-sm bg-[#eef2f8]">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full min-h-22.5 w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-[15px] font-light leading-[1.45] text-[#262626] transition group-hover:text-[#193175]">
                      {story.title}
                    </h3>

                    <p className="mt-2 hidden text-[13px] font-light leading-[1.55] text-[#616161] 2xl:block">
                      {story.description}
                    </p>
                  </div>

                  <ArrowRightIcon className="ml-auto mt-3 h-4.5 w-4.5 text-[#193175] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="relative overflow-hidden bg-[#f8faff] px-5 py-20 md:px-8 lg:px-12 lg:py-28"
      >
        <div className="pointer-events-none absolute -right-45 -top-40 h-105 w-105 rounded-full bg-[#193175]/[0.07] blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-450">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div data-aos="fade-right">
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                Consulting Services
              </p>

              <h2 className="max-w-195 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Consulting focused on scope, systems and practical next steps
              </h2>
            </div>

            <p
              className="max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              We help you make clearer decisions across software, CRM and ERP,
              integrations, modernization, automation and digital signage before
              committing to a larger implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              return (
                <div
                  key={service.title}
                  data-aos="card-reveal"
                  data-aos-delay={(index % 3) * 100}
                  className="group relative min-h-70 overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-white p-7 shadow-[0_18px_60px_rgba(22,22,22,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cbd7ea] hover:shadow-[0_24px_75px_rgba(22,22,22,0.075)] md:p-8"
                >
                  <div className="absolute -right-13.75 -top-13.75 h-37.5 w-37.5 rounded-full bg-[#193175]/[0.07] transition duration-300 group-hover:scale-125" />


                  <div className="relative z-10 flex h-16 w-16 items-center justify-center">
                    <img
                      src={service.icon}
                      alt={service.iconAlt}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="relative z-10 mt-8 text-[25px] font-light leading-tight tracking-[-0.6px] text-[#262626] transition group-hover:text-[#193175] md:text-[28px]">
                    {service.title}
                  </h3>

                  <p className="relative z-10 mt-4 max-w-130 text-[15px] font-light leading-[1.75] text-[#616161] md:text-[16px]">
                    {service.description}
                  </p>

                  <span className="absolute bottom-0 left-0 h-0.75 w-0 bg-[#193175] transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-white px-5 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-450">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div data-aos="fade-right">
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                Our Approach
              </p>

              <h2 className="max-w-180 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                From unclear requirements to an executable project direction
              </h2>

              <p className="mt-6 max-w-170 text-[17px] font-light leading-[1.75] text-[#525252] md:text-[19px]">
                Our approach keeps the business problem, users, systems,
                dependencies and delivery responsibilities visible before and
                during execution.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {approachSteps.map((step, index) => (
                <div
                  key={step.title}
                  data-aos="card-reveal"
                  data-aos-delay={(index % 2) * 100}
                  className="rounded-[18px] border border-[#dfe6f1] bg-[#f8faff] p-7 transition hover:bg-white hover:shadow-[0_20px_60px_rgba(22,22,22,0.06)] md:p-8"
                >
                  <div className="mb-8 flex h-13 w-13 items-center justify-center rounded-full bg-[#193175] text-[15px] font-light text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-[26px] font-light leading-[1.2] tracking-[-0.6px] text-[#262626]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-[15px] font-light leading-[1.75] text-[#616161] md:text-[16px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LATEST NEWS AND INSIGHTS */}
      <section
        id="insights"
        className="bg-white px-5 pb-20 md:px-8 lg:px-12 lg:pb-28"
      >
        <div className="mx-auto max-w-450">
          <h2
            className="mb-12 text-[42px] font-light leading-[1.1] tracking-[-1.8px] text-[#262626] md:text-[58px] lg:text-[68px]"
            data-aos="fade-up"
          >
            Consulting insights and technology perspectives
          </h2>

          <div
            className="grid grid-cols-1 overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-white shadow-[0_24px_80px_rgba(22,22,22,0.06)] lg:grid-cols-[1fr_1fr]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative min-h-130 overflow-hidden bg-[#eef2f8] lg:min-h-160">
              <div className="absolute inset-0 flex items-center justify-center text-[15px] font-light text-[#8d8d8d]">
                Insight image will appear here
              </div>

              <img
                src="/about/Insight.jpeg"
                alt="BrainADZ consulting insight"
                className="relative z-10 h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute bottom-0 right-0 z-20 max-w-107.5 bg-white p-7 shadow-[0_18px_50px_rgba(22,22,22,0.12)]">
                <p className="text-[14px] font-light text-[#616161]">
                  Technology Planning Insight
                </p>

                <h3 className="mt-3 text-[22px] font-light leading-[1.35] tracking-[-0.4px] text-[#262626]">
                  What to define before starting a custom software project
                </h3>

                <Link
                  href="/blog"
                  className="mt-8 inline-flex items-center gap-3 text-[15px] font-light text-[#193175] hover:underline"
                >
                  Read the insight
                  <ArrowRightIcon className="h-4.5 w-4.5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative min-h-80 border-b border-[#dfe6f1] p-8 md:col-span-2">

                <div className="mb-8 flex h-27.5 w-27.5 items-center justify-center">
                  <img
                    src={insightIcons.strategicPartnerships}
                    alt="Strategic partnerships"
                    className="h-full w-full object-contain"
                  />
                </div>

                <p className="text-[13px] font-light text-[#616161]">
                  Solution Architecture
                </p>

                <h3 className="mt-3 max-w-162.5 text-[24px] font-light leading-[1.35] tracking-[-0.5px] text-[#262626]">
                  Good technology decisions start with clear workflows,
                  system boundaries and ownership of data.
                </h3>

                <Link
                  href="/blog"
                  className="mt-8 inline-flex items-center gap-3 text-[15px] font-light text-[#193175] hover:underline"
                >
                  Read more
                  <ArrowRightIcon className="h-4.5 w-4.5" />
                </Link>
              </div>

              <div className="border-b border-[#dfe6f1] p-8 md:border-r">
                <div className="mb-8 flex h-17 w-17 items-center justify-center">
                  <img
                    src={insightIcons.aiNewsroom}
                    alt="Automation and integration insight"
                    className="h-full w-full object-contain"
                  />
                </div>

                <p className="text-[13px] font-light text-[#616161]">
                  Automation & Integration
                </p>

                <h3 className="mt-3 text-[20px] font-light leading-[1.45] text-[#262626]">
                  Where automation can reduce repetitive work without adding
                  unnecessary system complexity.
                </h3>

                <Link
                  href="/blog"
                  className="mt-8 inline-flex items-center gap-3 text-[15px] font-light text-[#193175] hover:underline"
                >
                  Read more
                  <ArrowRightIcon className="h-4.5 w-4.5" />
                </Link>
              </div>

              <div className="border-b border-[#dfe6f1] p-8">
                <div className="mb-8 flex h-17 w-17 items-center justify-center">
                  <img
                    src={insightIcons.recognition}
                    alt="Customer experience technology insight"
                    className="h-full w-full object-contain"
                  />
                </div>

                <p className="text-[13px] font-light text-[#616161]">
                  Customer Experience
                </p>

                <h3 className="mt-3 text-[20px] font-light leading-[1.45] text-[#262626]">
                  Choosing the right mix of software, kiosks and displays for
                  a customer-facing environment.
                </h3>

                <Link
                  href="/blog"
                  className="mt-8 inline-flex items-center gap-3 text-[15px] font-light text-[#193175] hover:underline"
                >
                  Read more
                  <ArrowRightIcon className="h-4.5 w-4.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {newsCards.map((item, index) => (
              <Link
                key={item.title}
                href="/blog"
                data-aos="card-reveal"
                data-aos-delay={(index % 4) * 100}
                className="group min-h-62.5 rounded-[10px] bg-[linear-gradient(180deg,#193175_0%,#124f88_52%,#087f7b_100%)] p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(60,91,155,0.24)]"
              >
                <p className="text-[13px] font-light text-white/75">
                  {item.category}
                </p>

                <h3 className="mt-4 text-[22px] font-light leading-[1.35] tracking-[-0.5px]">
                  {item.title}
                </h3>

                <p className="mt-10 text-[14px] font-light leading-[1.7] text-white/78">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center justify-between text-[14px] font-light">
                  <span>Read more</span>
                  <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div> */}
        </div>
      </section>

     <BrandCarousel/>

     <TestimonialSection/>

      {/* FINAL CTA */}
            <section className="lazy-section bg-white py-12">
              <div className="mx-auto max-w-450 px-8 lg:px-10">
                <div
                  className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75"
                  data-aos="zoom-in"
                >
                  {/* LEFT IMAGE */}
                  <div className="hidden w-[32%] shrink-0 md:block">
                    <img
                      src="/about.avif"
                      alt="BrainADZ Live technology consulting"
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
                        Need clarity before you start a technology project?
                      </h3>
      
                      <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                        Share the problem, current process and systems you are
                        working with. We can help define the right scope,
                        priorities and next steps before execution.
                      </p>
                    </div>
      
                    {/* BUTTON */}
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