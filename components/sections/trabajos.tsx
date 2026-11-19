import Image from "next/image";
import { IconInstagram } from "@/components/icons";
import { Reveal } from "@/components/ui/motion";
import { Seccion, TituloSeccion } from "@/components/ui/titulo";
import { site } from "@/data/site";

// Fotos en public/fotos. El nombre tiene que coincidir exacto, con .JPG en mayúscula.
const TRABAJOS = [
  { src: "/fotos/foto1.jpg", alt: "Mecánico revisando la rueda de una camioneta en el elevador" },
  { src: "/fotos/foto2.jpg", alt: "Auto en el elevador con la rueda delantera desmontada" },
  { src: "/fotos/foto3.jpg", alt: "Mecánico trabajando en el motor de un auto con el capó abierto" },
  { src: "/fotos/foto4.jpg", alt: "Mecánico de Faisal revisando un auto en el elevador" },
  { src: "/fotos/foto5.jpg", alt: "Camioneta roja levantada en el elevador del taller" },
  { src: "/fotos/foto6.jpg", alt: "Auto en la alineadora del taller" },
];

export function Trabajos() {
  return (
    <Seccion id="trabajos" className="bg-[#0d1322]">
      <Reveal><TituloSeccion etiqueta="Trabajos reales" titulo="Así trabajamos" /></Reveal>
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
        {TRABAJOS.map((t, i) => (
          <li key={t.src}>
            <Reveal delay={0.08 * (i % 3)}>
              <Image
                src={t.src}
                alt={t.alt}
                width={1200}
                height={1600}
                sizes="(min-width: 768px) 33vw, 50vw"
                className="h-[200px] w-full object-cover md:h-[380px]"
              />
            </Reveal>
          </li>
        ))}
      </ul>
      <a href={site.redes.instagramTaller} className="inline-flex items-center gap-2.5 self-start text-[17px] font-bold text-azul-texto">
        <IconInstagram size={22} /><span className="link-anim">Ver más en @centrodeserviciofaisal</span>
      </a>
    </Seccion>
  );
}