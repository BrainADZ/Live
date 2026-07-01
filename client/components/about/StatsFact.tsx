"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Network,
  Handshake,
  Bot,
} from "lucide-react";
import StatsSection from "../home/Stats";

const facts = [
  {
    value: "120+",
    label: "digital installations delivered across business locations",
  },
  {
    value: "8+",
    label: "product categories across hardware and software solutions",
  },
  {
    value: "360°",
    label: "end-to-end support from planning to deployment",
  },
  {
    value: "24/7",
    label: "support approach for business-critical digital systems",
  },
];

const services = [
  {
    title: "Consulting",
    description:
      "Work with BrainADZ Live experts to plan, design and future-proof your digital systems.",
    icon: BriefcaseBusiness,
    href: "/consulting",
  },
  {
    title: "Software",
    description:
      "Build scalable software, dashboards, automation tools and AI-enabled business solutions.",
    icon: Code2,
    href: "/services",
  },
  {
    title: "Infrastructure",
    description:
      "Deploy reliable digital displays, kiosks, LED walls and smart hardware infrastructure.",
    icon: Network,
    href: "/infrastructure",
  },
  {
    title: "Strategic Partnerships",
    description:
      "Design, deploy and manage end-to-end solutions for long-term business growth.",
    icon: Handshake,
    href: "/partnerships",
  },
  {
    title: "AI & Automation",
    description:
      "Improve productivity with intelligent workflows, analytics and AI-powered automation.",
    icon: Bot,
    href: "/services/ai-automation",
  },
];

export default function FastFacts() {
  return (
    <section className="bg-white ">
      <div >
        {/* FAST FACTS */}
        <div>
          <StatsSection />
        </div>

        {/* TECHNOLOGY AND SERVICES */}
        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16 px-5 text-[#161616] md:px-8 lg:px-12">
          {/* LEFT TITLE */}
          <div data-aos="fade-right">
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
              Technology & Services
            </p>

            <h3 className="max-w-[430px] text-[38px] font-light leading-[1.12] tracking-[-1.6px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Built for smarter business systems
            </h3>

            <p className="mt-6 max-w-[520px] text-[16px] font-light leading-[1.7] text-[#525252] md:text-[18px]">
              We bring consulting, software, infrastructure, partnerships, and
              automation together to support modern digital experiences.
            </p>
          </div>

          {/* RIGHT SERVICES */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group max-w-[360px]"
                  data-aos="card-reveal"
                  data-aos-delay={(index % 3) * 100}
                  data-aos-duration="520"
                >
                  <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#dbe3f0] bg-[#f8faff] text-[#3c5b9b] transition-all duration-300 group-hover:bg-[#3c5b9b] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.45} />
                  </div>

                  <h4 className="text-[18px] font-light leading-[1.35] tracking-[-0.3px] text-[#262626] transition duration-300 group-hover:text-[#3c5b9b] md:text-[20px]">
                    {service.title}
                  </h4>

                  <p className="mt-3 text-[15px] font-light leading-[1.65] tracking-[-0.1px] text-[#616161] md:text-[16px]">
                    {service.description}
                  </p>

                  {/* <a
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-3 text-[15px] font-light text-[#3c5b9b] transition hover:underline"
                  >
                    Learn more
                    <ArrowRight
                      size={18}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
