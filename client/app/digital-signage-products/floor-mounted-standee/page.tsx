/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import PopupForm from "@/components/PopupForm";
import {
  ArrowRight,
  CheckCircle2,
  Minus,
  Plus,
  Download,
} from "lucide-react";

const benefits = [
  {
    title: "Strong Digital Presence",
    text: "A freestanding screen-based display that keeps promotional and informational content visible across customer-facing spaces.",
  },
  {
    title: "Dynamic Content Display",
    text: "Present videos, images, campaigns, announcements and business information through one digital display point.",
  },
  {
    title: "Flexible Content Setup",
    text: "Use local media playback or add signage software when the project requires managed content control.",
  },
  {
    title: "Requirement-Based Deployment",
    text: "Plan the enclosure finish, branding, content setup and placement according to the actual business requirement.",
  },
];

const specifications = [
  ["Product Type", "Floor mounted digital signage display"],
  ["Content Support", "Video and image playback"],
  ["Playback Setup", "Local media playback based on configured setup"],
  ["Content Management", "Optional signage application when required"],
  ["Remote Management", "Optional cloud signage management"],
  [
    "Customization",
    "Enclosure finish, branding, content setup and deployment planning based on requirement",
  ],
];

const applications = [
  "Retail Stores",
  "Shopping Malls",
  "Corporate & Reception",
  "Healthcare Facilities",
  "Events & Exhibitions",
  "Hotels & Hospitality",
];

const features = [
  {
    title: "Floor Mounted Display Format",
    text: "A freestanding digital signage format designed for visible placement in customer-facing business environments.",
  },
  {
    title: "Video & Image Playback",
    text: "Display promotional videos, campaign creatives, product information, announcements and other visual content.",
  },
  {
    title: "Optional Signage Software",
    text: "Add a signage application when the deployment requires structured content scheduling and management.",
  },
  {
    title: "Optional Cloud Management",
    text: "Use cloud signage management when remote content control is required for the project.",
  },
];

const faqs = [
  {
    q: "What is a Floor Mounted Digital Standee?",
    a: "A Floor Mounted Digital Standee is a freestanding screen-based signage unit used to display videos, images, promotions, announcements and business information in customer-facing spaces.",
  },
  {
    q: "What type of content can be displayed?",
    a: "The standee can be configured for video and image playback, including promotional campaigns, product information, launches, announcements and business communication.",
  },
  {
    q: "Can it work with local media playback?",
    a: "Yes. Local media playback can be included as part of the configured setup when remote content management is not required.",
  },
  {
    q: "Can content be managed through signage software or the cloud?",
    a: "Yes. A signage application or cloud signage management can be added when the project requires managed or remote content control.",
  },
  {
    q: "Can the Floor Mounted Digital Standee be customized?",
    a: "The enclosure finish, branding treatment, content-management setup and deployment approach can be planned according to the project requirement.",
  },
];

export default function FloorMountedStandeePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/floor-mounted.webp"
          alt="Floor Mounted Digital Standee by BrainADZ Live"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-4 lg:min-h-135 lg:px-12">
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
              Floor Mounted Digital Standee for Customer-Facing Communication
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              A freestanding digital signage display for presenting videos,
              images, promotions, announcements and business information across
              retail, corporate, event and hospitality spaces.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-4 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Request a Quote
                <ArrowRight size={20} strokeWidth={1.8} className="text-[20px] leading-none" />
              </button>

              <a
                href="/brochure/BrainADZLive.pdf"
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-3 rounded-full border border-white/35 px-4 text-[13px] font-bold text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#193175]"
              >
                Download Brochure
                <Download size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Product Overview
            </p>

            <h2 className="max-w-180 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              A freestanding digital display for visible business
              communication.
            </h2>

            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              The BrainADZ Live Floor Mounted Digital Standee is a screen-based
              signage solution designed for promotional content, customer
              information and business communication. It can display changing
              videos and images through local playback or an optional signage
              management setup based on the project requirement.
            </p>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              <div className="border-l-2 border-[#193175] pl-5">
                <h3 className="text-[20px] font-normal">
                  Digital Content Display
                </h3>

                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Present promotional videos, images and business information
                  through one screen-based display.
                </p>
              </div>

              <div className="border-l-2 border-[#193175] pl-5">
                <h3 className="text-[20px] font-normal">
                  Flexible Content Setup
                </h3>

                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Choose local playback or add signage management according to
                  the deployment requirement.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#193175]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[30px] bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
              <img
                src="/products/Floor.png"
                alt="Floor Mounted Digital Standee Overview"
                className="h-130 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why Choose Floor Mounted Standee
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Built for visible digital content in customer-facing spaces.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {benefits.map((item, index) => (
              <div key={item.title} className="border-t border-black/10 pt-7">
                <span className="text-[13px] font-semibold text-[#193175]">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-[24px] font-normal tracking-[-0.4px]">
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
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Configuration Details
              </p>

              <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
                Plan the right display and content-management setup.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              The final setup can be planned according to content requirements,
              placement, branding, management needs and the deployment
              environment.
            </p>
          </div>

          <div className="border-t border-black/10">
            {specifications.map(([label, value]) => (
              <div
                key={label}
                className="grid gap-3 border-b border-black/10 py-5 md:grid-cols-[0.35fr_0.65fr]"
              >
                <p className="text-[15px] font-semibold text-[#193175]">
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
      <section className="bg-[#f6f8fc] px-5 py-20 md:px-4 lg:px-12">
        <div className="mx-auto grid max-w-450 gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-[28px] shadow-[0_24px_75px_rgba(0,0,0,0.08)]">
            <img
              src="/products/Floor.png"
              alt="Floor Mounted Digital Standee Features"
              className="h-140 w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Product Features
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Digital signage designed around content and placement
              requirements.
            </h2>

            <p className="mt-6 text-[16px] font-light leading-[1.75] text-black/65">
              Floor Mounted Digital Standees provide a dedicated screen-based
              communication point for promotional content, information and
              customer-facing campaigns across business spaces.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  title: "Video and image playback",
                  text: "Present promotional videos, campaign creatives, announcements and other visual content.",
                },
                {
                  title: "Local media playback",
                  text: "Use a configured local content setup when remote content management is not required.",
                },
                {
                  title: "Optional signage management",
                  text: "Add signage software or cloud management when the deployment requires managed content control.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-[#193175]"
                    size={22}
                  />

                  <div>
                    <h3 className="text-[20px] font-normal">{item.title}</h3>

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
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Ideal Applications
            </p>

            <h2 className="mx-auto max-w-210 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Suitable for spaces that need visible and changing digital
              content.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((item) => (
              <div
                key={item}
                className="group rounded-3xl border border-black/10 bg-[#f8faff] p-6 transition hover:-translate-y-1 hover:border-[#193175]/30 hover:bg-white hover:shadow-[0_22px_65px_rgba(60,91,155,0.1)]"
              >
                <CheckCircle2 size={26} className="mb-5 text-[#193175]" />

                <h3 className="text-[21px] font-normal tracking-[-0.4px]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Key Features
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Practical digital signage options for real business use.
            </h2>

            <div className="mt-8 overflow-hidden rounded-[26px] bg-white shadow-[0_22px_70px_rgba(0,0,0,0.06)]">
              <img
                src="/products/Floor.png"
                alt="Floor Mounted Digital Standee Benefits"
                className="h-90 w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-0 border-t border-black/10">
            {features.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-5 border-b border-black/10 py-7 md:grid-cols-[70px_1fr]"
              >
                <span className="text-[14px] font-semibold text-[#193175]">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="text-[25px] font-normal tracking-[-0.5px]">
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

      {/* GALLERY */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Product Gallery
              </p>

              <h2 className="max-w-195 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
                Floor Mounted Digital Standee views and deployment examples.
              </h2>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-3 text-[14px] font-semibold text-[#193175]"
            >
              Discuss Your Requirement <ArrowRight size={18} />
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
                  alt={`Floor Mounted Digital Standee Gallery ${index + 1}`}
                  className="h-72 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              FAQ
            </p>

            <h2 className="mx-auto max-w-230 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about Floor Mounted Digital Standee.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-[26px] border bg-white transition ${
                  openFaq === index
                    ? "border-[#193175]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]"
                    : "border-black/10"
                }`}
              >
                <button
                  type="button"
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
      <section className="lazy-section bg-white py-8">
        <div className="mx-auto max-w-450 px-4 lg:px-10">
          <div className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/CTA/home-cta.png"
                alt="Floor Mounted Digital Standee showcase"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-150">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Planning a Floor Mounted Digital Standee deployment?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Tell us where the display will be placed, what content you
                  want to show and how you want to manage it.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#193175] md:min-w-57.5"
              >
                <span>Request a Quote</span>

                <ArrowRight size={26} strokeWidth={1.8} className="text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1" />
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
