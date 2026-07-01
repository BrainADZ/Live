"use client";

/* eslint-disable @next/next/no-img-element */

const services = [
  {
    title: "AI agents",
    description:
      "Create intelligent AI agents that automate tasks and improve business workflows",
    href: "/services/ai-agents",
    icon: "/svg1.png",
  },
  {
    title: "Data for AI",
    description:
      "Prepare, manage, and structure your business data for AI-powered systems",
    href: "/services/data-for-ai",
    icon: "/svg2.png",
  },
  {
    title: "Automation",
    description:
      "Discover how automation solutions increase productivity while managing costs",
    href: "/services/automation",
    icon: "/svg3.png",
  },
  {
    title: "Hybrid cloud",
    description:
      "Build flexible, secure, and scalable cloud-connected business infrastructure",
    href: "/services/hybrid-cloud",
    icon: "/svg1.png",
  },
  {
    title: "AI models",
    description:
      "Develop AI models for prediction, analytics, automation, and smarter decisions",
    href: "/services/ai-models",
    icon: "/svg1.png",
  },
  {
    title: "Analytics",
    description:
      "Support data-driven decisions for your business with intelligent analytics",
    href: "/services/analytics",
    icon: "/svg2.png",
  },
  {
    title: "Security and identity",
    description:
      "Protect your digital systems with secure access, identity, and data protection",
    href: "/services/security-identity",
    icon: "/svg3.png",
  },
  {
    title: "Consulting",
    description:
      "Get expert guidance for technology strategy, digital transformation, and growth",
    href: "/services/consulting",
    icon: "/svg1.png",
  },
];

export default function ServiceSection() {
  return (
    <section className="lazy-section bg-white px-5 py-16 text-[#161616] md:px-8 lg:px-10 mx-auto max-w-450">
      <div className="">
        {/* TOP HEADING + DESCRIPTION */}
        <div className="mb-27.5 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <h2
            className="max-w-137.5 text-[46px] font-light leading-[1.08] tracking-[-2.4px] text-[#161616] md:text-[52px]"
            data-aos="fade-right"
          >
            Lead in the AI era with BrainADZ Live
          </h2>

          <p
            className="max-w-155 text-[22px] font-light leading-[1.45] tracking-[-0.6px] text-[#262626]"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            From next-generation AI to cutting-edge{" "}
            <span className="text-[#3c5b9b]">software</span>, our deep
            expertise across industries can help you reinvent how your business
            works in the age of AI.
          </p>
        </div>

        {/* SERVICE GRID */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <a
              key={service.title}
              href={service.href}
              data-aos="card-reveal"
              data-aos-delay={(index % 4) * 100}
              data-aos-duration="520"
              className="service-card group relative flex min-h-63.75 flex-col justify-between overflow-hidden rounded-[5px] border border-[#c6c6c6] bg-white p-6 transition-colors duration-300 hover:bg-[#eeeeee]"
            >
              {/* ANIMATED BORDER */}
              <span className="border-line border-top" />
              <span className="border-line border-right" />
              <span className="border-line border-bottom" />
              <span className="border-line border-left" />

              {/* TITLE / DESCRIPTION AREA */}
              <div className="relative z-10 min-h-24">
                <h3 className="max-w-82.5 text-[21px] font-light leading-[1.35] tracking-[-0.2px] text-[#242424] transition-all duration-300 group-hover:opacity-0">
                  {service.title}
                </h3>

                <p className="absolute left-0 top-0 max-w-90 text-[20px] font-light leading-[1.45] tracking-[-0.3px] text-[#242424] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  {service.description}
                </p>
              </div>

              {/* BOTTOM ICON + ARROW */}
              <div className="relative z-10 flex items-end justify-between">
                  <img
                    src={service.icon}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="h-17.5 w-17.5 object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                  />

                <span className="text-[38px] font-light leading-none text-[#3c5b9b] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

              <style jsx>{`
                .border-line {
                  position: absolute;
                  z-index: 20;
                  background: #3c5b9b;
                  pointer-events: none;
                }

                .border-top {
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 2px;
                  transform: scaleX(0);
                  transform-origin: left;
                  transition: transform 0.22s ease;
                }

                .border-right {
                  top: 0;
                  right: 0;
                  width: 2px;
                  height: 100%;
                  transform: scaleY(0);
                  transform-origin: top;
                  transition: transform 0.22s ease 0.12s;
                }

                .border-bottom {
                  bottom: 0;
                  right: 0;
                  width: 100%;
                  height: 2px;
                  transform: scaleX(0);
                  transform-origin: right;
                  transition: transform 0.22s ease 0.24s;
                }

                .border-left {
                  bottom: 0;
                  left: 0;
                  width: 2px;
                  height: 100%;
                  transform: scaleY(0);
                  transform-origin: bottom;
                  transition: transform 0.22s ease 0.36s;
                }

                .service-card:hover .border-top {
                  transform: scaleX(1);
                }

                .service-card:hover .border-right {
                  transform: scaleY(1);
                }

                .service-card:hover .border-bottom {
                  transform: scaleX(1);
                }

                .service-card:hover .border-left {
                  transform: scaleY(1);
                }
              `}</style>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}