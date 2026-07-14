/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

/* eslint-disable @next/next/no-img-element */

type Industry = {
  title: string;
  slug: string;
  icon: string;
};

const industries: Industry[] = [
  {
    title: "Healthcare",
    slug: "health-care",
    icon: "/industries/healthcare.png",
  },
  {
    title: "EdTech",
    slug: "education-tech",
    icon: "/industries/edu.png",
  },
  {
    title: "Fintech",
    slug: "finance-tech",
    icon: "/industries/hand.png",
  },
  {
    title: "Proptech",
    slug: "property-tech",
    icon: "/industries/monitor.png",
  },
  {
    title: "Retail",
    slug: "retail",
    icon: "/industries/marketplace.png",
  },
  {
    title: "Transport",
    slug: "transport",
    icon: "/industries/transportation.png",
  },
  {
    title: "Telecom",
    slug: "telecom",
    icon: "/industries/telecommunication.png",
  },
  {
    title: "Automotive",
    slug: "automotive",
    icon: "/industries/automotive.png",
  },
  {
    title: "Insurtech",
    slug: "insurance-tech",
    icon: "/industries/insurance.png",
  },
  {
    title: "Travel and Hospitality",
    slug: "travel-hospitality",
    icon: "/industries/travel-and-tourism.png",
  },
  {
    title: "Facility Management",
    slug: "facility-management",
    icon: "/industries/facility-management.png",
  },
  {
    title: "Media & Entertainment",
    slug: "media-entertainment",
    icon: "/industries/smartphone.png",
  },
];

export default function IndustriesSection() {
  return (
    <section className="lazy-section bg-white px-5 py-20 text-[#161616] md:px-4 lg:px-12">
      <div className="mx-auto max-w-450">
        {/* TOP CONTENT */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-[40px] font-light leading-[1.08] tracking-[-1.6px] text-[#161616] md:text-[52px] lg:text-[58px]">
            Industries We Serve
          </h2>

          <p className="mt-7 max-w-225 text-[18px] font-light leading-[1.65] tracking-[-0.2px] text-[#525252] md:text-[22px]">
            We serve a diverse range of industries, catering to a wide spectrum
            of fields and sectors.
          </p>
        </div>

        {/* LEFT ICON GRID + RIGHT IMAGE */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* LEFT ICON GRID */}
          <div className="industry-grid grid grid-cols-2 md:grid-cols-4">
            {industries.map((industry, index) => (
              <a
                key={industry.title}
                href={`/industries/${industry.slug}`}
                data-aos="card-reveal"
                data-aos-delay={(index % 4) * 100}
                data-aos-duration="520"
                className="industry-item group relative flex min-h-36.25 flex-col items-center justify-center overflow-hidden px-4 text-center transition duration-300 hover:bg-[#f5f7fb] md:min-h-40"
              >
                {/* SOFT HOVER GLOW */}
                <span className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="absolute left-1/2 top-1/2 h-23.75 w-23.75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#193175]/5 blur-xl" />
                </span>

                {/* CUSTOM ICON BADGE */}
                <div className="relative z-10 flex h-14.5 w-14.5 items-center justify-center rounded-full border border-[#dbe3f0] bg-[#f8faff] shadow-[0_8px_24px_rgba(60,91,155,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#193175]/40 group-hover:shadow-[0_14px_34px_rgba(60,91,155,0.18)]">
                  <img
                    src={industry.icon}
                    alt={`${industry.title} icon`}
                    loading="lazy"
                    decoding="async"
                    className="h-[29px] w-[29px] object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* TITLE */}
                <h3 className="relative z-10 mt-5 max-w-46.25 text-[15px] font-light leading-[1.3] tracking-[-0.1px] text-[#525252] transition duration-300 group-hover:text-[#193175] md:text-[17px]">
                  {industry.title}
                </h3>
              </a>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="relative overflow-hidden rounded-[10px]"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img
              src="/industries/Industries.jpg"
              alt="Industries We Serve"
              loading="lazy"
              decoding="async"
              className="h-105 w-full object-cover md:h-140 lg:h-152.5"
            />

            <div className="absolute inset-0 bg-black/0 transition duration-300 hover:bg-black/5" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .industry-item {
          border-color: #e5eaf2;
          border-bottom: 1px solid #e5eaf2;
        }

        .industry-item:nth-child(odd) {
          border-right: 1px solid #e5eaf2;
        }

        .industry-item:nth-last-child(-n + 2) {
          border-bottom: none;
        }

        @media (min-width: 768px) {
          .industry-item {
            border-right: 1px solid #e5eaf2;
            border-bottom: 1px solid #e5eaf2;
          }

          .industry-item:nth-child(4n) {
            border-right: none;
          }

          .industry-item:nth-last-child(-n + 4) {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
}