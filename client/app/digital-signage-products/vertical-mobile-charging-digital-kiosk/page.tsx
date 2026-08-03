/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import PopupForm from "@/components/PopupForm";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Download,
  Minus,
  Plus,
} from "lucide-react";

const whyChoose = [
  {
    title: "Multi-Device Charging",
    text: "Provide convenient charging support through configurable USB-A, USB-C, charging cables and optional wireless charging.",
    iconSrc:
      "/signage-products/multi-device-charging.svg",
  },
  {
    title: "Digital Content Display",
    text: "Use the integrated portrait display for advertisements, announcements, offers, wayfinding and branded communication.",
    iconSrc:
      "/signage-products/dynamic-content-display.svg",
  },
  {
    title: "Protected Power Management",
    text: "Internal power distribution and protected wiring help create a reliable charging setup for public and commercial spaces.",
    iconSrc:
      "/signage-products/wireless-charging.svg",
  },
  {
    title: "Organized Cable Management",
    text: "Keep charging cables and internal wiring properly routed inside the kiosk for a cleaner and more professional installation.",
    iconSrc:
      "/signage-products/wireless-charging.svg",
  },
  {
    title: "Custom Branding",
    text: "Customize the kiosk body colour, vinyl graphics, logo placement, campaign artwork and digital screen content.",
    iconSrc:
      "/signage-products/campaigns-launches.svg",
  },
  {
    title: "Requirement-Based Setup",
    text: "Plan the charging configuration, display, connectivity, software and deployment approach around the actual project requirement.",
    iconSrc:
      "/signage-products/requirement-based-setup.svg",
  },
];

const useCases = [
  {
    title: "Shopping Malls & Retail",
    text: "Offer mobile charging while displaying promotions, launches, offers and store information.",
    iconSrc:
      "/signage-products/shopping-malls.svg",
  },
  {
    title: "Airports & Transit Hubs",
    text: "Support travellers in waiting areas while showing advertisements, announcements and travel information.",
    iconSrc:
      "/signage-products/airport.svg",
  },
  {
    title: "Hospitals & Healthcare",
    text: "Provide a practical charging point for patients and visitors with optional awareness or directional content.",
    iconSrc:
      "/signage-products/healthcare-facilities.svg",
  },
  {
    title: "Educational Campuses",
    text: "Install the kiosk in libraries, reception areas, student zones and common spaces for charging and campus communication.",
    iconSrc:
      "/signage-products/colleges.svg",
  },
  {
    title: "Hotels & Corporate Spaces",
    text: "Improve visitor convenience while promoting services, events, company information and branded communication.",
    iconSrc:
      "/signage-products/corporate-reception.svg",
  },
];

const productDetails = [
  "Kiosk Type: Floor-standing vertical mobile charging digital kiosk",
  "Charging Support: Configurable USB-A, USB-C, charging cables and optional wireless charging",
  "Display Option: Portrait commercial display with configurable screen size",
  "Content Support: Images, videos, offers, announcements and promotional campaigns",
  "Software Options: Local playback, signage application or optional cloud signage management",
  "Customization: Body finish, branding, connectivity and deployment planning based on requirement",
];

const businessBenefits = [
  {
    title: "Improve Visitor Convenience",
    text: "Give customers, guests and visitors a useful charging facility in locations where they spend time waiting, shopping, travelling or working.",
  },
  {
    title: "Increase Brand Visibility",
    text: "Use the kiosk body and digital screen as a branded engagement point for campaigns, announcements and promotional communication.",
  },
  {
    title: "Use Floor Space Efficiently",
    text: "The slim vertical footprint is suitable for reception areas, corridors, retail floors, waiting zones and event spaces.",
  },
  {
    title: "Manage Content Centrally",
    text: "Add signage software or cloud management when content needs to be scheduled and controlled across one or multiple locations.",
  },
];

const faqs = [
  {
    q: "What is a Vertical Mobile Charging Digital Kiosk?",
    a: "A Vertical Mobile Charging Digital Kiosk is a floor-standing unit designed to provide mobile-device charging in public and commercial spaces. It can also include a portrait digital display for advertisements, announcements, information and branded content.",
  },
  {
    q: "Which charging options can be added?",
    a: "The kiosk can be configured with USB-A ports, USB-C ports, device charging cables and optional wireless charging modules. The final combination is planned according to the project requirement.",
  },
  {
    q: "Can the kiosk display advertisements and videos?",
    a: "Yes. A commercial display can be integrated for images, videos, offers, announcements, promotional campaigns and other customer-facing content.",
  },
  {
    q: "Can content be managed through signage software or the cloud?",
    a: "Yes. The kiosk can use local media playback, a signage application or optional cloud signage management when remote content control is required.",
  },
  {
    q: "Can the kiosk be customized with our branding?",
    a: "Yes. The kiosk body colour, exterior finish, vinyl graphics, logo placement, campaign artwork, screen interface and content presentation can be customized according to the approved project scope.",
  },
  {
    q: "Does BrainADZ Live provide deployment support?",
    a: "Yes. BrainADZ Live can support configuration planning, branding coordination, production, integration, testing, delivery, installation guidance and post-deployment assistance according to the project scope.",
  },
];

const configurations = [
  [
    "Kiosk Format",
    "Floor-standing vertical enclosure",
    "Indoor commercial deployment",
  ],
  [
    "Charging Setup",
    "USB-A, USB-C and charging cables",
    "Optional wireless charging",
  ],
  [
    "Digital Display",
    "Portrait commercial screen",
    "Configurable screen size",
  ],
  [
    "Content Management",
    "Local playback or signage application",
    "Optional cloud management",
  ],
  [
    "Connectivity",
    "Wi-Fi or Ethernet",
    "Requirement-based configuration",
  ],
  [
    "Branding & Finish",
    "Body colour, logo and vinyl graphics",
    "Project-based customization",
  ],
];

export default function VerticalMobileChargingDigitalKioskPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/products/vertical-mobile-charging-digital-kiosk/hero.webp"
          alt="Vertical Mobile Charging Digital Kiosk by BrainADZ Live"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.src = "/hero/a-type.webp";
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.78)_30%,rgba(0,0,0,0.42)_58%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-4 lg:min-h-135 lg:px-12">
          <div className="flex flex-wrap items-center gap-3 text-[16px] font-light md:text-[18px]">
            <Link href="/" className="text-[#6da0ff] hover:underline">
              Home
            </Link>

            <span className="text-white/80">/</span>

            <Link
              href="/products/digital-signage-products"
              className="text-[#6da0ff] hover:underline"
            >
              Products
            </Link>

            <span className="text-white/80">/</span>

            <span className="text-white/90">
              Vertical Mobile Charging Digital Kiosk
            </span>
          </div>

          <div className="mt-12 max-w-230 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Vertical Mobile Charging Digital Kiosk for Smart Public Spaces
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-205 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              A floor-standing mobile charging and digital signage solution for
              malls, airports, hospitals, campuses, hotels, exhibitions and
              modern customer-facing spaces.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-4 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Request a Quote

                <ArrowRight
                  size={20}
                  strokeWidth={1.8}
                  className="text-[20px] leading-none"
                />
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
            "Multi-Device Charging",
            "Digital Content Display",
            "Custom Kiosk Branding",
            "Cloud Software Options",
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

            <h2 className="max-w-180 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              A useful charging facility combined with digital brand
              communication.
            </h2>

            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              The BrainADZ Live Vertical Mobile Charging Digital Kiosk combines
              mobile charging and optional digital signage in one organized,
              floor-standing unit. It helps businesses provide a practical
              visitor facility while using the same installation for
              advertising, offers, announcements, information and branded
              communication.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Floor-standing vertical kiosk format",
                "Configurable multi-device charging support",
                "Optional portrait commercial display",
                "Local or signage application-based content playback",
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
              [
                "/products/vertical-mobile-charging-digital-kiosk/front.webp",
                "Kiosk Front View",
              ],
              [
                "/products/vertical-mobile-charging-digital-kiosk/charging.webp",
                "Charging Interface",
              ],
              [
                "/products/vertical-mobile-charging-digital-kiosk/side.webp",
                "Kiosk Side View",
              ],
            ].map(([src, label]) => (
              <div key={label} className="text-center">
                <div className="overflow-hidden rounded-[20px] bg-[#f6f8fc] shadow-[0_22px_65px_rgba(0,0,0,0.06)]">
                  <img
                    src={src}
                    alt={`Vertical Mobile Charging Digital Kiosk ${label}`}
                    className="h-80 w-full object-cover transition duration-500 hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.src =
                        "/products/vertical-mobile-charging-digital-kiosk/hero.webp";
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

            <h2 className="mx-auto max-w-220 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Built for charging convenience, digital visibility and
              professional customer-facing deployment.
            </h2>
          </div>

          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <div key={item.title} className="border-t border-black/10 pt-7">
                <div className="manual-icon-box mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#193175]/10 p-4">
                  <img
                    src={item.iconSrc}
                    alt=""
                    aria-hidden="true"
                    className="manual-icon object-contain"
                  />
                </div>

                <h3 className="text-[23px] font-normal tracking-[-0.4px]">
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
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Configuration Options
            </p>

            <h2 className="max-w-175 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[42px]">
              Configuration options for different charging and signage needs.
            </h2>

            <div className="mt-8 overflow-x-auto border border-black/10">
              <table className="w-full min-w-170 border-collapse text-left text-[14px] font-light text-black/70">
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

            <p className="mt-4 text-[13px] font-light leading-[1.6] text-black/50">
              Final dimensions, charging components, screen specifications,
              electrical setup and finishing are planned according to the
              approved project requirements.
            </p>
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Product Details
            </p>

            <h2 className="max-w-175 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[42px]">
              Planned around charging capacity, content, branding and
              deployment requirements.
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

            <h2 className="mx-auto max-w-220 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Designed for high-footfall spaces where people need charging and
              businesses need visible communication.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-[26px] border border-black/10 bg-white p-6 text-center shadow-[0_18px_55px_rgba(0,0,0,0.04)]"
              >
                <div className="manual-icon-box mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#193175]/10 p-4">
                  <img
                    src={item.iconSrc}
                    alt=""
                    aria-hidden="true"
                    className="manual-icon object-contain"
                  />
                </div>

                <h3 className="text-[19px] font-normal tracking-[-0.3px]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[14px] font-light leading-[1.6] text-black/60">
                  {item.text}
                </p>
              </div>
            ))}
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
              Configure the kiosk around your charging needs, space and brand.
            </h2>

            <p className="mt-5 max-w-165 text-[16px] font-light leading-[1.7] text-black/65">
              BrainADZ Live plans the Vertical Mobile Charging Digital Kiosk
              according to the installation location, expected usage, charging
              formats, display requirement, connectivity, branding and
              preferred content-management setup.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
            {[
              "Kiosk body colour and finish",
              "Full-body branding or campaign wrap",
              "Charging ports and cable combinations",
              "Commercial digital display option",
              "Signage application or cloud management",
              "Connectivity and deployment planning",
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
              More than a charging station for your customer-facing space.
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
                src="/CTA/cta.webp"
                alt="Vertical Mobile Charging Digital Kiosk deployment showcase"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-165">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Planning a Vertical Mobile Charging Digital Kiosk deployment?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Tell us where the kiosk will be installed, which devices it
                  should support and how you want to use the digital display.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#193175] md:min-w-57.5"
              >
                <span>Request a Quote</span>

                <ArrowRight
                  size={26}
                  strokeWidth={1.8}
                  className="text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1"
                />
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

            <h2 className="mx-auto max-w-190 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[42px]">
              Charging kiosk planning with practical digital signage and
              deployment support.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Requirement Planning",
              "Charging Configuration",
              "Display Integration",
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

            <h2 className="mx-auto max-w-240 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about the Vertical Mobile Charging Digital Kiosk.
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
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
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
                src="/CTA/cta.webp"
                alt="Vertical Mobile Charging Digital Kiosk deployment showcase"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-165">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Turn mobile charging into a useful digital brand experience.
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Plan the kiosk with the right charging setup, display,
                  branding, connectivity and content-management approach for
                  your space.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#193175] md:min-w-57.5"
              >
                <span>Request a Quote</span>

                <ArrowRight
                  size={26}
                  strokeWidth={1.8}
                  className="text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1"
                />
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