import { IconArrow } from "@/components/icons";
import { Reveal } from "@/components/ui/motion";
import { Seccion, TituloSeccion } from "@/components/ui/titulo";

const APP_STORE = "https://apps.apple.com/ar/app/id6807631928";
const GOOGLE_PLAY = "https://play.google.com/store/apps/details?id=app.migarage.mobile";
const WEB = "https://migarage.app/";

const PUNTOS = [
  "Historial de cada service y arreglo",
  "Mantenimiento proyectado para los próximos 10.000 km",
  "Podés pedirnos presupuesto directo desde la app",
  "Gratis, para autos y motos",
];

// Ejemplo ilustrativo de lo que se ve en la app (no es una captura real).
const HISTORIAL = [
  { titulo: "Aceite y filtros", detalle: "Hecho · 48.200 km", hecho: true },
  { titulo: "Alineación y balanceo", detalle: "Hecho · 48.200 km", hecho: true },
  { titulo: "Pastillas de freno", detalle: "Próximo · en 1.800 km", hecho: false },
  { titulo: "Correa de distribución", detalle: "Próximo · en 9.500 km", hecho: false },
];

function Tilde({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

const boton = "btn-anim flex min-h-[52px] items-center justify-center gap-2 px-6 text-[16px] font-bold no-underline";

export function MiGarage() {
  return (
    <Seccion id="mi-garage">
      <div className="flex flex-col gap-10 border-2 border-azul bg-superficie p-6 md:flex-row md:items-center md:gap-14 md:p-12">
        <Reveal className="flex min-w-0 flex-[1_1_560px] flex-col gap-6">
          <TituloSeccion etiqueta="App Mi Garage" titulo="Todo lo que le hiciste a tu auto, en una app" />
          <p className="text-lg leading-relaxed text-[#dce3ef]">
            ¿Necesitás una app para gestionar el mantenimiento y saber todo lo que le hiciste a tu auto? Con Mi Garage cargás tu vehículo y los kilómetros, y la app te avisa cuándo toca el próximo service.
          </p>
          <ul className="flex flex-col gap-3">
            {PUNTOS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-base leading-normal text-gris">
                <Tilde className="mt-0.5 shrink-0 text-azul-texto" />{p}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={APP_STORE} target="_blank" rel="noopener" className={`${boton} bg-azul text-white`}>Descargar en App Store</a>
            <a href={GOOGLE_PLAY} target="_blank" rel="noopener" className={`${boton} border-2 border-azul text-white hover:bg-azul/15`}>Descargar en Google Play</a>
          </div>
          <a href={WEB} target="_blank" rel="noopener" className="inline-flex items-center gap-2 self-start text-base font-bold text-azul-texto">
            <span className="link-anim">Conocé más sobre Mi Garage</span><IconArrow size={18} />
          </a>
        </Reveal>

        {/* Teléfono ilustrativo */}
        <Reveal delay={0.12} className="flex flex-[0_0_auto] justify-center">
          <div aria-hidden="true" className="w-[270px] rounded-[36px] border-[6px] border-[#24324d] bg-fondo p-4 shadow-[0_24px_48px_rgba(0,0,0,0.55)]">
            <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-[#24324d]" />
            <div className="mb-4 flex flex-col gap-1 px-1">
              <span className="text-xs font-bold tracking-[2px] text-azul-texto">MI AUTO</span>
              <span className="font-display text-[28px] font-black uppercase italic leading-none">48.200 km</span>
            </div>
            <ul className="flex flex-col gap-2">
              {HISTORIAL.map((h) => (
                <li key={h.titulo} className="flex items-center gap-3 rounded-xl bg-superficie px-3 py-2.5">
                  <span className={`flex size-8 shrink-0 items-center justify-center rounded-full ${h.hecho ? "bg-azul text-white" : "border-2 border-azul-texto text-azul-texto"}`}>
                    {h.hecho ? <Tilde /> : <span className="text-sm font-black">!</span>}
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="truncate text-sm font-bold">{h.titulo}</span>
                    <span className={`text-xs ${h.hecho ? "text-gris" : "text-azul-texto"}`}>{h.detalle}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-xl bg-azul py-3 text-center text-sm font-bold">Pedir presupuesto</div>
          </div>
        </Reveal>
      </div>
    </Seccion>
  );
}
