"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
import styles from "./features.module.css";

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
    <div className={`${styles.workspace} ${styles[slide.theme]}`}>
      <div className={styles.workspaceWindow}>
        <aside
          className={styles.workspaceSidebar}
          aria-hidden="true"
        >
          <span className={styles.workspaceLogo}>B</span>
          <LayoutDashboard size={18} />
          <UsersRound size={18} />
          <span className={styles.selectedIcon}>
            <Icon size={18} />
          </span>
          <Package size={18} />
          <ChartNoAxesCombined size={18} />
        </aside>
        <div className={styles.workspaceBody}>
          <div className={styles.workspaceHeading}>
            <span>{slide.title}</span>
            <span>Overview</span>
          </div>
          <div className={styles.workspaceTable}>
            <div className={styles.tableHead}>
              {slide.columns.map((column) => (
                <span key={column}>{column}</span>
              ))}
            </div>
            {slide.rows.map((row) => (
              <div
                className={styles.tableRow}
                key={row[0]}
              >
                {row.map((cell, index) => (
                  <span
                    key={index}
                    className={index === 3 ? styles.status : undefined}
                  >
                    {cell}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.highlight}>
        <CheckCircle2 size={23} />
        <span>{slide.highlight[0]}</span>
        <strong>{slide.highlight[1]}</strong>
        <span>{slide.highlight[2]}</span>
        <span className={styles.highlightStatus}>{slide.highlight[3]}</span>
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
      className={styles.slider}
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
        className={styles.viewport}
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
          className={`${styles.track} ${position.animate ? "" : styles.trackStill}`}
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
              className={styles.slide}
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
      <div className={styles.sliderControls}>
        <div
          className={styles.dots}
          aria-label="Choose feature preview"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.theme}
              type="button"
              className={activeIndex === index ? styles.activeDot : ""}
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
          className={styles.pauseButton}
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
        className={`${styles.stickyHeader} ${headerVisible ? styles.headerShown : ""}`}
        aria-hidden={!headerVisible}
        inert={!headerVisible}
      >
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link
              href="/"
              className={styles.brand}
              aria-label="BrainADZ Live home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/logo--22.png"
                alt="BrainADZ Live"
                width="160"
                height="58"
              />
              <span>ERP</span>
            </Link>
            <button
              type="button"
              className={styles.demoButton}
              onClick={onRequestDemo}
            >
              Request a demo
            </button>
          </div>
        </header>
        <nav
          className={`${styles.navigation} ${headerVisible ? styles.navigationShown : ""}`}
          aria-label="ERP landing page sections"
          aria-hidden={!headerVisible}
          inert={!headerVisible}
        >
          {sectionLinks.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={activeSection === section.id ? styles.activeLink : ""}
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
        className={styles.features}
        id="erp-features"
        aria-labelledby="erp-features-heading"
      >
        <div className={styles.featureInner}>
          <h2 id="erp-features-heading">
            ERP software that solves growing
            <br className={styles.desktopBreak} /> business challenges
          </h2>
          <p>
            Bring finance, inventory, sales and purchasing together with an ERP
            built around your business. Simplify everyday operations, connect
            your teams and get a clearer view of the information you need to
            keep growing.
          </p>
          <div className={styles.featureGrid}>
            <ul className={styles.featureList}>
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
