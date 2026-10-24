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
      className="erp-automation-slider [min-width:0]"
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
        className="erp-automation-viewport grid overflow-hidden [border-radius:16px] [touch-action:pan-y] max-[760px]:[border-radius:12px]"
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
            className={`erp-automation-slide [grid-area:1_/_1] [min-width:0] [opacity:0] [visibility:hidden] pointer-events-none [transform:translate3d(20px,_0,_0)] [transition:opacity_420ms_ease,_transform_420ms_ease,_visibility_0s_linear_420ms]! motion-reduce:[transition:none]! motion-reduce:[transition-delay:0s]! ${index === activeIndex ? "erp-automation-active-slide [opacity:1] [visibility:visible] pointer-events-auto [transform:translate3d(0,_0,_0)] [transition-delay:0s]!" : ""}`}
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

      <div className="erp-automation-controls relative flex items-center justify-center [min-height:44px] [&_.erp-automation-pause-button]:flex [&_.erp-automation-pause-button]:items-center [&_.erp-automation-pause-button]:justify-center [&_.erp-automation-pause-button]:[width:26px] [&_.erp-automation-pause-button]:[height:32px] [&_.erp-automation-pause-button]:[padding:0] [&_.erp-automation-pause-button]:[border:0] [&_.erp-automation-pause-button]:[background:transparent] [&_.erp-automation-pause-button]:[color:#73777b] [&_.erp-automation-pause-button]:absolute [&_.erp-automation-pause-button]:[right:0]">
        <div
          className="erp-automation-dots flex [&_button]:flex [&_button]:items-center [&_button]:justify-center [&_button]:[width:26px] [&_button]:[height:32px] [&_button]:[padding:0] [&_button]:[border:0] [&_button]:[background:transparent] [&_button]:[color:#73777b] [&_span]:[width:10px] [&_span]:[height:10px] [&_span]:rounded-full [&_span]:[background:#bdc0c5]"
          aria-label="Choose preview"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={index === activeIndex ? "erp-automation-active-dot [&_span]:[background:#656970]" : ""}
              aria-label={`Show ${slide.title}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              <span />
            </button>
          ))}
        </div>

        <button
          type="button"
          className="erp-automation-pause-button"
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
