/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Target,
  Users,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import PopupForm from "@/components/PopupForm";
import { useState } from "react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

const coreTeam: TeamMember[] = [
  {
    name: "Sumit Jaiswal",
    role: "CEO & Director",
    image: "/team/sumit.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Mayur Sharma",
    role: "Marketing Head",
    image: "/team/muy.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Rakesh Kumar",
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
    image: "/team/sale.png",
    linkedin: "https://www.linkedin.com/",
  },


];

const projectTeam: TeamMember[] = [
  {
    name: "Roshan Kumar",
    role: "Creative Head",
    image: "/team/ros.png",
    linkedin: "https://www.linkedin.com/",
  },

  {
    name: "Anand Upadhyay",
    role: "Technical Manager",
    image: "/team/tech.png",
    linkedin: "https://www.linkedin.com/",
  },

  {
    name: "Rishabh Pratap",
    role: "Sr. Software Developer",
    image: "/team/sde.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Ayushman Singh",
    role: "Software Developer",
    image: "/team/aa1.png",
    linkedin: "https://www.linkedin.com/",
  },

  {
    name: "Komal Kushwaha",
    role: "Designer",
    image: "/team/koma.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Shivangi Thankur",
    role: "Digital Marketing Manage",
    image: "/team/sa.png",
    linkedin: "https://www.linkedin.com/",
  },
];

const SHOW_PROJECT_TEAM = true;

const values = [
  {
    title: "Purpose Driven",
    desc: "We align every step with our mission and client goals.",
    icon: Target,
  },
  {
    title: "Collaborative",
    desc: "We work together to achieve greater outcomes.",
    icon: Users,
  },
  //   {
  //     title: "Innovative",
  //     desc: "We embrace new ideas and emerging technologies.",
  //     icon: Lightbulb,
  //   },
  //   {
  //     title: "Responsible",
  //     desc: "We deliver with ownership, quality, and accountability.",
  //     icon: ShieldCheck,
  //   },
];

function MemberCard({
  member,
  compact = false,
}: {
  member: TeamMember;
  compact?: boolean;
}) {
  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden rounded-[22px] border border-[#e8e8e8] bg-white transition-all duration-500 group-hover:-translate-y-2">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} LinkedIn profile`}
          className="absolute left-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-[#161616] opacity-0 shadow-xl transition-all duration-300 hover:bg-[#193175] hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
        >
          <FaLinkedinIn size={16} />
        </a>
      </div>

      <div className="pt-5">
        <h3
          className={`font-medium tracking-[-0.3px] text-[#161616] ${compact ? "text-[16px]" : "text-[20px]"
            }`}
        >
          {member.name}
        </h3>

        <p
          className={`mt-1 font-light text-[#646464] ${compact ? "text-[13px]" : "text-[16px]"
            }`}
        >
          {member.role}
        </p>
      </div>
    </div>
  );
}

export default function OurCoreTeamPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#161616]">
      {/* HERO */}
      <section className="relative min-h-[420px] overflow-hidden bg-black text-white md:min-h-[480px] lg:min-h-[540px]">
        <img
          src="/hero/our-team.jpg"
          alt="Our Core Team"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[540px] max-w-[1800px] flex-col px-5 py-10 md:min-h-[600px] md:px-8 lg:min-h-[540px] lg:px-12">
          <div
            className="flex items-center gap-3 text-[16px] font-light md:text-[18px]"
            data-aos="fade-up"
          >
            <Link href="/" className="text-[#6da0ff] hover:underline">
              Home
            </Link>

            <span className="text-white/80">/</span>

            <Link href="/about" className="text-[#fbfbfb] hover:underline">
              About
            </Link>

            <span className="text-white/80">/</span>

            <span className="text-white/90">Our Team</span>
          </div>

          <div
            className="mt-12 max-w-[820px] md:mt-14"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Meet the people behind BrainADZ Live
            </h1>
          </div>

          <div
            className="mt-auto pb-8 md:pb-9 lg:pb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="max-w-[780px] text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Leadership sets the direction, and our project teams turn plans
              into working software, platforms, digital signage and deployed
              solutions.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Enquire Now
                <span className="text-[20px] leading-none"><ArrowRight /></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white px-5 py-22 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-450 grid-cols-1 gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-5 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
              How Our Team Works
            </p>

            <h2 className="max-w-180 text-[38px] font-light leading-[1.12] tracking-[-1.5px] text-[#161616] md:text-[52px]">
              Leadership, delivery and technical teams working as one
            </h2>

            <p className="mt-7 max-w-190 text-[17px] font-light leading-[1.8] text-[#5a5a5a]">
              BrainADZ Live brings together leadership, sales, delivery,
              technology, design and development teams. Our core team guides
              business direction and priorities, while project teams plan,
              design, build and support the work required for each engagement.
              Clear ownership and cross-functional collaboration help move
              projects from discussion to delivery.
            </p>

            {/* <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="aspect-square rounded-[22px] border border-[#e8e8e8] bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(0,0,0,0.08)]"
                  >
                    <Icon
                      size={32}
                      strokeWidth={1.5}
                      className="mb-5 text-[#193175]"
                    />

                    <h3 className="mb-2 text-[15px] font-medium text-[#161616]">
                      {item.title}
                    </h3>

                    <p className="text-[13px] font-light leading-[1.6] text-[#707070]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div> */}
          </div>

          <div className="overflow-hidden rounded-[24px] border border-[#e6e6e6] bg-white p-3 shadow-[0_16px_60px_rgba(0,0,0,0.08)]">
            <img
              src="/team/team.webp"
              alt="BrainADZ Live team workspace"
              className="h-[520px] w-full rounded-[18px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* CORE TEAM */}
      <section className="bg-[#fafafa] px-5 py-22 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-450">
          <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
            Our Core Team
          </p>

          <h2 className="mb-14 max-w-220 text-[36px] font-light leading-[1.15] tracking-[-1.3px] text-[#161616] md:text-[52px]">
            Leadership shaping direction, priorities and delivery
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {coreTeam.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT TEAM - hidden until final member images are available */}
      {SHOW_PROJECT_TEAM && (
        <section className="bg-white px-5 py-24 md:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-450">
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
              Our Project Team
            </p>

            <div className="mb-14 max-w-260">
              <h2 className="text-[36px] font-light leading-[1.15] tracking-[-1.3px] text-[#161616] md:text-[52px]">
                The people turning plans into working products and deployments
              </h2>

              <p className="mt-6 max-w-190 text-[17px] font-light leading-[1.8] text-[#5a5a5a]">
                Our project team brings together sales, delivery, technology,
                project management, design and development roles. Each function
                contributes at a different stage, helping teams coordinate
                requirements, decisions, implementation, review and delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-7 gap-y-11 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
              {projectTeam.map((member) => (
                <MemberCard key={member.name} member={member} compact />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="lazy-section bg-white py-12">
        <div className="mx-auto max-w-450 px-8 lg:px-10">
          <div
            className="flex min-h-65 overflow-hidden rounded-none bg-[#193175] md:min-h-75"
            data-aos="zoom-in"
          >
            {/* LEFT IMAGE */}
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/CTA/home-cta.png"
                alt="BrainADZ Live Team"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              {/* TEXT */}
              <div className="max-w-140">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Want to work with the team behind BrainADZ Live projects?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Tell us what you need to build, improve or deploy, and our team
                  can understand the project, the right expertise and the next
                  steps.
                </p>
              </div>

              {/* BUTTON */}
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#193175] md:min-w-57.5"
              >
                <span>Enquire Now</span>

                <span className="text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <PopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </main>
  );
}
