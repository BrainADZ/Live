/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Gauge,
  GraduationCap,
  HeartPulse,
  Layers3,
  Landmark,
  Lightbulb,
  MonitorSmartphone,
  Palette,
  PenTool,
  Plus,
  Minus,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  TestTube2,
  Users,
  Workflow,
  Boxes,
  Globe2,
  Eye,
  Rocket,
} from "lucide-react";
import IndustriesSection from "@/components/home/Industries"
import PopupForm from "@/components/PopupForm";

type TabType = "design" | "prototype" | "research";

type StackItem = {
  name: string;
  icon: string;
};

const designServices = [
  {
    title: "User Research",
    text: "We study users, competitors and business goals to create meaningful design direction.",
    icon: Search,
  },
  {
    title: "Wireframing",
    text: "Low-fidelity layouts help us define structure, flow and functionality before UI design.",
    icon: Layers3,
  },
  {
    title: "UI Design",
    text: "Clean, pixel-perfect interfaces that represent your brand and improve engagement.",
    icon: Palette,
  },
  {
    title: "Prototyping",
    text: "Clickable prototypes help validate user flows before development starts.",
    icon: MonitorSmartphone,
  },
  {
    title: "Design Systems",
    text: "Scalable design systems keep your product consistent across screens and teams.",
    icon: Boxes,
  },
];

const designApproach = [
  {
    title: "User First",
    text: "Empathy-driven design that solves real user problems and reduces friction.",
    icon: Users,
  },
  {
    title: "Business Aligned",
    text: "Design decisions are connected to conversion, retention and measurable outcomes.",
    icon: Target,
  },
  {
    title: "Technically Feasible",
    text: "Interfaces are planned to be practical, scalable and development-friendly.",
    icon: CodeIcon,
  },
];

function CodeIcon(props: React.ComponentProps<typeof Workflow>) {
  return <Workflow {...props} />;
}

const processSteps = [
  {
    title: "Discover",
    text: "We understand your business, users and objectives through research.",
    icon: Search,
  },
  {
    title: "Define",
    text: "We define user personas, journeys and information architecture.",
    icon: Compass,
  },
  {
    title: "Ideate",
    text: "We brainstorm and create wireframes to explore the best solutions.",
    icon: Lightbulb,
  },
  {
    title: "Design",
    text: "We craft visually strong UI designs with attention to detail.",
    icon: PenTool,
  },
  {
    title: "Prototype",
    text: "We build interactive prototypes and test flows with real users.",
    icon: Smartphone,
  },
  {
    title: "Deliver",
    text: "We hand off final designs with assets, guidelines and support.",
    icon: Rocket,
  },
];

const processLayout = [
  { ...processSteps[0], left: "21.75%", top: "0px" },
  { ...processSteps[1], left: "78.25%", top: "0px" },
  { ...processSteps[2], left: "21.75%", top: "300px" },
  { ...processSteps[3], left: "78.25%", top: "300px" },
  { ...processSteps[4], left: "21.75%", top: "570px" },
  { ...processSteps[5], left: "78.25%", top: "570px" },
];

const stunningItems = [
  {
    title: "Research & Analysis",
    text: "As a leading UI UX design company, we conduct in-depth market research, user behavior studies, and competitive analysis. This ensures data-driven design decisions that align with business goals and drive exceptional user engagement.",
    icon: Search,
  },
  {
    title: "Consumer Focused Design",
    text: "We are a UI and UX company that prioritizes user satisfaction. Every design element is crafted around the consumer journey, delivering solutions that foster strong user connections, increased retention, and superior digital experiences.",
    icon: Target,
  },
  {
    title: "AR/VR Experience Design",
    text: "Our UI UX design services include AR/VR interfaces that create immersive and interactive digital experiences. These intuitive designs redefine how users engage with virtual environments, keeping your business ahead of technology trends.",
    icon: Eye,
  },
  {
    title: "Cross-Platform Experience Design",
    text: "We specialize in UI UX design and development services that ensure seamless functionality across platforms. Whether web, mobile, or tablet, we deliver unified, high-performance experiences powered by frontend development and strengthened by hire frontend developers.",
    icon: MonitorSmartphone,
  },
  {
    title: "Product Vision & Strategy",
    text: "As a strategic UI UX design firm, we align creative vision with business strategy. Our seasoned experts define roadmaps that blend innovation and purpose, ensuring your product vision is future-ready and results-focused.",
    icon: Compass,
  },
  {
    title: "Wireframing & Prototyping",
    text: "Our UX/UI design services include detailed wireframes and clickable prototypes that validate usability before development. This visual foundation eliminates ambiguity, aligns expectations, and accelerates user-centric product development and decision-making.",
    icon: Layers3,
  },
  {
    title: "Testing & Validation",
    text: "Our thorough user experience design services include multi-phase testing and client validation. We ensure your product meets usability standards, business goals, and user expectations through continuous feedback and iterative improvements.",
    icon: TestTube2,
  },
  {
    title: "Agile Design Process",
    text: "With our UI UX designing services, we adopt agile methodologies that ensure flexibility, quick iterations, and real-time collaboration. This results in fast delivery, user-aligned outcomes, and enhanced adaptability for evolving projects.",
    icon: Workflow,
  },
  {
    title: "Performance Optimization",
    text: "We provide UI/UX design and development services that prioritize performance optimization. Our meticulous design approach ensures faster load times, smooth interactions, and user-centric workflows that support application modernization.",
    icon: Gauge,
  },
];

const whyChoose = [
  {
    title: "Experienced Designers",
    text: "Skilled team with diverse industry experience.",
    icon: Users,
  },
  {
    title: "User-Centered Approach",
    text: "Designs that keep real users at the core.",
    icon: Target,
  },
  {
    title: "On-Time Delivery",
    text: "Agile workflow ensures quality and timely delivery.",
    icon: CheckCircle2,
  },
  {
    title: "Scalable Solutions",
    text: "Design systems that grow with your business.",
    icon: Layers3,
  },
  {
    title: "Dedicated Support",
    text: "Continuous collaboration and long-term support.",
    icon: ShieldCheck,
  },
];

const caseStudies = [
  {
    title: "FinTrack Dashboard",
    text: "A modern financial dashboard designed for clarity and better decision making.",
    image: "/services/hero/fintech-dashboard.jpg",
  },
  {
    title: "ShopEase E-commerce",
    text: "A cleaner shopping experience that improved product discovery and conversions.",
    image: "/services/hero/ecommerce-ui.jpg",
  },
  {
    title: "MediCare App",
    text: "Patient-centric mobile app design that improved engagement and satisfaction.",
    image: "/services/hero/healthcare-app.jpg",
  },
  {
    title: "TaskFlow SaaS",
    text: "Clean SaaS platform design focused on productivity and team workflows.",
    image: "/services/hero/saas-dashboard.jpg",
  },
];

const tabs: { label: string; value: TabType }[] = [
  { label: "Design", value: "design" },
  { label: "Prototyping", value: "prototype" },
  { label: "Research", value: "research" },
];

const techStack: Record<TabType, StackItem[]> = {
  design: [
    { name: "Figma", icon: "/icons/Figma.svg" },
    { name: "Adobe XD", icon: "/icons/AdobeXD.svg" },
    { name: "Sketch", icon: "/icons/Sketch.svg" },
    { name: "Photoshop", icon: "/icons/Photoshop.svg" },
    { name: "Illustrator", icon: "/icons/Illustrator.svg" },
    { name: "Canva", icon: "/icons/Canva.svg" },
  ],
  prototype: [
    { name: "InVision", icon: "/icons/InVision.svg" },
    { name: "Framer", icon: "/icons/Framer.svg" },
    { name: "Zeplin", icon: "/icons/Zeplin.svg" },
    { name: "Miro", icon: "/icons/Miro.svg" },
    { name: "Notion", icon: "/icons/Notion.svg" },
    { name: "FigJam", icon: "/icons/Figma.svg" },
  ],
  research: [
    { name: "Hotjar", icon: "/icons/Hotjar.svg" },
    { name: "Maze", icon: "/icons/Maze.svg" },
    { name: "Google Analytics", icon: "/icons/GoogleAnalytics.svg" },
    { name: "Lookback", icon: "/icons/Lookback.svg" },
    { name: "Optimal Workshop", icon: "/icons/OptimalWorkshop.svg" },
    { name: "UserTesting", icon: "/icons/UserTesting.svg" },
  ],
};

const faqs = [
  {
    q: "What is UI/UX design?",
    a: "UI/UX design focuses on creating digital products that are easy to use, visually clear and aligned with user expectations and business goals.",
  },
  {
    q: "How long does a UI/UX design project take?",
    a: "The timeline depends on the number of screens, research depth, prototype requirements and design system needs.",
  },
  {
    q: "Do you design for both web and mobile?",
    a: "Yes. We design responsive web apps, mobile apps, SaaS platforms, dashboards, portals and customer-facing digital products.",
  },
  {
    q: "Will I receive the source files?",
    a: "Yes. We can provide design files, assets, prototypes and design handoff documentation based on project scope.",
  },
  {
    q: "Do you provide support after project delivery?",
    a: "Yes. We provide design improvements, handoff support, developer collaboration and future design enhancements.",
  },
];

export default function UIUXDesignPage() {
  const [activeTab, setActiveTab] = useState<TabType>("design");
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/services/hero/ui-ux-design.jpg"
          alt="UI UX Design Services"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-8 lg:min-h-135 lg:px-12">
          <div className="flex items-center gap-3 text-[16px] font-light md:text-[18px]">
            <Link href="/" className="text-[#6da0ff] hover:underline">
              Home
            </Link>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Services</span>
            <span className="text-white/80">/</span>
            <span className="text-white/90">UI/UX Design</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              UI/UX Design That Delivers Meaningful Digital Experiences
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              We design intuitive, engaging and user-centered digital
              experiences that look stunning, work smoothly and create lasting
              value for your business.
            </p>

            <div className="mt-8">
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#3C5B9B] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
>
  Start Your Project
  <span className="text-[20px] leading-none">↗</span>
</button>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Overview
            </p>
            <h2 className="max-w-170 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Designing experiences people love.
            </h2>
            <p className="mt-6 max-w-165 text-[16px] font-light leading-[1.75] text-black/70">
              Our UI/UX design services focus on understanding users, solving
              real problems and creating beautiful, functional interfaces that
              improve engagement, usability and business growth.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-7 md:grid-cols-2">
            {[
              { title: "User-Centered", text: "Every design decision starts with real user needs.", icon: Users },
              { title: "Business Focused", text: "Designs that align with your goals and measurable results.", icon: Target },
              { title: "Consistent & Scalable", text: "Design systems that stay consistent across platforms.", icon: Layers3 },
              { title: "Future-Ready", text: "Modern layouts that support growth and product evolution.", icon: Rocket },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="border-l-2 border-[#3C5B9B] pl-5">
                  <Icon size={28} className="mb-4 text-[#3C5B9B]" />
                  <h3 className="text-[20px] font-light">{item.title}</h3>
                  <p className="mt-2 text-[14px] font-light leading-[1.6] text-black/60">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* UI UX SERVICES */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Our UI/UX Design Services
              </p>
              <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Design services built around clarity and usability.
              </h2>
            </div>
            <p className="max-w-185 text-[16px] font-light leading-[1.7] text-black/65">
              From early research to polished interface design, we create
              digital products that are easy to use, visually consistent and
              ready for development.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-5">
            {designServices.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="border-t border-black/10 pt-7">
                  <Icon size={31} className="text-[#3C5B9B]" />
                  <h3 className="mt-5 text-[22px] font-light tracking-[-0.4px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-light leading-[1.65] text-black/65">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STUNNING SECTION */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Design Excellence
            </p>
            <h2 className="max-w-185 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              What Makes Our UI/UX Design and Development Services Stunning?
            </h2>
            <p className="mt-7 max-w-175 text-[16px] font-light leading-[1.85] text-black/65 md:text-[18px]">
              We blend excellence with user-centric functionality and modern
              design thinking to create interfaces that captivate, simplify
              user journeys and support meaningful business growth.
            </p>

            <div className="mt-12 overflow-hidden rounded-[28px] bg-[#f3f8fc] p-8 md:p-10">
              <div className="pointer-events-none absolute" />
              <h3 className="max-w-100 text-[28px] font-semibold leading-[1.18] tracking-[-0.7px] text-[#0b5f91] md:text-[34px]">
                Build a User-Centric Solution
              </h3>
              <a
                href="/contact"
                className="mt-8 inline-flex h-13 items-center justify-center gap-3 rounded-[10px] bg-[#3C5B9B] px-7 text-[15px] font-semibold text-white shadow-[0_14px_40px_rgba(60,91,155,0.22)] transition hover:bg-[#2f4a82]"
              >
                Get Expert Guidance
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div>
            {stunningItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`grid gap-6 py-8 md:grid-cols-[72px_1fr] ${
                    index !== 0 ? "border-t border-black/10" : "pt-0"
                  }`}
                >
                  <div className="flex h-15 w-15 items-center justify-center rounded-[18px] bg-white text-[#3C5B9B] shadow-[0_12px_35px_rgba(60,91,155,0.12)] ring-1 ring-[#3C5B9B]/15">
                    <Icon size={30} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-semibold tracking-[-0.5px] text-black">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[16px] font-light leading-[1.85] text-black/65 md:text-[18px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESIGN APPROACH
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative mx-auto flex h-80 w-80 items-center justify-center md:h-105 md:w-105">
            <div className="absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full border border-[#3C5B9B]/25 bg-white/70 md:h-64 md:w-64" />
            <div className="absolute bottom-0 left-4 h-52 w-52 rounded-full border border-[#3C5B9B]/25 bg-white/70 md:h-64 md:w-64" />
            <div className="absolute bottom-0 right-4 h-52 w-52 rounded-full border border-[#3C5B9B]/25 bg-white/70 md:h-64 md:w-64" />
            <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-[#3C5B9B] text-center text-[13px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_20px_55px_rgba(60,91,155,0.3)]">
              Great Experience
            </div>
          </div>

          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Our Design Approach
            </p>
            <h2 className="max-w-190 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              The perfect balance of user, business and technology.
            </h2>
            <p className="mt-5 max-w-180 text-[16px] font-light leading-[1.7] text-black/65">
              Great design happens at the intersection of user needs, business
              goals and technological feasibility.
            </p>

            <div className="mt-9 space-y-6">
              {designApproach.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-5 border-t border-black/10 pt-6">
                    <Icon size={26} className="mt-1 shrink-0 text-[#3C5B9B]" />
                    <div>
                      <h3 className="text-[20px] font-light">{item.title}</h3>
                      <p className="mt-2 text-[15px] font-light leading-[1.65] text-black/65">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}

      {/* DESIGN PROCESS */}
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
              Design Process
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] text-black md:text-[46px] lg:text-[54px]">
              Our UI/UX design process roadmap
            </h2>
            <p className="mx-auto mt-5 max-w-[980px] text-[16px] font-light leading-[1.7] text-black/65 md:text-[20px]">
              A structured design workflow from discovery to handoff, built to
              keep your product clear, consistent and development-ready.
            </p>
          </div>

          <div className="lg:hidden">
            <div className="space-y-5">
              {processSteps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="group relative rounded-[26px] border border-black/10 bg-white p-6">
                    {index !== processSteps.length - 1 && (
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
                <marker id="uiux-arrowhead" markerHeight="14" markerUnits="userSpaceOnUse" markerWidth="18" orient="auto" refX="16" refY="7">
                  <path d="M 0 0 L 18 7 L 0 14 z" fill="#3C5B9B" />
                </marker>
              </defs>
              <path d="M 392 43 L 1208 43" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#uiux-arrowhead)" />
              <path d="M 1294 43 C 1480 43 1515 150 1515 230 C 1515 318 1440 343 1294 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 1208 343 L 392 343" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#uiux-arrowhead)" />
              <path d="M 306 343 C 118 343 78 468 102 535 C 126 598 205 613 306 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#uiux-arrowhead)" />
              <path d="M 392 613 L 1208 613" stroke="#3C5B9B" strokeDasharray="10 12" strokeLinecap="round" strokeWidth="2.5" markerEnd="url(#uiux-arrowhead)" />
            </svg>

            {processLayout.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group absolute z-10 w-[390px] -translate-x-1/2 text-center" style={{ left: item.left, top: item.top }}>
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

      {/* TOOLS */}
      <section className="lazy-section bg-white px-5 py-20 text-[#161616] md:px-8 lg:px-12">
        <div className="mx-auto max-w-450">
          <div className="mb-14 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#3c5b9b]">
              Tools We Use
            </p>
            <h2 className="mx-auto max-w-210 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Design tools powering modern UI/UX experiences
            </h2>
            <p className="mx-auto mt-6 max-w-220 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              We use the right design, research and prototyping tools to create
              scalable interfaces, design systems and development-ready product
              experiences.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-24">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <button key={tab.value} type="button" onClick={() => setActiveTab(tab.value)} className={`relative pb-3 text-[17px] font-light leading-none tracking-[-0.2px] transition-all duration-300 md:text-[19px] ${isActive ? "text-[#161616]" : "text-[#8d8d8d] hover:text-[#3c5b9b]"}`}>
                  {tab.label}
                  <span className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#3c5b9b] transition-all duration-300 ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}`} />
                </button>
              );
            })}
          </div>

          <div className="mx-auto max-w-315">
            <div className="space-y-5 md:space-y-6">
              {[
                techStack[activeTab].slice(0, 4),
                techStack[activeTab].slice(4, 6),
              ].map((row, rowIndex) => (
                <div key={`${activeTab}-${rowIndex}`} className="flex flex-wrap items-center justify-center gap-y-5">
                  {row.map((item, index) => (
                    <div key={item.name} className={`group flex min-h-29.5 w-1/2 flex-col items-center justify-center px-5 py-4 text-center transition-all duration-300 hover:bg-[#f8faff] sm:w-1/3 md:w-37.5 lg:w-36.25 ${index !== row.length - 1 ? "md:border-r md:border-dotted md:border-[#bdbdbd]" : ""}`}>
                      <div className="flex h-11.5 w-full items-center justify-center">
                        <img src={item.icon} alt={item.name} loading="lazy" decoding="async" className="max-h-10 max-w-18.5 object-contain transition-all duration-300 group-hover:scale-105" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                      </div>
                      <h3 className="mt-4 text-[15px] font-light leading-[1.3] tracking-[-0.2px] text-[#3c5b9b] transition duration-300 group-hover:text-[#2f4a82] md:text-[16px]">
                        {item.name}
                      </h3>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <IndustriesSection />

      {/* WHY CHOOSE */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-450 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              Why Choose BrainADZ Live
            </p>
            <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              We design experiences around users, clarity and business impact.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="border-t border-black/10 pt-7">
                  <div className="flex items-center gap-4">
                    <Icon size={24} className="text-[#3C5B9B]" />
                    <span className="text-[13px] font-semibold text-[#3C5B9B]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[24px] font-light tracking-[-0.4px]">
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

      {/* CASE STUDIES */}
      <section className="bg-white px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
                Our Work
              </p>
              <h2 className="max-w-195 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
                Digital products designed for real user needs.
              </h2>
            </div>
            <Link href="/case-studies" className="inline-flex items-center gap-3 text-[14px] font-semibold text-[#3C5B9B]">
              View Case Studies <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-2 md:grid-cols-4">
            {caseStudies.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[10px] border border-black/10 bg-white shadow-[0_22px_70px_rgba(0,0,0,0.06)]">
                <div className="h-64 overflow-hidden bg-[#dde6f6] md:h-72">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="p-7 md:p-8">
                  <h3 className="text-[24px] font-light tracking-[-0.5px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-light leading-[1.7] text-black/65">
                    {item.text}
                  </p>
                  <Link href="/case-studies" className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-[#3C5B9B]">
                    View Case Study <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f6f8fc] px-5 py-18 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-450">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3C5B9B]">
              FAQ
            </p>
            <h2 className="mx-auto max-w-230 text-[34px] font-light leading-[1.15] tracking-[-1px] md:text-[46px]">
              Common questions about UI/UX design.
            </h2>
          </div>

          <div className="mx-auto grid max-w-330 gap-4 lg:grid-cols-2 lg:gap-5">
            {faqs.map((faq, index) => (
              <div key={faq.q} className={`group overflow-hidden rounded-[26px] border bg-white transition-all duration-300 ${openFaq === index ? "border-[#3C5B9B]/35 shadow-[0_22px_70px_rgba(60,91,155,0.12)]" : "border-black/10 shadow-[0_12px_42px_rgba(0,0,0,0.035)] hover:-translate-y-1 hover:border-[#3C5B9B]/25 hover:shadow-[0_18px_56px_rgba(60,91,155,0.08)]"}`}>
                <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6">
                  <span className="text-[16px] font-light leading-[1.45] text-black md:text-[17px]">
                    {faq.q}
                  </span>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition duration-300 ${openFaq === index ? "bg-[#3C5B9B] text-white" : "bg-white text-[#3C5B9B] group-hover:bg-[#3C5B9B]/10"}`}>
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
            <div className="hidden w-[32%] shrink-0 md:block">
              <img src="/about.avif" alt="BrainADZ Live UI UX Design" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-150">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Let’s design experiences that make an impact
                </h3>
                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Have a product idea? Let BrainADZ Live bring it to life with
                  thoughtful UI/UX design and development-ready systems.
                </p>
              </div>
              <a href="/contact" className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#3C5B9B] md:min-w-57.5">
                <span>Start Your Project</span>
                <span className="text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
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