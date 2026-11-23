import type { RichTextField } from "@prismicio/client";
import { PrismicRichText, type JSXMapSerializer } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/** Estilos del texto largo de los posts (mismo lenguaje visual que la landing). */
const componentes: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="mt-12 font-display text-[34px] font-black uppercase italic leading-[1.05] md:text-[42px]">{children}</h2>
  ),
  heading3: ({ children }) => <h3 className="mt-8 text-xl font-bold md:text-[22px]">{children}</h3>,
  paragraph: ({ children }) => <p className="mt-5 text-[17px] leading-[1.75] text-[#d5dbe6]">{children}</p>,
  list: ({ children }) => <ul className="mt-5 flex list-disc flex-col gap-2.5 pl-6 text-[17px] leading-[1.7] text-[#d5dbe6] marker:text-azul-texto">{children}</ul>,
  oList: ({ children }) => <ol className="mt-5 flex list-decimal flex-col gap-2.5 pl-6 text-[17px] leading-[1.7] text-[#d5dbe6] marker:font-bold marker:text-azul-texto">{children}</ol>,
  strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
  hyperlink: ({ node, children }) => (
    <PrismicNextLink field={node.data} className="font-semibold text-azul-texto underline underline-offset-4 hover:text-white">{children}</PrismicNextLink>
  ),
  image: ({ node }) => (
    <figure className="mt-8">
      <PrismicNextImage field={node} className="h-auto w-full" sizes="(min-width: 768px) 760px, 100vw" />
      {node.alt && <figcaption className="mt-2 text-sm text-gris">{node.alt}</figcaption>}
    </figure>
  ),
};

export function TextoPost({ field }: { field: RichTextField }) {
  return <PrismicRichText field={field} components={componentes} />;
}
