"use client";

import Link from "next/link";
import styles from "./footer.module.css";

export default function ERPFooter({
  onRequestDemo,
}: {
  onRequestDemo: () => void;
}) {
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
            <Link href="/terms-and-conditions">Terms of Service</Link>
            <Link href="/privacy-policy?v=20261006">Privacy Policy</Link>
          </nav>

          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()}, BrainADZ Live. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
