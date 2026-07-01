"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type TabKey = "brand" | "ai" | "work" | "sustainability";

const tabs: {
  key: TabKey;
  label: string;
  description: string;
  linkText: string;
  href: string;
  image: string;
}[] = [
  {
    key: "brand",
    label: "Future of BrainADZ",
    description:
      "BrainADZ Live is focused on building practical digital systems that connect software, hardware, automation and intelligent experiences for modern businesses.",
    linkText: "Explore BrainADZ Live",
    href: "/about-us",
    image: "/about/future/brainadz.jpg",
  },
  {
    key: "ai",
    label: "Future of AI",
    description:
      "Our AI-driven solutions are designed to help businesses automate workflows, improve decision-making, personalize experiences and build smarter digital operations.",
    linkText: "See AI solutions",
    href: "/services/ai-automation",
    image: "/about/futureAI.jpg",
  },
  {
    key: "work",
    label: "Future of work",
    description:
      "We help teams work better with connected systems, dashboards, digital displays, automation tools and interactive technology that improve everyday operations.",
    linkText: "Learn more about work solutions",
    href: "/services",
    image: "/about/futuresustain.jpg",
  },
  {
    key: "sustainability",
    label: "Future of sustainability",
    description:
      "We support smarter, more efficient digital infrastructure by helping businesses use technology to reduce manual effort, improve visibility and manage operations with clarity.",
    linkText: "Explore sustainable technology",
    href: "/contact",
    image: "/about/futurework.jpeg",
  },
];

export default function FutureCommitments() {
  const [activeTab, setActiveTab] = useState<TabKey>("brand");

  const activeItem = tabs.find((tab) => tab.key === activeTab) ?? tabs[0];

  return (
    <section className="bg-white px-5 py-20 text-[#161616] md:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1800px]">
        {/* HEADING */}
        <div data-aos="fade-up">
          <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
            Commitments
          </p>

          <h2 className="max-w-[1050px] text-[40px] font-light leading-[1.08] tracking-[-1.9px] text-[#262626] md:text-[54px] lg:text-[64px]">
            Commitments to the future
          </h2>
        </div>

        {/* TABS */}
        <div className="mt-12 overflow-x-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="flex min-w-[720px] max-w-[900px] border-b border-[#d9d9d9]">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`min-h-[74px] w-[225px] px-5 text-left text-[16px] font-light leading-[1.45] tracking-[-0.1px] transition-all duration-300 md:text-[17px] ${
                    isActive
                      ? "border-2 border-[#3c5b9b] text-[#161616]"
                      : "border-2 border-transparent text-[#525252] hover:text-[#3c5b9b]"
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
          <div className="max-w-[700px]" data-aos="fade-right">
            <p className="text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#393939] md:text-[19px]">
              {activeItem.description}
            </p>

            <Link
              href={activeItem.href}
              className="mt-9 inline-flex items-center gap-4 text-[16px] font-light text-[#3c5b9b] transition hover:underline md:text-[17px]"
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
              className="relative z-10 h-[300px] w-full object-cover transition-all duration-500 md:h-[430px] lg:h-[500px]"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0)_55%,rgba(60,91,155,0.08)_100%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
