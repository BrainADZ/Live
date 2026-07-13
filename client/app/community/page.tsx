/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import PopupForm from "@/components/PopupForm";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Code2,
  Cpu,
  Lightbulb,
  Megaphone,
  MessageCircleQuestion,
  MessageSquareText,
  Minus,
  MonitorSmartphone,
  Network,
  PanelsTopLeft,
  Plus,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

const communityBenefits = [
  {
    title: "Practical Technology Insights",
    text: "Learn about software, CRM, ERP, digital signage, automation and business technology in a practical way.",
    icon: Lightbulb,
  },
  {
    title: "Business Growth Discussions",
    text: "Explore useful ideas around digital presence, operations, customer journeys and online growth.",
    icon: Rocket,
  },
  {
    title: "Community-Led Learning",
    text: "Get exposure to questions, examples, discussions and useful resources shared for business and technology learners.",
    icon: BookOpen,
  },
  {
    title: "Connect With Like-Minded People",
    text: "Join business owners, creators, developers, marketers and professionals interested in better digital solutions.",
    icon: Users,
  },
];

const communityTopics = [
  {
    title: "Software Development",
    text: "Custom software, web applications, mobile apps and business platforms.",
    icon: Code2,
  },
  {
    title: "CRM & ERP Systems",
    text: "Lead management, customer workflows, inventory, finance and operational systems.",
    icon: Workflow,
  },
  {
    title: "Digital Signage",
    text: "Kiosks, display solutions, signage software and screen-based business communication.",
    icon: MonitorSmartphone,
  },
  {
    title: "Business Automation",
    text: "Ideas to reduce manual work and improve day-to-day business processes.",
    icon: Cpu,
  },
  {
    title: "Marketing & Branding",
    text: "Digital growth, creative campaigns, brand visibility and online communication.",
    icon: Megaphone,
  },
  {
    title: "Technology Consulting",
    text: "Planning, architecture, platform decisions and solution direction for growing businesses.",
    icon: Network,
  },
];

const whoCanJoin = [
  "Business owners and founders",
  "Startups and growing teams",
  "Developers and technology learners",
  "Marketing and creative professionals",
  "Agencies and consultants",
  "Students exploring digital careers",
  "Retail, hospitality and service businesses",
  "Anyone interested in digital growth",
];

const discussionPreviews = [
  {
    category: "CRM & ERP",
    title: "How can CRM help a small business manage leads better?",
    text: "A practical discussion around lead tracking, follow-ups, customer records and sales visibility.",
  },
  {
    category: "Digital Signage",
    title: "What type of digital signage setup works best for retail stores?",
    text: "Ideas around screen placement, content planning, signage software and promotional display use.",
  },
  {
    category: "Software Planning",
    title: "Website, web app or custom software — what should a business choose?",
    text: "A simple comparison based on business goals, workflow complexity and future growth needs.",
  },
  {
    category: "Automation",
    title: "Which business processes should be automated first?",
    text: "Discussion around enquiry handling, reporting, follow-ups, billing and internal operations.",
  },
];

const communityFlow = [
  {
    title: "Join the Community",
    text: "Connect through the community page and share your area of interest.",
  },
  {
    title: "Explore Topics",
    text: "Follow discussions around software, signage, CRM, ERP, marketing and automation.",
  },
  {
    title: "Ask Questions",
    text: "Share business or technology questions that can become useful discussions for everyone.",
  },
  {
    title: "Learn and Collaborate",
    text: "Use community insights, resources and examples to make better digital decisions.",
  },
];

const faqs = [
  {
    q: "What is the BrainADZ Live Community?",
    a: "It is a community space for people interested in technology, software, digital signage, business automation, CRM, ERP, marketing and digital growth discussions.",
  },
  {
    q: "Is this a full forum page?",
    a: "This page includes a discussion preview section. A full interactive forum with login, posts, replies and moderation can be added later as a separate feature.",
  },
  {
    q: "Who can join the community?",
    a: "Business owners, startups, students, developers, marketers, agencies, designers and anyone interested in practical business technology can join.",
  },
  {
    q: "What topics will be discussed?",
    a: "Topics can include software development, CRM, ERP, digital signage, kiosk solutions, automation, marketing, branding, websites, apps and industry technology use cases.",
  },
  {
    q: "Can I ask business or project-related questions?",
    a: "Yes. You can share questions related to business workflows, digital solutions, websites, software, CRM, ERP, signage or marketing direction.",
  },
  {
    q: "Will the community replace consultation?",
    a: "No. The community is for learning, updates and discussions. Detailed business requirements should still be discussed through consultation or enquiry.",
  },
];

export default function CommunityPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/community/community-hero.jpg"
          alt="BrainADZ Live community"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/about.avif";
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.78)_34%,rgba(0,0,0,0.42)_65%,rgba(0,0,0,0.08)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-8 lg:min-h-135 lg:px-12">
          <div className="flex items-center gap-3 text-[16px] font-light md:text-[18px]">
            <Link
              href="/"
              className="text-[#6da0ff] hover:underline"
            >
              Home
            </Link>

            <span className="text-white/80">/</span>

            <span className="text-white/90">Community</span>
          </div>

          <div className="mt-12 max-w-230 md:mt-14">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13px] font-light text-white/90 backdrop-blur-md">
              <Sparkles size={16} />
              BrainADZ Live Community
            </p>

            <h1 className="text-[38px] font-semibold leading-[1.12] tracking-[-1.2px] text-white md:text-[50px] lg:text-[62px]">
              Join a community built around technology, business and digital
              growth
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-205 text-[15px] font-light leading-[1.55] tracking-[-0.3px] text-white/90 md:text-[18px] lg:text-[20px]">
              Connect with business owners, creators, developers, marketers
              and digital thinkers exploring software, CRM, ERP, signage,
              automation and modern business solutions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Join Community
                <span className="text-[20px] leading-none">↗</span>
              </button>

              <a
                href="#discussions"
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full border border-white/35 px-8 text-[13px] font-bold text-white transition duration-300 hover:bg-white hover:text-[#193175]"
              >
                View Discussions
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why Community
            </p>

            <h2 className="max-w-180 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              A space to learn, discuss and grow with practical digital ideas.
            </h2>
          </div>

          <div>
            <p className="text-[17px] font-light leading-[1.8] text-black/68 md:text-[19px]">
              The BrainADZ Live Community is designed for people who want to
              understand technology in a practical business context. Whether it
              is a website, application, CRM, ERP, signage system, kiosk,
              digital campaign or automation idea, this community gives users a
              space to explore useful discussions and stay connected with
              digital growth topics.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[18px] bg-[#f6f8fc] p-5">
                <p className="text-[34px] font-light text-[#193175]">
                  6+
                </p>

                <p className="mt-2 text-[15px] font-light text-black/65">
                  Main discussion categories
                </p>
              </div>

              <div className="rounded-[18px] bg-[#f6f8fc] p-5">
                <p className="text-[34px] font-light text-[#193175]">
                  Open
                </p>

                <p className="mt-2 text-[15px] font-light text-black/65">
                  For business and technology learners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Community Benefits
            </p>

            <h2 className="mx-auto max-w-220 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              What you get by joining the BrainADZ Live Community
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {communityBenefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_18px_55px_rgba(0,0,0,0.04)]"
                >
                  <div className="mb-6 flex h-15 w-15 items-center justify-center rounded-2xl bg-[#193175]/10">
                    <Icon size={28} className="text-[#193175]" />
                  </div>

                  <h3 className="text-[22px] font-light tracking-[-0.4px]">
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

      {/* TOPICS */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Community Topics
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Discussions around the services and solutions BrainADZ Live
                works with.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              These topics help visitors understand digital systems, business
              workflows and technology choices before starting a project.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {communityTopics.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border-t border-black/10 pt-7"
                >
                  <Icon
                    size={30}
                    className="mb-5 text-[#193175] transition group-hover:scale-105"
                  />

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

      {/* WHO CAN JOIN */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Who Can Join
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Built for people who want to understand and use digital better.
            </h2>

            <p className="mt-5 max-w-170 text-[16px] font-light leading-[1.75] text-black/65">
              You do not need to be a technical expert. The community is useful
              for anyone who wants to learn, discuss or explore business
              technology in a practical way.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {whoCanJoin.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-black/10 pb-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#193175]/10 text-[13px] font-semibold text-[#193175]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-[18px] font-light tracking-[-0.3px] text-black/80">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCUSSION PREVIEW */}
      <section
        id="discussions"
        className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-450">
          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Forum Preview
              </p>

              <h2 className="max-w-210 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Community discussions that can later become a full forum.
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setIsPopupOpen(true)}
              className="inline-flex h-13 w-fit min-w-52 items-center justify-between gap-4 rounded-sm border border-[#193175] px-6 text-[15px] font-medium text-[#193175] transition hover:bg-[#193175] hover:text-white"
            >
              Ask a Question
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {discussionPreviews.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_65px_rgba(0,0,0,0.05)] transition hover:border-[#193175]/35 hover:bg-[#f8faff]"
              >
                <div className="mb-5 flex items-center justify-between gap-5">
                  <span className="rounded-full bg-[#193175]/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#193175]">
                    {item.category}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f6f8fc] text-[#193175] transition group-hover:translate-x-1">
                    <ArrowRight size={18} />
                  </span>
                </div>

                <h3 className="text-[24px] font-light leading-tight tracking-[-0.5px] text-black">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] font-light leading-[1.7] text-black/65">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-[#193175]/15 bg-[#f6f8fc] p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#193175] text-white">
                  <MessageCircleQuestion size={28} />
                </div>

                <div>
                  <h3 className="text-[24px] font-light tracking-[-0.5px]">
                    Full forum can be added later
                  </h3>

                  <p className="mt-1 text-[14px] font-light text-black/60">
                    Login, posts, replies, tags and moderation.
                  </p>
                </div>
              </div>

              <p className="text-[16px] font-light leading-[1.7] text-black/65">
                For the first version, this page works as a community landing
                page with discussion preview. Later, it can be expanded into a
                full forum with user accounts, questions, replies, categories,
                upvotes and admin moderation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY FLOW */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              How It Works
            </p>

            <h2 className="mx-auto max-w-220 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Simple community flow for learning and discussion
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {communityFlow.map((item, index) => (
              <div
                key={item.title}
                className="relative rounded-3xl border border-black/10 bg-white p-7"
              >
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#193175] text-[14px] font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-[23px] font-light tracking-[-0.4px]">
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

      {/* CTA IMAGE SECTION */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Stay Connected
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Get closer to technology ideas before starting your next project.
            </h2>

            <p className="mt-5 max-w-180 text-[16px] font-light leading-[1.75] text-black/65">
              The community gives people a simple way to stay connected with
              BrainADZ Live updates, useful business technology topics and
              practical digital solution discussions.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <CheckCircle2
                  size={24}
                  className="mt-1 shrink-0 text-[#193175]"
                />

                <p className="text-[16px] font-light leading-[1.6] text-black/70">
                  Useful for early project planning and solution awareness.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2
                  size={24}
                  className="mt-1 shrink-0 text-[#193175]"
                />

                <p className="text-[16px] font-light leading-[1.6] text-black/70">
                  Helps users understand what digital systems can do.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsPopupOpen(true)}
              className="mt-9 inline-flex h-14 min-w-52 items-center justify-center gap-4 rounded-full bg-[#193175] px-8 text-[13px] font-bold text-white transition hover:bg-[#2f4a82]"
            >
              Join Community
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="relative overflow-hidden rounded-[28px] bg-[#f6f8fc] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <img
              src="/community/community-discussion.jpg"
              alt="Community discussion and digital growth"
              className="h-95 w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/about.avif";
              }}
            />
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
              Common questions about the BrainADZ Live Community
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-[26px] border bg-white transition-all duration-300 ${
                  openFaq === index
                    ? "border-[#193175]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]"
                    : "border-black/10"
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
                src="/community/community-cta.jpg"
                alt="Join BrainADZ Live community"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/about.avif";
                }}
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-155">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Ready to join the BrainADZ Live Community?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Share your interest and connect with practical technology,
                  business and digital growth discussions.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#193175] md:min-w-57.5"
              >
                <span>Join Now</span>

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