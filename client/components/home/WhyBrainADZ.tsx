"use client";

const reasons = [
  {
    title: "Hardware + Software Expertise",
    description:
      "We combine smart display products with reliable software systems for complete digital solutions.",
    icon: "/service-icons/hardware-software.svg",
  },
  {
    title: "AI-driven Approach",
    description:
      "Our solutions are designed with automation, analytics, and AI capabilities for smarter operations.",
    icon: "/service-icons/ai.svg",
  },
  {
    title: "Secure Architecture",
    description:
      "We focus on scalable, secure, and maintainable technology architecture for business growth.",
    icon: "/service-icons/architecture.svg",
  },
  {
    title: "Custom Workflows",
    description:
      "Every business is different, so we design workflows and systems around your actual needs.",
    icon: "/service-icons/workflow.svg",
  },
  {
    title: "Reliable Support",
    description:
      "From setup to maintenance, our team supports your digital systems with a practical approach.",
    icon: "/service-icons/support.svg",
  },
  {
    title: "Business-first Delivery",
    description:
      "We build technology that helps improve communication, engagement, automation, and performance.",
    icon: "/service-icons/business.svg",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="lazy-section bg-white px-5 py-20 text-[#161616] md:px-8 lg:px-12">
      <div className="mx-auto max-w-450">
        {/* TOP HEADING LEFT */}
        <div className="mb-14 max-w-205" data-aos="fade-up">
          <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
            Why Choose BrainADZLive
          </p>

          <h2 className="max-w-190 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
            Technology solutions built with clarity, reliability, and scale
          </h2>

          <p className="mt-6 max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
            We help businesses move from idea to execution with smart hardware,
            custom software, automation, and AI-enabled systems.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              data-aos="card-reveal"
              data-aos-delay={(index % 3) * 100}
              data-aos-duration="520"
              className="group relative min-h-66.25 overflow-hidden rounded-2xl border border-[#dfe6f1] bg-[#f8faff] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(22,22,22,0.07)] md:p-8"
            >
              {/* SOFT BG GLOW */}
              <div className="absolute -right-13.75 -top-13.75 h-36.25 w-36.25 rounded-full bg-[#193175]/[0.07] transition duration-300 group-hover:scale-125" />

              {/* CUSTOM DOWNLOADED ICON */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#dbe3f0] bg-white transition-all duration-300 group-hover:border-[#193175]/30">
                <img
                  src={reason.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110 md:h-10 md:w-10"
                />
              </div>

              {/* TEXT */}
              <h3 className="relative z-10 mt-7 text-[21px] font-light leading-[1.35] tracking-[-0.4px] text-[#262626] md:text-[22px]">
                {reason.title}
              </h3>

              <p className="relative z-10 mt-4 max-w-105 text-[15px] font-light leading-[1.7] text-[#616161] md:text-[16px]">
                {reason.description}
              </p>

              {/* HOVER LINE */}
              <span className="absolute bottom-0 left-0 h-0.75 w-0 bg-[#193175] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}