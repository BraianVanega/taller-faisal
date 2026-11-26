"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Link al inicio. Si ya estás en la home, sube suave hasta arriba de todo
 * (funciona aunque lo toques varias veces). Desde el blog, lleva a la home.
 */
export function VolverInicio({ children, className, ariaLabel }: { children: React.ReactNode; className?: string; ariaLabel: string }) {
  const ruta = usePathname();
  return (
    <Link href="/" aria-label={ariaLabel} className={className}
      onClick={(e) => {
        if (ruta !== "/") return;
        e.preventDefault();
        const suave = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: suave ? "smooth" : "auto" });
        history.replaceState(null, "", "/");
      }}>
      {children}
    </Link>
  );
}
