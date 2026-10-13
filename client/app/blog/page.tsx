import BlogListing from "@/components/content/BlogListing";
import { contentList, getBlogs } from "@/lib/cms";
import { blogCard } from "@/lib/cms-content";

export default async function BlogPage() {
  const { docs, unavailable } = await contentList(() => getBlogs());
  return <BlogListing allArticles={docs.map(blogCard)} unavailable={unavailable} />;
}
