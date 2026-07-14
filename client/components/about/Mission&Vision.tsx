"use client";

import { Eye, Target } from "lucide-react";

const cards = [
  {
    type: "Mission",
    title: "Turn business requirements into practical technology systems",
    description:
      "Our mission is to understand how businesses work and translate those requirements into software, platforms and digital experiences that are clear, usable and ready for real operations.",
    icon: Target,
    points: [
      "Understand the workflow before building",
      "Connect technology to practical requirements",
      "Deliver systems prepared for real use",
    ],
  },
  {
    type: "Vision",
    title: "Become a trusted partner for connected digital solutions",
    description:
      "Our vision is to help businesses bring software, platforms, integrations and physical digital experiences together through thoughtful technology planning and dependable delivery.",
    icon: Eye,
    points: [
      "Create better connected digital systems",
      "Support long-term technology decisions",
      "Build relationships beyond one project",
    ],
  },
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-[#f8faff] px-5 py-20 text-[#161616] md:px-4 lg:px-12">
      <div className="pointer-events-none absolute -right-40 -top-40 h-95 w-95 rounded-full bg-[#193175]/[0.07] blur-[70px]" />

      <div className="pointer-events-none absolute -bottom-45 -left-40 h-90 w-90 rounded-full bg-[#193175]/6 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-450">
        {/* HEADING */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div data-aos="fade-right">
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
              Mission & Vision
            </p>

            <h2 className="max-w-190 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              A clear purpose behind the technology we deliver
            </h2>
          </div>

          <p
            className="max-w-205 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            BrainADZ Live exists to make technology easier to understand,
            better connected to business requirements and more practical to
            operate after deployment.
          </p>
        </div>

        {/* MISSION VISION CARDS */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={card.type}
                data-aos="card-reveal"
                data-aos-delay={index * 120}
                data-aos-duration="520"
                className="group relative flex min-h-130 overflow-hidden rounded-[20px] border border-[#dfe6f1] bg-white p-8 shadow-[0_20px_70px_rgba(22,22,22,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_90px_rgba(22,22,22,0.08)] md:p-10 lg:p-12"
              >
                <div className="absolute -right-20 -top-20 h-55 w-55 rounded-full bg-[#193175]/[0.07] transition duration-500 group-hover:scale-125" />

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#193175] transition-all duration-500 group-hover:w-full" />

                <div className="relative z-10 flex w-full flex-col">
                  {/* TOP ROW */}
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                        {card.type}
                      </p>

                      <h3 className="mt-5 max-w-155 text-[32px] font-light leading-[1.15] tracking-[-1.2px] text-[#262626] md:text-[40px] lg:min-h-38 lg:text-[44px]">
                        {card.title}
                      </h3>
                    </div>

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#dbe3f0] bg-[#f8faff] text-[#193175] transition-all duration-300 group-hover:bg-[#193175] group-hover:text-white">
                      <Icon size={30} strokeWidth={1.45} />
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-7 max-w-180 text-[16px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[18px] lg:min-h-32.5">
                    {card.description}
                  </p>

                  {/* POINTS */}
                  <div className="mt-auto space-y-4 pt-8">
                    {card.points.map((point, pointIndex) => (
                      <div
                        key={point}
                        className="flex items-center gap-4 border-t border-[#e8edf5] pt-4 first:border-t-0 first:pt-0"
                      >
                        <span className="flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-full bg-[#193175]/10 text-[13px] font-light text-[#193175]">
                          {pointIndex + 1}
                        </span>

                        <p className="text-[15px] font-light leading-[1.6] text-[#616161] md:text-[16px]">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}