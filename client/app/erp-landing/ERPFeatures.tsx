"use client";

import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  ChartNoAxesCombined,
  CircleDollarSign,
  LayoutDashboard,
  Package,
  Pause,
  Play,
  ShoppingCart,
  UsersRound,
} from "lucide-react";

const sectionLinks = [
  { id: "erp-features", label: "Start" },
  { id: "erp-workflow", label: "Scale" },
  { id: "erp-insights", label: "Conquer" },
  { id: "erp-comparison", label: "Compare" },
];

const features = [
  "Finance & Accounts Management",
  "Inventory & Stock Control",
  "Sales & Purchase Management",
  "Connected Teams & Approvals",
  "Business Reports & Insights",
];

const slides = [
  {
    title: "Finance & accounts",
    theme: "finance",
    themeClass: "bg-[linear-gradient(125deg,#a8cfff,#b4d1d6_52%,#e6d77d)]",
    icon: CircleDollarSign,
    columns: ["Invoice", "Customer", "Amount", "Status"],
    rows: [
      ["INV-001", "Acme Retail", "₹24,500", "Paid"],
      ["INV-002", "Northstar", "₹18,250", "Pending"],
      ["INV-003", "Urban Supply", "₹32,800", "Paid"],
      ["INV-004", "Bright Works", "₹12,600", "Draft"],
      ["INV-005", "Atlas Trading", "₹45,200", "Paid"],
    ],
    highlight: ["INV-003", "Urban Supply", "₹32,800", "Payment received"],
  },
  {
    title: "Inventory & stock",
    theme: "inventory",
    themeClass: "bg-[linear-gradient(125deg,#c7b6ed,#d2d7f2_50%,#c5e8d8)]",
    icon: Package,
    columns: ["SKU", "Product", "In stock", "Status"],
    rows: [
      ["SKU-101", "Office chair", "128 units", "In stock"],
      ["SKU-102", "Desk lamp", "84 units", "In stock"],
      ["SKU-103", "Work desk", "56 units", "Updated"],
      ["SKU-104", "Monitor arm", "12 units", "Low stock"],
      ["SKU-105", "Storage unit", "72 units", "In stock"],
    ],
    highlight: ["SKU-103", "Work desk", "56 units", "Stock updated"],
  },
  {
    title: "Sales & purchasing",
    theme: "orders",
    themeClass: "bg-[linear-gradient(125deg,#a4d8ed,#bde5df_50%,#f1d8c3)]",
    icon: ShoppingCart,
    columns: ["Order", "Customer", "Value", "Status"],
    rows: [
      ["SO-201", "Atlas Trading", "₹48,900", "Approved"],
      ["SO-202", "Bright Works", "₹21,500", "Processing"],
      ["SO-203", "Acme Retail", "₹64,200", "Delivered"],
      ["SO-204", "Urban Supply", "₹16,750", "Pending"],
      ["SO-205", "Northstar", "₹35,600", "Approved"],
    ],
    highlight: ["SO-203", "Acme Retail", "₹64,200", "Order fulfilled"],
  },
];

function WorkspaceSlide({ slide }: { slide: (typeof slides)[number] }) {
  const Icon = slide.icon;
  return (
    <div
      className={`relative aspect-670/400 overflow-hidden pt-16 pr-0 pb-0 pl-12 max-[1100px]:pt-10 max-[1100px]:pr-0 max-[1100px]:pb-0 max-[1100px]:pl-6.25 max-[760px]:min-h-61.25 ${slide.themeClass}`}
    >
      <div className="flex min-h-87.5 w-[calc(100%+20px)] rounded-[12px_0_0] bg-white shadow-[0_8px_30px_#14274414]">
        <aside
          className="flex flex-[0_0_58px] flex-col items-center gap-6.25 bg-[#19213b] px-0 py-3.75 text-[#91b1e7] max-[760px]:basis-10.5"
          aria-hidden="true"
        >
          <span className="text-[21px] font-semibold text-white">B</span>
          <LayoutDashboard size={18} />
          <UsersRound size={18} />
          <span className="-my-1.75 flex h-9 w-9 items-center justify-center rounded-[9px] bg-[#303f62] text-[#83e0b2]">
            <Icon size={18} />
          </span>
          <Package size={18} />
          <ChartNoAxesCombined size={18} />
        </aside>
        <div className="min-w-0 flex-1 px-4 py-4.75 max-[760px]:px-2.5 max-[760px]:py-3.5">
          <div className="mb-4.5 flex items-center justify-between gap-2.5 text-[14px] font-semibold text-[#26314c] max-[760px]:text-[12px]">
            <span className="last:text-[9px] last:font-normal last:text-[#8993a4]">
              {slide.title}
            </span>
            <span className="last:text-[9px] last:font-normal last:text-[#8993a4]">
              Overview
            </span>
          </div>
          <div>
            <div className="grid min-h-7.5 grid-cols-[0.85fr_1.4fr_1fr_1fr] items-center gap-2.5 border-b border-[#edf0f6] text-[9px] text-[#8a93a4]">
              {slide.columns.map((column) => (
                <span
                  className="overflow-hidden text-ellipsis whitespace-nowrap"
                  key={column}
                >
                  {column}
                </span>
              ))}
            </div>
            {slide.rows.map((row) => (
              <div
                className="grid min-h-10.25 grid-cols-[0.85fr_1.4fr_1fr_1fr] items-center gap-2.5 border-b border-b-[#edf0f6] text-[10px] text-[#657087]"
                key={row[0]}
              >
                {row.map((cell, index) => (
                  <span
                    key={index}
                    className={`overflow-hidden text-ellipsis whitespace-nowrap ${index === 3 ? "w-fit max-w-full rounded-2xl bg-[#e5f6ed] px-2 py-0.75 text-[9px] text-[#28966b]" : ""}`}
                  >
                    {cell}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-[48%] -right-3 left-21.25 flex min-h-19 items-center justify-between gap-2.5 rounded-[17px] border-[7px] border-[#b3e0ed] bg-white px-5 py-3.25 text-[12px] whitespace-nowrap text-[#2d3f61] shadow-[0_6px_20px_#27385c0d] max-[1100px]:left-11.75 max-[1100px]:gap-2 max-[1100px]:px-3 max-[1100px]:text-[10px] max-[760px]:left-9.5 max-[760px]:min-h-16.25 max-[760px]:gap-1.75 max-[760px]:border-[5px] max-[760px]:p-2.25">
        <CheckCircle2 className="shrink-0 max-[760px]:w-4.25" size={23} />
        <span className="max-[1100px]:first-of-type:hidden">
          {slide.highlight[0]}
        </span>
        <strong className="font-medium">{slide.highlight[1]}</strong>
        <span className="max-[1100px]:first-of-type:hidden">
          {slide.highlight[2]}
        </span>
        <span className="rounded-3xl bg-[#0aaa70] px-3 py-1.25 text-[11px] text-white max-[1100px]:text-[10px] max-[1100px]:first-of-type:hidden max-[760px]:px-2 max-[760px]:text-[9px]">
          {slide.highlight[3]}
        </span>
      </div>
    </div>
  );
}

function FeatureSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const element = sliderRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || hovered || focused || !visible) return;
    const timer = window.setInterval(() => {
      if (
        document.hidden ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return;
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, visible]);

  const goTo = (index: number) =>
    setActiveIndex((index + slides.length) % slides.length);

  return (
    <div
      ref={sliderRef}
      className="min-w-0"
      role="region"
      aria-roledescription="carousel"
      aria-label="ERP feature previews"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          goTo(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
        }
      }}
    >
      <div
        className="touch-pan-y overflow-hidden rounded-[13px]"
        onTouchStart={(event) => {
          touchStart.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const distance = touchStart.current - event.changedTouches[0].clientX;
          if (Math.abs(distance) > 40)
            goTo(activeIndex + (distance > 0 ? 1 : -1));
          touchStart.current = null;
        }}
        onTouchCancel={() => {
          touchStart.current = null;
        }}
      >
        <div
          className="flex"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              className="min-w-0 flex-[0_0_100%]"
              key={`${slide.theme}-${index}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}: ${slide.title}`}
              aria-hidden={index !== activeIndex}
            >
              <WorkspaceSlide slide={slide} />
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex min-h-11 items-center justify-center">
        <div className="flex" aria-label="Choose feature preview">
          {slides.map((slide, index) => (
            <button
              key={slide.theme}
              type="button"
              className="flex h-8 w-7 items-center justify-center bg-transparent p-0 text-[#73777b]"
              aria-label={`Show ${slide.title}`}
              aria-pressed={activeIndex === index}
              onClick={() => goTo(index)}
            >
              <span
                className={`size-2.5 rounded-full ${activeIndex === index ? "bg-[#63676b]" : "bg-[#cecece]"}`}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          className="absolute right-0 flex h-8 w-7 items-center justify-center border-0 bg-transparent p-0 text-[#73777b]"
          aria-label={paused ? "Play feature slider" : "Pause feature slider"}
          onClick={() => setPaused((value) => !value)}
        >
          {paused ? <Play size={13} /> : <Pause size={13} />}
        </button>
      </div>
    </div>
  );
}

export default function ERPFeatures({
  onRequestDemo,
}: {
  onRequestDemo: () => void;
}) {
  const [activeSection, setActiveSection] = useState(sectionLinks[0].id);
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const updateSection = () => {
      const hero = document.getElementById("erp-overview");
      const heroBounds = hero?.getBoundingClientRect();
      const headerHeight =
        headerRef.current?.querySelector("header")?.getBoundingClientRect()
          .height ?? 76;
      const menuHeight =
        headerRef.current?.querySelector("nav")?.getBoundingClientRect()
          .height ?? 50;
      const headerRevealOffset = Math.max(
        window.innerHeight * 0.28,
        headerHeight + menuHeight + 64,
      );
      setHeaderVisible(
        !!heroBounds &&
          heroBounds.height > 0 &&
          heroBounds.bottom <= headerRevealOffset,
      );
      const offset =
        (headerRef.current?.getBoundingClientRect().height ?? 126) + 40;
      let current = sectionLinks[0].id;
      for (const section of sectionLinks) {
        if (
          (document.getElementById(section.id)?.getBoundingClientRect().top ??
            Infinity) <= offset
        )
          current = section.id;
      }
      setActiveSection(current);
    };
    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateSection);
    };
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    const hero = document.getElementById("erp-overview");
    const observer = new ResizeObserver(scheduleUpdate);
    if (hero) observer.observe(hero);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-100 ${headerVisible ? "visible" : "pointer-events-none invisible"}`}
        aria-hidden={!headerVisible}
        inert={!headerVisible}
      >
        <header className="border-b border-b-[#dedede] bg-white shadow-[0_3px_8px_#00000008]">
          <div className="m-auto flex min-h-19 w-[min(1720px,calc(100%-96px))] items-center justify-between gap-5 max-[760px]:min-h-17 max-[760px]:w-[calc(100%-32px)] max-[760px]:gap-3">
            <a
              href="#erp-landing"
              className="inline-flex items-center gap-4 text-[#303030] max-[760px]:gap-2.5"
              aria-label="Back to the ERP landing page top"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-11.5 w-auto object-contain max-[760px]:h-9.5 max-[760px]:max-w-31.25"
                src="/logos/logo--22.png"
                alt="BrainADZ Live"
                width="160"
                height="58"
              />
              <span className="border-l border-l-[#dedede] pl-4 text-[22px] leading-none font-semibold max-[760px]:pl-2.5 max-[760px]:text-[18px]">
                ERP
              </span>
            </a>
            <button
              type="button"
              className="min-h-9 rounded-[30px] border-0 bg-[#ed2027] px-5.75 py-2.25 text-[12px] leading-normal font-semibold text-white uppercase hover:bg-[#cb151c] max-[760px]:px-3.25 max-[760px]:text-[10px]"
              onClick={onRequestDemo}
            >
              Request a demo
            </button>
          </div>
        </header>
        <nav
          className="flex min-h-12 items-stretch justify-center border-b border-[#dedede] bg-white shadow-[0_3px_8px_#00000008] md:min-h-12.5"
          aria-label="ERP landing page sections"
          aria-hidden={!headerVisible}
          inert={!headerVisible}
        >
          {sectionLinks.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`flex items-center border-b-3 px-5.25 py-2.25 text-lg leading-normal whitespace-nowrap max-[760px]:px-4 max-[760px]:text-[15px] ${activeSection === section.id ? "border-[#193175] text-[#193175]" : "border-transparent text-[#111]"}`}
              aria-current={
                activeSection === section.id ? "location" : undefined
              }
              onClick={() => setActiveSection(section.id)}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
      <section
        className="scroll-mt-0! bg-white px-0 pt-35 pb-22.5 max-[760px]:px-0 max-[760px]:pt-34 max-[760px]:pb-13"
        id="erp-features"
        aria-labelledby="erp-features-heading"
      >
        <div className="mx-auto w-full max-w-283.5 px-5 md:px-8">
          <h2
            className="mx-0 mt-0 mb-4.5 text-[clamp(34px,3vw,48px)] leading-[1.17] font-medium tracking-[-1.4px] text-[#193175] max-[760px]:text-[clamp(30px,6.6vw,40px)] max-[760px]:tracking-[-0.8px]"
            id="erp-features-heading"
          >
            ERP software that solves growing
            <br className="max-[760px]:hidden" /> business challenges
          </h2>
          <p className="m-0 max-w-232.5 text-[18px] leading-[1.65] text-[#151515] max-[760px]:text-[16px]">
            Bring finance, inventory, sales and purchasing together with an ERP
            built around your business. Simplify everyday operations, connect
            your teams and get a clearer view of the information you need to
            keep growing.
          </p>
          <div className="mt-8 grid grid-cols-[minmax(0,350fr)_minmax(0,670fr)] items-start gap-12.5 max-[1100px]:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] max-[1100px]:gap-7 max-[760px]:mt-6 max-[760px]:grid-cols-1 max-[760px]:gap-7">
            <ul className="mx-0 mt-4.5 mb-0 grid list-none gap-5 p-0 max-[760px]:mt-0 max-[760px]:gap-4">
              {features.map((feature) => (
                <li
                  className="flex items-center gap-3 text-[18px] leading-normal font-medium text-[#202020] max-[1100px]:text-[16px]"
                  key={feature}
                >
                  <CheckCircle2
                    className="shrink-0 text-[#193175]"
                    size={18}
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <FeatureSlider />
          </div>
        </div>
      </section>
    </>
  );
}
