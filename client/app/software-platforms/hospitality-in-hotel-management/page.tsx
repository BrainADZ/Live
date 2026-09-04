/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BedDouble,
  Bell,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  CreditCard,
  Database,
  Download,
  Globe2,
  KeyRound,
  Layers3,
  Minus,
  Plus,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Store,
  UserRound,
  UsersRound,
  UtensilsCrossed,
  WifiOff,
  Wrench,
} from "lucide-react";
import IndustriesSection from "@/components/home/Industries";
import DemoForm from "@/components/DemoForm";

const propertyTypes = [
  "Hotels",
  "Resorts",
  "Boutique Hotels",
  "Business Hotels",
  "Hostels",
  "Serviced Apartments",
  "Guest Houses",
  "Hotel Chains",
];

const coreModules = [
  {
    title: "Reservation Management",
    text: "Manage direct, walk-in, group, corporate and OTA bookings through one booking workflow.",
    icon: CalendarDays,
  },
  {
    title: "Front Desk Management",
    text: "Handle check-ins, room assignments, stay changes, guest requests and check-outs faster.",
    icon: KeyRound,
  },
  {
    title: "Room Management",
    text: "Track room availability, category, pricing, cleaning status and maintenance blocks live.",
    icon: BedDouble,
  },
  {
    title: "Housekeeping",
    text: "Assign room cleaning, track progress, complete inspections and release rooms for sale.",
    icon: Sparkles,
  },
  {
    title: "Billing & Folios",
    text: "Manage room charges, services, taxes, discounts, payments, balances and invoices.",
    icon: ReceiptText,
  },
  {
    title: "Restaurant & POS",
    text: "Connect dine-in, room service, KOT and F&B billing directly with guest folios.",
    icon: UtensilsCrossed,
  },
  {
    title: "OTA & Channel Manager",
    text: "Synchronize supported bookings, inventory, availability and rates across connected channels.",
    icon: Globe2,
  },
  {
    title: "Reports & Analytics",
    text: "Review occupancy, ADR, RevPAR, revenue, booking sources and operational performance.",
    icon: BarChart3,
  },
];

const reservationFeatures = [
  "Create, edit and cancel reservations",
  "Walk-in, individual and group bookings",
  "Corporate and travel-agent bookings",
  "Live room availability by category",
  "Advance payment and balance tracking",
  "Guest information and special requests",
  "Booking confirmation and source tracking",
  "Confirmed, pending, checked-in, no-show and cancelled status",
];

const frontDeskFeatures = [
  "Quick guest check-in and check-out",
  "Room assignment and room change",
  "Extend stay, early check-in and late check-out",
  "Guest ID and document details",
  "Previous stay and guest history",
  "Outstanding payment alerts",
  "Special guest notes and requests",
  "Maintenance and out-of-service room blocking",
];

const housekeepingFlow = [
  {
    title: "Guest Checks Out",
    text: "The room automatically moves to dirty status.",
    icon: KeyRound,
  },
  {
    title: "Cleaning Assigned",
    text: "A housekeeper receives the task and room notes.",
    icon: UserRound,
  },
  {
    title: "Room Inspected",
    text: "A supervisor verifies cleaning and amenities.",
    icon: Check,
  },
  {
    title: "Ready to Sell",
    text: "Front desk sees the room as available again.",
    icon: BedDouble,
  },
];

const billingFeatures = [
  "Guest folio and room charges",
  "Restaurant and additional service charges",
  "Taxes, discounts and advance payments",
  "Partial and split payments",
  "Cash, card and UPI collection",
  "Refund and outstanding balance tracking",
  "PDF invoice and print invoice",
  "Payment mode and tax reports",
];

const restaurantFeatures = [
  "Restaurant POS and table management",
  "Dine-in and room-service orders",
  "Food menu and modifier management",
  "Kitchen order ticket generation",
  "Order status and kitchen workflow",
  "Restaurant billing and discounts",
  "Post approved bills to guest rooms",
  "Payment collection and order history",
];

const channelFeatures = [
  "Centralized OTA reservations",
  "Room inventory synchronization",
  "Availability and rate synchronization",
  "Rate-plan management",
  "Reduced overbooking risk",
  "Channel-wise booking reports",
];

const guestFeatures = [
  {
    title: "Guest CRM",
    text: "Guest details, stay history, spending, preferences, notes, VIP tags and repeat-guest identification.",
    icon: UsersRound,
  },
  {
    title: "Corporate Accounts",
    text: "Negotiated rates, credit limits, company billing, booking history and outstanding balances.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Travel Agents",
    text: "Agent profiles, commissions, special rates, booking performance and payment tracking.",
    icon: Globe2,
  },
];

const reportCards = [
  { label: "Occupancy Rate", value: "78%", change: "+6.4%" },
  { label: "Average Daily Rate", value: "₹5,820", change: "+4.1%" },
  { label: "RevPAR", value: "₹4,540", change: "+8.7%" },
  { label: "Direct Bookings", value: "42%", change: "+11.2%" },
];

const roles = [
  { role: "Owner", access: "Complete financial and operational visibility" },
  { role: "General Manager", access: "Property operations and performance reports" },
  { role: "Front Desk", access: "Reservations, arrivals, stays and check-outs" },
  { role: "Housekeeping", access: "Cleaning tasks, status and inspections" },
  { role: "Accounts", access: "Folios, payments, taxes and financial reports" },
  { role: "Restaurant", access: "POS, KOT, room service and F&B billing" },
];

const integrations = [
  { title: "OTA Platforms", icon: Globe2 },
  { title: "Payment Gateways", icon: CreditCard },
  { title: "Tally & Accounting", icon: CircleDollarSign },
  { title: "WhatsApp & SMS", icon: Bell },
  { title: "Door Lock Systems", icon: KeyRound },
  { title: "Restaurant POS", icon: Store },
  { title: "Printers & ID Scanners", icon: ReceiptText },
  { title: "Direct Booking Engine", icon: CalendarDays },
];

const workflowSteps = [
  {
    number: "01",
    title: "Hotel Discovery",
    text: "We understand the property, rooms, departments, booking sources and current operating process.",
  },
  {
    number: "02",
    title: "Workflow Mapping",
    text: "We define reservations, front desk, housekeeping, billing, F&B and reporting workflows.",
  },
  {
    number: "03",
    title: "Platform Configuration",
    text: "Room types, rates, taxes, users, permissions, dashboards and required integrations are configured.",
  },
  {
    number: "04",
    title: "Testing & Training",
    text: "We test connected workflows and prepare each department for its role-specific operating process.",
  },
  {
    number: "05",
    title: "Go-Live Support",
    text: "The platform is deployed with implementation and handover support according to the agreed scope.",
  },
];

const whyBrainadz = [
  {
    title: "Hospitality-First Workflows",
    text: "Every module follows the actual reservation, stay, service and room-turnover journey.",
    icon: Building2,
  },
  {
    title: "Connected Operational Data",
    text: "Guest, room, payment and department activity remain connected across the platform.",
    icon: Database,
  },
  {
    title: "Practical Customization",
    text: "Fields, roles, reports and workflows are shaped around the agreed hotel process.",
    icon: Wrench,
  },
  {
    title: "Management Visibility",
    text: "Owners receive property-level and consolidated operational and financial insights.",
    icon: BarChart3,
  },
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
      <section className="relative min-h-[540px] overflow-hidden bg-black text-white md:min-h-[600px] lg:min-h-[650px]">
        <img
          src="/hero/hospitality-management-software.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.78)_30%,rgba(0,0,0,0.42)_58%,rgba(0,0,0,0.08)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[540px] max-w-[1800px] flex-col px-5 py-10 md:min-h-[600px] md:px-8 lg:min-h-[650px] lg:px-12">
          <div className="flex flex-wrap items-center gap-3 text-[16px] font-light md:text-[18px]">
            <Link href="/" className="text-[#6da0ff] hover:underline">
              Home
            </Link>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Software Platforms</span>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Hospitality OS</span>
          </div>

          <div className="mt-12 max-w-[850px] md:mt-14">
            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#8baeff] md:text-[13px]">
              Hotel Management Software
            </p>
            <h1 className="text-[38px] font-semibold leading-[1.12] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              One Platform to Manage Your Entire Hotel Operation
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-[820px] text-[14px] font-light leading-[1.5] tracking-[-0.2px] text-white/90 md:text-[16px] lg:text-[18px]">
              Manage reservations, front desk, rooms, housekeeping, billing,
              restaurant operations, OTA bookings and business reports through
              one connected hospitality management system.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex h-[58px] min-w-[225px] items-center justify-center gap-4 rounded-full bg-[#193175] px-4 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Book a Demo
                <ArrowRight size={20} strokeWidth={1.8} />
              </button>

              <a
                href="/brochure/BrainADZLive.pdf"
                className="inline-flex h-[58px] min-w-[225px] items-center justify-center gap-3 rounded-full border border-white/35 px-4 text-[13px] font-bold text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#193175]"
              >
                Download Brochure
                <Download size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SOFTWARE OVERVIEW */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Software Overview
            </p>
            <h2 className="max-w-[680px] text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              A complete operating system for modern hospitality teams.
            </h2>
            <p className="mt-6 max-w-[700px] text-[16px] leading-[1.75] text-[#5f6877] md:text-[17px]">
              BrainADZ Hospitality OS connects every department around one live
              source of guest, room and revenue information—so hotel teams can
              work faster without losing operational control.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "One Live Room View",
                text: "Availability, occupancy, cleaning and maintenance status stay visible across teams.",
                icon: BedDouble,
              },
              {
                title: "One Guest Journey",
                text: "Every booking, service, charge, request and stay remains connected to the guest.",
                icon: UsersRound,
              },
              {
                title: "One Revenue Picture",
                text: "Room, restaurant and additional-service revenue flow into unified reporting.",
                icon: BarChart3,
              },
              {
                title: "One Controlled Platform",
                text: "Roles and permissions keep each department focused on the right actions.",
                icon: ShieldCheck,
              },
            ].map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-[24px] bg-[#f6f8fc] p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#e7edfb] text-[#193175]">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mt-6 text-[20px] font-normal">{title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#667085]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="border-y border-[#e8ecf3] bg-[#f6f8fc] px-5 py-12 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          <p className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
            Built for Every Hospitality Format
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {propertyTypes.map((type) => (
              <span
                key={type}
                className="rounded-full border border-[#dbe2ee] bg-white px-5 py-3 text-[14px] text-[#526071]"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CORE MODULES */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="max-w-[900px]">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Connected Hotel Operations
            </p>
            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Everything your hotel team needs. Connected.
            </h2>
            <p className="mt-6 max-w-[760px] text-[16px] leading-[1.75] text-[#5f6877] md:text-[17px]">
              Replace disconnected tools and manual coordination with one
              hospitality workflow from reservation to reporting.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-[#e0e5ef] bg-[#e0e5ef] sm:grid-cols-2 lg:grid-cols-4">
            {coreModules.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="group min-h-[265px] bg-white p-7 transition duration-300 hover:bg-[#eef3ff]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#e7edfb] text-[#193175] transition duration-300 group-hover:bg-[#193175] group-hover:text-white">
                  <Icon size={24} strokeWidth={1.7} />
                </div>
                <h3 className="mt-8 text-[23px] font-normal tracking-[-0.4px]">
                  {title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-[#667085]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION MANAGEMENT */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="max-w-[950px]">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Reservation Management
            </p>
            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Every booking source in one clear calendar.
            </h2>
            <p className="mt-6 max-w-[760px] text-[16px] leading-[1.75] text-[#5f6877] md:text-[17px]">
              Create and manage direct, walk-in, group, corporate and OTA
              bookings without switching between disconnected records.
            </p>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-[28px] border border-[#dfe5ef] bg-white shadow-[0_24px_70px_rgba(25,49,117,0.08)] lg:grid-cols-[1.08fr_0.92fr]">
            <div className="p-6 md:p-9">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#193175]">
                    September 2026
                  </p>
                  <h3 className="mt-2 text-[25px] font-normal">Reservation Calendar</h3>
                </div>
                <span className="rounded-full bg-[#eaf0ff] px-4 py-2 text-[13px] font-medium text-[#193175]">
                  + New Reservation
                </span>
              </div>

              <div className="mt-8 overflow-x-auto">
                <div className="min-w-[650px]">
                  <div className="grid grid-cols-[120px_repeat(7,1fr)] border-b border-[#e5e9f0] pb-3 text-center text-[11px] text-[#7b8492]">
                    <span className="text-left">Room</span>
                    {["2 Tue", "3 Wed", "4 Thu", "5 Fri", "6 Sat", "7 Sun", "8 Mon"].map((day) => (
                      <span key={day}>{day}</span>
                    ))}
                  </div>

                  {[
                    {
                      room: "101 · Deluxe",
                      className: "col-start-2 col-span-3 bg-[#dfe8ff] text-[#193175]",
                      guest: "A. Mehta · Direct",
                    },
                    {
                      room: "204 · Suite",
                      className: "col-start-4 col-span-4 bg-[#e7f6ef] text-[#176447]",
                      guest: "R. Kapoor · MMT",
                    },
                    {
                      room: "305 · Twin",
                      className: "col-start-3 col-span-2 bg-[#fff0d9] text-[#915914]",
                      guest: "Zenova Ltd · Corporate",
                    },
                    {
                      room: "408 · Deluxe",
                      className: "col-start-6 col-span-3 bg-[#efe7ff] text-[#6441a5]",
                      guest: "S. Iyer · Booking.com",
                    },
                  ].map((booking) => (
                    <div
                      key={booking.room}
                      className="grid grid-cols-[120px_repeat(7,1fr)] items-center border-b border-[#edf0f5] py-3 last:border-0"
                    >
                      <span className="text-[12px] font-medium text-[#566173]">
                        {booking.room}
                      </span>
                      <span className={`${booking.className} rounded-lg px-3 py-2 text-[11px] font-medium`}>
                        {booking.guest}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#0d1733] p-7 text-white md:p-10">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#86acff]">
                Booking Controls
              </p>
              <h3 className="mt-4 text-[30px] font-normal leading-tight tracking-[-0.5px]">
                Availability, guest data and payment status stay together.
              </h3>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {reservationFeatures.map((feature) => (
                  <div key={feature} className="flex gap-3 text-[14px] leading-6 text-white/75">
                    <Check size={17} className="mt-1 shrink-0 text-[#7da8ff]" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRONT DESK & ROOM MANAGEMENT */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Front Desk & Room Management
            </p>
            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Give reception a live view of every room and every arrival.
            </h2>
            <p className="mt-6 max-w-[740px] text-[16px] leading-[1.75] text-[#5f6877] md:text-[17px]">
              Reception teams can immediately see what is available, occupied,
              reserved, dirty, under cleaning or blocked for maintenance.
            </p>

            <div className="mt-8 grid gap-x-8 sm:grid-cols-2">
              {frontDeskFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 border-b border-[#e6eaf1] py-3 text-[14px] text-[#4f5b6d]"
                >
                  <Check size={17} className="shrink-0 text-[#193175]" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#e0e5ef] bg-white p-6 shadow-[0_26px_70px_rgba(25,49,117,0.09)] md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-[12px] text-[#7b8492]">Front Desk</p>
                <h3 className="mt-1 text-[23px] font-normal">Live Room Board</h3>
              </div>
              <span className="text-[13px] text-[#7b8492]">42 Rooms</span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { room: "101", status: "Available", className: "bg-[#e7f7ef] text-[#176447]" },
                { room: "102", status: "Occupied", className: "bg-[#e4ebff] text-[#193175]" },
                { room: "103", status: "Dirty", className: "bg-[#fff0dd] text-[#925a12]" },
                { room: "201", status: "Reserved", className: "bg-[#eee8ff] text-[#6544a7]" },
                { room: "202", status: "Cleaning", className: "bg-[#e8f5fa] text-[#18647d]" },
                { room: "203", status: "Maintenance", className: "bg-[#f4e8e8] text-[#943c3c]" },
                { room: "301", status: "Occupied", className: "bg-[#e4ebff] text-[#193175]" },
                { room: "302", status: "Available", className: "bg-[#e7f7ef] text-[#176447]" },
                { room: "303", status: "Available", className: "bg-[#e7f7ef] text-[#176447]" },
              ].map((room) => (
                <div key={room.room} className={`${room.className} rounded-2xl p-4`}>
                  <div className="flex items-center justify-between gap-2">
                    <BedDouble size={18} />
                    <span className="text-[11px]">{room.status}</span>
                  </div>
                  <p className="mt-6 text-[24px] font-medium">{room.room}</p>
                  <p className="mt-1 text-[11px] opacity-70">Deluxe King</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOUSEKEEPING */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Housekeeping Workflow
            </p>
            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Turn every checkout into a room ready for the next guest.
            </h2>
            <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-[1.75] text-[#5f6877] md:text-[17px]">
              Front desk and housekeeping stay aligned through one visible room-status flow.
            </p>
          </div>

          <div className="relative mt-14 grid gap-5 md:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-[#bcc9e8] md:block" />
            {housekeepingFlow.map(({ title, text, icon: Icon }, index) => (
              <article
                key={title}
                className="relative rounded-[24px] border border-[#dfe4ee] bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[7px] border-[#f6f8fc] bg-[#193175] text-white">
                  <Icon size={25} />
                </div>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#5571b6]">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-[21px] font-normal">{title}</h3>
                <p className="mt-3 text-[14px] leading-6 text-[#667085]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BILLING & RESTAURANT */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="max-w-[920px]">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Billing & F&B Operations
            </p>
            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Connect every hotel charge to one accurate guest folio.
            </h2>
            <p className="mt-6 max-w-[760px] text-[16px] leading-[1.75] text-[#5f6877] md:text-[17px]">
              Room charges, services, restaurant orders, taxes, discounts and
              payments remain traceable from one stay record.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-[28px] bg-[#eef3ff] p-7 md:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white text-[#193175]">
                <ReceiptText size={24} />
              </div>
              <h3 className="mt-7 text-[30px] font-normal tracking-[-0.6px]">
                Billing & Folio Management
              </h3>
              <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-[#5f6877]">
                Manage advance, partial and split payments across cash, card and
                UPI, with taxes, discounts, refunds, balance tracking and invoices.
              </p>
              <div className="mt-7 grid gap-x-8 sm:grid-cols-2">
                {billingFeatures.map((feature) => (
                  <div key={feature} className="flex gap-3 border-b border-[#d7e0f1] py-3 text-[14px] text-[#526071]">
                    <Check size={17} className="mt-0.5 shrink-0 text-[#193175]" />
                    {feature}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex justify-between border-b border-[#edf0f5] pb-4">
                  <span className="font-medium">Folio #ST-24091</span>
                  <span className="text-[13px] text-[#7b8492]">Room 204</span>
                </div>
                {[
                  ["Room Charge", "₹11,640"],
                  ["Restaurant", "₹2,480"],
                  ["Laundry", "₹620"],
                  ["GST", "₹2,653"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between py-2 text-[14px] text-[#657083]">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
                <div className="mt-2 flex justify-between border-t border-[#e4e8ef] pt-4 text-[18px] font-semibold">
                  <span>Total</span>
                  <span>₹17,393</span>
                </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-[28px] bg-[#0d1733] p-7 text-white md:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white/10 text-white">
                <UtensilsCrossed size={24} />
              </div>
              <h3 className="mt-7 text-[30px] font-normal tracking-[-0.6px]">
                Restaurant & Room Service
              </h3>
              <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-white/65">
                Create dine-in and room-service orders, generate KOTs, manage
                tables and post approved charges directly to a guest room.
              </p>
              <div className="mt-7 grid gap-x-8 sm:grid-cols-2">
                {restaurantFeatures.map((feature) => (
                  <div key={feature} className="flex gap-3 border-b border-white/10 py-3 text-[14px] text-white/72">
                    <Check size={17} className="mt-0.5 shrink-0 text-[#8baeff]" />
                    {feature}
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["12", "Open Tables"],
                  ["08", "Active KOTs"],
                  ["₹34.8k", "Today’s F&B"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-[24px] font-medium">{value}</p>
                    <p className="mt-2 text-[11px] text-white/50">{label}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* OTA & CHANNEL MANAGER */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[28px] border border-[#e0e5ef] bg-white p-6 shadow-[0_26px_70px_rgba(25,49,117,0.09)] md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[12px] uppercase tracking-[0.16em] text-[#7b8492]">
                  Channel Manager
                </p>
                <h3 className="mt-2 text-[24px] font-normal">Inventory Synchronization</h3>
              </div>
              <span className="rounded-full bg-[#e5f6ee] px-3 py-1.5 text-[11px] font-semibold text-[#176447]">
                Live
              </span>
            </div>

            <div className="my-8 flex items-center justify-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#193175] text-white shadow-[0_18px_40px_rgba(25,49,117,0.25)]">
                <Building2 size={38} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {["Booking.com", "MakeMyTrip", "Agoda", "Expedia"].map((channel) => (
                <div key={channel} className="flex items-center gap-3 rounded-xl border border-[#e0e5ef] bg-white p-4 text-[13px] font-medium">
                  <Globe2 size={17} className="text-[#4c6fbd]" />
                  {channel}
                  <Check size={15} className="ml-auto text-emerald-600" />
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {[
                ["26", "Available"],
                ["₹6,200", "Best Rate"],
                ["0", "Conflicts"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl bg-[#f2f5fb] p-4">
                  <p className="font-semibold">{value}</p>
                  <p className="mt-1 text-[11px] text-[#7b8492]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              OTA & Channel Manager
            </p>
            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Update once. Keep connected booking channels synchronized.
            </h2>
            <p className="mt-6 max-w-[740px] text-[16px] leading-[1.75] text-[#5f6877] md:text-[17px]">
              Bring OTA reservations into one system and align room inventory,
              availability and rate plans across supported booking platforms.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {channelFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3 border-b border-[#dfe4ee] py-3 text-[14px] text-[#526071]">
                  <Check size={17} className="shrink-0 text-[#193175]" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GUEST CRM */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="mx-auto max-w-[950px] text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Guest & Business Relationships
            </p>
            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Recognize every guest and manage every business account.
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] text-[16px] leading-[1.75] text-[#5f6877] md:text-[17px]">
              Build complete profiles for repeat guests, corporate clients and
              travel agents without separating booking history from commercial information.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {guestFeatures.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="min-h-[300px] rounded-[26px] border border-[#dfe4ee] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(25,49,117,0.1)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#e7edfb] text-[#193175]">
                  <Icon size={23} />
                </div>
                <h3 className="mt-7 text-[25px] font-normal">{title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-[#667085]">{text}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold text-[#193175]">
                  Connected Profile
                  <ArrowRight size={16} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REPORTS & ANALYTICS */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="max-w-[900px]">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Reports & Analytics
            </p>
            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Move from daily activity to better hotel decisions.
            </h2>
            <p className="mt-6 max-w-[760px] text-[16px] leading-[1.75] text-[#5f6877] md:text-[17px]">
              Monitor operational and financial performance with the hospitality
              KPIs owners and managers actually use.
            </p>
          </div>

          <div className="mt-12 rounded-[30px] bg-[radial-gradient(circle_at_80%_0%,#243f7c_0%,#101c3b_40%,#0a1228_75%)] p-6 shadow-[0_28px_80px_rgba(8,17,39,0.2)] md:p-9">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#8baaf1]">
                  Management Overview
                </p>
                <h3 className="mt-2 text-[25px] font-normal text-white">September Performance</h3>
              </div>
              <span className="rounded-full border border-white/15 px-4 py-2 text-[11px] text-white/70">
                All Properties
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {reportCards.map((report) => (
                <div key={report.label} className="rounded-2xl border border-white/10 bg-white/[0.055] p-5">
                  <p className="text-[13px] text-white/55">{report.label}</p>
                  <div className="mt-3 flex items-end justify-between gap-2">
                    <p className="text-[25px] font-medium text-white">{report.value}</p>
                    <span className="text-[11px] font-semibold text-[#83e2b0]">{report.change}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-6">
                <div className="flex justify-between gap-4">
                  <p className="text-[14px] font-medium text-white">Revenue Trend</p>
                  <p className="text-[11px] text-white/45">Last 7 Days</p>
                </div>
                <div className="mt-8 flex h-44 items-end gap-3">
                  {[42, 58, 52, 74, 68, 88, 79].map((height, index) => (
                    <div key={index} className="flex flex-1 flex-col items-center gap-2">
                      <div
                        className="w-full rounded-t-md bg-[linear-gradient(180deg,#7299f1,#294684)]"
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-[10px] text-white/40">
                        {["M", "T", "W", "T", "F", "S", "S"][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-6">
                <p className="text-[14px] font-medium text-white">Booking Sources</p>
                <div className="mt-7 space-y-5">
                  {[
                    ["Direct", 42],
                    ["OTA", 35],
                    ["Corporate", 15],
                    ["Walk-in", 8],
                  ].map(([name, value]) => (
                    <div key={name as string}>
                      <div className="flex justify-between text-[11px] text-white/60">
                        <span>{name}</span>
                        <span>{value}%</span>
                      </div>
                      <div className="mt-2 h-1.5 rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-[#7da8ff]"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MULTI PROPERTY + OFFLINE */}
      <section className="bg-[#0a1228] px-5 py-18 text-white md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="max-w-[950px]">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#91aff4]">
              Built for Continuity & Growth
            </p>
            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Run one property today. Add more without losing control.
            </h2>
            <p className="mt-6 max-w-[760px] text-[16px] leading-[1.75] text-white/62 md:text-[17px]">
              Centralized management and operational continuity make the
              platform ready for growing hospitality businesses.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 md:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white/10 text-white">
                <Layers3 size={25} />
              </div>
              <h3 className="mt-7 text-[30px] font-normal">Multi-Property Management</h3>
              <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-white/65">
                Manage separate properties, property-specific users and revenue
                views while keeping consolidated visibility at group level.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {["Delhi", "Mumbai", "Goa", "Jaipur"].map((city, index) => (
                  <div key={city} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <Building2 size={18} className="text-[#8eaeff]" />
                    <p className="mt-4 text-[13px] font-medium">{city}</p>
                    <p className="mt-1 text-[10px] text-white/40">Property {index + 1}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 md:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white/10 text-white">
                <WifiOff size={25} />
              </div>
              <h3 className="mt-7 text-[30px] font-normal">Offline Business Continuity</h3>
              <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-white/65">
                Keep essential supported operations moving during temporary
                internet issues and synchronize operational data after reconnect.
              </p>
              <div className="mt-8 rounded-2xl border border-[#7397e8]/25 bg-[#15264f] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbf69]" />
                    <span className="text-[13px] font-medium">Connection Interrupted</span>
                  </div>
                  <span className="text-[11px] text-white/45">12:42 PM</span>
                </div>
                <div className="mt-5 h-px bg-white/10" />
                <div className="mt-5 flex items-center gap-3 text-[13px] text-white/65">
                  <Database size={18} className="text-[#8eaeff]" />
                  7 local transactions ready to synchronize
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ROLES & PERMISSIONS */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-10">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Roles & Permissions
            </p>
            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Give every department the access it needs—nothing more.
            </h2>
            <p className="mt-6 max-w-[680px] text-[16px] leading-[1.75] text-[#5f6877] md:text-[17px]">
              Control screens, actions and financial visibility by role while
              owners retain complete oversight.
            </p>
          </div>

          <div className="overflow-hidden rounded-[26px] border border-[#dfe4ee]">
            {roles.map((item, index) => (
              <div
                key={item.role}
                className="grid gap-3 border-b border-[#dfe4ee] p-5 last:border-0 sm:grid-cols-[52px_1fr_1fr] sm:items-center md:p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef3ff] text-[13px] font-semibold text-[#193175]">
                  0{index + 1}
                </span>
                <span className="text-[18px] font-medium">{item.role}</span>
                <span className="text-[14px] text-[#667085]">{item.access}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Integrations
            </p>
            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Connect with the tools your hotel already uses.
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] text-[16px] leading-[1.75] text-[#5f6877] md:text-[17px]">
              Integrations are planned around compatible interfaces and the
              agreed implementation scope.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {integrations.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="flex min-h-[78px] items-center gap-4 rounded-[18px] border border-[#dfe4ee] bg-white px-5 py-4 text-[14px] font-semibold transition duration-300 hover:border-[#aebee2] hover:shadow-[0_12px_32px_rgba(25,49,117,0.08)]"
              >
                <Icon size={21} className="text-[#3659a5]" />
                {title}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION WORKFLOW */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="max-w-[950px]">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Implementation Workflow
            </p>
            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              From hotel operations to a configured working platform.
            </h2>
            <p className="mt-6 max-w-[760px] text-[16px] leading-[1.75] text-[#5f6877] md:text-[17px]">
              The system is shaped around the way your property actually runs,
              then configured and handed over department by department.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {workflowSteps.map((step) => (
              <article key={step.number} className="min-h-[315px] rounded-[24px] border border-[#dfe4ee] p-7">
                <span className="text-[48px] font-light text-[#c7d3ee]">{step.number}</span>
                <h3 className="mt-8 text-[23px] font-normal">{step.title}</h3>
                <p className="mt-4 text-[14px] leading-7 text-[#667085]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BRAINADZ */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1800px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Why BrainADZ Hospitality OS
            </p>
            <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Designed around hotel work—not generic office workflows.
            </h2>
            <p className="mt-6 max-w-[700px] text-[16px] leading-[1.75] text-[#5f6877] md:text-[17px]">
              Operational clarity, connected departments and practical
              implementation remain at the centre of the platform.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {whyBrainadz.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-[24px] bg-white p-7">
                <Icon size={24} className="text-[#193175]" />
                <h3 className="mt-6 text-[21px] font-normal">{title}</h3>
                <p className="mt-3 text-[14px] leading-6 text-[#667085]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <IndustriesSection />

      {/* FAQ */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1050px]">
          <div className="text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#193175]">
              Frequently Asked Questions
            </p>
            <h2 className="mx-auto max-w-[900px] text-[34px] font-normal leading-[1.15] tracking-[-1px] md:text-[46px]">
              Questions hotel teams usually ask before a demo.
            </h2>
          </div>

          <div className="mt-12 divide-y divide-[#dfe4ee] border-y border-[#dfe4ee]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[18px] font-medium md:text-[20px]">{faq.q}</span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef3ff] text-[#193175]">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="max-w-[820px] pb-7 pr-12 text-[15px] leading-7 text-[#667085]">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-5 pb-8 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1800px] overflow-hidden rounded-[28px] bg-[#193175] lg:grid-cols-[1.25fr_0.75fr]">
          <div className="p-8 text-white md:p-12 lg:p-16">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#a9c0ff]">
              See It Around Your Hotel
            </p>
            <h2 className="mt-5 max-w-[850px] text-[34px] font-normal leading-[1.14] tracking-[-1px] md:text-[46px]">
              Let’s map your property operations into one connected system.
            </h2>
            <p className="mt-6 max-w-[750px] text-[15px] leading-7 text-white/68">
              Tell us about your rooms, booking sources, departments and current
              software. We will demonstrate the workflow around your actual requirements.
            </p>
          </div>

          <div className="flex flex-col justify-center bg-[#0d1733] p-8 text-white md:p-12">
            <Clock3 size={30} className="text-[#8eadff]" />
            <h3 className="mt-6 text-[26px] font-normal">Book a Product Walkthrough</h3>
            <p className="mt-3 text-[13px] leading-6 text-white/60">
              Reservations · Front Desk · Billing · Housekeeping · OTA · Reports
            </p>
            <button
              type="button"
              onClick={() => setIsPopupOpen(true)}
              className="mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-6 text-[13px] font-bold text-[#193175] transition duration-300 hover:bg-[#dfe8ff]"
            >
              Request a Demo
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* DEMO POPUP */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm"
          onClick={() => setIsPopupOpen(false)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-[780px] overflow-y-auto rounded-[24px] bg-white p-5 shadow-2xl md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsPopupOpen(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f4f8] text-[#193175] transition hover:bg-[#e3e8f2]"
              aria-label="Close demo form"
            >
              <Plus size={20} className="rotate-45" />
            </button>

            <DemoForm />
          </div>
        </div>
      )}
    </main>
  );
}