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
    themeClass: "erp-features-finance [background:linear-gradient(125deg,_#a8cfff,_#b4d1d6_52%,_#e6d77d)]",
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
    themeClass: "erp-features-inventory [background:linear-gradient(125deg,_#c7b6ed,_#d2d7f2_50%,_#c5e8d8)]",
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
    themeClass: "erp-features-orders [background:linear-gradient(125deg,_#a4d8ed,_#bde5df_50%,_#f1d8c3)]",
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
    <div className={`erp-features-workspace relative [aspect-ratio:670_/_400] overflow-hidden [padding:64px_0_0_48px] max-[1100px]:[padding:40px_0_0_25px] max-[760px]:[min-height:245px] ${slide.themeClass}`}>
      <div className="erp-features-workspace-window flex [min-height:350px] [width:calc(100%_+_20px)] [border-radius:12px_0_0] [background:#fff] [box-shadow:0_8px_30px_#14274414]">
        <aside
          className="erp-features-workspace-sidebar flex [flex:0_0_58px] flex-col items-center [gap:25px] [padding:15px_0] [background:#19213b] [color:#91b1e7] max-[760px]:[flex-basis:42px]"
          aria-hidden="true"
        >
          <span className="erp-features-workspace-logo [color:#fff] [font-size:21px] font-semibold">B</span>
          <LayoutDashboard size={18} />
          <UsersRound size={18} />
          <span className="erp-features-selected-icon flex items-center justify-center [width:36px] [height:36px] [margin-block:-7px] [border-radius:9px] [background:#303f62] [color:#83e0b2]">
            <Icon size={18} />
          </span>
          <Package size={18} />
          <ChartNoAxesCombined size={18} />
        </aside>
        <div className="erp-features-workspace-body [flex:1] [min-width:0] [padding:19px_16px] max-[760px]:[padding:14px_10px]">
          <div className="erp-features-workspace-heading flex justify-between items-center [gap:10px] [margin-bottom:18px] [color:#26314c] [font-size:14px] font-semibold [&_>_span:last-child]:[color:#8993a4] [&_>_span:last-child]:[font-size:9px] [&_>_span:last-child]:font-normal max-[760px]:[font-size:12px]">
            <span>{slide.title}</span>
            <span>Overview</span>
          </div>
          <div className="erp-features-workspace-table">
            <div className="erp-features-table-head grid [grid-template-columns:0.85fr_1.4fr_1fr_1fr] [gap:10px] items-center [min-height:41px] [border-bottom:1px_solid_#edf0f6] [color:#657087] [font-size:10px] [min-height:30px] [color:#8a93a4] [font-size:9px] [&_>_span]:overflow-hidden [&_>_span]:[white-space:nowrap] [&_>_span]:[text-overflow:ellipsis]">
              {slide.columns.map((column) => (
                <span key={column}>{column}</span>
              ))}
            </div>
            {slide.rows.map((row) => (
              <div
                className="erp-features-table-row grid [grid-template-columns:0.85fr_1.4fr_1fr_1fr] [gap:10px] items-center [min-height:41px] [border-bottom:1px_solid_#edf0f6] [color:#657087] [font-size:10px] [&_>_span]:overflow-hidden [&_>_span]:[white-space:nowrap] [&_>_span]:[text-overflow:ellipsis] [&_.erp-features-status]:[width:fit-content] [&_.erp-features-status]:[max-width:100%] [&_.erp-features-status]:[padding:3px_8px] [&_.erp-features-status]:[border-radius:16px] [&_.erp-features-status]:[background:#e5f6ed] [&_.erp-features-status]:[color:#28966b] [&_.erp-features-status]:[font-size:9px]"
                key={row[0]}
              >
                {row.map((cell, index) => (
                  <span
                    key={index}
                    className={index === 3 ? "erp-features-status" : undefined}
                  >
                    {cell}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="erp-features-highlight absolute [top:48%] [right:-12px] [left:85px] flex items-center justify-between [gap:10px] [min-height:76px] [padding:13px_20px] [border:7px_solid_#b3e0ed] [border-radius:17px] [background:#fff] [color:#2d3f61] [box-shadow:0_6px_20px_#27385c0d] [font-size:12px] [white-space:nowrap] [&_>_svg]:[flex-shrink:0] [&_strong]:font-medium max-[1100px]:[left:47px] max-[1100px]:[gap:8px] max-[1100px]:[padding-inline:12px] max-[1100px]:[font-size:10px] max-[1100px]:[&_>_span:first-of-type]:hidden max-[760px]:[left:38px] max-[760px]:[min-height:65px] max-[760px]:[padding:9px] max-[760px]:[border-width:5px] max-[760px]:[gap:7px] max-[760px]:[&_>_svg]:[width:17px]">
        <CheckCircle2 size={23} />
        <span>{slide.highlight[0]}</span>
        <strong>{slide.highlight[1]}</strong>
        <span>{slide.highlight[2]}</span>
        <span className="erp-features-highlight-status [padding:5px_12px] [border-radius:24px] [background:#0aaa70] [color:#fff] [font-size:11px] max-[1100px]:[font-size:10px] max-[760px]:[padding-inline:8px] max-[760px]:[font-size:9px]">{slide.highlight[3]}</span>
      </div>
    </div>
  );
}

function FeatureSlider() {
  const [position, setPosition] = useState({ index: 0, animate: true });
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);
  const activeIndex = position.index % slides.length;

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
      setPosition((current) => ({
        index: (current.index % slides.length) + 1,
        animate: true,
      }));
    }, 4200);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, visible]);

  const goTo = (index: number) =>
    setPosition({
      index: (index + slides.length) % slides.length,
      animate: true,
    });

  return (
    <div
      ref={sliderRef}
      className="erp-features-slider [min-width:0]"
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
        className="erp-features-viewport overflow-hidden [border-radius:13px] [touch-action:pan-y]"
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
          className={`erp-features-track flex [transition:transform_650ms_cubic-bezier(0.22,_0.61,_0.36,_1)]! [will-change:transform] motion-reduce:[transition:none]! motion-reduce:[transition-delay:0s]! ${position.animate ? "" : "erp-features-track-still [transition:none]!"}`}
          style={{ transform: `translate3d(-${position.index * 100}%, 0, 0)` }}
          onTransitionEnd={(event) => {
            if (
              event.target === event.currentTarget &&
              event.propertyName === "transform" &&
              position.index === slides.length
            ) {
              setPosition({ index: 0, animate: false });
            }
          }}
        >
          {[...slides, slides[0]].map((slide, index) => (
            <div
              className="erp-features-slide [flex:0_0_100%] [min-width:0]"
              key={`${slide.theme}-${index}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${(index % slides.length) + 1} of ${slides.length}: ${slide.title}`}
              aria-hidden={index !== position.index}
            >
              <WorkspaceSlide slide={slide} />
            </div>
          ))}
        </div>
      </div>
      <div className="erp-features-slider-controls relative flex items-center justify-center [min-height:44px] [&_.erp-features-pause-button]:flex [&_.erp-features-pause-button]:items-center [&_.erp-features-pause-button]:justify-center [&_.erp-features-pause-button]:[width:28px] [&_.erp-features-pause-button]:[height:32px] [&_.erp-features-pause-button]:[padding:0] [&_.erp-features-pause-button]:[border:0] [&_.erp-features-pause-button]:[background:transparent] [&_.erp-features-pause-button]:[color:#73777b] [&_.erp-features-pause-button]:absolute [&_.erp-features-pause-button]:[right:0]">
        <div
          className="erp-features-dots flex [&_button]:flex [&_button]:items-center [&_button]:justify-center [&_button]:[width:28px] [&_button]:[height:32px] [&_button]:[padding:0] [&_button]:[border:0] [&_button]:[background:transparent] [&_button]:[color:#73777b] [&_span]:[width:10px] [&_span]:[height:10px] [&_span]:rounded-full [&_span]:[background:#cecece]"
          aria-label="Choose feature preview"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.theme}
              type="button"
              className={activeIndex === index ? "erp-features-active-dot [&_span]:[background:#63676b]" : ""}
              aria-label={`Show ${slide.title}`}
              aria-pressed={activeIndex === index}
              onClick={() => goTo(index)}
            >
              <span />
            </button>
          ))}
        </div>
        <button
          type="button"
          className="erp-features-pause-button"
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
        className={`erp-features-sticky-header fixed [top:0] [right:0] [left:0] [z-index:100] [opacity:0] [visibility:hidden] pointer-events-none [transform:translate3d(0,_-100%,_0)] [transition:transform_420ms_cubic-bezier(0.22,_0.61,_0.36,_1),_opacity_260ms_ease,_visibility_0s_linear_420ms]! [will-change:transform,_opacity] motion-reduce:[transition:none]! motion-reduce:[transition-delay:0s]! ${headerVisible ? "erp-features-header-shown [opacity:1] [visibility:visible] pointer-events-auto [transform:translate3d(0,_0,_0)] [transition-delay:0s]!" : ""}`}
        aria-hidden={!headerVisible}
        inert={!headerVisible}
      >
        <header className="erp-features-header [background:#fff] [border-bottom:1px_solid_#dedede] [box-shadow:0_3px_8px_#00000008]">
          <div className="erp-features-header-inner [width:min(1720px,_calc(100%_-_96px))] [min-height:76px] [margin:auto] flex items-center justify-between [gap:20px] [&_.erp-features-demo-button]:[min-height:36px] [&_.erp-features-demo-button]:[padding:9px_23px] [&_.erp-features-demo-button]:[border:0] [&_.erp-features-demo-button]:[border-radius:30px] [&_.erp-features-demo-button]:[background:#ed2027] [&_.erp-features-demo-button]:[color:#fff] [&_.erp-features-demo-button]:[font-size:12px] [&_.erp-features-demo-button]:font-semibold [&_.erp-features-demo-button]:[line-height:1.5] [&_.erp-features-demo-button]:[text-transform:uppercase] [&_.erp-features-demo-button:hover]:[background:#cb151c] max-[760px]:[width:calc(100%_-_32px)] max-[760px]:[min-height:68px] max-[760px]:[gap:12px] max-[760px]:[&_.erp-features-demo-button]:[padding-inline:13px] max-[760px]:[&_.erp-features-demo-button]:[font-size:10px]">
            <a
              href="#erp-landing"
              className="erp-features-brand inline-flex items-center [gap:16px] [color:#303030] [&_img]:[width:auto] [&_img]:[height:46px] [&_img]:[object-fit:contain] [&_span]:[border-left:1px_solid_#dedede] [&_span]:[padding-left:16px] [&_span]:[font-size:22px] [&_span]:font-semibold [&_span]:[line-height:1] max-[760px]:[gap:10px] max-[760px]:[&_img]:[height:38px] max-[760px]:[&_img]:[max-width:125px] max-[760px]:[&_span]:[padding-left:10px] max-[760px]:[&_span]:[font-size:18px]"
              aria-label="Back to the ERP landing page top"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/logo--22.png"
                alt="BrainADZ Live"
                width="160"
                height="58"
              />
              <span>ERP</span>
            </a>
            <button
              type="button"
              className="erp-features-demo-button"
              onClick={onRequestDemo}
            >
              Request a demo
            </button>
          </div>
        </header>
        <nav
          className={`erp-features-navigation [min-height:50px] flex [align-items:stretch] justify-center [background:#fff] [border-bottom:1px_solid_#dedede] [box-shadow:0_3px_8px_#00000008] [opacity:0] [visibility:hidden] pointer-events-none [transform:translate3d(0,_-12px,_0)] [transition:transform_360ms_cubic-bezier(0.22,_0.61,_0.36,_1),_opacity_280ms_ease,_visibility_0s_linear_360ms]! [&_a]:flex [&_a]:items-center [&_a]:[padding:9px_21px] [&_a]:[border-bottom:3px_solid_transparent] [&_a]:[color:#111] [&_a]:[font-size:18px] [&_a]:[line-height:1.5] [&_a]:[white-space:nowrap] [&_.erp-features-active-link]:[border-bottom-color:#193175] [&_.erp-features-active-link]:[color:#193175] max-[760px]:[min-height:48px] max-[760px]:[&_a]:[padding-inline:16px] max-[760px]:[&_a]:[font-size:15px] motion-reduce:[transition:none]! motion-reduce:[transition-delay:0s]! ${headerVisible ? "erp-features-navigation-shown [opacity:1] [visibility:visible] pointer-events-auto [transform:translate3d(0,_0,_0)] [transition-delay:80ms,_80ms,_0s]!" : ""}`}
          aria-label="ERP landing page sections"
          aria-hidden={!headerVisible}
          inert={!headerVisible}
        >
          {sectionLinks.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={activeSection === section.id ? "erp-features-active-link" : ""}
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
        className="erp-features-features [background:#fff] [padding:140px_0_90px] [scroll-margin-top:0]! [&_h2]:[margin:0_0_18px] [&_h2]:[color:#193175] [&_h2]:[font-size:clamp(34px,_3vw,_48px)] [&_h2]:font-medium [&_h2]:[line-height:1.17] [&_h2]:[letter-spacing:-1.4px] [&_p]:[max-width:930px] [&_p]:[margin:0] [&_p]:[color:#151515] [&_p]:[font-size:18px] [&_p]:[line-height:1.65] max-[760px]:[padding:136px_0_52px] max-[760px]:[&_h2]:[font-size:clamp(30px,_6.6vw,_40px)] max-[760px]:[&_h2]:[letter-spacing:-0.8px] max-[760px]:[&_p]:[font-size:16px]"
        id="erp-features"
        aria-labelledby="erp-features-heading"
      >
        <div className="erp-features-feature-inner [width:min(1070px,_calc(100%_-_64px))] [margin:auto] max-[760px]:[width:calc(100%_-_40px)]">
          <h2 id="erp-features-heading">
            ERP software that solves growing
            <br className="erp-features-desktop-break max-[760px]:hidden" /> business challenges
          </h2>
          <p>
            Bring finance, inventory, sales and purchasing together with an ERP
            built around your business. Simplify everyday operations, connect
            your teams and get a clearer view of the information you need to
            keep growing.
          </p>
          <div className="erp-features-feature-grid grid [grid-template-columns:minmax(0,_350fr)_minmax(0,_670fr)] [gap:50px] [align-items:start] [margin-top:32px] max-[1100px]:[gap:28px] max-[1100px]:[grid-template-columns:minmax(0,_1fr)_minmax(0,_1.6fr)] max-[760px]:[grid-template-columns:minmax(0,_1fr)] max-[760px]:[gap:28px] max-[760px]:[margin-top:24px]">
            <ul className="erp-features-feature-list grid [gap:20px] [list-style:none] [margin:18px_0_0] [padding:0] [&_li]:flex [&_li]:items-center [&_li]:[gap:12px] [&_li]:[color:#202020] [&_li]:[font-size:18px] [&_li]:font-medium [&_li]:[line-height:1.5] [&_svg]:[flex-shrink:0] [&_svg]:[color:#193175] max-[1100px]:[&_li]:[font-size:16px] max-[760px]:[margin-top:0] max-[760px]:[gap:16px]">
              {features.map((feature) => (
                <li key={feature}>
                  <CheckCircle2
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
