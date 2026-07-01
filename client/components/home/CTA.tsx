/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import PopupForm from "../PopupForm";
export default function CtaSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <section className="lazy-section bg-white py-12">
      <div className="mx-auto max-w-450 px-8 lg:px-10">
        <div
          className="flex min-h-65 overflow-hidden rounded-none bg-[#3C5B9B] md:min-h-75"
          data-aos="zoom-in"
        >
          {/* LEFT IMAGE */}
          <div className="hidden w-[32%] shrink-0 md:block">
            <img
              src="/about.avif"
              alt="BrainADZ Live AI Technology"
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
                Build smarter digital systems with BrainADZ Live
              </h3>

              <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                Discover how our team can help you transform hardware,
                software, automation, and AI into reliable business solutions.
              </p>
            </div>

            {/* BUTTON */}
            <button
              type="button"
              onClick={() => setIsPopupOpen(true)}
             className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#3C5B9B] md:min-w-57.5 cursor-pointer"
            >
              Enquire Now
              <span className="text-[20px] leading-none">↗</span>
            </button>
          </div>
        </div>
              <PopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
      </div>

    </section>
    
  );
}