"use client";
import Link from "next/link";
export default function ContentError({ reset }: { reset: () => void }) {
  return <main className="mx-auto max-w-3xl px-5 py-24 text-center"><h1 className="text-3xl font-medium">Content temporarily unavailable</h1><p className="mt-5 text-[#616161]">Please try again shortly.</p><button type="button" onClick={reset} className="mt-8 rounded-full bg-[#193175] px-6 py-3 text-white">Try again</button><Link href="/blog" className="ml-6 text-[#193175] hover:underline">All insights</Link></main>;
}
