/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Database,
  Gauge,
  ImagePlus,
  Layers3,
  Minus,
  Plus,
  Download,
  Search,
  ShieldCheck,
  Shirt,
  Sparkles,
  Users,
} from "lucide-react";
import IndustriesSection from "@/components/home/Industries"
import DemoForm from "@/components/DemoForm";
const modules = [
  {
    title: "Virtual Try-On",
    text: "Let shoppers preview products digitally before making a purchase decision.",
    icon: Shirt,
  },
  {
    title: "Product Mapping",
    text: "Map apparel, accessories and product visuals with a clean trial experience.",
    icon: ImagePlus,
  },
  {
    title: "Customer Experience",
    text: "Create a more interactive shopping journey for online and in-store users.",
    icon: Users,
  },
  {
    title: "Analytics Dashboard",
    text: "Track product engagement, try-on activity and customer interaction trends.",
    icon: BarChart3,
  },
];

const experienceItems = [
  {
    title: "AI-Based Try-On Flow",
    text: "Create a smart product preview experience where users can digitally test selected items through camera-based or image-based interaction.",
  },
  {
    title: "Product Catalogue Connection",
    text: "Connect trial room features with your product catalogue so users can try relevant apparel, accessories or product options.",
  },
  {
    title: "Mobile & Web Experience",
    text: "Design a smooth virtual trial flow that works across mobile browsers, web apps, tablets and in-store digital displays.",
  },
  {
    title: "Customer Engagement Insights",
    text: "Track which products users try more often, how they interact and which items create better buying interest.",
  },
  {
    title: "Brand-Custom Interface",
    text: "Customize the virtual trial room interface with your brand colors, product style, CTA buttons and shopping journey.",
  },
  {
    title: "Ecommerce Integration",
    text: "Connect the trial room with product pages, cart, checkout, inventory and customer account flows.",
  },
  {
    title: "In-Store Assisted Selling",
    text: "Use virtual trial screens inside retail stores to improve customer experience and reduce physical trial dependency.",
  },
  {
    title: "Performance Optimization",
    text: "Optimize loading, image handling and interactions so the virtual trial experience feels smooth and fast.",
  },
];

const workflowSteps = [
  {
    title: "Experience Discovery",
    text: "We understand product type, customer journey, trial room flow and platform goals.",
    icon: Search,
  },
  {
    title: "AI/UX Planning",
    text: "We plan the try-on logic, user journey, visual experience and product mapping approach.",
    icon: Sparkles,
  },
  {
    title: "Interface Design",
    text: "We design clean web, mobile or display interfaces for the virtual trial room.",
    icon: Layers3,
  },
  {
    title: "Platform Development",
    text: "We build try-on flows, catalogue connection, backend logic and dashboard modules.",
    icon: Database,
  },
  {
    title: "Testing & Validation",
    text: "We test usability, image quality, product preview, performance and device compatibility.",
    icon: ShieldCheck,
  },
  {
    title: "Launch & Improvement",
    text: "We deploy the platform and support improvements, analytics and new product categories.",
    icon: Gauge,
  },
];

const workflowLayout = [
  { ...workflowSteps[0], left: "21.75%", top: "0px" },
  { ...workflowSteps[1], left: "78.25%", top: "0px" },
  { ...workflowSteps[2], left: "21.75%", top: "300px" },
  { ...workflowSteps[3], left: "78.25%", top: "300px" },
  { ...workflowSteps[4], left: "21.75%", top: "570px" },
  { ...workflowSteps[5], left: "78.25%", top: "570px" },
];

const integrations = [
  "Ecommerce",
  "Product Catalogue",
  "Shopping Cart",
  "Inventory",
  "Camera Flow",
  "Analytics",
  "CRM",
  "APIs",
];

const faqs = [
  {
    q: "What is a Virtual Trial Room?",
    a: "A Virtual Trial Room is a digital experience that allows customers to preview products such as apparel or accessories before purchasing.",
  },
  {
    q: "Can BrainADZ build a custom virtual try-on platform?",
    a: "Yes. BrainADZ can build a custom virtual trial room for ecommerce, retail stores, mobile apps or in-store displays.",
  },
  {
    q: "Can it connect with ecommerce products?",
    a: "Yes. The platform can connect with product catalogue, product pages, cart, checkout and inventory systems.",
  },
  {
    q: "Will it work on mobile?",
    a: "Yes. The experience can be planned for mobile browsers, web apps, tablets and supported digital displays.",
  },
  {
    q: "Can the interface match our brand?",
    a: "Yes. The full interface, product flow, CTA and styling can be customized according to your brand.",
  },
];

export default function VirtualTrialRoomPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/VTR.jpeg"
          alt="Virtual Trial Room"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-8 lg:min-h-135 lg:px-12">
          <div className="flex items-center gap-3 text-[16px] font-light md:text-[18px]">
            <Link href="/" className="text-[#6da0ff] hover:underline">
              Home
            </Link>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Software Platforms</span>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Virtual Trial Room</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Virtual Trial Room
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              A smart virtual try-on platform that helps customers preview products digitally,
              improve shopping confidence and create a more interactive buying experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#3C5B9B] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
>
  View Demo
  <span className="text-[20px] leading-none">↗</span>
</button>

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
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Software Overview
            </p>

            <h2 className="max-w-180 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Bring digital try-on experiences to ecommerce and retail.
            </h2>

            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ Virtual Trial Room helps brands create a modern shopping experience
              where customers can digitally preview products before purchase. It can be
              designed for web, mobile, ecommerce platforms, retail displays and smart in-store experiences.
            </p>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              <div className="border-l-2 border-[#3C5B9B] pl-5">
                <h3 className="text-[20px] font-light">Interactive Shopping</h3>
                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Help users engage with products before buying.
                </p>
              </div>

              <div className="border-l-2 border-[#3C5B9B] pl-5">
                <h3 className="text-[20px] font-light">Product Confidence</h3>
                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Improve customer decisions with digital previews.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#3C5B9B]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[30px] bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
              <img
                src="/software/virtual-trial-room-dashboard.webp"
                alt="Virtual Trial Room Dashboard"
                className="h-130 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Benefits
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Improve shopping confidence with a more visual product experience.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {[
              {
                title: "Higher Engagement",
                text: "Customers spend more time exploring products through interactive try-on experiences.",
              },
              {
                title: "Better Buying Decisions",
                text: "Digital previews help shoppers understand how products may look before purchasing.",
              },
              {
                title: "Modern Retail Experience",
                text: "Create premium online and in-store experiences that make your brand feel more innovative.",
              },
              {
                title: "Reduced Trial Dependency",
                text: "Support product exploration without relying only on physical trials or manual assistance.",
              },
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

      {/* KEY MODULES */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Key Features
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Features that power virtual shopping experiences.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              The platform combines product preview, catalogue connection, customer experience
              and analytics into a practical virtual try-on system.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {modules.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-black/10 bg-[#f8faff] p-7 transition hover:-translate-y-1 hover:border-[#3C5B9B]/30 hover:bg-white hover:shadow-[0_22px_65px_rgba(60,91,155,0.1)]"
                >
                  <div className="mb-6 flex h-15 w-15 items-center justify-center rounded-2xl bg-[#3C5B9B]/10 transition group-hover:bg-[#3C5B9B]">
                    <Icon size={27} className="text-[#3C5B9B] transition group-hover:text-white" />
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

      {/* AI TRY-ON EXPERIENCE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.76fr_1.24fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              AI Try-On Experience
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              A smart product preview journey for modern shoppers.
            </h2>

            <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
              BrainADZ helps brands create virtual trial room experiences that combine
              product visuals, customer interaction, ecommerce flow and analytics into
              one engaging digital shopping journey.
            </p>

            <div className="mt-8 rounded-[26px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <h3 className="text-[22px] font-light tracking-[-0.4px]">
                Launch smarter shopping experiences
              </h3>
              <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">
                Give customers a more visual and confident way to explore products.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#3C5B9B] px-6 text-[13px] font-bold text-white transition hover:bg-[#2f4a82]"
              >
                Get Expert Guidance <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="border-t border-black/10">
            {experienceItems.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[75px_1fr]"
              >
                <span className="text-[14px] font-semibold text-[#3C5B9B]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-[26px] font-light tracking-[-0.5px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] font-light leading-[1.75] text-black/65 md:text-[16px]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="relative overflow-hidden bg-white px-5 py-16 md:px-8 lg:px-12 lg:py-14">
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
              Workflow
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              Our Virtual Trial Room Development Roadmap
            </h2>
            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              A connected process to design, build and launch virtual try-on experiences.
            </p>
          </div>

          <div className="lg:hidden">
            <div className="space-y-5">
              {workflowSteps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="group relative rounded-[26px] border border-black/10 bg-white p-6">
                    {index !== workflowSteps.length - 1 && (
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
            <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full" viewBox="0 0 1600 790" fill="none" aria-hidden="true" preserveAspectRatio="none">
              <defs>
                <marker id="trial-arrowhead" markerHeight="14" markerUnits="userSpaceOnUse" markerWidth="18" orient="auto" refX="16" refY="7">
                  <path d="M 0 0 L 18 7 L 0 14 z" fill="#3C5B9B" />
                </marker>
              </defs>

              <path d="M 392 43 L 1208 43" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#trial-arrowhead)" />
              <path d="M 1294 43 C 1480 43 1515 150 1515 230 C 1515 318 1440 343 1294 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 1208 343 L 392 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#trial-arrowhead)" />
              <path d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#trial-arrowhead)" />
              <path d="M 392 613 L 1208 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#trial-arrowhead)" />
            </svg>

            {workflowLayout.map((item) => {
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

      {/* INTEGRATIONS */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Integrations
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Connect trial room with your commerce ecosystem.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              The virtual trial room can connect with product catalogues, ecommerce stores,
              analytics, inventory and customer experience tools.
            </p>
          </div>

          <div className="grid gap-y-5 bg-white py-4 md:grid-cols-4">
            {integrations.map((item, index) => (
              <div
                key={item}
                className={`flex min-h-24 items-center justify-center px-5 text-center ${
                  index % 4 !== 3 ? "md:border-r md:border-dotted md:border-[#bdbdbd]" : ""
                }`}
              >
                <span className="text-[18px] font-light tracking-[-0.3px] text-[#3C5B9B]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesSection />

      {/* DASHBOARD PREVIEW */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Dashboard Preview
            </p>

            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              A dashboard for products, trials, users and insights.
            </h2>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-black/10 bg-white p-4 shadow-[0_30px_90px_rgba(0,0,0,0.08)] md:p-6">
            <img
              src="/software/virtual-trial-room-preview-large.webp"
              alt="Virtual Trial Room Dashboard"
              className="h-full w-full rounded-[24px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY BRAINADZ */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Why BrainADZ
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Virtual trial room experiences designed for brands, users and conversions.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {[
              {
                title: "User-Centered Experience",
                text: "We design trial room journeys that are simple, visual and easy for customers to use.",
              },
              {
                title: "Commerce-Ready Planning",
                text: "The platform can connect with product catalogue, cart, checkout and analytics workflows.",
              },
              {
                title: "Scalable Architecture",
                text: "Build for more product categories, users, devices and future feature expansion.",
              },
              {
                title: "Long-Term Support",
                text: "BrainADZ supports improvements, performance, integrations and new try-on features.",
              },
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

      {/* FAQ */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              FAQ
            </p>

            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about Virtual Trial Room.
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
      <section className="bg-white py-12">
        <div className="mx-auto max-w-450 px-8 lg:px-10">
          <div className="flex min-h-65 overflow-hidden bg-[#3C5B9B] md:min-h-75">
            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-150">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Ready to launch a Virtual Trial Room?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Let BrainADZ build a smart virtual try-on platform that improves
                  customer experience, engagement and product confidence.
                </p>
              </div>

              <a
                href="/contact"
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition hover:bg-white hover:text-[#3C5B9B]"
              >
                <span>Get Trial Room Consultation</span>
                <span className="text-[26px] transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <DemoForm
  isOpen={isPopupOpen}
  onClose={() => setIsPopupOpen(false)}
  demoHref="/demos"
/>
    </main>
  );
}
