/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import CtaSection from "@/components/home/CTA";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useState, type ComponentType, type SVGProps } from "react";
import PopupForm from "@/components/PopupForm";

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

function BriefcaseIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
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
      <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
      <path d="M4 7h16a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a2 2 0 0 1 2-2z" />
      <path d="M2 13h20" />
      <path d="M9 13v2h6v-2" />
    </svg>
  );
}

function RocketIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
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
      <path d="M14 4c3.5.4 5.6 2.5 6 6l-6.5 6.5-4-4L14 4z" />
      <path d="M9.5 12.5 5 17l2 2 4.5-4.5" />
      <path d="M14 4 9 5.5 7 9l2.5 3.5" />
      <path d="M20 10l-1.5 5-3.5 2-3.5-2.5" />
      <circle cx="15.5" cy="8.5" r="1.4" />
    </svg>
  );
}

function UsersIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
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

function CodeIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
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
      <path d="M8 9 4 12l4 3" />
      <path d="M16 9l4 3-4 3" />
      <path d="M14 5l-4 14" />
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

function ShieldIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
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

function TargetIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
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
    </svg>
  );
}

function GrowthIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
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
      <path d="M4 19h16" />
      <path d="M6 16l4-4 3 3 6-8" />
      <path d="M16 7h3v3" />
    </svg>
  );
}

function LearningIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
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
      <path d="M3 6.5 12 3l9 3.5-9 3.5-9-3.5z" />
      <path d="M5 10v5.5c0 1.4 3.1 3.5 7 3.5s7-2.1 7-3.5V10" />
      <path d="M21 7v6" />
    </svg>
  );
}

function HeartIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
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
      <path d="M20.8 4.6a5.3 5.3 0 0 0-7.5 0L12 5.9l-1.3-1.3a5.3 5.3 0 0 0-7.5 7.5L12 21l8.8-8.9a5.3 5.3 0 0 0 0-7.5z" />
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

function SendIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
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
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
    </svg>
  );
}

type Benefit = {
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
};

type Role = {
  title: string;
  type: string;
  location: string;
  experience: string;
  description: string;
  skills: string[];
};

const benefits: Benefit[] = [
  {
    title: "Practical project exposure",
    description:
      "Contribute to software, mobile and web applications, business platforms or digital signage projects depending on your role.",
    icon: RocketIcon,
  },
  {
    title: "Guided learning",
    description:
      "Improve through project feedback, reviews, documentation and hands-on problem solving instead of learning only in theory.",
    icon: LearningIcon,
  },
  {
    title: "Cross-functional collaboration",
    description:
      "Work with design, development, deployment and business teams to understand how a complete solution moves from idea to delivery.",
    icon: UsersIcon,
  },
  {
    title: "Ownership and responsibility",
    description:
      "Take responsibility for your work, understand why it matters and improve it through review, feedback and real project use.",
    icon: GrowthIcon,
  },
  {
    title: "Range of technology work",
    description:
      "Gain exposure to custom software, mobile and web apps, business platforms, integrations and digital signage technology.",
    icon: BrainIcon,
  },
  {
    title: "Clear working culture",
    description:
      "Work in an environment that values clear communication, documentation, ownership, review and continuous improvement.",
    icon: HeartIcon,
  },
];

const roles: Role[] = [
  {
    title: "Frontend Developer Intern",
    type: "Internship",
    location: "New Delhi / Hybrid",
    experience: "0–1 year",
    description:
      "Implement responsive interfaces, reusable components and API-connected screens using React, Next.js and modern frontend workflows.",
    skills: ["React", "Next.js", "Tailwind CSS", "UI implementation"],
  },
  {
    title: "Full Stack Developer",
    type: "Full-time",
    location: "New Delhi / Hybrid",
    experience: "1–3 years",
    description:
      "Build web applications, backend APIs, admin panels, database workflows and integrations for business software projects.",
    skills: ["Next.js", "Node.js", "APIs", "Databases"],
  },
  {
    title: "AI & Automation Engineer",
    type: "Full-time",
    location: "Hybrid",
    experience: "1–3 years",
    description:
      "Build business automation workflows, API integrations, AI-assisted features and internal tools that solve practical operational problems.",
    skills: ["Python", "APIs", "Automation", "AI tools"],
  },
  {
    title: "UI/UX Designer",
    type: "Full-time / Internship",
    location: "New Delhi / Remote",
    experience: "0–2 years",
    description:
      "Create user flows, wireframes, interface designs, prototypes and development-ready handoffs for websites and digital products.",
    skills: ["Figma", "Wireframes", "Visual Design", "User flows"],
  },
  {
    title: "Hardware Deployment Executive",
    type: "Full-time",
    location: "On-site",
    experience: "0–2 years",
    description:
      "Coordinate installation, testing and on-site support for digital standees, kiosks, LFD and LED displays and interactive systems.",
    skills: ["Installation", "Coordination", "Support", "Hardware basics"],
  },
  {
    title: "Digital Marketing Executive",
    type: "Full-time / Internship",
    location: "New Delhi / Hybrid",
    experience: "0–2 years",
    description:
      "Support content planning, social media, SEO, campaigns and lead-generation activities with clear reporting and execution.",
    skills: ["Social Media", "SEO basics", "Content", "Campaigns"],
  },
];

const hiringSteps = [
  {
    title: "Submit your application",
    description:
      "Share your details, preferred role, resume and relevant work links so we can understand your background.",
  },
  {
    title: "Initial profile review",
    description:
      "We review your experience, relevant work, communication and fit with the requirements of the role.",
  },
  {
    title: "Practical round",
    description:
      "Depending on the role, shortlisted candidates may have a focused discussion, portfolio review or practical task.",
  },
  {
    title: "Final discussion",
    description:
      "We discuss the role, responsibilities, working expectations, availability and the next steps in the hiring process.",
  },
];

const values = [
  "Take ownership of your work",
  "Learn by solving real problems",
  "Communicate early and clearly",
  "Pay attention to quality and detail",
  "Respect time, process and commitments",
  "Understand the business need behind the task",
];

const serviceOptions = [
  "Frontend Developer Intern",
  "Full Stack Developer",
  "AI & Automation Engineer",
  "UI/UX Designer",
  "Hardware Deployment Executive",
  "Digital Marketing Executive",
  "General Application",
];

export default function CareerPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <main className="bg-white text-[#161616]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="mx-auto max-w-450">
          <div className="relative min-h-150 overflow-hidden md:min-h-120">
            <img
              src="/hero/career.jpg"
              alt="Career at BrainADZ Live"
              className="absolute inset-0 h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.90)_0%,rgba(0,0,0,0.76)_28%,rgba(0,0,0,0.45)_54%,rgba(0,0,0,0.12)_78%,rgba(0,0,0,0)_100%)]" />

            <div className="relative z-10 flex min-h-150 flex-col px-6 py-10 md:min-h-150 md:px-10 lg:px-12">
              <div
                className="flex items-center gap-3 text-[15px] font-light tracking-[0.2px] text-white/90 md:text-[17px]"
                data-aos="fade-up"
              >
                <Link
                  href="/"
                  className="text-[#8fb0ff] transition hover:text-white hover:underline"
                >
                  Home
                </Link>

                <span className="text-white/70">/</span>

                <span>Career</span>
              </div>

              <div
                className="mt-14 max-w-225 md:mt-18"
                data-aos="fade-up"
                data-aos-delay="100"
              >

                <h1 className="text-[38px] font-semibold leading-[1.05] tracking-[-2px] text-white md:text-[48px] lg:text-[56px]">
                  Build your career by working on real digital products
                </h1>
              </div>

              <div
                className="mt-auto max-w-195 pb-8 md:pb-12"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p className="text-[14px] font-light leading-[1.45] tracking-[-0.5px] text-white/90 md:text-[16px] lg:text-[18px]">
                  Join a team working across software, mobile and web applications,
                  business platforms, digital signage products and technology deployments.
                </p>

                <a
                  href="#open-roles"
                  className="mt-10 inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-4 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
                >
                  View Open Roles
                  <span className="text-[20px] leading-none">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER INTRO */}
      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-4 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -right-45 -top-40 h-105 w-105 rounded-full bg-[#193175]/[0.07] blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-450">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div data-aos="fade-right">
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                Work On Real Projects
              </p>

              <h2 className="max-w-180 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Learn by building products and systems businesses actually use
              </h2>

              <p className="mt-7 max-w-180 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
                BrainADZ Live works across custom software, mobile and web
                applications, business platforms, digital signage products and
                technology deployment. That gives team members exposure to
                design, engineering, product thinking, implementation and the
                practical work required to deliver a complete solution.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { value: "11", label: "Software service areas" },
                  { value: "5", label: "Software platforms" },
                  { value: "8", label: "Digital signage product categories" },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    data-aos="card-reveal"
                    data-aos-delay={index * 100}
                    data-aos-duration="520"
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

            <div
              className="relative overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-[#f8faff] shadow-[0_24px_80px_rgba(22,22,22,0.06)]"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="absolute inset-0 flex items-center justify-center text-[15px] font-light text-[#8d8d8d]">
                Career image will appear here
              </div>

              <img
                src="/career/career-culture.jpg"
                alt="BrainADZ Live work culture"
                className="relative z-10 h-95 w-full object-cover md:h-140"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0)_45%,rgba(60,91,155,0.10)_100%)]" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="relative overflow-hidden bg-[#f8faff] px-5 py-20 md:px-4 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div data-aos="fade-right">
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                Why Join Us
              </p>

              <h2 className="max-w-190 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Build skills through practical work, feedback and responsibility
              </h2>
            </div>

            <p
              className="max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              We value people who are curious, dependable and willing to
              learn. The work involves real deadlines, feedback, collaboration
              and responsibility for the quality of what you deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="card-reveal"
                  data-aos-delay={(index % 3) * 100}
                  data-aos-duration="520"
                  className="group relative min-h-65 overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-white p-7 shadow-[0_18px_60px_rgba(22,22,22,0.045)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_75px_rgba(22,22,22,0.075)] md:p-8"
                >
                  <div className="absolute -right-13.75 -top-13.75 h-37.5 w-37.5 rounded-full bg-[#193175]/[0.07] transition duration-300 group-hover:scale-125" />

                  <div className="relative z-10 flex h-14.5 w-14.5 items-center justify-center rounded-[14px] border border-[#dbe3f0] bg-[#f8faff] text-[#193175] transition-all duration-300 group-hover:bg-[#193175] group-hover:text-white">
                    <Icon className="h-7.5 w-7.5" />
                  </div>

                  <h3 className="relative z-10 mt-8 text-[24px] font-light leading-[1.3] tracking-[-0.5px] text-[#262626] transition group-hover:text-[#193175] md:text-[26px]">
                    {item.title}
                  </h3>

                  <p className="relative z-10 mt-4 max-w-115 text-[15px] font-light leading-[1.75] text-[#616161] md:text-[16px]">
                    {item.description}
                  </p>

                  <span className="absolute bottom-0 left-0 h-0.75 w-0 bg-[#193175] transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section
        id="open-roles"
        className="scroll-mt-24 bg-white px-5 py-20 md:px-4 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div data-aos="fade-right">
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                Open Roles
              </p>

              <h2 className="max-w-190 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Explore roles across development, design, automation and deployment
              </h2>
            </div>

            <p
              className="max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Review the roles below and choose the one that best matches
              your experience and interests. You can also submit a general
              application for future requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {roles.map((role, index) => (
              <div
                key={role.title}
                data-aos="card-reveal"
                data-aos-delay={(index % 3) * 100}
                data-aos-duration="520"
                className="group relative flex min-h-90 flex-col overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-[#f8faff] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_75px_rgba(22,22,22,0.07)] md:p-8"
              >
                <div className="absolute -right-11.25 -top-11.25 h-31.25 w-31.25 rounded-full bg-[#193175]/6 transition duration-300 group-hover:scale-125" />

                <div className="relative z-10 flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[13px] font-normal uppercase tracking-[2px] text-[#193175]">
                      {role.type}
                    </p>

                    <h3 className="mt-4 text-[26px] font-light leading-[1.18] tracking-[-0.8px] text-[#262626] transition group-hover:text-[#193175] md:text-[30px]">
                      {role.title}
                    </h3>
                  </div>

                  <div className="flex h-13.5 w-13.5 shrink-0 items-center justify-center rounded-full bg-white text-[#193175]">
                    <BriefcaseIcon className="h-7 w-7" />
                  </div>
                </div>

                <p className="relative z-10 mt-6 text-[15px] font-light leading-[1.75] text-[#616161] md:text-[16px]">
                  {role.description}
                </p>

                <div className="relative z-10 mt-6 grid grid-cols-2 gap-3 text-[14px] font-light text-[#525252]">
                  <div className="rounded-[10px] bg-white px-4 py-3">
                    <span className="block text-[#193175]">Location</span>
                    {role.location}
                  </div>

                  <div className="rounded-[10px] bg-white px-4 py-3">
                    <span className="block text-[#193175]">Experience</span>
                    {role.experience}
                  </div>
                </div>

                <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#dfe6f1] bg-white px-3 py-1.5 text-[13px] font-light text-[#193175]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href="#apply"
                  className="relative z-10 mt-auto inline-flex items-center gap-3 pt-8 text-[16px] font-light text-[#193175] transition hover:underline"
                >
                  Apply for this role
                  <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <span className="absolute bottom-0 left-0 h-0.75 w-0 bg-[#193175] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES + PROCESS */}
      <section className="bg-[#f8faff] px-5 py-20 md:px-4 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-450">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div
              className="rounded-[22px] border border-[#dfe6f1] bg-white p-8 shadow-[0_20px_70px_rgba(22,22,22,0.05)] md:p-10 lg:p-12"
              data-aos="card-reveal"
              data-aos-duration="520"
            >
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                What We Value
              </p>

              <h2 className="max-w-155 text-[36px] font-light leading-[1.1] tracking-[-1.5px] text-[#262626] md:text-[46px]">
                How we expect people to work
              </h2>

              <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {values.map((value) => (
                  <div
                    key={value}
                    className="flex items-center gap-3 rounded-[14px] border border-[#dfe6f1] bg-[#f8faff] px-4 py-4"
                  >
                    <span className="flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-full bg-[#193175]/10 text-[#193175]">
                      <CheckIcon className="h-4 w-4" />
                    </span>

                    <p className="text-[15px] font-light leading-[1.55] text-[#525252] md:text-[16px]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-[22px] border border-[#dfe6f1] bg-white p-8 shadow-[0_20px_70px_rgba(22,22,22,0.05)] md:p-10 lg:p-12"
              data-aos="card-reveal"
              data-aos-delay="100"
              data-aos-duration="520"
            >
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                Hiring Process
              </p>

              <h2 className="max-w-155 text-[36px] font-light leading-[1.1] tracking-[-1.5px] text-[#262626] md:text-[46px]">
                A straightforward hiring process
              </h2>

              <div className="mt-9 space-y-6">
                {hiringSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-5">
                    <div className="flex h-11.5 w-11.5 shrink-0 items-center justify-center rounded-full bg-[#193175] text-[15px] font-light text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="border-b border-[#dfe6f1] pb-6 last:border-b-0">
                      <h3 className="text-[22px] font-light leading-[1.3] tracking-[-0.4px] text-[#262626]">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-170 text-[15px] font-light leading-[1.7] text-[#616161] md:text-[16px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section
        id="apply"
        className="relative overflow-hidden bg-white px-5 py-20 md:px-4 lg:px-12 lg:py-28"
      >
        <div className="pointer-events-none absolute -left-40 -bottom-40 h-95 w-95 rounded-full bg-[#193175]/6 blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-450">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <div data-aos="fade-right">
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                Apply Now
              </p>

              <h2 className="max-w-180 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Apply for a role at BrainADZ Live
              </h2>

              <p className="mt-6 max-w-180 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
                Share your profile and relevant work with us. If your
                background matches an active or upcoming requirement, our team
                can contact you for the next step.
              </p>

              <div
                className="mt-10 rounded-[18px] border border-[#dfe6f1] bg-[#f8faff] p-7"
                data-aos="card-reveal"
                data-aos-delay="100"
                data-aos-duration="520"
              >
                <div className="flex gap-5">
                  <div className="flex h-15.5 w-15.5 shrink-0 items-center justify-center rounded-[18px] bg-[#193175]/10 text-[#193175]">
                    <ShieldIcon className="h-8.5 w-8.5" />
                  </div>

                  <div>
                    <h3 className="text-[24px] font-light leading-[1.3] tracking-[-0.5px] text-[#262626]">
                      Before you apply
                    </h3>

                    <p className="mt-3 text-[15px] font-light leading-[1.7] text-[#616161] md:text-[16px]">
                      Use links that our team can open without requesting access.
                      Add a portfolio or Figma link for design roles and project
                      or GitHub links for development roles whenever available.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-[22px] border border-[#dfe6f1] bg-white p-7 shadow-[0_24px_80px_rgba(22,22,22,0.07)] md:p-8 lg:p-10"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="mb-9 text-center">
                <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1.2px] text-[#262626] md:text-[42px]">
                  Career Application
                </h2>

                <p className="mx-auto mt-4 max-w-170 text-[16px] font-light leading-[1.7] text-[#525252] md:text-[18px]">
                  Share accurate details and relevant work so we can review your profile properly.
                </p>
              </div>

              <form
                onSubmit={(event) => event.preventDefault()}
                className="grid grid-cols-1 gap-5 md:grid-cols-2"
              >
                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#193175] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#193175] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#193175] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Current Location
                  </label>

                  <input
                    type="text"
                    placeholder="City, State"
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#193175] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Role Interested In *
                  </label>

                  <select
                    defaultValue=""
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition focus:border-[#193175] focus:bg-white"
                  >
                    <option value="" disabled>
                      Select role
                    </option>

                    {serviceOptions.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Experience
                  </label>

                  <select
                    defaultValue=""
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition focus:border-[#193175] focus:bg-white"
                  >
                    <option value="" disabled>
                      Select experience
                    </option>
                    <option value="fresher">Fresher</option>
                    <option value="0-1">0–1 year</option>
                    <option value="1-3">1–3 years</option>
                    <option value="3-plus">3+ years</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Resume Link *
                  </label>

                  <input
                    type="url"
                    placeholder="Google Drive / LinkedIn resume link"
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#193175] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Portfolio / GitHub Link
                  </label>

                  <input
                    type="url"
                    placeholder="Portfolio, GitHub, Behance or LinkedIn"
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#193175] focus:bg-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Tell us about your interest in this role
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your relevant skills, work and why this role interests you..."
                    className="w-full resize-none rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 py-4 text-[15px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#193175] focus:bg-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-md bg-[#193175] px-6 text-[16px] font-normal text-white shadow-[0_18px_42px_rgba(60,91,155,0.22)] transition-all duration-300 hover:bg-[#2f4a82] md:w-auto md:min-w-65"
                  >
                    <SendIcon className="h-5.25 w-5.25 transition-transform duration-300 group-hover:translate-x-1" />
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


      {/* FINAL CTA */}
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
                alt="Careers at BrainADZ Live"
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
                  Not sure which role fits your profile?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Share your background and interests with our team, and we can
                  understand where your skills may fit across future opportunities.
                </p>
              </div>

              {/* BUTTON */}
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#193175] md:min-w-57.5"
              >
                <span>Ask About Careers</span>

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
