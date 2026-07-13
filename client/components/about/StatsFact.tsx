"use client";

import {
  BriefcaseBusiness,
  Code2,
  MonitorSmartphone,
  PanelsTopLeft,
  PlugZap,
} from "lucide-react";
import StatsSection from "../home/Stats";

const services = [
  {
    title: "Software Services",
    description:
      "Custom software, mobile apps, web applications, SaaS products and enterprise systems built around business requirements.",
    icon: Code2,
    href: "/software-services",
  },
  {
    title: "Software Platforms",
    description:
      "CRM, ERP, signage applications, cloud signage software and interactive retail platforms.",
    icon: PanelsTopLeft,
    href: "/software-platforms",
  },
  {
    title: "Digital Signage Products",
    description:
      "Digital standees, kiosks, LFD displays, LED displays and interactive teaching displays for physical spaces.",
    icon: MonitorSmartphone,
    href: "/digital-signage-products",
  },
  {
    title: "Technology Consulting",
    description:
      "Planning for software, platforms, integrations, modernization and digital customer environments.",
    icon: BriefcaseBusiness,
    href: "/consulting",
  },
  {
    title: "Integration & Modernization",
    description:
      "Connect existing systems, improve older applications and prepare technology environments for future requirements.",
    icon: PlugZap,
    href: "/software-services/api-integration",
  },
];

export default function FastFacts() {
  return (
    <section className="bg-white">
      <div>
        {/* FAST FACTS */}
        <div>
          <StatsSection />
        </div>

        {/* TECHNOLOGY AND SERVICES */}
        <div className="mt-10 grid grid-cols-1 gap-12 px-5 text-[#161616] md:px-8 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16 lg:px-12">
          {/* LEFT TITLE */}
          <div data-aos="fade-right">
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
              What We Work Across
            </p>

            <h3 className="max-w-[470px] text-[38px] font-light leading-[1.12] tracking-[-1.6px] text-[#262626] md:text-[48px] lg:text-[54px]">
              One company, multiple connected technology capabilities
            </h3>

            <p className="mt-6 max-w-[540px] text-[16px] font-light leading-[1.7] text-[#525252] md:text-[18px]">
              Our work spans software development, business platforms, digital
              signage products and consulting, allowing us to look at projects
              beyond a single interface or technology.
            </p>
          </div>

          {/* RIGHT SERVICES */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group max-w-[360px]"
                  data-aos="card-reveal"
                  data-aos-delay={(index % 3) * 100}
                  data-aos-duration="520"
                >
                  <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#dbe3f0] bg-[#f8faff] text-[#193175] transition-all duration-300 group-hover:bg-[#193175] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.45} />
                  </div>

                  <h4 className="text-[18px] font-light leading-[1.35] tracking-[-0.3px] text-[#262626] transition duration-300 group-hover:text-[#193175] md:text-[20px]">
                    {service.title}
                  </h4>

                  <p className="mt-3 text-[15px] font-light leading-[1.65] tracking-[-0.1px] text-[#616161] md:text-[16px]">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}