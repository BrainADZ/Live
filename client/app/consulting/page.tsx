/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import CtaSection from "@/components/home/CTA";
import type { ComponentType, SVGProps } from "react";

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

function PlayIcon({ className, strokeWidth = 1.5, ...props }: IconProps) {
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
      <path d="M8 5v14l11-7-11-7z" />
    </svg>
  );
}

function BrainIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
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
      <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5.2A3.5 3.5 0 0 0 8 18h1" />
      <path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5.2A3.5 3.5 0 0 1 16 18h-1" />
      <path d="M12 3v18" />
      <path d="M8 9h4" />
      <path d="M12 9h4" />
      <path d="M8 14h4" />
      <path d="M12 14h4" />
    </svg>
  );
}

function CloudIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
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
      <path d="M17.5 18H8a5 5 0 1 1 1.1-9.88A6.5 6.5 0 0 1 21 12.5 3.5 3.5 0 0 1 17.5 18z" />
    </svg>
  );
}

function DataIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
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
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5" />
      <path d="M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </svg>
  );
}

function AutomationIcon({
  className,
  strokeWidth = 1.4,
  ...props
}: IconProps) {
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
      <path d="M12 2v3" />
      <path d="M12 19v3" />
      <path d="M4.93 4.93l2.12 2.12" />
      <path d="M16.95 16.95l2.12 2.12" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />
      <path d="M4.93 19.07l2.12-2.12" />
      <path d="M16.95 7.05l2.12-2.12" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function SecurityIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-5" />
    </svg>
  );
}

function StrategyIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
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
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.6" />
      <path d="M18.4 5.6 21 3" />
      <path d="M21 3h-4" />
      <path d="M21 3v4" />
    </svg>
  );
}

function PeopleIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CheckIcon({ className, strokeWidth = 1.6, ...props }: IconProps) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

type Service = {
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
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
    title: "Reimagine finance to be AI-first",
    description: "Strategy, UX and smart digital systems for modern business.",
    image: "/about/story1.jpeg",
  },
  {
    title: "Deliver peak performance and user satisfaction",
    description: "Improve operations with connected dashboards and workflows.",
    image: "/about/story2.jpeg",
  },
  {
    title: "Accelerate reinvention with hybrid cloud and AI",
    description: "Build scalable platforms that connect people and processes.",
    image: "/about/story1.jpeg",
  },
  {
    title: "Modernize your data estate and unlock value",
    description: "Turn scattered information into decision-ready intelligence.",
    image: "/about/story2.jpeg",
  },
];

const services: Service[] = [
  {
    title: "AI strategy and adoption",
    description:
      "Identify practical AI use cases, automation opportunities and roadmap priorities for measurable business outcomes.",
    icon: BrainIcon,
  },
  {
    title: "Data and analytics consulting",
    description:
      "Design dashboards, reporting systems and data workflows that help teams make faster decisions.",
    icon: DataIcon,
  },
  {
    title: "Automation consulting",
    description:
      "Reduce repetitive tasks with workflow automation, integrations and intelligent business processes.",
    icon: AutomationIcon,
  },
  {
    title: "Cloud and platform modernization",
    description:
      "Modernize business applications, infrastructure and digital platforms for better scale and reliability.",
    icon: CloudIcon,
  },
  {
    title: "Security and governance",
    description:
      "Build safer digital systems with better access control, monitoring, process clarity and risk-aware execution.",
    icon: SecurityIcon,
  },
  {
    title: "Digital product consulting",
    description:
      "Plan, design and deliver websites, dashboards, kiosks, smart displays and business software experiences.",
    icon: StrategyIcon,
  },
];

const approachSteps = [
  {
    title: "Advise",
    description:
      "Understand your business goals, pain points, users, current systems and measurable success criteria.",
  },
  {
    title: "Design",
    description:
      "Create solution architecture, user journeys, automation flows and implementation roadmap.",
  },
  {
    title: "Build",
    description:
      "Develop digital platforms, dashboards, integrations, AI workflows and smart display solutions.",
  },
  {
    title: "Operate",
    description:
      "Support deployment, training, optimization, monitoring and continuous improvement.",
  },
];

const newsCards: NewsCard[] = [
  {
    category: "AI transformation",
    title: "5 plays for AI-first transformation",
    description:
      "A practical model designed around agentic workflows and business impact.",
  },
  {
    category: "Automation",
    title: "Agentic AI workflows and enterprise operations",
    description:
      "How to build interconnected systems designed around intelligent workflows.",
  },
  {
    category: "Security",
    title: "Securing AI at scale",
    description:
      "Modern security models for businesses adopting AI, automation and cloud.",
  },
  {
    category: "Future business",
    title: "The enterprise in 2030",
    description:
      "AI will not just enhance the business model. It will become part of it.",
  },
];

const customerSuccess: Success[] = [
  {
    name: "Retail Experience",
    title: "Smart display transformation",
    description:
      "Improved store engagement with digital standees, content workflows and centralized display management.",
  },
  {
    name: "Healthcare Operations",
    title: "Patient-first digital systems",
    description:
      "Created smoother service experiences with better dashboards, automation and communication tools.",
  },
  {
    name: "Education Platform",
    title: "Learning platform modernization",
    description:
      "Helped modernize online learning flows, student dashboards and content delivery systems.",
  },
  {
    name: "Enterprise Operations",
    title: "Workflow automation",
    description:
      "Reduced manual work with connected tools, smarter processes and decision-ready reporting.",
  },
];

const partners = [
  "AWS",
  "Google Cloud",
  "Microsoft",
  "Salesforce",
  "Oracle",
  "SAP",
  "Adobe",
];

const outcomes = [
  "Clear consulting roadmap",
  "AI and automation strategy",
  "Digital product execution",
  "Better business visibility",
  "Scalable technology systems",
  "Long-term support approach",
];

export default function ConsultingPage() {
  return (
    <main className="bg-white text-[#161616]">
      {/* HERO */}
    <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
      <img
        src="/hero/consultinghero.jpg"
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

          <span className="text-white/90">About</span>
        </div>

        <div
          className="mt-12 max-w-205 md:mt-14"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
            Consulting BrainADZ Live
          </h1>
        </div>

        <div
          className="mt-auto pb-8 md:pb-9 lg:pb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
            Build smarter business systems with AI, automation, software,
                cloud, data, kiosks, digital standees and interactive display
                solutions.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#3C5B9B] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
            >
              Explore services
              <span className="text-[20px] leading-none">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>

      {/* ORCHESTRATE AI */}
      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -right-45 -top-40 h-105 w-105 rounded-full bg-[#3c5b9b]/[0.07] blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-450">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div data-aos="fade-right">
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
                Consulting That Executes
              </p>

              <h2 className="max-w-180 text-[46px] font-light leading-[1.08] tracking-[-2px] text-[#3c5b9b] md:text-[66px] lg:text-[82px]">
                Orchestrate AI at scale
              </h2>
            </div>

            <div data-aos="fade-left" data-aos-delay="100">
              <p className="max-w-220 text-[20px] font-light leading-[1.65] tracking-[-0.4px] text-[#262626] md:text-[24px]">
                BrainADZ Consulting helps businesses move from ideas to
                execution by combining strategy, software engineering,
                automation, AI, data and digital infrastructure.
              </p>

              <p className="mt-7 max-w-210 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
                We partner directly with clients to advise, design, build and
                operate digital systems that improve productivity, customer
                engagement, operational visibility and business performance.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { value: "360°", label: "Strategy to delivery" },
                  { value: "AI", label: "Automation-first systems" },
                  { value: "Live", label: "Business-ready execution" },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    data-aos="card-reveal"
                    data-aos-delay={index * 100}
                    className="rounded-2xl border border-[#dfe6f1] bg-[#f8faff] p-6"
                  >
                    <p className="text-[36px] font-light leading-none tracking-[-1.3px] text-[#3c5b9b]">
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
                className="group grid min-h-33 grid-cols-[92px_1fr] gap-4 rounded-md border border-[#dfe6f1] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#3c5b9b] hover:shadow-[0_18px_45px_rgba(22,22,22,0.08)]"
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
                    <h3 className="text-[15px] font-light leading-[1.45] text-[#262626] transition group-hover:text-[#3c5b9b]">
                      {story.title}
                    </h3>

                    <p className="mt-2 hidden text-[13px] font-light leading-[1.55] text-[#616161] 2xl:block">
                      {story.description}
                    </p>
                  </div>

                  <ArrowRightIcon className="ml-auto mt-3 h-4.5 w-4.5 text-[#3c5b9b] transition-transform duration-300 group-hover:translate-x-1" />
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
        <div className="pointer-events-none absolute -right-45 -top-40 h-105 w-105 rounded-full bg-[#3c5b9b]/[0.07] blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-450">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div data-aos="fade-right">
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
                Consulting Services
              </p>

              <h2 className="max-w-195 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Strategy, technology and execution in one connected approach
              </h2>
            </div>

            <p
              className="max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              From AI strategy to software implementation, BrainADZ Consulting
              helps you build digital capabilities that are practical,
              scalable and business-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  data-aos="card-reveal"
                  data-aos-delay={(index % 3) * 100}
                  className="group relative min-h-70 overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-white p-7 shadow-[0_18px_60px_rgba(22,22,22,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cbd7ea] hover:shadow-[0_24px_75px_rgba(22,22,22,0.075)] md:p-8"
                >
                  <div className="absolute -right-13.75 -top-13.75 h-37.5 w-37.5 rounded-full bg-[#3c5b9b]/[0.07] transition duration-300 group-hover:scale-125" />

                  <div className="relative z-10 flex h-15.5 w-15.5 items-center justify-center rounded-2xl border border-[#dbe3f0] bg-[#f8faff] text-[#3c5b9b] transition-all duration-300 group-hover:bg-[#3c5b9b] group-hover:text-white">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="relative z-10 mt-8 text-[25px] font-light leading-tight tracking-[-0.6px] text-[#262626] transition group-hover:text-[#3c5b9b] md:text-[28px]">
                    {service.title}
                  </h3>

                  <p className="relative z-10 mt-4 max-w-130 text-[15px] font-light leading-[1.75] text-[#616161] md:text-[16px]">
                    {service.description}
                  </p>

                  <span className="absolute bottom-0 left-0 h-0.75 w-0 bg-[#3c5b9b] transition-all duration-500 group-hover:w-full" />
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
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
                Our Approach
              </p>

              <h2 className="max-w-180 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                From idea to impact with a clear delivery model
              </h2>

              <p className="mt-6 max-w-170 text-[17px] font-light leading-[1.75] text-[#525252] md:text-[19px]">
                We follow a practical consulting process that aligns business
                goals, technology choices, design, implementation and support.
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
                  <div className="mb-8 flex h-13 w-13 items-center justify-center rounded-full bg-[#3c5b9b] text-[15px] font-light text-white">
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
            Latest news and insights
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
                  2026 Digital Leader Study
                </p>

                <h3 className="mt-3 text-[22px] font-light leading-[1.35] tracking-[-0.4px] text-[#262626]">
                  Building the IT foundation for AI-first business systems
                </h3>

                <Link
                  href="/blog"
                  className="mt-8 inline-flex items-center gap-3 text-[15px] font-light text-[#3c5b9b] hover:underline"
                >
                  Read the study
                  <ArrowRightIcon className="h-4.5 w-4.5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative min-h-80 border-b border-[#dfe6f1] p-8 md:col-span-2">
                <div className="mb-8 flex h-27.5 w-27.5 items-center justify-center rounded-[28px] bg-[#3c5b9b]/10 text-[#3c5b9b]">
                  <CloudIcon className="h-15.5 w-15.5" />
                </div>

                <p className="text-[13px] font-light text-[#616161]">
                  Strategic partnerships
                </p>

                <h3 className="mt-3 max-w-162.5 text-[24px] font-light leading-[1.35] tracking-[-0.5px] text-[#262626]">
                  AI, cloud and automation are becoming the foundation of
                  resilient business transformation.
                </h3>

                <Link
                  href="/blog"
                  className="mt-8 inline-flex items-center gap-3 text-[15px] font-light text-[#3c5b9b] hover:underline"
                >
                  Read more
                  <ArrowRightIcon className="h-4.5 w-4.5" />
                </Link>
              </div>

              <div className="border-b border-[#dfe6f1] p-8 md:border-r">
                <BrainIcon className="mb-8 h-17 w-17 text-[#3c5b9b]" />

                <p className="text-[13px] font-light text-[#616161]">
                  AI Newsroom
                </p>

                <h3 className="mt-3 text-[20px] font-light leading-[1.45] text-[#262626]">
                  How AI agents help teams work faster across critical
                  workflows.
                </h3>

                <Link
                  href="/blog"
                  className="mt-8 inline-flex items-center gap-3 text-[15px] font-light text-[#3c5b9b] hover:underline"
                >
                  Read announcement
                  <ArrowRightIcon className="h-4.5 w-4.5" />
                </Link>
              </div>

              <div className="border-b border-[#dfe6f1] p-8">
                <PeopleIcon className="mb-8 h-17 w-17 text-[#3c5b9b]" />

                <p className="text-[13px] font-light text-[#616161]">
                  Recognition
                </p>

                <h3 className="mt-3 text-[20px] font-light leading-[1.45] text-[#262626]">
                  Better digital systems improve customer and team experiences.
                </h3>

                <Link
                  href="/blog"
                  className="mt-8 inline-flex items-center gap-3 text-[15px] font-light text-[#3c5b9b] hover:underline"
                >
                  Read full list
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
                className="group min-h-62.5 rounded-[10px] bg-[linear-gradient(180deg,#3c5b9b_0%,#124f88_52%,#087f7b_100%)] p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(60,91,155,0.24)]"
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

      {/* CUSTOMER SUCCESSES */}
      <section className="bg-[#f8faff] px-5 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-450">
          <div className="mb-14" data-aos="fade-up">
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
              Customer Successes
            </p>

            <h2 className="text-[42px] font-light leading-[1.1] tracking-[-1.8px] text-[#262626] md:text-[58px] lg:text-[68px]">
              Client outcomes built around impact
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {customerSuccess.map((item, index) => (
              <div
                key={item.name}
                data-aos="card-reveal"
                data-aos-delay={(index % 4) * 100}
                className="rounded-[18px] border border-[#dfe6f1] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_75px_rgba(22,22,22,0.07)] md:p-8"
              >
                <div className="mb-9 flex h-15.5 w-37.5 items-center justify-center rounded-[10px] border border-[#dfe6f1] bg-[#f8faff] text-center text-[16px] font-normal tracking-[-0.3px] text-[#3c5b9b]">
                  {item.name}
                </div>

                <h3 className="text-[24px] font-light leading-tight tracking-[-0.5px] text-[#262626]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] font-light leading-[1.75] text-[#616161]">
                  {item.description}
                </p>

                <Link
                  href="/case-studies"
                  className="mt-8 inline-flex items-center gap-3 text-[15px] font-light text-[#3c5b9b] hover:underline"
                >
                  Read the story
                  <ArrowRightIcon className="h-4.5 w-4.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC PARTNERSHIPS */}
      <section className="bg-white px-5 py-20 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <p className="mb-8 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
            Strategic Partnerships
          </p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-7">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex h-21.5 items-center justify-center rounded-sm border border-[#dfe6f1] bg-[#f8faff] px-5 text-center text-[19px] font-light tracking-[-0.4px] text-[#262626] transition hover:border-[#3c5b9b] hover:bg-white hover:text-[#3c5b9b]"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BRAINADZ */}
      <section className="bg-[#f8faff] px-5 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-450">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div data-aos="fade-right">
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
                Why BrainADZ Consulting
              </p>

              <h2 className="max-w-180 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Consulting backed by execution capability
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {outcomes.map((point, index) => (
                <div
                  key={point}
                  data-aos="card-reveal"
                  data-aos-delay={(index % 2) * 100}
                  className="flex gap-4 rounded-2xl border border-[#dfe6f1] bg-white p-5"
                >
                  <span className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-full bg-[#3c5b9b]/10 text-[#3c5b9b]">
                    <CheckIcon className="h-4.25 w-4.25" />
                  </span>

                  <p className="text-[15px] font-light leading-[1.65] text-[#525252] md:text-[16px]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}