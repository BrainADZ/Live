/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CloudSun,
  Download,
  Gauge,
  Image as ImageIcon,
  MapPin,
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
    title: "Durable Build",
    text: "Strong frame quality designed for long-term indoor and outdoor promotional use.",
    icon: ShieldCheck,
  },
  {
    title: "Lightweight Design",
    text: "Easy to carry, move and place wherever your promotion needs better visibility.",
    icon: PackageCheck,
  },
  {
    title: "High Visibility",
    text: "Large branding area helps your message stand out in shops, events and walkways.",
    icon: ImageIcon,
  },
  {
    title: "Weather Friendly",
    text: "Suitable for daily business promotions, indoor displays and covered outdoor spaces.",
    icon: CloudSun,
  },
  {
    title: "Easy Setup",
    text: "Foldable A-frame design makes installation, movement and storage simple.",
    icon: Wrench,
  },
  {
    title: "Custom Branding",
    text: "Print your own design, offer, menu, direction board or promotional campaign.",
    icon: Paintbrush,
  },
];

const useCases = [
  { title: "Retail Stores", text: "Promote offers, launches and walk-in deals.", icon: Store },
  { title: "Events & Exhibitions", text: "Guide visitors and increase brand presence.", icon: CalendarDays },
  { title: "Restaurants & Cafes", text: "Display menus, deals and daily specials.", icon: Utensils },
  { title: "Offices & Institutions", text: "Share directions, notices and information.", icon: Building2 },
  { title: "Promotions & Offers", text: "Highlight discounts and seasonal campaigns.", icon: ShoppingBag },
];

const productDetails = [
  "Frame Material: Aluminium / metal frame options",
  "Frame Color: Silver or custom finish based on availability",
  "Graphic Material: Flex, vinyl or foam board printing",
  "Printing: High-resolution branding print",
  "Usage: Indoor, storefront and promotional placement",
  "Customization: Size, artwork and campaign design",
];

const process = [
  {
    title: "Requirement",
    text: "Share your standee size, usage location and branding requirement.",
    icon: BadgeCheck,
  },
  {
    title: "Design Approval",
    text: "We prepare or adjust artwork and confirm the final print-ready design.",
    icon: Paintbrush,
  },
  {
    title: "Printing",
    text: "Your creative is printed with clean colors and sharp promotional visibility.",
    icon: ImageIcon,
  },
  {
    title: "Frame Setup",
    text: "The print is fitted with a strong A-type frame for easy display.",
    icon: Wrench,
  },
  {
    title: "Quality Check",
    text: "We check print quality, fitting, finishing and overall product presentation.",
    icon: CheckCircle2,
  },
  {
    title: "Delivery",
    text: "Your standee is packed and delivered for business use.",
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
    title: "Better Walk-In Attention",
    text: "Place your message near entrances, storefronts, counters or event spaces to attract more attention.",
  },
  {
    title: "Clear Promotional Messaging",
    text: "Show offers, product launches, menus, service details and directions in a simple visual format.",
  },
  {
    title: "Reusable Branding Asset",
    text: "Use it for different campaigns by changing printed graphics or updating your promotional design.",
  },
  {
    title: "Easy Indoor & Outdoor Placement",
    text: "The foldable structure makes it simple to shift, store and reuse across multiple business locations.",
  },
];

const faqs = [
  {
    q: "What is an A Type Standee?",
    a: "An A Type Standee is a foldable display stand used for promotions, directions, menus, announcements and brand visibility in shops, events and business spaces.",
  },
  {
    q: "Can I customize the design?",
    a: "Yes. You can provide your artwork, or our team can help create a print-ready design based on your brand and message.",
  },
  {
    q: "Is it suitable for outdoor use?",
    a: "It can be used indoors and in covered outdoor spaces. For harsh outdoor conditions, material and finishing can be selected accordingly.",
  },
  {
    q: "Which businesses can use A Type Standees?",
    a: "Retail stores, restaurants, cafes, clinics, real estate businesses, exhibitions, offices and event organizers commonly use A Type Standees.",
  },
  {
    q: "Do you provide delivery?",
    a: "Yes. Delivery availability depends on location and order quantity. Our team can confirm this during enquiry.",
  },
];

const sizes = [
  ["24 x 36", "24 x 36 in", "Approx. 25 x 37 x 20 in"],
  ["24 x 48", "24 x 48 in", "Approx. 25 x 49 x 20 in"],
  ["30 x 48", "30 x 48 in", "Approx. 31 x 49 x 24 in"],
  ["36 x 60", "36 x 60 in", "Approx. 37 x 61 x 24 in"],
];

export default function ATypeStandeePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/products/A.png"
          alt="A Type Standee"
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
            <span className="text-white/90">A Type Standee</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              A Type Standee Printing & Branding Solutions
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Strong, portable and high-impact A Type Standees designed for
              retail stores, exhibitions, restaurants, offices and promotional
              branding.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#3C5B9B] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Request a Quote
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

      {/* QUICK HIGHLIGHTS */}
      <section className="bg-white px-5 py-10 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-450 gap-6 border-b border-black/10 pb-10 md:grid-cols-4">
          {[
            "Premium Quality",
            "Lightweight & Portable",
            "Custom Branding",
            "Easy Setup",
          ].map((item) => (
            <div key={item} className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3C5B9B]/10">
                <CheckCircle2 size={23} className="text-[#3C5B9B]" />
              </span>
              <p className="text-[16px] font-light text-black/75">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT OVERVIEW */}
      <section className="bg-white px-5 py-16 md:px-8 lg:px-12 lg:py-22">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Product Overview
            </p>

            <h2 className="max-w-170 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              A professional display solution for everyday business promotions.
            </h2>

            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              A Type Standee, also known as a pavement sign or A board standee,
              is a foldable advertising display used to promote offers, guide
              customers, display menus and increase brand visibility in high
              traffic areas.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Sturdy aluminium or metal frame",
                "High-quality printed graphics",
                "Foldable and portable structure",
                "Useful for indoor and covered outdoor branding",
                "Available in multiple practical sizes",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-[#3C5B9B]"
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
              ["/products/A.png", "Front View"],
              ["/products/A.png", "Side View"],
              ["/products/a-type-standee/back.jpg", "Back View"],
            ].map(([src, label]) => (
              <div key={label} className="text-center">
                <div className="overflow-hidden rounded-[20px] bg-[#f6f8fc] shadow-[0_22px_65px_rgba(0,0,0,0.06)]">
                  <img
                    src={src}
                    alt={label}
                    className="h-80 w-full object-cover transition duration-500 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/about.avif";
                    }}
                  />
                </div>
                <p className="mt-4 text-[15px] font-light text-[#3C5B9B]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Why Choose This Product
            </p>
            <h2 className="mx-auto max-w-210 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Built for visibility, portability and practical brand promotion.
            </h2>
          </div>

          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="border-t border-black/10 pt-7">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#3C5B9B]/10">
                    <Icon size={26} className="text-[#3C5B9B]" />
                  </div>
                  <h3 className="text-[23px] font-light tracking-[-0.4px]">
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
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Available Sizes
            </p>

            <h2 className="max-w-170 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[42px]">
              Practical sizes for different promotional spaces.
            </h2>

            <div className="mt-8 overflow-hidden border border-black/10">
              <table className="w-full border-collapse text-left text-[14px] font-light text-black/70">
                <thead className="bg-[#f6f8fc] text-black">
                  <tr>
                    <th className="border-b border-black/10 p-4 font-medium">
                      Size
                    </th>
                    <th className="border-b border-black/10 p-4 font-medium">
                      Graphic Size
                    </th>
                    <th className="border-b border-black/10 p-4 font-medium">
                      Display Size
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell) => (
                        <td key={cell} className="border-b border-black/10 p-4">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[13px] font-light text-black/50">
              Custom sizes may be available based on order requirement.
            </p>
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Product Details
            </p>

            <h2 className="max-w-170 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[42px]">
              Designed with the right material, finish and branding quality.
            </h2>

            <div className="mt-8 space-y-4">
              {productDetails.map((item) => (
                <div key={item} className="flex items-start gap-3 border-b border-black/10 pb-4">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-[#3C5B9B]"
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
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Ideal Use Cases
            </p>
            <h2 className="mx-auto max-w-210 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Perfect for businesses that need visible, flexible promotions.
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
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#3C5B9B]/10">
                    <Icon size={25} className="text-[#3C5B9B]" />
                  </div>
                  <h3 className="text-[19px] font-light tracking-[-0.3px]">
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
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Customization Options
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Make your standee match your campaign and brand identity.
            </h2>

            <p className="mt-5 max-w-160 text-[16px] font-light leading-[1.7] text-black/65">
              From design to print finish, BrainADZ helps you create A Type
              Standees that look professional and communicate your message
              clearly.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
            {[
              "Size customization",
              "Print design support",
              "Double-side branding",
              "Lamination options",
              "Brand color matching",
              "Campaign-specific artwork",
            ].map((item, index) => (
              <div key={item} className="flex gap-5 border-b border-black/10 pb-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3C5B9B]/10 text-[13px] font-semibold text-[#3C5B9B]">
                  0{index + 1}
                </span>
                <h3 className="text-[20px] font-light tracking-[-0.3px]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-[#f6f8fc] px-5 py-16 md:px-8 lg:px-12 lg:py-14">
        <div
          className="pointer-events-none absolute -right-[9%] -top-[8%] hidden h-[116%] w-[32%] opacity-35 lg:block"
          style={{
            backgroundImage:
              "repeating-radial-gradient(ellipse at center, rgba(60, 91, 155, 0.18) 0 1px, transparent 1px 14px)",
            transform: "rotate(5deg) scaleX(0.72)",
          }}
        />

        <div className="mx-auto max-w-[1500px]">
          <div className="relative z-10 mx-auto mb-12 max-w-[1180px] text-center lg:mb-14">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Design & Print Process
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              From artwork approval to ready-to-use display.
            </h2>
            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              Our process keeps your standee production simple, clear and
              quality-focused from requirement to delivery.
            </p>
          </div>

          <div className="lg:hidden">
            <div className="space-y-5">
              {process.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative rounded-[26px] border border-black/10 bg-white p-6"
                  >
                    {index !== process.length - 1 && (
                      <div className="absolute left-11 top-18 h-[calc(100%+20px)] border-l-2 border-dashed border-[#3C5B9B]/45" />
                    )}

                    <div className="relative z-10 flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#3C5B9B] bg-[#edf3ff] transition duration-300 ease-out group-hover:-translate-y-1.5 group-hover:bg-white group-hover:shadow-[0_18px_42px_rgba(60,91,155,0.24)]">
                        <Icon size={23} strokeWidth={2.4} className="text-[#3C5B9B]" />
                      </div>

                      <div>
                        <h3 className="text-[22px] font-light leading-tight tracking-[-0.5px]">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-[15px] font-light leading-[1.65] text-black/65">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative hidden h-[790px] lg:block">
            <svg
              className="pointer-events-none absolute inset-0 z-0 h-full w-full"
              viewBox="0 0 1600 790"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id="standee-process-arrowhead"
                  markerHeight="14"
                  markerUnits="userSpaceOnUse"
                  markerWidth="18"
                  orient="auto"
                  refX="16"
                  refY="7"
                >
                  <path d="M 0 0 L 18 7 L 0 14 z" fill="#3C5B9B" />
                </marker>
              </defs>

              <path d="M 392 43 L 1208 43" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#standee-process-arrowhead)" />
              <path d="M 1294 43 C 1480 43 1515 150 1515 230 C 1515 318 1440 343 1294 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 1208 343 L 392 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#standee-process-arrowhead)" />
              <path d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#standee-process-arrowhead)" />
              <path d="M 392 613 L 1208 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#standee-process-arrowhead)" />
            </svg>

            {processLayout.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group absolute z-10 w-[390px] -translate-x-1/2 text-center"
                  style={{ left: item.left, top: item.top }}
                >
                  <div className="mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-full border-2 border-[#3C5B9B] bg-[#edf3ff] shadow-[0_16px_42px_rgba(60,91,155,0.16)] transition duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-[0_26px_58px_rgba(60,91,155,0.28)]">
                    <Icon size={36} strokeWidth={2.25} className="text-[#3C5B9B]" />
                  </div>

                  <h3 className="mt-6 text-[30px] font-light leading-[1.15] tracking-[-0.8px] text-black xl:text-[32px]">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-[330px] text-[17px] font-light leading-[1.55] text-black/65 xl:text-[18px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS BENEFITS */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Business Benefits
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              A simple promotional product that supports everyday visibility.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {businessBenefits.map((item, index) => (
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

      {/* SHOWCASE CTA */}
      <section className="lazy-section bg-white py-12">
        <div className="mx-auto max-w-450 px-8 lg:px-10">
          <div className="flex min-h-65 overflow-hidden rounded-none bg-[#3C5B9B] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/products/a-type-standee/cta.jpg"
                alt="A Type Standee Showcase"
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
                  Ready to boost your brand visibility?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Get a high-quality A Type Standee with custom branding,
                  professional printing and a clean business-ready finish.
                </p>
              </div>

              <a
                href="/contact"
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#3C5B9B] md:min-w-57.5"
              >
                <span>Request a Quote</span>
                <span className="text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BRAINADZ */}
      <section className="bg-[#f6f8fc] px-5 py-14 md:px-8 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-10 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Why BrainADZ
            </p>
            <h2 className="mx-auto max-w-180 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[42px]">
              Product quality with reliable branding support.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Premium Products",
              "Competitive Pricing",
              "Fast Turnaround",
              "Customization Available",
              "Delivery Support",
              "Dedicated Guidance",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 border-t border-black/10 pt-5">
                <BadgeCheck size={22} className="shrink-0 text-[#3C5B9B]" />
                <p className="text-[15px] font-light leading-[1.4] text-black/70">
                  {item}
                </p>
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
              Common questions about A Type Standee.
            </h2>
          </div>

          <div className="mx-auto max-w-260 space-y-4">
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
          <div className="flex min-h-65 overflow-hidden rounded-none bg-[#3C5B9B] md:min-h-75">
            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-150">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Need a custom A Type Standee for your brand?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Share your requirement with BrainADZ and get a professional
                  standee solution for your business promotion.
                </p>
              </div>

              <a
                href="/contact"
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#3C5B9B] md:min-w-57.5"
              >
                <span>Enquire Now</span>
                <span className="text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}