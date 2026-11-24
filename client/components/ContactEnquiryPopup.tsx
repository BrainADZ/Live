"use client";

import { useRef } from "react";
import ProductEnquiryForm from "@/components/ProductEnquiryForm";
import SmartBoardEnquiryForm from "@/components/SmartBoardEnquiryForm";

type Props = { product?: string; thankYouHref?: string };

export default function ContactEnquiryPopup({ product, thankYouHref }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  return <>
    <button type="button" onClick={() => dialog.current?.showModal()} className="mt-1.5 inline-flex rounded-full bg-[#193175] px-4 py-1.5 text-xs font-semibold leading-4 text-white hover:bg-[#284b9a]">View Contact</button>
    <dialog ref={dialog} onClick={(event) => { if (event.target === dialog.current) dialog.current.close(); }} className="m-auto max-h-[90dvh] w-[min(94vw,620px)] overflow-y-auto rounded-3xl bg-white p-0 text-[#17243b] backdrop:bg-[#091633]/75">
      <div className="relative p-5 sm:p-7">
        <button type="button" aria-label="Close contact form" onClick={() => dialog.current?.close()} className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xl">×</button>
        {product && thankYouHref ? <>
          <h2 className="mb-5 pr-10 text-2xl font-semibold">Contact Us</h2>
          <ProductEnquiryForm product={product} thankYouHref={thankYouHref} />
        </> : <SmartBoardEnquiryForm id="contact-popup" heading="Contact Us" buttonText="Submit Enquiry" compact />}
      </div>
    </dialog>
  </>;
}
