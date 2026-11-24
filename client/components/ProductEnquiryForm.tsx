"use client";

import { useState, type FormEvent } from "react";
import { getApiUrl } from "@/lib/api";
import { BriefcaseBusiness, ChevronDown, Mail, MapPin, PencilLine, Phone, Send, UserRound } from "lucide-react";

const fieldClass = "h-12 w-full rounded-full border border-[#d6d6d6] bg-white pl-11 pr-4 text-sm text-[#243247] outline-none placeholder:text-[#607089] focus:border-[#193175] focus:ring-4 focus:ring-[#193175]/10";
const iconClass = "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7b8492]";

export default function ProductEnquiryForm({ product, thankYouHref, productVariant }: { product: string; thankYouHref: string; productVariant?: string }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;

    const data = new FormData(event.currentTarget);
    setPending(true);
    setError("");

    try {
      const response = await fetch(getApiUrl("/api/enquire-now"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") || "").trim(),
          email: String(data.get("email") || "").trim(),
          phone: String(data.get("phone") || "").trim(),
          company: String(data.get("company") || "").trim(),
          solution: "Digital Signage Products",
          service: product,
          message: [
            ...(productVariant ? [`Product variant: ${productVariant}`] : []),
            `Location: ${String(data.get("location") || "").trim()}`,
            `Company size: ${String(data.get("companySize") || "").trim()}`,
            `Requirements: ${String(data.get("message") || "").trim()}`,
          ].join("\n"),
          pageUrl: window.location.href,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit your enquiry. Please try again.");
      }
      window.location.assign(thankYouHref);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unable to submit your enquiry. Please try again.");
      setPending(false);
    }
  }

  return (
    <div id="enquire" className="w-full scroll-mt-6">
      <h2 className="text-[25px] font-medium leading-tight text-[#303030]">Request a Quote</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">Tell us about your business and the setup you need.</p>
      <p className="mt-2 text-xs font-medium text-[#193175]">All fields are required.</p>
      <form onSubmit={handleSubmit} className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="relative"><span className="sr-only">Full name</span><UserRound size={19} className={iconClass} /><input name="name" autoComplete="name" required maxLength={160} placeholder="Full name" className={fieldClass} /></label>
        <label className="relative"><span className="sr-only">Phone number</span><Phone size={19} className={iconClass} /><input name="phone" autoComplete="tel" type="tel" inputMode="numeric" pattern="[0-9]{10}" title="Enter a 10-digit phone number" required placeholder="Phone number" className={fieldClass} /></label>
        <label className="relative sm:col-span-2"><span className="sr-only">Work email</span><Mail size={19} className={iconClass} /><input name="email" autoComplete="email" type="email" required maxLength={254} placeholder="Work email" className={fieldClass} /></label>
        <label className="relative sm:col-span-2"><span className="sr-only">Company name</span><BriefcaseBusiness size={19} className={iconClass} /><input name="company" autoComplete="organization" required maxLength={200} placeholder="Company name" className={fieldClass} /></label>
        <label className="relative sm:col-span-2"><span className="sr-only">Location</span><MapPin size={19} className={iconClass} /><input name="location" required maxLength={200} placeholder="Your location (city / area)" className={fieldClass} /></label>
        <label className="relative sm:col-span-2"><span className="sr-only">Company size</span><select name="companySize" required defaultValue="" className="h-12 w-full appearance-none rounded-full border border-[#d6d6d6] bg-white px-5 pr-12 text-sm text-[#607089] outline-none focus:border-[#193175] focus:ring-4 focus:ring-[#193175]/10"><option value="" disabled>Company size</option><option>1-10 employees</option><option>11-50 employees</option><option>51-200 employees</option><option>201-500 employees</option><option>501+ employees</option></select><ChevronDown size={20} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9aa3af]" /></label>
        <label className="relative sm:col-span-2"><span className="sr-only">Describe your requirements</span><PencilLine size={19} className="pointer-events-none absolute left-4 top-4 text-[#7b8492]" /><textarea name="message" required maxLength={4000} rows={4} placeholder="Describe your requirements" className="w-full resize-none rounded-2xl border border-[#d6d6d6] bg-white py-3.5 pl-11 pr-4 text-sm text-[#243247] outline-none placeholder:text-[#607089] focus:border-[#193175] focus:ring-4 focus:ring-[#193175]/10" /></label>
        <button type="submit" disabled={pending} className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#193175] px-6 text-sm font-semibold text-white transition hover:bg-[#26468f] disabled:opacity-60 sm:col-span-2"><Send size={18} />{pending ? "Submitting Request..." : "Submit Request"}</button>
        {error && <p role="alert" className="text-center text-sm text-red-700 sm:col-span-2">{error}</p>}
      </form>
    </div>
  );
}
