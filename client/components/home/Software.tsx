/* eslint-disable @next/next/no-img-element */
"use client";
import { titleCaseHeading } from "@/lib/title-case-heading";


import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import DemoForm from "@/components/DemoForm";

type DemoType = "crm" | "erp" | "pos";

type SoftwareItem = {
  title: string;
  description: string;
  href: string;
  icon: string;
  demoType: DemoType;
  demoHref: string;
};

const softwares: SoftwareItem[] = [
  {
    title: "CRM Software",
    description:
      "Manage leads, customers, sales pipelines, follow-ups and business reporting through one connected CRM platform.",
    href: "/software-platforms/crm-software",
    icon: "/service-icons/crm-soft.svg",
    demoType: "crm",
    demoHref: "https://democrm.brainadzlive.in/",
  },
  {
    title: "ERP Software",
    description:
      "Connect finance, inventory, HR, procurement, sales and operations through one integrated ERP platform.",
    href: "/software-platforms/erp-software",
    icon: "/service-icons/erp-soft.svg",
    demoType: "erp",
    demoHref: "https://erp.brainadzlive.in/",
  },
  {
    title: "POS Billing Software",
    description:
      "Manage billing, payments, products, inventory, customers and store operations through one connected POS system.",
    href: "/software-platforms/pos",
    icon: "/service-icons/pos.svg",
    demoType: "pos",
    demoHref: "https://posbadz.onrender.com/",
  },
];

export default function OurSoftwareSection() {
  const [selectedDemo, setSelectedDemo] = useState<SoftwareItem | null>(null);

  const openDemo = (software: SoftwareItem) => {
    setSelectedDemo(software);
  };

  const closeDemo = () => {
    setSelectedDemo(null);
  };

  return (
    <>
      <section className="section-spacing bg-white px-5 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1720px]">
          {/* TOP HEADING + DESCRIPTION */}
          <div className="mb-9 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div data-aos="fade-right">
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#193175]">
                Business Software
              </p>

              <h2 className="text-[36px] font-normal leading-none tracking-[-1.4px] text-[#242424] md:text-[48px] lg:text-[52px]">
                Our Softwares
              </h2>
            </div>

            <p
              className="max-w-[620px] text-[18px] font-light leading-[1.55] tracking-[-0.3px] text-[#454545] lg:ml-auto lg:text-[20px]"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Powerful business platforms designed to{" "}
              <span className="font-normal text-[#193175]">
                simplify operations
              </span>
              , connect teams and help businesses manage everyday workflows more
              efficiently.
            </p>
          </div>

          {/* SOFTWARE GRID */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {softwares.map((software, index) => (
              <article
                key={software.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="520"
                className="software-card group relative flex min-h-[300px] flex-col overflow-hidden rounded-[7px] border border-[#d3d3d3] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#193175] hover:shadow-[0_16px_45px_rgba(25,49,117,0.08)] lg:p-8"
              >
                {/* TOP HOVER LINE */}
                <span className="absolute left-0 top-0 h-[3px] w-0 bg-[#193175] transition-all duration-500 group-hover:w-full" />

                {/* TITLE + ICON */}
                <div className="relative z-10 flex items-start justify-between gap-5">
                  <div className="min-w-0">
                    <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.18em] text-[#949494]">
                      0{index + 1}
                    </span>

                    <h3 className="text-[24px] font-normal leading-[1.25] tracking-[-0.5px] text-[#242424] lg:text-[26px]">
                      {titleCaseHeading(software.title)}
                    </h3>
                  </div>

                  {/* ICON */}
                  <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-[8px] bg-[#f5f7fb] transition-all duration-300 group-hover:bg-[#eef1f8]">
                    <img
                      src={software.icon}
                      alt={`${software.title} icon`}
                      loading="lazy"
                      decoding="async"
                      className="h-[48px] w-[48px] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="relative z-10 mt-5 max-w-[450px] text-[15px] font-light leading-[1.7] tracking-[-0.15px] text-[#606060] lg:text-[16px]">
                  {software.description}
                </p>

                {/* BOTTOM ACTION */}
                <div className="relative z-10 mt-auto flex items-center justify-between border-t border-[#e8e8e8] pt-5">
                  {/* VIEW DEMO */}
                  <button
                    type="button"
                    onClick={() => openDemo(software)}
                    className="group/demo inline-flex h-[44px] items-center justify-center gap-3 rounded-[4px] border border-[#193175] px-5 text-[14px] font-medium text-[#193175] transition-all duration-300 hover:bg-[#193175] hover:text-white"
                  >
                    <span>View Demo</span>

                    <ArrowRight
                      size={17}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover/demo:translate-x-1"
                    />
                  </button>

                  {/* PAGE LINK */}
                  <Link
                    href={software.href}
                    aria-label={`View ${software.title}`}
                    className="group/link flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#f5f5f5] transition-all duration-300 hover:bg-[#193175]"
                  >
                    <ArrowRight
                      size={23}
                      strokeWidth={1.7}
                      className="text-[#193175] transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:text-white"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <style jsx>{`
          .software-card::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: linear-gradient(
              135deg,
              rgba(25, 49, 117, 0.03),
              transparent 45%
            );
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .software-card:hover::after {
            opacity: 1;
          }
        `}</style>
      </section>

      {/* DEMO POPUP */}
      {selectedDemo && (
        <DemoForm
          isOpen={true}
          onClose={closeDemo}
          demoType={selectedDemo.demoType}
          demoHref={selectedDemo.demoHref}
        />
      )}
    </>
  );
}