"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useState } from "react";
import PopupForm from "@/components/PopupForm";

type IconType =
  | "code"
  | "mobile"
  | "modern"
  | "web"
  | "enterprise"
  | "api"
  | "crm"
  | "erp"
  | "design"
  | "saas"
  | "cloud";

type Service = {
  title: string;
  description: string;
  icon: IconType;
};

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function ServiceIcon({
  type,
  className,
}: {
  type: IconType;
  className?: string;
}) {
  if (type === "mobile") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    );
  }

  if (type === "api") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M8 8H6a4 4 0 0 0 0 8h2" />
        <path d="M16 8h2a4 4 0 0 1 0 8h-2" />
        <path d="M9 12h6" />
      </svg>
    );
  }

  if (type === "design") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5z" />
      </svg>
    );
  }

  if (type === "cloud" || type === "saas") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M17.5 18H8a5 5 0 1 1 1.1-9.88A6.5 6.5 0 0 1 21 12.5 3.5 3.5 0 0 1 17.5 18z" />
      </svg>
    );
  }

  if (type === "enterprise" || type === "erp") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" />
        <path d="M17 9h1a2 2 0 0 1 2 2v10" />
        <path d="M8 7h5" />
        <path d="M8 11h5" />
        <path d="M8 15h5" />
      </svg>
    );
  }

  if (type === "crm") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4" />
        <path d="M16 11l2 2 4-5" />
        <path d="M17 21v-4a3 3 0 0 0-3-3h-1" />
      </svg>
    );
  }

  if (type === "modern") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M4 4h16v6H4z" />
        <path d="M4 14h7v6H4z" />
        <path d="M15 14h5v6h-5z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8 9 4 12l4 3" />
      <path d="M16 9l4 3-4 3" />
      <path d="M14 5l-4 14" />
    </svg>
  );
}

const services: Service[] = [
  {
    title: "Software Development",
    description:
      "Custom software for operations, internal teams, workflow automation, dashboards and connected business processes.",
    icon: "code",
  },
  {
    title: "Mobile App Development",
    description:
      "Android, iOS and cross-platform apps with user-focused interfaces, backend APIs, integrations and admin controls.",
    icon: "mobile",
  },
  {
    title: "Application Modernization",
    description:
      "Improve existing applications through UI upgrades, code modernization, architecture changes, integrations and cloud readiness.",
    icon: "modern",
  },
  {
    title: "Web App Development",
    description:
      "Browser-based applications, portals and dashboards built around workflows, responsive interfaces, APIs and business data.",
    icon: "web",
  },
  {
    title: "Enterprise Software Solutions",
    description:
      "Custom platforms for multi-team operations, role-based workflows, internal processes, reporting and connected systems.",
    icon: "enterprise",
  },
  {
    title: "API Integration",
    description:
      "Connect applications, CRM, ERP, payments, logistics and third-party platforms through secure APIs and reliable data flows.",
    icon: "api",
  },
  {
    title: "CRM Development",
    description:
      "CRM platforms for leads, follow-ups, sales pipelines, customer history, tasks, reporting and business integrations.",
    icon: "crm",
  },
  {
    title: "ERP Development",
    description:
      "ERP systems that connect sales, purchase, inventory, finance, teams, approvals and reporting across daily operations.",
    icon: "erp",
  },
  {
    title: "UI/UX Design",
    description:
      "User research, flows, wireframes, interface design, prototypes and design systems prepared for product development.",
    icon: "design",
  },
  {
    title: "SaaS Development",
    description:
      "SaaS platforms with accounts, roles, subscriptions, billing integration, admin tools and scalable product architecture.",
    icon: "saas",
  },
  {
    title: "Cloud Consulting",
    description:
      "Cloud assessment, strategy, migration, architecture, security, optimization and ongoing infrastructure support.",
    icon: "cloud",
  },
];

export default function SoftwareServicesPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#161616]">
      {/* HERO */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/software-service.jpg"
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
                <span className="text-[20px] leading-none">↗</span>
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

              <h2 className="max-w-190 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
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
                src="/solutions/software-services-about.jpg"
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

              <h2 className="max-w-190 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
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
              <div
                key={item.title}
                className="group grid min-h-57.5 grid-cols-1 gap-6 rounded-[18px] border border-[#dfe6f1] bg-white p-7 shadow-[0_18px_60px_rgba(22,22,22,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cbd7ea] hover:shadow-[0_24px_75px_rgba(22,22,22,0.075)] md:grid-cols-[88px_1fr] md:p-8"
              >
                <div className="flex h-18 w-18 items-center justify-center rounded-[18px] border border-[#dbe3f0] bg-[#f8faff] text-[#193175] transition-all duration-300 group-hover:bg-[#193175] group-hover:text-white">
                  <ServiceIcon type={item.icon} className="h-9 w-9" />
                </div>

                <div>
                  <h3 className="text-[25px] font-light leading-[1.22] tracking-[-0.6px] text-[#262626] transition group-hover:text-[#193175] md:text-[28px]">
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
                src="/CTA/SoftwareService-CTA.jpg"
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
