"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle2, ImageIcon, Minus, Plus } from "lucide-react";
import DemoForm from "@/components/DemoForm";

type SoftwarePageContent = {
  name: string;
  eyebrow: string;
  headline: string;
  summary: string;
  heroImage?: string;
  demoUrl?: string;
  overview: string;
  stats: { label: string; value?: string }[];
  images: {
    src?: string;
    label: string;
    alt: string;
    shape: "wide" | "phone";
  }[];
  features: { title: string; text: string }[];
  modules: { title: string; text: string }[];
  workflow: { title: string; text: string }[];
  people: { title: string; text: string }[];
  whyChoose: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  note?: string;
};

// Add images to /public, then fill heroImage and images[].src below.
// Add verified numbers as value: "120+" in stats when available.

const projectTracker: SoftwarePageContent = {
  name: "Project Tracker",
  eyebrow: "Project Management",
  headline: "Plan, Track and Deliver Every Project",
  summary:
    "Coordinate project stages, tasks, dates, files and team conversations across Live, Marketing and Exhibits.",
  heroImage: "",
  demoUrl: "", // Add the Project Tracker demo link here when ready.
  overview:
    "BrainADZ Project Tracker gives each project a shared home for its brief, owner, budget, team, milestones, tasks and files. Access follows the vertical and the work assigned to each person.",
  stats: [
    { label: "Active projects" },
    { label: "Tasks completed" },
    { label: "Milestones delivered" },
  ],
  images: [
    {
      src: "",
      label: "Project dashboard",
      alt: "Project Tracker dashboard screenshot",
      shape: "wide",
    },
    {
      src: "",
      label: "Project list or board",
      alt: "Project Tracker board screenshot",
      shape: "wide",
    },
    {
      src: "",
      label: "Task or team group workflow",
      alt: "Project Tracker task workflow screenshot",
      shape: "wide",
    },
  ],
  features: [
    {
      title: "Plan visually",
      text: "Use list, board and timeline views to see project stages, health and key dates.",
    },
    {
      title: "Assign and review",
      text: "Give tasks owners, due dates, priorities, checklists and review states.",
    },
    {
      title: "Work together",
      text: "Keep project files, group messages, mentions and progress updates with the project.",
    },
  ],
  modules: [
    {
      title: "Delivery Dashboard",
      text: "Review active projects, overdue work, upcoming dates, attention items and recent activity.",
    },
    {
      title: "Project Views",
      text: "Switch between list, drag-and-drop board and timeline; filter by status, health, owner or client.",
    },
    {
      title: "Project Workspace",
      text: "See stage, owner, budget, dates, location, progress, milestones, team, brief, tasks, files and discussion together.",
    },
    {
      title: "Task Management",
      text: "Track assignee, priority, deadline, status, checklist, attachments, comments and change history.",
    },
    {
      title: "Team Groups",
      text: "Post messages, progress updates and status; mention teammates and share files inside each project group.",
    },
    {
      title: "Files and Assets",
      text: "Upload files, keep Drive, Dropbox or Figma links, organize categories and mark final deliverables.",
    },
    {
      title: "My Work and Alerts",
      text: "Group personal tasks by due date and receive notices for assignments, mentions, comments and blocked work.",
    },
    {
      title: "Calendar and Templates",
      text: "View milestones and task dates on a calendar; start from vertical-specific plans or save a completed project as a template.",
    },
    {
      title: "Daily Reporting",
      text: "Track assigned creative work with start, pause, resume and revision time for Marketing workflows.",
    },
    {
      title: "Archive and Reuse",
      text: "Find past work by year and client, then copy a finished project plan for a repeat engagement.",
    },
    {
      title: "Team and Access",
      text: "Set Viewer, Member or Manager access per vertical, with project visibility tied to assignments.",
    },
  ],
  workflow: [
    {
      title: "Create the project",
      text: "Choose a vertical, client, owner, brief, dates and the project team.",
    },
    {
      title: "Build the plan",
      text: "Use a template or define stages, milestones and tasks around the key event or launch date.",
    },
    {
      title: "Assign the team",
      text: "Give work to specific people and control visibility through vertical and project access.",
    },
    {
      title: "Collaborate daily",
      text: "Update tasks, share files and discuss blockers in the project group.",
    },
    {
      title: "Watch delivery",
      text: "Review dashboards, board, timeline, calendar, notifications and due work.",
    },
    {
      title: "Close and reuse",
      text: "Keep the project history available and run a similar project again from the past plan.",
    },
  ],
  people: [
    {
      title: "Project Heads",
      text: "Create plans, assign work and monitor milestones, budget and project health.",
    },
    {
      title: "Team Members",
      text: "See their assigned projects and tasks, share files and post progress updates.",
    },
    {
      title: "Business Heads",
      text: "Review work across the verticals they oversee and resolve delivery blockers.",
    },
  ],
  whyChoose: [
    {
      title: "Plan by Project",
      text: "Keep briefs, stages, milestones, tasks and owners connected to the same delivery plan.",
    },
    {
      title: "Clear Team Ownership",
      text: "Assign work to the right people and let members focus on the projects and tasks they can access.",
    },
    {
      title: "Multiple Work Views",
      text: "Use boards, timelines, calendars and personal task views to follow progress and deadlines.",
    },
    {
      title: "Repeatable Delivery",
      text: "Start from templates or reuse a completed project plan when similar work comes back.",
    },
  ],
  faqs: [
    {
      q: "Can we manage projects across different verticals?",
      a: "Yes. The tracker organizes projects by vertical and applies access based on team and project assignments.",
    },
    {
      q: "How can team members track their work?",
      a: "Members can use My Work, task boards, due dates, notifications and project group updates to follow assignments.",
    },
    {
      q: "Can files and discussions stay with a project?",
      a: "Yes. The project group supports updates, comments and shared files around the work being delivered.",
    },
    {
      q: "Can a completed project be reused?",
      a: "Yes. Teams can save templates or copy a past project plan for a similar engagement.",
    },
  ],
};

function ImageSlot({
  src,
  label,
  alt,
  shape,
}: SoftwarePageContent["images"][number]) {
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-[24px] border border-[#dfe6f1] bg-[#f2f5fa] shadow-[0_24px_80px_rgba(0,0,0,0.07)] ${shape === "phone" ? "mx-auto max-w-95 aspect-[390/844] max-h-[65svh]" : "h-[clamp(260px,55vw,600px)] max-h-[65svh]"}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={
            shape === "phone"
              ? "(max-width: 768px) 90vw, 390px"
              : "(max-width: 768px) 100vw, 800px"
          }
          className="object-contain"
        />
      ) : (
        <div className="flex flex-col items-center gap-4 px-6 text-center text-[#66748e]">
          <ImageIcon size={42} strokeWidth={1.2} aria-hidden="true" />
          <span className="text-[16px] font-medium">
            {label} image placeholder
          </span>
          <span className="text-[13px]">Add your software screenshot here</span>
        </div>
      )}
    </div>
  );
}

export default function Page() {
  const detail = projectTracker;
  const [demoOpen, setDemoOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const openDemo = () => {
    if (detail.demoUrl) {
      window.open(detail.demoUrl, "_blank", "noopener,noreferrer");
      return;
    }
    setDemoOpen(true);
  };

  return (
    <main className="bg-white text-[#161616] [--section-space:1.25rem] md:[--section-space:1.75rem] lg:[--section-space:2rem]">
      <section className="relative min-h-105 overflow-hidden bg-[#07132e] text-white md:min-h-120 lg:min-h-135">
        {detail.heroImage ? (
          <Image
            src={detail.heroImage}
            alt={`${detail.name} banner`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-end bg-[linear-gradient(110deg,#07132e,#193175)] pr-[8%]">
            <div className="hidden flex-col items-center gap-3 rounded-[20px] border border-white/25 bg-white/10 px-12 py-10 text-white/70 lg:flex">
              <ImageIcon size={52} strokeWidth={1} />
              <span className="text-[14px]">
                {detail.name} hero banner placeholder
              </span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.68)_38%,rgba(0,0,0,0.05)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-4 lg:min-h-135 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-3 text-[16px] font-light"
          >
            <Link href="/" className="text-[#9cbdff] hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/software-platforms"
              className="text-[#9cbdff] hover:underline"
            >
              Software Platforms
            </Link>
            <span>/</span>
            <span>{detail.name}</span>
          </nav>
          <div className="mt-12 max-w-205 md:mt-14">
            <p className="mb-4 text-[13px] uppercase tracking-[2.5px] text-[#b9ceff]">
              {detail.eyebrow}
            </p>
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] md:text-[48px] lg:text-[56px]">
              {detail.headline}
            </h1>
          </div>
          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[15px] font-light leading-[1.5] text-white/90 md:text-[17px]">
              {detail.summary}
            </p>
            <button
              type="button"
              onClick={openDemo}
              className="mt-8 inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-4 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
            >
              View Demo <ArrowRight size={20} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fc] px-5 py-6 md:px-4 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-3 md:grid-cols-3">
          {detail.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[14px] border border-[#e6eaf1] bg-white px-5 py-4 md:px-6"
            >
              <span className="text-[32px] font-medium leading-none text-[#193175]">
                {stat.value || "?"}
              </span>
              <p className="mt-2 text-[14px] leading-snug text-[#4e5666] md:text-[15px]">
                {stat.label}
              </p>
              {!stat.value && (
                <p className="mt-1 text-[12px] text-[#8d8d8d]">
                  Add your verified figure
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section-spacing bg-white px-5 md:px-4 lg:px-12">
        <div className="mx-auto grid max-w-450 items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Software Overview
            </p>
            <h2 className="text-[34px] font-normal leading-[1.15] md:text-[46px]">
              {detail.name} at a Glance
            </h2>
            <p className="mt-6 text-[16px] font-light leading-[1.75] text-black/70">
              {detail.overview}
            </p>
          </div>
          <ImageSlot {...detail.images[0]} />
        </div>
      </section>

      <section className="section-spacing bg-[#f6f8fc] px-5 md:px-4 lg:px-12">
        <div className="mx-auto max-w-450">
          <p className="text-[13px] uppercase tracking-[2.5px] text-[#193175]">
            Key capabilities
          </p>
          <h2 className="mt-4 text-[34px] font-normal leading-[1.15] md:text-[46px]">
            What the Product Does
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {detail.features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[18px] border border-[#dfe6f1] bg-white p-7"
              >
                <CheckCircle2
                  size={24}
                  strokeWidth={1.7}
                  className="text-[#193175]"
                />
                <h3 className="mt-6 text-[23px]">{feature.title}</h3>
                <p className="mt-3 text-[15px] font-light leading-[1.7] text-[#616161]">
                  {feature.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white px-5 md:px-4 lg:px-12">
        <div className="mx-auto max-w-450">
          <p className="text-[13px] uppercase tracking-[2.5px] text-[#193175]">
            Platform modules
          </p>
          <h2 className="mt-4 text-[34px] font-normal leading-[1.15] md:text-[46px]">
            Explore the Functions in {detail.name}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {detail.modules.map((module, index) => (
              <article
                key={module.title}
                className="rounded-[18px] border border-[#dfe6f1] bg-white p-7 shadow-[0_18px_60px_rgba(22,22,22,0.04)]"
              >
                <span className="text-[14px] text-[#193175]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[22px] font-normal">{module.title}</h3>
                <p className="mt-3 text-[15px] font-light leading-[1.7] text-[#616161]">
                  {module.text}
                </p>
              </article>
            ))}
          </div>
          {detail.note && (
            <p className="mt-8 rounded-[12px] border border-[#dfe6f1] bg-[#f6f8fc] p-5 text-[15px] leading-[1.65] text-[#525252]">
              {detail.note}
            </p>
          )}
        </div>
      </section>

      <section className="section-spacing bg-white px-5 md:px-4 lg:px-12">
        <div className="mx-auto max-w-350">
          <div className="mb-7">
            <p className="text-[13px] uppercase tracking-[2.5px] text-[#193175]">
              Inside the platform
            </p>
            <h2 className="mt-4 text-[34px] font-normal leading-[1.15] md:text-[46px]">
              A Closer Look at {detail.name}
            </h2>
          </div>
          <ImageSlot {...detail.images[1]} />
        </div>
      </section>

      <section className="section-spacing bg-[#f6f8fc] px-5 md:px-4 lg:px-12">
        <div className="mx-auto max-w-450">
          <p className="text-[13px] uppercase tracking-[2.5px] text-[#193175]">
            People & use cases
          </p>
          <h2 className="mt-4 text-[34px] font-normal leading-[1.15] md:text-[46px]">
            Built for the People Using It
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {detail.people.map((person) => (
              <article
                key={person.title}
                className="rounded-[18px] bg-white p-7"
              >
                <h3 className="text-[23px]">{person.title}</h3>
                <p className="mt-3 text-[15px] font-light leading-[1.7] text-[#616161]">
                  {person.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing px-5 md:px-4 lg:px-12">
        <div className="mx-auto max-w-450">
          <p className="text-[13px] uppercase tracking-[2.5px] text-[#193175]">
            Product workflow
          </p>
          <h2 className="mt-4 text-[34px] font-normal leading-[1.15] md:text-[46px]">
            How {detail.name} Works
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {detail.workflow.map((step, index) => (
              <article
                key={step.title}
                className="border-l-2 border-[#193175] bg-[#f6f8fc] p-7"
              >
                <span className="text-[14px] font-medium text-[#193175]">
                  Step {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[22px]">{step.title}</h3>
                <p className="mt-3 text-[15px] font-light leading-[1.7] text-[#616161]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {detail.images[2] && (
        <section className="section-spacing bg-[#f6f8fc] px-5 md:px-4 lg:px-12">
          <div className="mx-auto max-w-350">
            <p className="mb-4 text-[13px] uppercase tracking-[2.5px] text-[#193175]">
              Workflow preview
            </p>
            <h2 className="mb-7 text-[34px] font-normal leading-[1.15] md:text-[46px]">
              See the Workflow on Screen
            </h2>
            <ImageSlot {...detail.images[2]} />
          </div>
        </section>
      )}

      <section className="section-spacing bg-[#f6f8fc] px-5 md:px-4 lg:px-12">
        <div className="mx-auto grid max-w-450 gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why Choose {detail.name}
            </p>
            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Built Around the Work Your Team Does.
            </h2>
          </div>
          <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
            {detail.whyChoose.map((item, index) => (
              <article
                key={item.title}
                className="border-t border-black/10 pt-5"
              >
                <span className="text-[13px] font-semibold text-[#193175]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[23px] font-normal tracking-[-0.4px]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white px-5 md:px-4 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-8 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              FAQ
            </p>
            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common Questions about {detail.name}
            </h2>
          </div>
          <div className="grid items-start gap-4 lg:grid-cols-2 lg:gap-5">
            {detail.faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-[26px] border bg-white transition ${openFaq === index ? "border-[#193175]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]" : "border-black/10"}`}
              >
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
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

      <section className="section-spacing bg-white">
        <div className="mx-auto w-full max-w-450 px-4 lg:px-10">
          <div className="flex min-h-65 overflow-hidden bg-[#193175] md:min-h-75">
            <div className="relative hidden w-[32%] shrink-0 md:block">
              <Image
                src="/CTA/cta.webp"
                alt="BrainADZ Live digital solutions"
                fill
                sizes="(max-width: 768px) 0px, 32vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h2 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Ready to Explore {detail.name}?
                </h2>
                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  See the platform workflows and discuss how they fit your team.
                </p>
              </div>
              <button
                type="button"
                onClick={openDemo}
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#193175] md:min-w-57.5"
              >
                <span>Request a Demo</span>
                <ArrowRight
                  size={26}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <DemoForm isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
