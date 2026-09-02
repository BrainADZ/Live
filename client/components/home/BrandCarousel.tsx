/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

type Brand = {
  name: string;
  logo: string;
};

type BrandsApiResponse = {
  success: boolean;
  brands: Brand[];
  message?: string;
};

export default function BrandCarousel() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadBrands() {
      try {
        setIsLoading(true);

        const response = await fetch("/api/brands", {
          method: "GET",
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Unable to load brand logos.");
        }

        const data: BrandsApiResponse = await response.json();

        if (data.success && Array.isArray(data.brands)) {
          setBrands(data.brands);
        }
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Brand carousel error:", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadBrands();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-white py-2 md:py-4 lg:py-8">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#193175]/5 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#193175]/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1800px] px-5 md:px-4 lg:px-12">
          {/* Section header */}
          <div className="mb-14 grid gap-8 border-b border-[#161616]/10 pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#193175]" />

                <span className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#193175]">
                  Trusted Partnerships
                </span>
              </div>

              <h2 className="max-w-xl text-[36px] font-normal leading-[1.08] tracking-[-0.035em] text-[#161616] md:text-[48px] lg:text-[56px]">
                Brands that trust
                <span className="text-[#193175]"> BrainADZ Live.</span>
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-2xl text-[15px] font-light leading-7 text-[#161616]/60 md:text-[17px]">
                We collaborate with forward-thinking businesses to build
                digital experiences, intelligent platforms, and technology
                solutions designed for real-world impact.
              </p>
            </div>
          </div>

          {/* Loading state */}
          {isLoading && (
            <div className="flex items-center overflow-hidden">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="flex h-[120px] w-[220px] shrink-0 items-center justify-center border-r border-[#161616]/8 px-10 md:h-[140px] md:w-[260px]"
                >
                  <div className="h-10 w-32 animate-pulse rounded-md bg-[#161616]/5" />
                </div>
              ))}
            </div>
          )}

          {/* Brand carousel */}
          {!isLoading && brands.length > 0 && (
            <div className="brand-carousel relative overflow-hidden">
              {/* Left fade */}
              <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-white to-transparent md:w-32 lg:w-44" />

              {/* Right fade */}
              <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-white to-transparent md:w-32 lg:w-44" />

              <div className="brand-track">
                {/* First brand group */}
                <div className="brand-list">
                  {brands.map((brand, index) => (
                    <BrandItem
                      key={`first-${brand.logo}-${index}`}
                      brand={brand}
                    />
                  ))}
                </div>

                {/* Duplicate group for seamless infinite loop */}
                <div className="brand-list" aria-hidden="true">
                  {brands.map((brand, index) => (
                    <BrandItem
                      key={`second-${brand.logo}-${index}`}
                      brand={brand}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Empty state */}
          {!isLoading && brands.length === 0 && (
            <div className="flex min-h-[130px] items-center justify-center border-y border-[#161616]/10">
              <p className="text-[14px] font-light text-[#161616]/50">
                Brand logos will appear here.
              </p>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .brand-carousel {
          width: 100%;
          overflow: hidden;
        }

        .brand-track {
          display: flex;
          width: max-content;
          min-width: max-content;
          align-items: center;

          /* globals.css disables animations globally, so this intentional
             carousel motion needs an explicit opt-in. */
          animation: brandScroll 35s linear infinite !important;
          animation-play-state: running !important;

          will-change: transform;
        }

        .brand-list {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          width: max-content;
        }

        .brand-carousel:hover .brand-track {
          animation-play-state: paused !important;
        }

        .brand-item,
        .brand-item img,
        .brand-item span {
          transition-property: background-color, border-color, box-shadow,
            color, filter, opacity, transform !important;
          transition-duration: 300ms !important;
          transition-timing-function: ease !important;
        }

        .brand-item:hover {
          background: rgba(25, 49, 117, 0.05);
          border-color: rgba(25, 49, 117, 0.2);
          box-shadow: inset 0 -2px 0 rgba(25, 49, 117, 0.75);
        }

        @keyframes brandScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }

          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (max-width: 768px) {
          .brand-track {
            animation-duration: 20s !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-track {
            animation: none !important;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </>
  );
}

function BrandItem({ brand }: { brand: Brand }) {
  return (
    <div className="brand-item group flex h-[120px] w-[220px] shrink-0 items-center justify-center border-r border-[#161616]/8 px-10 md:h-[140px] md:w-[260px]">
      <img
        src={brand.logo}
        alt={`${brand.name} logo`}
        loading="lazy"
        decoding="async"
        className="max-h-[46px] max-w-[140px] object-contain opacity-45 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 md:max-h-[52px] md:max-w-[160px]"
        onError={(event) => {
          event.currentTarget.style.display = "none";

          const fallback = event.currentTarget
            .nextElementSibling as HTMLSpanElement | null;

          if (fallback) {
            fallback.style.display = "block";
          }
        }}
      />

      {/* Fallback brand name */}
      <span className="hidden text-center text-[20px] font-medium tracking-[-0.02em] text-[#161616]/45 transition-colors duration-300 group-hover:text-[#193175]">
        {brand.name}
      </span>
    </div>
  );
}
