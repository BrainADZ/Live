/* eslint-disable @next/next/no-img-element */
"use client";

import { type FormEvent, useEffect, useId, useRef, useState } from "react";
import { getApiUrl } from "@/lib/api";
import { prepareErpDemoLead } from "@/lib/metaPixel";
import {
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Mail,
  PencilLine,
  Phone,
  Send,
  UserRound,
  X,
} from "lucide-react";

type DemoFormProps = {
  isOpen: boolean;
  onClose: () => void;
  demoHref?: string;
  demoType?: "crm" | "erp" | "pos" | "hospitality";
  successHref?: "/thank-you" | "/smart-erp/thank-you";
  embedded?: boolean;
};

const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501+ employees",
];

export default function DemoForm({
  isOpen,
  onClose,
  demoType,
  successHref = "/thank-you",
  embedded = false,
}: DemoFormProps) {
  const formId = useId();
  const requestId = useRef<string | null>(null);
  const requestPayload = useRef("");
  const submissionPending = useRef(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submissionPending.current) return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    const campaign = new URLSearchParams(window.location.search);
    const payload = {
      demoType: demoType || "software",
      name: String(fields.get("name") || "").trim(),
      companyName: String(fields.get("companyName") || "").trim(),
      email: String(fields.get("email") || "").trim(),
      phone: String(fields.get("phone") || "").trim(),
      companySize: fields.get("companySize"),
      requirements: String(fields.get("requirements") || "").trim(),
      pageUrl: window.location.href,
      campaign: Object.fromEntries(
        [
          "utm_source",
          "utm_medium",
          "utm_campaign",
          "utm_term",
          "utm_content",
          "gclid",
        ].map((key) => [key, campaign.get(key) || ""]),
      ),
    };
    const fingerprint = JSON.stringify(payload);
    if (requestPayload.current !== fingerprint || !requestId.current) {
      requestId.current = window.crypto.randomUUID();
      requestPayload.current = fingerprint;
    }
    submissionPending.current = true;
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(getApiUrl("/api/demo-request"), {
        method: "POST",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestId: requestId.current,
          ...payload,
        }),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Unable to submit your demo request. Please try again.",
        );
      }

      if (successHref === "/smart-erp/thank-you") {
        prepareErpDemoLead(data.requestId || requestId.current);
      }
      form.reset();
      requestId.current = null;
      onClose();
      window.location.assign(successHref);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to submit your demo request. Please try again.",
      );
    } finally {
      submissionPending.current = false;
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!isOpen || embedded) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose, embedded]);

  if (!isOpen) return null;

  const fieldClass =
    "h-12.5 w-full rounded-[10px] border border-[#d4deeb] bg-white pl-11 pr-4 text-[14px] font-light text-[#243247] outline-none transition placeholder:text-[#607089] focus:border-[#193175] focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]";
  const selectClass =
    "h-12.5 w-full appearance-none rounded-[10px] border border-[#d4deeb] bg-white px-4 pr-10 text-[14px] font-light text-[#607089] outline-none transition focus:border-[#193175] focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]";
  const iconClass =
    "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7b8492]";

  return (
    <div
      className={
        embedded
          ? "w-full"
          : "fixed inset-0 z-9999 flex items-center justify-center bg-black/60 px-4 py-5 backdrop-blur-md"
      }
    >
      {!embedded && (
        <button
          type="button"
          aria-label="Close demo form"
          onClick={onClose}
          className="absolute inset-0 cursor-default"
        />
      )}

      <div
        className={
          embedded
            ? "w-full bg-white"
            : "relative z-10 grid max-h-[94vh] w-full max-w-295 overflow-hidden rounded-3xl bg-white shadow-[0_35px_120px_rgba(0,0,0,0.35)] lg:grid-cols-[0.9fr_1.1fr]"
        }
      >
        {!embedded && (
          <button
            type="button"
            aria-label="Close demo form"
            onClick={onClose}
            className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#6d6d6d] shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition hover:bg-[#193175] hover:text-white"
          >
            <X
              size={24}
              strokeWidth={2.2}
            />
          </button>
        )}

        {!embedded && (
          <div className="relative hidden min-h-180 overflow-hidden bg-black lg:block">
            <img
              src="/hero/crm-software.jpg"
              alt="BrainADZ demo preview"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.58)_48%,rgba(0,0,0,0.94)_100%)]" />
            <div className="absolute inset-0 bg-[#193175]/20" />

            <div className="relative z-10 flex h-full flex-col justify-end p-9 text-white">
              <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#a9c5ff]">
                Product Walkthrough
              </p>
              <h2 className="max-w-100 text-[44px] font-normal leading-[1.05] tracking-[-1.4px]">
                Request a Focused Platform Demo.
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
                  <div
                    key={item}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#a9c5ff]"
                    />
                    <span className="text-[14px] font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div
          className={
            embedded
              ? "w-full"
              : "max-h-[94vh] overflow-y-auto px-5 py-7 md:px-4 md:py-8 lg:px-9"
          }
        >
          <div className={embedded ? "" : "pr-12"}>
            {!embedded && (
              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#193175]">
                View Demo
              </p>
            )}
            <h2
              className={
                embedded
                  ? "text-[25px] font-medium leading-tight tracking-[-0.5px] text-[#303030]"
                  : "text-[34px] font-normal leading-tight tracking-[-0.9px] text-black md:text-[42px]"
              }
            >
              Request a Demo
            </h2>
            <p
              className={
                embedded
                  ? "mt-2 text-[14px] leading-[1.6] text-black/60"
                  : "mt-3 max-w-150 text-[14px] font-light leading-[1.65] text-black/58"
              }
            >
              {embedded && demoType === "erp"
                ? "Tell us about your business to explore the ERP demo."
                : "Fill in your details. We will email your demo access to you."}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className={
              embedded
                ? "mt-5 grid grid-cols-1 gap-3 md:grid-cols-2"
                : "mt-6 grid grid-cols-1 gap-4 md:grid-cols-2"
            }
          >
            <div className="relative">
              <label
                className="sr-only"
                htmlFor={`${formId}-demo-full-name`}
              >
                Full name
              </label>
              <UserRound
                className={iconClass}
                size={19}
                strokeWidth={1.8}
              />
              <input
                id={`${formId}-demo-full-name`}
                name="name"
                autoComplete="name"
                maxLength={100}
                type="text"
                required
                placeholder="Full name"
                className={fieldClass}
              />
            </div>

            <div className="relative">
              <label
                className="sr-only"
                htmlFor={`${formId}-demo-company-name`}
              >
                Company name
              </label>
              <BriefcaseBusiness
                className={iconClass}
                size={19}
                strokeWidth={1.8}
              />
              <input
                id={`${formId}-demo-company-name`}
                name="companyName"
                autoComplete="organization"
                maxLength={200}
                type="text"
                required
                placeholder="Company name"
                className={fieldClass}
              />
            </div>

            <div className="relative">
              <label
                className="sr-only"
                htmlFor={`${formId}-demo-work-email`}
              >
                Work email
              </label>
              <Mail
                className={iconClass}
                size={19}
                strokeWidth={1.8}
              />
              <input
                id={`${formId}-demo-work-email`}
                name="email"
                autoComplete="email"
                maxLength={254}
                type="email"
                required
                placeholder="Work email"
                className={fieldClass}
              />
            </div>

            <div className="relative">
              <label
                className="sr-only"
                htmlFor={`${formId}-demo-phone-number`}
              >
                Phone number
              </label>
              <Phone
                className={iconClass}
                size={19}
                strokeWidth={1.8}
              />
              <input
                id={`${formId}-demo-phone-number`}
                name="phone"
                autoComplete="tel"
                maxLength={30}
                type="tel"
                required
                placeholder="Phone number"
                className={fieldClass}
              />
            </div>

            <div className="relative md:col-span-2">
              <label
                className="sr-only"
                htmlFor={`${formId}-demo-company-size`}
              >
                Company size
              </label>
              <select
                id={`${formId}-demo-company-size`}
                name="companySize"
                required
                className={selectClass}
              >
                <option value="">Company size</option>
                {companySizes.map((size) => (
                  <option
                    key={size}
                    value={size}
                  >
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
              <label
                className="sr-only"
                htmlFor={`${formId}-demo-requirements`}
              >
                Describe your requirements
              </label>
              <PencilLine
                className="pointer-events-none absolute left-4 top-4 text-[#7b8492]"
                size={19}
                strokeWidth={1.8}
              />
              <textarea
                id={`${formId}-demo-requirements`}
                name="requirements"
                maxLength={4000}
                rows={embedded ? 3 : 4}
                required
                placeholder="Describe your requirements"
                className="w-full resize-none rounded-[10px] border border-[#d4deeb] bg-white px-4 py-3.5 pl-11 text-[14px] font-light text-[#243247] outline-none transition placeholder:text-[#607089] focus:border-[#193175] focus:shadow-[0_0_0_4px_rgba(60,91,155,0.08)]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-12.5 w-full items-center justify-center gap-3 rounded-[10px] bg-[#193175] px-6 text-[14px] font-semibold text-white shadow-[0_16px_34px_rgba(60,91,155,0.25)] transition hover:-translate-y-0.5 hover:bg-[#2f4a82] disabled:cursor-not-allowed disabled:opacity-65 md:col-span-2"
            >
              <Send size={18} />
              {isSubmitting ? "Submitting Request..." : "Submit Request"}
            </button>

            {submitError && (
              <p
                role="alert"
                className="text-center text-[13px] text-red-600 md:col-span-2"
              >
                {submitError}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
