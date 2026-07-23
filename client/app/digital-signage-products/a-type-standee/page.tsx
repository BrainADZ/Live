/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import PopupForm from "@/components/PopupForm";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  CloudSun,
  Download,
  Image as ImageIcon,
  Minus,
  PackageCheck,
  Paintbrush,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
  Utensils,
  Wrench,
} from "lucide-react";

const whyChoose = [
  {
    title: "Professional Digital Presence",
    text: "A freestanding A-frame display format designed for visible, customer-facing digital communication.",
    icon: ShieldCheck,
  },
  {
    title: "Dynamic Content Display",
    text: "Present promotional videos, images, campaign creatives and business information on screen.",
    icon: ImageIcon,
  },
  {
    title: "Flexible Media Playback",
    text: "Use local media playback for planned content without depending on printed campaign material.",
    icon: PackageCheck,
  },
  {
    title: "Optional Cloud Management",
    text: "Add cloud signage management when remote content control is required for the deployment.",
    icon: CloudSun,
  },
  {
    title: "Requirement-Based Setup",
    text: "Plan the display, content setup and deployment approach around the actual business requirement.",
    icon: Wrench,
  },
  {
    title: "Enclosure Branding",
    text: "Coordinate the enclosure finish and branding treatment with the surrounding business environment.",
    icon: Paintbrush,
  },
];

const useCases = [
  {
    title: "Retail Stores",
    text: "Display offers, launches, collections and promotional campaigns.",
    icon: Store,
  },
  {
    title: "Events & Exhibitions",
    text: "Present event content, sponsor visuals and campaign communication.",
    icon: CalendarDays,
  },
  {
    title: "Hospitality",
    text: "Show promotions, guest information and customer-facing content.",
    icon: Utensils,
  },
  {
    title: "Corporate & Reception",
    text: "Present welcome content, company information and visitor communication.",
    icon: Building2,
  },
  {
    title: "Campaigns & Launches",
    text: "Support product launches, announcements and changing campaign content.",
    icon: ShoppingBag,
  },
];

const productDetails = [
  "Display Type: Freestanding A-frame digital signage unit",
  "Content Support: Video and image playback",
  "Playback Setup: Local media playback based on configured setup",
  "Software Options: Signage application available when required",
  "Cloud Management: Optional cloud signage management",
  "Customization: Enclosure finish, branding and deployment planning based on requirement",
];

const process = [
  {
    title: "Requirement Discovery",
    text: "Share the intended placement, audience, content requirement and business use case.",
    icon: BadgeCheck,
  },
  {
    title: "Configuration Planning",
    text: "We plan the standee setup, content approach and management requirements for the project.",
    icon: Wrench,
  },
  {
    title: "Content Setup",
    text: "Images, videos and promotional content are prepared for the selected playback setup.",
    icon: ImageIcon,
  },
  {
    title: "Standee Preparation",
    text: "The digital standee, enclosure finish and branding requirements are prepared for deployment.",
    icon: Paintbrush,
  },
  {
    title: "Quality Check",
    text: "The display presentation, content playback and configured setup are checked before deployment.",
    icon: CheckCircle2,
  },
  {
    title: "Deployment",
    text: "The standee is prepared for placement according to the agreed deployment plan.",
    icon: Truck,
  },
];

const processLayout = [
  { ...process[0], left: "21.75%", top: "0px" },
  { ...process[1], left: "78.25%", top: "0px" },
  { ...process[2], left: "21.75%", top: "300px" },
  { ...process[3], left: "78.25%", top: "300px" },
  { ...process[4], left: "21.75%", top: "570px" },
  { ...process[5], left: "78.25%", top: "570px" },
];

const businessBenefits = [
  {
    title: "Update Campaign Content",
    text: "Change promotional videos, images and campaign communication without creating a new printed display for every update.",
  },
  {
    title: "Support Rich Media",
    text: "Use motion, visuals and rotating content to present more information through one customer-facing display point.",
  },
  {
    title: "Better Digital Presentation",
    text: "Create a cleaner screen-based communication experience for retail, events, hospitality and corporate spaces.",
  },
  {
    title: "Choose the Right Management Setup",
    text: "Use local media playback or add signage software and cloud management according to the deployment requirement.",
  },
];

const faqs = [
  {
    q: "What is an A Type Digital Standee?",
    a: "An A Type Digital Standee is a freestanding A-frame digital signage unit used to display videos, images, promotional campaigns and business information in customer-facing spaces.",
  },
  {
    q: "What type of content can the standee display?",
    a: "The standee can be configured for video and image playback, including promotional creatives, product campaigns, announcements, launch content and business information.",
  },
  {
    q: "Can the standee work with local media playback?",
    a: "Yes. Local media playback can be included as part of the configured setup when the business does not require remote content management.",
  },
  {
    q: "Can I manage content through signage software or the cloud?",
    a: "Yes. A signage application or cloud signage management can be added when the project requires managed or remote content control.",
  },
  {
    q: "Can the A Type Digital Standee be customized?",
    a: "The enclosure finish, branding treatment, content-management setup and deployment approach can be planned according to the project requirement.",
  },
];

const configurations = [
  [
    "Display Format",
    "A-frame digital standee",
    "Requirement-based setup",
  ],
  [
    "Content Playback",
    "Images and videos",
    "Local media playback",
  ],
  [
    "Content Management",
    "Signage application",
    "Optional when required",
  ],
  [
    "Remote Management",
    "Cloud signage management",
    "Optional when required",
  ],
  [
    "Branding & Finish",
    "Enclosure branding",
    "Project-based customization",
  ],
];

export default function ATypeStandeePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/a-type.webp"
          alt="A Type Digital Standee by BrainADZ Live"
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
            <span className="text-white/90">A Type Standee</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              A Type Digital Standee for Dynamic Brand Communication
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              A freestanding A-frame digital signage unit for displaying
              videos, images, promotions, launches and business information
              across customer-facing spaces.
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

      {/* QUICK HIGHLIGHTS */}
      <section className="bg-white px-5 py-10 md:px-4 lg:px-12">
        <div className="mx-auto grid max-w-450 gap-6 border-b border-black/10 pb-10 md:grid-cols-4">
          {[
            "Digital Content Display",
            "Video & Image Playback",
            "Custom Enclosure Branding",
            "Software Options",
          ].map((item) => (
            <div key={item} className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#193175]/10">
                <CheckCircle2 size={23} className="text-[#193175]" />
              </span>
              <p className="text-[16px] font-light text-black/75">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT OVERVIEW */}
      <section className="bg-white px-5 py-16 md:px-4 lg:px-12 lg:py-22">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Product Overview
            </p>

            <h2 className="max-w-170 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              A digital A-frame display built for visible, screen-based
              communication.
            </h2>

            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              The BrainADZ Live A Type Digital Standee is a freestanding digital
              signage solution designed for promotional content, brand
              communication and customer-facing information. Instead of static
              printed graphics, the display can present changing videos and
              images based on the selected content setup.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Freestanding A-frame digital signage format",
                "Video and image content playback",
                "Local media playback based on configured setup",
                "Optional signage application",
                "Optional cloud signage management",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-[#193175]"
                  />
                  <p className="text-[15px] font-light leading-[1.65] text-black/65">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["/products/A.png", "Digital Front View"],
              ["/products/A.png", "Digital Side View"],
              ["/products/a-type-standee/back.jpg", "Digital Back View"],
            ].map(([src, label]) => (
              <div key={label} className="text-center">
                <div className="overflow-hidden rounded-[20px] bg-[#f6f8fc] shadow-[0_22px_65px_rgba(0,0,0,0.06)]">
                  <img
                    src={src}
                    alt={`A Type Standee ${label}`}
                    className="h-80 w-full object-cover transition duration-500 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/about.avif";
                    }}
                  />
                </div>
                <p className="mt-4 text-[15px] font-light text-[#193175]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why Choose This Product
            </p>

            <h2 className="mx-auto max-w-210 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Built for changing content and professional customer-facing
              communication.
            </h2>
          </div>

          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="border-t border-black/10 pt-7">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#193175]/10">
                    <Icon size={26} className="text-[#193175]" />
                  </div>

                  <h3 className="text-[23px] font-normal tracking-[-0.4px]">
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

      {/* SPECIFICATIONS */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Configuration Options
            </p>

            <h2 className="max-w-170 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[42px]">
              Configuration options for different deployment needs.
            </h2>

            <div className="mt-8 overflow-hidden border border-black/10">
              <table className="w-full border-collapse text-left text-[14px] font-light text-black/70">
                <thead className="bg-[#f6f8fc] text-black">
                  <tr>
                    <th className="border-b border-black/10 p-4 font-medium">
                      Area
                    </th>
                    <th className="border-b border-black/10 p-4 font-medium">
                      Standard Scope
                    </th>
                    <th className="border-b border-black/10 p-4 font-medium">
                      Available Setup
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {configurations.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell) => (
                        <td
                          key={cell}
                          className="border-b border-black/10 p-4"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-[13px] font-light text-black/50">
              Final configuration is planned according to placement, content
              and project requirements.
            </p>
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Product Details
            </p>

            <h2 className="max-w-170 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[42px]">
              Planned around display content, management and deployment
              requirements.
            </h2>

            <div className="mt-8 space-y-4">
              {productDetails.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-black/10 pb-4"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-[#193175]"
                  />

                  <p className="text-[15px] font-light leading-[1.65] text-black/65">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Ideal Use Cases
            </p>

            <h2 className="mx-auto max-w-210 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Built for customer-facing spaces where content needs to stay
              current.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-5">
            {useCases.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[26px] border border-black/10 bg-white p-6 text-center shadow-[0_18px_55px_rgba(0,0,0,0.04)]"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#193175]/10">
                    <Icon size={25} className="text-[#193175]" />
                  </div>

                  <h3 className="text-[19px] font-normal tracking-[-0.3px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] font-light leading-[1.6] text-black/60">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Customization Options
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Configure the standee around your content, placement and brand.
            </h2>

            <p className="mt-5 max-w-160 text-[16px] font-light leading-[1.7] text-black/65">
              BrainADZ Live plans the A Type Digital Standee based on its
              intended use, content requirements, enclosure presentation and
              preferred content-management approach.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
            {[
              "Enclosure finish",
              "Branding treatment",
              "Content playback setup",
              "Signage application setup",
              "Cloud management option",
              "Deployment planning",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-5 border-b border-black/10 pb-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#193175]/10 text-[13px] font-semibold text-[#193175]">
                  0{index + 1}
                </span>

                <h3 className="text-[20px] font-normal tracking-[-0.3px]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS BENEFITS */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Business Benefits
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Digital communication that can change with the campaign.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {businessBenefits.map((item, index) => (
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

      {/* CTA */}
      <section className="lazy-section bg-white py-8">
        <div className="mx-auto max-w-450 px-4 lg:px-10">
          <div className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/CTA/home-cta.png"
                alt="A Type Digital Standee deployment showcase"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-150">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Planning an A Type Digital Standee deployment?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Tell us where the standee will be placed, what content you
                  want to display and how you want to manage it.
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

      {/* WHY BRAINADZ */}
      <section className="bg-[#f6f8fc] px-5 py-14 md:px-4 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-10 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why BrainADZ
            </p>

            <h2 className="mx-auto max-w-180 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[42px]">
              Digital signage planning with practical deployment support.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Requirement Planning",
              "Digital Signage Experience",
              "Content Setup Guidance",
              "Branding Coordination",
              "Software Options",
              "Deployment Support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-t border-black/10 pt-5"
              >
                <BadgeCheck
                  size={22}
                  className="shrink-0 text-[#193175]"
                />

                <p className="text-[15px] font-light leading-[1.4] text-black/70">
                  {item}
                </p>
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
              Common questions about A Type Digital Standee.
            </h2>
          </div>

          <div className="mx-auto max-w-260 space-y-4">
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
      <section className="lazy-section bg-white py-8">
        <div className="mx-auto max-w-450 px-4 lg:px-10">
          <div className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/CTA/home-cta.png"
                alt="A Type Digital Standee deployment showcase"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-150">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Bring your promotional content to a digital display format.
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Plan an A Type Digital Standee with the right content setup,
                  branding treatment and management approach for your space.
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
