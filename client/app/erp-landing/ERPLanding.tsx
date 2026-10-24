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

export default function ERPLanding() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <main
      id="erp-landing"
      className="erp-landing-page [--navy:#193175] [--ink:#17243b] [--muted:#647084] [--line:#dde4ef] [color:var(--ink)] [background:#fff] [font-size:16px] [line-height:1.65] [&_*]:box-border [&_button]:[-webkit-tap-highlight-color:transparent] [&_a]:[-webkit-tap-highlight-color:transparent] [&_button]:[cursor:pointer] [&_button]:[font:inherit] [&_a]:[text-decoration:none] [&_button:disabled]:[cursor:wait] [&_button:disabled]:[opacity:0.65] [&_button:focus-visible]:[outline:3px_solid_#709bec] [&_button:focus-visible]:[outline-offset:5px] [&_a:focus-visible]:[outline:3px_solid_#709bec] [&_a:focus-visible]:[outline-offset:5px] [&_summary:focus-visible]:[outline:3px_solid_#709bec] [&_summary:focus-visible]:[outline-offset:5px] [&_section[id]]:[scroll-margin-top:100px] max-[760px]:[&_section[id]]:[scroll-margin-top:112px] [font-family:inherit] font-normal [--ink:#262626] [--muted:#525252] [--logo-header-height:84px] [--section-bar-height:54px] [&_section[id]]:[scroll-margin-top:calc(_var(--logo-header-height)_+_var(--section-bar-height)_+_20px_)] motion-reduce:[&_*]:[scroll-behavior:auto]"
    >
      <ErpMetaPixel />
      <header className="erp-hero-header [background:#fff]">
        <div className="erp-hero-header-inner [width:min(1720px,_calc(100%_-_96px))] [min-height:90px] [margin:auto] flex items-center max-[800px]:[width:calc(100%_-_40px)] max-[800px]:[min-height:78px]">
          <a
            href="#erp-landing"
            className="erp-hero-brand inline-flex items-center [gap:16px] [color:#303030] [&_img]:block [&_img]:[width:auto] [&_img]:[height:54px] [&_img]:[object-fit:contain] [&_span]:[border-left:1px_solid_#dedede] [&_span]:[padding-left:16px] [&_span]:[font-size:24px] [&_span]:font-semibold [&_span]:[line-height:1] max-[800px]:[&_img]:[height:46px] max-[800px]:[&_span]:[font-size:21px]"
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
        className="erp-hero-hero [background:#fff] [padding:38px_0_0] max-[800px]:[padding-top:28px]"
        id="erp-overview"
        aria-labelledby="erp-heading"
      >
        <div className="erp-hero-inner [width:min(1140px,_calc(100%_-_64px))] [margin:auto] max-[800px]:[width:calc(100%_-_40px)]">
          <div className="erp-hero-grid grid [grid-template-columns:minmax(0,_1fr)_420px] [align-items:start] [gap:90px] max-[1100px]:[grid-template-columns:minmax(0,_1fr)_390px] max-[1100px]:[gap:40px] max-[800px]:[grid-template-columns:minmax(0,_1fr)] max-[800px]:[gap:36px]">
            <div className="erp-hero-copy [&_h1]:[margin:0_0_22px] [&_h1]:[color:#303030] [&_h1]:[font-size:clamp(46px,_4.2vw,_64px)] [&_h1]:font-semibold [&_h1]:[line-height:1.12] [&_h1]:[letter-spacing:-2px] [&_h1_span]:[color:#193175] [&_>_p]:[max-width:590px] [&_>_p]:[margin:0] [&_>_p]:[color:#171717] [&_>_p]:[font-size:18px] [&_>_p]:[line-height:1.6] max-[1100px]:[&_h1]:[font-size:46px] max-[1100px]:[&_h1]:[letter-spacing:-1.5px] max-[1100px]:[&_>_p]:[font-size:16px] max-[800px]:[&_h1]:[font-size:clamp(36px,_7.4vw,_54px)] max-[800px]:[&_h1]:[letter-spacing:-1.3px] max-[800px]:[&_>_p]:[max-width:540px]">
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
              className="erp-hero-demo-panel [min-width:0] [scroll-margin-top:24px] [&_input:not([type=checkbox])]:[height:44px] [&_input:not([type=checkbox])]:[border-color:#d6d6d6] [&_input:not([type=checkbox])]:[border-radius:24px] [&_input:not([type=checkbox])]:[font-size:13px] [&_select]:[height:44px] [&_select]:[border-color:#d6d6d6] [&_select]:[border-radius:24px] [&_select]:[font-size:13px] [&_textarea]:[border-color:#d6d6d6] [&_textarea]:[border-radius:18px] [&_textarea]:[font-size:13px] [&_button[type=submit]]:[height:48px] [&_button[type=submit]]:[border-radius:28px] [&_button[type=submit]]:[background:#193175] [&_button[type=submit]]:[box-shadow:none] [&_button[type=submit]:hover]:[background:#26468f] max-[800px]:w-full max-[800px]:[max-width:540px]"
              id="request-demo"
            >
              <DemoForm
                isOpen
                embedded
                demoType="erp"
                successHref="/smart-erp/thank-you"
                onClose={() => {}}
              />
            </div>
          </div>
          <div className="erp-hero-illustration [margin-top:24px] [&_img]:block [&_img]:w-full [&_img]:[height:auto] [&_img]:[aspect-ratio:1140_/_330] [&_img]:[object-fit:contain] [&_img]:[object-position:bottom_center] max-[800px]:[margin-top:32px]">
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
        successHref="/smart-erp/thank-you"
      />
    </main>
  );
}
