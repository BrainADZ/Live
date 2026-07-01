/* eslint-disable @next/next/no-img-element */
"use client";

import { type FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Languages,
  Mail,
  PencilLine,
  Phone,
  RotateCw,
  Send,
  UserRound,
  X,
} from "lucide-react";

type DemoFormProps = {
  isOpen: boolean;
  onClose: () => void;
  demoHref?: string;
};

const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501+ employees",
];

const demoLanguages = ["English", "Hindi", "Hinglish"];

const captchaCodes = ["B7K4", "P9R2", "M5Q8", "T3X6"];

export default function DemoForm({
  isOpen,
  onClose,
  demoHref = "/demos",
}: DemoFormProps) {
  const router = useRouter();
  const [captchaCode, setCaptchaCode] = useState(captchaCodes[0]);
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const refreshCaptcha = () => {
    const currentIndex = captchaCodes.indexOf(captchaCode);
    const nextIndex = (currentIndex + 1) % captchaCodes.length;

    setCaptchaCode(captchaCodes[nextIndex]);
    setCaptchaValue("");
    setCaptchaError("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (captchaValue.trim().toUpperCase() !== captchaCode) {
      setCaptchaError("Please enter the captcha shown.");
      return;
    }

    setCaptchaError("");
    onClose();
    router.push(demoHref);
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

  const fieldClass =
    "h-12.5 w-full rounded-[10px] border border-[#d4deeb] bg-white pl-11 pr-4 text-[14px] font-light text-[#243247] outline-none transition placeholder:text-[#607089] focus:border-[#3C5B9B] focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]";
  const selectClass =
    "h-12.5 w-full appearance-none rounded-[10px] border border-[#d4deeb] bg-white px-4 pr-10 text-[14px] font-light text-[#607089] outline-none transition focus:border-[#3C5B9B] focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]";
  const iconClass =
    "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7b8492]";

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-5 backdrop-blur-md">
      <button
        type="button"
        aria-label="Close demo form"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
      />

      <div className="relative z-10 grid max-h-[94vh] w-full max-w-[1180px] overflow-hidden rounded-[24px] bg-white shadow-[0_35px_120px_rgba(0,0,0,0.35)] lg:grid-cols-[0.9fr_1.1fr]">
        <button
          type="button"
          aria-label="Close demo form"
          onClick={onClose}
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#6d6d6d] shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition hover:bg-[#3C5B9B] hover:text-white"
        >
          <X size={24} strokeWidth={2.2} />
        </button>

        <div className="relative hidden min-h-[720px] overflow-hidden bg-black lg:block">
          <img
            src="/hero/crm.avif"
            alt="BrainADZ demo preview"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.58)_48%,rgba(0,0,0,0.94)_100%)]" />
          <div className="absolute inset-0 bg-[#3C5B9B]/20" />

          <div className="relative z-10 flex h-full flex-col justify-end p-9 text-white">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#a9c5ff]">
              Product Walkthrough
            </p>
            <h2 className="max-w-100 text-[44px] font-light leading-[1.05] tracking-[-1.4px]">
              Request a focused platform demo.
            </h2>
            <p className="mt-5 max-w-100 text-[15px] font-light leading-[1.7] text-white/78">
              Tell us about your company and requirements so we can route you
              to the right CRM, ERP, signage or trial room preview.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "Guided product walkthrough",
                "Business-fit recommendations",
                "Fast access to demo library",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 size={18} className="text-[#a9c5ff]" />
                  <span className="text-[14px] font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-h-[94vh] overflow-y-auto px-5 py-7 md:px-8 md:py-8 lg:px-9">
          <div className="pr-12">
            <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#3C5B9B]">
              View Demo
            </p>
            <h2 className="text-[34px] font-light leading-tight tracking-[-0.9px] text-black md:text-[42px]">
              Request a demo
            </h2>
            <p className="mt-3 max-w-150 text-[14px] font-light leading-[1.65] text-black/58">
              Fill this registration form and continue to our demo library.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <div className="relative">
              <label className="sr-only" htmlFor="demo-full-name">
                Full name
              </label>
              <UserRound className={iconClass} size={19} strokeWidth={1.8} />
              <input
                id="demo-full-name"
                type="text"
                required
                placeholder="Full name"
                className={fieldClass}
              />
            </div>

            <div className="relative">
              <label className="sr-only" htmlFor="demo-company-website">
                Company website
              </label>
              <BriefcaseBusiness
                className={iconClass}
                size={19}
                strokeWidth={1.8}
              />
              <input
                id="demo-company-website"
                type="text"
                required
                placeholder="Company website"
                className={fieldClass}
              />
            </div>

            <div className="relative">
              <label className="sr-only" htmlFor="demo-work-email">
                Work email
              </label>
              <Mail className={iconClass} size={19} strokeWidth={1.8} />
              <input
                id="demo-work-email"
                type="email"
                required
                placeholder="Work email"
                className={fieldClass}
              />
            </div>

            <div className="relative">
              <label className="sr-only" htmlFor="demo-phone-number">
                Phone number
              </label>
              <Phone className={iconClass} size={19} strokeWidth={1.8} />
              <input
                id="demo-phone-number"
                type="tel"
                required
                placeholder="Phone number"
                className={fieldClass}
              />
            </div>

            <div className="relative">
              <label className="sr-only" htmlFor="demo-industry">
                Industry
              </label>
              <Building2 className={iconClass} size={19} strokeWidth={1.8} />
              <input
                id="demo-industry"
                type="text"
                required
                placeholder="Industry"
                className={fieldClass}
              />
            </div>

            <div className="relative">
              <label className="sr-only" htmlFor="demo-company-size">
                Company size
              </label>
              <select id="demo-company-size" required className={selectClass}>
                <option value="">Company size</option>
                {companySizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9aa3af]"
                size={20}
                strokeWidth={1.8}
              />
            </div>

            <div className="relative md:col-span-2">
              <label className="sr-only" htmlFor="demo-requirements">
                Describe your requirements
              </label>
              <PencilLine
                className="pointer-events-none absolute left-4 top-4 text-[#7b8492]"
                size={19}
                strokeWidth={1.8}
              />
              <textarea
                id="demo-requirements"
                rows={4}
                required
                placeholder="Describe your requirements"
                className="w-full resize-none rounded-[10px] border border-[#d4deeb] bg-white px-4 py-3.5 pl-11 text-[14px] font-light text-[#243247] outline-none transition placeholder:text-[#607089] focus:border-[#3C5B9B] focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]"
              />
            </div>

            <div className="relative">
              <label className="sr-only" htmlFor="demo-language">
                Preferred demo language
              </label>
              <Languages className={iconClass} size={19} strokeWidth={1.8} />
              <select
                id="demo-language"
                required
                className={`${selectClass} pl-11`}
              >
                <option value="">Preferred demo language</option>
                {demoLanguages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9aa3af]"
                size={20}
                strokeWidth={1.8}
              />
            </div>

            <div className="relative">
              <label className="sr-only" htmlFor="demo-source">
                How did you hear about BrainADZ?
              </label>
              <HelpCircle className={iconClass} size={19} strokeWidth={1.8} />
              <input
                id="demo-source"
                type="text"
                placeholder="How did you hear about BrainADZ?"
                className={fieldClass}
              />
            </div>

            <div className="md:col-span-2">
              <div className="grid gap-3 sm:grid-cols-[160px_1fr] sm:items-center">
                <div className="flex h-12.5 items-center justify-between rounded-[10px] border border-[#d4deeb] bg-[#f5f8fd] px-4">
                  <span className="font-mono text-[22px] font-semibold tracking-[0.22em] text-[#2f4a82]">
                    {captchaCode}
                  </span>
                  <button
                    type="button"
                    aria-label="Refresh captcha"
                    onClick={refreshCaptcha}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-[#3C5B9B] transition hover:bg-[#e6efff]"
                  >
                    <RotateCw size={18} />
                  </button>
                </div>

                <div>
                  <label className="sr-only" htmlFor="demo-captcha">
                    Enter the captcha
                  </label>
                  <input
                    id="demo-captcha"
                    type="text"
                    required
                    value={captchaValue}
                    onChange={(event) => {
                      setCaptchaValue(event.target.value);
                      setCaptchaError("");
                    }}
                    placeholder="Enter the captcha"
                    className="h-12.5 w-full rounded-[10px] border border-[#d4deeb] bg-white px-4 text-[14px] font-light uppercase text-[#243247] outline-none transition placeholder:normal-case placeholder:text-[#607089] focus:border-[#3C5B9B] focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]"
                  />
                </div>
              </div>

              {captchaError && (
                <p className="mt-2 text-[13px] font-light text-red-600">
                  {captchaError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex h-12.5 w-full items-center justify-center gap-3 rounded-[10px] bg-[#3C5B9B] px-6 text-[14px] font-semibold text-white shadow-[0_16px_34px_rgba(60,91,155,0.25)] transition hover:-translate-y-0.5 hover:bg-[#2f4a82] md:col-span-2"
            >
              <Send size={18} />
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
