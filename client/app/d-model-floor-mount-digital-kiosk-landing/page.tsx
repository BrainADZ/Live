/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import ProductEnquiryForm from "@/components/ProductEnquiryForm";
import ERPLocations from "@/app/erp-landing/ERPLocations";
import ProductClientCarousel from "@/components/ProductClientCarousel";

const title = "D-Model Floor Mount Digital Kiosk";
const description = "Share promotional videos, images, launches and business information on a professional freestanding display in customer-facing spaces.";
const image = "/hero/d-type.webp";
// Add the video file to public and set its path here when it is ready.
const videoSrc = "";

const benefits = [
  { title: "Professional digital display", text: "Present customer-facing messages in a freestanding D-type signage format." },
  { title: "Dynamic content", text: "Show promotional videos, images, campaign creatives and business information." },
  { title: "Flexible playback", text: "Use local media playback, with optional cloud management where remote control is required." },
  { title: "Brand-aligned setup", text: "Plan the enclosure finish, content and deployment around your business environment." },
];
const applications = ["Retail spaces", "Reception areas", "Showrooms", "Events and promotions"];
const aboutDetails = [
  ["Display", "Freestanding D-type digital signage unit"],
  ["Content", "Video, images, campaigns and business information"],
  ["Playback", "Local media playback based on the configured setup"],
  ["Software", "Signage application available when required"],
  ["Cloud control", "Optional remote content management"],
  ["Customization", "Enclosure finish, branding and deployment planning based on your requirements"],
];

export const metadata: Metadata = {
  title: `${title} | BrainADZ Live`,
  description,
  alternates: { canonical: "/d-model-floor-mount-digital-kiosk-landing" },
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
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.17em] text-[#31569c]">Product overview · Freestanding digital signage</p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{description}</p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">Use it in a reception, showroom or retail space to present campaigns and important information on screen. Choose local playback, optional cloud management and an enclosure finish that fits your brand and location.</p>
          </div>
          <ProductEnquiryForm product={title} thankYouHref="/d-model-floor-mount-digital-kiosk-landing/thank-you" />
        </div>
      </section>

      <section aria-label={`${title} video`} className="px-5 pb-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#f3f6fc]">
          {videoSrc ? <video controls playsInline preload="metadata" poster={image} className="aspect-video max-h-[520px] w-full object-cover"><source src={videoSrc} />Your browser does not support video playback.</video> : <div className="flex aspect-video max-h-[520px] w-full flex-col items-center justify-center border-2 border-dashed border-[#cbd8ef] px-6 text-center"><span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#193175] text-2xl text-white" aria-hidden="true">▶</span><p className="text-xl font-semibold text-[#193175]">Product video coming soon</p><p className="mt-2 text-sm text-slate-600">D-Model digital kiosk overview</p></div>}
        </div>
      </section>

      <section aria-labelledby="about-heading" className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#31569c]">About the product</p>
          <h2 id="about-heading" className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">A freestanding display for business communication</h2>
          <p className="mt-5 leading-8 text-slate-600">The D-Model kiosk gives customer-facing spaces a dedicated screen for promotions, announcements and branded content. Playback, software and enclosure options can be selected for the location and content workflow.</p>
          <dl className="mt-7 grid gap-4">
            {aboutDetails.map(([label, detail]) => <div key={label} className="border-b border-slate-200 pb-4"><dt className="font-semibold text-[#193175]">{label}</dt><dd className="mt-1 leading-7 text-slate-600">{detail}</dd></div>)}
          </dl>
        </div>
        <div className="overflow-hidden rounded-3xl bg-[#f3f6fc] shadow-sm">
          <img src="/overview/d-model-standee1.webp" alt="D-Model floor mount digital kiosk front view" loading="lazy" className="h-full w-full object-contain" />
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
