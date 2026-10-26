/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import DemoForm from "@/components/DemoForm";
import ErpMetaPixel from "@/components/ErpMetaPixel";
import ERPBrandCarousel from "./ERPBrandCarousel";
import ERPStats from "./ERPStats";
import ERPWhyChoose from "./ERPWhyChoose";
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
      className="bg-white text-base leading-[1.65] font-normal text-[#262626] [&_:is(a,button,summary)]:focus-visible:outline-3 [&_:is(a,button,summary)]:focus-visible:outline-offset-5 [&_:is(a,button,summary)]:focus-visible:outline-[#709bec] [&_button]:cursor-pointer [&_button:disabled]:cursor-wait [&_button:disabled]:opacity-65 [&_section[id]]:scroll-mt-39.5"
    >
      <ErpMetaPixel />
      <header className="bg-white">
        <div className="mx-auto flex min-h-19.5 w-full max-w-454 items-center px-5 min-[800px]:min-h-22.5 min-[800px]:px-12">
          <a
            href="#erp-landing"
            className="inline-flex items-center gap-4 text-[#303030]"
            aria-label="Back to the ERP landing page top"
          >
            <img
              className="block h-11.5 w-auto object-contain min-[800px]:h-13.5"
              src="/logos/logo--22.png"
              alt="BrainADZ Live"
              width="160"
              height="58"
            />
            <span className="border-l border-[#dedede] pl-4 text-[21px] leading-none font-semibold min-[800px]:text-2xl">
              ERP
            </span>
          </a>
        </div>
      </header>

      <section
        className="bg-white pt-7 min-[800px]:pt-9.5"
        id="erp-overview"
        aria-labelledby="erp-heading"
      >
        <div className="mx-auto w-full max-w-301 px-5 min-[800px]:px-8">
          <div className="grid grid-cols-1 items-start gap-9 min-[800px]:grid-cols-[minmax(0,1fr)_390px] min-[800px]:gap-10 min-[1100px]:grid-cols-[minmax(0,1fr)_420px] min-[1100px]:gap-22.5">
            <div>
              <h1
                className="mb-5.5 text-[clamp(36px,7.4vw,54px)] leading-[1.12] font-semibold tracking-[-1.3px] text-[#303030] min-[800px]:text-[46px] min-[800px]:tracking-[-1.5px] min-[1100px]:text-[clamp(46px,4.2vw,64px)] min-[1100px]:tracking-[-2px]"
                id="erp-heading"
              >
                Run better with
                <br />a <span className="text-[#193175]">smart ERP</span> that
                <br />
                grows with you
              </h1>
              <p className="max-w-147.5 text-base leading-[1.6] text-[#171717] min-[1100px]:text-lg">
                BrainADZ ERP brings your finance, inventory, sales and
                operations together in one place, helping your team work smarter
                and focus on growing your business.
              </p>
            </div>
            <div
              className="min-w-0 scroll-mt-6 max-[800px]:w-full max-[800px]:max-w-135"
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
          <div className="mt-8 min-[800px]:mt-6">
            <img
              className="block aspect-38/11 h-auto w-full object-contain object-bottom"
              src="/landing-hero.webp"
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
      <ERPStats />
      <ERPTestimonials onRequestDemo={() => setDemoOpen(true)} />
      <ERPAutomation />
      <ERPBrandCarousel />
      <ERPInsights />
      <ERPComparison />
      <ERPWhyChoose />
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
