/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import DemoForm from "@/components/DemoForm";
import ErpMetaPixel from "@/components/ErpMetaPixel";
import ERPFeatures from "./ERPFeatures";
import ERPAutomation from "./ERPAutomation";
import ERPInsights from "./ERPInsights";
import ERPComparison from "./ERPComparison";
import ERPFAQ from "./ERPFAQ";
import ERPFooter from "./ERPFooter";
import ERPTestimonials from "./ERPTestimonials";
import styles from "./landing.module.css";
import hero from "./hero.module.css";

export default function ERPLanding() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <main
      id="erp-landing"
      className={styles.page}
    >
      <ErpMetaPixel />
      <header className={hero.header}>
        <div className={hero.headerInner}>
          <a
            href="#erp-landing"
            className={hero.brand}
            aria-label="Back to the ERP landing page top"
          >
            <img
              src="/logos/logo--22.png"
              alt="BrainADZ Live"
              width="160"
              height="58"
            />
            <span>ERP</span>
          </a>
        </div>
      </header>
      <section
        className={hero.hero}
        id="erp-overview"
        aria-labelledby="erp-heading"
      >
        <div className={hero.inner}>
          <div className={hero.grid}>
            <div className={hero.copy}>
              <h1 id="erp-heading">
                Run better with
                <br />a <span>smart ERP</span> that
                <br />
                grows with you
              </h1>
              <p>
                BrainADZ ERP brings your finance, inventory, sales and
                operations together in one place, helping your team work smarter
                and focus on growing your business.
              </p>
            </div>
            <div
              className={hero.demoPanel}
              id="request-demo"
            >
              <DemoForm
                isOpen
                embedded
                demoType="erp"
                successHref="/thank-you?from=smart-erp"
                onClose={() => {}}
              />
            </div>
          </div>
          <div className={hero.illustration}>
            {/* Add your illustration at public/hero/erp-landing.png or update this src. */}
            <img
              src="/landing-hero.png"
              alt="Business growth with BrainADZ ERP"
              width="1140"
              height="330"
              onError={(event) => {
                event.currentTarget.style.visibility = "hidden";
              }}
            />
          </div>
        </div>
      </section>
      <ERPFeatures onRequestDemo={() => setDemoOpen(true)} />
      <ERPTestimonials onRequestDemo={() => setDemoOpen(true)} />
      <ERPAutomation />
      <ERPInsights />
      <ERPComparison />
      <ERPFAQ />
      <ERPFooter onRequestDemo={() => setDemoOpen(true)} />
      <DemoForm
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
        demoType="erp"
        successHref="/thank-you?from=smart-erp"
      />
    </main>
  );
}
