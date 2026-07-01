"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

type TimelineItem = {
  year: string;
  bigYear: string;
  title: string;
  description: string;
  image: string;
};

const timelineData: TimelineItem[] = [
  {
    year: "2014",
    bigYear: "2014",
    title: "Foundation of digital thinking",
    description:
      "BrainADZ Live began with a clear vision to help businesses use technology in a practical, reliable, and meaningful way.",
    image: "/about/timeline/2014.jpg",
  },
  {
    year: "2015",
    bigYear: "2015",
    title: "Early business solutions",
    description:
      "We started building business websites, digital platforms, and customer-focused systems for growing brands.",
    image: "/about/timeline/2015.jpg",
  },
  {
    year: "2016",
    bigYear: "2016",
    title: "Software-first growth",
    description:
      "Our work expanded into custom software, dashboards, and business tools designed to simplify daily operations.",
    image: "/about/timeline/2016.jpg",
  },
  {
    year: "2017",
    bigYear: "2017",
    title: "Digital transformation services",
    description:
      "We started helping businesses modernize workflows with better design, technology consulting, and digital execution.",
    image: "/about/timeline/2017.jpg",
  },
  {
    year: "2018",
    bigYear: "2018",
    title: "Automation-focused approach",
    description:
      "Automation became a stronger part of our delivery, helping teams reduce repetitive work and improve efficiency.",
    image: "/about/timeline/2018.jpg",
  },
  {
    year: "2019",
    bigYear: "2019",
    title: "Smart display solutions",
    description:
      "BrainADZ Live moved deeper into digital standees, kiosks, LED walls, and smart display communication systems.",
    image: "/about/timeline/2019.jpg",
  },
  {
    year: "2020",
    bigYear: "2020",
    title: "Remote-ready digital systems",
    description:
      "We focused on reliable software, online platforms, and connected systems that supported remote and hybrid work.",
    image: "/about/timeline/2020.jpg",
  },
  {
    year: "2021",
    bigYear: "2021",
    title: "Cloud and scalable systems",
    description:
      "We strengthened our technology stack with cloud-ready architecture, secure systems, and scalable digital platforms.",
    image: "/about/01.webp",
  },
  {
    year: "2022",
    bigYear: "2022",
    title: "AI-enabled innovation",
    description:
      "AI and intelligent automation became part of our solution strategy to improve analytics, engagement, and operations.",
    image: "/about/4.webp",
  },
  {
    year: "2023",
    bigYear: "2023",
    title: "Hardware and software integration",
    description:
      "We connected software platforms with kiosks, smart displays, and interactive hardware to create complete solutions.",
    image: "/about/5.webp",
  },
  {
    year: "2024",
    bigYear: "2024",
    title: "Enterprise-ready delivery",
    description:
      "Our process became more structured with planning, design, development, deployment, and long-term support.",
    image: "/about/256.png",
  },
  {
    year: "2025",
    bigYear: "2025",
    title: "A decade of digital excellence",
    description:
      "BrainADZ Live continued building smarter digital systems across software, automation, AI, kiosks, standees, LED walls, and interactive displays.",
    image: "/about/2025.jpeg",
  },
  {
    year: "Present",
    bigYear: "NOW",
    title: "Building the future with intelligence",
    description:
      "Today, BrainADZ Live is focused on future-ready digital ecosystems where hardware, software, automation, and AI work together to deliver measurable business impact.",
    image: "/about/2026.jpeg",
  },
];

export default function DigitalExcellenceTimeline() {
  const [activeIndex, setActiveIndex] = useState(timelineData.length - 1);
  const activeItem = timelineData[activeIndex];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 text-[#161616] md:px-8 lg:px-12 lg:py-32">
      {/* LIGHT BRAND BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_48%,rgba(60,91,155,0.08)_0%,rgba(60,91,155,0.03)_30%,transparent_60%)]" />
      <div className="pointer-events-none absolute right-[-120px] top-[100px] h-[340px] w-[340px] rounded-full bg-[#3c5b9b]/[0.06] blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-[1800px]">
        {/* HEADING */}
        <div className="mb-16 max-w-[920px]" data-aos="fade-up">
          <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
            Our Journey
          </p>

          <h2 className="text-[38px] font-light leading-[1.08] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
            A decade of digital excellence
          </h2>

          <p className="mt-6 max-w-[760px] text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
            From early digital solutions to AI-enabled systems, our journey
            reflects continuous growth in software, automation, smart displays,
            and business-focused technology.
          </p>
        </div>

        {/* MAIN TIMELINE STAGE */}
        <div
          className="relative overflow-hidden rounded-[28px] border border-[#dfe6f1] bg-[#f8faff] p-6 shadow-[0_24px_80px_rgba(22,22,22,0.06)] md:p-10 lg:p-12"
          data-aos="card-reveal"
          data-aos-duration="520"
        >
          {/* DESKTOP LAYOUT */}
          <div className="relative hidden min-h-[610px] lg:block">
            {/* LEFT IMAGE */}
            <div className="absolute left-[1%] top-[42%] w-[43%] -translate-y-1/2">
              <div className="relative rotate-[-8deg] overflow-hidden rounded-[24px] border border-[#dfe6f1] bg-white p-2 shadow-[0_32px_90px_rgba(22,22,22,0.14)]">
                <div className="relative overflow-hidden rounded-[18px] bg-[#eef2f8]">
                  <div className="absolute inset-0 flex items-center justify-center text-[15px] font-light text-[#8d8d8d]">
                    Timeline image will appear here
                  </div>

                  <img
                    key={activeItem.image}
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="timeline-image relative z-10 h-[430px] w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0)_40%,rgba(60,91,155,0.1)_100%)]" />
                </div>
              </div>
            </div>

            {/* BIG YEAR */}
            <div className="pointer-events-none absolute left-[32%] top-[42%] z-30 -translate-y-1/2">
              <span
                key={activeItem.bigYear}
                className="timeline-year block select-none text-[190px] font-semibold leading-none tracking-[-8px] text-[#3c5b9b] drop-shadow-[0_14px_40px_rgba(60,91,155,0.16)] xl:text-[230px]"
              >
                {activeItem.bigYear}
              </span>
            </div>

            {/* RIGHT CONTENT - STARTS AFTER YEAR BOTTOM */}
            <div className="absolute left-[68%] top-[60%] z-40 w-[29%]">
              <div
                key={`${activeItem.year}-${activeItem.title}`}
                className="timeline-content"
              >
                <h3 className="max-w-[560px] text-[30px] font-light leading-[1.12] tracking-[-1px] text-[#262626] xl:text-[34px]">
                  {activeItem.title}
                </h3>

                <p className="mt-6 max-w-[560px] text-[16px] font-light leading-[1.78] tracking-[-0.1px] text-[#393939]">
                  {activeItem.description}
                </p>
              </div>
            </div>
          </div>

          {/* MOBILE / TABLET LAYOUT */}
          <div className="block lg:hidden">
            <div className="relative flex flex-col gap-10">
              <div className="relative flex min-h-[340px] items-center justify-center">
                <div className="relative w-full max-w-[700px] rotate-[-6deg] overflow-hidden rounded-[22px] border border-[#dfe6f1] bg-white p-2 shadow-[0_24px_70px_rgba(22,22,22,0.12)]">
                  <div className="relative overflow-hidden rounded-[16px] bg-[#eef2f8]">
                    <div className="absolute inset-0 flex items-center justify-center text-[15px] font-light text-[#8d8d8d]">
                      Timeline image will appear here
                    </div>

                    <img
                      key={`mobile-${activeItem.image}`}
                      src={activeItem.image}
                      alt={activeItem.title}
                      className="timeline-image relative z-10 h-[300px] w-full object-cover md:h-[380px]"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>

                <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
                  <span
                    key={`mobile-year-${activeItem.bigYear}`}
                    className="timeline-year block select-none text-[104px] font-semibold leading-none tracking-[-5px] text-[#3c5b9b] sm:text-[135px] md:text-[170px]"
                  >
                    {activeItem.bigYear}
                  </span>
                </div>
              </div>

              <div
                key={`mobile-content-${activeItem.year}`}
                className="timeline-content py-2"
              >
                <h3 className="text-[28px] font-light leading-[1.14] tracking-[-0.8px] text-[#262626] md:text-[34px]">
                  {activeItem.title}
                </h3>

                <p className="mt-6 text-[16px] font-light leading-[1.75] text-[#393939] md:text-[17px]">
                  {activeItem.description}
                </p>
              </div>
            </div>
          </div>

          {/* TIMELINE */}
          <div className="mt-16 overflow-x-auto pb-4 lg:mt-4">
            <div className="relative min-w-[1180px] px-2">
              <div className="absolute left-6 right-6 top-[15px] h-[2px] bg-[#3c5b9b]/70" />

              <div className="relative z-10 flex items-start justify-between">
                {timelineData.map((item, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={item.year}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className="group flex w-[88px] flex-col items-center"
                    >
                      <span
                        className={`h-[28px] w-[42px] rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isActive
                            ? "scale-110 border-[#3c5b9b] bg-[#3c5b9b] shadow-[0_0_24px_rgba(60,91,155,0.35)]"
                            : "scale-100 border-[#3c5b9b] bg-[#f8faff] group-hover:bg-[#3c5b9b]/20"
                        }`}
                      />

                      <span
                        className={`mt-6 text-[15px] font-light transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:text-[16px] ${
                          isActive
                            ? "translate-y-0 text-[#262626]"
                            : "translate-y-1 text-[#8d8d8d]"
                        }`}
                      >
                        {item.year}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-image {
          animation: imageFade 760ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .timeline-year {
          animation: yearFade 780ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .timeline-content {
          animation: contentFade 720ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes imageFade {
          from {
            opacity: 0;
            transform: scale(1.04);
            filter: blur(6px);
          }

          to {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }

        @keyframes yearFade {
          from {
            opacity: 0;
            transform: translateX(-24px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes contentFade {
          from {
            opacity: 0;
            transform: translateY(16px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
