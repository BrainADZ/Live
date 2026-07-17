/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Database,
  Layers3,
  MonitorSmartphone,
  Search,
  Workflow,
} from "lucide-react";
import PopupForm from "@/components/PopupForm";

type CaseStudyCategory =
  | "All Case Studies"
  | "Software & Apps"
  | "CRM & ERP"
  | "Digital Signage"
  | "Customer Experience";

type CaseStudy = {
  title: string;
  summary: string;
  category: Exclude<CaseStudyCategory, "All Case Studies">;
  industry: string;
  image: string;
  href: string;
  services: string[];
};

const categories: CaseStudyCategory[] = [
  "All Case Studies",
  "Software & Apps",
  "CRM & ERP",
  "Digital Signage",
  "Customer Experience",
];

const featuredCaseStudy: CaseStudy = {
  title: "Building a Connected CRM Platform for a Growing Retail Operation",
  summary:
    "A centralized CRM platform designed to bring lead tracking, customer history, follow-ups and team visibility into one connected workflow.",
  category: "CRM & ERP",
  industry: "Retail",
  image: "/case-studies/featured-retail-crm.jpg",
  href: "/case-studies/retail-crm-platform",
  services: ["CRM Development", "UI/UX Design", "API Integration"],
};

const caseStudies: CaseStudy[] = [
  {
    title: "Retail CRM Platform for Connected Sales Follow-Ups",
    summary:
      "A CRM experience designed around lead ownership, customer history, follow-up activity and sales visibility.",
    category: "CRM & ERP",
    industry: "Retail",
    image: "/case-studies/retail-crm-platform.jpg",
    href: "/case-studies/retail-crm-platform",
    services: ["CRM Development", "UI/UX Design"],
  },
  {
    title: "Manufacturing ERP for Purchase, Inventory and Operations",
    summary:
      "An ERP workflow bringing purchasing, stock movement, approvals and operational reporting into one system.",
    category: "CRM & ERP",
    industry: "Manufacturing",
    image: "/case-studies/manufacturing-erp.jpg",
    href: "/case-studies/manufacturing-erp-system",
    services: ["ERP Development", "API Integration"],
  },
  {
    title: "Service Operations Dashboard for Daily Team Coordination",
    summary:
      "A role-based admin platform for managing requests, assignments, status updates and internal operational visibility.",
    category: "Software & Apps",
    industry: "Business Services",
    image: "/case-studies/service-admin-dashboard.jpg",
    href: "/case-studies/service-operations-dashboard",
    services: ["Web App Development", "UI/UX Design"],
  },
  {
    title: "Hospitality Booking and Availability Management Platform",
    summary:
      "A booking workflow connecting availability, reservations and operational information for a hospitality environment.",
    category: "Software & Apps",
    industry: "Travel & Hospitality",
    image: "/case-studies/hospitality-booking-platform.jpg",
    href: "/case-studies/hospitality-booking-platform",
    services: ["Software Development", "API Integration"],
  },
  {
    title: "Cloud Signage Management Across Multiple Locations",
    summary:
      "A centralized content workflow for publishing and managing screen content across distributed display locations.",
    category: "Digital Signage",
    industry: "Multi-Location Business",
    image: "/case-studies/cloud-signage-network.jpg",
    href: "/case-studies/cloud-signage-network",
    services: ["Cloud Signage Software", "Digital Signage"],
  },
  {
    title: "Self-Ordering Kiosk Experience for Faster Customer Journeys",
    summary:
      "A customer-facing kiosk flow covering menu discovery, selection, order confirmation and connected system handoff.",
    category: "Customer Experience",
    industry: "Food & Beverage",
    image: "/case-studies/self-ordering-kiosk.jpg",
    href: "/case-studies/self-ordering-kiosk-experience",
    services: ["Kiosk Experience", "UI/UX Design"],
  },
  {
    title: "Mobile Field Operations App for On-the-Go Teams",
    summary:
      "A mobile-first workflow designed for task updates, field activity, status visibility and connected back-office operations.",
    category: "Software & Apps",
    industry: "Field Services",
    image: "/case-studies/mobile-field-operations.jpg",
    href: "/case-studies/mobile-field-operations-app",
    services: ["Mobile App Development", "API Integration"],
  },
  {
    title: "Modernizing a Legacy Business Application",
    summary:
      "A structured modernization effort focused on ageing interfaces, maintainability, workflow clarity and future integration needs.",
    category: "Software & Apps",
    industry: "Enterprise Operations",
    image: "/case-studies/application-modernization.jpg",
    href: "/case-studies/application-modernization",
    services: ["Application Modernization", "Cloud Consulting"],
  },
  {
    title: "API Integration Layer for Connected Business Systems",
    summary:
      "A connected integration approach defining data flow, triggers, ownership and failure handling between business applications.",
    category: "Software & Apps",
    industry: "Business Operations",
    image: "/case-studies/api-integration-layer.jpg",
    href: "/case-studies/api-integration-layer",
    services: ["API Integration", "Solution Architecture"],
  },
  {
    title: "SaaS Customer Portal for Self-Service Workflows",
    summary:
      "A web-based customer portal bringing account activity, requests, updates and shared information into one experience.",
    category: "Customer Experience",
    industry: "SaaS",
    image: "/case-studies/saas-customer-portal.jpg",
    href: "/case-studies/saas-customer-portal",
    services: ["SaaS Development", "UI/UX Design"],
  },
  {
    title: "Interactive Product Discovery for a Retail Environment",
    summary:
      "A customer-facing digital experience designed to help visitors explore products and interact with visual content in-store.",
    category: "Customer Experience",
    industry: "Retail",
    image: "/case-studies/interactive-product-discovery.jpg",
    href: "/case-studies/interactive-product-discovery",
    services: ["Virtual Trial Room", "Interactive Experience"],
  },
  {
    title: "Inventory and Warehouse Workflow System",
    summary:
      "A connected workflow for stock visibility, movement, receiving and internal coordination across warehouse operations.",
    category: "CRM & ERP",
    industry: "Distribution",
    image: "/case-studies/inventory-warehouse-system.jpg",
    href: "/case-studies/inventory-warehouse-system",
    services: ["ERP Development", "Web App Development"],
  },
];

const capabilityCards = [
  {
    title: "Software & Product Delivery",
    description:
      "Custom applications, portals, mobile products and modernization projects shaped around a real workflow.",
    icon: Layers3,
  },
  {
    title: "Connected Business Platforms",
    description:
      "CRM, ERP and integrated business systems designed to reduce disconnected processes and improve visibility.",
    icon: Database,
  },
  {
    title: "Digital Experience Systems",
    description:
      "Signage, kiosks and customer-facing digital experiences created for physical environments and distributed locations.",
    icon: MonitorSmartphone,
  },
];

const engagementSteps = [
  {
    number: "01",
    title: "Understand the operating problem",
    description:
      "We start with users, workflows, existing systems and the decisions the project needs to support.",
  },
  {
    number: "02",
    title: "Define the product and system scope",
    description:
      "We shape the right combination of interfaces, platform logic, integrations and implementation priorities.",
  },
  {
    number: "03",
    title: "Build and validate the working experience",
    description:
      "Design, development and quality checks move together around the real workflow instead of isolated features.",
  },
  {
    number: "04",
    title: "Deploy with room to improve",
    description:
      "The final solution is prepared for rollout, operational use and future changes as the requirement evolves.",
  },
];

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] =
    useState<CaseStudyCategory>("All Case Studies");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const filteredCaseStudies = caseStudies.filter((caseStudy) => {
    const matchesCategory =
      activeCategory === "All Case Studies" ||
      caseStudy.category === activeCategory;

    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      caseStudy.title.toLowerCase().includes(query) ||
      caseStudy.summary.toLowerCase().includes(query) ||
      caseStudy.category.toLowerCase().includes(query) ||
      caseStudy.industry.toLowerCase().includes(query) ||
      caseStudy.services.some((service) =>
        service.toLowerCase().includes(query),
      );

    return matchesCategory && matchesSearch;
  });

  const visibleCaseStudies = filteredCaseStudies.slice(0, visibleCount);
  const hasMoreCaseStudies = visibleCount < filteredCaseStudies.length;

  return (
    <main className="bg-white text-[#161616]">
      {/* HERO */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/case-studies.jpg"
          alt="BrainADZ Live Case Studies"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.8)_32%,rgba(0,0,0,0.46)_60%,rgba(0,0,0,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-4 lg:min-h-135 lg:px-12">
          <div
            className="flex items-center gap-3 text-[16px] font-light md:text-[18px]"
            data-aos="fade-up"
          >
            <Link href="/" className="text-[#6da0ff] hover:underline">
              Home
            </Link>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Case Studies</span>
          </div>

          <div
            className="mt-12 max-w-240 md:mt-14"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="mb-5 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#8fb1ff]">
              BrainADZ Live Case Studies
            </p>

            <h1 className="text-[38px] font-semibold leading-[1.08] tracking-[-1.5px] text-white md:text-[48px] lg:text-[58px]">
              See how technology takes shape around real business workflows
            </h1>
          </div>

          <div
            className="mt-auto pb-8 md:pb-9 lg:pb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="max-w-220 text-[14px] font-light leading-normal tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Explore project stories across software, CRM, ERP, digital
              signage and customer-facing experiences. Each case study focuses
              on the problem, the solution approach and the workflow behind the
              final system.
            </p>

            <div className="mt-8">
              <a
                href="#case-studies"
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-4 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Explore Case Studies
                <ArrowRight size={20} strokeWidth={1.8} className="text-[20px] leading-none" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="bg-white px-5 py-20 md:px-4 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#193175]">
                Featured Case Study
              </p>

              <h2 className="text-[40px] font-normal leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[52px] lg:text-[60px]">
                One project, viewed from problem to working system
              </h2>
            </div>

            <p className="max-w-190 text-[17px] font-light leading-[1.75] text-[#525252] md:text-[19px]">
              The best case studies show more than the final interface. They
              explain the operational problem, the system decisions and how
              the solution was shaped around real users and workflows.
            </p>
          </div>

          <Link
            href={featuredCaseStudy.href}
            className="group grid overflow-hidden rounded-[20px] border border-[#dfe6f1] bg-[#f8faff] lg:grid-cols-[1.05fr_0.95fr]"
            data-aos="fade-up"
          >
            <div className="relative min-h-100 overflow-hidden bg-[#e9eef7] lg:min-h-155">
              <div className="absolute inset-0 flex items-center justify-center text-[15px] font-light text-[#8d8d8d]">
                Featured case study image
              </div>

              <img
                src={featuredCaseStudy.image}
                alt={featuredCaseStudy.title}
                className="relative z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-14">
              <div className="flex flex-wrap items-center gap-3 text-[13px] font-light">
                <span className="rounded-full bg-[#193175] px-4 py-2 text-white">
                  {featuredCaseStudy.category}
                </span>

                <span className="rounded-full border border-[#dfe6f1] bg-white px-4 py-2 text-[#616161]">
                  {featuredCaseStudy.industry}
                </span>
              </div>

              <h3 className="mt-8 max-w-190 text-[32px] font-normal leading-[1.12] tracking-[-1.1px] text-[#262626] transition group-hover:text-[#193175] md:text-[44px]">
                {featuredCaseStudy.title}
              </h3>

              <p className="mt-6 max-w-180 text-[16px] font-light leading-[1.8] text-[#616161] md:text-[18px]">
                {featuredCaseStudy.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {featuredCaseStudy.services.map((service) => (
                  <span
                    key={service}
                    className="border border-[#dfe6f1] bg-white px-3.5 py-2 text-[13px] font-light text-[#525252]"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <span className="mt-10 inline-flex items-center gap-3 text-[15px] font-medium text-[#193175]">
                Read Case Study
                <ArrowRight
                  size={19}
                  className="transition group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section
        id="case-studies"
        className="scroll-mt-24 bg-[#f8faff] px-5 py-20 md:px-4 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#193175]">
                Project Library
              </p>

              <h2 className="text-[38px] font-normal leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Explore case studies by solution area
              </h2>
            </div>

            <div className="flex flex-col gap-5 lg:items-end">
              <div className="relative w-full max-w-145">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b7280]"
                />

                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => {
                    setSearchQuery(event.target.value);
                    setVisibleCount(6);
                  }}
                  placeholder="Search case studies"
                  className="h-13.5 w-full rounded-full border border-[#dfe6f1] bg-white pl-12 pr-5 text-[15px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#193175]"
                />
              </div>
            </div>
          </div>

          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleCount(6);
                  }}
                  className={`rounded-full border px-5 py-2.5 text-[14px] font-light transition ${
                    isActive
                      ? "border-[#193175] bg-[#193175] text-white"
                      : "border-[#dfe6f1] bg-white text-[#525252] hover:border-[#193175] hover:text-[#193175]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {filteredCaseStudies.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visibleCaseStudies.map((caseStudy) => (
                <Link
                  key={caseStudy.title}
                  href={caseStudy.href}
                  className="group overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#cbd7ea] hover:shadow-[0_24px_75px_rgba(22,22,22,0.075)]"
                >
                  <div className="relative h-64 overflow-hidden bg-[#eef2f8]">
                    <div className="absolute inset-0 flex items-center justify-center text-[14px] font-light text-[#8d8d8d]">
                      Case study image
                    </div>

                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="relative z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3 text-[13px] font-light">
                      <span className="text-[#193175]">
                        {caseStudy.category}
                      </span>

                      <span className="text-[#616161]">
                        {caseStudy.industry}
                      </span>
                    </div>

                    <h3 className="mt-5 text-[24px] font-normal leading-[1.28] tracking-[-0.6px] text-[#262626] transition group-hover:text-[#193175]">
                      {caseStudy.title}
                    </h3>

                    <p className="mt-4 text-[15px] font-light leading-[1.75] text-[#616161]">
                      {caseStudy.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {caseStudy.services.slice(0, 2).map((service) => (
                        <span
                          key={service}
                          className="bg-[#f3f6fb] px-3 py-1.5 text-[12px] font-light text-[#525252]"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <span className="mt-7 inline-flex items-center gap-3 text-[14px] font-medium text-[#193175]">
                      View Case Study
                      <ArrowRight
                        size={17}
                        className="transition group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-[18px] border border-[#dfe6f1] bg-white px-6 py-16 text-center">
              <Workflow
                size={36}
                strokeWidth={1.5}
                className="mx-auto text-[#193175]"
              />

              <h3 className="mt-5 text-[24px] font-normal text-[#262626]">
                No case studies found
              </h3>

              <p className="mx-auto mt-3 max-w-130 text-[15px] font-light leading-[1.7] text-[#616161]">
                Try another search term or switch back to all case studies.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All Case Studies");
                  setVisibleCount(6);
                }}
                className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-[#193175]"
              >
                Clear Filters
                <ArrowRight size={16} />
              </button>
            </div>
          )}

          {filteredCaseStudies.length > 0 && hasMoreCaseStudies && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() =>
                  setVisibleCount((currentCount) =>
                    Math.min(currentCount + 6, filteredCaseStudies.length),
                  )
                }
                className="group inline-flex h-13.5 min-w-52 items-center justify-between rounded-sm border border-[#193175] px-6 text-[15px] font-medium text-[#193175] transition-all duration-300 hover:bg-[#193175] hover:text-white"
              >
                <span>Load More Projects</span>

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* WHAT THE CASE STUDIES COVER */}
      <section className="bg-white px-5 py-20 md:px-4 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#193175]">
                What These Stories Cover
              </p>

              <h2 className="text-[38px] font-normal leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Different project types, one focus on practical delivery
              </h2>
            </div>

            <p className="max-w-190 text-[17px] font-light leading-[1.75] text-[#525252] md:text-[19px]">
              Our case study library is organized around the kind of work being
              delivered, so visitors can quickly understand the challenge,
              solution structure and technology direction closest to their own
              requirement.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {capabilityCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border border-[#dfe6f1] bg-[#f8faff] p-8"
                  data-aos="fade-up"
                >
                  <div className="flex h-14 w-14 items-center justify-center bg-[#193175]/10 text-[#193175]">
                    <Icon size={27} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-8 text-[25px] font-normal leading-tight tracking-[-0.5px] text-[#262626]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] font-light leading-[1.75] text-[#616161]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-450 px-4 lg:px-10">
          <div className="flex min-h-65 overflow-hidden bg-[#193175] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/CTA/home-cta.png"
                alt="Discuss a project with BrainADZ Live"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-155">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Have a project that could become the next case study?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Share the workflow, business problem or customer experience
                  you want to improve. We can help you understand the right
                  software, platform or digital solution approach.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#193175] md:min-w-57.5"
              >
                <span>Discuss Your Project</span>

                <ArrowRight size={26} strokeWidth={1.8} className="text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1" />
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
