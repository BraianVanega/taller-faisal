import { IconMap, IconPin } from "@/components/icons";
import { Reveal } from "@/components/ui/motion";
import { Seccion, TituloSeccion } from "@/components/ui/titulo";
import { site } from "@/data/site";

const { lat, lng } = site.direccion;
const COMO_LLEGAR = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
const MAPA = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;

export function Ubicacion() {
  return (
    <Seccion id="ubicacion">
      <Reveal><TituloSeccion etiqueta="Ubicación y horarios" titulo="Dónde estamos" /></Reveal>

      <Reveal className="relative flex flex-col gap-8 md:block">
        {/* El mapa se carga recién al llegar a la sección (loading="lazy") */}
        <iframe title="Mapa: Centro de Servicio Faisal en Av. Mario Bravo y Pescadores" src={MAPA} loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[300px] w-full border-0 bg-[#16203a] md:h-[560px]" />

        <div className="flex flex-col gap-6 md:absolute md:left-12 md:top-12 md:w-[400px] md:gap-5 md:border md:border-linea md:bg-fondo md:p-9 md:shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
          <div className="flex items-start gap-3 text-lg leading-normal">
            <IconPin className="mt-0.5 shrink-0 text-azul-texto" />
            <address className="not-italic">
              {site.direccion.calle}, {site.direccion.esquina}<br />{site.direccion.ciudad} ({site.direccion.codigoPostal})
            </address>
          </div>

          <table className="w-full border-collapse text-base">
            <caption className="pb-2 text-left text-sm font-bold tracking-[2px] text-azul-texto">HORARIOS</caption>
            <tbody>
              {site.horarios.map((h) => (
                <tr key={h.dias}>
                  <th scope="row" className="border-b border-linea py-3 text-left font-semibold">{h.dias}</th>
                  <td className="border-b border-linea py-3 text-right text-gris">{h.desde ? `${h.desde} a ${h.hasta}` : "Cerrado"}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <a href={COMO_LLEGAR} className="flex min-h-[52px] items-center justify-center gap-3 border-2 border-linea px-6 text-[17px] font-semibold text-white no-underline">
            <IconMap size={22} />Cómo llegar
          </a>
        </div>
      </Reveal>
    </Seccion>
  );
}
