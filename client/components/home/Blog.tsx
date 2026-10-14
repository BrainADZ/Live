"use client";
import Link from "next/link";



import { ArrowRight } from "lucide-react";
import type { ArticleCard } from "@/lib/cms-content";
/* eslint-disable @next/next/no-img-element */

export default function BlogSection({ blogs }: { blogs: ArticleCard[] }) {
  if (!blogs.length) return null;
  return (
    <section className="section-spacing lazy-section bg-[#f8faff] px-5 text-[#161616] md:px-4 lg:px-12">
      <div className="mx-auto w-full max-w-[1800px]">
        {/* HEADING */}
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div data-aos="fade-right">
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[2.5px] text-[#193175]">
              Blogs
            </p>

            <h2 className="max-w-175 text-[38px] font-normal leading-[1.1] tracking-[-1.7px] text-[#262626] md:text-[48px] lg:text-[54px]">
              Insights on AI, Software, and Smart Display Solutions
            </h2>
          </div>

          <Link
            href="/blog"
            data-aos="fade-left"
            data-aos-delay="100"
            className="inline-flex w-fit items-center gap-4 text-[17px] font-light text-[#193175] transition hover:underline"
          >
            View all blogs
            <ArrowRight size={28} strokeWidth={1.8} className="text-[28px] leading-none" />
          </Link>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {blogs.map((blog, index) => (
            <Link
              key={blog.title}
              href={blog.href}
              data-aos="card-reveal"
              data-aos-delay={index * 150}
              data-aos-duration="520"
              className="group relative overflow-hidden rounded-xl border border-[#dfe6f1] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(22,22,22,0.07)]"
            >
              {/* IMAGE */}
              <div className="relative aspect-[1.45/1] overflow-hidden bg-[#eef2f8]">
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-[14px] font-light text-[#8d8d8d]">
                  Blog image will appear here
                </div>

                <img
                  src={blog.image}
                  alt={blog.imageAlt}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="relative z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 z-20 bg-[#193175]/0 transition duration-300 group-hover:bg-[#193175]/10" />
              </div>

              {/* CONTENT */}
              <div className="p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[13px] font-light uppercase tracking-[1.4px] text-[#193175]">
                    {blog.category}
                  </span>

                  <span className="text-[13px] font-light text-[#777]">
                    {blog.date}
                  </span>
                </div>

                <h3 className="mt-6 min-h-23 text-[24px] font-normal leading-[1.32] tracking-[-0.5px] text-[#262626] transition group-hover:text-[#193175]">
                  {blog.title}
                </h3>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-[15px] font-light text-[#193175]">
                    Read article
                  </span>

                  <ArrowRight size={32} strokeWidth={1.8} className="text-[32px] font-light leading-none text-[#193175] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              <span className="absolute bottom-0 left-0 h-0.75 w-0 bg-[#193175] transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
