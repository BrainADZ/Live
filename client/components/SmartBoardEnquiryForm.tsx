"use client";

import { useRef, useState, type FormEvent } from "react";
import { getApiUrl } from "@/lib/api";

type Props = { heading: string; subtext?: string; buttonText: string; id?: string };

export default function SmartBoardEnquiryForm({ heading, subtext, buttonText, id }: Props) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
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
          company: String(data.get("company") || "").trim(),
          phone: String(data.get("phone") || "").trim(),
          email: String(data.get("email") || "").trim(),
          solution: "Digital Signage Products",
          service: "Smart Board for Teaching",
          message: `Requirement: ${String(data.get("requirement") || "").trim()}\nMessage: ${String(data.get("message") || "").trim()}`,
          pageUrl: window.location.href,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || "Enquiry submit nahi ho payi. Dobara try karein.");
      window.location.assign("/smart-board-for-teaching/thank-you");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Enquiry submit nahi ho payi. Dobara try karein.");
      setPending(false);
    }
  }

  const field = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#17243b] outline-none focus:border-[#193175] focus:ring-2 focus:ring-[#193175]/15";
  return (
    <div id={id} className="scroll-mt-24 rounded-3xl bg-white p-6 text-[#17243b] shadow-xl shadow-black/10 md:p-8">
      <h2 className="text-2xl font-semibold leading-tight md:text-[28px]">{heading}</h2>
      {subtext && <p className="mt-2 text-sm text-slate-600">{subtext}</p>}
      <form onSubmit={submit} className="mt-6 grid gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor={`${id || "popup"}-name`}>Full Name</label>
        <input id={`${id || "popup"}-name`} className={field} name="name" placeholder="Full Name" autoComplete="name" maxLength={160} required />
        <label className="sr-only" htmlFor={`${id || "popup"}-company`}>Company / Institution Name</label>
        <input id={`${id || "popup"}-company`} className={field} name="company" placeholder="Company / Institution Name" autoComplete="organization" maxLength={200} required />
        <label className="sr-only" htmlFor={`${id || "popup"}-phone`}>Phone Number</label>
        <input id={`${id || "popup"}-phone`} className={field} name="phone" placeholder="Phone Number" type="tel" inputMode="numeric" pattern="[0-9]{10}" title="Enter a 10-digit phone number" autoComplete="tel" required />
        <label className="sr-only" htmlFor={`${id || "popup"}-email`}>Email Address</label>
        <input id={`${id || "popup"}-email`} className={field} name="email" placeholder="Email Address" type="email" autoComplete="email" maxLength={254} required />
        <label className="sr-only" htmlFor={`${id || "popup"}-requirement`}>Requirement</label>
        <select id={`${id || "popup"}-requirement`} className={`${field} sm:col-span-2`} name="requirement" defaultValue="" required><option value="" disabled>Requirement</option><option>School</option><option>College</option><option>Coaching</option><option>Business</option><option>Other</option></select>
        <label className="sr-only" htmlFor={`${id || "popup"}-message`}>Message</label>
        <textarea id={`${id || "popup"}-message`} className={`${field} min-h-24 resize-y sm:col-span-2`} name="message" placeholder="Message" maxLength={4000} required />
        <button disabled={pending} className="rounded-full bg-[#193175] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#284b9a] disabled:opacity-60 sm:col-span-2">{pending ? "Submitting..." : buttonText}</button>
        {error && <p role="alert" className="text-sm text-red-700 sm:col-span-2">{error}</p>}
      </form>
    </div>
  );
}

export function SmartBoardAboutPopup() {
  const dialog = useRef<HTMLDialogElement>(null);
  return <><button type="button" onClick={() => dialog.current?.showModal()} className="inline-flex rounded-full bg-[#193175] px-7 py-3.5 font-semibold text-white hover:bg-[#284b9a]">Know More About This Smart Board</button><dialog ref={dialog} onClick={(event) => { if (event.target === dialog.current) dialog.current?.close(); }} className="m-auto w-[min(94vw,620px)] max-h-[90vh] overflow-y-auto rounded-3xl bg-transparent p-0 backdrop:bg-[#091633]/75"><div className="relative"><button type="button" aria-label="Close form" onClick={() => dialog.current?.close()} className="absolute right-5 top-5 z-10 rounded-full bg-slate-100 px-3 py-1 text-xl text-[#17243b]">×</button><SmartBoardEnquiryForm heading="Let's Find the Right Smart Board for Your Space" subtext="Tell us about your classroom or meeting space." buttonText="Submit Enquiry" /></div></dialog></>;
}
