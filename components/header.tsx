"use client";

import { useState } from "react";
import { m, AnimatePresence, type Variants } from "motion/react";
import { IconClose, IconMenu, IconPhone } from "@/components/icons";
import { site } from "@/data/site";

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#como-trabajamos", label: "Cómo trabajamos" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#ubicacion", label: "Ubicación" },
];

// Menú de celular: se despliega como una persiana y las secciones entran una por una.
const ease = [0.22, 1, 0.36, 1] as const;
const menu: Variants = {
  cerrado: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: { duration: 0.35, ease, when: "afterChildren", staggerChildren: 0.03, staggerDirection: -1 },
  },
  abierto: {
    clipPath: "inset(0% 0% -12% 0%)",
    transition: { duration: 0.5, ease, delayChildren: 0.12, staggerChildren: 0.07 },
  },
};
const item: Variants = {
  cerrado: { opacity: 0, x: -16, transition: { duration: 0.15 } },
  abierto: { opacity: 1, x: 0, transition: { duration: 0.4, ease } },
};

function Marca() {
  return (
    <a href="#inicio" aria-label={`${site.nombre}, inicio`} className="flex flex-col leading-none text-white no-underline transition-opacity duration-200 hover:opacity-80">
      <span className="text-[11px] font-bold tracking-[2.5px] text-[#dce6ff] md:text-xs">CENTRO DE SERVICIO</span>
      <span className="font-display text-[30px] font-black italic tracking-[0.5px] md:text-4xl">FAISAL</span>
    </a>
  );
}

const botonCuadrado =
  "btn-anim box-border flex size-12 items-center justify-center border-2 border-linea bg-transparent text-white hover:border-azul-texto active:border-azul-texto";

export function Header() {
  const [abierto, setAbierto] = useState(false);
  const cerrar = () => setAbierto(false);

  return (
    <header className="sticky top-0 z-20 border-b border-linea bg-fondo/95 px-5 py-3 backdrop-blur md:px-12 md:py-4">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6">
        <Marca />

        {/* Escritorio */}
        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="link-anim text-[15px] font-semibold text-white no-underline hover:text-azul-texto">{n.label}</a>
          ))}
          <a href="#repuestos" className="link-anim text-[15px] font-bold text-amarillo no-underline">Repuestos</a>
        </nav>

        {/* Celular */}
        <div className="flex gap-2 md:hidden">
          <a href={`tel:${site.telefono}`} aria-label="Llamar al taller" className={botonCuadrado}><IconPhone /></a>
          <button type="button" aria-label={abierto ? "Cerrar menú" : "Abrir menú"} aria-controls="menu-movil" aria-expanded={abierto}
            onClick={() => setAbierto((v) => !v)} className={botonCuadrado}>
            {abierto ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {abierto && (
          <m.nav id="menu-movil" aria-label="Principal"
            variants={menu} initial="cerrado" animate="abierto" exit="cerrado"
            className="absolute inset-x-0 top-full flex flex-col border-y border-linea bg-fondo px-5 pb-3 pt-2 shadow-[0_12px_24px_rgba(0,0,0,0.5)] md:hidden">
            {NAV.map((n) => (
              <m.a key={n.href} href={n.href} onClick={cerrar} variants={item}
                className="flex min-h-[52px] items-center border-b border-linea text-lg font-semibold text-white no-underline transition-colors duration-200 active:text-azul-texto">
                <span className="link-anim">{n.label}</span>
              </m.a>
            ))}
            <m.a href="#repuestos" onClick={cerrar} variants={item}
              className="flex min-h-[52px] items-center text-lg font-bold text-amarillo no-underline">
              <span className="link-anim">Repuestos Faisal</span>
            </m.a>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
