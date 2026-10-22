"use client";

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

export default function HeroSlider() {
  const repeatedAwards = [...awards, ...awards];

  return (
    <>
    <section className="relative aspect-[2/1] w-full overflow-hidden bg-black text-white md:aspect-auto md:h-[min(90vh,920px)]">
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="BrainADZ Live banner video"
        >
          <source src="/hero/Hero.webm" type="video/webm" />
        </video>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="site-container absolute inset-0 z-10 hidden items-end justify-end pb-10 md:flex lg:pb-16">
        {/* RIGHT CONTAINER - AWARDS CAROUSEL */}
        <div
          className="w-full max-w-175 overflow-hidden"
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-duration="520"
        >
          <div className="relative w-full overflow-hidden">
            <div className="hero-awards-track flex w-max gap-5 pr-5">
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

    </section>

      {/* MOBILE AWARDS CAROUSEL */}
      <div
        className="overflow-hidden bg-white px-2 py-5 md:hidden"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="hero-awards-track flex w-max gap-4 pr-4">
          {repeatedAwards.map((award, index) => (
            <div
              key={`mobile-${award.alt}-${index}`}
              className="flex h-19 w-40 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 shadow-sm"
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
          /* Override the site's global animation reset for certificates only. */
          animation: heroAwardsScroll 24s linear infinite !important;
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

        @media (prefers-reduced-motion: reduce) {
          .hero-awards-track {
            animation: none !important;
          }
        }
      `}</style>

    </>
  );
}
