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
    title: "The beginning of our technology journey",
    description:
      "BrainADZ Live began with a focus on helping businesses use digital technology in a more practical and accessible way.",
    image: "/about/2014.jpg",
  },
  {
    year: "2015",
    bigYear: "2015",
    title: "Expanding digital delivery",
    description:
      "Our work grew across websites, digital interfaces and business-facing technology requirements.",
    image: "/about/2015.jpg",
  },
  {
    year: "2016",
    bigYear: "2016",
    title: "Moving deeper into software",
    description:
      "We expanded beyond basic digital delivery into custom software, dashboards and systems built around internal workflows.",
    image: "/about/2016.jpg",
  },
  {
    year: "2017",
    bigYear: "2017",
    title: "A stronger focus on business workflows",
    description:
      "Projects increasingly started with understanding users, processes and operational requirements before technology decisions were made.",
    image: "/about/2017.jpg",
  },
  {
    year: "2018",
    bigYear: "2018",
    title: "Connecting repetitive processes",
    description:
      "Automation and connected workflows became a larger part of our work as businesses looked to reduce manual handoffs.",
    image: "/about/2018.jpg",
  },
  {
    year: "2019",
    bigYear: "2019",
    title: "Expanding into digital signage",
    description:
      "Our capabilities grew into digital standees, kiosks, displays and technology designed for customer-facing physical environments.",
    image: "/about/2019.jpg",
  },
  {
    year: "2020",
    bigYear: "2020",
    title: "Supporting more connected operations",
    description:
      "Web-based platforms and remotely accessible systems became increasingly important for teams operating across different locations.",
    image: "/about/2020.jpg",
  },
  {
    year: "2021",
    bigYear: "2021",
    title: "Building for connected systems",
    description:
      "Our project approach expanded further into scalable applications, integrations and systems designed to exchange information more effectively.",
    image: "/about/2021.jpg",
  },
  {
    year: "2022",
    bigYear: "2022",
    title: "Growing business platform capabilities",
    description:
      "CRM, ERP and connected operational platforms became a stronger part of our work across sales, inventory, reporting and internal coordination.",
    image: "/about/2022.jpg",
  },
  {
    year: "2023",
    bigYear: "2023",
    title: "Bringing hardware and software together",
    description:
      "Our work increasingly connected software platforms with kiosks, displays and other customer-facing digital technology.",
    image: "/about/2023.JPG",
  },
  {
    year: "2024",
    bigYear: "2024",
    title: "A more structured delivery approach",
    description:
      "Discovery, planning, UX, development, integration, validation and deployment became clearer stages within our project process.",
    image: "/about/2024.JPG",
  },
  {
    year: "2025",
    bigYear: "2025",
    title: "A broader technology portfolio",
    description:
      "BrainADZ Live continued expanding across software services, software platforms, digital signage products and technology consulting.",
    image: "/about/2025.JPG",
  },
  {
    year: "Present",
    bigYear: "2026",
    title: "Building connected technology experiences",
    description:
      "Today, our focus is on helping businesses connect software, platforms, integrations and digital customer environments around practical requirements.",
    image: "/about/2026.jpg",
  },
];

export default function DigitalExcellenceTimeline() {
  const [activeIndex, setActiveIndex] = useState(timelineData.length - 1);

  const activeItem = timelineData[activeIndex];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 text-[#161616] md:px-8 lg:px-12 lg:py-32">
      {/* LIGHT BRAND BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_48%,rgba(60,91,155,0.08)_0%,rgba(60,91,155,0.03)_30%,transparent_60%)]" />

      <div className="pointer-events-none absolute right-[-120px] top-[100px] h-[340px] w-[340px] rounded-full bg-[#193175]/[0.06] blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-[1800px]">
        {/* HEADING */}
        <div className="mb-16 max-w-[940px]" data-aos="fade-up">
          <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
            Our Journey
          </p>

          <h2 className="text-[38px] font-light leading-[1.08] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
            How our technology capabilities have expanded
          </h2>

          <p className="mt-6 max-w-[800px] text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
            Our journey reflects a gradual expansion from digital delivery into
            software, business platforms, integrations and technology for
            customer-facing physical environments.
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
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
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
                className="timeline-year block select-none text-[190px] font-semibold leading-none tracking-[-8px] text-[#193175] drop-shadow-[0_14px_40px_rgba(60,91,155,0.16)] xl:text-[230px]"
              >
                {activeItem.bigYear}
              </span>
            </div>

            {/* RIGHT CONTENT */}
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
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>

                <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
                  <span
                    key={`mobile-year-${activeItem.bigYear}`}
                    className="timeline-year block select-none text-[104px] font-semibold leading-none tracking-[-5px] text-[#193175] sm:text-[135px] md:text-[170px]"
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

          {/* TIMELINE NAVIGATION */}
          <div className="mt-16 overflow-x-auto pb-4 lg:mt-4">
            <div className="relative min-w-[1180px] px-2">
              <div className="absolute left-6 right-6 top-[15px] h-[2px] bg-[#193175]/70" />

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
                            ? "scale-110 border-[#193175] bg-[#193175] shadow-[0_0_24px_rgba(60,91,155,0.35)]"
                            : "scale-100 border-[#193175] bg-[#f8faff] group-hover:bg-[#193175]/20"
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