"use client";

import {
  Lightbulb,
  ShieldCheck,
  Users,
  Rocket,
  Target,
  Headphones,
} from "lucide-react";

const values = [
  {
    title: "Innovation",
    description:
      "We explore modern technologies, AI, automation, and digital systems to create smarter business solutions.",
    icon: Lightbulb,
  },
  {
    title: "Reliability",
    description:
      "We focus on stable, scalable, and dependable systems that businesses can trust for daily operations.",
    icon: ShieldCheck,
  },
  {
    title: "Collaboration",
    description:
      "We work closely with clients, partners, and teams to turn ideas into practical digital experiences.",
    icon: Users,
  },
  {
    title: "Growth Mindset",
    description:
      "We build solutions that support long-term growth, performance, and future-ready business transformation.",
    icon: Rocket,
  },
  {
    title: "Business Focus",
    description:
      "Every solution is designed around real business needs, customer experience, and measurable outcomes.",
    icon: Target,
  },
  {
    title: "Support First",
    description:
      "From planning to deployment, we stay connected with clients through clear communication and support.",
    icon: Headphones,
  },
];

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 text-[#161616] md:px-8 lg:px-12 lg:py-20">
      {/* SOFT BACKGROUND PATTERN */}
      <div className="pointer-events-none absolute -right-45 -top-40 h-105 w-105 rounded-full bg-[#3c5b9b]/6 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-45 -left-37.5 h-90 w-90 rounded-full bg-[#3c5b9b]/4.5 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-450">
        {/* HEADING */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div data-aos="fade-right">
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
              Core Values
            </p>

            <h2 className="max-w-190 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Values that guide how we build, deliver, and support technology
            </h2>
          </div>

          <p
            className="max-w-205 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Our values shape every project we deliver — from software and AI to
            smart displays, automation, hardware integration, and long-term
            business support.
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
                {/* CARD BACKGROUND EFFECT */}
                <div className="absolute -right-13.75 -top-13.75 h-37.5 w-37.5 rounded-full bg-[#3c5b9b]/[0.07] transition duration-500 group-hover:scale-125" />


                {/* ICON */}
                <div className="relative z-10 flex h-14.5 w-14.5 items-center justify-center rounded-full border border-[#dbe3f0] bg-white text-[#3c5b9b] transition-all duration-300 group-hover:bg-[#3c5b9b] group-hover:text-white">
                  <Icon size={28} strokeWidth={1.45} />
                </div>

                {/* CONTENT */}
                <h3 className="relative z-10 mt-8 text-[24px] font-light leading-[1.3] tracking-[-0.5px] text-[#262626] transition duration-300 group-hover:text-[#3c5b9b] md:text-[26px]">
                  {value.title}
                </h3>

                <p className="relative z-10 mt-4 max-w-107.5 text-[15px] font-light leading-[1.75] text-[#616161] md:text-[16px]">
                  {value.description}
                </p>

                {/* HOVER LINE */}
                <span className="absolute bottom-0 left-0 h-0.75 w-0 bg-[#3c5b9b] transition-all duration-500 group-hover:w-full" />
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
            At BrainADZ Live, technology is not only about building systems. It
            is about creating dependable digital experiences that help
            businesses communicate better, operate smarter, and grow with
            confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
