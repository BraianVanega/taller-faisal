import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  "Taller mecánico en Mar del Plata: frenos, tren delantero, escaneo computarizado, aceite y más. Presupuesto previo. Consultas por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Taller mecánico en Mar del Plata | Centro de Servicio Faisal",
  description: descripcion,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: site.url,
    siteName: site.nombre,
    title: "Taller mecánico en Mar del Plata | Centro de Servicio Faisal",
    description: descripcion,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-fondo font-sans text-white antialiased">
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
