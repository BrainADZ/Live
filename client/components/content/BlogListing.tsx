/* eslint-disable @next/next/no-img-element */
"use client";


import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  Search,
  type LucideIcon,
} from "lucide-react";
import PopupForm from "@/components/PopupForm";
import type { ArticleCard } from "@/lib/cms-content";
import CmsNotice from "@/components/content/CmsNotice";

type BlogCategory = string;

type ManualIconConfig = {
  src: string;
  alt: string;
};

function IconWithFallback({
  icon,
  fallback: FallbackIcon,
  className,
  fallbackClassName,
}: {
  icon: ManualIconConfig;
  fallback: LucideIcon;
  className: string;
  fallbackClassName?: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !icon.src) {
    return (
      <FallbackIcon
        aria-hidden="true"
        strokeWidth={1.6}
        className={fallbackClassName ?? className}
      />
    );
  }

  return (
    <img
      src={icon.src}
      alt={icon.alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}

/*
  MANUAL ICON SETUP
  -----------------
  Put your own PNG, SVG or WebP icons inside:
  /public/blog/icons/

  Then update only these paths.
*/
const blogIcons = {
  software: {
    src: "/blog/icons/software.png",
    alt: "Software and product development",
  },
  businessPlatforms: {
    src: "/blog/icons/business-platforms.png",
    alt: "CRM ERP and business platforms",
  },
  digitalSignage: {
    src: "/blog/icons/digital-signage.png",
    alt: "Digital signage and displays",
  },
  consulting: {
    src: "/blog/icons/consulting.png",
    alt: "Technology consulting",
  },
  search: {
    src: "/blog/icons/search.png",
    alt: "Search",
  },
  clock: {
    src: "/blog/icons/clock.png",
    alt: "Reading time",
  },
  emptyState: {
    src: "/blog/icons/empty-state.png",
    alt: "No articles found",
  },
  arrow: {
    src: "/blog/icons/arrow-right.png",
    alt: "Open",
  },
} satisfies Record<string, ManualIconConfig>;

export default function BlogListing({ allArticles, unavailable }: { allArticles: ArticleCard[]; unavailable: boolean }) {
  const categories = ["All Insights", ...new Set(allArticles.map(article => article.category))];
  const [activeCategory, setActiveCategory] =
    useState<BlogCategory>("All Insights");

  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // First 4 newest blogs go to Featured Insights
  const featuredArticles = allArticles.slice(0, 4);

  // First featured blog is the large left card
  const mainFeaturedArticle = featuredArticles[0];

  // Next 3 featured blogs are the right-side cards
  const supportingFeaturedArticles = featuredArticles.slice(1);

  // Keep every published article searchable, including featured articles.
  const latestArticles = allArticles;

  const filteredArticles = latestArticles.filter((article) => {
    const matchesCategory =
      activeCategory === "All Insights" ||
      article.category === activeCategory;

    const query = searchQuery.trim().toLowerCase();

    const matchesSearch =
      !query ||
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMoreArticles = visibleCount < filteredArticles.length;

  return (
    <main className="bg-white text-[#161616]">
      {/* HERO */}
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <img
          src="/hero/blog.webp"
          alt="BrainADZ Live Blog"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.78)_30%,rgba(0,0,0,0.42)_58%,rgba(0,0,0,0.08)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-4 lg:min-h-135 lg:px-12">
          <div
            className="flex items-center gap-3 text-[16px] font-light md:text-[18px]"
            data-aos="fade-up"
          >
            <Link href="/" className="text-[#6da0ff] hover:underline">
              Home
            </Link>

            <span className="text-white/80">/</span>

            <span className="text-white/90">Blog</span>
          </div>

          <div
            className="mt-12 max-w-230 md:mt-14"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="mb-5 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#8fb1ff]">
              BrainADZ Live Insights
            </p>

            <h1 className="text-[38px] font-semibold leading-[1.08] tracking-[-1.5px] text-white md:text-[48px] lg:text-[58px]">
              Practical Insights for Better Technology Decisions
            </h1>
          </div>

          <div
            className="mt-auto pb-8 md:pb-9 lg:pb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="max-w-205 text-[14px] font-light leading-[1.5] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">
              Explore software, business platforms, digital signage and
              consulting topics written around real project questions and
              implementation decisions.
            </p>

            <div className="mt-8">
              <a
                href="#latest-insights"
                className="inline-flex h-14.5 min-w-56.25 items-center justify-center gap-4 rounded-full bg-[#193175] px-4 text-[13px] font-bold text-white shadow-[0_14px_45px_rgba(60,91,155,0.35)] transition duration-300 hover:bg-[#2f4a82]"
              >
                Explore Insights

                <ArrowRight size={20} strokeWidth={1.8} className="text-[20px] leading-none" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {!allArticles.length && <section className="section-spacing px-5 lg:px-12"><CmsNotice unavailable={unavailable} kind="Blogs" /></section>}
      {/* FEATURED INSIGHTS */}
      {mainFeaturedArticle && (
<section
  id="featured-insights"
  className="section-spacing bg-white px-5 md:px-4 lg:px-12"
>
  <div className="mx-auto max-w-450">
    <h2
      className="mb-12 text-[42px] font-normal leading-[1.1] tracking-[-1.8px] text-[#262626] md:text-[58px] lg:text-[68px]"
      data-aos="fade-up"
    >
      Featured Insights and Technology Perspectives
    </h2>

    <div
      className={`grid grid-cols-1 overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-white shadow-[0_24px_80px_rgba(22,22,22,0.06)] ${supportingFeaturedArticles.length ? "lg:grid-cols-[1fr_1fr]" : ""}`}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {/* MAIN FEATURED INSIGHT */}
      <div className="relative min-h-130 overflow-hidden border-b border-[#dfe6f1] bg-[#eef2f8] lg:min-h-160 lg:border-b-0 lg:border-r">
        <div className="absolute inset-0 flex items-center justify-center text-[15px] font-light text-[#8d8d8d]">
          Featured insight image
        </div>

        <img
          src={mainFeaturedArticle.image}
          alt={mainFeaturedArticle.imageAlt}
          className="absolute inset-0 z-10 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute bottom-0 right-0 z-20 w-[calc(100%-24px)] max-w-107.5 border-l border-t border-[#dfe6f1] bg-white p-7 shadow-[0_18px_50px_rgba(22,22,22,0.12)]">
          <p className="text-[14px] font-light text-[#616161]">
            {mainFeaturedArticle.category}
          </p>

          <h3 className="mt-3 text-[22px] font-normal leading-[1.35] tracking-[-0.4px] text-[#262626]">
            {mainFeaturedArticle.title}
          </h3>

          <div className="mt-4 inline-flex items-center gap-2 text-[13px] font-light text-[#616161]">
            <IconWithFallback
              icon={blogIcons.clock}
              fallback={Clock3}
              className="h-4 w-4 object-contain"
              fallbackClassName="h-4 w-4"
            />

            {mainFeaturedArticle.readTime}
          </div>

          <Link
            href={mainFeaturedArticle.href}
            className="group mt-7 inline-flex items-center gap-3 text-[15px] font-light text-[#193175] hover:underline"
          >
            Read the insight

            <IconWithFallback
              icon={blogIcons.arrow}
              fallback={ArrowRight}
              className="h-4.5 w-4.5 object-contain transition-transform duration-300 group-hover:translate-x-1"
              fallbackClassName="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* SUPPORTING FEATURED INSIGHTS */}
      {supportingFeaturedArticles.length > 0 && <div className="grid grid-cols-1 md:grid-cols-2">
        {supportingFeaturedArticles.map((article, index) => (
          <Link
            key={article.href}
            href={article.href}
            className={`group overflow-hidden bg-white transition-colors duration-300 hover:bg-[#fbfcff] ${
              index === 0
                ? "border-b border-[#dfe6f1] md:col-span-2"
                : index === 1
                  ? "border-b border-[#dfe6f1] md:border-b-0 md:border-r"
                  : ""
            }`}
          >
            {/* FEATURED BLOG IMAGE */}
            <div
              className={`relative overflow-hidden border-b border-[#dfe6f1] bg-[#eef2f8] ${
                index === 0 ? "h-52 lg:h-55" : "h-45 lg:h-48"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center text-[14px] font-light text-[#8d8d8d]">
                Featured insight image
              </div>

              <img
                src={article.image}
                alt={article.imageAlt}
                className="relative z-10 h-full w-full object-cover transition duration-600 group-hover:scale-105"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* FEATURED BLOG CONTENT */}
            <div className={index === 0 ? "p-8" : "p-7"}>
              <div className="flex flex-wrap items-center justify-between gap-3 text-[13px] font-light text-[#616161]">
                <span className="text-[#193175]">
                  {article.category}
                </span>

                <span className="inline-flex items-center gap-2">
                  <IconWithFallback
                    icon={blogIcons.clock}
                    fallback={Clock3}
                    className="h-3.75 w-3.75 object-contain"
                    fallbackClassName="h-3.75 w-3.75"
                  />

                  {article.readTime}
                </span>
              </div>

              <h3
                className={`mt-3 font-normal leading-[1.4] text-[#262626] transition-colors duration-300 group-hover:text-[#193175] ${
                  index === 0
                    ? "max-w-162.5 text-[24px] tracking-[-0.5px]"
                    : "text-[20px]"
                }`}
              >
                {article.title}
              </h3>

              <span className="mt-7 inline-flex items-center gap-3 text-[15px] font-light text-[#193175] group-hover:underline">
                Read more

                <IconWithFallback
                  icon={blogIcons.arrow}
                  fallback={ArrowRight}
                  className="h-4.5 w-4.5 object-contain transition-transform duration-300 group-hover:translate-x-1"
                  fallbackClassName="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>}
    </div>
  </div>
</section>

      )}
      {/* LATEST INSIGHTS */}
      {allArticles.length > 0 && <section
        id="latest-insights"
        className="section-spacing scroll-mt-24 bg-white px-5 md:px-4 lg:px-12"
      >
        <div className="mx-auto max-w-450">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#193175]">
                Latest Insights
              </p>

              <h2 className="text-[38px] font-normal leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
                Explore Practical Technology Topics
              </h2>
            </div>

            <div className="flex flex-col gap-5 lg:items-end">
              <div className="relative w-full max-w-145">
                <IconWithFallback
                  icon={blogIcons.search}
                  fallback={Search}
                  className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 object-contain"
                  fallbackClassName="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#6b7280]"
                />

                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => {
                    setSearchQuery(event.target.value);
                    setVisibleCount(12);
                  }}
                  aria-label="Search blogs"
                  placeholder="Search articles"
                  className="h-13.5 w-full rounded-full border border-[#dfe6f1] bg-[#f8faff] pl-12 pr-5 text-[15px] font-light text-[#262626] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#193175] focus:bg-white"
                />
              </div>
            </div>
          </div>

          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleCount(12);
                  }}
                  className={`rounded-full border px-5 py-2.5 text-[14px] font-light transition ${
                    isActive
                      ? "border-[#193175] bg-[#193175] text-white"
                      : "border-[#dfe6f1] bg-white text-[#525252] hover:border-[#193175] hover:text-[#193175]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visibleArticles.map((article) => (
                <Link
                  key={article.title}
                  href={article.href}
                  className="group overflow-hidden rounded-[18px] border border-[#dfe6f1] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#cbd7ea] hover:shadow-[0_24px_75px_rgba(22,22,22,0.075)]"
                >
                  <div className="relative h-64 overflow-hidden bg-[#eef2f8]">
                    <div className="absolute inset-0 flex items-center justify-center text-[14px] font-light text-[#8d8d8d]">
                      Article image
                    </div>

                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      className="relative z-10 h-full w-full object-cover transition duration-600 group-hover:scale-105"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3 text-[13px] font-light text-[#616161]">
                      <span className="text-[#193175]">
                        {article.category}
                      </span>

                      <span className="inline-flex items-center gap-2">
                        <IconWithFallback
                          icon={blogIcons.clock}
                          fallback={Clock3}
                          className="h-3.75 w-3.75 object-contain"
                          fallbackClassName="h-3.75 w-3.75"
                        />

                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="mt-5 text-[24px] font-normal leading-[1.28] tracking-[-0.6px] text-[#262626] transition group-hover:text-[#193175]">
                      {article.title}
                    </h3>

                    <p className="mt-4 text-[15px] font-light leading-[1.75] text-[#616161]">
                      {article.description}
                    </p>

                    <span className="mt-7 inline-flex items-center gap-3 text-[14px] font-medium text-[#193175]">
                      Read article

                      <IconWithFallback
                        icon={blogIcons.arrow}
                        fallback={ArrowRight}
                        className="h-4 w-4 object-contain transition group-hover:translate-x-1"
                        fallbackClassName="h-4 w-4 transition group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-[18px] border border-[#dfe6f1] bg-[#f8faff] px-6 py-16 text-center">
              <IconWithFallback
                icon={blogIcons.emptyState}
                fallback={BookOpen}
                className="mx-auto h-9 w-9 object-contain"
                fallbackClassName="mx-auto h-9 w-9 text-[#193175]"
              />

              <h3 className="mt-5 text-[24px] font-normal text-[#262626]">
                No Articles Found
              </h3>

              <p className="mx-auto mt-3 max-w-130 text-[15px] font-light leading-[1.7] text-[#616161]">
                Try another search term or switch back to all insights.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All Insights");
                  setVisibleCount(12);
                }}
                className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-[#193175]"
              >
                Clear filters

                <IconWithFallback
                  icon={blogIcons.arrow}
                  fallback={ArrowRight}
                  className="h-4 w-4 object-contain"
                  fallbackClassName="h-4 w-4"
                />
              </button>
            </div>
          )}

          {filteredArticles.length > 0 && hasMoreArticles && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() =>
                  setVisibleCount((currentCount) =>
                    Math.min(
                      currentCount + 6,
                      filteredArticles.length,
                    ),
                  )
                }
                className="group inline-flex h-13.5 min-w-55 items-center justify-between rounded-sm border border-[#193175] px-6 text-[15px] font-medium text-[#193175] transition-all duration-300 hover:bg-[#193175] hover:text-white"
              >
                <span>Load More Insights</span>

                <IconWithFallback
                  icon={blogIcons.arrow}
                  fallback={ArrowRight}
                  className="h-4.5 w-4.5 object-contain transition-transform duration-300 group-hover:translate-x-1"
                  fallbackClassName="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          )}
        </div>
      </section>}

      {/* FINAL CTA */}
      <section className="section-spacing bg-white">
        <div className="mx-auto max-w-450 px-4 lg:px-10">
          <div className="flex min-h-65 overflow-hidden bg-[#193175] md:min-h-75">
            <div className="hidden w-[32%] shrink-0 md:block">
              <img
                src="/CTA/cta.webp"
                alt="Discuss a technology requirement with BrainADZ Live"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
              <div className="max-w-150">
                <h3 className="text-[20px] font-semibold leading-tight text-white md:text-[26px] lg:text-[30px]">
                  Have a Technology Question Behind Your Project?
                </h3>

                <p className="mt-4 text-[16px] font-light leading-[1.55] text-white">
                  Share the problem, current process or product idea with our
                  team. We can help you understand the right service, platform
                  or next step.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="group inline-flex h-13 w-fit min-w-52.5 items-center justify-between rounded-sm border border-white px-6 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#193175] md:min-w-57.5"
              >
                <span>Discuss Your Requirement</span>

                <ArrowRight size={26} strokeWidth={1.8} className="text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <PopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </main>
  );
}
