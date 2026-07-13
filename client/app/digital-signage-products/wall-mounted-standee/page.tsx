/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import PopupForm from "@/components/PopupForm";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Download,
  Layers,
  MapPin,
  Minus,
  Plus,
  Store,
  Tag,
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
  "Wall-mounted digital signage format",
  "Video and image content playback",
  "Space-efficient display placement",
  "Optional signage application",
  "Optional cloud content management",
];

const specs: SpecItem[] = [
  {
    label: "Product Type",
    value: "Wall Mounted Digital Display",
  },
  {
    label: "Content Support",
    value:
      "Videos, images, promotional campaigns, announcements and business information",
  },
  {
    label: "Playback Setup",
    value: "Local media playback based on the configured setup",
  },
  {
    label: "Content Management",
    value: "Optional signage application when required",
  },
  {
    label: "Remote Management",
    value: "Optional cloud signage management",
  },
  {
    label: "Deployment Planning",
    value:
      "Wall placement, content workflow, branding and setup based on project requirement",
  },
];

const applications = [
  {
    title: "Retail Stores",
    text: "Display promotions, product campaigns, offers and customer-facing digital content.",
    icon: Store,
  },
  {
    title: "Reception Areas",
    text: "Present welcome content, visitor information, announcements and business communication.",
    icon: MapPin,
  },
  {
    title: "Showrooms",
    text: "Showcase product content, launches, brand films and promotional visuals.",
    icon: Tag,
  },
  {
    title: "Corporate Spaces",
    text: "Use for announcements, company information and internal visual communication.",
    icon: Layers,
  },
];

const customization = [
  "Wall placement and display planning",
  "Content playback setup",
  "Signage application setup",
  "Cloud management option",
  "Branding and deployment coordination",
];

const faqs: FaqItem[] = [
  {
    q: "What is a Wall Mounted Digital Display?",
    a: "A Wall Mounted Digital Display is a screen-based signage solution installed on a wall to present videos, images, promotions, announcements and business information.",
  },
  {
    q: "What type of content can be displayed?",
    a: "The display can be used for videos, images, promotional campaigns, product content, announcements and other business communication.",
  },
  {
    q: "Can the display work with local media playback?",
    a: "Yes. Local media playback can be included as part of the configured setup when remote content management is not required.",
  },
  {
    q: "Can signage software or cloud management be included?",
    a: "Yes. A signage application or cloud signage management can be added when the project requires managed or remote content control.",
  },
  {
    q: "Can the deployment be customized for the wall space?",
    a: "The wall placement, content workflow, branding approach and management setup can be planned according to the project requirement.",
  },
];

export default function WallMountedDisplayPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/wall-mounted.jpg"
          alt="Wall Mounted Digital Display by BrainADZ Live"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.76)_30%,rgba(0,0,0,0.44)_58%,rgba(0,0,0,0.10)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-8 lg:min-h-135 lg:px-12">
          <div className="flex items-center gap-3 text-[16px] font-light md:text-[18px]">
            <Link
              href="/"
              className="text-[#6da0ff] hover:underline"
            >
              Home
            </Link>

            <span className="text-white/80">/</span>

            <span className="text-white/90">Products</span>

            <span className="text-white/80">/</span>

            <span className="text-white/90">
              Wall Mounted Display
            </span>
          </div>

          <div className="mt-12 max-w-210 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Wall Mounted Digital Display for Space-Efficient Signage
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-200 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              A wall-mounted digital signage solution for displaying videos,
              images, promotions, announcements and business information
              without occupying floor space.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Request a Quote
                <span className="text-[20px] leading-none">↗</span>
              </button>

              <a
                href="/brochure/BrainADZLive.pdf"
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-3 rounded-full border border-white/35 px-8 text-[13px] font-bold text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#193175]"
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
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Product Overview
            </p>

            <h2 className="max-w-175 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Digital content on the wall, without using valuable floor space.
            </h2>

            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              The BrainADZ Live Wall Mounted Digital Display is a screen-based
              signage solution for businesses that need visible digital
              communication in a fixed wall location. It can present videos,
              images, promotional campaigns, announcements and information
              through a content setup planned around the space and intended use.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#193175]"
                  />

                  <span className="text-[15px] font-light text-black/70">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 -top-8 h-44 w-44 rounded-full bg-[#193175]/10 blur-3xl" />

            <div className="relative overflow-hidden bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
              <img
                src="/products/wall.png"
                alt="Wall Mounted Digital Display"
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
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why Choose This Product
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              A fixed digital display for visible and changing communication.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {[
              {
                title: "Space-Efficient Display",
                text: "Use available wall space for digital communication without adding a freestanding display to the floor.",
              },
              {
                title: "Dynamic Content",
                text: "Present changing videos, images, campaigns and information instead of relying on static printed material.",
              },
              {
                title: "Professional Presentation",
                text: "Create a dedicated screen-based communication point for customer-facing and business spaces.",
              },
              {
                title: "Flexible Content Management",
                text: "Use local playback or add signage software and cloud management according to the deployment requirement.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="border-t border-black/10 pt-7"
              >
                <span className="text-[13px] font-semibold text-[#193175]">
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
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Configuration Details
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Plan the display around the wall, content and management needs.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              The final setup can be planned according to the display location,
              content requirement, management approach and overall deployment
              environment.
            </p>
          </div>

          <div className="border-y border-black/10">
            {specs.map((item) => (
              <div
                key={item.label}
                className="grid gap-3 border-b border-black/10 py-5 last:border-b-0 md:grid-cols-[0.35fr_0.65fr] md:gap-8"
              >
                <h3 className="text-[17px] font-light text-black">
                  {item.label}
                </h3>

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
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Ideal Applications
            </p>

            <h2 className="mx-auto max-w-210 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Suitable for customer-facing and professional business spaces.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {applications.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[26px] border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#193175]/30 hover:shadow-[0_22px_65px_rgba(60,91,155,0.1)]"
                >
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-full bg-[#193175]/10 transition group-hover:bg-[#193175]">
                    <Icon
                      size={24}
                      className="text-[#193175] transition group-hover:text-white"
                    />
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
              alt="Wall Mounted Digital Display configuration planning"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Configuration Options
            </p>

            <h2 className="max-w-175 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Configure the display around your content, wall space and
              management workflow.
            </h2>

            <div className="mt-8 border-y border-black/10">
              {customization.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between gap-6 border-b border-black/10 py-5 last:border-b-0"
                >
                  <span className="text-[16px] font-light text-black/75">
                    {item}
                  </span>

                  <ChevronRight
                    size={20}
                    className="shrink-0 text-[#193175]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Product Showcase
              </p>

              <h2 className="max-w-195 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Wall Mounted Digital Display views and deployment examples.
              </h2>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-3 text-[14px] font-semibold text-[#193175]"
            >
              Discuss Your Requirement
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-2 md:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-72 overflow-hidden bg-[#dde6f6]"
              >
                <img
                  src={`/products/wall-mounted-standee-${item}.jpg`}
                  alt={`Wall Mounted Digital Display ${item}`}
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
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              FAQ
            </p>

            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about Wall Mounted Digital Display.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-[26px] border bg-white transition-all duration-300 ${
                  openFaq === index
                    ? "border-[#193175]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]"
                    : "border-black/10 shadow-[0_12px_42px_rgba(0,0,0,0.035)]"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                >
                  <span className="text-[16px] font-light leading-[1.45] text-black md:text-[17px]">
                    {faq.q}
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f6f8fc] text-[#193175]">
                    {openFaq === index ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="mx-5 border-t border-[#193175]/15 pb-6 pt-4 md:mx-6">
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
          <div className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/products/wall.png"
                alt="Wall Mounted Digital Display showcase"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/about.avif";
                }}
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-150">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Planning a Wall Mounted Digital Display setup?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Tell us about the wall location, intended content and
                  management requirements so the right display setup can be
                  planned.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#193175] md:min-w-57.5"
              >
                <span>Request a Quote</span>

                <span className="text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <PopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </main>
  );
}