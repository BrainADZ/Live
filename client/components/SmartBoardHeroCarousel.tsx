"use client";

import { useEffect, useState } from "react";

const slides = [
  { src: "/hero/teaching.webp", alt: "Interactive smart board in a classroom" },
  { src: "/hero/edu-tech.webp", alt: "Digital learning in an education space" },
  { src: "/overview/Teaching-Panel.webp", alt: "Smart teaching panel for presentations" },
];

export default function SmartBoardHeroCarousel() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, []);
  return <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    {slides.map((slide, index) => <div key={slide.src} className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === active ? "opacity-100" : "opacity-0"}`} style={{ backgroundImage: `url("${slide.src}")` }} />)}
    <div className="absolute inset-0 bg-gradient-to-r from-[#071632]/90 via-[#0b1c3c]/75 to-[#0b1c3c]/55" />
  </div>;
}
