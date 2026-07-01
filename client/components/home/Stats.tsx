"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 120,
    suffix: "+",
    label: "Digital installations",
  },
  {
    value: 8,
    suffix: "+",
    label: "Product categories",
  },
  {
    value: 360,
    suffix: "°",
    label: "Complete delivery support",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support mindset",
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated) return;

        setAnimated(true);

        const duration = 700;
        const start = performance.now();

        const animate = (time: number) => {
          const progress = Math.min((time - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);

          setCounts(stats.map((item) => Math.floor(item.value * ease)));

          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.08, rootMargin: "0px 0px 100px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section
      ref={sectionRef}
      className="lazy-section bg-white px-5 py-20 text-[#161616] md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-450">
        {/* HEADING */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div data-aos="fade-right">
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
              Numbers That Matter
            </p>

            <h2 className="max-w-170 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Creating digital systems with practical business value
            </h2>
          </div>

          <p
            className="max-w-195 text-[17px] font-light leading-[1.75] text-[#525252] md:text-[19px]"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Our work connects smart hardware, scalable software, automation,
            and AI capabilities to help businesses operate better.
          </p>
        </div>

        {/* STATS STRIP */}
        <div className="grid grid-cols-1 overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-[#f8faff] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.label}
              data-aos="card-reveal"
              data-aos-delay={index * 100}
              data-aos-duration="520"
              className={`group relative min-h-55 p-8 transition duration-300 hover:bg-white md:p-10 ${
                index !== stats.length - 1 ? "lg:border-r" : ""
              } ${index < 2 ? "sm:border-b lg:border-b-0" : ""} border-[#dfe6f1]`}
            >
              <span className="absolute left-0 top-0 h-full w-0.75 bg-[#3c5b9b] opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="flex items-end gap-1">
                <span className="text-[44px] font-light leading-none tracking-[-1.4px] text-[#3c5b9b] md:text-[52px]">
                  {counts[index]}
                </span>

                <span className="mb-1 text-[26px] font-light leading-none text-[#3c5b9b] md:text-[30px]">
                  {item.suffix}
                </span>
              </div>

              <p className="mt-8 max-w-65 text-[20px] font-light leading-[1.35] tracking-[-0.4px] text-[#525252] md:text-[22px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
