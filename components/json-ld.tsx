import { site } from "@/data/site";

/** Datos estructurados para Google (tipo AutoRepair). */
export function JsonLd() {
  const datos = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: site.nombre,
    description: `${site.descripcionCorta}. ${site.frase}`,
    url: site.url,
    telephone: site.telefono,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.direccion.calle,
      addressLocality: site.direccion.ciudad,
      addressRegion: site.direccion.provincia,
      postalCode: site.direccion.codigoPostal,
      addressCountry: site.direccion.pais,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.direccion.lat, longitude: site.direccion.lng },
    hasMap: site.redes.googleMaps,
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "13:00" },
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: site.calificacion.promedio, reviewCount: site.calificacion.cantidad },
    sameAs: [site.redes.instagramTaller],
  };
  return (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(datos).replace(/</g, "\\u003c") }} />
  );
}
