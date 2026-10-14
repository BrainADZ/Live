/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { categoryName, formatDate, mediaAlt, mediaURL, type ContentDocument } from "@/lib/cms-content";

export default function ContentHero({ doc, kind, minutes, description }: { doc: ContentDocument; kind: "Blog" | "Case studies"; minutes: number; description?: string | null }) {
  const parent = kind === "Blog" ? "/blog" : "/case-studies";
  const src = mediaURL(doc.heroImage);
  return <>
    <section className="bg-[#101b36] px-5 py-12 text-white md:py-16 lg:px-12">
      <div className="mx-auto max-w-450">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 text-sm text-white/70">
          <Link href="/" className="text-[#8fb1ff] hover:underline">Home</Link><span>/</span>
          <Link href={parent} className="text-[#8fb1ff] hover:underline">{kind}</Link><span>/</span>
          <span aria-current="page">{doc.title}</span>
        </nav>
        <p className="mt-12 text-sm font-medium uppercase tracking-[2px] text-[#8fb1ff]">{categoryName(doc)}</p>
        <h1 className="mt-5 max-w-6xl text-[34px] font-medium leading-[1.15] tracking-[-1px] md:text-[48px] lg:text-[60px]">{doc.title}</h1>
        {description && <p className="mt-7 max-w-4xl whitespace-pre-line text-lg leading-relaxed text-white/80">{description}</p>}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/75">
          <span>By {doc.authorName || "BrainADZ Live"}</span>
          <time dateTime={doc.publishedAt || doc.createdAt}>{formatDate(doc.publishedAt || doc.createdAt)}</time>
          <span>{minutes} min read</span>
        </div>
      </div>
    </section>
    {src && <section className="bg-white px-5 pt-10 lg:px-12"><div className="mx-auto max-w-450"><img src={src} alt={mediaAlt(doc.heroImage, doc.title)} className="max-h-[650px] w-full rounded-2xl object-cover" fetchPriority="high" /></div></section>}
  </>;
}
