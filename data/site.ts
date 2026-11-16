// Datos del taller. Para cambiar un horario, un servicio o el WhatsApp,
// se edita este archivo: los componentes leen todo desde acá.

export type IconoServicio =
  | "llave" | "alineacion" | "frenos" | "escaner" | "suspension" | "aceite"
  | "rulemanes" | "bateria" | "lampara" | "eje" | "correa" | "embrague";

export type Servicio = { nombre: string; icono: IconoServicio; texto: string };
export type Horario = { dias: string; desde: string | null; hasta: string | null };
export type Resena = { autor: string; cuando: string; texto: string };

export const site = {
  nombre: "Centro de Servicio Faisal",
  descripcionCorta: "Taller mecánico de Mar del Plata",
  frase: "Trabajamos con presupuesto previo y te explicamos cada arreglo.",
  url: "https://tallerfaisal.com.ar",

  direccion: {
    calle: "Av. Mario Bravo 3108",
    esquina: "esquina Pescadores",
    ciudad: "Mar del Plata",
    provincia: "Buenos Aires",
    codigoPostal: "7600",
    pais: "AR",
    lat: -38.0633124,
    lng: -57.5679847,
  },

  telefono: "+5492235302965",
  whatsapp: "5492235302965",
  mensajeWhatsApp: "Hola, quiero consultar por...",

  redes: {
    instagramTaller: "https://instagram.com/centrodeserviciofaisal",
    instagramRepuestos: "https://instagram.com/repuestosfaisal",
    googleMaps: "https://www.google.com/maps/place/Centro+de+Servicio+Faisal/@-38.0633124,-57.5679847,17z",
  },

  // [A CONFIRMAR CON RODRI]
  horarios: [
    { dias: "Lunes a viernes", desde: "08:00", hasta: "17:00" },
    { dias: "Sábados", desde: "08:00", hasta: "13:00" },
    { dias: "Domingos", desde: null, hasta: null },
  ] satisfies Horario[],

  // [A CONFIRMAR CON RODRI] Orden: lo más consultado primero.
  servicios: [
    { nombre: "Mantenimiento general", icono: "llave", texto: "Diagnóstico, mantenimiento y reparación integral. Hacemos el service según los kilómetros." },
    { nombre: "Alineación, balanceo y rotación", icono: "alineacion", texto: "Alineación y balanceo de precisión, y rotación para que las cubiertas se gasten parejo. Recomendado cada 10.000 km." },
    { nombre: "Frenos", icono: "frenos", texto: "Revisión, reparación y cambio de frenos, ABS incluido. Si hace ruido o tarda en frenar, traelo." },
    { nombre: "Escaneo computarizado", icono: "escaner", texto: "Escáner multimarca: leemos las fallas del tablero, te explicamos qué significan y las borramos." },
    { nombre: "Tren delantero y suspensión", icono: "suspension", texto: "Reparación de suspensión y dirección: amortiguadores, resortes, rótulas y bujes." },
    { nombre: "Aceite y filtros", icono: "aceite", texto: "Aceites de primeras marcas y filtros de aceite, aire y combustible. Recomendado cada 10.000 km." },
    { nombre: "Rulemanes y mazas", icono: "rulemanes", texto: "Cambio de rulemanes y mazas." },
    { nombre: "Baterías", icono: "bateria", texto: "Revisamos carga, arranque y luces, y cambiamos la batería si hace falta." },
    { nombre: "Lámparas e iluminación", icono: "lampara", texto: "Cambio de lámparas y revisión de luces, para ver bien y que te vean." },
    { nombre: "Eje trasero", icono: "eje", texto: "Revisión y reparación del eje trasero y sus rodamientos." },
    { nombre: "Distribución y correas", icono: "correa", texto: "Cambio de kit de distribución y correas a tiempo, antes de que se corten." },
    { nombre: "Embrague", icono: "embrague", texto: "Si patina o cuesta pasar los cambios, lo revisamos y te pasamos el presupuesto." },
  ] satisfies Servicio[],

  revisionVtv: {
    nombre: "Revisión pre VTV",
    texto: "Controlamos luces, frenos, tren delantero, neumáticos y suspensión para que llegues tranquilo a la VTV.",
  },

  pasos: [
    { titulo: "Nos escribís por WhatsApp", texto: "Contanos qué le pasa al auto y coordinamos cuándo traerlo." },
    { titulo: "Diagnóstico y presupuesto", texto: "Lo revisamos y te pasamos el presupuesto antes de empezar." },
    { titulo: "Trabajo y entrega", texto: "Lo arreglamos con tu aprobación y, al retirarlo, te mostramos lo que cambiamos." },
  ],

  // Reseñas reales de Google, copiadas tal cual. No editar el texto.
  calificacion: { promedio: 4.7, cantidad: 72, fecha: "2026-11-11" },
  resenas: [
    { autor: "Анна Р.", cuando: "Hace un mes", texto: "¡Excelente servicio! ⭐⭐⭐⭐⭐ Quedé súper conforme. Me atendieron muy bien, trabajaron rápido y revisaron todo con mucha atención. Me explicaron claramente qué había que hacer y dejaron el auto perfecto. Se nota que trabajan con mucha responsabilidad y profesionalismo. Sin dudas, un taller de confianza. ¡Lo recomiendo 100%! 🙌" },
    { autor: "Franco C.", cuando: "Hace 3 meses", texto: "Excelente atencion y servicio.\nRecomendado.\nGracias rodrigo y a todo su equipo de trabajo" },
    { autor: "Andrés F.", cuando: "Hace 2 años", texto: "Si pudiera darle más estrellas a este equipo, sin duda alguna lo haría..\n\nResulta que me faltaban unas piezas importantes del Caliper, sin dudarlo Rodrigo decidió ayudarme a pesar de que tenía mucho trabajo, debo agradecer enormemente a este genio que me dio una solución inmediata … se nota el profesionalismo. Muy amable.. excelente el equipo nada que decir un 7.. saludos y un abrazo enorme a la distancia y muchas muchas gracias por todo ..\n\nPuerto Natales, Chile.🇨🇱" },
  ] satisfies Resena[],

  // [A CONFIRMAR] Datos legales para el pie.
  legal: {
    razonSocialTaller: "[RAZÓN SOCIAL]",
    cuitTaller: "[XX-XXXXXXXX-X]",
    razonSocialRepuestos: "[RAZÓN SOCIAL DE LA SOCIEDAD NUEVA]",
  },
};

export const whatsappUrl = (mensaje: string = site.mensajeWhatsApp) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
