"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

type PreviewSlide = {
  title: string;
  preview: ReactNode;
};

export default function ERPPreviewCarousel({
  label,
  slides,
}: {
  label: string;
  slides: PreviewSlide[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );

    observer.observe(slider);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || paused || hovered || focused || slides.length < 2) return;

    const timer = window.setInterval(() => {
      if (
        document.hidden ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [visible, paused, hovered, focused, slides.length]);

  const changeSlide = (direction: number) => {
    setActiveIndex(
      (current) => (current + direction + slides.length) % slides.length,
    );
  };

  return (
    <div
      ref={sliderRef}
      className="min-w-0"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setFocused(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          changeSlide(event.key === "ArrowRight" ? 1 : -1);
        }
      }}
    >
      <div
        className="grid touch-pan-y overflow-hidden rounded-2xl max-[760px]:rounded-xl"
        onTouchStart={(event) => {
          touchStart.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;

          const distance = touchStart.current - event.changedTouches[0].clientX;

          if (Math.abs(distance) > 40) {
            changeSlide(distance > 0 ? 1 : -1);
          }

          touchStart.current = null;
        }}
        onTouchCancel={() => {
          touchStart.current = null;
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`col-start-1 row-start-1 min-w-0 ${index === activeIndex ? "visible" : "pointer-events-none invisible"}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}: ${slide.title}`}
            aria-hidden={index !== activeIndex}
            inert={index !== activeIndex}
          >
            {slide.preview}
          </div>
        ))}
      </div>

      <div className="relative flex min-h-11 items-center justify-center">
        <div className="flex" aria-label="Choose preview">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className="flex h-8 w-6.5 items-center justify-center bg-transparent p-0 text-[#73777b]"
              aria-label={`Show ${slide.title}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              <span
                className={`size-2.5 rounded-full ${index === activeIndex ? "bg-[#656970]" : "bg-[#bdc0c5]"}`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          className="absolute right-0 flex h-8 w-6.5 items-center justify-center border-0 bg-transparent p-0 text-[#73777b]"
          aria-label={
            paused ? "Play preview carousel" : "Pause preview carousel"
          }
          onClick={() => setPaused((current) => !current)}
        >
          {paused ? <Play size={13} /> : <Pause size={13} />}
        </button>
      </div>
    </div>
  );
}
