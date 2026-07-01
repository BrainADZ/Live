/* eslint-disable @next/next/no-img-element */
"use client";

import { type FormEvent, useEffect, useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import {
  menuContent,
  solutionCategories,
  type Category,
} from "@/data/solutionMenu";

type PopupFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | "">("");
  const [selectedService, setSelectedService] = useState("");
  const selectedServices = selectedCategory ? menuContent[selectedCategory] : [];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-5">
      <button
        type="button"
        aria-label="Close enquiry popup"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/55 backdrop-blur-md"
      />

      <div className="relative z-10 grid max-h-[92vh] w-full max-w-[1120px] overflow-hidden rounded-[30px] bg-white shadow-[0_35px_120px_rgba(0,0,0,0.35)] lg:grid-cols-[0.9fr_1.1fr]">
        <button
          type="button"
          aria-label="Close popup"
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-[#3C5B9B] lg:border-black/10 lg:bg-white lg:text-[#3C5B9B] lg:hover:bg-[#3C5B9B] lg:hover:text-white"
        >
          <X size={22} />
        </button>

        <div className="relative hidden min-h-[680px] overflow-hidden bg-black lg:block">
          <img
            src="/about/Enow.jpeg"
            alt="BrainADZ Live enquiry"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.55)_45%,rgba(0,0,0,0.92)_100%)]" />
          <div className="absolute inset-0 bg-[#3C5B9B]/20" />

          <div className="relative z-10 flex h-full flex-col justify-end p-10">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-[#9bbcff]">
              Enquire Now
            </p>

            <h2 className="max-w-105 text-[42px] font-light leading-[1.05] tracking-[-1.6px] text-white">
              Turn your idea into a reliable digital solution.
            </h2>

            <p className="mt-5 max-w-105 text-[16px] font-light leading-[1.7] text-white/78">
              Select the right category and share your requirement. Our team
              will help you plan the right software, platform, product or
              industry solution.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "Complete solution category coverage",
                "Business-first consultation",
                "Scalable technology planning",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 size={19} className="text-[#9bbcff]" />
                  <span className="text-[15px] font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-h-[92vh] overflow-y-auto bg-white px-5 py-8 md:px-8 lg:px-10 lg:py-10">
          <div className="mb-8 pr-12 lg:pr-8">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#3C5B9B]">
              Enquire Now
            </p>

            <h3 className="text-[32px] font-light leading-[1.12] tracking-[-1.1px] text-[#262626] md:text-[40px]">
              Tell us about your requirement.
            </h3>

            <p className="mt-4 max-w-150 text-[15px] font-light leading-[1.7] text-[#525252] md:text-[16px]">
              Choose the main category and sub category, then our team will
              connect with the right solution.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <div>
              <label className="mb-2 block text-[13px] font-light text-[#525252]">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="h-13 w-full rounded-[12px] border border-[#dfe6f1] bg-[#f8faff] px-4 text-[14px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#3c5b9b] focus:bg-white focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-light text-[#525252]">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="h-13 w-full rounded-[12px] border border-[#dfe6f1] bg-[#f8faff] px-4 text-[14px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#3c5b9b] focus:bg-white focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-light text-[#525252]">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 00000 00000"
                className="h-13 w-full rounded-[12px] border border-[#dfe6f1] bg-[#f8faff] px-4 text-[14px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#3c5b9b] focus:bg-white focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-light text-[#525252]">
                Company / Organisation
              </label>
              <input
                type="text"
                placeholder="Your company name"
                className="h-13 w-full rounded-[12px] border border-[#dfe6f1] bg-[#f8faff] px-4 text-[14px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#3c5b9b] focus:bg-white focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-light text-[#525252]">
                Main Category *
              </label>
              <select
                value={selectedCategory}
                onChange={(event) => {
                  setSelectedCategory(event.target.value as Category);
                  setSelectedService("");
                }}
                required
                className="h-13 w-full rounded-[12px] border border-[#dfe6f1] bg-[#f8faff] px-4 text-[14px] font-light text-[#262626] outline-none transition focus:border-[#3c5b9b] focus:bg-white focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]"
              >
                <option value="" disabled>
                  Choose main category
                </option>

                {solutionCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-light text-[#525252]">
                Sub Category *
              </label>
              <select
                value={selectedService}
                disabled={!selectedCategory}
                onChange={(event) => setSelectedService(event.target.value)}
                required
                className="h-13 w-full rounded-[12px] border border-[#dfe6f1] bg-[#f8faff] px-4 text-[14px] font-light text-[#262626] outline-none transition disabled:cursor-not-allowed disabled:opacity-60 focus:border-[#3c5b9b] focus:bg-white focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]"
              >
                <option value="" disabled>
                  {selectedCategory
                    ? "Choose sub category"
                    : "Select main category first"}
                </option>

                {selectedServices.map((service) => (
                  <option key={service.href} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-[13px] font-light text-[#525252]">
                Requirement Details *
              </label>
              <textarea
                rows={5}
                required
                placeholder="Tell us about your requirement, timeline, and any specific needs..."
                className="w-full resize-none rounded-[12px] border border-[#dfe6f1] bg-[#f8faff] px-4 py-4 text-[14px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#3c5b9b] focus:bg-white focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-[12px] bg-[#3c5b9b] px-6 text-[15px] font-normal text-white shadow-[0_18px_42px_rgba(60,91,155,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2f4a82] md:w-auto md:min-w-60"
              >
                <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
