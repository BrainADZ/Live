export default function InsideBadzSection() {
  return (
    <section className="lazy-section mx-auto max-w-450 bg-white px-6 py-22.5 text-[#161616] md:px-10 lg:px-12">
      <div>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_1fr_1fr_1fr] lg:gap-20">
          {/* LEFT HEADING */}
          <div data-aos="fade-right">
            <h2 className="text-[50px] font-light leading-[1.05] tracking-[-2.5px] text-[#161616] md:text-[60px] lg:text-[64px]">
              Inside BrainADZ
            </h2>

            <p className="mt-6 max-w-80 text-[16px] font-light leading-[1.6] tracking-[-0.3px] text-[#525252]">
              Three specialized verticals working across marketing, exhibition
              experiences and technology.
            </p>
          </div>

          {/* COLUMN 1 - MARKETING */}
          <div
            className="flex h-full max-w-95 flex-col"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div>
              <h3 className="text-[22px] font-semibold leading-[1.3] tracking-[-0.3px] text-[#161616]">
                BrainADZ Marketing
              </h3>

              <p className="mt-3 text-[16px] font-light leading-[1.55] tracking-[-0.4px] text-[#262626]">
                Helping brands grow through digital marketing, creative media,
                branding, content and campaigns designed for stronger online
                visibility and audience engagement.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="https://brainadz.marketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[14px] font-light leading-none text-[#193175] transition hover:underline"
              >
                Explore BrainADZ Marketing

                <span className="text-[14px] leading-none">↗</span>
              </a>
            </div>
          </div>

          {/* COLUMN 2 - EXHIBITS */}
          <div
            className="flex h-full max-w-97.5 flex-col"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <h3 className="text-[22px] font-semibold leading-[1.3] tracking-[-0.3px] text-[#161616]">
                BrainADZ Exhibits
              </h3>

              <p className="mt-3 text-[16px] font-light leading-[1.55] tracking-[-0.4px] text-[#262626]">
                Designing and fabricating exhibition stalls that bring brands
                to life through custom booth concepts, fabrication, branding,
                installation and on-site execution.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="https://brainadzexhibits.com/stand-builder-dubai-riyadh-germany-usa/?gad_source=1&gad_campaignid=23345228593&gbraid=0AAAAA9Uqv4Irq6-3w96qQGvJ3wjM4M7v0&gclid=CjwKCAjw0o3SBhBVEiwAh28-jcozcYttC4ZzyRGHU1fNhiwsbv1gLyGUYatzEs4bDpJCwLkxPfFtWhoC5bgQAvD_BwE#Contact"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[14px] font-light leading-none text-[#193175] transition hover:underline"
              >
                Explore BrainADZ Exhibits

                <span className="text-[14px] leading-none">↗</span>
              </a>
            </div>
          </div>

          {/* COLUMN 3 - LIVE */}
          <div
            className="flex h-full max-w-97.5 flex-col"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div>
              <h3 className="text-[22px] font-semibold leading-[1.3] tracking-[-0.3px] text-[#161616]">
                BrainADZ Live
              </h3>

              <p className="mt-3 text-[16px] font-light leading-[1.55] tracking-[-0.4px] text-[#262626]">
                Building practical technology through software services,
                business platforms, digital signage products and consulting
                shaped around real business requirements.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="/about-us"
                className="flex items-center gap-4 text-[14px] font-light leading-none text-[#193175] transition hover:underline"
              >
                Explore BrainADZ Live

                <span className="text-[14px] leading-none">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}