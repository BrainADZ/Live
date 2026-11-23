"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SmartBoardStats.module.css";
import layout from "./SmartBoardLayout.module.css";

// Independent copy of the homepage statistics for this landing page.
const stats = [
  { value: 3500, suffix: "+", label: "Digital Installations" },
  { value: 8, suffix: "+", label: "Product Categories" },
  { value: 360, suffix: "°", label: "End-to-End Delivery" },
  { value: 24, suffix: "/7", label: "Support Approach" },
  { value: 8, suffix: "+", label: "Software Services" },
  { value: 12, suffix: "+", label: "Industries Served" },
  { value: 3, suffix: "+", label: "Technology Categories" },
  { value: 5, suffix: "+", label: "Digital Platforms" },
];

export default function SmartBoardStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const animatedRef = useRef(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCounts(stats.map((item) => item.value));
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting || animatedRef.current) return;
      animatedRef.current = true;
      observer.disconnect();
      const start = performance.now();
      const animate = (time: number) => {
        const progress = Math.min((time - start) / 1400, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCounts(stats.map((item) => Math.floor(item.value * eased)));
        if (progress < 1) frameRef.current = requestAnimationFrame(animate);
      };
      frameRef.current = requestAnimationFrame(animate);
    }, { threshold: 0.3 });

    observer.observe(section);
    return () => {
      observer.disconnect();
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 text-[#161616]">
      <div className={layout.container}>
        <div className="mb-10 grid gap-7 lg:grid-cols-[1fr_0.82fr] lg:items-end lg:gap-20">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-10 bg-[#193175]" />
              <p className="text-xs uppercase tracking-[2.4px] text-[#193175]">Numbers That Matter</p>
            </div>
            <h2 className="max-w-[760px] text-[38px] leading-[1.08] tracking-[-1.7px] md:text-[48px] lg:text-[54px]">
              Creating Measurable Impact through <span className="text-[#193175]">Technology</span>
            </h2>
          </div>
          <p className="max-w-[650px] text-[16px] font-light leading-[1.7] text-[#525252] md:text-[18px] lg:justify-self-end lg:text-right">
            Our numbers reflect practical technology, reliable execution, and the long-term value we create for modern businesses.
          </p>
        </div>
        <div className={`${styles.grid} bg-white`}>
          {stats.map((item, index) => (
            <div key={item.label} className={`${styles.item} relative flex min-h-[205px] flex-col items-center px-4 pb-8 pt-8 text-center md:min-h-[225px] md:pb-10 md:pt-9 lg:min-h-[235px]`}>
              <div className="flex items-start justify-center">
                <span className="text-[44px] font-medium leading-none tracking-[-2px] text-[#193175] md:text-[50px] lg:text-[52px]">{counts[index]}</span>
                <span className="ml-[2px] text-[27px] font-medium leading-none text-[#193175] md:text-[31px]">{item.suffix}</span>
              </div>
              <p className="mt-12 max-w-[260px] text-[15px] font-medium leading-[1.4] tracking-[-0.3px] text-[#555555] md:mt-14 md:text-[17px] lg:text-[18px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
