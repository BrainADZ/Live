"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import CtaSection from "@/components/home/CTA";
import PopupForm from "@/components/PopupForm";
import { useState } from "react";

type Industry = {
  title: string;
  description: string;
};

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function IndustryIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
      <path d="M8 9h1" />
      <path d="M12 9h1" />
      <path d="M16 9h1" />
    </svg>
  );
}

const industries: Industry[] = [
  {
    title: "Health Care",
    description:
      "Digital systems for patient communication, service workflows, information displays, support dashboards and healthcare operations.",
  },
  {
    title: "Education Tech",
    description:
      "Smart classrooms, learning platforms, campus displays, student dashboards and education-focused digital solutions.",
  },
  {
    title: "Finance Tech",
    description:
      "Secure digital platforms for financial workflows, customer services, reporting, dashboards and operational automation.",
  },
  {
    title: "Property Tech",
    description:
      "Interactive property showcases, sales dashboards, lead systems and digital displays for real estate businesses.",
  },
  {
    title: "Retail",
    description:
      "Digital signage, kiosks, product discovery systems and customer engagement platforms for retail environments.",
  },
  {
    title: "Transport",
    description:
      "Digital information systems, tracking dashboards, display solutions and operational tools for transport businesses.",
  },
  {
    title: "Telecom",
    description:
      "Customer support systems, dashboards, service platforms and automation solutions for telecom operations.",
  },
  {
    title: "Automotive",
    description:
      "Showroom displays, service dashboards, customer engagement tools and digital systems for automotive brands.",
  },
  {
    title: "Insurance Tech",
    description:
      "Digital workflows for policies, claims, customers, agent management and insurance business automation.",
  },
  {
    title: "Travel & Hospitality",
    description:
      "Guest experience displays, booking flows, menu screens, kiosks and service automation for hospitality brands.",
  },
  {
    title: "Facility Management",
    description:
      "Smart dashboards, task tracking, digital notices and operational systems for facility management teams.",
  },
  {
    title: "Media & Entertainment",
    description:
      "Interactive displays, content platforms, LED visuals and digital engagement systems for media environments.",
  },
];

export default function IndustriesPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <main className="bg-white text-[#161616]">
  {/* HERO */}
  <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
    <img
      src="/hero/indus.jpeg"
      alt="Industries"
      className="absolute inset-0 h-full w-full object-cover"
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />

    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

    <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-8 lg:min-h-135 lg:px-12">
      <div className="flex items-center gap-3 text-[16px] font-light md:text-[18px]">
        <Link href="/" className="text-[#6da0ff] hover:underline">
          Home
        </Link>
        <span className="text-white/80">/</span>
        <span className="text-white/90">Industries</span>
      </div>

      <div className="mt-12 max-w-205 md:mt-14">
        <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
          Industry solutions for digital transformation
        </h1>
      </div>

      <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
        <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
          BrainADZ Live helps multiple industries adopt smart displays,
          software platforms, automation and AI-enabled systems.
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

      {/* ABOUT INDUSTRIES */}
      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -right-45 -top-40 h-105 w-105 rounded-full bg-[#3c5b9b]/[0.07] blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-450">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
                About Industries
              </p>

              <h2 className="max-w-190 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Digital systems created for different industry needs
              </h2>

              <p className="mt-7 max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
                BrainADZ Live works with businesses across healthcare,
                education, finance, property, retail, transport, telecom,
                automotive, insurance, hospitality, facility management and
                media industries. Each industry has different workflows,
                customers and operational challenges, so our solutions are
                designed with practical business use in mind.
              </p>

              <p className="mt-5 max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
                We combine software, smart displays, automation, dashboards and
                AI-enabled systems to help industries improve communication,
                visibility, service delivery and customer experience.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-[#f8faff] shadow-[0_24px_80px_rgba(22,22,22,0.06)]">
              <div className="absolute inset-0 flex items-center justify-center text-[15px] font-light text-[#8d8d8d]">
                Industries image will appear here
              </div>

              <img
                src="/solutions/industries-about.jpg"
                alt="Industries served by BrainADZ Live"
                className="relative z-10 h-90 w-full object-cover md:h-130"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0)_45%,rgba(60,91,155,0.10)_100%)]" />
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES STATS */}
      <section className="bg-[#f8faff] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-450">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              { value: "12+", label: "Industries supported" },
              { value: "360°", label: "End-to-end digital systems" },
              { value: "AI", label: "Automation-enabled solutions" },
              { value: "Live", label: "Business-ready implementation" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[18px] border border-[#dfe6f1] bg-white p-7 shadow-[0_18px_60px_rgba(22,22,22,0.045)]"
              >
                <p className="text-[42px] font-light leading-none tracking-[-1.5px] text-[#3c5b9b] md:text-[52px]">
                  {item.value}
                </p>

                <p className="mt-4 text-[15px] font-light leading-[1.6] text-[#616161] md:text-[16px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -right-45 -top-40 h-105 w-105 rounded-full bg-[#3c5b9b]/[0.07] blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-450">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
                Industries We Serve
              </p>

              <h2 className="max-w-190 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Digital systems built for every modern business environment
              </h2>
            </div>

            <p className="max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              We work across healthcare, education, finance, retail, transport,
              telecom, automotive, hospitality, media and enterprise operations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {industries.map((item) => (
              <div
                key={item.title}
                className="group grid min-h-55 grid-cols-1 gap-6 rounded-[18px] border border-[#dfe6f1] bg-white p-7 shadow-[0_18px_60px_rgba(22,22,22,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cbd7ea] hover:shadow-[0_24px_75px_rgba(22,22,22,0.075)] md:grid-cols-[88px_1fr] md:p-8"
              >
                <div className="flex h-18 w-18 items-center justify-center rounded-[18px] border border-[#dbe3f0] bg-[#f8faff] text-[#3c5b9b] transition-all duration-300 group-hover:bg-[#3c5b9b] group-hover:text-white">
                  <IndustryIcon className="h-9 w-9" />
                </div>

                <div>
                  <h3 className="text-[25px] font-light leading-[1.22] tracking-[-0.6px] text-[#262626] transition group-hover:text-[#3c5b9b] md:text-[28px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] font-light leading-[1.75] text-[#616161] md:text-[16px]">
                    {item.description}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-3 text-[15px] font-light text-[#3c5b9b]">
                    Explore industry
                    <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />

      <PopupForm
  isOpen={isPopupOpen}
  onClose={() => setIsPopupOpen(false)}
/>
    </main>
  );
}
