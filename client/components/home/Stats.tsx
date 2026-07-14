"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 120,
    suffix: "+",
    label: "Digital Installations",
  },
  {
    value: 8,
    suffix: "+",
    label: "Product Categories",
  },
  {
    value: 360,
    suffix: "°",
    label: "End-to-End Delivery",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support Approach",
  },
  {
    value: 8,
    suffix: "+",
    label: "Software Services",
  },
  {
    value: 12,
    suffix: "+",
    label: "Industries Served",
  },
  {
    value: 3,
    suffix: "+",
    label: "Technology Categories",
  },
  {
    value: 5,
    suffix: "+",
    label: "Digital Platforms",
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasAnimated = useRef(false);

  const [counts, setCounts] = useState<number[]>(
    stats.map(() => 0)
  );

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const animateCounts = () => {
      const duration = 1400;
      const startTime = performance.now();

      const updateCounts = (currentTime: number) => {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        const easedProgress =
          1 - Math.pow(1 - progress, 3);

        setCounts(
          stats.map((item) =>
            Math.floor(item.value * easedProgress)
          )
        );

        if (progress < 1) {
          requestAnimationFrame(updateCounts);
        } else {
          setCounts(stats.map((item) => item.value));
        }
      };

      requestAnimationFrame(updateCounts);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry) return;

        if (
          entry.isIntersecting &&
          entry.intersectionRatio >= 0.3 &&
          !hasAnimated.current
        ) {
          hasAnimated.current = true;
          animateCounts();
          observer.unobserve(section);
        }
      },
      {
        threshold: [0.3, 0.5, 0.7],
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="lazy-section bg-white px-5 pb-8 pt-14 text-[#161616] md:px-4 md:pb-10 md:pt-16 lg:px-12"
    >
      <div className="mx-auto max-w-[1800px]">
        {/* HEADING SECTION */}
        <div className="mb-10 grid grid-cols-1 gap-7 lg:grid-cols-[1fr_0.82fr] lg:items-end lg:gap-20">
          {/* LEFT */}
          <div data-aos="fade-right">
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-10 bg-[#193175]" />

              <p className="text-[12px] font-normal uppercase tracking-[2.4px] text-[#193175]">
                Numbers That Matter
              </p>
            </div>

            <h2 className="max-w-[760px] text-[38px] font-light leading-[1.08] tracking-[-1.7px] text-[#161616] md:text-[48px] lg:text-[54px]">
              Creating measurable impact through{" "}
              <span className="text-[#193175]">
                technology
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <p
            className="max-w-[650px] text-[16px] font-light leading-[1.7] text-[#525252] md:text-[18px]"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Our numbers reflect practical technology, reliable
            execution, and the long-term value we create for
            modern businesses.
          </p>
        </div>

        {/* STATS GRID */}
        <div
          className="stats-grid bg-white"
          data-aos="fade-up"
        >
          {stats.map((item, index) => (
            <div
              key={item.label}
              className="stat-item relative flex min-h-[205px] flex-col items-center px-4 pb-8 pt-8 text-center md:min-h-[225px] md:pb-10 md:pt-9 lg:min-h-[235px]"
            >
              {/* NUMBER */}
              <div className="flex items-start justify-center">
                <span className="text-[44px] font-medium leading-none tracking-[-2px] text-[#193175] md:text-[50px] lg:text-[52px]">
                  {counts[index]}
                </span>

                <span className="ml-[2px] text-[27px] font-medium leading-none text-[#193175] md:text-[31px]">
                  {item.suffix}
                </span>
              </div>

              {/* LABEL */}
              <p className="mt-12 max-w-[260px] text-[15px] font-medium leading-[1.4] tracking-[-0.3px] text-[#555555] md:mt-14 md:text-[17px] lg:text-[18px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .stat-item::after {
          content: "";
          position: absolute;
          top: 28px;
          right: 0;
          width: 1px;
          height: calc(100% - 56px);
          background: #d8d8d8;
        }

        .stat-item::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 24px;
          width: calc(100% - 48px);
          height: 1px;
          background: #d8d8d8;
        }

        .stat-item:nth-child(2n)::after {
          display: none;
        }

        .stat-item:nth-last-child(-n + 2)::before {
          display: none;
        }

        @media (min-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .stat-item:nth-child(2n)::after {
            display: block;
          }

          .stat-item:nth-child(4n)::after {
            display: none;
          }

          .stat-item::before {
            display: block;
          }

          .stat-item:nth-last-child(-n + 4)::before {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}