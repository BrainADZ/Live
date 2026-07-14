"use client";

import { ArrowRight } from "lucide-react";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function AboutCompany() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 text-[#161616] md:px-8 lg:px-12 lg:py-28">
      <div className="relative z-10 mx-auto max-w-450">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="max-w-145" data-aos="fade-right">
            <p className="mb-5 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
              About Company
            </p>

            <h2 className="text-[46px] font-light leading-[1.05] tracking-[-2px] text-[#262626] sm:text-[56px] md:text-[66px] lg:text-[74px]">
              Technology
              <br />
              Built Around
              <br />
              Real Work
            </h2>

            <p className="mt-9 max-w-140 text-[17px] font-light leading-[1.65] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              BrainADZ Live is a technology company working across custom
              software, CRM and ERP platforms, digital signage systems,
              customer-facing technology and solution consulting.
            </p>

            <p className="mt-5 max-w-140 text-[16px] font-light leading-[1.7] text-[#616161] md:text-[18px]">
              We focus on understanding how a business actually operates before
              deciding what should be designed, developed, integrated or
              deployed.
            </p>

            <Link
              href="/software-services"
              className="group mt-12 inline-flex h-13 min-w-55 items-center justify-between rounded-full bg-[#193175] px-6 text-[15px] font-normal text-white shadow-[0_14px_35px_rgba(60,91,155,0.20)] transition-all duration-300 hover:bg-[#2f4a82]"
            >
              Explore our work

              <span className="text-[22px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={22} strokeWidth={1.6} />
              </span>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative" data-aos="fade-left" data-aos-delay="100">
            <div className="relative overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-[#f8faff] shadow-[0_24px_80px_rgba(22,22,22,0.08)]">
              <img
                src="/home-about.jpg"
                alt="BrainADZ Live technology and project delivery"
                className="h-90 w-full object-cover md:h-130 lg:h-142.5"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_48%,rgba(60,91,155,0.08)_100%)]" />
            </div>

            <div className="absolute -inset-px -z-10 rounded-[20px] bg-[#193175]/10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}