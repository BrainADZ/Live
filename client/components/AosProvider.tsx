"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import type AOS from "aos";

type AosInstance = typeof AOS;
type AosModule = { default?: AosInstance } & AosInstance;

export default function AosProvider() {
  const pathname = usePathname();
  const aosInstanceRef = useRef<AosInstance | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    let isActive = true;
    document.documentElement.classList.add("aos-ready");

    void import("aos").then((module) => {
      if (!isActive) return;

      const AOS = (module as unknown as AosModule).default ?? module;

      AOS.init({
        duration: 460,
        easing: "ease-out-cubic",
        once: true,
        mirror: false,
        offset: 0,
        anchorPlacement: "top-bottom",
      });
      aosInstanceRef.current = AOS;
      AOS.refreshHard();
    });

    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    if (!aosInstanceRef.current) return;

    const frame = window.requestAnimationFrame(() => {
      aosInstanceRef.current?.refreshHard();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
