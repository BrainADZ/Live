"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useState } from "react";
import PopupForm from "@/components/PopupForm";

type Product = {
  title: string;
  description: string;
  image: string;
};

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

const products: Product[] = [
  {
    title: "A Type Standee",
    description:
      "Freestanding digital display for entrances, promotions, product launches and brand communication in customer-facing spaces.",
    image: "/products/A.png",
  },
  {
    title: "D Type Standee",
    description:
      "Slim freestanding digital display for promotions, information and brand content across stores, showrooms and business spaces.",
    image: "/products/D.png",
  },
  {
    title: "Wall Mounted Standee",
    description:
      "Wall-mounted digital display for menus, schedules, notices, directories and promotional content where floor space is limited.",
    image: "/products/wall.png",
  },
  {
    title: "Floor Mounted Standee",
    description:
      "Floor-mounted digital display for prominent content placement in entrances, waiting areas, retail zones and public-facing spaces.",
    image: "/products/Floor.png",
  },
  {
    title: "Self Ordering Kiosk",
    description:
      "Interactive kiosk that lets customers browse options, place orders and complete selected service steps through a guided on-screen flow.",
    image: "/products/Selforder.png",
  },
  {
    title: "LFD Display",
    description:
      "Large-format display for presentations, brand content, dashboards, information and digital communication across shared spaces.",
    image: "/products/lfd.png",
  },
  {
    title: "LED Display",
    description:
      "High-visibility LED display for large-scale visual communication, campaigns, stage environments and suitable indoor or outdoor installations.",
    image: "/products/Led.png",
  },
  {
    title: "Interactive Teaching Display",
    description:
      "Interactive display for lessons, presentations, annotations and collaborative sessions in classrooms and training spaces.",
    image: "/products/Teaching.png",
  },
];

export default function DigitalSignageProductsPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <main className="bg-white text-[#161616]">
  {/* HERO */}
  <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
    <img
      src="/hero/signage-product.jpg"
      alt="Digital Signage Products"
      className="absolute inset-0 h-full w-full object-cover"
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />

    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

    <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-8 lg:min-h-135 lg:px-12">
      <div className="flex items-center gap-3 text-[16px] font-light md:text-[18px]">
        <Link href="/" className="text-[#6da0ff] hover:underline">
          Home
        </Link>
        <span className="text-white/80">/</span>
        <span className="text-white/90">Digital Signage Products</span>
      </div>

      <div className="mt-12 max-w-205 md:mt-14">
        <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
          Digital signage products for display, interaction and visual communication
        </h1>
      </div>

      <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
        <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
          From freestanding standees and kiosks to LFD, LED and interactive
          displays, choose hardware suited to how and where your content needs
          to be seen.
        </p>

        <div className="mt-8">
          <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
>
  Enquire Now
  <span className="text-[20px] leading-none">↗</span>
</button>
        </div>
      </div>
    </div>
  </section>

      {/* ABOUT DIGITAL SIGNAGE PRODUCTS */}
      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -right-45 -top-40 h-105 w-105 rounded-full bg-[#193175]/[0.07] blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-450">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                About Digital Signage Products
              </p>

              <h2 className="max-w-190 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Display hardware for customer-facing, operational and learning spaces
              </h2>

              <p className="mt-7 max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
                BrainADZ Live provides a focused range of digital signage
                hardware for presenting information, promotions, visual content
                and interactive experiences. The range includes freestanding
                and mounted standees, self-ordering kiosks, LFD screens, LED
                displays and interactive teaching displays.
              </p>

              <p className="mt-5 max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
                The right product depends on placement, viewing distance,
                content type and whether people only need to view information or
                interact with the screen. Our range supports entrances, counters,
                walls, shared spaces, classrooms, training rooms and other
                public-facing environments.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-[#f8faff] shadow-[0_24px_80px_rgba(22,22,22,0.06)]">
              <div className="absolute inset-0 flex items-center justify-center text-[15px] font-light text-[#8d8d8d]">
                Digital signage image will appear here
              </div>

              <img
                src="/solutions/digital-signage-about.jpg"
                alt="Digital signage products by BrainADZ Live"
                className="relative z-10 h-90 w-full object-cover md:h-130"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0)_45%,rgba(60,91,155,0.10)_100%)]" />
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL SIGNAGE STATS */}
      <section className="bg-[#f8faff] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-450">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              { value: "8", label: "Digital signage product categories" },
              { value: "4", label: "Freestanding and mounted standee formats" },
              { value: "2", label: "Interactive product types" },
              { value: "2", label: "Large-format display options" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[18px] border border-[#dfe6f1] bg-white p-7 shadow-[0_18px_60px_rgba(22,22,22,0.045)]"
              >
                <p className="text-[42px] font-light leading-none tracking-[-1.5px] text-[#193175] md:text-[52px]">
                  {item.value}
                </p>

                <p className="mt-4 text-[15px] font-light leading-[1.6] text-[#616161] md:text-[16px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -right-45 -top-40 h-105 w-105 rounded-full bg-[#193175]/[0.07] blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-450">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                Product Range
              </p>

              <h2 className="max-w-190 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Choose the display format that fits the space and use case
              </h2>
            </div>

            <p className="max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              Compare standees, self-service kiosks, large-format screens, LED
              displays and interactive teaching displays based on placement,
              visibility and interaction needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {products.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-white shadow-[0_18px_60px_rgba(22,22,22,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cbd7ea] hover:shadow-[0_24px_75px_rgba(22,22,22,0.075)]"
              >
                <div className="relative h-70 overflow-hidden bg-[#eef2f8]">
                  <div className="absolute inset-0 flex items-center justify-center text-[15px] font-light text-[#8d8d8d]">
                    Product image will appear here
                  </div>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0)_45%,rgba(60,91,155,0.12)_100%)]" />
                </div>

                <div className="p-7 md:p-8">
                  <h3 className="text-[25px] font-light leading-[1.22] tracking-[-0.6px] text-[#262626] transition group-hover:text-[#193175] md:text-[28px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] font-light leading-[1.75] text-[#616161] md:text-[16px]">
                    {item.description}
                  </p>

                  <Link
                    href="/contact-us"
                    className="mt-8 inline-flex items-center gap-3 text-[15px] font-light text-[#193175] hover:underline"
                  >
                    Explore Product
                    <ArrowRightIcon className="h-4.5 w-4.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lazy-section bg-white py-12">
              <div className="mx-auto max-w-450 px-8 lg:px-10">
                <div className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75">
                  <div className="hidden w-[32%] shrink-0 md:block">
                    <img
                      src="/products/a-type-standee/cta.jpg"
                      alt="BrainADZ Live Digital Signage Products"
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
                        Need the right display format for your space?
                      </h3>
      
                      <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                        Tell us where the display will be installed, what
                        content it needs to show and whether users need to
                        interact with it. We&apos;ll help you identify the right
                        product from our digital signage range.
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