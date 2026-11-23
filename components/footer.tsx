import Link from "next/link";
import { IconInstagram } from "@/components/icons";
import { site } from "@/data/site";

function Columna({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-w-0 flex-[1_1_220px] flex-col gap-2.5">
      <span className="text-[13px] font-bold tracking-[2px] text-azul-texto">
        {titulo}
      </span>
      {children}
    </div>
  );
}

export async function Footer() {
  "use cache"; // el pie se guarda ya armado; el año se renueva en cada publicación
  const anio = new Date().getFullYear();
  return (
    <footer className="border-t border-linea bg-[#070b13] px-5 pb-28 pt-12 md:px-12 md:pb-[120px] md:pt-16">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <div className="flex flex-wrap gap-8">
          <Columna titulo="TALLER">
            <div className="flex flex-col leading-none">
              <span className="text-[11px] font-bold tracking-[2.5px] text-[#dce6ff]">
                CENTRO DE SERVICIO
              </span>
              <span className="font-display text-[30px] font-black italic">
                FAISAL
              </span>
            </div>
            <p className="text-[15px] leading-relaxed text-gris">
              {site.legal.razonSocialTaller} · CUIT {site.legal.cuitTaller}
            </p>
          </Columna>
          <Columna titulo="CONTACTO">
            <p className="text-[15px] leading-relaxed text-gris">
              {site.direccion.calle} esq. Pescadores, {site.direccion.ciudad} (
              {site.direccion.codigoPostal})<br />
              WhatsApp +54 9 2235 30-2965
              <br />
              Lun a vie 8 a 17 · Sáb 8 a 13
            </p>
          </Columna>
          <Columna titulo="BLOG">
            <Link href="/blog" className="inline-flex min-h-8 items-center text-[15px] text-white">
              Consejos para tu auto
            </Link>
          </Columna>
          <Columna titulo="REDES">
            <a href={site.redes.instagramTaller} className="inline-flex min-h-8 items-center gap-2 text-[15px] text-white"><IconInstagram size={18} /><span className="link-anim">@centrodeserviciofaisal</span></a>
            <a href={site.redes.instagramRepuestos} className="inline-flex min-h-8 items-center gap-2 text-[15px] text-amarillo"><IconInstagram size={18} /><span className="link-anim">@repuestosfaisal</span></a>
          </Columna>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-linea pt-6 md:flex-row">
          <span className="text-sm text-gris">
            © {anio} {site.nombre}. Todos los derechos reservados.
          </span>
          <span className="text-sm text-gris">
            Repuestos Faisal: {site.legal.razonSocialRepuestos}
          </span>
        </div>
      </div>
    </footer>
  );
}
