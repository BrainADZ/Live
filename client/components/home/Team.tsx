
"use client";

/* eslint-disable @next/next/no-img-element */

import { titleCaseHeading } from "@/lib/title-case-heading";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  phone: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Sumit Jaiswal",
    role: "CEO & Director",
    image: "/team/sumit.png",
    linkedin: "http://linkedin.com/in/sumit-jaiswal-73707438/",
    phone: "+91 88823 51644",
  },
  {
    name: "Rakesh Singh Rajput",
    role: "Sales Manager",
    image: "/team/head.png",
    linkedin:
      "https://www.linkedin.com/in/rakesh-singh-rajput-a4957419/",
    phone: "+91 99110 78143",
  },
  {
    name: "Sarthak Raina",
    role: "Corporate Sale & Project Manager",
    image: "/team/cops.png",
    linkedin:
      "https://www.linkedin.com/in/sarthak-raina-693427165/",
    phone: "+91 92112 93332",
  },
  {
    name: "Pooja Paswan",
    role: "Sales Executive",
    image: "/team/sale.png",
    linkedin:
      "https://www.linkedin.com/in/pooja-paswan-620693245/",
    phone: "+91 70489 15802",
  },
  {
    name: "Anand Upadhyay",
    role: "Technical Manager",
    image: "/team/tech.png",
    linkedin:
      "https://www.linkedin.com/in/anand-upadhyay-553875220/",
    phone: "+91 92113 66484",
  },
];

export default function TeamSection() {
  return (
    <section className="section-spacing bg-white px-5 text-[#161616] md:px-4 lg:px-12">
      <div className="mx-auto w-full max-w-[1800px]">

        {/* SECTION HEADING */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

          {/* LEFT */}
          <div>
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
              Our Team
            </p>

            <h2 className="max-w-180 text-[38px] font-normal leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Meet the People Building Smarter Digital Experiences
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

              {/* TEAM MEMBER IMAGE */}
              <div className="relative aspect-square overflow-hidden rounded-[20px] border border-[#e8e8e8] bg-[#f5f7fb] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_rgba(22,22,22,0.1)]">

                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
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
                  className="absolute right-4 top-4 z-20 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-[#161616] opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:bg-[#193175] hover:text-white group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
                >
                  <FaLinkedinIn size={16} />
                </a>
              </div>

              {/* MEMBER DETAILS */}
              <div className="pt-5">

                {/* NAME */}
                <h3 className="text-[19px] font-medium leading-[1.3] tracking-[-0.3px] text-[#161616]">
                  {titleCaseHeading(member.name)}
                </h3>

                {/* DESIGNATION */}
                <p className="mt-1.5 text-[14px] font-light leading-[1.5] text-[#646464]">
                  {member.role}
                </p>

                {/* PHONE NUMBER */}
                {member.phone.trim() && (
                  <a
                    href={`tel:${member.phone.replace(/[^\d+]/g, "")}`}
                    aria-label={`Call ${member.name} at ${member.phone}`}
                    className="mt-3 inline-flex items-center gap-2 text-[14px] font-medium text-[#193175] transition-all duration-300 hover:text-[#161616]"
                  >
                    <Phone
                      size={16}
                      strokeWidth={1.8}
                      className="shrink-0"
                    />

                    <span className="transition-colors duration-300">
                      {member.phone}
                    </span>
                  </a>
                )}

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}