import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaSection from "@/components/home/CTA";
import ContentHero from "@/components/content/ContentHero";
import RichText from "@/components/content/RichText";
import { getBlog } from "@/lib/cms";
import { readingTime, richTextPlainText } from "@/lib/cms-content";
import { contentMetadata, contentSchema } from "@/lib/cms-seo";
import "@/components/content/content.css";

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlog((await params).slug);
  if (!post) notFound();
  return contentMetadata(post, `/blog/${encodeURIComponent(post.slug)}`, post.excerpt || richTextPlainText(post.content));
}

export default async function BlogDetail({ params }: Props) {
  const post = await getBlog((await params).slug);
  if (!post) notFound();
  const text = richTextPlainText(post.content);
  const tags = post.tagsText?.split(",").map(tag => tag.trim()).filter(Boolean) || [];
  return <main className="bg-white text-[#262626]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema(post, `/blog/${encodeURIComponent(post.slug)}`, post.excerpt || text.slice(0, 200), "BlogPosting")).replace(/</g, "\\u003c") }} />
    <ContentHero doc={post} kind="Blog" minutes={readingTime(post, text)} description={post.excerpt} />
    <article className="mx-auto max-w-5xl px-5 py-12 md:py-16">
      <RichText content={post.content} />
      {tags.length > 0 && <div className="mt-12 flex flex-wrap gap-3" aria-label="Article tags">{tags.map(tag => <span key={tag} className="rounded-full bg-[#eef2f8] px-4 py-2 text-sm text-[#193175]">{tag}</span>)}</div>}
      <Link href="/blog" className="mt-12 inline-block font-medium text-[#193175] hover:underline">← All insights</Link>
    </article>
    <CtaSection />
  </main>;
}
