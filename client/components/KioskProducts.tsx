"use client";

import { useEffect, useRef, useState } from "react";
import ProductEnquiryForm from "@/components/ProductEnquiryForm";
import layout from "@/app/smart-board-for-teaching/SmartBoardLayout.module.css";

export type KioskVariant = {
  name: string;
  image: string;
  features: string[];
  specifications: [string, string][];
};

export default function KioskProducts({ title, description, variants, thankYouHref }: {
  title: string;
  description: string;
  variants: KioskVariant[];
  thankYouHref: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(variants[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [isOpen]);

  function openVariant(variant: KioskVariant) {
    setSelected(variant);
    dialogRef.current?.showModal();
    setIsOpen(true);
  }

  return <section id="explore-products" className="bg-[#f6f8fc] py-20">
    <div className={layout.container}>
      <div className="mb-4 flex items-center gap-3"><span className="h-px w-10 bg-[#193175]" /><p className="text-xs font-medium uppercase tracking-[0.22em] text-[#193175]">Explore Products</p></div>
      <h2 className="text-3xl font-semibold leading-tight md:text-5xl">Explore {title}</h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">{description}</p>
      <div className="mt-9 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {variants.map((variant) => <article key={variant.name} className="overflow-hidden rounded-3xl border border-[#dfe6f1] bg-white shadow-sm">
          <div className="h-56 bg-[#eef3fb] p-4"><img src={variant.image} alt={variant.name} loading="lazy" className="h-full w-full object-contain" /></div>
          <div className="p-5">
            <h3 className="text-xl font-semibold leading-tight">{variant.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{variant.features.slice(0, 2).join(" · ")}</p>
            <button type="button" onClick={() => openVariant(variant)} className="mt-4 rounded-full bg-[#193175] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#284b9a]">Explore</button>
          </div>
        </article>)}
      </div>
    </div>

    <dialog ref={dialogRef} onClose={() => setIsOpen(false)} onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current?.close(); }} className="fixed inset-0 m-0 h-[100dvh] max-h-none w-screen max-w-none overflow-y-auto bg-white p-0 backdrop:bg-[#091633]/75">
      <div className="relative min-h-full">
        <button type="button" aria-label="Close product details" onClick={() => dialogRef.current?.close()} className="fixed right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-2xl text-[#193175] shadow-md">×</button>
        <div className="grid min-h-[100dvh] lg:grid-cols-[minmax(0,1.3fr)_minmax(360px,0.7fr)]">
          <div className="bg-[#f6f8fc] px-5 py-8 text-[#17243b] md:px-10 lg:px-12 lg:py-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#31569c]">{title}</p>
            <h2 className="mt-2 pr-12 text-3xl font-semibold md:text-4xl">{selected.name}</h2>
            <div className="mt-7 grid gap-6 sm:grid-cols-[minmax(0,500px)_minmax(0,1fr)] sm:items-start">
              <div className="flex h-[300px] items-center justify-center overflow-hidden rounded-2xl bg-white p-5">
                <img src={selected.image} alt={selected.name} className="h-full w-full object-contain" />
              </div>
              <div><h3 className="text-xl font-semibold">Key Features</h3><ul className="mt-3 space-y-2.5 text-sm leading-6 text-slate-700 md:text-base">{selected.features.map(feature => <li key={feature} className="flex gap-2"><span aria-hidden="true" className="font-bold text-[#193175]">✓</span>{feature}</li>)}</ul></div>
            </div>
            <h3 className="mt-9 text-2xl font-semibold">Specifications</h3>
            <div className="mt-4 rounded-2xl border border-[#dfe6f1] bg-white p-5">
              <dl className="divide-y divide-slate-200 text-sm">{selected.specifications.map(([label, value]) => <div key={label} className="grid grid-cols-[38%_1fr] gap-3 py-3"><dt className="text-slate-600">{label}</dt><dd className="font-medium">{value}</dd></div>)}</dl>
            </div>
          </div>
          <div className="bg-white px-5 py-20 md:px-9 lg:px-7 lg:py-28"><div className="lg:sticky lg:top-20"><ProductEnquiryForm key={selected.name} product={title} productVariant={selected.name} thankYouHref={thankYouHref} /></div></div>
        </div>
      </div>
    </dialog>
  </section>;
}
