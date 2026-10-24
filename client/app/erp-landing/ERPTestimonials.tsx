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
      className="erp-testimonials-testimonials [padding:54px_0_64px] [background:#fff] max-[760px]:[padding:30px_0_52px]"
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
      <div className="erp-testimonials-inner [width:min(920px,_calc(100%_-_64px))] [margin:auto] text-center [&_.erp-testimonials-demo-button]:inline-flex [&_.erp-testimonials-demo-button]:items-center [&_.erp-testimonials-demo-button]:justify-center [&_.erp-testimonials-demo-button]:[min-width:238px] [&_.erp-testimonials-demo-button]:[min-height:44px] [&_.erp-testimonials-demo-button]:[margin-top:44px] [&_.erp-testimonials-demo-button]:[padding:12px_28px] [&_.erp-testimonials-demo-button]:[border:0] [&_.erp-testimonials-demo-button]:[border-radius:28px] [&_.erp-testimonials-demo-button]:[background:#ed2027] [&_.erp-testimonials-demo-button]:[color:#fff] [&_.erp-testimonials-demo-button]:[font-size:14px] [&_.erp-testimonials-demo-button]:font-semibold [&_.erp-testimonials-demo-button]:[line-height:1.4] [&_.erp-testimonials-demo-button]:[text-transform:uppercase] [&_.erp-testimonials-demo-button:hover]:[background:#cb151c] max-[760px]:[width:calc(100%_-_40px)] max-[760px]:[&_.erp-testimonials-demo-button]:[margin-top:28px]">
        <div
          className="erp-testimonials-carousel relative [padding-inline:85px] [touch-action:pan-y] [&_.erp-testimonials-arrow]:absolute [&_.erp-testimonials-arrow]:[top:50%] [&_.erp-testimonials-arrow]:flex [&_.erp-testimonials-arrow]:items-center [&_.erp-testimonials-arrow]:justify-center [&_.erp-testimonials-arrow]:[width:40px] [&_.erp-testimonials-arrow]:[height:40px] [&_.erp-testimonials-arrow]:[padding:0] [&_.erp-testimonials-arrow]:[border:0] [&_.erp-testimonials-arrow]:rounded-full [&_.erp-testimonials-arrow]:[background:#e3ecff] [&_.erp-testimonials-arrow]:[color:#141821] [&_.erp-testimonials-arrow]:[transform:translateY(-50%)] [&_.erp-testimonials-arrow:hover]:[background:#cfdefb] max-[760px]:[padding-inline:0] max-[760px]:[padding-bottom:62px] max-[760px]:[&_.erp-testimonials-arrow]:[top:auto] max-[760px]:[&_.erp-testimonials-arrow]:[bottom:0] max-[760px]:[&_.erp-testimonials-arrow]:[transform:none]"
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
            className={`erp-testimonials-arrow erp-testimonials-previous [left:0] max-[760px]:[left:calc(50%_-_52px)]`}
            aria-label="Previous customer review"
            onClick={() => changeSlide(-1)}
          >
            <ArrowLeft size={22} />
          </button>

          <div className="erp-testimonials-slides grid">
            {testimonials.map((testimonial, index) => (
              <figure
                key={testimonial.name}
                className={`erp-testimonials-slide [grid-area:1_/_1] [min-width:0] [margin:0] [opacity:0] [visibility:hidden] pointer-events-none [transform:translate3d(0,_8px,_0)] [transition:opacity_360ms_ease,_transform_360ms_ease,_visibility_0s_linear_360ms]! motion-reduce:[transition:none]! motion-reduce:[transition-delay:0s]! ${index === activeIndex ? "erp-testimonials-active-slide [opacity:1] [visibility:visible] pointer-events-auto [transform:translate3d(0,_0,_0)] [transition-delay:0s]!" : ""}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${testimonials.length}`}
                aria-hidden={index !== activeIndex}
                inert={index !== activeIndex}
              >
                <img
                  className="erp-testimonials-customer-image block [width:180px] [height:54px] [margin:0_auto_38px] [object-fit:contain] max-[760px]:[margin-bottom:26px]"
                  src={testimonial.image}
                  alt={testimonial.role}
                  width="180"
                  height="54"
                />

                <blockquote className="erp-testimonials-quote [max-width:670px] [margin:0_auto] [&_p]:[margin:0] [&_p]:[color:#202035] [&_p]:[font-size:clamp(24px,_2vw,_30px)] [&_p]:font-medium [&_p]:[line-height:1.4] [&_p]:[letter-spacing:-0.5px] max-[760px]:[&_p]:[font-size:clamp(21px,_4.6vw,_27px)] max-[760px]:[&_p]:[line-height:1.5] max-[760px]:[&_p]:[letter-spacing:-0.3px]">
                  <p>{testimonial.message}</p>
                </blockquote>

                <figcaption className={"erp-testimonials-attribution [margin-top:20px] [color:#3d3d3d] [font-size:17px] [line-height:1.6] [&_strong]:font-semibold [&_span::before]:[content:\",_\"] max-[760px]:[margin-top:18px] max-[760px]:[font-size:15px] max-[760px]:[&_span]:block max-[760px]:[&_span::before]:[content:none]"}>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <button
            type="button"
            className={`erp-testimonials-arrow erp-testimonials-next [right:0] max-[760px]:[right:calc(50%_-_52px)]`}
            aria-label="Next customer review"
            onClick={() => changeSlide(1)}
          >
            <ArrowRight size={22} />
          </button>
        </div>

        <div className="erp-testimonials-controls relative flex justify-center items-center [width:180px] [min-height:32px] [margin:40px_auto_0] [&_.erp-testimonials-pause-button]:flex [&_.erp-testimonials-pause-button]:items-center [&_.erp-testimonials-pause-button]:justify-center [&_.erp-testimonials-pause-button]:[width:24px] [&_.erp-testimonials-pause-button]:[height:32px] [&_.erp-testimonials-pause-button]:[padding:0] [&_.erp-testimonials-pause-button]:[border:0] [&_.erp-testimonials-pause-button]:[background:transparent] [&_.erp-testimonials-pause-button]:[color:#7b7e84] [&_.erp-testimonials-pause-button]:absolute [&_.erp-testimonials-pause-button]:[right:0] max-[760px]:[margin-top:20px]">
          <div
            className="erp-testimonials-dots flex justify-center [&_button]:flex [&_button]:items-center [&_button]:justify-center [&_button]:[width:24px] [&_button]:[height:32px] [&_button]:[padding:0] [&_button]:[border:0] [&_button]:[background:transparent] [&_button]:[color:#7b7e84] [&_span]:[width:10px] [&_span]:[height:10px] [&_span]:rounded-full [&_span]:[background:#b8bbc0]"
            aria-label="Choose customer review"
          >
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                className={index === activeIndex ? "erp-testimonials-active-dot [&_span]:[background:#62666c]" : ""}
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
            className="erp-testimonials-pause-button"
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
          className="erp-testimonials-demo-button"
          onClick={onRequestDemo}
        >
          Request a demo
        </button>
      </div>
    </section>
  );
}
