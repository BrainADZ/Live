"use client";

import { useEffect, useRef, useState } from "react";
import SmartBoardEnquiryForm from "@/components/SmartBoardEnquiryForm";
import layout from "./SmartBoardLayout.module.css";

const products = [
  { size: '65"', model: "I6501", power: "Max 280W", weight: "56 kg" },
  { size: '75"', model: "I7501", power: "Max 350W", weight: "68 kg" },
  { size: '86"', model: "I8601", power: "Max 450W", weight: "98 kg" },
];

const features = [
  "4K UHD display with 178° viewing angle",
  "IR touch for finger and passive stylus input",
  "Up to 50 touch points on Android",
  "Android 16 with 8 GB RAM and 128 GB storage",
  "Wireless connection with Wi-Fi 6 and Bluetooth 5.4",
];

const specificationGroups = [
  { title: "Display", rows: [["Resolution", "3840 × 2160 (4K UHD)"], ["Aspect ratio", "16:9"], ["Brightness", "450 cd/m²"], ["Viewing angle", "178°"], ["Colours", "1.07 billion"], ["Surface", "4 mm anti-glare glass"]] },
  { title: "Touch & audio", rows: [["Touch technology", "IR touch"], ["Touch points", "40 on Windows; 50 on Android"], ["Touch accuracy", "±2 mm on Windows"], ["Input", "Finger or passive stylus"], ["Response time", "<5 ms"], ["Speakers", "20W × 2"]] },
  { title: "System & connection", rows: [["Operating system", "Android 16"], ["Chipset", "RK 3576"], ["Memory", "8 GB RAM / 128 GB storage"], ["Wireless", "Wi-Fi 6, Bluetooth 5.4"], ["Ports", "HDMI, USB, USB-C, LAN and audio"], ["OPS", "Supported"], ["NFC", "Supported"]] },
];

export default function SmartBoardProducts() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(products[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isOpen]);

  function openProduct(product: (typeof products)[number]) {
    setSelected(product);
    dialogRef.current?.showModal();
    setIsOpen(true);
  }

  return (
    <section id="explore-products" className="bg-[#f6f8fc] py-20">
      <div className={layout.container}>
        <div className="mb-4 flex items-center gap-3"><span className="h-px w-10 bg-[#193175]" /><p className="text-xs font-medium uppercase tracking-[0.22em] text-[#193175]">Explore Products</p></div>
        <h2 className="text-3xl font-semibold leading-tight md:text-5xl">Find the Right Teaching Panel</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">Explore three screen sizes for classrooms, training spaces and meeting rooms.</p>
        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.model} className="overflow-hidden rounded-3xl border border-[#dfe6f1] bg-white shadow-sm">
              <div className="relative h-64 overflow-hidden bg-[#eef3fb]">
                <img src="/products/Teaching%20Panel.webp" alt={`${product.size} interactive teaching panel`} loading="lazy" className="absolute inset-0 h-full w-full scale-125 object-cover object-center" />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-[#31569c]">Model {product.model}</p>
                <h3 className="mt-1 text-2xl font-semibold leading-tight">{product.size} Teaching Panel</h3>
                <p className="mt-1.5 text-sm leading-5 text-slate-600">4K UHD display · Android 16 · IR touch</p>
                <button type="button" onClick={() => openProduct(product)} className="mt-3 rounded-full bg-[#193175] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#284b9a]">Explore</button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <dialog ref={dialogRef} onClose={() => setIsOpen(false)} onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current?.close(); }} className="fixed inset-0 m-0 h-[100dvh] max-h-none w-screen max-w-none overflow-y-auto bg-white p-0 backdrop:bg-[#091633]/75">
        <div className="relative min-h-full">
          <button type="button" aria-label="Close product details" onClick={() => dialogRef.current?.close()} className="fixed right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-2xl text-[#193175] shadow-md">×</button>
          <div className="grid min-h-[100dvh] lg:grid-cols-[minmax(0,1.3fr)_minmax(360px,0.7fr)]">
            <div className="bg-[#f6f8fc] px-5 py-8 text-[#17243b] md:px-10 lg:px-12 lg:py-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#31569c]">Model {selected.model}</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{selected.size} Teaching Panel</h2>
              <div className="mt-7 grid gap-6 sm:grid-cols-[minmax(0,500px)_minmax(0,1fr)] sm:items-start">
                <div className="flex h-[300px] w-full max-w-[500px] items-center justify-center overflow-hidden rounded-2xl bg-white">
                  <img src="/products/Teaching%20Panel.webp" alt={`${selected.size} interactive teaching panel`} className="h-full w-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Key Features</h3>
                  <ul className="mt-3 space-y-2.5 text-sm leading-6 text-slate-700 md:text-base">
                    {features.map((feature) => <li key={feature} className="flex gap-2"><span aria-hidden="true" className="font-bold text-[#193175]">✓</span>{feature}</li>)}
                  </ul>
                </div>
              </div>
              <h3 className="mt-9 text-2xl font-semibold">Specifications</h3>
              <div className="mt-4 grid gap-5 md:grid-cols-2">
                {specificationGroups.map((group) => (
                  <section key={group.title} className="rounded-2xl border border-[#dfe6f1] bg-white p-5">
                    <h4 className="font-semibold text-[#193175]">{group.title}</h4>
                    <dl className="mt-3 divide-y divide-slate-200 text-sm">
                      {group.rows.map(([label, value]) => <div key={label} className="grid grid-cols-[38%_1fr] gap-2 py-2"><dt className="text-slate-600">{label}</dt><dd className="font-medium">{value}</dd></div>)}
                    </dl>
                  </section>
                ))}
                <section className="rounded-2xl border border-[#dfe6f1] bg-white p-5">
                  <h4 className="font-semibold text-[#193175]">Product Details</h4>
                  <dl className="mt-3 divide-y divide-slate-200 text-sm">
                    {[["Screen size", selected.size], ["Model", selected.model], ["Maximum power", selected.power], ["Gross weight", selected.weight], ["Warranty", "3 years"], ["Camera & mic", "Optional"]].map(([label, value]) => <div key={label} className="grid grid-cols-[38%_1fr] gap-2 py-2"><dt className="text-slate-600">{label}</dt><dd className="font-medium">{value}</dd></div>)}
                  </dl>
                </section>
              </div>
            </div>
            <div className="bg-white px-5 py-20 md:px-9 lg:px-7 lg:py-28">
              <div className="lg:sticky lg:top-20">
                <SmartBoardEnquiryForm key={selected.model} heading={`Enquire About the ${selected.size} Panel`} subtext={`Model ${selected.model} selected. Tell us about your space.`} buttonText="Submit Enquiry" productVariant={`${selected.size} Teaching Panel (${selected.model})`} compact />
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </section>
  );
}
