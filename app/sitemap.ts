import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/blog`, changeFrequency: "weekly", priority: 0.7, lastModified: posts[0]?.last_publication_date },
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.uid}`,
      lastModified: p.last_publication_date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
