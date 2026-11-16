import { Reveal } from "@/components/ui/motion";
import { Seccion, TituloSeccion } from "@/components/ui/titulo";
import { site } from "@/data/site";

export function ComoTrabajamos() {
  return (
    <Seccion id="como-trabajamos">
      <Reveal><TituloSeccion etiqueta="Cómo trabajamos" titulo="De la consulta a la entrega" /></Reveal>
      <ol className="grid grid-cols-1 gap-2.5 md:grid-cols-3 md:gap-8">
        {site.pasos.map((p, i) => (
          <li key={p.titulo}>
            <Reveal delay={0.1 * i}
              className="relative flex h-full flex-col gap-3 overflow-hidden bg-superficie p-6 md:border-t-[3px] md:border-azul md:bg-transparent md:p-0 md:pt-5">
              {/* Celular: número grande de fondo + etiqueta PASO */}
              <span aria-hidden="true" className="absolute -right-1.5 -top-[18px] font-display text-[140px] font-black italic leading-none text-[#1b2741] md:hidden">{i + 1}</span>
              <span className="relative self-start bg-azul py-1 pl-3 pr-4 font-display text-2xl font-black italic [clip-path:polygon(0_0,100%_0,calc(100%_-_12px)_100%,0_100%)] md:hidden">PASO {i + 1}</span>
              {/* Escritorio: número 01, 02, 03 */}
              <span aria-hidden="true" className="hidden font-display text-5xl font-black italic leading-none text-azul-texto md:block">0{i + 1}</span>
              <h3 className="relative text-xl font-bold">{p.titulo}</h3>
              <p className="relative text-base leading-relaxed text-gris">{p.texto}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Seccion>
  );
}
