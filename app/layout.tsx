import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Open_Sans } from "next/font/google";
import { MotionProvider } from "@/components/ui/motion";
import { site } from "@/data/site";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["800", "900"],
  style: ["italic"],
  variable: "--font-barlow",
  display: "swap",
});

const sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const descripcion =
  "Taller mecánico en Mar del Plata: alineación y balanceo, frenos, tren delantero, escaneo computarizado, aceite y más. Presupuesto previo y consultas por WhatsApp.";

const titulo = "Taller mecánico en Mar del Plata | Centro de Servicio Faisal";
const portada = { url: "/fotos/portada.jpg", alt: "Centro de Servicio Faisal, taller mecánico en Mar del Plata" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: titulo,
  description: descripcion,
  applicationName: site.nombre,
  category: "automotive",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: site.url,
    siteName: site.nombre,
    title: titulo,
    description: descripcion,
    images: [portada],
  },
  twitter: { card: "summary_large_image", title: titulo, description: descripcion, images: [portada.url] },
  // [GOOGLE SEARCH CONSOLE] cuando Braian verifique el dominio, pegar acá el código que da Google:
  // verification: { google: "CODIGO" },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-fondo font-sans text-white antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
