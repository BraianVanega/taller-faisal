"use client";

import { useState } from "react";
import { IconArrow, IconStar } from "@/components/icons";
import { Reveal } from "@/components/ui/motion";
import { TituloSeccion } from "@/components/ui/titulo";
import { site } from "@/data/site";

function Estrellas({ size }: { size: number }) {
  return (
    <div className="flex gap-0.5 text-azul-texto" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => <IconStar key={i} size={size} />)}
    </div>
  );
}

export function Resenas() {
  const [abiertas, setAbiertas] = useState<Record<number, boolean>>({});
  const promedio = site.calificacion.promedio.toLocaleString("es-AR");

  return (
    <section id="resenas" className="bg-[#0d1322] px-5 py-16 md:px-12 md:py-28">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 md:gap-12">
        <Reveal><TituloSeccion etiqueta="Reseñas" titulo="Lo que dicen los clientes" /></Reveal>

        <Reveal className="flex flex-wrap items-center gap-[18px]">
          <span className="font-display text-[80px] font-black italic leading-[0.9] md:text-[64px] md:leading-none">{promedio}</span>
          <div className="flex flex-col gap-1.5">
            <span className="sr-only">{promedio} de 5 estrellas</span>
            <Estrellas size={26} />
            <a href={site.redes.googleMaps} className="text-base font-bold text-azul-texto md:font-normal md:text-gris md:no-underline">
              {site.calificacion.cantidad} opiniones en Google
            </a>
          </div>
        </Reveal>

        {/* Celular: carrusel deslizable · Escritorio: 3 columnas */}
        <div className="flex flex-col gap-3">
          <ul aria-label="Reseñas de Google"
            className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 pb-1.5 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0">
            {site.resenas.map((r, i) => {
              const larga = r.texto.length > 170;
              const abierta = !!abiertas[i];
              return (
                <li key={r.autor} className="flex w-[84%] shrink-0 snap-start md:w-auto">
                  <blockquote className="flex w-full flex-col gap-3 bg-superficie p-[22px] md:p-7">
                    <span aria-hidden="true" className="font-display text-6xl font-black italic leading-[0.6] text-azul md:hidden">“</span>
                    <div className="hidden md:block"><Estrellas size={18} /></div>
                    <p className={`whitespace-pre-line text-base leading-relaxed text-[#dce3ef] ${abierta ? "" : "line-clamp-6 md:line-clamp-none"}`}>{r.texto}</p>
                    {larga && (
                      <button type="button" onClick={() => setAbiertas((a) => ({ ...a, [i]: !a[i] }))}
                        className="min-h-11 self-start text-[15px] font-bold text-azul-texto md:hidden">
                        {abierta ? "Ver menos" : "Leer completa"}
                      </button>
                    )}
                    <footer className="mt-auto flex flex-col gap-1.5 text-sm text-gris md:text-[15px]">
                      <div className="md:hidden"><Estrellas size={16} /></div>
                      {r.autor} · {r.cuando} · Google
                    </footer>
                  </blockquote>
                </li>
              );
            })}
          </ul>
          <span className="flex items-center gap-2 text-sm text-gris md:hidden">Deslizá para ver más <IconArrow size={16} /></span>
        </div>

        <a href={site.redes.googleMaps} className="hidden self-start text-[17px] font-bold text-azul-texto md:block">
          Ver todas las opiniones en Google
        </a>
      </div>
    </section>
  );
}
