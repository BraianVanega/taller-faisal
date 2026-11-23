import type { Metadata } from "next";
import { getPreviewRef } from "@prismicio/next";
import { TarjetaPost } from "@/components/blog/tarjeta-post";
import { JsonLdScript } from "@/components/json-ld";
import { Seccion } from "@/components/ui/titulo";
import { site } from "@/data/site";
import { getPosts } from "@/lib/blog";

const titulo = "Consejos para tu auto | Blog del Centro de Servicio Faisal";
const descripcion =
  "Guías prácticas de mecánica escritas por un taller de Mar del Plata: frenos, VTV, service, tren delantero, embrague y viajes en ruta.";

export const metadata: Metadata = {
  title: titulo,
  description: descripcion,
  alternates: { canonical: "/blog" },
  openGraph: { type: "website", locale: "es_AR", url: `${site.url}/blog`, siteName: site.nombre, title: titulo, description: descripcion },
};

export default async function Blog() {
  const posts = await getPosts(await getPreviewRef());

  return (
    <Seccion id="blog">
      <JsonLdScript datos={{
        "@context": "https://schema.org",
        "@type": "Blog",
        name: `Blog de ${site.nombre}`,
        url: `${site.url}/blog`,
        inLanguage: "es-AR",
        publisher: { "@type": "AutoRepair", name: site.nombre, url: site.url },
      }} />

      <div className="flex flex-col gap-3.5">
        <span className="text-sm font-bold uppercase tracking-[3px] text-azul-texto">Blog</span>
        <h1 className="font-display text-[44px] font-black uppercase italic leading-[0.95] md:text-[64px]">Consejos para tu auto</h1>
        <p className="max-w-[720px] text-lg leading-relaxed text-gris">
          Lo que les explicamos todos los días a nuestros clientes en el taller de {site.direccion.ciudad}, escrito para que lo tengas a mano.
        </p>
      </div>

      {posts.length > 0 ? (
        <ul className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {posts.map((p) => <li key={p.id}><TarjetaPost post={p} /></li>)}
        </ul>
      ) : (
        <p className="text-lg text-gris">Muy pronto vas a encontrar acá nuestras primeras notas.</p>
      )}
    </Seccion>
  );
}
