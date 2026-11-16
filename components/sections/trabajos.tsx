import { IconInstagram } from "@/components/icons";
import { Reveal } from "@/components/ui/motion";
import { Placeholder } from "@/components/ui/placeholder";
import { Seccion, TituloSeccion } from "@/components/ui/titulo";
import { site } from "@/data/site";

// [FOTOS Y VIDEOS REALES] reemplazar cuando lleguen (sin patentes ni datos de clientes).
const TRABAJOS = [
  { label: "VIDEO · Cambio de resortes", video: true },
  { label: "FOTO · Amortiguador nuevo", video: false },
  { label: "VIDEO · El mecánico trabajando", video: true },
  { label: "FOTO · Frenos", video: false },
  { label: "VIDEO · Diagnóstico", video: true },
  { label: "FOTO · Tren delantero", video: false },
];

export function Trabajos() {
  return (
    <Seccion id="trabajos" className="bg-[#0d1322]">
      <Reveal><TituloSeccion etiqueta="Trabajos reales" titulo="Así trabajamos" /></Reveal>
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
        {TRABAJOS.map((t, i) => (
          <li key={t.label}>
            <Reveal delay={0.08 * (i % 3)}>
              <Placeholder label={`[${t.label}]`} video={t.video} className="h-[200px] md:h-[380px]" />
            </Reveal>
          </li>
        ))}
      </ul>
      <a href={site.redes.instagramTaller} className="inline-flex items-center gap-2.5 self-start text-[17px] font-bold text-azul-texto">
        <IconInstagram size={22} />Ver más en @centrodeserviciofaisal
      </a>
    </Seccion>
  );
}
