/* eslint-disable @next/next/no-img-element */

const stats = [
  {
    value: "360°",
    text: "end-to-end digital solutions from hardware deployment to software systems",
  },
  {
    value: "AI",
    text: "powered platforms, automation, analytics, and intelligent business workflows",
  },
];

export default function AboutSection() {
  return (
    <section className="lazy-section bg-white px-5 py-20 text-[#161616] md:px-10 lg:px-12">
      <div className="mx-auto max-w-425">
        {/* MAIN HEADING */}
        <h2
          className="max-w-262.5 text-[40px] font-light leading-[1.05] tracking-[-2px] md:text-[48px] lg:text-[55px]"
          data-aos="fade-up"
        >
          Smarter business. Real impact.
        </h2>

        {/* CONTENT SECTION - NO LOGO GRID */}
        <div className="mt-20 grid grid-cols-1 gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <h3 className="text-[34px] font-normal tracking-[-0.8px] text-[#3c5b9b] md:text-[42px]">
              BrainADZ Live
            </h3>

            <p className="mt-10 max-w-195 text-[16px] font-normal leading-[1.6] text-[#262626]">
              BrainADZ Live helps businesses build smarter digital ecosystems by
              combining hardware innovation, software development, automation,
              and AI-driven technology. From kiosks and digital standees to web
              platforms, dashboards, and enterprise software, we create reliable
              solutions that help organizations move faster and operate better.
            </p>

            {/* STATS */}
            <div className="mt-20 grid grid-cols-1 gap-14 sm:grid-cols-2">
              {stats.map((item, index) => (
                <div
                  key={item.value}
                  data-aos="card-reveal"
                  data-aos-delay={index * 150}
                  data-aos-duration="520"
                >
                  <h4 className="text-[34px] font-light leading-none tracking-[-1px] text-[#3c5b9b] md:text-[42px]">
                    {item.value}
                  </h4>

                  <p className="mt-5 max-w-82.5 text-[16px] leading-[1.45] text-[#393939]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* LINK */}
            <a
              href="/about-us"
              className="mt-16 inline-flex items-center gap-4 text-[14px] font-normal text-[#3c5b9b] transition hover:underline"
            >
              Explore how BrainADZ Live creates smarter business solutions
              <span className="text-[14px] leading-none">→</span>
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full" data-aos="fade-left" data-aos-delay="100">
            <img
              src="/about.avif"
              alt="BrainADZ Live digital business impact"
              loading="lazy"
              decoding="async"
              className="h-90 w-full rounded-sm object-cover md:h-117.5 lg:h-130"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
