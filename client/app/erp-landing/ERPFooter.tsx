"use client";

import { useEffect, useRef, useState } from "react";
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
    <footer
      className="erp-footer-footer [background:#fff] [color:#111]"
      aria-label="BrainADZ ERP footer"
    >
      <div className="erp-footer-inner [width:min(1200px,_calc(100%_-_64px))] [margin:auto] max-[760px]:[width:calc(100%_-_40px)]">
        <section
          className="erp-footer-callout [padding:108px_0_136px] text-center [&_h2]:[max-width:1000px] [&_h2]:[margin:0_auto_30px] [&_h2]:[color:#193175] [&_h2]:[font-size:clamp(32px,_3vw,_44px)] [&_h2]:font-medium [&_h2]:[line-height:1.15] [&_h2]:[letter-spacing:-1px] [&_.erp-footer-demo-button]:inline-flex [&_.erp-footer-demo-button]:items-center [&_.erp-footer-demo-button]:justify-center [&_.erp-footer-demo-button]:[min-width:156px] [&_.erp-footer-demo-button]:[min-height:40px] [&_.erp-footer-demo-button]:[padding:11px_26px] [&_.erp-footer-demo-button]:[border:0] [&_.erp-footer-demo-button]:[border-radius:28px] [&_.erp-footer-demo-button]:[background:#ed2027] [&_.erp-footer-demo-button]:[color:#fff] [&_.erp-footer-demo-button]:[font-size:12px] [&_.erp-footer-demo-button]:font-semibold [&_.erp-footer-demo-button]:[line-height:1.5] [&_.erp-footer-demo-button]:[text-transform:uppercase] [&_.erp-footer-demo-button:hover]:[background:#cb151c] max-[760px]:[padding:64px_0_76px] max-[760px]:[&_h2]:[font-size:clamp(29px,_6vw,_36px)] max-[760px]:[&_h2]:[line-height:1.2] max-[760px]:[&_h2]:[letter-spacing:-0.7px]"
          id="erp-get-started"
          aria-labelledby="erp-footer-heading"
        >
          <h2 id="erp-footer-heading">
            For businesses of all sizes and types.
            <br />
            Start growing today!
          </h2>

          <button
            type="button"
            className="erp-footer-demo-button"
            onClick={onRequestDemo}
          >
            Request a demo
          </button>
        </section>

        <div className="erp-footer-legal flex items-center justify-between [gap:24px] [padding-bottom:18px] [font-size:12px] [line-height:1.5] max-[760px]:flex-col max-[760px]:[gap:14px] max-[760px]:[padding-bottom:24px] max-[760px]:text-center">
          <nav
            className="erp-footer-legal-links flex items-center [&_button]:[padding:0] [&_button]:[border:0] [&_button]:[background:none] [&_button]:[color:#111] [&_button]:[font:inherit] [&_button]:[white-space:nowrap] [&_button]:[cursor:pointer] [&_button:first-child]:[padding-right:10px] [&_button:first-child]:[border-right:1px_solid_#bcbcbc] [&_button:last-child]:[padding-left:10px] [&_button:hover]:[color:#193175]"
            aria-label="Legal policies"
          >
            <button
              type="button"
              aria-haspopup="dialog"
              aria-controls="erp-legal-policy"
              onClick={() => setPolicy("terms")}
            >
              Terms of Service
            </button>
            <button
              type="button"
              aria-haspopup="dialog"
              aria-controls="erp-legal-policy"
              onClick={() => setPolicy("privacy")}
            >
              Privacy Policy
            </button>
          </nav>

          <p className="erp-footer-copyright [margin:0]">
            &copy; {new Date().getFullYear()}, BrainADZ Live. All Rights
            Reserved.
          </p>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        id="erp-legal-policy"
        className="erp-footer-policy-dialog [width:min(780px,_calc(100%_-_32px))] [max-height:85vh] [margin:auto] [padding:0] [border:0] [border-radius:18px] [background:#fff] [color:#17243b] [box-shadow:0_24px_80px_rgb(0_0_0_/_25%)] [&::backdrop]:[background:rgb(0_0_0_/_55%)]"
        aria-labelledby="erp-policy-title"
        onCancel={() => setPolicy(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setPolicy(null);
        }}
      >
        <div className="erp-footer-policy-header sticky [top:0] flex items-center justify-between [gap:20px] [padding:20px_24px] [border-bottom:1px_solid_#dfe5ef] [background:#fff] [&_h2]:[margin:0] [&_h2]:[color:#193175] [&_h2]:[font-size:24px] [&_h2]:[line-height:1.3] [&_button]:flex [&_button]:items-center [&_button]:justify-center [&_button]:[width:36px] [&_button]:[height:36px] [&_button]:[flex-shrink:0] [&_button]:[border:1px_solid_#dfe5ef] [&_button]:rounded-full [&_button]:[background:#fff] [&_button]:[color:#193175] [&_button]:[cursor:pointer]">
          <h2 id="erp-policy-title">{title}</h2>
          <button
            type="button"
            aria-label="Close legal policy"
            onClick={() => setPolicy(null)}
          >
            <X size={22} />
          </button>
        </div>
        <div className="erp-footer-policy-content [padding:24px] [font-size:15px] [line-height:1.7] [&_section_+_section]:[margin-top:24px] [&_h3]:[margin:0_0_10px] [&_h3]:[font-size:18px] [&_h3]:font-semibold [&_p_+_p]:[margin-top:12px] [&_ul]:[margin-top:12px] [&_ul]:[padding-left:20px] [&_ul]:[list-style:disc]">
          {policy &&
            sections.map((section) => (
              <section key={section.id}>
                <h3>{section.title}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
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
