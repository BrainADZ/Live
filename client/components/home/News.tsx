"use client";

/* eslint-disable @next/next/no-img-element */

import { FormEvent, useState } from "react";

export default function NewsSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    console.log("Subscribed email:", email);
    setEmail("");
  };

  return (
    <section className="lazy-section bg-white px-6 py-22.5 text-[#161616] md:px-10 lg:px-12 mx-auto max-w-450">
      <div className="">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-28">
          {/* LEFT SIDE */}
          <div data-aos="fade-right">
            <h2 className="text-[52px] font-light leading-[1.05] tracking-[-2px] text-[#161616] md:text-[48px] lg:text-[52px]">
              Stay connected
            </h2>

            <div className="mt-8 w-full overflow-hidden">
              <img
                src="/later.avif"
                alt="Stay connected with BrainADZ Live"
                loading="lazy"
                decoding="async"
                className="h-72.5 w-full object-cover md:h-80 lg:h-90"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="pt-4 lg:pt-13.75"
            data-aos="fade-left"
            data-aos-delay="100"
          >

            <p className="mt-3 max-w-232.5 text-[14px] font-light leading-[1.35] tracking-[-0.6px] text-[#262626] md:text-[20px]">
              What&apos;s New at BrainADZ Live newsletter subscription <br />
              Subscribe to stay on top of new product features, releases, use
              cases, video chats with experts and learning opportunities.
            </p>

            {/* DIVIDER */}
            <div className="mt-4 h-px w-full bg-[#d0d0d0]" />

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-6">
              <label
                htmlFor="business-email"
                className="block text-[12px] font-light tracking-[0.6px] text-[#525252]"
              >
                Business email
              </label>

              <input
                id="business-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-3 h-17 w-full border-0 border-b border-[#8d8d8d] bg-[#f4f4f4] px-5 text-[20px] font-light text-[#161616] outline-none transition focus:border-[#193175]"
              />

              <p className="mt-6 max-w-237.5 text-[14px] font-light leading-[1.75] tracking-[-0.2px] text-[#262626]">
                Your subscription will be delivered in English. You will find
                an unsubscribe link in every newsletter. You can manage your
                subscriptions or unsubscribe{" "}
                <a
                  href="/unsubscribe"
                  className="text-[#193175] hover:underline"
                >
                  here
                </a>
                . Refer to our{" "}
                <a
                  href="/privacy-policy"
                  className="text-[#193175] hover:underline"
                >
                  BrainADZ Privacy Statement
                </a>{" "}
                for more information.
              </p>

              <button
                type="submit"
                className="mt-6 inline-flex h-14 items-center justify-center bg-[#193175] px-8 text-[20px] font-light text-white transition duration-300 hover:bg-[#2f4a82] cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
