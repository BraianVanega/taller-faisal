import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { Cierre } from "@/components/sections/cierre";
import { ComoTrabajamos } from "@/components/sections/como-trabajamos";
import { Inicio } from "@/components/sections/inicio";
import { MiGarage } from "@/components/sections/mi-garage";
import { Repuestos } from "@/components/sections/repuestos";
import { Resenas } from "@/components/sections/resenas";
import { Servicios } from "@/components/sections/servicios";
import { Trabajos } from "@/components/sections/trabajos";
import { Ubicacion } from "@/components/sections/ubicacion";
import { WhatsAppFlotante } from "@/components/whatsapp-flotante";

export default function Home() {
  return (
    <>
      <JsonLd />
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-azul focus:px-4 focus:py-3">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Inicio />
        <Servicios />
        <Trabajos />
        <ComoTrabajamos />
        <Resenas />
        <Ubicacion />
        <Cierre />
        <Repuestos />
        <MiGarage />
      </main>
      <Footer />
      <WhatsAppFlotante />
    </>
  );
}
