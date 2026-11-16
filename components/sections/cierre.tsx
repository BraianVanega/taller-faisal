/** Franja de cierre después de Ubicación (pedido de Braian, solo escritorio). */
export function Cierre() {
  return (
    <div className="hidden bg-azul px-12 py-9 [clip-path:polygon(0_14px,100%_0,100%_100%,0_100%)] md:block">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-8">
        <span className="font-display text-[56px] font-black uppercase italic leading-none">¡Te esperamos!</span>
        <span className="text-xl font-semibold text-[#eef3ff]">Tu auto, nuestra prioridad.</span>
      </div>
    </div>
  );
}
