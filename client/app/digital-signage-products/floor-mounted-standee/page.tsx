/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Minus,
  Plus,
  Download,
  ShieldCheck,
  Settings2,
  PackageCheck,
  Truck,
  Wrench,
} from "lucide-react";

const benefits = [
  {
    title: "Strong Floor Presence",
    text: "A stable free-standing structure that keeps your promotional message visible in stores, lobbies, malls and event spaces.",
  },
  {
    title: "Premium Branding Look",
    text: "Clean display format that improves brand presentation without needing wall space or permanent fixtures.",
  },
  {
    title: "Easy Placement",
    text: "Place it near entrances, counters, product zones or walkways to guide customers and highlight offers.",
  },
  {
    title: "Reusable Campaign Asset",
    text: "Update graphics and messaging for new promotions, events or seasonal campaigns whenever needed.",
  },
];

const specifications = [
  ["Product Type", "Floor mounted standee display solution"],
  ["Usage", "Indoor branding, retail promotion, wayfinding and customer information"],
  ["Frame", "Durable standing structure with stable floor base"],
  ["Print", "Custom brand graphics, promotional artwork and information display"],
  ["Placement", "Retail stores, showrooms, malls, offices, exhibitions and events"],
  ["Customization", "Size, artwork, branding, finish and installation style can be customized"],
];

const applications = [
  "Retail Stores",
  "Shopping Malls",
  "Corporate Offices",
  "Hospitals & Clinics",
  "Events & Exhibitions",
  "Hotels & Restaurants",
];

const features = [
  {
    title: "Stable Standing Base",
    text: "Designed to stay balanced in high-traffic indoor environments while keeping your message clearly visible.",
  },
  {
    title: "Custom Graphic Display",
    text: "Showcase offers, product launches, directions, service information or brand campaigns with customized print design.",
  },
  {
    title: "Professional Finish",
    text: "A clean and premium display appearance suitable for both commercial and corporate environments.",
  },
  {
    title: "Flexible Campaign Usage",
    text: "Use it for product promotions, customer guidance, event branding, seasonal campaigns and business announcements.",
  },
];

const processSteps = [
  {
    title: "Requirement Discussion",
    text: "We understand your placement area, branding goal, size requirement and display purpose.",
  },
  {
    title: "Design Planning",
    text: "Our team prepares the artwork direction and display layout according to your brand communication.",
  },
  {
    title: "Material Selection",
    text: "We suggest suitable frame, base and print material based on usage and environment.",
  },
  {
    title: "Production",
    text: "The standee is produced with custom graphics, proper finishing and durable structure.",
  },
  {
    title: "Quality Check",
    text: "We check print clarity, finishing, balance and display quality before final delivery.",
  },
  {
    title: "Delivery & Setup",
    text: "We provide delivery guidance and installation support for smooth on-site placement.",
  },
];

const faqs = [
  {
    q: "Can the Floor Mounted Standee size be customized?",
    a: "Yes. Size, branding, artwork and display format can be customized according to your space and campaign requirement.",
  },
  {
    q: "Where can this standee be used?",
    a: "It can be used in retail stores, malls, offices, hospitals, restaurants, exhibitions, hotels and customer-facing business areas.",
  },
  {
    q: "Can we change the print later?",
    a: "Yes. Depending on the selected structure, the graphic can be updated for new campaigns and offers.",
  },
  {
    q: "Is it suitable for indoor branding?",
    a: "Yes. Floor mounted standees are ideal for indoor branding, customer information, offers and promotional communication.",
  },
  {
    q: "Do you help with design also?",
    a: "Yes. BrainADZ can help with artwork planning, design direction and branding layout for your standee.",
  },
];

export default function FloorMountedStandeePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/products/Floor.png"
          alt="Floor Mounted Standee"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-8 lg:min-h-135 lg:px-12">
          <div className="flex items-center gap-3 text-[16px] font-light md:text-[18px]">
            <Link href="/" className="text-[#6da0ff] hover:underline">
              Home
            </Link>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Products</span>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Floor Mounted Standee</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Floor Mounted Standee
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Premium floor mounted standee solutions for retail promotions,
              customer guidance, events and professional indoor branding.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#3C5B9B] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Enquire Now
                <span className="text-[20px] leading-none">↗</span>
              </a>

              <a
                href="/brochure/BrainADZLive.pdf"
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-3 rounded-full border border-white/35 px-8 text-[13px] font-bold text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#3C5B9B]"
              >
                Download Brochure
                <Download size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Product Overview
            </p>

            <h2 className="max-w-180 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              A clean and stable branding display for high-visibility spaces.
            </h2>

            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              Floor mounted standees are ideal for businesses that need a
              professional free-standing display without wall installation. They
              help promote offers, guide customers, display product information
              and improve brand visibility in busy indoor environments.
            </p>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              <div className="border-l-2 border-[#3C5B9B] pl-5">
                <h3 className="text-[20px] font-light">Indoor Branding</h3>
                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Perfect for stores, offices, exhibitions and customer areas.
                </p>
              </div>

              <div className="border-l-2 border-[#3C5B9B] pl-5">
                <h3 className="text-[20px] font-light">Custom Display</h3>
                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Designed according to your brand, campaign and placement needs.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#3C5B9B]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[30px] bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
              <img
                src="/products/Floor.png"
                alt="Floor Mounted Standee Overview"
                className="h-[520px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Why Choose Floor Mounted Standee
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Built for better visibility, durability and flexible placement.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {benefits.map((item, index) => (
              <div key={item.title} className="border-t border-black/10 pt-7">
                <span className="text-[13px] font-semibold text-[#3C5B9B]">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-[24px] font-light tracking-[-0.4px]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Product Specifications
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Clear details for planning the right display.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              Specifications can be customized based on brand requirement,
              placement area, artwork size and installation environment.
            </p>
          </div>

          <div className="border-t border-black/10">
            {specifications.map(([label, value]) => (
              <div
                key={label}
                className="grid gap-3 border-b border-black/10 py-5 md:grid-cols-[0.35fr_0.65fr]"
              >
                <p className="text-[15px] font-semibold text-[#3C5B9B]">
                  {label}
                </p>
                <p className="text-[16px] font-light leading-[1.65] text-black/70">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT FEATURES WITH IMAGE */}
      <section className="bg-[#f6f8fc] px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-450 gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-[28px] shadow-[0_24px_75px_rgba(0,0,0,0.08)]">
            <img
              src="/products/Floor.png"
              alt="Floor Mounted Standee Features"
              className="h-[560px] w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Product Features
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Built for stability, visibility and long-term business branding.
            </h2>

            <p className="mt-6 text-[16px] font-light leading-[1.75] text-black/65">
              Floor mounted standees create a strong brand presence while
              remaining practical for everyday commercial use. They work well in
              retail, events, reception areas and customer guidance zones.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  title: "Heavy-duty construction",
                  text: "Engineered for daily commercial use with excellent balance and durability.",
                },
                {
                  title: "Easy graphic replacement",
                  text: "Update promotional graphics whenever your campaign, offer or message changes.",
                },
                {
                  title: "Premium branding appearance",
                  text: "Creates a clean, professional and organized look for indoor business spaces.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-[#3C5B9B]"
                    size={22}
                  />
                  <div>
                    <h3 className="text-[20px] font-light">{item.title}</h3>
                    <p className="mt-2 text-[15px] font-light leading-[1.7] text-black/65">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Ideal Applications
            </p>

            <h2 className="mx-auto max-w-210 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Suitable for different business environments.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((item) => (
              <div
                key={item}
                className="group rounded-[24px] border border-black/10 bg-[#f8faff] p-6 transition hover:-translate-y-1 hover:border-[#3C5B9B]/30 hover:bg-white hover:shadow-[0_22px_65px_rgba(60,91,155,0.1)]"
              >
                <CheckCircle2 size={26} className="mb-5 text-[#3C5B9B]" />
                <h3 className="text-[21px] font-light tracking-[-0.4px]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Key Features
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Product features designed for real business use.
            </h2>

            <div className="mt-8 overflow-hidden rounded-[26px] bg-white shadow-[0_22px_70px_rgba(0,0,0,0.06)]">
              <img
                src="/products/Floor.png"
                alt="Floor Mounted Standee Benefits"
                className="h-[360px] w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-0 border-t border-black/10">
            {features.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-5 border-b border-black/10 py-7 md:grid-cols-[70px_1fr]"
              >
                <span className="text-[14px] font-semibold text-[#3C5B9B]">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="text-[25px] font-light tracking-[-0.5px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-light leading-[1.75] text-black/65">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Process
            </p>

            <h2 className="mx-auto max-w-210 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              From requirement to final standee setup.
            </h2>
          </div>

          <div className="grid gap-x-10 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((item, index) => (
              <div key={item.title} className="border-t border-black/10 pt-7">
                <span className="text-[13px] font-semibold text-[#3C5B9B]">
                  Step {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 text-[24px] font-light tracking-[-0.4px]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Product Gallery
              </p>

              <h2 className="max-w-195 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Visual examples for floor mounted standee usage.
              </h2>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-3 text-[14px] font-semibold text-[#3C5B9B]"
            >
              Request Custom Design <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              "/products/floor-mounted-gallery-1.webp",
              "/products/floor-mounted-gallery-2.webp",
              "/products/floor-mounted-gallery-3.webp",
              "/products/floor-mounted-gallery-4.webp",
            ].map((image, index) => (
              <div
                key={image}
                className="overflow-hidden rounded-[18px] bg-white shadow-[0_18px_55px_rgba(0,0,0,0.06)]"
              >
                <img
                  src={image}
                  alt={`Floor Mounted Standee Gallery ${index + 1}`}
                  className="h-72 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              FAQ
            </p>

            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about Floor Mounted Standee.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-[26px] border bg-white transition ${
                  openFaq === index
                    ? "border-[#3C5B9B]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]"
                    : "border-black/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                >
                  <span className="text-[16px] font-light leading-[1.45] text-black md:text-[17px]">
                    {faq.q}
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f6f8fc] text-[#3C5B9B]">
                    {openFaq === index ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="mx-5 border-t border-[#3C5B9B]/15 pb-6 pt-4 md:mx-6">
                    <p className="text-[15px] font-light leading-[1.75] text-black/65">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA WITH IMAGE */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-450 px-8 lg:px-10">
          <div className="grid min-h-75 overflow-hidden bg-[#3C5B9B] md:grid-cols-[1.25fr_0.75fr]">
            <div className="flex flex-col justify-center px-7 py-10 md:px-10 lg:px-14">
              <h3 className="max-w-150 text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                Need a custom Floor Mounted Standee for your business?
              </h3>

              <p className="mt-4 max-w-150 text-[16px] font-light leading-[1.55] text-white">
                Connect with BrainADZ and get a professional display solution
                customized for your space, campaign and brand communication.
              </p>

              <a
                href="/contact"
                className="group mt-8 inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition hover:bg-white hover:text-[#3C5B9B]"
              >
                <span>Get Quote</span>
                <span className="text-[26px] transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <div className="hidden md:block">
              <img
                src="/products/floor-mounted-cta.webp"
                alt="Custom Floor Mounted Standee"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}