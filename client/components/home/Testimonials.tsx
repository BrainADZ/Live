"use client";

/* eslint-disable @next/next/no-img-element */

import { Quote, Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Retail Business Owner",
    role: "Digital Standee Deployment",
    image: "/testimonials/Trump.jpg",
    message:
      "BrainADZ Live helped us upgrade our in-store branding with smart digital standees. The installation was smooth, the display quality is excellent, and the support team was very responsive.",
  },
  {
    name: "Restaurant Manager",
    role: "Menu Display & Kiosk Solution",
    image: "/testimonials/Modi.jpg",
    message:
      "Their menu display system made our customer experience cleaner and faster. The solution looks premium and helps us manage promotions with better visibility.",
  },
  {
    name: "Education Institute",
    role: "Interactive Display Solution",
    image: "/testimonials/Jezz.jpg",
    message:
      "We needed a reliable digital setup for teaching and presentations. BrainADZ Live delivered a professional solution that is easy to use and works well for our team.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-white px-5 py-20 text-[#161616] md:px-8 lg:px-12 overflow-hidden">
      <div className="mx-auto max-w-450">
        {/* TOP HEADING */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div data-aos="fade-right">
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
              Testimonials
            </p>

            <h2 className="max-w-180 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Trusted by businesses building smarter digital experiences
            </h2>
          </div>

          <p
            className="max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Our clients rely on BrainADZ Live for smart display products,
            software solutions, automation, and reliable implementation support.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              data-aos="card-reveal"
              data-aos-delay={index * 100}
              data-aos-duration="520"
              className={`group relative flex min-h-97.5 flex-col justify-between overflow-hidden rounded-[18px] border border-[#dfe6f1] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(22,22,22,0.07)] md:p-8 ${
                index === 1 ? "bg-[#f8faff]" : "bg-white"
              }`}
            >
              {/* SOFT GLOW */}
              <div className="absolute -right-15 -top-15 h-37.5 w-37.5 rounded-full bg-[#3c5b9b]/[0.07] transition duration-300 group-hover:scale-125" />

              {/* TOP */}
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex h-13.5 w-13.5 items-center justify-center rounded-full border border-[#dbe3f0] bg-[#f8faff] text-[#3c5b9b] transition-all duration-300 group-hover:bg-[#3c5b9b] group-hover:text-white">
                    <Quote size={25} strokeWidth={1.4} />
                  </div>

                  <div className="flex items-center gap-1 text-[#3c5b9b]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={15}
                        strokeWidth={1.4}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-9 text-[18px] font-light leading-[1.75] tracking-[-0.3px] text-[#393939] md:text-[19px]">
                  “{item.message}”
                </p>
              </div>

              {/* CLIENT INFO WITH IMAGE */}
              <div className="relative z-10 mt-10 border-t border-[#dfe6f1] pt-6">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-14.5 w-14.5 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#dbe3f0] bg-[#f8faff] text-[18px] font-light text-[#3c5b9b]">
                    <span>{item.name.charAt(0)}</span>

                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div>
                    <h3 className="text-[19px] font-light leading-[1.35] tracking-[-0.3px] text-[#262626] md:text-[20px]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-[14px] font-light leading-normal text-[#616161]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* HOVER LINE */}
              <span className="absolute bottom-0 left-0 h-0.75 w-0 bg-[#3c5b9b] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center" data-aos="fade-up">
          <a
            href="/case-studies"
            className="group inline-flex h-13.5 items-center justify-center gap-4 rounded-full border border-[#3c5b9b] px-8 text-[15px] font-normal text-[#3c5b9b] transition-all duration-300 hover:bg-[#3c5b9b] hover:text-white"
          >
            View client stories
            <ArrowRight
              size={20}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}