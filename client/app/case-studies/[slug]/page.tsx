/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaSection from "@/components/home/CTA";
import ContentHero from "@/components/content/ContentHero";
import RichText from "@/components/content/RichText";
import { getCaseStudy } from "@/lib/cms";
import { mediaAlt, mediaURL, readingTime, richTextPlainText } from "@/lib/cms-content";
import { contentMetadata, contentSchema } from "@/lib/cms-seo";
import "@/components/content/content.css";

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = await getCaseStudy((await params).slug);
  if (!study) notFound();
  return contentMetadata(study, `/case-studies/${encodeURIComponent(study.slug)}`, study.summary);
}

export default async function CaseStudyDetail({ params }: Props) {
  const study = await getCaseStudy((await params).slug);
  if (!study) notFound();
  const text = [study.summary, richTextPlainText(study.challenge), ...(study.approach || []).map(item => `${item.title} ${item.description}`), study.beforeAfter?.description, ...(study.beforeAfter?.items || []).map(item => `${item.label} ${item.beforeValue} ${item.afterValue}`), ...(study.results || []).map(item => `${item.value} ${item.label}`), study.performanceEvidence?.description, richTextPlainText(study.finalOutcome?.description)].filter(Boolean).join(" ");
  const sectionHeading = "mb-6 text-3xl font-medium leading-tight tracking-[-0.7px] md:text-4xl";
  return <main className="bg-white text-[#262626]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema(study, `/case-studies/${encodeURIComponent(study.slug)}`, study.summary, "Article")).replace(/</g, "\\u003c") }} />
    <ContentHero doc={study} kind="Case studies" minutes={readingTime(study, text)} description={study.summary} />
    <article className="mx-auto max-w-6xl space-y-14 px-5 py-12 md:py-16">
      <div className="grid gap-8 border-b border-[#dfe6f1] pb-10 md:grid-cols-[1fr_2fr]">
        <div><h2 className="text-sm font-medium uppercase tracking-widest text-[#193175]">Industry</h2><p className="mt-3 text-xl">{study.industry}</p></div>
        <div><h2 className="text-sm font-medium uppercase tracking-widest text-[#193175]">Services</h2><div className="mt-3 flex flex-wrap gap-3">{study.services?.map((service, index) => <span key={index} className="rounded-full bg-[#eef2f8] px-4 py-2 text-sm">{service.name}</span>)}</div></div>
      </div>
      <section><h2 className={sectionHeading}>The Challenge</h2><RichText content={study.challenge} /></section>
      <section><h2 className={sectionHeading}>Our Approach</h2><div className="grid gap-5 md:grid-cols-2">{study.approach?.map((item, index) => <div key={index} className="rounded-xl border border-[#dfe6f1] bg-[#f8faff] p-7"><span className="text-sm font-medium text-[#193175]">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-4 text-xl font-medium">{item.title}</h3><p className="mt-3 whitespace-pre-line leading-relaxed text-[#616161]">{item.description}</p></div>)}</div></section>
      {!!study.beforeAfter?.items?.length && <section><h2 className={sectionHeading}>{study.beforeAfter.title || "Before vs After"}</h2>{study.beforeAfter.description && <p className="mb-6 whitespace-pre-line leading-relaxed text-[#616161]">{study.beforeAfter.description}</p>}<div className="overflow-x-auto"><table className="w-full border-collapse text-left"><thead className="bg-[#193175] text-white"><tr><th scope="col" className="p-4">Area</th><th scope="col" className="p-4">Before</th><th scope="col" className="p-4">After</th></tr></thead><tbody>{study.beforeAfter.items.map((item, index) => <tr key={index} className="border-b border-[#dfe6f1]"><th scope="row" className="p-4 font-medium">{item.label}</th><td className="p-4 text-[#616161]">{item.beforeValue}</td><td className="bg-[#f8faff] p-4 text-[#193175]">{item.afterValue}</td></tr>)}</tbody></table></div></section>}
      {!!study.results?.length && <section><h2 className={sectionHeading}>Results</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{study.results.map((result, index) => <div key={index} className="rounded-xl bg-[#193175] p-8 text-white"><p className="text-4xl font-medium">{result.value}</p><p className="mt-4 text-white/80">{result.label}</p></div>)}</div></section>}
      {!!study.performanceEvidence?.images?.length && <section><h2 className={sectionHeading}>{study.performanceEvidence.title || "Performance Evidence"}</h2>{study.performanceEvidence.description && <p className="mb-6 whitespace-pre-line leading-relaxed text-[#616161]">{study.performanceEvidence.description}</p>}<div className="grid gap-6 md:grid-cols-2">{study.performanceEvidence.images.map((item, index) => { const src = mediaURL(item.image); return src ? <figure key={index}><img src={src} alt={item.altText || mediaAlt(item.image, study.title)} className="h-auto w-full rounded-xl border border-[#dfe6f1]" loading="lazy" />{item.caption && <figcaption className="mt-3 text-sm text-[#616161]">{item.caption}</figcaption>}</figure> : null; })}</div></section>}
      {study.finalOutcome?.description && <section className="rounded-xl bg-[#f8faff] p-7 md:p-10"><h2 className={sectionHeading}>{study.finalOutcome.title || "Final Outcome"}</h2><RichText content={study.finalOutcome.description} /></section>}
      <Link href="/case-studies" className="inline-block font-medium text-[#193175] hover:underline">← All case studies</Link>
    </article>
    <CtaSection />
  </main>;
}
