/* eslint-disable @next/next/no-img-element */
"use client";

import { type FormEvent, useEffect, useState } from "react";
import { CheckCircle2, Send, X } from "lucide-react";

import {
  menuContent,
  solutionCategories,
  type Category,
} from "@/data/solutionMenu";

type PopupFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const industryServices = [
  "healthcare",
  "health care",
  "educare",
  "education tech",
  "education technology",
  "edtech",
  "finance tech",
  "financial technology",
  "fintech",
  "property tech",
  "property technology",
  "proptech",
  "retail",
  "transport",
  "transportation",
  "telecom",
  "telecommunication",
  "automotive",
  "insurance tech",
  "insurance technology",
  "insurtech",
  "travel & hospitality",
  "travel and hospitality",
  "facility management",
  "media & entertainment",
  "media and entertainment",
];

const normalizeText = (value: string) =>
  value.toLowerCase().trim().replace(/\s+/g, " ");

const isIndustryService = (title: string) => {
  const normalizedTitle = normalizeText(title);

  return industryServices.some((item) =>
    normalizedTitle.includes(normalizeText(item))
  );
};

export default function PopupForm({
  isOpen,
  onClose,
}: PopupFormProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<Category | "">("");

  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const visibleSolutionCategories = solutionCategories.filter(
    (category) => normalizeText(String(category)) !== "industries"
  );

  const selectedServices = selectedCategory
    ? (menuContent[selectedCategory] || []).filter(
        (service) => !isIndustryService(service.title)
      )
    : [];

  const resetPopup = () => {
    setSelectedCategory("");
    setSelectedService("");
    setErrorMessage("");
    setShowThankYou(false);
  };

  const handleClose = () => {
    if (isSubmitting) return;

    resetPopup();
    onClose();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const phoneNumber = String(formData.get("phone") || "");

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: `+91 ${phoneNumber}`,
      company: formData.get("company"),
      solution: selectedCategory,
      service: selectedService,
      message: formData.get("message"),
      pageUrl: window.location.href,
    };

    try {
      setIsSubmitting(true);
      setErrorMessage("");

      const response = await fetch(
        "http://localhost:5000/api/enquire-now",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to send enquiry. Please try again."
        );
      }

      form.reset();
      setSelectedCategory("");
      setSelectedService("");
      setErrorMessage("");
      setShowThankYou(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      setSelectedCategory("");
      setSelectedService("");
      setErrorMessage("");
      setShowThankYou(false);

      onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  /* Thank You Popup */

  if (showThankYou) {
    return (
      <div className="fixed inset-0 z-9999 flex items-center justify-center px-4 py-5">
        <button
          type="button"
          aria-label="Close thank you popup"
          onClick={handleClose}
          className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-md"
        />

        <div className="relative z-10 w-full max-w-135 overflow-hidden rounded-[30px] bg-white shadow-[0_35px_120px_rgba(0,0,0,0.4)]">
          <button
            type="button"
            aria-label="Close thank you popup"
            onClick={handleClose}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-[#193175]"
          >
            <X size={21} />
          </button>

          <div className="relative overflow-hidden bg-[#193175] px-6 pb-14 pt-16 text-center md:px-10">
            <div className="absolute -left-24 -top-24 h-60 w-60 rounded-full border border-white/10" />
            <div className="absolute -bottom-28 -right-24 h-70 w-70 rounded-full border border-white/10" />

            <div className="relative mx-auto flex h-22 w-22 items-center justify-center rounded-full bg-white shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
              <CheckCircle2
                size={47}
                strokeWidth={1.8}
                className="text-[#193175]"
              />
            </div>

            <p className="relative mt-7 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#a9c4ff]">
              Enquiry Submitted
            </p>

            <h2 className="relative mt-3 text-[40px] font-light tracking-[-1.4px] text-white md:text-[46px]">
              Thank you!
            </h2>

            <p className="relative mx-auto mt-4 max-w-100 text-[15px] font-light leading-[1.7] text-white/75">
              Your enquiry has been submitted successfully.
            </p>
          </div>

          <div className="px-6 py-9 text-center md:px-10">
            <h3 className="text-[23px] font-normal tracking-[-0.5px] text-[#262626]">
              We&apos;ll connect with you soon.
            </h3>

            <p className="mx-auto mt-3 max-w-100 text-[15px] font-light leading-[1.75] text-[#686868]">
              Our team will review your requirement and connect with you with
              the right solution.
            </p>

            <button
              type="button"
              onClick={handleClose}
              className="mt-7 inline-flex h-13 min-w-48 items-center justify-center rounded-xl bg-[#193175] px-7 text-[15px] text-white transition hover:-translate-y-0.5 hover:bg-[#2f4a82]"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* Main Enquiry Popup */

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center px-4 py-5">
      <button
        type="button"
        aria-label="Close enquiry popup"
        onClick={handleClose}
        className="absolute inset-0 cursor-default bg-black/55 backdrop-blur-md"
      />

      <div className="relative z-10 grid max-h-[92vh] w-full max-w-280 overflow-hidden rounded-[30px] bg-white shadow-[0_35px_120px_rgba(0,0,0,0.35)] lg:grid-cols-[0.9fr_1.1fr]">
        <button
          type="button"
          aria-label="Close popup"
          onClick={handleClose}
          className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-[#193175] lg:border-black/10 lg:bg-white lg:text-[#193175] lg:hover:bg-[#193175] lg:hover:text-white"
        >
          <X size={22} />
        </button>

        {/* Left Image Section */}

        <div className="relative hidden min-h-170 overflow-hidden bg-black lg:block">
          <img
            src="/about/Enow.jpeg"
            alt="BrainADZ Live enquiry"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.55)_45%,rgba(0,0,0,0.92)_100%)]" />
          <div className="absolute inset-0 bg-[#193175]/20" />

          <div className="relative z-10 flex h-full flex-col justify-end p-10">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-[#9bbcff]">
              Enquire Now
            </p>

            <h2 className="max-w-105 text-[42px] font-light leading-[1.05] tracking-[-1.6px] text-white">
              Turn your idea into a reliable digital solution.
            </h2>

            <p className="mt-5 max-w-105 text-[16px] font-light leading-[1.7] text-white/78">
              Select the right category and share your requirement. Our team
              will help you plan the right software, platform or product
              solution.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "Complete solution category coverage",
                "Business-first consultation",
                "Scalable technology planning",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-white/90"
                >
                  <CheckCircle2 size={19} className="text-[#9bbcff]" />

                  <span className="text-[15px] font-light">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Form Section */}

        <div className="max-h-[92vh] overflow-y-auto bg-white px-5 py-8 md:px-8 lg:px-10 lg:py-10">
          <div className="mb-8 pr-12 lg:pr-8">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#193175]">
              Enquire Now
            </p>

            <h3 className="text-[32px] font-light leading-[1.12] tracking-[-1.1px] text-[#262626] md:text-[40px]">
              Tell us about your requirement.
            </h3>

            <p className="mt-4 max-w-150 text-[15px] font-light leading-[1.7] text-[#525252] md:text-[16px]">
              Choose the Solution and Service, then our team will connect you
              with the right solution.
            </p>
          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <div>
              <label className="mb-2 block text-[13px] font-light text-[#525252]">
                Full Name *
              </label>

              <input
                name="name"
                type="text"
                required
                placeholder="Enter your full name"
                className="h-13 w-full rounded-xl border border-[#dfe6f1] bg-[#f8faff] px-4 text-[14px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#193175] focus:bg-white focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-light text-[#525252]">
                Email Address *
              </label>

              <input
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="h-13 w-full rounded-xl border border-[#dfe6f1] bg-[#f8faff] px-4 text-[14px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#193175] focus:bg-white focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-light text-[#525252]">
                Phone Number *
              </label>

              <div className="flex h-13 w-full overflow-hidden rounded-xl border border-[#dfe6f1] bg-[#f8faff] transition focus-within:border-[#193175] focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]">
                <div className="flex items-center border-r border-[#dfe6f1] px-4 text-[14px] font-medium text-[#262626]">
                  +91
                </div>

                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  required
                  minLength={10}
                  maxLength={10}
                  pattern="[0-9]{10}"
                  title="Please enter exactly 10 digits"
                  placeholder="00000 00000"
                  onInput={(event) => {
                    event.currentTarget.value = event.currentTarget.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                  }}
                  className="h-full w-full bg-transparent px-4 text-[14px] font-light text-[#262626] outline-none placeholder:text-[#8d8d8d]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-light text-[#525252]">
                Company / Organisation
              </label>

              <input
                name="company"
                type="text"
                placeholder="Your company name"
                className="h-13 w-full rounded-xl border border-[#dfe6f1] bg-[#f8faff] px-4 text-[14px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#193175] focus:bg-white focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-light text-[#525252]">
                Solution *
              </label>

              <select
                value={selectedCategory}
                onChange={(event) => {
                  const value = event.target.value;

                  setSelectedCategory(value as Category);
                  setSelectedService("");
                  setErrorMessage("");
                }}
                required
                className="h-13 w-full rounded-xl border border-[#dfe6f1] bg-[#f8faff] px-4 text-[14px] font-light text-[#262626] outline-none transition focus:border-[#193175] focus:bg-white focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]"
              >
                <option value="" disabled>
                  Choose solution
                </option>

                {visibleSolutionCategories.map((category) => (
                  <option key={String(category)} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-light text-[#525252]">
                Service *
              </label>

              <select
                value={selectedService}
                disabled={!selectedCategory}
                onChange={(event) => {
                  setSelectedService(event.target.value);
                  setErrorMessage("");
                }}
                required
                className="h-13 w-full rounded-xl border border-[#dfe6f1] bg-[#f8faff] px-4 text-[14px] font-light text-[#262626] outline-none transition disabled:cursor-not-allowed disabled:opacity-60 focus:border-[#193175] focus:bg-white focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]"
              >
                <option value="" disabled>
                  {selectedCategory
                    ? "Choose service"
                    : "Select solution first"}
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
                name="message"
                rows={5}
                required
                placeholder="Tell us about your requirement, timeline, and any specific needs..."
                className="w-full resize-none rounded-xl border border-[#dfe6f1] bg-[#f8faff] px-4 py-4 text-[14px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#193175] focus:bg-white focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#193175] px-6 text-[15px] font-normal text-white shadow-[0_18px_42px_rgba(60,91,155,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2f4a82] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto md:min-w-60"
              >
                <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </button>

              {errorMessage && (
                <p className="mt-4 text-[14px] font-light text-red-600">
                  {errorMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}