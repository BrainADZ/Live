/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import ProductEnquiryForm from "@/components/ProductEnquiryForm";
import ERPLocations from "@/app/erp-landing/ERPLocations";
import ProductClientCarousel from "@/components/ProductClientCarousel";

const title = "Self Ordering Kiosk";
const description = "Let customers browse items, select options, review orders and complete a guided ordering journey on one digital interface.";
const image = "/hero/self-ordering.webp";
// Add the video file to public and set its path here when it is ready.
const videoSrc = "";

const benefits = [
  { title: "Customer self-service", text: "Let customers browse available items, choose options and place orders through a guided flow." },
  { title: "Structured ordering", text: "Present categories, products, add-ons and order details through a clear interface." },
  { title: "Optional integrations", text: "Plan payment, POS, kitchen or backend connections where supported and required." },
  { title: "Brand-aligned experience", text: "Configure the interface around your brand, product structure and customer journey." },
];
const applications = ["Restaurants", "Cafes", "QSR outlets", "Food courts", "Entertainment counters"];
const aboutDetails = [
  ["Product", "Self-service ordering kiosk solution"],
  ["Customer flow", "Browse, select, customize, review and confirm an order"],
  ["Interface", "Categories, products, images, options and offers configured for your business"],
  ["Payment", "Optional integration with a selected payment provider"],
  ["Systems", "Optional POS, kitchen or backend integration where supported"],
  ["Customization", "Branding, ordering flow and deployment planning based on your requirements"],
];

export const metadata: Metadata = {
  title: `${title} | BrainADZ Live`,
  description,
  alternates: { canonical: "/self-ordering-kiosk-landing" },
};

export default function Page() {
  return (
    <main className="bg-white text-[#17243b]">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <img src="/logos/logo--22.png" alt="BrainADZ Live" width={160} height={104} className="h-12 w-auto sm:h-14" />
          <a href="#enquire" className="rounded-full bg-[#193175] px-5 py-3 text-sm font-semibold text-white">Contact Us</a>
        </div>
      </header>

      <section className="bg-white px-5 pt-10 pb-8 md:pt-16">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(390px,0.85fr)] lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.17em] text-[#31569c]">Product overview · Customer self-service ordering</p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{description}</p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">The kiosk can present your menu, product options and offers in a clear ordering flow. Payment and POS or kitchen connections can be planned where your systems and requirements support them.</p>
          </div>
          <ProductEnquiryForm product={title} thankYouHref="/self-ordering-kiosk-landing/thank-you" />
        </div>
      </section>

      <section aria-label={`${title} video`} className="px-5 pb-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#f3f6fc]">
          {videoSrc ? <video controls playsInline preload="metadata" poster={image} className="aspect-video max-h-[520px] w-full object-cover"><source src={videoSrc} />Your browser does not support video playback.</video> : <div className="flex aspect-video max-h-[520px] w-full flex-col items-center justify-center border-2 border-dashed border-[#cbd8ef] px-6 text-center"><span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#193175] text-2xl text-white" aria-hidden="true">▶</span><p className="text-xl font-semibold text-[#193175]">Product video coming soon</p><p className="mt-2 text-sm text-slate-600">Self ordering kiosk overview</p></div>}
        </div>
      </section>

      <section aria-labelledby="about-heading" className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#31569c]">About the product</p>
          <h2 id="about-heading" className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">A guided ordering experience for customers</h2>
          <p className="mt-5 leading-8 text-slate-600">Customers can explore the menu, choose options, review their cart and confirm orders on a single interface. The menu structure, branding and optional payment or operational connections are planned around your business workflow.</p>
          <dl className="mt-7 grid gap-4">
            {aboutDetails.map(([label, detail]) => <div key={label} className="border-b border-slate-200 pb-4"><dt className="font-semibold text-[#193175]">{label}</dt><dd className="mt-1 leading-7 text-slate-600">{detail}</dd></div>)}
          </dl>
        </div>
        <div className="overflow-hidden rounded-3xl bg-[#f3f6fc] shadow-sm">
          <img src="/overview/self-ordering-kiosk.webp" alt="Self ordering kiosk product overview" loading="lazy" className="h-full w-full object-contain" />
        </div>
      </section>

      <ProductClientCarousel />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="text-3xl font-semibold">Built around your requirements</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {benefits.map((benefit) => <article key={benefit.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm"><h3 className="text-xl font-semibold">{benefit.title}</h3><p className="mt-3 leading-7 text-slate-600">{benefit.text}</p></article>)}
        </div>
      </section>

      <section className="bg-[#f3f6fc] px-5 py-16">
        <div className="mx-auto max-w-7xl"><h2 className="text-3xl font-semibold">Where it fits</h2><div className="mt-7 flex flex-wrap gap-3">{applications.map((item) => <span key={item} className="rounded-full bg-white px-5 py-3 font-medium text-[#193175] shadow-sm">{item}</span>)}</div></div>
      </section>

      <footer className="bg-white text-[#111]" aria-label="BrainADZ product landing footer">
        <div className="mx-auto w-full max-w-316 px-5 md:px-8">
          <section className="px-0 pt-27 pb-34 text-center max-[760px]:pt-16 max-[760px]:pb-19" aria-labelledby="product-footer-heading">
            <h2 id="product-footer-heading" className="mx-auto mt-0 mb-7.5 max-w-250 text-[clamp(32px,3vw,44px)] leading-[1.15] font-medium tracking-[-1px] text-[#193175] max-[760px]:text-[clamp(29px,6vw,36px)]">For businesses of all sizes and types.<br />Start growing today!</h2>
            <a href="#enquire" className="inline-flex min-h-10 min-w-39 items-center justify-center rounded-[28px] bg-[#ed2027] px-6.5 py-2.75 text-[12px] font-semibold uppercase text-white hover:bg-[#cb151c]">Request a quote</a>
          </section>
        </div>
        <ERPLocations />
      </footer>
    </main>
  );
}
