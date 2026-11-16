import { IconCheck, IconServicio } from "@/components/icons";
import { Reveal } from "@/components/ui/motion";
import { Seccion, TituloSeccion } from "@/components/ui/titulo";
import { site } from "@/data/site";

export function Servicios() {
  return (
    <Seccion id="servicios">
      <Reveal><TituloSeccion etiqueta="Servicios" titulo="Qué hacemos" /></Reveal>

      <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-5">
        {site.servicios.map((s, i) => (
          <li key={s.nombre} className="bg-superficie">
            <Reveal delay={0.06 * (i % 3)} className="flex h-full min-h-[112px] flex-col justify-between gap-3 p-4 md:justify-start md:gap-3.5 md:p-8">
              <IconServicio icono={s.icono} size={30} className="text-azul-texto md:size-9" />
              <h3 className="text-base font-bold leading-tight md:text-[21px]">{s.nombre}</h3>
              {/* En celular la descripción queda oculta a la vista, pero sigue en el código para Google */}
              <p className="sr-only md:not-sr-only md:text-base md:leading-relaxed md:text-gris">{s.texto}</p>
            </Reveal>
          </li>
        ))}

        <li className="col-span-full border-2 border-azul bg-superficie">
          <Reveal className="flex flex-wrap items-center gap-4 p-6 md:gap-7 md:p-8">
            <IconCheck size={44} strokeWidth={1.6} className="text-azul-texto" />
            <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-2">
              <h3 className="text-[22px] font-bold">{site.revisionVtv.nombre}</h3>
              <p className="text-base leading-relaxed text-gris">{site.revisionVtv.texto}</p>
            </div>
          </Reveal>
        </li>
      </ul>
    </Seccion>
  );
}
