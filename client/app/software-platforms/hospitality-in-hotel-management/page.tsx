/* eslint-disable @next/next/no-img-element */
"use client";
import { titleCaseHeading } from "@/lib/title-case-heading";


import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BedDouble,
  Building2,
  CalendarDays,
  CreditCard,
  Download,
  Globe2,
  KeyRound,
  ReceiptText,
  Sparkles,
  UsersRound,
  Minus,
  Plus,
} from "lucide-react";
import IndustriesSection from "@/components/home/Industries";
import DemoForm from "@/components/DemoForm";

const modules = [
  { title: "Reservation Management", text: "Manage direct, walk-in, group, corporate and connected OTA bookings through one reservation workflow.", icon: CalendarDays },
  { title: "Front Desk & Rooms", text: "Handle arrivals, room assignments, stay changes, check-outs and room availability in one place.", icon: KeyRound },
  { title: "Housekeeping & Service", text: "Assign cleaning, track inspections and keep room status visible to the front desk.", icon: Sparkles },
  { title: "Billing & Reporting", text: "Connect guest folios, payments, restaurant charges and hotel performance reports.", icon: ReceiptText },
];

const pipeline = [
  { title: "New Reservation", text: "Record guest details, booking source, stay dates and room requirements.", status: "Booked", icon: CalendarDays },
  { title: "Pre-Arrival", text: "Confirm the reservation, payment details and any special requests before arrival.", status: "Prepared", icon: UsersRound },
  { title: "Check-In", text: "Verify guest details, assign a ready room and begin the stay.", status: "Arrived", icon: KeyRound },
  { title: "In-House Service", text: "Coordinate room requests, housekeeping and restaurant charges during the stay.", status: "Active", icon: BedDouble },
  { title: "Check-Out & Billing", text: "Review the folio, settle payments and complete the departure.", status: "Settled", icon: CreditCard },
  { title: "Room Ready", text: "Clean and inspect the room so it can return to available inventory.", status: "Available", icon: Sparkles },
];

const features = [
  { title: "Reservations & Availability", text: "Manage booking changes, room categories, rates and availability across supported booking sources." },
  { title: "Front Desk Operations", text: "Handle check-ins, room moves, guest notes, stay extensions and check-outs." },
  { title: "Housekeeping Coordination", text: "Assign cleaning and inspections, and share ready-room status with front desk staff." },
  { title: "Guest Folios & Payments", text: "Track room and service charges, taxes, advances, split payments and balances." },
  { title: "Restaurant & Room Service", text: "Connect dine-in and room-service orders with the guest folio where configured." },
  { title: "Hotel Reports & Access", text: "Review occupancy, revenue and booking-source data with access based on team roles." },
];

const workflowSteps = [
  { title: "Hotel Discovery", text: "We review the property, rooms, departments, booking sources and current operations.", icon: Building2 },
  { title: "Workflow Mapping", text: "We define reservation, front desk, housekeeping, billing and reporting processes.", icon: CalendarDays },
  { title: "Room & Rate Setup", text: "Room types, rates, taxes, users and access rules are planned for the platform.", icon: BedDouble },
  { title: "Platform Configuration", text: "The agreed modules, dashboards and compatible integrations are configured.", icon: BarChart3 },
  { title: "Testing & Training", text: "Connected hotel workflows are tested and each department is prepared for use.", icon: UsersRound },
  { title: "Go-Live Support", text: "The platform is deployed with handover support according to the agreed scope.", icon: KeyRound },
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
  "OTA Platforms",
  "Payment Gateways",
  "Accounting Software",
  "WhatsApp & SMS",
  "Door Lock Systems",
  "Restaurant POS",
  "Printers & ID Scanners",
  "Direct Booking Engine",
];

const faqs = [

  {
    q: "Can the software work for a single hotel and a hotel chain?",
    a: "Yes. It can be configured for one property or multiple properties with property-wise users, dashboards and consolidated reports.",
  },
  {
    q: "Can OTA bookings and room inventory be managed from one place?",
    a: "Yes. Supported OTA channels can share booking, inventory, availability and rate information through the channel-management workflow, subject to the interfaces available from each channel.",
  },
  {
    q: "Can restaurant bills be added directly to a guest room?",
    a: "Yes. Room-service and restaurant charges can be posted to the guest folio so stay and F&B billing remain connected.",
  },
  {
    q: "What happens if the hotel internet connection goes down?",
    a: "Essential supported operations can continue during a temporary disruption and synchronize after the connection returns. The exact offline scope is finalized during implementation.",
  },
  {
    q: "Can every department have different access permissions?",
    a: "Yes. Role-based permissions can limit each team to the screens and actions required for its daily work.",
  },
  {
    q: "Can the platform connect with Tally, payment tools or WhatsApp?",
    a: "Integrations can be planned with compatible accounting, payment and communication services where suitable APIs or technical interfaces are available.",
  },
];

export default function HospitalityManagementSoftwarePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/travel-hospitality.webp"
          alt="Hospitality Management Software by BrainADZ Live"
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

            <span className="text-white/90">Software Platforms</span>

            <span className="text-white/80">/</span>

            <span className="text-white/90">Hospitality Management</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Hospitality Software for Connected Hotel Operations
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Manage reservations, front desk, rooms, housekeeping, billing, restaurant operations and hotel reporting through one connected platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-4 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                View Demo
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

      {/* OVERVIEW */}
      <section className="section-spacing bg-white px-5 md:px-4 lg:px-12">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Software Overview
            </p>

            <h2 className="max-w-180 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              A Hotel Platform Planned Around How Your Property Operates.
            </h2>

            <p className="mt-6 max-w-170 text-[16px] font-light leading-[1.75] text-black/70">
              BrainADZ Live Hospitality Management Software connects reservations, guest stays, room status, service and payments. Workflows can be configured around your property, departments and reporting needs.
            </p>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              <div className="border-l-2 border-[#193175] pl-5">
                <h3 className="text-[20px] font-normal">
                  Room Visibility
                </h3>

                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Keep availability, occupancy, cleaning and maintenance status visible across teams.
                </p>
              </div>

              <div className="border-l-2 border-[#193175] pl-5">
                <h3 className="text-[20px] font-normal">
                  Connected Guest Journey
                </h3>

                <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                  Connect bookings, guest requests, services and charges throughout the stay.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#193175]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[30px] bg-[#f6f8fc] shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
              <img
                src="/overview/HMS-Overview.webp"
                alt="Hotel booking and management preview"
                className="h-130 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY HOSPITALITY SOFTWARE */}
      <section className="section-spacing bg-[#f6f8fc] px-5 md:px-4 lg:px-12">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why Hospitality Software
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Bring Hotel Departments into One Structured System.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {[
              {
                title: "Connected Guest Records",
                text: "Keep guest details, stay history, preferences and charges connected in one platform.",
              },
              {
                title: "Coordinated Room Turnover",
                text: "Share cleaning tasks, inspection progress and room readiness between housekeeping and front desk.",
              },
              {
                title: "Clear Stay Status",
                text: "Track reservations from booking and arrival through service, departure and room release.",
              },
              {
                title: "Hotel Reporting",
                text: "Review occupancy, revenue, booking sources and operational data defined for the property.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="border-t border-black/10 pt-7"
              >
                <span className="text-[13px] font-semibold text-[#193175]">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-[24px] font-normal tracking-[-0.4px]">
                  {titleCaseHeading(item.title)}
                </h3>

                <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE MODULES */}
      <section className="section-spacing bg-white px-5 md:px-4 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Core Modules
              </p>

              <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
                Core Modules for Reservations, Guest Stays and Hotel Operations.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              The module structure can be planned around your rooms, departments, guest services and reporting requirements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {modules.map((item) => (
              <div
                key={item.title}
                className="group rounded-[28px] border border-black/10 bg-[#f8faff] p-7 transition hover:-translate-y-1 hover:border-[#193175]/30 hover:bg-white hover:shadow-[0_22px_65px_rgba(60,91,155,0.1)]"
              >
                <div className="manual-icon-box mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#193175]/10 p-4">
                  <item.icon size={30} strokeWidth={1.7} className="text-[#193175]" aria-hidden="true" />
                </div>

                <h3 className="text-[23px] font-normal tracking-[-0.4px]">
                  {titleCaseHeading(item.title)}
                </h3>

                <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SALES PIPELINE */}
      <section className="section-spacing bg-[#f6f8fc] px-5 md:px-4 lg:px-12">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Guest Stay Workflow
            </p>

            <h2 className="max-w-175 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Follow Each Stay from Reservation to a Ready Room.
            </h2>

            <p className="mt-5 max-w-160 text-[16px] font-light leading-[1.7] text-black/65">
              A connected stay workflow helps teams see each reservation, arrival, service activity, departure and room turnover. Steps can be configured around your property.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:max-w-135">
              <div className="border border-black/10 bg-white p-5">
                <span className="text-[36px] font-light leading-none tracking-[-1px] text-[#193175]">
                  06
                </span>

                <p className="mt-3 text-[14px] font-light leading-normal text-black/60">
                  Example steps from a new reservation to the next available room.
                </p>
              </div>

              <div className="border border-black/10 bg-white p-5">
                <span className="text-[36px] font-light leading-none tracking-[-1px] text-[#193175]">
                  Custom
                </span>

                <p className="mt-3 text-[14px] font-light leading-normal text-black/60">
                  Stages and responsibilities can be planned around your hotel.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-8 top-8 hidden w-px bg-[#193175]/25 md:block" />

            <div className="space-y-5">
              {pipeline.map((item, index) => {
                const isFinalStage = index === pipeline.length - 1;

                return (
                  <div
                    key={item.title}
                    className="relative grid gap-5 border border-black/10 bg-white p-5 shadow-[0_18px_55px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#193175]/35 hover:shadow-[0_24px_70px_rgba(60,91,155,0.12)] md:grid-cols-[64px_1fr_auto] md:items-center md:p-6"
                  >
                    <div className="manual-icon-box relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#193175]/25 bg-[#eef4ff]">
                      <item.icon size={30} strokeWidth={1.7} className="text-[#193175]" aria-hidden="true" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                          Stage {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="h-px w-8 bg-[#193175]/25" />

                        <span className="text-[12px] font-light uppercase tracking-[0.16em] text-black/45">
                          {item.status}
                        </span>
                      </div>

                      <h3 className="mt-3 text-[24px] font-normal tracking-[-0.5px] text-black md:text-[28px]">
                        {titleCaseHeading(item.title)}
                      </h3>

                      <p className="mt-2 max-w-175 text-[15px] font-light leading-[1.7] text-black/62">
                        {item.text}
                      </p>
                    </div>

                    <div
                      className={`flex h-12 min-w-30 items-center justify-center border px-5 text-[13px] font-semibold uppercase tracking-[0.14em] ${
                        isFinalStage
                          ? "border-[#193175] bg-[#193175] text-white"
                          : "border-[#193175]/25 bg-[#f6f8fc] text-[#193175]"
                      }`}
                    >
                      {isFinalStage ? "Ready to Sell" : "In Progress"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* STICKY FEATURES */}
      <section className="section-spacing bg-white px-5 md:px-4 lg:px-12">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.76fr_1.24fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Platform Features
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Practical Capabilities for Daily Hotel Management.
            </h2>

            <p className="mt-5 max-w-150 text-[16px] font-light leading-[1.7] text-black/65">
              Bring reservations, rooms, guest service, payments and reporting into one coordinated operating workflow.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-4 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Discuss Your Hotel Requirement
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="border-t border-black/10">
            {features.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[75px_1fr]"
              >
                <span className="text-[14px] font-semibold text-[#193175]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-[26px] font-normal tracking-[-0.5px]">
                    {titleCaseHeading(item.title)}
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
      <section className="section-spacing relative overflow-hidden bg-[#f6f8fc] px-5 md:px-4 lg:px-12">
        <div
          className="pointer-events-none absolute right-[-9%] top-[-8%] hidden h-[116%] w-[32%] opacity-35 lg:block"
          style={{
            backgroundImage:
              "repeating-radial-gradient(ellipse at center, rgba(60, 91, 155, 0.18) 0 1px, transparent 1px 14px)",
            transform: "rotate(5deg) scaleX(0.72)",
          }}
        />

        <div className="mx-auto max-w-450">
          <div className="relative z-10 mx-auto mb-12 max-w-295 text-center lg:mb-14">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              How It Works
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              Our Hospitality Software Implementation Roadmap
            </h2>

            <p className="mx-auto mt-5 max-w-245 text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              A practical process for mapping, configuring and deploying software around your hotel operations.
            </p>
          </div>

          <div className="lg:hidden">
            <div className="space-y-5">
              {workflowSteps.map((item, index) => (
                <div
                  key={item.title}
                  className="group relative rounded-[26px] border border-black/10 bg-white p-6"
                >
                  {index !== workflowSteps.length - 1 && (
                    <div className="absolute left-11 top-18 h-[calc(100%+20px)] border-l-2 border-dashed border-[#193175]/45" />
                  )}

                  <div className="relative z-10 flex gap-5">
                    <div className="manual-icon-box flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#193175] bg-[#edf3ff]">
                      <item.icon size={30} strokeWidth={1.7} className="text-[#193175]" aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="text-[22px] font-normal leading-tight tracking-[-0.5px]">
                        {titleCaseHeading(item.title)}
                      </h3>

                      <p className="mt-3 text-[15px] font-light leading-[1.65] text-black/65">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden h-197.5 lg:block">
            <svg
              className="pointer-events-none absolute inset-0 z-0 h-full w-full"
              viewBox="0 0 1600 790"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id="hospitality-arrowhead"
                  markerHeight="14"
                  markerUnits="userSpaceOnUse"
                  markerWidth="18"
                  orient="auto"
                  refX="16"
                  refY="7"
                >
                  <path
                    d="M 0 0 L 18 7 L 0 14 z"
                    fill="#193175"
                  />
                </marker>
              </defs>

              <path
                d="M 392 43 L 1208 43"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#hospitality-arrowhead)"
              />

              <path
                d="M 1294 43 C 1480 43 1515 150 1515 230 C 1515 318 1440 343 1294 343"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
              />

              <path
                d="M 1208 343 L 392 343"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#hospitality-arrowhead)"
              />

              <path
                d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#hospitality-arrowhead)"
              />

              <path
                d="M 392 613 L 1208 613"
                stroke="#193175"
                strokeDasharray="10 12"
                strokeLinecap="round"
                strokeWidth="2.5"
                markerEnd="url(#hospitality-arrowhead)"
              />
            </svg>

            {workflowLayout.map((item) => (
              <div
                key={item.title}
                className="group absolute z-10 w-97.5 -translate-x-1/2 text-center"
                style={{
                  left: item.left,
                  top: item.top,
                }}
              >
                <div className="manual-icon-box mx-auto flex h-21.5 w-21.5 items-center justify-center rounded-full border-2 border-[#193175] bg-[#edf3ff]">
                  <item.icon size={30} strokeWidth={1.7} className="text-[#193175]" aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-[30px] font-normal leading-[1.15] tracking-[-0.8px] text-black xl:text-[32px]">
                  {titleCaseHeading(item.title)}
                </h3>

                <p className="mx-auto mt-4 max-w-82.5 text-[17px] font-light leading-[1.55] text-black/65 xl:text-[18px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="section-spacing bg-white px-5 md:px-4 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
                Integration Planning
              </p>

              <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
                Connect with the Tools Your Hotel Already Uses.
              </h2>
            </div>

            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              Integration scope depends on your existing systems, available technical interfaces and the agreed implementation plan.
            </p>
          </div>

          <div className="grid gap-y-5 md:grid-cols-4">
            {integrations.map((item, index) => (
              <div
                key={item}
                className={`flex min-h-24 items-center justify-center px-5 text-center ${
                  index % 4 !== 3
                    ? "md:border-r md:border-dotted md:border-[#bdbdbd]"
                    : ""
                }`}
              >
                <span className="text-[18px] font-light tracking-[-0.3px] text-[#193175]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesSection />

      {/* DASHBOARD PREVIEW */}
      <section className="section-spacing bg-[#f6f8fc] px-5 md:px-4 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Dashboard Preview
            </p>

            <h2 className="mx-auto max-w-230 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              A Central View of Bookings, Rooms and Hotel Activity.
            </h2>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-black/10 bg-white p-4 shadow-[0_30px_90px_rgba(0,0,0,0.08)] md:p-6">
            <img
              src="/overview/HMS-Dash.webp"
              alt="Hotel booking and management preview"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY BRAINADZ */}
      <section className="section-spacing bg-[#f6f8fc] px-5 md:px-4 lg:px-12">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why BrainADZ
            </p>

            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Hotel Software Shaped Around Real Property Operations.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {[
              {
                title: "Hospitality Workflows",
                text: "We start with reservations, guest stays, service and room turnover before defining the system.",
              },
              {
                title: "Connected Operational Data",
                text: "Guest, room, payment and department activity can remain connected across the platform.",
              },
              {
                title: "Integration Planning",
                text: "Connections with selected hotel tools are planned according to available technical interfaces.",
              },
              {
                title: "Scope-Based Implementation Support",
                text: "Configuration, deployment guidance and support are provided according to the agreed project scope.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="border-t border-black/10 pt-7"
              >
                <span className="text-[13px] font-semibold text-[#193175]">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-[24px] font-normal tracking-[-0.4px]">
                  {titleCaseHeading(item.title)}
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
      <section className="section-spacing bg-white px-5 md:px-4 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              FAQ
            </p>

            <h2 className="mx-auto max-w-230 text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common Questions about Hospitality Software.
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
                    {titleCaseHeading(faq.q)}
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
      <section className="section-spacing lazy-section bg-white">
        <div className="mx-auto max-w-450 px-4 lg:px-10">
          <div className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/CTA/cta.webp"
                alt="Hospitality software by BrainADZ Live"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Ready to Review Your Hotel Workflow?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  See how reservations, guest stays, room status and payments can be managed through one hospitality platform.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#193175] md:min-w-57.5"
              >
                <span>Request a Demo</span>

                <ArrowRight size={26} strokeWidth={1.8} className="text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <DemoForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        demoType="hospitality"
      />
    </main>
  );
}
