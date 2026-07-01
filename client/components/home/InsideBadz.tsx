export default function InsideBadzSection() {
  return (
    <section className="lazy-section bg-white px-6 py-22.5 text-[#161616] md:px-10 lg:px-12 mx-auto max-w-450">
      <div className="">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_1fr_1fr_1fr] lg:gap-20">
          {/* LEFT HEADING */}
          <div data-aos="fade-right">
            <h2 className="text-[50px] font-light leading-[1.05] tracking-[-2.5px] text-[#161616] md:text-[60px] lg:text-[64px]">
              Inside BrainADZ
            </h2>
          </div>

          {/* COLUMN 1 */}
          <div
            className="flex h-full max-w-95 flex-col"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div>
              <h3 className="text-[22px] font-semibold leading-[1.3] tracking-[-0.3px] text-[#161616]">
                BrainADZ Marketing
              </h3>

              <p className="mt-3 text-[16px] font-light leading-[1.45] tracking-[-0.4px] text-[#262626]">
                Explore BrainADZ Marketing history and culture of putting technology
                to work in the real world.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="https://brainadz.marketing/"
                className="flex items-center gap-4 text-[14px] font-light leading-none text-[#3c5b9b] transition hover:underline"
              >
                BrainADZ Marketing
                <span className="text-[14px] leading-none">→</span>
              </a>

              {/* <a
                href="/events"
                className="flex items-center gap-4 text-[14px] font-light leading-none text-[#3c5b9b] transition hover:underline"
              >
                Our events
                <span className="text-[14px] leading-none">→</span>
              </a> */}
            </div>
          </div>

          {/* COLUMN 2 */}
          <div
            className="flex h-full max-w-97.5 flex-col"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <h3 className="text-[22px] font-semibold leading-[1.3] tracking-[-0.3px] text-[#161616]">
                BrainADZ Exhibits
              </h3>

              <p className="mt-3 text-[16px] font-light leading-[1.45] tracking-[-0.4px] text-[#262626]">
                Visit the BrainADZ innovation lab and see what&apos;s in store
                for the future of digital systems.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="https://brainadzexhibits.com/stand-builder-dubai-riyadh-germany-usa/?gad_source=1&gad_campaignid=23345228593&gbraid=0AAAAA9Uqv4Irq6-3w96qQGvJ3wjM4M7v0&gclid=CjwKCAjw0o3SBhBVEiwAh28-jcozcYttC4ZzyRGHU1fNhiwsbv1gLyGUYatzEs4bDpJCwLkxPfFtWhoC5bgQAvD_BwE#Contact"
                className="flex items-center gap-4 text-[14px] font-light leading-none text-[#3c5b9b] transition hover:underline"
              >
                BrainADZ Exhibits
                <span className="text-[14px] leading-none">↗</span>
              </a>

              {/* <a
                href="/ai-solutions"
                className="flex items-center gap-4 text-[14px] font-light leading-none text-[#3c5b9b] transition hover:underline"
              >
                AI solutions
                <span className="text-[14px] leading-none">→</span>
              </a> */}
            </div>
          </div>

          {/* COLUMN 3 */}
          <div
            className="flex h-full max-w-97.5 flex-col"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div>
              <h3 className="text-[22px] font-semibold leading-[1.3] tracking-[-0.3px] text-[#161616]">
                BrainADZ Live
              </h3>

              <p className="mt-3  text-[16px] font-light leading-[1.45] tracking-[-0.4px] text-[#262626]">
                See what it takes to work with BrainADZ Live or build your
                skills with our technology programs.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="/about-us"
                className="flex items-center gap-4 text-[14px] font-light leading-none text-[#3c5b9b] transition hover:underline"
              >
                BrainADZ Live
                <span className="text-[14px] leading-none">→</span>
              </a>

              {/* <a
                href="/learning"
                className="flex items-center gap-4 text-[14px] font-light leading-none text-[#3c5b9b] transition hover:underline"
              >
                Start learning
                <span className="text-[14px] leading-none">↗</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}