/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import {
  ChevronDown,
  Globe,
  Search,
  CircleUserRound,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  categoryLinks,
  menuContent,
  solutionCategories,
  type Category,
  type MenuItem,
} from "@/data/solutionMenu";

const aboutLinks: MenuItem[] = [
  {
    title: "Overview",
    href: "/about-us",
  },
  {
    title: "Our Core Team",
    href: "/about-us/our-core-team",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "How We Work And Function",
    href: "/about-us/how-we-work-and-function",
  },
];

const normalLinks = [
  {
    label: "Consulting",
    href: "/consulting",
  },
  {
    label: "Contact",
    href: "/contact-us",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
];

const searchLinks = [
  {
    label: "Software Services",
    href: "/services/software-services",
    description: "Custom software, applications, CRM, ERP and cloud consulting",
    keywords: "software development web app mobile app crm erp api cloud",
  },
  {
    label: "Software Development",
    href: "/services/software-development",
    description: "Custom software development for business workflows",
    keywords: "software development custom software business application",
  },
  {
    label: "Mobile App Development",
    href: "/services/mobile-app-development",
    description: "Mobile applications for customer and business workflows",
    keywords: "mobile app android ios flutter application",
  },
  {
    label: "Web App Development",
    href: "/services/web-app-development",
    description: "Web applications, portals and dashboards",
    keywords: "web app website dashboard portal next react",
  },
  {
    label: "CRM Development",
    href: "/services/crm-development",
    description: "CRM solutions for leads, customers and sales workflows",
    keywords: "crm lead customer sales pipeline",
  },
  {
    label: "ERP Development",
    href: "/services/erp-development",
    description: "ERP systems for operations, finance, inventory and teams",
    keywords: "erp inventory finance operations hr purchase sales",
  },
  {
    label: "API Integration",
    href: "/services/api-integration",
    description: "Connect business systems and third-party platforms",
    keywords: "api integration third party payment crm erp",
  },
  {
    label: "Digital Signage Products",
    href: "/products/digital-signage-products",
    description: "Digital displays, kiosks and signage hardware solutions",
    keywords: "digital signage kiosk display standee led lfd",
  },
  {
    label: "Software Platforms",
    href: "/software-platforms",
    description: "CRM, ERP, signage application and cloud signage software",
    keywords: "software platforms crm erp signage cloud virtual trial room",
  },
  {
    label: "Industries",
    href: "/industries",
    description: "Technology solutions for different business industries",
    keywords: "industries healthcare education retail finance property telecom travel",
  },
  {
    label: "Consulting",
    href: "/consulting",
    description: "Technology consulting, planning and solution architecture",
    keywords: "consulting technology planning architecture strategy",
  },
  {
    label: "Community",
    href: "/community",
    description: "Join BrainADZ Live community for insights and discussions",
    keywords: "community join discussions forum updates",
  },
  {
    label: "Blog",
    href: "/blog",
    description: "Technology insights, guides and business perspectives",
    keywords: "blog articles insights technology guide",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    description: "Project examples and solution scenarios",
    keywords: "case studies projects examples portfolio",
  },
  {
    label: "Contact",
    href: "/contact-us",
    description: "Share your requirement with BrainADZ Live",
    keywords: "contact enquiry requirement consultation",
  },
];

const accountLinks = [
  {
    label: "Request Consultation",
    href: "/contact-us",
    description: "Share your requirement with our team",
  },
  {
    label: "Join Community",
    href: "/community",
    description: "Connect with updates, insights and discussions",
  },
  {
    label: "Careers",
    href: "/careers",
    description: "Explore opportunities with BrainADZ Live",
  },
];

export default function Navbar() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const [activeCategory, setActiveCategory] =
    useState<Category>("Software Services");

  const filteredSearchLinks = searchQuery.trim()
    ? searchLinks.filter((item) =>
        `${item.label} ${item.description} ${item.keywords}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    : searchLinks.slice(0, 8);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileSolutionsOpen(false);
    setMobileAboutOpen(false);
  };

  const closeMegaMenu = () => {
    setShowMegaMenu(false);
  };

  const closeSearchPanel = () => {
    setShowSearch(false);
    setSearchQuery("");
  };

  const openSearchPanel = () => {
    setShowSearch(true);
    setShowAccount(false);
    setShowMegaMenu(false);
    setShowAbout(false);
    closeMobileMenu();
  };

  const toggleAccountPanel = () => {
    setShowAccount((prev) => !prev);
    setShowSearch(false);
    setShowMegaMenu(false);
    setShowAbout(false);
  };

  const closeAccountPanel = () => {
    setShowAccount(false);
  };

  const handleSearchEnter = () => {
    if (filteredSearchLinks[0]) {
      window.location.href = filteredSearchLinks[0].href;
    }
  };

  const dropdownBox =
    "rounded-[6px] border border-white/40 bg-white py-3 shadow-[0_18px_45px_rgba(0,0,0,0.12)] backdrop-blur-xl";

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e5e5] bg-white">
      <nav className="mx-auto flex h-21 max-w-450 items-center justify-between px-5 md:px-8 lg:px-12">
        {/* LEFT SIDE */}
        <div className="flex items-center">
          {/* LOGO */}
          <Link href="/" className="mr-10 flex items-center xl:mr-14">
            <img
              src="/logos/logo--22.png"
              alt="BrainADZLive Logo"
              className="h-13.5 w-auto object-contain md:h-14.5"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 xl:flex">
            {/* SOLUTIONS MEGA MENU */}
            <div
              className="relative"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-[15px] font-normal text-[#161616] transition hover:text-[#193175]"
              >
                Solutions

                <ChevronDown
                  size={18}
                  strokeWidth={1.6}
                  className={`transition duration-300 ${
                    showMegaMenu ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* MEGA MENU */}
              <div
                className={`fixed left-0 top-21 w-full border-t border-[#e5e5e5] bg-white shadow-xl transition-all duration-200 ${
                  showMegaMenu
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                }`}
              >
                <div className="mx-auto flex min-h-130 max-w-450 px-0">
                  {/* LEFT CATEGORY SIDEBAR */}
                  <div className="w-82.5 border-r border-[#e0e0e0] bg-[#f4f4f4] p-8">
                    <div className="space-y-2">
                      {solutionCategories.map((item) => (
                        <Link
                          key={item}
                          href={categoryLinks[item]}
                          onMouseEnter={() => setActiveCategory(item)}
                          onClick={closeMegaMenu}
                          className={`flex w-full items-center justify-between rounded-[3px] px-4 py-4 text-left text-[15px] font-normal transition-all ${
                            activeCategory === item
                              ? "bg-[#e8e8e8] text-[#161616]"
                              : "text-[#262626] hover:bg-[#ececec]"
                          }`}
                        >
                          <span>{item}</span>

                          <span className="text-lg text-[#193175]">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* EXPLORE CATEGORY BUTTON */}
                    <Link
                      href={categoryLinks[activeCategory]}
                      onClick={closeMegaMenu}
                      className="mt-8 flex w-full items-center justify-between rounded-[3px] bg-[#193175] px-5 py-4 text-[15px] font-normal text-white transition hover:bg-[#2f4a82]"
                    >
                      <span>Explore {activeCategory}</span>

                      <span>→</span>
                    </Link>
                  </div>

                  {/* RIGHT SIDE CONTENT */}
                  <div className="flex-1 p-10">
                    {/* ACTIVE CATEGORY TITLE */}
                    <Link
                      href={categoryLinks[activeCategory]}
                      onClick={closeMegaMenu}
                      className="group mb-12 inline-flex items-center gap-3 text-[48px] font-light leading-none tracking-[-1.5px] text-[#193175]"
                    >
                      {activeCategory}

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>

                    {/* 
                      ALL SOFTWARE SERVICES / PRODUCTS / INDUSTRIES
                      ARROW ADDED ON THE RIGHT SIDE OF EVERY OPTION
                    */}
                    <div className="grid grid-cols-3 gap-x-14 gap-y-12">
                      {menuContent[activeCategory].map((item) => (
                        <Link
                          href={item.href}
                          key={item.title}
                          onClick={closeMegaMenu}
                          className="group flex w-full items-center justify-between gap-5"
                        >
                          {/* OPTION TITLE */}
                          <h3 className="text-[18px] font-normal leading-[1.35] text-[#161616] transition-colors duration-300 group-hover:text-[#193175]">
                            {item.title}
                          </h3>

                          {/* RIGHT SIDE ARROW */}
                          <span className="shrink-0 text-[24px] font-light leading-none text-[#193175] transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ABOUT DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setShowAbout(true)}
              onMouseLeave={() => setShowAbout(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-[15px] font-normal text-[#161616] transition hover:text-[#193175]"
              >
                About

                <ChevronDown
                  size={18}
                  strokeWidth={1.6}
                  className={`transition duration-300 ${
                    showAbout ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 top-full z-50 pt-4 transition-all duration-200 ${
                  showAbout
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-2 opacity-0"
                }`}
              >
                <div className={`${dropdownBox} min-w-82`}>
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setShowAbout(false)}
                      className="block px-5 py-3.5 text-[15px] font-normal text-[#161616] transition hover:bg-white/70 hover:text-[#193175]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* NORMAL LINKS */}
            {normalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] font-normal text-[#161616] transition hover:text-[#193175]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* DESKTOP RIGHT ICONS */}
        <div className="hidden items-center gap-6 sm:flex">
          {/* <Link
            href="/community"
            className="hidden text-[15px] font-normal text-[#161616] transition hover:text-[#193175] xl:inline-flex"
          >
            Community
          </Link> */}

          <button
            type="button"
            aria-label="Search"
            onClick={openSearchPanel}
            className="text-[#525252] transition hover:text-[#193175]"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>

          <div className="relative">
            <button
              type="button"
              aria-label="Account"
              onClick={toggleAccountPanel}
              className="text-[#525252] transition hover:text-[#193175]"
            >
              <CircleUserRound size={23} strokeWidth={1.5} />
            </button>

            <div
              className={`absolute right-0 top-full z-50 mt-5 w-86 transition-all duration-200 ${
                showAccount
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-2 opacity-0"
              }`}
            >
              <div className="rounded-[14px] border border-[#e5e5e5] bg-white p-4 shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
                <div className="border-b border-[#e5e5e5] pb-4">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#193175]">
                    BrainADZ Live
                  </p>

                  <h3 className="mt-2 text-[20px] font-light tracking-[-0.4px] text-[#161616]">
                    Account & quick actions
                  </h3>

                  <p className="mt-2 text-[13px] font-light leading-[1.55] text-black/60">
                    Client portal access can be connected later. For now, use
                    these quick actions.
                  </p>
                </div>

                <div className="py-3">
                  {accountLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeAccountPanel}
                      className="group block rounded-[8px] px-3 py-3 transition hover:bg-[#f6f8fc]"
                    >
                      <span className="flex items-center justify-between gap-4 text-[15px] font-normal text-[#161616] group-hover:text-[#193175]">
                        {item.label}
                        <span className="text-[#193175] transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </span>

                      <span className="mt-1 block text-[13px] font-light leading-[1.45] text-black/55">
                        {item.description}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="rounded-[10px] bg-[#f6f8fc] px-4 py-3">
                  <p className="text-[13px] font-light leading-[1.55] text-black/65">
                    Client login dashboard can be added later when admin/client
                    panel is ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => {
            setMobileOpen((prev) => !prev);
            setShowSearch(false);
            setShowAccount(false);
          }}
          className="ml-4 flex h-10 w-10 items-center justify-center text-[#161616] transition hover:text-[#193175] xl:hidden"
        >
          {mobileOpen ? (
            <X size={28} strokeWidth={1.6} />
          ) : (
            <Menu size={30} strokeWidth={1.6} />
          )}
        </button>
      </nav>

      {/* SEARCH PANEL */}
      <div
        className={`fixed left-0 top-21 z-50 w-full border-t border-[#e5e5e5] bg-white shadow-[0_28px_90px_rgba(0,0,0,0.16)] transition-all duration-300 ${
          showSearch
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-450 px-5 py-7 md:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-5">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#193175]">
                Search BrainADZ Live
              </p>

              <h3 className="mt-2 text-[28px] font-light tracking-[-0.8px] text-[#161616] md:text-[36px]">
                Find services, platforms, industries and insights
              </h3>
            </div>

            <button
              type="button"
              aria-label="Close search"
              onClick={closeSearchPanel}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e5e5e5] text-[#161616] transition hover:border-[#193175] hover:text-[#193175]"
            >
              <X size={22} strokeWidth={1.6} />
            </button>
          </div>

          <div className="mt-7 flex items-center gap-4 border-b border-[#d7dce8] pb-4">
            <Search size={22} strokeWidth={1.6} className="text-[#193175]" />

            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSearchEnter();
                }
              }}
              autoFocus={showSearch}
              placeholder="Search software, CRM, ERP, signage, industries..."
              className="w-full bg-transparent text-[18px] font-light text-[#161616] outline-none placeholder:text-black/35 md:text-[22px]"
            />
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {filteredSearchLinks.length > 0 ? (
              filteredSearchLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeSearchPanel}
                  className="group rounded-[18px] border border-[#e5e5e5] bg-white p-5 transition hover:border-[#193175]/35 hover:bg-[#f6f8fc]"
                >
                  <span className="flex items-center justify-between gap-4 text-[17px] font-normal text-[#161616] group-hover:text-[#193175]">
                    {item.label}

                    <span className="text-[#193175] transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>

                  <span className="mt-3 block text-[14px] font-light leading-[1.6] text-black/60">
                    {item.description}
                  </span>
                </Link>
              ))
            ) : (
              <div className="rounded-[18px] border border-[#e5e5e5] bg-[#f6f8fc] p-5 md:col-span-2 lg:col-span-4">
                <p className="text-[15px] font-light leading-[1.6] text-black/65">
                  No result found. Try searching for software, CRM, ERP,
                  signage, industries, blog or contact.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed left-0 top-21 z-40 h-[calc(100dvh-84px)] w-full overflow-y-auto bg-white/90 backdrop-blur-xl transition-all duration-300 xl:hidden ${
          mobileOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col border-t border-[#e5e5e5]">
          {/* MOBILE TOP ICONS */}
          <div className="flex items-center justify-between border-b border-[#e5e5e5] px-5 py-4">
            <button
              type="button"
              onClick={openSearchPanel}
              className="flex items-center gap-3 text-[15px] text-[#161616]"
            >
              <Search size={19} strokeWidth={1.5} />
              Search
            </button>

            <div className="flex items-center gap-5">
              <Globe
                size={20}
                strokeWidth={1.5}
                className="text-[#525252]"
              />

              <button
                type="button"
                aria-label="Account"
                onClick={toggleAccountPanel}
                className="text-[#525252] transition hover:text-[#193175]"
              >
                <CircleUserRound size={23} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {showAccount && (
            <div className="border-b border-[#e5e5e5] bg-white px-5 py-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#193175]">
                Account & quick actions
              </p>

              <div className="mt-4 space-y-2">
                {accountLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      closeAccountPanel();
                      closeMobileMenu();
                    }}
                    className="block rounded-[10px] bg-[#f6f8fc] px-4 py-3"
                  >
                    <span className="flex items-center justify-between text-[16px] font-normal text-[#161616]">
                      {item.label}
                      <span className="text-[#193175]">→</span>
                    </span>

                    <span className="mt-1 block text-[13px] font-light leading-[1.45] text-black/55">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* MOBILE SOLUTIONS */}
          <button
            type="button"
            onClick={() => setMobileSolutionsOpen((prev) => !prev)}
            className="flex items-center justify-between border-b border-[#e5e5e5] px-5 py-5 text-left text-[18px] font-normal text-[#161616]"
          >
            Solutions

            <ChevronDown
              size={20}
              strokeWidth={1.6}
              className={`transition ${
                mobileSolutionsOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileSolutionsOpen && (
            <div className="border-b border-[#e5e5e5] bg-white/60 backdrop-blur-xl">
              {solutionCategories.map((category) => (
                <div key={category} className="border-b border-[#dcdcdc]">
                  <Link
                    href={categoryLinks[category]}
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between px-6 py-4 text-[16px] font-normal text-[#193175]"
                  >
                    <span>{category}</span>

                    <span>→</span>
                  </Link>

                  <div className="px-8 pb-4">
                    <div className="space-y-4">
                      {menuContent[category].map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="group flex items-center justify-between gap-4 text-[15px] font-light leading-[1.45] text-[#262626] transition hover:text-[#193175]"
                        >
                          <span>{item.title}</span>

                          <span className="shrink-0 text-[#193175] transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* MOBILE ABOUT */}
          <button
            type="button"
            onClick={() => setMobileAboutOpen((prev) => !prev)}
            className="flex items-center justify-between border-b border-[#e5e5e5] px-5 py-5 text-left text-[18px] font-normal text-[#161616]"
          >
            About

            <ChevronDown
              size={20}
              strokeWidth={1.6}
              className={`transition ${
                mobileAboutOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileAboutOpen && (
            <div className="border-b border-[#e5e5e5] bg-white/60 backdrop-blur-xl">
              {aboutLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block px-8 py-4 text-[16px] font-normal text-[#161616] transition hover:text-[#193175]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}

          {/* MOBILE COMMUNITY LINK */}
          <Link
            href="/community"
            onClick={closeMobileMenu}
            className="border-b border-[#e5e5e5] px-5 py-5 text-[18px] font-normal text-[#161616]"
          >
            Community
          </Link>

          {/* MOBILE NORMAL LINKS */}
          {normalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              className="border-b border-[#e5e5e5] px-5 py-5 text-[18px] font-normal text-[#161616]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}