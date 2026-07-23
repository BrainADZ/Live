"use client";

/* eslint-disable @next/next/no-img-element */

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PopupForm from "@/components/PopupForm";
import { useState } from "react";

type Industry = {
  title: string;
  description: string;
  href: string;
  icon: string;
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

const industries: Industry[] = [
  {
    title: "Healthcare",
    href: "/industries/health-care",
    icon: "/industries/healthcare.png",
    description:
      "Software, dashboards and display systems for appointments, internal workflows, patient communication and operational visibility.",
  },
  {
    title: "Education Tech",
    href: "/industries/education-tech",
    icon: "/industries/edu.png",
    description:
      "Learning platforms, student and admin dashboards, classroom displays and digital systems for campus communication and education operations.",
  },
  {
    title: "Finance Tech",
    href: "/industries/finance-tech",
    icon: "/industries/hand.png",
    description:
      "Customer portals, workflow systems, reporting dashboards and controlled access for financial operations and service teams.",
  },
  {
    title: "Property Tech",
    href: "/industries/property-tech",
    icon: "/industries/monitor.png",
    description:
      "Property portals, lead and sales workflows, digital showcases and management dashboards for property businesses.",
  },
  {
    title: "Retail",
    href: "/industries/retail",
    icon: "/industries/marketplace.png",
    description:
      "Store displays, self-service kiosks, commerce systems, customer engagement tools and software for retail operations.",
  },
  {
    title: "Transport",
    href: "/industries/transport",
    icon: "/industries/transportation.png",
    description:
      "Information displays, tracking dashboards, booking or service workflows and operational systems for transport teams.",
  },
  {
    title: "Telecom",
    href: "/industries/telecom",
    icon: "/industries/telecommunication.png",
    description:
      "Customer service platforms, operational dashboards, workflow tools and internal systems for telecom processes.",
  },
  {
    title: "Automotive",
    href: "/industries/automotive",
    icon: "/industries/automotive.png",
    description:
      "Showroom displays, service workflows, customer systems and digital tools for automotive operations.",
  },
  {
    title: "Insurance Tech",
    href: "/industries/insurance-tech",
    icon: "/industries/insurance.png",
    description:
      "Policy, claims, customer and agent workflows supported by portals, dashboards and process automation.",
  },
  {
    title: "Travel & Hospitality",
    href: "/industries/travel-hospitality",
    icon: "/industries/travel-and-tourism.png",
    description:
      "Booking and guest-service workflows, menu and information displays, kiosks and operational dashboards.",
  },
  {
    title: "Facility Management",
    href: "/industries/facility-management",
    icon: "/industries/facility-management.png",
    description:
      "Task, service, asset and team workflows supported by dashboards, digital notices and internal management systems.",
  },
  {
    title: "Media & Entertainment",
    href: "/industries/media-entertainment",
    icon: "/industries/smartphone.png",
    description:
      "Content and engagement platforms, interactive displays, LED visuals and operational tools for media environments.",
  },
];

export default function IndustriesPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#161616]">
      {/* HERO */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/industries.webp"
          alt="Industries"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-4 lg:min-h-135 lg:px-12">
          <div className="flex items-center gap-3 text-[16px] font-light md:text-[18px]">
            <Link href="/" className="text-[#6da0ff] hover:underline">
              Home
            </Link>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Industries</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Technology solutions shaped for different industry workflows
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Explore how BrainADZ Live software services, software platforms
              and digital signage products can support different operational,
              customer and communication needs.
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

      {/* ABOUT INDUSTRIES */}
      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-4 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -right-45 -top-40 h-105 w-105 rounded-full bg-[#193175]/[0.07] blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-450">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                About Industries
              </p>

              <h2 className="max-w-190 text-[38px] font-normal leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Technology should fit the way each industry actually works
              </h2>

              <p className="mt-7 max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
                Different sectors have different users, workflows, service
                models, data needs and communication requirements. BrainADZ Live
                applies software services, software platforms and digital
                signage products to these different operating contexts.
              </p>

              <p className="mt-5 max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
                Industry context helps us shape the right combination of
                applications, dashboards, integrations, displays and
                operational tools for the problem being solved.
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
      <section className="bg-[#f8faff] px-5 py-16 md:px-4 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-450">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              { value: "12", label: "Industry sectors" },
              { value: "11", label: "Software services" },
              { value: "5", label: "Software platforms" },
              { value: "8", label: "Digital signage product categories" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[18px] border border-[#dfe6f1] bg-white p-7 shadow-[0_18px_60px_rgba(22,22,22,0.045)]"
              >
                <p className="text-[42px] font-light leading-none tracking-[-1.5px] text-[#193175] md:text-[52px]">
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
      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-4 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -right-45 -top-40 h-105 w-105 rounded-full bg-[#193175]/[0.07] blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-450">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                Industries We Build For
              </p>

              <h2 className="max-w-190 text-[38px] font-normal leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Different industries need different workflows, interfaces and systems
              </h2>
            </div>

            <p className="max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              Explore examples of how our software services, software platforms
              and digital signage products can be applied across 12 industry
              sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {industries.map((item) => (
              <div
                key={item.title}
                className="group grid min-h-55 grid-cols-1 gap-6 rounded-[18px] border border-[#dfe6f1] bg-white p-7 shadow-[0_18px_60px_rgba(22,22,22,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cbd7ea] hover:shadow-[0_24px_75px_rgba(22,22,22,0.075)] md:grid-cols-[88px_1fr] md:p-8"
              >
                <div className="flex h-18 w-18 items-center justify-center rounded-[18px] border border-[#dbe3f0] bg-[#f8faff] transition-all duration-300 group-hover:border-[#193175]/35 group-hover:bg-white group-hover:shadow-[0_14px_34px_rgba(60,91,155,0.16)]">
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                    loading="lazy"
                    decoding="async"
                    className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div>
                  <h3 className="text-[25px] font-normal leading-[1.22] tracking-[-0.6px] text-[#262626] transition group-hover:text-[#193175] md:text-[28px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] font-light leading-[1.75] text-[#616161] md:text-[16px]">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    aria-label={`Explore ${item.title}`}
                    className="mt-7 inline-flex items-center gap-3 text-[15px] font-light text-[#193175]"
                  >
                    Explore industry
                    <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="lazy-section bg-white py-8">
        <div className="mx-auto max-w-450 px-4 lg:px-10">
          <div className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/CTA/home-cta.png"
                alt="BrainADZ Live Industry Solutions"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-150">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Looking for technology that fits your industry workflow?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Tell us about your operations, users and challenges. BrainADZ
                  Live can help identify the right mix of software services,
                  platforms and digital signage products.
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
