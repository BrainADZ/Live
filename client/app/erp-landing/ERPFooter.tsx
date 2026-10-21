"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { privacySections, termsSections } from "@/data/legalPolicies";
import styles from "./footer.module.css";

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
      className={styles.footer}
      aria-label="BrainADZ ERP footer"
    >
      <div className={styles.inner}>
        <section
          className={styles.callout}
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
            className={styles.demoButton}
            onClick={onRequestDemo}
          >
            Request a demo
          </button>
        </section>

        <div className={styles.legal}>
          <nav
            className={styles.legalLinks}
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

          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()}, BrainADZ Live. All Rights
            Reserved.
          </p>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        id="erp-legal-policy"
        className={styles.policyDialog}
        aria-labelledby="erp-policy-title"
        onCancel={() => setPolicy(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setPolicy(null);
        }}
      >
        <div className={styles.policyHeader}>
          <h2 id="erp-policy-title">{title}</h2>
          <button
            type="button"
            aria-label="Close legal policy"
            onClick={() => setPolicy(null)}
          >
            <X size={22} />
          </button>
        </div>
        <div className={styles.policyContent}>
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
