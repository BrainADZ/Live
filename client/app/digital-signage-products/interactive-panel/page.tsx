/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import PopupForm from "@/components/PopupForm";
import {
  CheckCircle2,
  Minus,
  Plus,
  Download,
} from "lucide-react";

const benefits = [
  {
    title: "Interactive Lesson Delivery",
    text: "Support teaching, explanation and presentation through a screen-based interactive classroom experience.",
  },
  {
    title: "Visual Content Support",
    text: "Present videos, PDFs, presentations, diagrams and other digital learning materials in one place.",
  },
  {
    title: "Collaborative Learning Setup",
    text: "Create a more participative teaching environment with interaction, annotation and content sharing based on the selected setup.",
  },
  {
    title: "Requirement-Based Deployment",
    text: "Plan the display, placement, software setup and classroom workflow around the actual learning or training requirement.",
  },
];

const specifications = [
  [
    "Display Type",
    "Interactive teaching and presentation display",
  ],
  [
    "Primary Use",
    "Classrooms, coaching spaces, training rooms and learning environments",
  ],
  [
    "Interaction",
    "Writing, annotation and touch-based interaction based on selected configuration",
  ],
  [
    "Content Support",
    "Presentations, videos, PDFs and digital learning materials",
  ],
  [
    "Content Sharing",
    "Sharing workflow can be planned according to the selected setup",
  ],
  [
    "Deployment Planning",
    "Placement, software setup and usage workflow based on project requirement",
  ],
];

const useCases = [
  "Schools",
  "Colleges",
  "Coaching Centers",
  "Training Rooms",
  "Corporate Learning",
  "Smart Classrooms",
];

const features = [
  {
    title: "Digital Whiteboard & Annotation",
    text: "Support writing, drawing, explanation and on-screen annotation through the configured interactive tools.",
  },
  {
    title: "Learning Content Presentation",
    text: "Present videos, PDFs, slides, diagrams and other digital materials during lessons and training sessions.",
  },
  {
    title: "Interactive Teaching Workflow",
    text: "Bring explanation, visual content and classroom interaction into one connected presentation experience.",
  },
  {
    title: "Content Sharing Setup",
    text: "Plan a content-sharing workflow based on the selected display configuration and room requirement.",
  },
];

const processSteps = [
  {
    title: "Requirement Review",
    text: "We understand the room, audience, teaching style and intended display usage.",
  },
  {
    title: "Configuration Planning",
    text: "We plan the display setup around the required interaction and presentation workflow.",
  },
  {
    title: "Placement Planning",
    text: "The display position and room setup are planned according to visibility and usage requirements.",
  },
  {
    title: "Software & Content Setup",
    text: "Required teaching, annotation and presentation workflows are prepared based on the selected configuration.",
  },
  {
    title: "User Orientation",
    text: "Users can be guided on the agreed teaching and presentation workflow as part of the project scope.",
  },
  {
    title: "Deployment Support",
    text: "The final setup is coordinated according to the agreed installation and deployment plan.",
  },
];

const faqs = [
  {
    q: "Can teachers write and annotate on the display?",
    a: "Writing and annotation can be supported through the selected interactive display and software configuration. The final setup depends on the project requirement.",
  },
  {
    q: "Can videos, PDFs and presentations be shown?",
    a: "Yes. The display can be used to present videos, PDFs, slides and other digital learning materials as part of the configured teaching workflow.",
  },
  {
    q: "Where can an Interactive Teaching Display be used?",
    a: "It can be used in schools, colleges, coaching centers, training rooms, corporate learning spaces and other environments that need interactive teaching or presentation.",
  },
  {
    q: "Can content sharing be included in the setup?",
    a: "Yes. A content-sharing workflow can be planned according to the selected configuration, available devices and room requirements.",
  },
];

export default function InteractiveTeachingDisplayPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/teaching.webp"
          alt="Interactive Teaching Display by BrainADZ Live"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-4 lg:min-h-135 lg:px-12">
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
              Interactive Teaching Display
            </span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Interactive Teaching Display for Modern Learning Spaces
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              A screen-based interactive teaching and presentation solution
              for classrooms, coaching spaces, training rooms and learning
              environments that need digital content, annotation and
              collaborative sessions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-4 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Request a Quote
                <span className="text-[20px] leading-none">↗</span>
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
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Overview
            </p>

            <h2 className="max-w-180 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Bring teaching, presentation and digital interaction into one
              display experience.
            </h2>

            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              The BrainADZ Live Interactive Teaching Display is designed for
              learning and training environments that need a more visual and
              interactive way to present content. The setup can support digital
              learning materials, annotation, presentation and classroom
              interaction according to the selected configuration.
            </p>
          </div>

          <div className="relative overflow-hidden bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <img
              src="/products/interactive-teaching-display.jpg"
              alt="Interactive Teaching Display for classrooms and training spaces"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why Choose This Product
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Designed for visual teaching, interaction and everyday
              presentation needs.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {benefits.map((item, index) => (
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
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Configuration Details
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Plan the right teaching and presentation setup.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              The final configuration can be planned according to room usage,
              teaching workflow, interaction requirements and the content that
              needs to be presented.
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

      {/* USE CASES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Ideal Applications
            </p>

            <h2 className="mx-auto max-w-210 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Designed for learning, teaching and professional training
              environments.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item}
                className="group rounded-3xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#193175]/30 hover:shadow-[0_22px_65px_rgba(60,91,155,0.1)]"
              >
                <CheckCircle2
                  size={26}
                  className="mb-5 text-[#193175]"
                />

                <h3 className="text-[21px] font-light tracking-[-0.4px]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Key Features
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Teaching and presentation features for day-to-day use.
            </h2>
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

      {/* FAQ */}
      <section className="bg-white px-5 py-18 md:px-4 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              FAQ
            </p>

            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about Interactive Teaching Display.
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
                alt="Interactive Teaching Display for learning and training spaces"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-150">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Planning an Interactive Teaching Display setup?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Tell us about your learning space, teaching workflow and
                  interaction requirements so the right display setup can be
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
