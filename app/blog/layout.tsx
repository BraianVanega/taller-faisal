import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppFlotante } from "@/components/whatsapp-flotante";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-azul focus:px-4 focus:py-3">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">{children}</main>
      <Footer />
      <WhatsAppFlotante />
    </>
  );
}
