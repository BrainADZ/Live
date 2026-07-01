"use client";

import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUp } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";

export default function SocialMediaSection() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="lazy-section bg-white text-[#161616] max-w-450 mx-auto">
      <div className="flex min-h-33.75 w-full items-center justify-between px-12 max-md:flex-col max-md:items-start max-md:gap-8 max-md:px-6 max-md:py-4">
        {/* LEFT SOCIAL SIDE */}
        <div className="flex items-center gap-4">
          <p className="text-[18px] font-normal leading-none tracking-[-0.3px] text-[#161616]">
            Follow BrainADZ Live
          </p>

          <div className="flex items-center gap-4">
            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/brainadzlive"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#161616] transition-colors duration-300 hover:text-[#3c5b9b]"
            >
              <FaFacebookF className="h-4.5 w-4.5" />
            </a>


            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/brainadz.live/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#161616] transition-colors duration-300 hover:text-[#3c5b9b]"
            >
              <FaInstagram className="h-4.5 w-4.5" />
            </a>

            {/* YOUTUBE */}
            <a
              href="https://www.linkedin.com/company/brainadz-live/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-[#161616] transition-colors duration-300 hover:text-[#3c5b9b]"
            >
              <FaLinkedin className="h-4.5 w-4.5" />
            </a>
                        {/* YOUTUBE */}
            <a
              href="https://www.youtube.com/@BrainADZLive"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-[#161616] transition-colors duration-300 hover:text-[#3c5b9b]"
            >
              <FaYoutube className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* BACK TO TOP BUTTON */}
        <button
          type="button"
          onClick={handleBackToTop}
          className="flex h-11 items-center gap-5 rounded-xs bg-[#2f4a82] px-4 text-[20px] font-light leading-none text-white transition-colors duration-300 max-md:self-end cursor-pointer"
        >
          <ArrowUp size={18} strokeWidth={1.7} />
          Back to top
        </button>
      </div>
    </section>
  );
}
