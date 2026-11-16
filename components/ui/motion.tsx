"use client";

import { LazyMotion, MotionConfig, domAnimation, m } from "motion/react";
import type { ReactNode } from "react";

/**
 * Carga solo las funciones de Motion que usamos (LazyMotion) y respeta
 * "reducir movimiento" del sistema (reducedMotion="user").
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Segundos de espera, para escalonar elementos (ej.: 0.06 * índice). */
  delay?: number;
};

/** Entrada del brief: fundido + subida corta de 16 px, una sola vez, 500 ms. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </m.div>
  );
}
