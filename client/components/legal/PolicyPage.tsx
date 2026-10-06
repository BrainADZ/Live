import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export type PolicySection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export default function PolicyPage({ title, description, heroImage, sections }: {
  title: string;
  description: string;
  heroImage: string;
  sections: PolicySection[];
}) {
  return (
    <main className="bg-white text-[#161616]">
      <section className="relative min-h-105 overflow-hidden bg-black text-white md:min-h-120 lg:min-h-135">
        <Image src={heroImage} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_28%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-135 max-w-450 flex-col px-5 py-10 md:min-h-150 md:px-4 lg:min-h-135 lg:px-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 text-[16px] font-light md:text-[18px]">
            <Link href="/" className="text-[#6da0ff] hover:underline">Home</Link>
            <span aria-hidden="true" className="text-white/80">/</span>
            <span aria-current="page" className="text-white/90">{title}</span>
          </nav>
          <div className="mt-12 max-w-205 md:mt-14">
            <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">{title}</h1>
          </div>
          <div className="mt-auto pb-8 pt-10 md:pb-9 lg:pb-10">
            <p className="max-w-195 text-[14px] font-light leading-[1.45] tracking-[-0.3px] text-white/90 md:text-[16px] lg:text-[18px]">{description}</p>
            <p className="mt-6 text-[13px] text-white/80">Last updated: <time dateTime="2026-10-06">6 October 2026</time></p>
          </div>
        </div>
      </section>

      <section className="section-spacing px-5 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-450 gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">
          <aside>
            <nav aria-label="On this page" className="rounded-2xl border border-[#dfe6f1] bg-[#f8faff] p-6 lg:sticky lg:top-28">
              <p className="mb-5 text-[13px] font-medium uppercase tracking-[1.5px] text-[#193175]">On this page</p>
              <ol className="space-y-4">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="text-[14px] leading-relaxed text-[#525252] hover:text-[#193175] hover:underline">{index + 1}. {section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
          <article className="min-w-0 max-w-5xl">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-[#dfe6f1] py-8 first:pt-0 last:border-b-0">
                <h2 className="mb-5 text-[24px] font-normal leading-tight tracking-[-0.5px] text-[#262626] md:text-[30px]">{index + 1}. {section.title}</h2>
                <div className="space-y-4 text-[16px] leading-[1.85] text-[#525252]">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && <ul className="list-disc space-y-2 pl-5 marker:text-[#193175]">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                </div>
              </section>
            ))}
            <div className="mt-8 rounded-2xl border border-[#dfe6f1] bg-[#f8faff] p-6 md:p-8">
              <h2 className="text-[24px] font-normal text-[#262626]">Need help or clarification?</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-[#525252]">Contact BrainADZ Live with your enquiry, order reference or project details.</p>
              <a href="mailto:info@brainadzlive.com" className="mt-4 inline-block break-all text-[#193175] hover:underline">info@brainadzlive.com</a>
              <p className="mt-3 text-[14px] leading-relaxed text-[#616161]">Apex Square III, UGF, Plot 6, Pocket B-3, Sector-17, Dwarka, New Delhi 110075</p>
              <Link href="/contact-us" className="mt-6 inline-flex items-center gap-3 text-[15px] text-[#193175] hover:underline">Contact our team <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
