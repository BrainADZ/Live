"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useState } from "react";
import PopupForm from "@/components/PopupForm";

type Service = {
  title: string;
  description: string;
  iconSrc: string;
  href: string;
};

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

const services: Service[] = [
  {
    title: "Software Development",
    description:
      "Custom software for operations, internal teams, workflow automation, dashboards and connected business processes.",
    iconSrc: "/software-services/home/software-development.svg",
    href: "/software-services/software-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Android, iOS and cross-platform apps with user-focused interfaces, backend APIs, integrations and admin controls.",
    iconSrc: "/software-services/home/mobile-app-development.svg",
    href: "/software-services/mobile-app-development",
  },
  {
    title: "Application Modernization",
    description:
      "Improve existing applications through UI upgrades, code modernization, architecture changes, integrations and cloud readiness.",
    iconSrc: "/software-services/home/application-modernization.svg",
    href: "/software-services/application-modernization",
  },
  {
    title: "Web App Development",
    description:
      "Browser-based applications, portals and dashboards built around workflows, responsive interfaces, APIs and business data.",
    iconSrc: "/software-services/home/web-app-development.svg",
    href: "/software-services/web-app-development",
  },
  {
    title: "Enterprise Software Solutions",
    description:
      "Custom platforms for multi-team operations, role-based workflows, internal processes, reporting and connected systems.",
    iconSrc: "/software-services/home/enterprise-software-solutions.svg",
    href: "/software-services/enterprise-software-solutions",
  },
  {
    title: "API Integration",
    description:
      "Connect applications, CRM, ERP, payments, logistics and third-party platforms through secure APIs and reliable data flows.",
    iconSrc: "/software-services/home/api-integration.svg",
    href: "/software-services/api-integration",
  },
  {
    title: "CRM Development",
    description:
      "CRM platforms for leads, follow-ups, sales pipelines, customer history, tasks, reporting and business integrations.",
    iconSrc: "/software-services/home/crm-development.svg",
    href: "/software-services/crm-development",
  },
  {
    title: "ERP Development",
    description:
      "ERP systems that connect sales, purchase, inventory, finance, teams, approvals and reporting across daily operations.",
    iconSrc: "/software-services/home/erp-development.svg",
    href: "/software-services/erp-development",
  },
  {
    title: "UI/UX Design",
    description:
      "User research, flows, wireframes, interface design, prototypes and design systems prepared for product development.",
    iconSrc: "/software-services/home/ui-ux-design.svg",
    href: "/software-services/ui-ux-design",
  },
  {
    title: "SaaS Development",
    description:
      "SaaS platforms with accounts, roles, subscriptions, billing integration, admin tools and scalable product architecture.",
    iconSrc: "/software-services/home/saas-development.svg",
    href: "/software-services/saas-development",
  },
  {
    title: "Cloud Consulting",
    description:
      "Cloud assessment, strategy, migration, architecture, security, optimization and ongoing infrastructure support.",
    iconSrc: "/software-services/home/cloud-consulting.svg",
    href: "/software-services/cloud-consulting",
  },
];

export default function SoftwareServicesPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#161616]">
      {/* HERO */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/software-services.webp"
          alt="Software Services"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-4 lg:min-h-135 lg:px-12">
          <div className="flex items-center gap-3 text-[16px] font-light md:text-[18px]">
            <Link href="/" className="text-[#6da0ff] hover:underline">
              Home
            </Link>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Software Services</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Software services built around real business needs
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              From custom software and mobile apps to CRM, ERP, SaaS,
              integrations and cloud consulting, we build around your users,
              workflows and existing technology.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-4 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Enquire Now
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SOFTWARE SERVICES */}
      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-4 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -right-45 -top-40 h-105 w-105 rounded-full bg-[#193175]/[0.07] blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-450">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                About Software Services
              </p>

              <h2 className="max-w-190 text-[38px] font-normal leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Plan, build and improve software around the way your business
                works
              </h2>

              <p className="mt-7 max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
                BrainADZ Live provides 11 software services covering product
                design, custom development, mobile and web applications,
                modernization, integrations, business platforms and cloud
                consulting. Each engagement starts with understanding your
                users, workflows, data and existing systems instead of forcing a
                fixed template.
              </p>

              <p className="mt-5 max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
                We can help you launch a new product, replace manual processes,
                connect disconnected systems, improve an existing application
                or extend software as your requirements change.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-[#f8faff] shadow-[0_24px_80px_rgba(22,22,22,0.06)]">
              <div className="absolute inset-0 flex items-center justify-center text-[15px] font-light text-[#8d8d8d]">
                Software services image will appear here
              </div>

              <img
                src="/overview/software-service.webp"
                alt="Software services by BrainADZ Live"
                className="relative z-10 h-90 w-full object-cover md:h-130"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0)_45%,rgba(60,91,155,0.10)_100%)]" />
            </div>
          </div>
        </div>
      </section>

      {/* SOFTWARE SERVICES STATS */}
      <section className="bg-[#f8faff] px-5 py-16 md:px-4 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-450">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              { value: "11", label: "Software service areas" },
              { value: "360°", label: "Discovery to deployment support" },
              { value: "API", label: "Connected systems and integrations" },
              {
                value: "Cloud",
                label: "Strategy, migration and optimization",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[18px] border border-[#dfe6f1] bg-white p-7 shadow-[0_18px_60px_rgba(22,22,22,0.045)]"
              >
                <p className="text-[42px] font-light leading-none tracking-[-1.5px] text-[#193175] md:text-[52px]">
                  {item.value}
                </p>

                <p className="mt-4 text-[15px] font-light leading-[1.6] text-[#616161] md:text-[16px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-4 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -right-45 -top-40 h-105 w-105 rounded-full bg-[#193175]/[0.07] blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-450">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                Explore Services
              </p>

              <h2 className="max-w-190 text-[38px] font-normal leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Software services for new products, existing systems and
                business operations
              </h2>
            </div>

            <p className="max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
              Whether you are building from scratch, modernizing an existing
              application, connecting systems or improving internal workflows,
              choose the service that fits the problem you need to solve.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {services.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                aria-label={`Explore ${item.title}`}
                className="group grid min-h-57.5 cursor-pointer grid-cols-1 gap-6 rounded-[18px] border border-[#dfe6f1] bg-white p-7 shadow-[0_18px_60px_rgba(22,22,22,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cbd7ea] hover:shadow-[0_24px_75px_rgba(22,22,22,0.075)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193175] focus-visible:ring-offset-3 md:grid-cols-[88px_1fr] md:p-8"
              >
                <div className="manual-icon-box flex h-16 w-16 items-center justify-center rounded-full bg-[#193175]/10 p-4">
  <img
    src={item.iconSrc}
    alt=""
    aria-hidden="true"
    className="manual-icon object-contain"
  />
</div>
                <div>
                  <h3 className="text-[25px] font-normal leading-[1.22] tracking-[-0.6px] text-[#262626] transition-colors duration-300 group-hover:text-[#193175] md:text-[28px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] font-light leading-[1.75] text-[#616161] md:text-[16px]">
                    {item.description}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-3 text-[15px] font-light text-[#193175]">
                    Explore service

                    <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
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
                src="/CTA/cta.webp"
                alt="BrainADZ Live Software Services"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-145">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Need the right software service for your business?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Tell us what you are building, replacing or trying to improve.
                  BrainADZ Live can help across design, development, integration,
                  modernization and cloud.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#193175] md:min-w-57.5"
              >
                <span>Enquire Now</span>

                <ArrowRightIcon className="h-6.5 w-6.5 transition-transform duration-300 group-hover:translate-x-1" />
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