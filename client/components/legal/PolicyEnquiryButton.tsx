"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import PopupForm from "@/components/PopupForm";

export default function PolicyEnquiryButton() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div className="mt-8">
        <button
          type="button"
          onClick={() => setIsPopupOpen(true)}
          className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-4 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
        >
          Enquire Now
          <ArrowRight
            size={20}
            strokeWidth={1.8}
            className="text-[20px] leading-none"
            aria-hidden="true"
          />
        </button>
      </div>
      <PopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}
