"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Sumit Jaiswal",
    role: "CEO & Director",
    image: "/team/sumit.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Rakesh ",
    role: "Sales Manager",
  image: "/team/head.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Sarthak Raina",
    role: "Corporate Sale & Project Manager",
    image: "/team/cops.png",
    linkedin: "https://www.linkedin.com/in/",
  },
  {
    name: "Pooja Paswan",
    role: "Sales Executive",
    image: "/team/sales.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Raushan Kumar",
    role: "Technical Manager",
    image: "/team/tech.png",
    linkedin: "https://www.linkedin.com/",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white px-5 py-10 text-[#161616] md:px-8 lg:px-12 lg:py-18">
      <div className="mx-auto max-w-450">
        {/* SECTION HEADING */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          {/* LEFT */}
          <div>
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
              Our Team
            </p>

            <h2 className="max-w-180 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Meet the people building smarter digital experiences
            </h2>
          </div>

          {/* RIGHT - CORE TEAM LINK */}
          <div className="flex lg:justify-end lg:pb-2">
            <Link
              href="/about-us/our-core-team"
              className="group inline-flex items-center gap-3 text-[16px] font-medium text-[#193175] transition-all duration-300 hover:text-[#161616] md:text-[17px]"
            >
              <span>Our Core Team</span>

              <ArrowRight
                size={21}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </div>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {teamMembers.map((member) => (
            <article key={member.name} className="group">
              {/* IMAGE */}
              <div className="relative aspect-square overflow-hidden rounded-[20px] border border-[#e8e8e8] bg-[#f5f7fb] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_rgba(22,22,22,0.1)]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* DARK HOVER OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* LINKEDIN - TOP RIGHT */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} LinkedIn profile`}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute right-4 top-4 z-20 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-[#161616] opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:bg-[#193175] hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <FaLinkedinIn size={16} />
                </a>
              </div>

              {/* MEMBER DETAILS */}
              <div className="pt-5">
                <h3 className="text-[19px] font-medium leading-[1.3] tracking-[-0.3px] text-[#161616]">
                  {member.name}
                </h3>

                <p className="mt-1.5 text-[14px] font-light leading-[1.5] text-[#646464]">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
