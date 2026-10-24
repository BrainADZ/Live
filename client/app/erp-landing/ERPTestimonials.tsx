/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { testimonials } from "@/data/testimonials";

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
      className="bg-white px-0 pt-13.5 pb-16 max-[760px]:px-0 max-[760px]:pt-7.5 max-[760px]:pb-13"
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
      <div className="mx-auto w-full max-w-246 px-5 text-center md:px-8">
        <div
          className="relative touch-pan-y px-21.25 max-[760px]:px-0 max-[760px]:pb-15.5"
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
            className="absolute bottom-0 left-[calc(50%-52px)] flex size-10 items-center justify-center rounded-full bg-[#e3ecff] p-0 text-[#141821] hover:bg-[#cfdefb] md:top-1/2 md:bottom-auto md:left-0 md:-translate-y-1/2"
            aria-label="Previous customer review"
            onClick={() => changeSlide(-1)}
          >
            <ArrowLeft size={22} />
          </button>

          <div className="grid">
            {testimonials.map((testimonial, index) => (
              <figure
                key={testimonial.name}
                className={`col-start-1 row-start-1 m-0 min-w-0 ${index === activeIndex ? "visible" : "pointer-events-none invisible"}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${testimonials.length}`}
                aria-hidden={index !== activeIndex}
                inert={index !== activeIndex}
              >
                <img
                  className="mx-auto mt-0 mb-9.5 block h-13.5 w-45 object-contain max-[760px]:mb-6.5"
                  src={testimonial.image}
                  alt={testimonial.role}
                  width="180"
                  height="54"
                />

                <blockquote className="mx-auto my-0 max-w-167.5">
                  <p className="m-0 text-[clamp(24px,2vw,30px)] leading-[1.4] font-medium tracking-[-0.5px] text-[#202035] max-[760px]:text-[clamp(21px,4.6vw,27px)] max-[760px]:leading-normal max-[760px]:tracking-[-0.3px]">
                    {testimonial.message}
                  </p>
                </blockquote>

                <figcaption className="mt-5 text-[17px] leading-[1.6] text-[#3d3d3d] max-[760px]:mt-4.5 max-[760px]:text-[15px]">
                  <strong className="font-semibold">{testimonial.name}</strong>
                  <span className="before:content-[',_'] max-[760px]:block max-[760px]:before:content-none">
                    {testimonial.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <button
            type="button"
            className="absolute right-[calc(50%-52px)] bottom-0 flex size-10 items-center justify-center rounded-full bg-[#e3ecff] p-0 text-[#141821] hover:bg-[#cfdefb] md:top-1/2 md:right-0 md:bottom-auto md:-translate-y-1/2"
            aria-label="Next customer review"
            onClick={() => changeSlide(1)}
          >
            <ArrowRight size={22} />
          </button>
        </div>

        <div className="relative mx-auto mt-10 mb-0 flex min-h-8 w-45 items-center justify-center max-[760px]:mt-5">
          <div
            className="flex justify-center"
            aria-label="Choose customer review"
          >
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                className="flex h-8 w-6 items-center justify-center bg-transparent p-0 text-[#7b7e84]"
                aria-label={`Show review from ${testimonial.name}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              >
                <span
                  className={`size-2.5 rounded-full ${index === activeIndex ? "bg-[#62666c]" : "bg-[#b8bbc0]"}`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            className="absolute right-0 flex h-8 w-6 items-center justify-center border-0 bg-transparent p-0 text-[#7b7e84]"
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
          className="mt-11 inline-flex min-h-11 min-w-59.5 items-center justify-center rounded-[28px] border-0 bg-[#ed2027] px-7 py-3 text-[14px] leading-[1.4] font-semibold text-white uppercase hover:bg-[#cb151c] max-[760px]:mt-7"
          onClick={onRequestDemo}
        >
          Request a demo
        </button>
      </div>
    </section>
  );
}
