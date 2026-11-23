import { site } from "@/data/site";

/**
 * Devuelve el estado del taller según la hora de Mar del Plata.
 * Se calcula en el navegador (ver AbiertoAhora) para que esté siempre al día.
 */
export function estadoTaller(ahora: Date = new Date()): string {
  const partes = new Intl.DateTimeFormat("es-AR", {
    timeZone: "America/Argentina/Buenos_Aires", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false,
  }).formatToParts(ahora);
  const dia = partes.find((p) => p.type === "weekday")?.value.replace(".", "") ?? "";
  const hh = Number(partes.find((p) => p.type === "hour")?.value ?? 0);
  const mm = Number(partes.find((p) => p.type === "minute")?.value ?? 0);
  const minutos = hh * 60 + mm;

  const [semana, sabado] = site.horarios;
  const franja = ["lun", "mar", "mié", "jue", "vie"].includes(dia) ? semana : dia === "sáb" ? sabado : null;
  const aMin = (h: string) => Number(h.slice(0, 2)) * 60 + Number(h.slice(3, 5));

  if (franja?.desde && franja.hasta && minutos >= aMin(franja.desde) && minutos < aMin(franja.hasta)) {
    return `Abierto ahora · cierra a las ${Number(franja.hasta.slice(0, 2))} hs`;
  }
  return "Cerrado ahora · escribinos y te respondemos al abrir";
}
