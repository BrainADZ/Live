"use client";

import { useEffect, useRef, useState } from "react";
import ERPLocations from "./ERPLocations";
import { X } from "lucide-react";
import { privacySections, termsSections } from "@/data/legalPolicies";

export default function ERPFooter({
  onRequestDemo,
}: {
  onRequestDemo: () => void;
}) {
  const [policy, setPolicy] = useState<"terms" | "privacy" | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const title = policy === "terms" ? "Terms of Service" : "Privacy Policy";
  const sections = policy === "terms" ? termsSections : privacySections;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!policy) {
      dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      dialog.close();
    };
  }, [policy]);

  return (
    <footer className="bg-white text-[#111]" aria-label="BrainADZ ERP footer">
      <div className="mx-auto w-full max-w-316 px-5 md:px-8">
        <section
          className="px-0 pt-27 pb-34 text-center max-[760px]:px-0 max-[760px]:pt-16 max-[760px]:pb-19"
          id="erp-get-started"
          aria-labelledby="erp-footer-heading"
        >
          <h2
            className="mx-auto mt-0 mb-7.5 max-w-250 text-[clamp(32px,3vw,44px)] leading-[1.15] font-medium tracking-[-1px] text-[#193175] max-[760px]:text-[clamp(29px,6vw,36px)] max-[760px]:leading-[1.2] max-[760px]:tracking-[-0.7px]"
            id="erp-footer-heading"
          >
            For businesses of all sizes and types.
            <br />
            Start growing today!
          </h2>

          <button
            type="button"
            className="inline-flex min-h-10 min-w-39 items-center justify-center rounded-[28px] border-0 bg-[#ed2027] px-6.5 py-2.75 text-[12px] leading-normal font-semibold text-white uppercase hover:bg-[#cb151c]"
            onClick={onRequestDemo}
          >
            Request a demo
          </button>
        </section>

      </div>
      <ERPLocations />
      <div className="mx-auto w-full max-w-316 px-5 pt-6 md:px-8">
        <div className="flex items-center justify-between gap-6 pb-4.5 text-[12px] leading-normal max-[760px]:flex-col max-[760px]:gap-3.5 max-[760px]:pb-6 max-[760px]:text-center">
          <nav className="flex items-center" aria-label="Legal policies">
            <button
              className="cursor-pointer border-0 bg-none p-0 whitespace-nowrap text-[#111] first:border-r first:border-r-[#bcbcbc] first:pr-2.5 last:pl-2.5 hover:text-[#193175]"
              type="button"
              aria-haspopup="dialog"
              aria-controls="erp-legal-policy"
              onClick={() => setPolicy("terms")}
            >
              Terms of Service
            </button>
            <button
              className="cursor-pointer border-0 bg-none p-0 whitespace-nowrap text-[#111] first:border-r first:border-r-[#bcbcbc] first:pr-2.5 last:pl-2.5 hover:text-[#193175]"
              type="button"
              aria-haspopup="dialog"
              aria-controls="erp-legal-policy"
              onClick={() => setPolicy("privacy")}
            >
              Privacy Policy
            </button>
          </nav>

          <p className="m-0">
            &copy; {new Date().getFullYear()}, BrainADZ Live. All Rights
            Reserved.
          </p>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        id="erp-legal-policy"
        className="m-auto max-h-[85vh] w-[calc(100%-2rem)] max-w-195 rounded-[18px] border-0 bg-white p-0 text-[#17243b] shadow-[0_24px_80px_rgb(0_0_0/25%)] backdrop:bg-black/55"
        aria-labelledby="erp-policy-title"
        onCancel={() => setPolicy(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setPolicy(null);
        }}
      >
        <div className="sticky top-0 flex items-center justify-between gap-5 border-b border-b-[#dfe5ef] bg-white px-6 py-5">
          <h2
            className="m-0 text-[24px] leading-[1.3] text-[#193175]"
            id="erp-policy-title"
          >
            {title}
          </h2>
          <button
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#dfe5ef] bg-white text-[#193175]"
            type="button"
            aria-label="Close legal policy"
            onClick={() => setPolicy(null)}
          >
            <X size={22} />
          </button>
        </div>
        <div className="p-6 text-[15px] leading-[1.7]">
          {policy &&
            sections.map((section) => (
              <section className="not-first:mt-6" key={section.id}>
                <h3 className="mx-0 mt-0 mb-2.5 text-[18px] font-semibold">
                  {section.title}
                </h3>
                {section.paragraphs.map((paragraph, index) => (
                  <p className={index > 0 ? "mt-3" : ""} key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-3 list-disc pl-5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
        </div>
      </dialog>
    </footer>
  );
}
