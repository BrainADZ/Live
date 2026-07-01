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
  Gauge,
  Wrench,
  Users,
  Store,
  MonitorSmartphone,
  PackageCheck,
} from "lucide-react";


const benefits = [
  { title: "High Visibility", text: "Large screen format helps deliver brand messages, offers and information clearly." },
  { title: "Professional Presentation", text: "Ideal for meetings, product demos, showrooms and customer-facing spaces." },
  { title: "Digital Flexibility", text: "Update content easily for campaigns, announcements, menus and promotions." },
  { title: "Indoor Branding", text: "Create modern digital signage experiences across business locations." }
];

const specifications = [
  ["Screen Type", "Commercial-grade large format display options"],
  ["Usage", "Indoor digital signage, meetings, presentations and brand communication"],
  ["Content", "Images, videos, slides, menus, offers and announcement displays"],
  ["Installation", "Wall mount, stand mount or location-specific setup"],
  ["Connectivity", "HDMI, USB, network and media player support depending on model"],
  ["Customization", "Screen size, mounting style and content workflow can be planned"]
];

const useCases = [
  "Retail Showrooms",
  "Corporate Offices",
  "Shopping Malls",
  "Hospitals",
  "Education Spaces",
  "Hotels & Restaurants"
];

const features = [
  { title: "Large Display Area", text: "Showcase content with better clarity and impact across customer-facing environments." },
  { title: "Commercial Usage", text: "Designed for business spaces where screens are used for longer operating hours." },
  { title: "Flexible Mounting", text: "Choose wall-mounted, floor-supported or customized placement options." },
  { title: "Content Control", text: "Use the display for promotions, presentations, announcements and internal communication." }
];

const processSteps = [
  { title: "Requirement Study", text: "We understand location, screen size needs and display purpose." },
  { title: "Product Selection", text: "We suggest suitable screen options based on usage and environment." },
  { title: "Content Planning", text: "We help plan what type of content will work best on the display." },
  { title: "Installation Support", text: "We guide mounting, placement and connectivity setup." },
  { title: "Testing", text: "We test display visibility, playback and connectivity." },
  { title: "Handover", text: "We provide usage guidance and support for future updates." }
];

const faqs = [
  { q: "What is an LFD Display used for?", a: "It is used for digital signage, presentations, announcements, brand communication and product promotion." },
  { q: "Can it be wall mounted?", a: "Yes, LFD displays can be wall mounted or installed with suitable stand options." },
  { q: "Can we play videos and images?", a: "Yes, videos, images, slides and promotional content can be displayed." },
  { q: "Is it suitable for retail stores?", a: "Yes, it is suitable for showrooms, malls, stores and customer-facing business spaces." }
];

export default function LFDDisplayPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/products/lfd.png"
          alt="LFD Display"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-8 lg:min-h-135 lg:px-12">
          <div className="flex items-center gap-3 text-[16px] font-light md:text-[18px]">
            <Link href="/" className="text-[#6da0ff] hover:underline">Home</Link>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Products</span>
            <span className="text-white/80">/</span>
            <span className="text-white/90">LFD Display</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              LFD Display
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Large Format Display solutions for showrooms, offices, malls, education spaces and business environments that need clear, professional and high-impact digital communication.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/contact" className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#3C5B9B] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]">
                Enquire Now <span className="text-[20px] leading-none">↗</span>
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
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">Overview</p>
            <h2 className="max-w-180 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Smart product solutions built for better business visibility and customer experience.
            </h2>
            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              Large Format Display solutions for showrooms, offices, malls, education spaces and business environments that need clear, professional and high-impact digital communication. BrainADZ helps businesses plan, customize and deploy reliable display and automation products that look professional and work smoothly in real environments.
            </p>
          </div>

          <div className="relative overflow-hidden bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <img src="/products/lfd-display.jpg" alt="LFD Display" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">Why Choose This Product</p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Designed for daily use, strong visibility and dependable performance.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {benefits.map((item, index) => (
              <div key={item.title} className="border-t border-black/10 pt-7">
                <span className="text-[13px] font-semibold text-[#3C5B9B]">0{index + 1}</span>
                <h3 className="mt-3 text-[24px] font-light tracking-[-0.4px]">{item.title}</h3>
                <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">{item.text}</p>
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
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">Product Specifications</p>
              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Clear specifications for planning and purchase.
              </h2>
            </div>
            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              Specifications can be customized according to branding needs, installation location and business requirements.
            </p>
          </div>

          <div className="border-t border-black/10">
            {specifications.map(([label, value]) => (
              <div key={label} className="grid gap-3 border-b border-black/10 py-5 md:grid-cols-[0.35fr_0.65fr]">
                <p className="text-[15px] font-semibold text-[#3C5B9B]">{label}</p>
                <p className="text-[16px] font-light leading-[1.65] text-black/70">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">Ideal Applications</p>
            <h2 className="mx-auto max-w-210 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Suitable for multiple business environments.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div key={item} className="group rounded-[24px] border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#3C5B9B]/30 hover:shadow-[0_22px_65px_rgba(60,91,155,0.1)]">
                <CheckCircle2 size={26} className="mb-5 text-[#3C5B9B]" />
                <h3 className="text-[21px] font-light tracking-[-0.4px]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">Key Features</p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Built to support real business usage.
            </h2>
          </div>

          <div className="space-y-0 border-t border-black/10">
            {features.map((item, index) => (
              <div key={item.title} className="grid gap-5 border-b border-black/10 py-7 md:grid-cols-[70px_1fr]">
                <span className="text-[14px] font-semibold text-[#3C5B9B]">0{index + 1}</span>
                <div>
                  <h3 className="text-[25px] font-light tracking-[-0.5px]">{item.title}</h3>
                  <p className="mt-3 text-[15px] font-light leading-[1.75] text-black/65">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">Process</p>
            <h2 className="mx-auto max-w-210 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              From requirement to final setup.
            </h2>
          </div>

          <div className="grid gap-x-10 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((item, index) => (
              <div key={item.title} className="border-t border-black/10 pt-7">
                <span className="text-[13px] font-semibold text-[#3C5B9B]">Step {String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-[24px] font-light tracking-[-0.4px]">{item.title}</h3>
                <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">FAQ</p>
            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about LFD Display.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div key={faq.q} className={`overflow-hidden rounded-[26px] border bg-white transition ${openFaq === index ? "border-[#3C5B9B]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]" : "border-black/10"}`}>
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6">
                  <span className="text-[16px] font-light leading-[1.45] text-black md:text-[17px]">{faq.q}</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f6f8fc] text-[#3C5B9B]">
                    {openFaq === index ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="mx-5 border-t border-[#3C5B9B]/15 pb-6 pt-4 md:mx-6">
                    <p className="text-[15px] font-light leading-[1.75] text-black/65">{faq.a}</p>
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
                  Need LFD Display for your business?
                </h3>
                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Connect with BrainADZ and get a customized solution for your space, brand and business goals.
                </p>
              </div>

              <a href="/contact" className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition hover:bg-white hover:text-[#3C5B9B]">
                <span>Get Quote</span>
                <span className="text-[26px] transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}