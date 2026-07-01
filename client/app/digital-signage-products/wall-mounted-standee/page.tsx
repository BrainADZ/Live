/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Hammer,
  Image as ImageIcon,
  Layers,
  MapPin,
  Minus,
  Download,
  PackageCheck,
  Paintbrush,
  Plus,
  Ruler,
  ShieldCheck,
  Store,
  Tag,
  Wrench,
} from "lucide-react";

type SpecItem = {
  label: string;
  value: string;
};

type FaqItem = {
  q: string;
  a: string;
};

const highlights = [
  "Space-saving branding solution",
  "Clean wall-mounted presentation",
  "Custom printable graphics",
  "Ideal for indoor business spaces",
  "Durable frame and neat finish",
];

const specs: SpecItem[] = [
  { label: "Product Type", value: "Wall Mounted Standee" },
  { label: "Usage", value: "Indoor branding, information display and promotional messaging" },
  { label: "Print Option", value: "Custom brand artwork, product visuals, offers and directional graphics" },
  { label: "Mounting Style", value: "Fixed wall-mounted installation with clean front visibility" },
  { label: "Material", value: "Durable print media with sturdy support structure" },
  { label: "Best For", value: "Retail stores, offices, reception areas, hospitals, showrooms and events" },
];

const applications = [
  { title: "Retail Stores", text: "Display offers, brand messages, product highlights and campaign visuals.", icon: Store },
  { title: "Reception Areas", text: "Share brand information, directions, notices and visitor communication.", icon: MapPin },
  { title: "Showrooms", text: "Present product details, pricing support and promotional graphics neatly.", icon: Tag },
  { title: "Corporate Spaces", text: "Use for internal communication, event branding and professional signage.", icon: Layers },
];

const customization = [
  "Custom size and artwork layout",
  "Brand color matching",
  "Product or offer-based graphics",
  "Directional and informational signage",
  "Premium print finishing options",
];

const process = [
  { title: "Requirement Sharing", text: "We understand the display purpose, wall space, content and branding requirements.", icon: Ruler },
  { title: "Design Preparation", text: "Our team prepares clean artwork based on your brand, message and placement needs.", icon: Paintbrush },
  { title: "Print Production", text: "We print the final approved design with a neat finish and suitable display quality.", icon: ImageIcon },
  { title: "Mounting Setup", text: "The standee is prepared for wall-mounted installation with proper alignment and support.", icon: Hammer },
  { title: "Quality Check", text: "We check print clarity, finishing, edges and overall presentation before dispatch.", icon: ShieldCheck },
  { title: "Delivery Support", text: "The product is packed and delivered safely for installation and use.", icon: PackageCheck },
];

const faqs: FaqItem[] = [
  {
    q: "What is a wall mounted standee used for?",
    a: "A wall mounted standee is used for indoor branding, promotional messages, directions, product highlights, notices and information display in commercial spaces.",
  },
  {
    q: "Can I customize the design?",
    a: "Yes. We can customize the artwork, size, brand colors, message, product visuals and overall layout according to your requirement.",
  },
  {
    q: "Is it suitable for retail stores and offices?",
    a: "Yes. It works well for retail stores, offices, reception areas, showrooms, hospitals, clinics and corporate spaces.",
  },
  {
    q: "Do you provide design support?",
    a: "Yes. BrainADZ can support you with clean and professional design preparation based on your brand and display purpose.",
  },
  {
    q: "Is it reusable?",
    a: "Yes, depending on the installation and print type, it can be used for long-term branding and informational display.",
  },
];

export default function WallMountedStandeePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/products/wall.png"
          alt="Wall Mounted Standee"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.76)_30%,rgba(0,0,0,0.44)_58%,rgba(0,0,0,0.10)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-8 lg:min-h-135 lg:px-12">
          <div className="flex items-center gap-3 text-[16px] font-light md:text-[18px]">
            <Link href="/" className="text-[#6da0ff] hover:underline">
              Home
            </Link>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Products</span>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Wall Mounted Standee</span>
          </div>

          <div className="mt-12 max-w-210 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Wall Mounted Standee Printing & Branding Solutions
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-200 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Clean, professional and space-saving wall mounted standees for
              indoor branding, product promotions, information display and
              business communication.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#3C5B9B] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Get Quote
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
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Product Overview
            </p>

            <h2 className="max-w-175 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Wall-mounted branding that saves space and improves visibility.
            </h2>

            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ wall mounted standees are designed for businesses that
              need clean and permanent visual communication without occupying
              floor space. They are ideal for shops, offices, reception areas,
              showrooms, hospitals and commercial interiors.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-[#3C5B9B]" />
                  <span className="text-[15px] font-light text-black/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 -top-8 h-44 w-44 rounded-full bg-[#3C5B9B]/10 blur-3xl" />
            <div className="relative overflow-hidden bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
              <img
                src="/products/wall.png"
                alt="Wall Mounted Standee Display"
                className="h-full w-full object-cover"
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
              Why Choose This Product
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              A neat display solution for professional indoor spaces.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {[
              { title: "Space Saving", text: "Mounted directly on walls, it keeps your floor area clean and open." },
              { title: "Professional Finish", text: "Creates a polished display for offices, retail spaces and reception areas." },
              { title: "Clear Communication", text: "Perfect for offers, directions, service information and brand messages." },
              { title: "Custom Branding", text: "Designed with your brand colors, graphics, product visuals and message." },
            ].map((item, index) => (
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
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Specifications
              </p>
              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Product details at a glance.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              Every wall mounted standee can be customized according to your
              display area, message, artwork and business branding needs.
            </p>
          </div>

          <div className="border-y border-black/10">
            {specs.map((item) => (
              <div
                key={item.label}
                className="grid gap-3 border-b border-black/10 py-5 last:border-b-0 md:grid-cols-[0.35fr_0.65fr] md:gap-8"
              >
                <h3 className="text-[17px] font-light text-black">{item.label}</h3>
                <p className="text-[15px] font-light leading-[1.7] text-black/65">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Ideal Applications
            </p>
            <h2 className="mx-auto max-w-210 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Useful for branding, direction and business communication.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {applications.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-[26px] border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#3C5B9B]/30 hover:shadow-[0_22px_65px_rgba(60,91,155,0.1)]"
                >
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-full bg-[#3C5B9B]/10 transition group-hover:bg-[#3C5B9B]">
                    <Icon size={24} className="text-[#3C5B9B] transition group-hover:text-white" />
                  </div>
                  <h3 className="text-[20px] font-light tracking-[-0.3px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] font-light leading-[1.65] text-black/65">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <img
              src="/products/custom-standee-design.jpg"
              alt="Custom Wall Mounted Standee Design"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Customization Options
            </p>

            <h2 className="max-w-175 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Designed around your brand, message and space.
            </h2>

            <div className="mt-8 border-y border-black/10">
              {customization.map((item) => (
                <div key={item} className="flex items-center justify-between gap-6 border-b border-black/10 py-5 last:border-b-0">
                  <span className="text-[16px] font-light text-black/75">{item}</span>
                  <ChevronRight size={20} className="shrink-0 text-[#3C5B9B]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-[#f6f8fc] px-5 py-16 md:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="relative z-10 mx-auto mb-12 max-w-[1180px] text-center lg:mb-14">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Design & Production Process
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              From requirement to ready-to-install display.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="border-t border-black/10 pt-7">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-13 w-13 items-center justify-center rounded-full bg-[#3C5B9B]/10">
                      <Icon size={24} className="text-[#3C5B9B]" />
                    </div>
                    <span className="text-[13px] font-semibold text-[#3C5B9B]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-[24px] font-light tracking-[-0.4px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Product Showcase
              </p>
              <h2 className="max-w-195 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Wall mounted display solutions for modern spaces.
              </h2>
            </div>
            <a href="/contact" className="inline-flex items-center gap-3 text-[14px] font-semibold text-[#3C5B9B]">
              Request Custom Design <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-2 md:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-72 overflow-hidden bg-[#dde6f6]">
                <img
                  src={`/products/wall-mounted-standee-${item}.jpg`}
                  alt={`Wall Mounted Standee ${item}`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              FAQ
            </p>
            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about wall mounted standees.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-[26px] border bg-white transition-all duration-300 ${
                  openFaq === index
                    ? "border-[#3C5B9B]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]"
                    : "border-black/10 shadow-[0_12px_42px_rgba(0,0,0,0.035)]"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                >
                  <span className="text-[16px] font-light leading-[1.45] text-black md:text-[17px]">
                    {faq.q}
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f6f8fc] text-[#3C5B9B]">
                    {openFaq === index ? <Minus size={18} /> : <Plus size={18} />}
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

      {/* FINAL CTA */}
      <section className="lazy-section bg-white py-12">
        <div className="mx-auto max-w-450 px-8 lg:px-10">
          <div className="flex min-h-65 overflow-hidden bg-[#3C5B9B] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/about.avif"
                alt="BrainADZ Branding Solutions"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Need a custom wall mounted standee for your brand?
                </h3>
                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Share your requirement with BrainADZ and get a clean,
                  professional wall-mounted branding solution for your space.
                </p>
              </div>

              <a
                href="/contact"
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition hover:bg-white hover:text-[#3C5B9B]"
              >
                <span>Enquire Now</span>
                <span className="text-[26px] transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}