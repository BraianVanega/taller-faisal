import { IconWhatsApp } from "@/components/icons";
import { whatsappUrl } from "@/data/site";

const corte = "[clip-path:polygon(10px_0,100%_0,calc(100%_-_10px)_100%,0_100%)]";

/** Único botón de WhatsApp de la página, siempre visible. */
export function WhatsAppFlotante() {
  return (
    <a href={whatsappUrl()} aria-label="Escribinos por WhatsApp"
      className={`fixed bottom-4 right-4 z-30 flex size-16 items-center justify-center bg-azul text-white no-underline shadow-[0_6px_20px_rgba(0,0,0,0.5)] ${corte}
        md:bottom-8 md:right-8 md:size-auto md:min-h-[60px] md:gap-3 md:px-[30px] md:pl-[26px] md:text-[17px] md:font-bold`}>
      <IconWhatsApp size={28} />
      <span className="hidden md:inline">Escribinos por WhatsApp</span>
    </a>
  );
}
