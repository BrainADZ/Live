/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

/* eslint-disable @next/next/no-img-element */

import TestimonialSection from "@/components/home/Testimonials";
import Link from "next/link";
import { useState } from "react";
import type { ComponentType, SVGProps } from "react";
import PopupForm from "@/components/PopupForm";

type IconProps = SVGProps<SVGSVGElement>;

function ArrowRightIcon({ className, strokeWidth = 1.6, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function BuildingIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" />
      <path d="M3 21h18" />
      <path d="M8 7h1" />
      <path d="M12 7h1" />
      <path d="M8 11h1" />
      <path d="M12 11h1" />
      <path d="M8 15h1" />
      <path d="M12 15h1" />
      <path d="M8 21v-4h5v4" />
    </svg>
  );
}

function PhoneIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.27-1.27a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function MessageIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </svg>
  );
}

function SendIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}

function SocialIcon({ className, strokeWidth = 1.4, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="6" cy="7" r="3" />
      <circle cx="17" cy="6" r="2.5" />
      <circle cx="17" cy="17" r="3" />
      <path d="M8.7 8.4l5.8 5.8" />
      <path d="M14.6 7.5l-5.8 7" />
    </svg>
  );
}

function LinkedinIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M6.94 8.9H3.7V20h3.24V8.9zM5.32 4C4.28 4 3.5 4.78 3.5 5.8c0 1.01.78 1.8 1.78 1.8h.02c1.06 0 1.82-.79 1.82-1.8C7.1 4.78 6.36 4 5.32 4zM20.5 13.64c0-3.01-1.6-4.41-3.75-4.41-1.73 0-2.5.95-2.93 1.62V8.9h-3.24V20h3.24v-6.2c0-.33.02-.66.12-.9.26-.66.86-1.35 1.86-1.35 1.31 0 1.84 1 1.84 2.47V20h3.24v-6.36h-.38z" />
    </svg>
  );
}

function InstagramIcon({ className, strokeWidth = 1.7, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M16.8 7.2h.01" />
    </svg>
  );
}

function FacebookIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M14.2 8.2V6.7c0-.72.48-.9.82-.9h2.1V2.2L14.24 2.18c-3.2 0-3.93 2.4-3.93 3.94V8.2H7.8v3.7h2.51V22h3.89V11.9h3.22l.15-3.7h-3.37z" />
    </svg>
  );
}

function YoutubeIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M21.58 7.2s-.2-1.43-.82-2.06c-.78-.82-1.66-.82-2.06-.87C15.82 4.05 12 4.05 12 4.05h-.01s-3.82 0-6.7.22c-.4.05-1.28.05-2.06.87-.62.63-.82 2.06-.82 2.06S2.2 8.88 2.2 10.56v1.58c0 1.68.21 3.36.21 3.36s.2 1.43.82 2.06c.78.82 1.8.8 2.25.89 1.64.16 6.52.21 6.52.21s3.83-.01 6.71-.23c.4-.05 1.28-.05 2.06-.87.62-.63.82-2.06.82-2.06s.21-1.68.21-3.36v-1.58c0-1.68-.22-3.36-.22-3.36zM10.08 14.52V8.7l5.05 2.92-5.05 2.9z" />
    </svg>
  );
}

type SocialLink = {
  name: string;
  href: string;
  icon: ComponentType<IconProps>;
};

type ContactInfo = {
  title: string;
  icon: ComponentType<IconProps>;
  primary?: string;
  secondary?: string;
  socials?: SocialLink[];
};

const contactInfo: ContactInfo[] = [
  {
    title: "Corporate address",
    icon: BuildingIcon,
    primary: "BrainADZ Live",
    secondary: "Sector-17 Dwarka, New Delhi, India",
  },
  {
    title: "Phone Numbers",
    icon: PhoneIcon,
    primary: "+91 00000 00000",
    secondary: "Support: +91 00000 00000",
  },
  {
    title: "Email Support",
    icon: MailIcon,
    primary: "info@brainadzlive.com",
    secondary: "support@brainadzlive.com",
  },
  {
    title: "Follow BrainADZ Live",
    icon: SocialIcon,
    socials: [
      { name: "LinkedIn", href: "https://www.linkedin.com/company/brainadz-live/", icon: LinkedinIcon },
      { name: "Instagram", href: "https://www.instagram.com/brainadz.live/", icon: InstagramIcon },
      { name: "Facebook", href: "https://www.facebook.com/brainadzlive", icon: FacebookIcon },
      { name: "YouTube", href: "https://www.youtube.com/@BrainADZLive", icon: YoutubeIcon },
    ],
  },
];

const serviceCategories = {
  "Software Services": [
    "Software Development",
    "Mobile App Development",
    "Application Modernization",
    "Web App Development",
    "Enterprise Software Solutions",
    "API Integration",
    "CRM Development",
    "ERP Development",
    "UI/UX Design",
    "SaaS Development",
    "Cloud Consulting",
  ],
  "Software Platforms": [
    "CRM Software",
    "ERP Software",
    "Signage Application",
    "Cloud Signage Software",
    "Virtual Trail Room",
  ],
  "Digital Signage Products": [
    "A Type Standee",
    "D Type Standee",
    "Wall Mounted Standee",
    "Floor Mounted Standee",
    "Self Ordering Kiosk",
    "LFD Display",
    "LED Display",
    "Interactive Teaching Display",
  ],
  Industries: [
    "Health Care",
    "Education Tech",
    "Finance Tech",
    "Property Tech",
    "Retail",
    "Transport",
    "Telecom",
    "Automotive",
    "Insurance Tech",
    "Travel & Hospitality",
    "Facility Management",
    "Media & Entertainment",
  ],
} as const;

type ServiceCategory = keyof typeof serviceCategories;

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | "">("");
  const [selectedService, setSelectedService] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="bg-white text-[#161616]">
      {/* HERO SECTION */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/Contact.webp"
          alt="Contact BrainADZ Live"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-8 lg:min-h-135 lg:px-12">
          <div className="flex items-center gap-3 text-[16px] font-light md:text-[18px]" data-aos="fade-up">
            <Link href="/" className="text-[#6da0ff] hover:underline">
              Home
            </Link>
            <span className="text-white/80">/</span>
            <span className="text-white/90">Contact</span>
          </div>

          <div className="mt-12 max-w-205 md:mt-14" data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Contact BrainADZ Live
            </h1>
          </div>

          <div className="mt-auto pb-8 md:pb-9 lg:pb-10" data-aos="fade-up" data-aos-delay="200">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Get answers about products, software solutions, smart displays, AI automation, support and business enquiries.
            </p>

            <div className="mt-8">
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#3C5B9B] px-8 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
>
  Enquire Now
  <span className="text-[20px] leading-none">↗</span>
</button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFO + ENQUIRE FORM */}
      <section
        id="enquire"
        className="relative overflow-hidden bg-[#f8faff] px-5 py-20 text-[#161616] md:px-8 lg:px-12 lg:py-28"
      >
        <div className="pointer-events-none absolute -right-45 -top-40 h-105 w-105 rounded-full bg-[#3c5b9b]/[0.07] blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-45 -left-40 h-90 w-90 rounded-full bg-[#3c5b9b]/5 blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-450">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div data-aos="fade-right">
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
                Contact Information
              </p>

              <h2 className="max-w-190 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                We’re here to help you build smarter digital systems
              </h2>
            </div>

            <p
              className="max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Reach out to BrainADZ Live for smart displays, software development, AI automation, kiosks, LED walls, product demos, installation support and business enquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 xl:grid-cols-[0.72fr_1.28fr] xl:gap-14">
            {/* LEFT CONTACT INFO */}
            <div className="space-y-0">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    data-aos="card-reveal"
                    data-aos-delay={index * 100}
                    data-aos-duration="520"
                    className="group relative flex gap-7 border-b border-[#dfe6f1] py-9 first:pt-0 last:border-b-0 last:pb-0"
                  >
                    <div className="relative flex h-21.5 w-21.5 shrink-0 items-center justify-center rounded-3xl bg-[#3c5b9b]/10 text-[#3c5b9b] transition-all duration-300 group-hover:bg-[#3c5b9b] group-hover:text-white group-hover:shadow-[0_18px_45px_rgba(60,91,155,0.22)]">
                      <div className="absolute -inset-1.5 rounded-[28px] border border-[#3c5b9b]/10 transition duration-300 group-hover:border-[#3c5b9b]/25" />
                      <Icon className="relative z-10 h-11.5 w-11.5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-[24px] font-light leading-tight tracking-[-0.6px] text-[#262626] transition group-hover:text-[#3c5b9b] md:text-[28px]">
                        {item.title}
                      </h3>

                      {item.socials ? (
                        <div className="mt-5 grid grid-cols-2 gap-3">
                          {item.socials.map((social) => {
                            const SocialMediaIcon = social.icon;

                            return (
                              <a
                                key={social.name}
                                href={social.href}
                                className="group/social inline-flex w-full items-center gap-3 rounded-full border border-[#dfe6f1] bg-white px-4 py-2.5 text-[15px] font-light text-[#3c5b9b] shadow-[0_10px_30px_rgba(22,22,22,0.035)] transition-all duration-300 hover:border-[#3c5b9b] hover:bg-[#3c5b9b] hover:text-white"
                              >
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3c5b9b]/10 text-[#3c5b9b] transition group-hover/social:bg-white group-hover/social:text-[#3c5b9b]">
                                  <SocialMediaIcon className="h-3.75 w-3.75" />
                                </span>
                                <span>{social.name}</span>
                              </a>
                            );
                          })}
                        </div>
                      ) : (
                        <>
                          <p className="mt-4 text-[18px] font-light leading-[1.55] text-[#3c5b9b] md:text-[19px]">
                            {item.primary}
                          </p>
                          <p className="mt-1 max-w-110 text-[16px] font-light leading-[1.65] text-[#616161] md:text-[17px]">
                            {item.secondary}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT ENQUIRE FORM */}
            <div
              className="rounded-[22px] border border-[#dfe6f1] bg-white p-7 shadow-[0_24px_80px_rgba(22,22,22,0.07)] md:p-8 lg:p-10"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="mb-10 text-center">
                <h2 className="text-[34px] font-light leading-[1.15] tracking-[-1.2px] text-[#262626] md:text-[42px]">
                  Enquire Now
                </h2>

                <p className="mx-auto mt-4 max-w-170 text-[16px] font-light leading-[1.7] text-[#525252] md:text-[18px]">
                  Share your details and our team will connect with you for the right solution.
                </p>
              </div>

              <form onSubmit={(event) => event.preventDefault()} className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#3c5b9b] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#3c5b9b] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#3c5b9b] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Company / Organisation
                  </label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#3c5b9b] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Select Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(event) => {
                      setSelectedCategory(event.target.value as ServiceCategory);
                      setSelectedService("");
                    }}
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition focus:border-[#3c5b9b] focus:bg-white"
                  >
                    <option value="" disabled>
                      Choose a category
                    </option>

                    {Object.keys(serviceCategories).map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Select Service
                  </label>
                  <select
                    value={selectedService}
                    disabled={!selectedCategory}
                    onChange={(event) => setSelectedService(event.target.value)}
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition disabled:cursor-not-allowed disabled:opacity-60 focus:border-[#3c5b9b] focus:bg-white"
                  >
                    <option value="" disabled>
                      {selectedCategory ? "Choose a service" : "Select category first"}
                    </option>

                    {selectedCategory &&
                      serviceCategories[selectedCategory].map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Project Description *
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    className="w-full resize-none rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 py-4 text-[15px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#3c5b9b] focus:bg-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-md bg-[#3c5b9b] px-6 text-[16px] font-normal text-white shadow-[0_18px_42px_rgba(60,91,155,0.22)] transition-all duration-300 hover:bg-[#2f4a82] md:w-auto md:min-w-60"
                  >
                    <SendIcon className="h-5.25 w-5.25 transition-transform duration-300 group-hover:translate-x-1" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FIND US MAP */}
      <section id="find-us" className="bg-white px-5 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div data-aos="fade-right">
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
                Find Us
              </p>
              <h2 className="max-w-180 text-[38px] font-light leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Visit or connect with BrainADZ Live
              </h2>
            </div>

            <p className="max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]" data-aos="fade-left" data-aos-delay="100">
              Connect with us for digital signage, software development, AI automation, smart kiosk, LED wall and business technology consultation.
            </p>
          </div>

          <div className="overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-[#f8faff] shadow-[0_24px_80px_rgba(22,22,22,0.06)]" data-aos="card-reveal" data-aos-duration="520">
            <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr]">
              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#3c5b9b]">
                  Office Location
                </p>

                <h3 className="max-w-130 text-[32px] font-light leading-[1.15] tracking-[-1.2px] text-[#262626] md:text-[40px]">
                  BrainADZ Live
                </h3>

                <p className="mt-5 max-w-140 text-[17px] font-light leading-[1.75] text-[#525252] md:text-[18px]">
                  Sector-17 Dwarka, New Delhi, India
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sector-17%20Dwarka%2C%20New%20Delhi%2C%20India"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-[#3c5b9b] px-6 text-[15px] font-normal text-[#3c5b9b] transition hover:bg-[#3c5b9b] hover:text-white"
                >
                  Open in Maps
                  <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              <div className="min-h-105 bg-[#eef2f8] lg:min-h-130">
                <iframe
                  title="BrainADZ Live Location Map"
                  src="https://www.google.com/maps?q=Sector-17%20Dwarka%2C%20New%20Delhi%2C%20India&output=embed"
                  className="h-full min-h-105 w-full border-0 lg:min-h-130"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />

      <PopupForm
  isOpen={isPopupOpen}
  onClose={() => setIsPopupOpen(false)}
/>
    </main>
  );
}