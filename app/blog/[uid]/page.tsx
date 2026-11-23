import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { asText, isFilled } from "@prismicio/client";
import { getPreviewRef } from "@prismicio/next";
import { IconWhatsApp } from "@/components/icons";
import { TarjetaPost } from "@/components/blog/tarjeta-post";
import { TextoPost } from "@/components/blog/texto";
import { JsonLdScript } from "@/components/json-ld";
import { site, whatsappUrl } from "@/data/site";
import { formatearFecha, getPost, getPosts } from "@/lib/blog";

// Con Cache Components, generateStaticParams no puede devolver una lista vacía.
// Mientras no haya posts publicados se usa un slug de relleno que da 404.
const RELLENO = "__sin-posts__";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.length > 0 ? posts.map((p) => ({ uid: p.uid })) : [{ uid: RELLENO }];
}

export async function generateMetadata({ params }: PageProps<"/blog/[uid]">): Promise<Metadata> {
  const { uid } = await params;
  const post = await getPost(uid, await getPreviewRef());
  if (!post) return {};

  const titulo = post.data.meta_title || asText(post.data.title);
  const descripcion = post.data.meta_description || post.data.excerpt || undefined;
  const imagen = isFilled.image(post.data.meta_image) ? post.data.meta_image : post.data.cover;

  return {
    title: titulo,
    description: descripcion,
    alternates: { canonical: `/blog/${post.uid}` },
    openGraph: {
      type: "article",
      locale: "es_AR",
      url: `${site.url}/blog/${post.uid}`,
      siteName: site.nombre,
      title: titulo,
      description: descripcion,
      publishedTime: post.first_publication_date,
      modifiedTime: post.last_publication_date,
      images: isFilled.image(imagen) ? [{ url: imagen.url, alt: imagen.alt ?? "" }] : undefined,
    },
  };
}

export default async function Post({ params }: PageProps<"/blog/[uid]">) {
  const { uid } = await params;
  const ref = await getPreviewRef();
  const post = await getPost(uid, ref);
  if (!post) notFound();

  const titulo = asText(post.data.title);
  const url = `${site.url}/blog/${post.uid}`;
  const faq = post.data.faq.filter((f) => f.question && isFilled.richText(f.answer));
  const relacionados = (await getPosts(ref))
    .filter((p) => p.id !== post.id)
    .sort((a, b) => Number(b.data.category === post.data.category) - Number(a.data.category === post.data.category))
    .slice(0, 3);

  const datos: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: titulo,
      description: post.data.meta_description || post.data.excerpt || undefined,
      image: isFilled.image(post.data.cover) ? post.data.cover.url : undefined,
      datePublished: post.first_publication_date,
      dateModified: post.last_publication_date,
      inLanguage: "es-AR",
      mainEntityOfPage: url,
      url,
      articleSection: post.data.category ?? undefined,
      author: { "@type": "Organization", name: site.nombre, url: site.url },
      publisher: { "@type": "AutoRepair", name: site.nombre, url: site.url, telephone: site.telefono },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
        { "@type": "ListItem", position: 3, name: titulo, item: url },
      ],
    },
  ];
  if (faq.length > 0) {
    datos.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: asText(f.answer) },
      })),
    });
  }

  return (
    <article className="px-5 py-12 md:px-12 md:py-20">
      {datos.map((d, i) => <JsonLdScript key={i} datos={d} />)}

      <div className="mx-auto flex max-w-[760px] flex-col">
        <nav aria-label="Migas de pan" className="text-sm text-gris">
          <Link href="/" className="text-gris hover:text-white">Inicio</Link>
          <span aria-hidden> / </span>
          <Link href="/blog" className="text-gris hover:text-white">Blog</Link>
        </nav>

        <header className="mt-6 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] font-bold uppercase tracking-[2px]">
            {post.data.category && <span className="text-azul-texto">{post.data.category}</span>}
            <time dateTime={post.first_publication_date} className="text-gris">{formatearFecha(post.first_publication_date)}</time>
          </div>
          <h1 className="font-display text-[42px] font-black uppercase italic leading-[0.98] md:text-[60px]">{titulo}</h1>
          {post.data.excerpt && <p className="text-lg leading-relaxed text-gris md:text-xl">{post.data.excerpt}</p>}
        </header>

        {/* Respuesta directa: lo primero que leen Google y los buscadores con IA */}
        {isFilled.richText(post.data.answer) && (
          <aside aria-label="En resumen" className="mt-8 border-l-4 border-azul bg-superficie p-6">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-azul-texto">En resumen</span>
            <div className="[&>p:first-of-type]:mt-2"><TextoPost field={post.data.answer} /></div>
          </aside>
        )}

        <div className="mt-4"><TextoPost field={post.data.body} /></div>

        {faq.length > 0 && (
          <section aria-labelledby="faq" className="mt-14">
            <h2 id="faq" className="font-display text-[34px] font-black uppercase italic leading-[1.05] md:text-[42px]">Preguntas frecuentes</h2>
            <div className="mt-4 flex flex-col divide-y divide-linea border-y border-linea">
              {faq.map((f) => (
                <div key={f.question} className="py-5">
                  <h3 className="text-lg font-bold md:text-xl">{f.question}</h3>
                  <div className="[&>p:first-of-type]:mt-2"><TextoPost field={f.answer} /></div>
                </div>
              ))}
            </div>
          </section>
        )}

        <aside className="mt-14 flex flex-col gap-4 bg-azul p-7 md:p-9">
          <span className="font-display text-[32px] font-black uppercase italic leading-none md:text-[40px]">¿Querés que lo revisemos?</span>
          <p className="text-[17px] leading-relaxed text-[#eef3ff]">
            Escribinos por WhatsApp, contanos qué le pasa al auto y coordinamos. Te pasamos el presupuesto antes de empezar.
            Estamos en {site.direccion.calle}, {site.direccion.esquina}, {site.direccion.ciudad}.
          </p>
          <a href={whatsappUrl(`Hola, leí la nota "${titulo}" y quiero consultar por...`)}
            className="inline-flex min-h-[52px] items-center gap-3 self-start bg-white px-6 text-[17px] font-bold text-fondo no-underline">
            <IconWhatsApp size={24} /> Consultar por WhatsApp
          </a>
        </aside>
      </div>

      {relacionados.length > 0 && (
        <section aria-labelledby="relacionados" className="mx-auto mt-20 max-w-[1200px]">
          <h2 id="relacionados" className="font-display text-[34px] font-black uppercase italic md:text-[42px]">Seguí leyendo</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3 md:gap-5">
            {relacionados.map((p) => <li key={p.id}><TarjetaPost post={p} nivel="h3" /></li>)}
          </ul>
        </section>
      )}
    </article>
  );
}
