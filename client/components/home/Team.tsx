"use client";

/* eslint-disable @next/next/no-img-element */

import { Mail, ArrowRight, ExternalLink } from "lucide-react";

const teamMembers = [
  {
    name: "Rishabh Pratap",
    role: "Founder & Strategy Lead",
    image: "/team/team-1.jpg",
    description:
      "Leading product strategy, digital transformation, and business growth for smarter technology solutions.",
    profile: "#",
    email: "mailto:info@brainadzlive.com",
  },
  {
    name: "",
    role: "AI & Automation Lead",
    image: "/team/team-2.jpg",
    description:
      "Building intelligent workflows, automation systems, and AI-powered business solutions.",
    profile: "#",
    email: "mailto:info@brainadzlive.com",
  },
  {
    name: "",
    role: "Hardware Solutions Lead",
    image: "/team/team-3.jpg",
    description:
      "Managing smart kiosks, digital standees, LED walls, and interactive display deployments.",
    profile: "#",
    email: "mailto:info@brainadzlive.com",
  },
  {
    name: "",
    role: "Client Success Lead",
    image: "/team/team-4.jpg",
    description:
      "Ensuring smooth communication, project delivery, support, and long-term client satisfaction.",
    profile: "#",
    email: "mailto:info@brainadzlive.com",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white px-5 py-20 text-[#161616] md:px-8 lg:px-12">
      <div className="mx-auto max-w-450">
        {/* HEADING */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
              Our Team
            </p>

            <h2 className="max-w-180 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Meet the people building smarter digital experiences
            </h2>
          </div>

          <p className="max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]">
            Our team brings together software engineering, AI, hardware
            integration, design, and client support to deliver reliable digital
            systems for modern businesses.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="group relative overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-[#f8faff] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(22,22,22,0.07)]"
            >
              {/* IMAGE */}
              <div className="relative aspect-[1/1.05] overflow-hidden bg-[#eef2f8]">
                <div className="absolute inset-0 flex items-center justify-center text-[42px] font-light text-[#3c5b9b]">
                  {member.name.charAt(0)}
                </div>

                <img
                  src={member.image}
                  alt={member.name}
                  className="relative z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(0,0,0,0)_45%,rgba(0,0,0,0.34)_100%)] opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* SOCIAL ICONS */}
                <div className="absolute bottom-5 right-5 z-30 flex translate-y-4 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href={member.profile}
                    aria-label={`${member.name} Profile`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#3c5b9b] transition hover:bg-[#3c5b9b] hover:text-white"
                  >
                    <ExternalLink size={18} strokeWidth={1.6} />
                  </a>

                  <a
                    href={member.email}
                    aria-label={`${member.name} Email`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#3c5b9b] transition hover:bg-[#3c5b9b] hover:text-white"
                  >
                    <Mail size={18} strokeWidth={1.6} />
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative p-7">
                <h3 className="text-[22px] font-light leading-[1.3] tracking-[-0.4px] text-[#262626] transition group-hover:text-[#3c5b9b]">
                  {member.name}
                </h3>

                <p className="mt-2 text-[14px] font-light uppercase tracking-[1.3px] text-[#3c5b9b]">
                  {member.role}
                </p>

                <p className="mt-5 min-h-21 text-[15px] font-light leading-[1.7] text-[#616161]">
                  {member.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-[#dfe6f1] pt-5">
                  <span className="text-[15px] font-light text-[#3c5b9b]">
                    View profile
                  </span>

                  <ArrowRight
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#3c5b9b] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>

              {/* HOVER LINE */}
              <span className="absolute bottom-0 left-0 h-0.75 w-0 bg-[#3c5b9b] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}