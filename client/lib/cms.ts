import "server-only";
import { cache } from "react";
import { unstable_rethrow } from "next/navigation";
import type { BlogPost, CaseStudy } from "./cms-content";

type Collection = "blog-posts" | "case-studies";
type Response<T> = { docs: T[]; hasNextPage?: boolean; nextPage?: number | null };

async function request<T>(collection: Collection, params: Record<string, string> = {}): Promise<Response<T>> {
  const base = process.env.CMS_API_URL || process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3001";
  const url = new URL(`${base.replace(/\/api\/?$/, "").replace(/\/$/, "")}/api/${collection}`);
  url.search = new URLSearchParams({ depth: "2", limit: "100", "where[_status][equals]": "published", ...params }).toString();
  const response = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(10000) });
  if (!response.ok) throw new Error(`CMS ${collection} request failed (${response.status})`);
  const data = await response.json() as Response<T>;
  if (!Array.isArray(data.docs)) throw new Error(`Invalid CMS ${collection} response`);
  return data;
}

async function list<T>(collection: Collection, sort: string, limit?: number): Promise<T[]> {
  const docs: T[] = [];
  let page = 1;
  while (true) {
    const data = await request<T>(collection, { sort, page: String(page), ...(limit ? { limit: String(limit) } : {}) });
    docs.push(...data.docs);
    if (limit || !data.hasNextPage) return docs;
    page += 1;
  }
}
export const getBlogs = cache((limit?: number) => list<BlogPost>("blog-posts", "-publishedAt", limit));
export const getCaseStudies = cache(() => list<CaseStudy>("case-studies", "sortOrder"));
export const getBlog = cache(async (slug: string) => (await request<BlogPost>("blog-posts", { "where[slug][equals]": slug, limit: "1" })).docs[0] || null);
export const getCaseStudy = cache(async (slug: string) => (await request<CaseStudy>("case-studies", { "where[slug][equals]": slug, limit: "1" })).docs[0] || null);

export async function contentList<T>(read: () => Promise<T[]>): Promise<{ docs: T[]; unavailable: boolean }> {
  try { return { docs: await read(), unavailable: false }; }
  catch (error) {
    unstable_rethrow(error);
    console.error("CMS content unavailable:", error instanceof Error ? error.message : "Request failed");
    return { docs: [], unavailable: true };
  }
}
