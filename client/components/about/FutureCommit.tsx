"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type TabKey =
  | "software"
  | "platforms"
  | "experiences"
  | "delivery";

const tabs: {
  key: TabKey;
  label: string;
  description: string;
  linkText: string;
  href: string;
  image: string;
}[] = [
  {
    key: "software",
    label: "Better Software Systems",
    description:
      "We are committed to building software around clear workflows, usable interfaces, scalable architecture and the real responsibilities of the people using the system.",
    linkText: "Explore software services",
    href: "/software-services",
    image: "/about/futuresustain.jpg",
  },
  {
    key: "platforms",
    label: "Connected Business Platforms",
    description:
      "CRM, ERP and business platforms should reduce disconnected work. Our focus is on creating clearer data flows, operational visibility and better coordination between teams.",
    linkText: "Explore software platforms",
    href: "/software-platforms",
    image: "/about/futureAI.jpg",
  },
  {
    key: "experiences",
    label: "Smarter Digital Environments",
    description:
      "We see physical and digital experiences becoming more connected through kiosks, interactive displays, signage software and customer-facing technology.",
    linkText: "Explore digital signage products",
    href: "/digital-signage-products",
    image: "/about/futuresustain.jpg",
  },
  {
    key: "delivery",
    label: "Responsible Technology Delivery",
    description:
      "Our long-term commitment is to make technology decisions clearer through better discovery, planning, integration thinking and delivery ownership.",
    linkText: "Explore technology consulting",
    href: "/consulting",
    image: "/about/futurework.jpeg",
  },
];

export default function FutureCommitments() {
  const [activeTab, setActiveTab] = useState<TabKey>("software");

  const activeItem = tabs.find((tab) => tab.key === activeTab) ?? tabs[0];

  return (
    <section className="bg-white px-5 py-20 text-[#161616] md:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-450">
        {/* HEADING */}
        <div data-aos="fade-up">
          <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
            Our Commitments
          </p>

          <h2 className="max-w-262.5 text-[40px] font-light leading-[1.08] tracking-[-1.9px] text-[#262626] md:text-[54px] lg:text-[64px]">
            What we want to keep improving
          </h2>
        </div>

        {/* TABS */}
        <div
          className="mt-12 overflow-x-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex min-w-220 max-w-260 border-b border-[#d9d9d9]">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`min-h-18.5 w-65 px-5 text-left text-[16px] font-light leading-[1.45] tracking-[-0.1px] transition-all duration-300 md:text-[17px] ${
                    isActive
                      ? "border-2 border-[#193175] text-[#161616]"
                      : "border-2 border-transparent text-[#525252] hover:text-[#193175]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          {/* LEFT TEXT */}
          <div className="max-w-175" data-aos="fade-right">
            <p className="text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#393939] md:text-[19px]">
              {activeItem.description}
            </p>

            <Link
              href={activeItem.href}
              className="group mt-9 inline-flex items-center gap-4 text-[16px] font-light text-[#193175] transition hover:underline md:text-[17px]"
            >
              {activeItem.linkText}

              <ArrowRight
                size={22}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="relative overflow-hidden bg-[#f8faff]"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="absolute inset-0 flex items-center justify-center text-center text-[15px] font-light text-[#8d8d8d]">
              Image will appear here
            </div>

            <img
              key={activeItem.image}
              src={activeItem.image}
              alt={activeItem.label}
              className="relative z-10 h-75 w-full object-cover transition-all duration-500 md:h-107.5 lg:h-125"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0)_55%,rgba(60,91,155,0.08)_100%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}