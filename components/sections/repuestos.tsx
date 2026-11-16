import Image from "next/image";
import { IconInstagram } from "@/components/icons";
import { Reveal } from "@/components/ui/motion";
import { site } from "@/data/site";

// [URL DE LA LANDING DE REPUESTOS] cambiar cuando esté publicada.
const URL_REPUESTOS = "#repuestos";

export function Repuestos() {
  return (
    <section id="repuestos" className="px-5 py-12 md:px-12 md:py-24">
      <Reveal className="relative mx-auto max-w-[1200px] overflow-hidden border-2 border-amarillo bg-[#11151c] p-7 md:border-x-0 md:border-y-[6px] md:p-14">
        {/* Celular: barrita amarilla arriba · Escritorio: rayas en diagonal a la derecha */}
        <span aria-hidden="true" className="absolute left-0 top-0 h-2 w-[120px] bg-amarillo md:hidden" />
        <span aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-[220px] bg-[repeating-linear-gradient(-55deg,var(--color-amarillo)_0_16px,#0a0f1a_16px_32px)] [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)] md:block" />

        <div className="relative flex flex-col gap-5 md:pr-[260px]">
          <Image src="/repuestos-faisal.png" alt="Repuestos Faisal" width={1521} height={487} className="h-[52px] w-auto self-start" />
          <h2 className="font-display text-[40px] font-black uppercase italic leading-[0.95] md:text-6xl">¿Necesitás un repuesto?</h2>
          <p className="max-w-[560px] text-lg leading-relaxed text-[#dce3ef]">
            Repuestos para todas las marcas, en el mismo lugar. Retiro en Mario Bravo 3108 o envío.
          </p>
          <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-6">
            <a href={URL_REPUESTOS}
              className="flex min-h-[52px] items-center justify-center bg-amarillo px-7 text-[17px] font-bold text-fondo no-underline [clip-path:polygon(0_0,100%_0,calc(100%_-_12px)_100%,0_100%)]">
              Ver Repuestos Faisal
            </a>
            <a href={site.redes.instagramRepuestos} className="flex min-h-11 items-center justify-center gap-2.5 text-base font-semibold text-amarillo md:justify-start">
              <IconInstagram size={20} />@repuestosfaisal
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
