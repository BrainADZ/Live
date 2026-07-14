"use client";

/* eslint-disable @next/next/no-img-element */

const services = [
  {
    title: "Software Development",
    description:
      "Build secure, scalable, and high-performance software solutions tailored to your business needs",
    href: "/software-services/software-development",
    icon: "/service-icons/software-development.png",
  },
  {
    title: "Mobile App Development",
    description:
      "Create modern, responsive, and high-performance mobile applications for Android and iOS",
    href: "/software-services/mobile-app-development",
    icon: "/service-icons/app-development.png",
  },
  {
    title: "Application Modernization",
    description:
      "Transform legacy applications into modern, scalable, secure, and future-ready digital platforms",
    href: "/software-services/application-modernization",
    icon: "/service-icons/credit.png",
  },
  {
    title: "Web App Development",
    description:
      "Develop fast, scalable, and interactive web applications designed for modern businesses",
    href: "/software-services/web-app-development",
    icon: "/service-icons/web-app-development.png",
  },
  {
    title: "Enterprise Software Solutions",
    description:
      "Build powerful enterprise software systems that streamline operations and support business growth",
    href: "/software-services/enterprise-software-solutions",
    icon: "/service-icons/erp-system.png",
  },
  {
    title: "API Integration",
    description:
      "Connect applications, platforms, and third-party services through secure and reliable API integrations",
    href: "/software-services/api-integration",
    icon: "/service-icons/integration.png",
  },
  {
    title: "CRM Development",
    description:
      "Create custom CRM solutions to manage customers, automate workflows, and improve business relationships",
    href: "/software-services/crm-development",
    icon: "/service-icons/structure.png",
  },
  {
    title: "ERP Development",
    description:
      "Build integrated ERP systems to manage business operations, resources, finance, and workflows efficiently",
    href: "/software-services/erp-development",
    icon: "/service-icons/coding.png",
  },
];

export default function ServiceSection() {
  return (
    <section className="lazy-section mx-auto max-w-450 bg-white px-5 py-16 text-[#161616] md:px-4 lg:px-10">
      {/* TOP HEADING + DESCRIPTION */}
      <div className="mb-27.5 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <h2
          className="max-w-137.5 text-[46px] font-light leading-[1.08] tracking-[-2.4px] text-[#161616] md:text-[52px]"
          data-aos="fade-right"
        >
          Build smarter digital solutions with BrainADZ Live
        </h2>

        <p
          className="max-w-155 text-[22px] font-light leading-[1.45] tracking-[-0.6px] text-[#262626]"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          From custom{" "}
          <span className="text-[#193175]">software development</span> to
          enterprise platforms, we build scalable digital solutions that help
          businesses modernize, automate, and grow.
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

            {/* CUSTOM ICON + ARROW */}
            <div className="relative z-10 flex items-end justify-between">
              <div className="flex h-17.5 w-17.5 items-center justify-center">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <span className="text-[38px] font-light leading-none text-[#193175] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </a>
        ))}
      </div>

      <style jsx>{`
        .border-line {
          position: absolute;
          z-index: 20;
          background: #193175;
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
    </section>
  );
}