/** Encabezado de sección: etiqueta chica en azul + título grande en itálica. */
export function TituloSeccion({ etiqueta, titulo, id }: { etiqueta: string; titulo: string; id?: string }) {
  return (
    <div className="flex flex-col gap-3.5">
      <span className="text-sm font-bold uppercase tracking-[3px] text-azul-texto">{etiqueta}</span>
      <h2 id={id} className="font-display text-[44px] font-black uppercase italic leading-[0.95] md:text-[64px]">{titulo}</h2>
    </div>
  );
}

export function Seccion({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`px-5 py-16 md:px-12 md:py-28 ${className}`}>
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 md:gap-12">{children}</div>
    </section>
  );
}
