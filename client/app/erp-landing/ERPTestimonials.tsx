/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { testimonials as styles } from "./tailwind";

export default function ERPTestimonials({
  onRequestDemo,
}: {
  onRequestDemo: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || paused || hovered || focused) return;

    const timer = window.setInterval(() => {
      if (
        document.hidden ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [visible, paused, hovered, focused]);

  const changeSlide = (direction: number) => {
    setActiveIndex(
      (current) =>
        (current + direction + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      ref={sectionRef}
      className={styles.testimonials}
      aria-label="What BrainADZ Live customers say"
      aria-roledescription="carousel"
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
      <div className={styles.inner}>
        <div
          className={styles.carousel}
          onTouchStart={(event) => {
            touchStart.current = event.touches[0].clientX;
          }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return;

            const distance =
              touchStart.current - event.changedTouches[0].clientX;

            if (Math.abs(distance) > 40) {
              changeSlide(distance > 0 ? 1 : -1);
            }

            touchStart.current = null;
          }}
          onTouchCancel={() => {
            touchStart.current = null;
          }}
        >
          <button
            type="button"
            className={`${styles.arrow} ${styles.previous}`}
            aria-label="Previous customer review"
            onClick={() => changeSlide(-1)}
          >
            <ArrowLeft size={22} />
          </button>

          <div className={styles.slides}>
            {testimonials.map((testimonial, index) => (
              <figure
                key={testimonial.name}
                className={`${styles.slide} ${index === activeIndex ? styles.activeSlide : ""}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${testimonials.length}`}
                aria-hidden={index !== activeIndex}
                inert={index !== activeIndex}
              >
                <img
                  className={styles.customerImage}
                  src={testimonial.image}
                  alt={testimonial.role}
                  width="180"
                  height="54"
                />

                <blockquote className={styles.quote}>
                  <p>{testimonial.message}</p>
                </blockquote>

                <figcaption className={styles.attribution}>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <button
            type="button"
            className={`${styles.arrow} ${styles.next}`}
            aria-label="Next customer review"
            onClick={() => changeSlide(1)}
          >
            <ArrowRight size={22} />
          </button>
        </div>

        <div className={styles.controls}>
          <div
            className={styles.dots}
            aria-label="Choose customer review"
          >
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                className={index === activeIndex ? styles.activeDot : ""}
                aria-label={`Show review from ${testimonial.name}`}
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
              paused ? "Play customer reviews" : "Pause customer reviews"
            }
            onClick={() => setPaused((current) => !current)}
          >
            {paused ? <Play size={13} /> : <Pause size={13} />}
          </button>
        </div>

        <button
          type="button"
          className={styles.demoButton}
          onClick={onRequestDemo}
        >
          Request a demo
        </button>
      </div>
    </section>
  );
}
