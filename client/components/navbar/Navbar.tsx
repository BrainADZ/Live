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
  { title: "Overview", href: "/about-us" },
  { title: "Our Core Team", href: "/about-us/our-core-team" },
  { title: "Careers", href: "/careers" },
  {
    title: "How We Work And Function",
    href: "/about-us/how-we-work-and-function",
  },
];

const normalLinks = [
  { label: "Consulting", href: "/consulting" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const [activeCategory, setActiveCategory] =
    useState<Category>("Software Services");

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileSolutionsOpen(false);
    setMobileAboutOpen(false);
    setMobileResourcesOpen(false);
  };

  const closeMegaMenu = () => {
    setShowMegaMenu(false);
  };

  const dropdownBox =
    "rounded-[6px] border border-white/40 bg-white py-3 shadow-[0_18px_45px_rgba(0,0,0,0.12)] backdrop-blur-xl";

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e5e5] bg-white ">
      <nav className="mx-auto flex h-21 max-w-450 items-center justify-between px-5 md:px-8 lg:px-12">
        <div className="flex items-center">
          <Link href="/" className="mr-10 flex items-center xl:mr-14">
            <img
              src="/logos/logo--22.png"
              alt="BrainADZLive Logo"
              className="h-13.5 w-auto object-contain md:h-14.5"
            />
          </Link>

          <div className="hidden items-center gap-8 xl:flex">
            {/* SOLUTIONS MEGA MENU */}
            <div
              className="relative"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-[15px] font-normal text-[#161616] transition hover:text-[#3c5b9b]"
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

              <div
                className={`fixed left-0 top-21 w-full border-t border-[#e5e5e5] bg-white shadow-xl transition-all duration-200 ${
                  showMegaMenu
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                }`}
              >
                <div className="mx-auto flex min-h-130 max-w-450 px-0">
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
                          {item}
                          <span className="text-lg text-[#3c5b9b]">→</span>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href={categoryLinks[activeCategory]}
                      onClick={closeMegaMenu}
                      className="mt-8 flex w-full items-center justify-between rounded-[3px] bg-[#3c5b9b] px-5 py-4 text-[15px] font-normal text-white transition hover:bg-[#2f4a82]"
                    >
                      Explore {activeCategory}
                      <span>→</span>
                    </Link>
                  </div>

                  <div className="flex-1 p-10">
                    <Link
                      href={categoryLinks[activeCategory]}
                      onClick={closeMegaMenu}
                      className="group mb-12 inline-flex items-center gap-3 text-[48px] font-light leading-none tracking-[-1.5px] text-[#3c5b9b]"
                    >
                      {activeCategory}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>

                    <div className="grid grid-cols-3 gap-x-14 gap-y-12">
                      {menuContent[activeCategory].map((item) => (
                        <Link
                          href={item.href}
                          key={item.title}
                          onClick={closeMegaMenu}
                          className="group cursor-pointer"
                        >
                          <h3 className="mb-2 text-[18px] font-normal text-[#161616] transition group-hover:text-[#3c5b9b]">
                            {item.title}
                          </h3>
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
                className="flex items-center gap-1 text-[15px] font-normal text-[#161616] transition hover:text-[#3c5b9b]"
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
                      className="block px-5 py-3.5 text-[15px] font-normal text-[#161616] transition hover:bg-white/70 hover:text-[#3c5b9b]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {normalLinks.slice(0, 2).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] font-normal text-[#161616] transition hover:text-[#3c5b9b]"
              >
                {link.label}
              </Link>
            ))}

            {/* RESOURCES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setShowResources(true)}
              onMouseLeave={() => setShowResources(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-[15px] font-normal text-[#161616] transition hover:text-[#3c5b9b]"
              >
                Resources
                <ChevronDown
                  size={18}
                  strokeWidth={1.6}
                  className={`transition duration-300 ${
                    showResources ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 top-full z-50 pt-4 transition-all duration-200 ${
                  showResources
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-2 opacity-0"
                }`}
              >
                <div className={`${dropdownBox} min-w-57.5`}>
                  <Link
                    href="/blog"
                    onClick={() => setShowResources(false)}
                    className="block px-5 py-3 text-[15px] font-normal text-[#161616] transition hover:bg-white/70 hover:text-[#3c5b9b]"
                  >
                    Blog
                  </Link>

                  <Link
                    href="/case-studies"
                    onClick={() => setShowResources(false)}
                    className="block px-5 py-3 text-[15px] font-normal text-[#161616] transition hover:bg-white/70 hover:text-[#3c5b9b]"
                  >
                    Case Studies
                  </Link>
                </div>
              </div>
            </div>

            {normalLinks.slice(2).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] font-normal text-[#161616] transition hover:text-[#3c5b9b]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-6 sm:flex">
          <button
            type="button"
            aria-label="Search"
            className="text-[#525252] transition hover:text-[#3c5b9b]"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            aria-label="Account"
            className="text-[#525252] transition hover:text-[#3c5b9b]"
          >
            <CircleUserRound size={23} strokeWidth={1.5} />
          </button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="ml-4 flex h-10 w-10 items-center justify-center text-[#161616] transition hover:text-[#3c5b9b] xl:hidden"
        >
          {mobileOpen ? (
            <X size={28} strokeWidth={1.6} />
          ) : (
            <Menu size={30} strokeWidth={1.6} />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed left-0 top-21 z-40 h-[calc(100dvh-84px)] w-full overflow-y-auto bg-white/90 backdrop-blur-xl transition-all duration-300 xl:hidden ${
          mobileOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col border-t border-[#e5e5e5]">
          <div className="flex items-center justify-between border-b border-[#e5e5e5] px-5 py-4">
            <button
              type="button"
              className="flex items-center gap-3 text-[15px] text-[#161616]"
            >
              <Search size={19} strokeWidth={1.5} />
              Search
            </button>

            <div className="flex items-center gap-5">
              <Globe size={20} strokeWidth={1.5} className="text-[#525252]" />
              <CircleUserRound
                size={23}
                strokeWidth={1.5}
                className="text-[#525252]"
              />
            </div>
          </div>

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
                    className="flex items-center justify-between px-6 py-4 text-[16px] font-normal text-[#3c5b9b]"
                  >
                    {category}
                    <span>→</span>
                  </Link>

                  <div className="px-8 pb-4">
                    <div className="space-y-4">
                      {menuContent[category].map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block text-[15px] font-light leading-[1.45] text-[#262626] transition hover:text-[#3c5b9b]"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={() => setMobileAboutOpen((prev) => !prev)}
            className="flex items-center justify-between border-b border-[#e5e5e5] px-5 py-5 text-left text-[18px] font-normal text-[#161616]"
          >
            About
            <ChevronDown
              size={20}
              strokeWidth={1.6}
              className={`transition ${mobileAboutOpen ? "rotate-180" : ""}`}
            />
          </button>

          {mobileAboutOpen && (
            <div className="border-b border-[#e5e5e5] bg-white/60 backdrop-blur-xl">
              {aboutLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block px-8 py-4 text-[16px] font-normal text-[#161616] transition hover:text-[#3c5b9b]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}

          {normalLinks.slice(0, 2).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              className="border-b border-[#e5e5e5] px-5 py-5 text-[18px] font-normal text-[#161616]"
            >
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => setMobileResourcesOpen((prev) => !prev)}
            className="flex items-center justify-between border-b border-[#e5e5e5] px-5 py-5 text-left text-[18px] font-normal text-[#161616]"
          >
            Resources
            <ChevronDown
              size={20}
              strokeWidth={1.6}
              className={`transition ${
                mobileResourcesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileResourcesOpen && (
            <div className="border-b border-[#e5e5e5] bg-white/60 backdrop-blur-xl">
              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className="block px-8 py-4 text-[16px] font-normal text-[#161616] transition hover:text-[#3c5b9b]"
              >
                Blog
              </Link>

              <Link
                href="/case-studies"
                onClick={closeMobileMenu}
                className="block px-8 py-4 text-[16px] font-normal text-[#161616] transition hover:text-[#3c5b9b]"
              >
                Case Studies
              </Link>
            </div>
          )}

          {normalLinks.slice(2).map((link) => (
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
