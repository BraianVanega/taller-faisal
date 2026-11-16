"use client";

import { useSyncExternalStore } from "react";
import { estadoTaller } from "@/lib/horario";

const HORARIOS = "Lun a vie 8 a 17 · Sáb 8 a 13";

// Avisa a React cada un minuto para que vuelva a mirar la hora.
function suscribirse(avisar: () => void) {
  const id = setInterval(avisar, 60_000);
  return () => clearInterval(id);
}

/** En el servidor muestra los horarios; en el navegador, si está abierto o cerrado. */
export function AbiertoAhora() {
  const texto = useSyncExternalStore(suscribirse, estadoTaller, () => HORARIOS);
  return <span className="text-[17px] font-semibold">{texto}</span>;
}
