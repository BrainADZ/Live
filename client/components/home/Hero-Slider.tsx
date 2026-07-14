"use client";

import { useEffect, useState } from "react";
import PopupForm from "@/components/PopupForm";
import { ArrowRight } from "lucide-react";

/* eslint-disable @next/next/no-img-element */

const awards = [
  {
    src: "/certificate/aws.webp",
    alt: "BrainADZ Live Award 1",
  },
  {
    src: "/certificate/google.png",
    alt: "BrainADZ Live Award 2",
  },
  {
    src: "/certificate/meta.webp",
    alt: "BrainADZ Live Award 3",
  },
];

const heroSlides = [
  {
    src: "/hero/Live Banner.jpg",
    alt: "BrainADZ Live digital systems showcase",
    heading: "",
    description: "",
  },
  {
    src: "/hero/Live Banner 2.jpg",
    alt: "BrainADZ Live software and technology solutions",
    heading: "Building Smarter Digital Systems for Modern Businesses",
    description:
      "BrainADZ Live builds secure, scalable digital ecosystems by combining software engineering, intelligent platforms, cloud capabilities, and advanced digital signage solutions to help businesses modernize operations and create connected experiences.",
  },
  {
    src: "/hero/Live Banner 3.jpg",
    alt: "BrainADZ Live digital signage and business solutions",
    heading: "Building Smarter Digital Systems for Modern Businesses",
    description:
      "BrainADZ Live builds secure, scalable digital ecosystems by combining software engineering, intelligent platforms, cloud capabilities, and advanced digital signage solutions to help businesses modernize operations and create connected experiences.",
  },
];

export default function Hero() {
  const repeatedAwards = [...awards, ...awards];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = heroSlides[activeSlide];
  const hasContent = Boolean(currentSlide.heading);

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(slideTimer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-black text-white">
      {/* BACKGROUND IMAGE SLIDER */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              activeSlide === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-450 items-end justify-between gap-10 px-6 pb-27 md:px-10">
        {/* LEFT CONTENT */}
        <div className="w-full max-w-132.5">
          <div
            className={`transition-all duration-700 ease-in-out ${
              hasContent
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-5 opacity-0"
            }`}
          >
            {hasContent && (
              <>
                <h1 className="text-[38px] font-semibold leading-[1.16] tracking-[-1.2px] text-white sm:text-[40px] md:text-[48px] lg:text-[56px]">
                  {currentSlide.heading}
                </h1>

                <p className="mt-7 max-w-190 text-[14px] font-normal leading-[1.65] tracking-[-0.1px] text-white/90 md:text-[16px]">
                  {currentSlide.description}
                </p>

                <div className="mt-8.5">
                  <button
                    type="button"
                    onClick={() => setIsPopupOpen(true)}
                    className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
                  >
                    Consult Our Strategy Team
                    <span className="text-[20px] leading-none"><ArrowRight/></span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* RIGHT CONTAINER - AWARDS CAROUSEL */}
        <div
          className="hidden w-175 shrink-0 overflow-hidden md:block"
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-duration="520"
        >
          <div className="relative w-full overflow-hidden">
            <div className="hero-awards-track flex w-max gap-5">
              {repeatedAwards.map((award, index) => (
                <div
                  key={`${award.alt}-${index}`}
                  className="flex h-25 w-55 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-black/10 px-5 backdrop-blur-xs transition duration-300 hover:border-white/35 hover:bg-white/10"
                >
                  <img
                    src={award.src}
                    alt={award.alt}
                    decoding="async"
                    className="max-h-18 max-w-43 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE AWARDS CAROUSEL */}
      <div
        className="absolute bottom-7 left-0 right-0 z-20 block overflow-hidden px-5 md:hidden"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="hero-awards-track flex w-max gap-4">
          {repeatedAwards.map((award, index) => (
            <div
              key={`mobile-${award.alt}-${index}`}
              className="flex h-19 w-40 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-black/15 px-4 backdrop-blur-xs"
            >
              <img
                src={award.src}
                alt={award.alt}
                decoding="async"
                className="max-h-13.5 max-w-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CAROUSEL ANIMATION */}
      <style jsx>{`
        .hero-awards-track {
          animation: heroAwardsScroll 24s linear infinite;
        }

        .hero-awards-track:hover {
          animation-play-state: paused;
        }

        @keyframes heroAwardsScroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <PopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
}