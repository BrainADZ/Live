"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[420px] overflow-hidden bg-black text-white md:min-h-[480px] lg:min-h-[540px]">
      <img
        src="/hero/abouthero.jpg"
        alt="About BrainADZ Live"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[540px] max-w-[1800px] flex-col px-5 py-10 md:min-h-[600px] md:px-8 lg:min-h-[540px] lg:px-12">
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
          className="mt-12 max-w-[820px] md:mt-14"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
            About BrainADZ Live
          </h1>
        </div>

        <div
          className="mt-auto pb-8 md:pb-9 lg:pb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="max-w-[780px] text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
            Creators, partners and clients putting technology to work in the
            real world
          </p>

          <div className="mt-8">
            <a
              href="/contact-us"
              className="inline-flex h-[58px] min-w-[225px] items-center justify-center gap-4 rounded-full bg-[#3C5B9B] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
            >
              Enquire Now
              <span className="text-[20px] leading-none">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}