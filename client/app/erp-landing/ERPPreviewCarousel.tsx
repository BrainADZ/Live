"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import styles from "./automation.module.css";

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
      className={styles.slider}
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
        className={styles.viewport}
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
            className={`${styles.slide} ${index === activeIndex ? styles.activeSlide : ""}`}
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

      <div className={styles.controls}>
        <div
          className={styles.dots}
          aria-label="Choose preview"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={index === activeIndex ? styles.activeDot : ""}
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
          className={styles.pauseButton}
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
