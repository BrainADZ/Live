"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import PopupForm from "@/components/PopupForm";
import { useState } from "react";

type Platform = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

const platforms: Platform[] = [
  {
    title: "CRM Software",
    description:
      "Manage leads, follow-ups, customer records, sales pipelines, team activity and reporting from one connected CRM platform.",
    icon: "/service-icons/crm.svg",
    href: "/software-platforms/crm-software",
  },
  {
    title: "ERP Software",
    description:
      "Connect sales, purchase, inventory, finance, users and reporting through one structured ERP platform for daily operations.",
    icon: "/service-icons/erp.svg",
    href: "/software-platforms/erp-software",
  },
  {
    title: "Signage Application",
    description:
      "Manage content, playlists and playback for digital standees, kiosks and connected displays from one signage application.",
    icon: "/service-icons/signage.svg",
    href: "/software-platforms/signage-application",
  },
  {
    title: "Cloud Signage Software",
    description:
      "Publish, schedule and update content across connected screens remotely through a cloud-based signage management platform.",
    icon: "/service-icons/cloud-signage.svg",
    href: "/software-platforms/cloud-signage-software",
  },
  {
    title: "Virtual Trial Room",
    description:
      "Create interactive virtual try-on experiences that help fashion and retail customers explore products in a more engaging way.",
    icon: "/service-icons/virtual-trial-room.svg",
    href: "/software-platforms/virtual-trial-room",
  },
];

export default function SoftwarePlatformsPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#161616]">
      {/* HERO */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/software-platform.jpg"
          alt="Software Platforms"
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

            <span className="text-white/90">Software Platforms</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Software platforms for business management, digital signage and interactive retail
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Explore BrainADZ Live platforms for customer management, business
              operations, digital display control and virtual try-on experiences.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Enquire Now

                <span className="text-[20px] leading-none">↗</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SOFTWARE PLATFORMS */}
      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -right-45 -top-40 h-105 w-105 rounded-full bg-[#193175]/[0.07] blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-450">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                About Software Platforms
              </p>

              <h2 className="max-w-190 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Purpose-built platforms for customers, operations and digital displays
              </h2>

              <p className="mt-7 max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
                BrainADZ Live offers five software platforms built for different
                operational needs. CRM Software supports lead and customer
                workflows, ERP Software connects core business operations, and
                our signage platforms help manage content across digital
                displays. The Virtual Trial Room adds an interactive retail
                experience for fashion-focused environments.
              </p>

              <p className="mt-5 max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
                Each platform focuses on a clear use case, with workflows,
                controls and interfaces designed around the people who use it
                every day. Explore the platform that matches the problem you
                need to manage.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-[#f8faff] shadow-[0_24px_80px_rgba(22,22,22,0.06)]">
              <div className="absolute inset-0 flex items-center justify-center text-[15px] font-light text-[#8d8d8d]">
                Software platforms image will appear here
              </div>

              <img
                src="/solutions/software-platforms-about.jpg"
                alt="Software platforms by BrainADZ Live"
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

      {/* SOFTWARE PLATFORMS STATS */}
      <section className="bg-[#f8faff] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-450">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                value: "5",
                label: "Software platforms",
              },
              {
                value: "2",
                label: "Business management platforms",
              },
              {
                value: "2",
                label: "Digital signage platforms",
              },
              {
                value: "1",
                label: "Interactive retail platform",
              },
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

      {/* PLATFORMS */}
      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -right-45 -top-40 h-105 w-105 rounded-full bg-[#193175]/[0.07] blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-450">
          {/* SECTION HEADING */}
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                Explore Platforms
              </p>

              <h2 className="max-w-190 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Five platforms built for distinct business and customer experiences
              </h2>
            </div>

            <p className="max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              Compare CRM, ERP, signage management, cloud display control and
              virtual try-on platforms, then explore the one that fits your
              business requirement.
            </p>
          </div>

          {/* PLATFORM CARDS */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {platforms.map((item) => (
              <div
                key={item.title}
                className="group grid min-h-57.5 grid-cols-1 gap-6 rounded-[18px] border border-[#dfe6f1] bg-white p-7 shadow-[0_18px_60px_rgba(22,22,22,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cbd7ea] hover:shadow-[0_24px_75px_rgba(22,22,22,0.075)] md:grid-cols-[88px_1fr] md:p-8"
              >
                {/* MANUAL DOWNLOADED ICON */}
                <div className="flex h-18 w-18 items-center justify-center rounded-[18px] border border-[#dbe3f0] bg-[#f8faff] transition-all duration-300 group-hover:border-[#b8c8e1] group-hover:bg-white">
                  <img
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110 md:h-11 md:w-11"
                  />
                </div>

                {/* CARD CONTENT */}
                <div>
                  <h3 className="text-[25px] font-light leading-[1.22] tracking-[-0.6px] text-[#262626] transition group-hover:text-[#193175] md:text-[28px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] font-light leading-[1.75] text-[#616161] md:text-[16px]">
                    {item.description}
                  </p>

                  {/* CLICKABLE EXPLORE LINK */}
                  <Link
                    href={item.href}
                    className="mt-7 inline-flex items-center gap-3 text-[15px] font-light text-[#193175] transition-colors duration-300 hover:text-[#101f4d]"
                    aria-label={`Explore ${item.title}`}
                  >
                    <span>Explore platform</span>

                    <span className="text-[20px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="lazy-section bg-white py-12">
        <div className="mx-auto max-w-450 px-8 lg:px-10">
          <div className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/about.avif"
                alt="BrainADZ Live Software Platforms"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Looking for the right software platform for your business?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Tell us whether you need customer management, connected
                  operations, signage control or an interactive retail
                  experience. We will help you explore the right platform.
                </p>
              </div>

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
