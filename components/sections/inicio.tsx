import Image from "next/image";
import { AbiertoAhora } from "@/components/abierto-ahora";
import { IconCheck, IconClock, IconPin } from "@/components/icons";
import { Reveal } from "@/components/ui/motion";
import { site } from "@/data/site";

function Dato({ icono, titulo, children }: { icono: React.ReactNode; titulo: string; children: React.ReactNode }) {
  return (
    <div className="flex min-w-0 flex-[1_1_260px] items-start gap-3.5 border-l border-linea px-6 py-5">
      <span className="text-azul-texto">{icono}</span>
      <div className="flex flex-col gap-1">
        <span className="text-[13px] font-bold uppercase tracking-[2px] text-gris">{titulo}</span>
        {children}
      </div>
    </div>
  );
}

export function Inicio() {
  return (
    <section id="inicio" className="border-b border-linea px-5 pb-14 pt-10 md:border-b-0 md:px-12 md:pb-14 md:pt-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <Reveal className="flex max-w-[760px] flex-col gap-5 md:gap-[18px]">
          {/* Celular: etiqueta "Mar del Plata" */}
          <span className="inline-flex items-center gap-2 self-start bg-superficie px-4 py-2 text-sm font-bold tracking-[2px] text-[#dce6ff] md:hidden">
            <IconPin size={18} className="text-azul-texto" />MAR DEL PLATA
          </span>
          {/* Escritorio: etiqueta en línea */}
          <span className="hidden text-[13px] font-bold tracking-[2.5px] text-azul-texto md:block">TALLER MECÁNICO · MAR DEL PLATA</span>

          <h1 className="font-display text-[52px] font-black uppercase italic leading-[0.92] md:text-[76px] md:leading-[0.95]">
            {site.nombre}
            <span className="mt-3 block text-[30px] text-azul-texto md:sr-only"><span className="sr-only">, </span>{site.descripcionCorta}</span>
          </h1>
          <p className="max-w-[520px] text-lg leading-normal text-[#dce3ef] md:max-w-none md:text-[22px]">{site.frase}</p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-10 md:gap-7">
          <Image
            src="/fotos/portada-cielo-despejado.jpg"
            alt="Frente de Centro de Servicio Faisal en Av. Mario Bravo y Pescadores"
            width={2400}
            height={1350}
            preload
            sizes="(min-width: 1296px) 1200px, calc(100vw - 40px)"
            className="h-[300px] w-full object-cover md:h-[420px]"
          />

          {/* Celular: horarios debajo de la foto */}
          <p className="flex items-start gap-2.5 text-base leading-normal text-gris md:hidden">
            <IconClock size={20} className="mt-0.5 shrink-0 text-azul-texto" />
            Lunes a viernes de 8 a 17 · Sábados de 8 a 13
          </p>

          {/* Escritorio: franja de datos */}
          <div className="hidden flex-wrap border-y border-linea md:flex">
            <Dato icono={<IconClock />} titulo="Horarios"><span className="text-[17px] font-semibold">Lun a vie 8 a 17 · Sáb 8 a 13</span></Dato>
            <Dato icono={<IconPin />} titulo="Dirección"><span className="text-[17px] font-semibold">{site.direccion.calle} esq. Pescadores</span></Dato>
            <Dato icono={<IconCheck />} titulo="Hoy"><AbiertoAhora /></Dato>
          </div>
        </Reveal>
      </div>
    </section>
  );
}