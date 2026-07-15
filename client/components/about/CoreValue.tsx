"use client";

import {
  BriefcaseBusiness,
  CircleCheckBig,
  GitBranch,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

const values = [
  {
    title: "Business-First Thinking",
    description:
      "We start with the business problem, user workflow and operating requirement before choosing the technology.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Clarity in Delivery",
    description:
      "We believe responsibilities, project scope, priorities and decisions should remain clear throughout delivery.",
    icon: CircleCheckBig,
  },
  {
    title: "Built for Real Use",
    description:
      "A solution should work for the people using it every day, not only look impressive during a presentation.",
    icon: Users,
  },
  {
    title: "Connected Thinking",
    description:
      "Software, platforms, integrations and physical technology should work together instead of creating isolated systems.",
    icon: GitBranch,
  },
  {
    title: "Scalable Decisions",
    description:
      "We make architecture and product decisions with future changes, integrations and operational growth in mind.",
    icon: Scale,
  },
  {
    title: "Responsible Delivery",
    description:
      "We take ownership of quality, communication and the practical requirements needed to move a project into real use.",
    icon: ShieldCheck,
  },
];

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 text-[#161616] md:px-4 lg:px-12 lg:py-20">
      <div className="pointer-events-none absolute -right-45 -top-40 h-105 w-105 rounded-full bg-[#193175]/6 blur-[80px]" />

      <div className="pointer-events-none absolute -bottom-45 -left-37.5 h-90 w-90 rounded-full bg-[#193175]/4.5 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-450">
        {/* HEADING */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div data-aos="fade-right">
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
              Core Values
            </p>

            <h2 className="max-w-190 text-[38px] font-normal leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Principles that shape how we plan, build and deliver
            </h2>
          </div>

          <p
            className="max-w-205 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Our values are reflected in the way we understand requirements,
            make technology decisions, work with project teams and prepare
            solutions for real business use.
          </p>
        </div>

        {/* VALUES GRID */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                data-aos="card-reveal"
                data-aos-delay={(index % 3) * 100}
                data-aos-duration="520"
                className="group relative min-h-70 overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-[#f8faff] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_70px_rgba(22,22,22,0.07)] md:p-8"
              >
                <div className="absolute -right-13.75 -top-13.75 h-37.5 w-37.5 rounded-full bg-[#193175]/[0.07] transition duration-500 group-hover:scale-125" />

                <div className="relative z-10 flex h-14.5 w-14.5 items-center justify-center rounded-full border border-[#dbe3f0] bg-white text-[#193175] transition-all duration-300 group-hover:bg-[#193175] group-hover:text-white">
                  <Icon size={28} strokeWidth={1.45} />
                </div>

                <h3 className="relative z-10 mt-8 text-[24px] font-normal leading-[1.3] tracking-[-0.5px] text-[#262626] transition duration-300 group-hover:text-[#193175] md:text-[26px]">
                  {value.title}
                </h3>

                <p className="relative z-10 mt-4 max-w-107.5 text-[15px] font-light leading-[1.75] text-[#616161] md:text-[16px]">
                  {value.description}
                </p>

                <span className="absolute bottom-0 left-0 h-0.75 w-0 bg-[#193175] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* BOTTOM STRIP */}
        <div
          className="mt-6 rounded-[18px] border border-[#dfe6f1] bg-[#f8faff] p-7 md:p-8"
          data-aos="fade-up"
        >
          <p className="max-w-275 text-[18px] font-light leading-[1.7] tracking-[-0.3px] text-[#525252] md:text-[21px]">
            For us, good technology is not defined by the number of features it
            includes. It is defined by how clearly it supports the people,
            processes and decisions behind the business.
          </p>
        </div>
      </div>
    </section>
  );
}