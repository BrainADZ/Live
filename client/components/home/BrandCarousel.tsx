"use client";

const brands = [
  {
    name: "Hayat Centric",
    logo: "/brand/hayat.png",
  },
  {
    name: "Max Hospital",
    logo: "/brand/max.png",
  },
  {
    name: "Raddison",
    logo: "/brand/raddison.webp",
  },
  {
    name: "Akash",
    logo: "/brand/akash.png",
  },
  {
    name: "Sodexo",
    logo: "/brand/sodexo.png",
  },
  {
    name: "Apollo",
    logo: "/brand/apollo.png",
  },
];

export default function BrandCarousel() {
  const duplicatedBrands = [...brands, ...brands];

  return (
    <>
      <section className="relative overflow-hidden bg-white py-2 md:py-4 lg:py-8">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#193175]/5 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#193175]/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1800px] px-5 md:px-4 lg:px-12">
          {/* SECTION HEADER */}
          <div className="mb-14 grid gap-8 border-b border-[#161616]/10 pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#193175]" />
                <span className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#193175]">
                  Trusted Partnerships
                </span>
              </div>

              <h2 className="max-w-xl text-[36px] font-light leading-[1.08] tracking-[-0.035em] text-[#161616] md:text-[48px] lg:text-[56px]">
                Brands that trust
                <span className="text-[#193175]"> BrainADZ Live.</span>
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-2xl text-[15px] font-light leading-7 text-[#161616]/60 md:text-[17px]">
                We collaborate with forward-thinking businesses to build digital
                experiences, intelligent platforms, and technology solutions
                designed for real-world impact.
              </p>
            </div>
          </div>

          {/* CAROUSEL */}
          <div className="brand-carousel relative overflow-hidden">
            {/* LEFT FADE */}
            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-white to-transparent md:w-32 lg:w-44" />

            {/* RIGHT FADE */}
            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-white to-transparent md:w-32 lg:w-44" />

            <div className="brand-track flex w-max items-center">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="brand-item group flex h-[120px] w-[220px] shrink-0 items-center justify-center border-r border-[#161616]/8 px-10 md:h-[140px] md:w-[260px]"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-[46px] max-w-[140px] object-contain opacity-45 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 md:max-h-[52px] md:max-w-[160px]"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";

                      const fallback =
                        event.currentTarget.nextElementSibling as HTMLElement;

                      if (fallback) {
                        fallback.style.display = "block";
                      }
                    }}
                  />

                  {/* Fallback brand name */}
                  <span
                    className="hidden text-center text-[20px] font-medium tracking-[-0.02em] text-[#161616]/45 transition-colors duration-300 group-hover:text-[#193175]"
                  >
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM INFO */}
          
        </div>
      </section>

      <style jsx>{`
        .brand-track {
          animation: brandScroll 28s linear infinite;
          will-change: transform;
        }

        .brand-carousel:hover .brand-track {
          animation-play-state: paused;
        }

        @keyframes brandScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .brand-track {
            animation-duration: 20s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-track {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}