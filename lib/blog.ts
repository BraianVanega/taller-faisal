import { cacheLife, cacheTag } from "next/cache";
import { cacheTagPrismicPages } from "@prismicio/next";
import { createClient } from "@/prismicio";

/**
 * Tag de toda la colección de posts. El webhook de Prismic lo invalida
 * para que un post recién publicado aparezca en /blog y en el sitemap.
 */
export const TAG_BLOG = "prismic/type/blog_post";

/** Todos los posts publicados, del más nuevo al más viejo. */
export async function getPosts(ref?: string) {
  "use cache";
  cacheLife("max");
  cacheTag(TAG_BLOG);
  const posts = await createClient().getAllByType("blog_post", {
    ref,
    orderings: [{ field: "document.first_publication_date", direction: "desc" }],
  });
  cacheTagPrismicPages(posts);
  return posts;
}

/** Un post por slug, o null si no existe. */
export async function getPost(uid: string, ref?: string) {
  "use cache";
  cacheLife("max");
  cacheTag(TAG_BLOG);
  const post = await createClient()
    .getByUID("blog_post", uid, { ref })
    .catch(() => null);
  if (post) cacheTagPrismicPages([post]);
  return post;
}

export const formatearFecha = (iso: string) =>
  new Date(iso).toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric", timeZone: "America/Argentina/Buenos_Aires" });
