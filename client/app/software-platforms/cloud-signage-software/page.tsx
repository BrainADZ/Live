/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CalendarClock,
  Cloud,
  Database,
  Download,
  Gauge,
  Layers3,
  Minus,
  MonitorSmartphone,
  Plus,
  Search,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";
import IndustriesSection from "@/components/home/Industries"
import DemoForm from "@/components/DemoForm";
const modules = [
  {
    title: "Cloud Media Library",
    text: "Upload, organize and manage videos, images, banners and campaigns from one cloud dashboard.",
    icon: UploadCloud,
  },
  {
    title: "Remote Scheduling",
    text: "Schedule content by screen, location, date, time and campaign without visiting the site.",
    icon: CalendarClock,
  },
  {
    title: "Device Monitoring",
    text: "Track screen status, playback activity, online devices and location-wise display health.",
    icon: MonitorSmartphone,
  },
  {
    title: "Analytics & Reports",
    text: "View playback reports, device uptime, campaign activity and location performance.",
    icon: BarChart3,
  },
];

const remoteFeatures = [
  {
    title: "Upload Media Remotely",
    text: "Upload images, videos, menu boards, offers and campaign creatives from a browser-based cloud dashboard.",
  },
  {
    title: "Schedule Content by Location",
    text: "Run different playlists in different branches, cities, counters or display zones with custom timing.",
  },
  {
    title: "Monitor Screen Status",
    text: "Check whether screens are online, content is playing and devices are responding properly.",
  },
  {
    title: "Create Playlists",
    text: "Group media into playlists for promotions, announcements, product showcases and seasonal campaigns.",
  },
  {
    title: "Manage User Roles",
    text: "Give controlled access to admins, branch teams, marketing teams and content managers.",
  },
  {
    title: "Multi-Location Control",
    text: "Control signage networks across stores, offices, restaurants, malls and enterprise locations.",
  },
  {
    title: "Alerts & Notifications",
    text: "Get updates for device issues, inactive screens or required content changes based on setup.",
  },
  {
    title: "Campaign Reports",
    text: "Review playback activity, content usage and display performance for better campaign planning.",
  },
];

const workflowSteps = [
  {
    title: "Cloud Signage Discovery",
    text: "We understand screen network, locations, content type, users and operational requirements.",
    icon: Search,
  },
  {
    title: "Platform Architecture",
    text: "We plan cloud storage, device mapping, playlist logic, roles and scalable infrastructure.",
    icon: Cloud,
  },
  {
    title: "Dashboard Design",
    text: "We design a simple dashboard for uploading media, scheduling content and monitoring screens.",
    icon: Layers3,
  },
  {
    title: "Software Development",
    text: "We build media, device, playlist, reporting, access control and cloud management modules.",
    icon: Database,
  },
  {
    title: "Testing & Deployment",
    text: "We test content delivery, device sync, playback, performance and cloud reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Support & Optimization",
    text: "We provide support for new features, monitoring, updates and cloud signage improvements.",
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
  "Media Players",
  "Android Screens",
  "Smart TVs",
  "Cloud Storage",
  "APIs",
  "Analytics",
  "CMS",
  "User Roles",
];

const faqs = [
  {
    q: "What is Cloud Signage Software?",
    a: "Cloud Signage Software helps businesses manage digital screens, media content, playlists, schedules and device monitoring from a cloud-based dashboard.",
  },
  {
    q: "Can I manage multiple screens remotely?",
    a: "Yes. You can manage multiple screens and locations remotely depending on your setup and device integration.",
  },
  {
    q: "Can I schedule different content for different locations?",
    a: "Yes. The software can support location-wise playlists, time-based scheduling and campaign-specific screen control.",
  },
  {
    q: "Does it support videos and images?",
    a: "Yes. The platform can support videos, images, promotional creatives, announcements, menu boards and other signage content.",
  },
  {
    q: "Can BrainADZ customize the software?",
    a: "Yes. BrainADZ can customize the platform around your screen network, roles, content workflow, reporting and integrations.",
  },
];

export default function CloudSignageSoftwarePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/cloud.jpeg"
          alt="Cloud Signage Software"
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
            <span className="text-white/90">Cloud Signage Software</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Cloud Signage Software
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              A cloud-based signage platform to remotely manage screens, media,
              playlists, schedules, devices and campaign reports from one dashboard.
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
              Control every screen from a secure cloud dashboard.
            </h2>

            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ Cloud Signage Software helps businesses control digital signage
              content without depending on manual device updates. From one cloud platform,
              your team can upload media, schedule playlists, monitor screens and manage
              content across different locations.
            </p>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              <div className="border-l-2 border-[#3C5B9B] pl-5">
                <h3 className="text-[20px] font-light">Remote Management</h3>
                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Manage screens, branches and campaigns without on-site changes.
                </p>
              </div>

              <div className="border-l-2 border-[#3C5B9B] pl-5">
                <h3 className="text-[20px] font-light">Cloud Scalability</h3>
                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Scale from a few screens to a multi-location signage network.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#3C5B9B]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[30px] bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
              <img
                src="/software/cloud-signage-dashboard.webp"
                alt="Cloud Signage Dashboard"
                className="h-[520px] w-full object-cover"
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
              Make digital signage easier to manage, update and scale.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {[
              {
                title: "No Manual Screen Updates",
                text: "Update content from the cloud instead of changing files manually at every display location.",
              },
              {
                title: "Location-Wise Control",
                text: "Run different campaigns across different branches, screens and display zones.",
              },
              {
                title: "Consistent Brand Messaging",
                text: "Keep all screens aligned with approved content, campaign timing and brand visuals.",
              },
              {
                title: "Better Operational Visibility",
                text: "Monitor screens, device status and content activity from a central dashboard.",
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

      {/* CORE FEATURES */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Cloud Features
              </p>

              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Core tools for cloud-based signage management.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              The platform gives your team a simple way to manage media, screens,
              schedules and reporting across signage networks.
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

      {/* REMOTE CONTENT MANAGEMENT */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.76fr_1.24fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Remote Content Management
            </p>

            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Control every screen from one cloud platform.
            </h2>

            <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
              BrainADZ Cloud Signage Software lets teams manage content, screens,
              locations and campaigns without physically accessing every device.
              It helps businesses save time, reduce manual work and keep content consistent.
            </p>

            <div className="mt-8 rounded-[26px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <h3 className="text-[22px] font-light tracking-[-0.4px]">
                Manage screens smarter
              </h3>
              <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">
                Upload, schedule, monitor and optimize signage content across locations.
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
            {remoteFeatures.map((item, index) => (
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
              Software Workflow
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              Our Cloud Signage Software Roadmap
            </h2>
            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              A connected process to plan, build and launch cloud signage management software.
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
                <marker id="cloud-signage-arrowhead" markerHeight="14" markerUnits="userSpaceOnUse" markerWidth="18" orient="auto" refX="16" refY="7">
                  <path d="M 0 0 L 18 7 L 0 14 z" fill="#3C5B9B" />
                </marker>
              </defs>

              <path d="M 392 43 L 1208 43" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#cloud-signage-arrowhead)" />
              <path d="M 1294 43 C 1480 43 1515 150 1515 230 C 1515 318 1440 343 1294 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 1208 343 L 392 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#cloud-signage-arrowhead)" />
              <path d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#cloud-signage-arrowhead)" />
              <path d="M 392 613 L 1208 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#cloud-signage-arrowhead)" />
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
                Connect signage devices and cloud systems.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              The software can connect with compatible displays, media players, APIs, cloud storage and reporting tools.
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
              A cloud dashboard for screens, media and campaign control.
            </h2>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-black/10 bg-white p-4 shadow-[0_30px_90px_rgba(0,0,0,0.08)] md:p-6">
            <img
              src="/software/cloud-signage-preview-large.webp"
              alt="Cloud Signage Software Dashboard"
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
              Cloud signage software built for scalability and real screen networks.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {[
              {
                title: "Cloud-Ready Architecture",
                text: "We build signage platforms that support remote content delivery and multi-location growth.",
              },
              {
                title: "Device-Focused Planning",
                text: "We plan software around your screens, players, locations and operational workflow.",
              },
              {
                title: "Secure Access Control",
                text: "Role-based access helps teams manage screens without exposing full system control.",
              },
              {
                title: "Long-Term Support",
                text: "BrainADZ supports updates, monitoring, features and performance improvements after launch.",
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
              Common questions about Cloud Signage Software.
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
                  Ready to control your signage network from the cloud?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Let BrainADZ build a cloud signage platform that connects your
                  screens, media, schedules and locations in one reliable dashboard.
                </p>
              </div>

              <a
                href="/contact"
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition hover:bg-white hover:text-[#3C5B9B]"
              >
                <span>Get Cloud Signage Consultation</span>
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
