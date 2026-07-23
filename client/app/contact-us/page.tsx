/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

/* eslint-disable @next/next/no-img-element */

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { type FormEvent, useState } from "react";
import type { SVGProps } from "react";
import PopupForm from "@/components/PopupForm";
import { getApiUrl } from "@/lib/api";

type IconProps = SVGProps<SVGSVGElement>;

function ArrowRightIcon({
  className,
  strokeWidth = 1.6,
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function SendIcon({
  className,
  strokeWidth = 1.4,
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}

type SocialLink = {
  name: string;
  href: string;
  icon: string;
  iconAlt: string;
};

type ContactInfo = {
  title: string;
  icon: string;
  iconAlt: string;
  primary?: string;
  secondary?: string;
  socials?: SocialLink[];
};

const contactInfo: ContactInfo[] = [
  {
    title: "Corporate Address",
    icon: "/contact/address.svg",
    iconAlt: "Office address",
    primary: "BrainADZ Live",
    secondary:
      "Apex Square III, UGF, Plot 6, Pocket B-3, Sector-17, Dwarka, New Delhi 110075",
  },
  {
    title: "Phone Enquiries",
    icon: "/contact/phone.svg",
    iconAlt: "Phone enquiries",
    primary: "Request a callback",
    secondary:
      "Share your phone number and requirement through the enquiry form so our team can contact you.",
  },
  {
    title: "Email Us",
    icon: "/contact/email.svg",
    iconAlt: "Email support",
    primary: "info@brainadzlive.com",
    secondary: "support@brainadzlive.com",
  },
  {
    title: "Follow BrainADZ Live",
    icon: "/contact/follow.svg",
    iconAlt: "BrainADZ Live social media",
    socials: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/brainadz-live/",
        icon: "/contact/linkedin.svg",
        iconAlt: "LinkedIn",
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/brainadz.live/",
        icon: "/contact/instagram.svg",
        iconAlt: "Instagram",
      },
      {
        name: "Facebook",
        href: "https://www.facebook.com/brainadzlive",
        icon: "/contact/facebook.svg",
        iconAlt: "Facebook",
      },
      {
        name: "YouTube",
        href: "https://www.youtube.com/@BrainADZLive",
        icon: "/contact/youtube.svg",
        iconAlt: "YouTube",
      },
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
    "Virtual Trial Room",
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
  // Industries: [
  //   "Healthcare",
  //   "Education Tech",
  //   "Finance Tech",
  //   "Property Tech",
  //   "Retail",
  //   "Transport",
  //   "Telecom",
  //   "Automotive",
  //   "Insurance Tech",
  //   "Travel & Hospitality",
  //   "Facility Management",
  //   "Media & Entertainment",
  // ],
} as const;

type ServiceCategory = keyof typeof serviceCategories;

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    ServiceCategory | ""
  >("");

  const [selectedService, setSelectedService] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [isFormSuccess, setIsFormSuccess] = useState(false);

  /* Contact Form Submit */

  const handleContactSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      solution: selectedCategory || "Contact Page Enquiry",
      service: selectedService || "General Enquiry",
      message: formData.get("message"),
      pageUrl: window.location.href,
    };

    try {
      setIsSubmitting(true);
      setFormStatus("");
      setIsFormSuccess(false);

      const response = await fetch(
        getApiUrl("/api/enquire-now"),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to submit enquiry."
        );
      }

      form.reset();
      setSelectedCategory("");
      setSelectedService("");

      setIsFormSuccess(true);
      setFormStatus(
        "Thank you! Your enquiry has been submitted successfully."
      );
    } catch (error) {
      setIsFormSuccess(false);

      setFormStatus(
        error instanceof Error
          ? error.message
          : "Failed to send enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white text-[#161616]">

      {/* HERO SECTION */}

      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/contact.webp"
          alt="Contact BrainADZ Live"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-4 lg:min-h-135 lg:px-12">
          <div
            className="flex items-center gap-3 text-[16px] font-light md:text-[18px]"
            data-aos="fade-up"
          >
            <Link href="/" className="text-[#6da0ff] hover:underline">
              Home
            </Link>

            <span className="text-white/80">/</span>

            <span className="text-white/90">
              Contact
            </span>
          </div>

          <div
            className="mt-12 max-w-205 md:mt-14"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
              Contact BrainADZ Live
            </h1>
          </div>

          <div
            className="mt-auto pb-8 md:pb-9 lg:pb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Contact us about software services, software platforms, digital
              signage products, project requirements, demos and support
              enquiries.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-4 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Enquire Now

                <ArrowRight size={20} strokeWidth={1.8} className="text-[20px] leading-none" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* CONTACT INFO + ENQUIRE FORM */}

      <section
        id="enquire"
        className="relative overflow-hidden bg-[#f8faff] px-5 py-14 text-[#161616] md:px-4 lg:px-12 lg:py-28"
      >
        <div className="pointer-events-none absolute -right-45 -top-40 h-105 w-105 rounded-full bg-[#193175]/[0.07] blur-[90px]" />

        <div className="pointer-events-none absolute -bottom-45 -left-40 h-90 w-90 rounded-full bg-[#193175]/5 blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-450">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div data-aos="fade-right">
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                Contact Information
              </p>

              <h2 className="max-w-190 text-[38px] font-normal leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Tell us what you are planning, improving or looking for
              </h2>
            </div>

            <p
              className="max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Share your requirement with BrainADZ Live for software,
              platforms, digital signage products, demos, project discussions
              or support. The more context you provide, the easier it is for
              our team to understand the right next step.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 xl:grid-cols-[0.72fr_1.28fr] xl:gap-14">

            {/* LEFT CONTACT INFO */}

            <div className="space-y-0">
              {contactInfo.map((item, index) => (
                <div
                  key={item.title}
                  data-aos="card-reveal"
                  data-aos-delay={index * 100}
                  data-aos-duration="520"
                  className="group relative flex gap-7 border-b border-[#dfe6f1] py-9 first:pt-0 last:border-b-0 last:pb-0"
                >
                  {/* MANUAL CONTACT ICON */}

                  <div className="relative flex h-21.5 w-21.5 shrink-0 items-center justify-center rounded-3xl bg-[#193175]/10 transition-all duration-300 group-hover:bg-[#193175]/15 group-hover:shadow-[0_18px_45px_rgba(60,91,155,0.22)]">
                    <div className="absolute -inset-1.5 rounded-[28px] border border-[#193175]/10 transition duration-300 group-hover:border-[#193175]/25" />

                    <img
                      src={item.icon}
                      alt={item.iconAlt}
                      className="relative z-10 h-11.5 w-11.5 object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[24px] font-normal leading-tight tracking-[-0.6px] text-[#262626] transition group-hover:text-[#193175] md:text-[28px]">
                      {item.title}
                    </h3>

                    {item.socials ? (
                      <div className="mt-5 grid grid-cols-2 gap-3">
                        {item.socials.map((social) => (
                          <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group/social inline-flex w-full items-center gap-3 rounded-full border border-[#dfe6f1] bg-white px-4 py-2.5 text-[15px] font-light text-[#193175] shadow-[0_10px_30px_rgba(22,22,22,0.035)] transition-all duration-300 hover:border-[#193175] hover:bg-[#193175] hover:text-white"
                          >
                            {/* MANUAL SOCIAL ICON */}

                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#193175]/10 transition group-hover/social:bg-white">
                              <img
                                src={social.icon}
                                alt={social.iconAlt}
                                className="h-4 w-4 object-contain"
                              />
                            </span>

                            <span>
                              {social.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <>
                        <p className="mt-4 text-[18px] font-light leading-[1.55] text-[#193175] md:text-[19px]">
                          {item.primary}
                        </p>

                        <p className="mt-1 max-w-110 text-[16px] font-light leading-[1.65] text-[#616161] md:text-[17px]">
                          {item.secondary}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>


            {/* RIGHT ENQUIRE FORM */}

            <div
              className="rounded-[22px] border border-[#dfe6f1] bg-white p-7 shadow-[0_24px_80px_rgba(22,22,22,0.07)] md:p-8 lg:p-10"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="mb-10 text-center">
                <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-1.2px] text-[#262626] md:text-[42px]">
                  Share Your Requirement
                </h2>

                <p className="mx-auto mt-4 max-w-170 text-[16px] font-light leading-[1.7] text-[#525252] md:text-[18px]">
                  Tell us what you need, what stage the requirement is at and
                  how we can best respond.
                </p>
              </div>


              {/* CONTACT FORM */}

              <form
                onSubmit={handleContactSubmit}
                className="grid grid-cols-1 gap-5 md:grid-cols-2"
              >

                {/* FULL NAME */}

                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Full Name *
                  </label>

                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#193175] focus:bg-white"
                  />
                </div>


                {/* EMAIL */}

                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Email Address *
                  </label>

                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#193175] focus:bg-white"
                  />
                </div>


                {/* PHONE */}

                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Phone Number *
                  </label>

                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 00000 00000"
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#193175] focus:bg-white"
                  />
                </div>


                {/* COMPANY */}

                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Company / Organisation
                  </label>

                  <input
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#193175] focus:bg-white"
                  />
                </div>


                {/* AREA OF INTEREST */}

                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Area of Interest
                  </label>

                  <select
                    value={selectedCategory}
                    onChange={(event) => {
                      setSelectedCategory(
                        event.target.value as ServiceCategory
                      );

                      setSelectedService("");
                    }}
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition focus:border-[#193175] focus:bg-white"
                  >
                    <option value="" disabled>
                      Choose an area
                    </option>

                    {Object.keys(serviceCategories).map((category) => (
                      <option
                        key={category}
                        value={category}
                      >
                        {category}
                      </option>
                    ))}
                  </select>
                </div>


                {/* SELECT REQUIREMENT */}

                <div>
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Select Requirement
                  </label>

                  <select
                    value={selectedService}
                    disabled={!selectedCategory}
                    onChange={(event) =>
                      setSelectedService(event.target.value)
                    }
                    className="h-13.5 w-full rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 text-[15px] font-light text-[#262626] outline-none transition disabled:cursor-not-allowed disabled:opacity-60 focus:border-[#193175] focus:bg-white"
                  >
                    <option value="" disabled>
                      {selectedCategory
                        ? "Choose a requirement"
                        : "Select area first"}
                    </option>

                    {selectedCategory &&
                      serviceCategories[selectedCategory].map((service) => (
                        <option
                          key={service}
                          value={service}
                        >
                          {service}
                        </option>
                      ))}
                  </select>
                </div>


                {/* REQUIREMENT DETAILS */}

                <div className="md:col-span-2">
                  <label className="mb-2 block text-[14px] font-light text-[#525252]">
                    Requirement Details *
                  </label>

                  <textarea
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us what you are looking for, your current situation, timeline and any important requirements..."
                    className="w-full resize-none rounded-md border border-[#dfe6f1] bg-[#f8faff] px-4 py-4 text-[15px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#193175] focus:bg-white"
                  />
                </div>


                {/* SUBMIT BUTTON */}

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-md bg-[#193175] px-6 text-[16px] font-normal text-white shadow-[0_18px_42px_rgba(60,91,155,0.22)] transition-all duration-300 hover:bg-[#2f4a82] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto md:min-w-60"
                  >
                    <SendIcon className="h-5.25 w-5.25 transition-transform duration-300 group-hover:translate-x-1" />

                    {isSubmitting
                      ? "Submitting..."
                      : "Submit Enquiry"}
                  </button>


                  {/* FORM STATUS */}

                  {formStatus && (
                    <p
                      className={`mt-4 text-[14px] font-light ${
                        isFormSuccess
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {formStatus}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


      {/* FIND US MAP */}

      <section
        id="find-us"
        className="bg-white px-5 py-14 md:px-4 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-450">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div data-aos="fade-right">
              <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                Find Us
              </p>

              <h2 className="max-w-180 text-[38px] font-normal leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Visit our office or connect with the right team
              </h2>
            </div>

            <p
              className="max-w-195 text-[17px] font-light leading-[1.75] tracking-[-0.2px] text-[#525252] md:text-[19px]"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Use the enquiry form for project discussions, product questions,
              demos and support. You can also visit our Dwarka office using the
              location details below.
            </p>
          </div>

          <div
            className="overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-[#f8faff] shadow-[0_24px_80px_rgba(22,22,22,0.06)]"
            data-aos="card-reveal"
            data-aos-duration="520"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr]">
              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
                  Office Location
                </p>

                <h3 className="max-w-130 text-[32px] font-normal leading-[1.15] tracking-[-1.2px] text-[#262626] md:text-[40px]">
                  BrainADZ Live
                </h3>

                <p className="mt-5 max-w-140 text-[17px] font-light leading-[1.75] text-[#525252] md:text-[18px]">
                  Apex Square III, UGF, Plot 6, Pocket B-3, Sector-17, Dwarka,
                  New Delhi 110075
                </p>

                <a
                  href="https://maps.app.goo.gl/tULrPkjR4T5w2rzi8"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-[#193175] px-6 text-[15px] font-normal text-[#193175] transition hover:bg-[#193175] hover:text-white"
                >
                  Open in Maps

                  <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              <div className="min-h-105 bg-[#eef2f8] lg:min-h-130">
                <iframe
                  title="BrainADZ Live Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2033368965426!2d77.02318032549942!3d28.593676175686017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b6968c75e7d%3A0x43ee66239df426e4!2sBrainADZ%20Live!5e0!3m2!1sen!2sin!4v1782885852643!5m2!1sen!2sin"
                  className="h-full min-h-105 w-full border-0 lg:min-h-130"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ENQUIRE POPUP */}

      <PopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />

    </main>
  );
}
