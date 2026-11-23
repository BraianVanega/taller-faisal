import Link from "next/link";
import { asText } from "@prismicio/client";
import type { BlogPostDocument } from "@/prismicio-types";
import { formatearFecha } from "@/lib/blog";

export function TarjetaPost({ post, nivel = "h2" }: { post: BlogPostDocument; nivel?: "h2" | "h3" }) {
  const Titulo = nivel;
  return (
    <article className="group relative flex h-full flex-col gap-3 border border-linea bg-superficie p-6 transition-colors hover:border-azul md:p-8">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] font-bold uppercase tracking-[2px]">
        {post.data.category && <span className="text-azul-texto">{post.data.category}</span>}
        <time dateTime={post.first_publication_date} className="text-gris">{formatearFecha(post.first_publication_date)}</time>
      </div>
      <Titulo className="text-xl font-bold leading-snug md:text-[22px]">
        {/* El link cubre toda la tarjeta */}
        <Link href={`/blog/${post.uid}`} className="text-white no-underline after:absolute after:inset-0 group-hover:text-azul-texto">
          {asText(post.data.title)}
        </Link>
      </Titulo>
      {post.data.excerpt && <p className="text-base leading-relaxed text-gris">{post.data.excerpt}</p>}
      <span aria-hidden className="mt-auto pt-2 text-[15px] font-bold text-azul-texto">Leer nota →</span>
    </article>
  );
}
