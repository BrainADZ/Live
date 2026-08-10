/* eslint-disable @next/next/no-img-element */
"use client";

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
      <section className="bg-white px-5 py-16 md:px-4 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-450">
          {/* TOP HEADING + DESCRIPTION */}
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div data-aos="fade-right">
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Business Software
              </p>

              <h2 className="max-w-180 text-[36px] font-normal leading-[1.15] tracking-[-1px] text-[#242424] md:text-[46px]">
                Our Softwares
              </h2>
            </div>

            <p
              className="max-w-155 text-[22px] font-light leading-[1.45] tracking-[-0.6px] text-[#262626]"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Powerful business platforms designed to{" "}
              <span className="text-[#193175]">simplify operations</span>,
              connect teams and help businesses manage everyday workflows more
              efficiently.
            </p>
          </div>

          {/* SOFTWARE GRID */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {softwares.map((software, index) => (
              <div
                key={software.title}
                data-aos="card-reveal"
                data-aos-delay={index * 100}
                data-aos-duration="520"
                className="software-card group relative flex min-h-75 flex-col justify-between overflow-hidden rounded-[5px] border border-[#c6c6c6] bg-white p-6 transition-colors duration-300 hover:bg-[#eeeeee]"
              >
                {/* ANIMATED BORDER */}
                <span className="border-line border-top" />
                <span className="border-line border-right" />
                <span className="border-line border-bottom" />
                <span className="border-line border-left" />

                {/* TITLE / DESCRIPTION */}
                <div className="relative z-10 min-h-28">
                  <h3 className="max-w-82.5 text-[23px] font-normal leading-[1.35] tracking-[-0.3px] text-[#242424] transition-all duration-300 group-hover:opacity-0">
                    {software.title}
                  </h3>

                  <p className="absolute left-0 top-0 max-w-95 text-[18px] font-light leading-[1.5] tracking-[-0.3px] text-[#242424] opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {software.description}
                  </p>
                </div>

                {/* ICON */}
                <div className="relative z-10 mt-6">
                  <div className="flex h-17.5 w-17.5 items-center justify-center">
                    <img
                      src={software.icon}
                      alt={`${software.title} icon`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* BOTTOM ACTIONS */}
                <div className="relative z-10 mt-7 flex items-center justify-between border-t border-black/10 pt-5">
                  {/* VIEW DEMO BUTTON */}
                  <button
                    type="button"
                    onClick={() => openDemo(software)}
                    className="group/demo inline-flex h-11 items-center justify-center gap-3 rounded-[3px] border border-[#193175] px-5 text-[14px] font-medium text-[#193175] transition-all duration-300 hover:bg-[#193175] hover:text-white"
                  >
                    <span>View Demo</span>

                    <ArrowRight
                      size={18}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover/demo:translate-x-1"
                    />
                  </button>

                  {/* SOFTWARE PAGE LINK */}
                  <Link
                    href={software.href}
                    aria-label={`View ${software.title}`}
                    className="group/link flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#193175]"
                  >
                    <ArrowRight
                      size={30}
                      strokeWidth={1.8}
                      className="text-[#193175] transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:text-white"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .border-line {
            position: absolute;
            z-index: 20;
            background: #193175;
            pointer-events: none;
          }

          .border-top {
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.22s ease;
          }

          .border-right {
            top: 0;
            right: 0;
            width: 2px;
            height: 100%;
            transform: scaleY(0);
            transform-origin: top;
            transition: transform 0.22s ease 0.12s;
          }

          .border-bottom {
            bottom: 0;
            right: 0;
            width: 100%;
            height: 2px;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.22s ease 0.24s;
          }

          .border-left {
            bottom: 0;
            left: 0;
            width: 2px;
            height: 100%;
            transform: scaleY(0);
            transform-origin: bottom;
            transition: transform 0.22s ease 0.36s;
          }

          .software-card:hover .border-top {
            transform: scaleX(1);
          }

          .software-card:hover .border-right {
            transform: scaleY(1);
          }

          .software-card:hover .border-bottom {
            transform: scaleX(1);
          }

          .software-card:hover .border-left {
            transform: scaleY(1);
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