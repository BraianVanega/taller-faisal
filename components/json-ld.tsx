import { site } from "@/data/site";

/**
 * Datos estructurados para Google (tipo AutoRepair).
 * Le dicen a Google, en su idioma, qué es el negocio, dónde está, cuándo abre y qué servicios hace.
 */
export function JsonLd() {
  const id = `${site.url}/#taller`;
  const datos = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": id,
    name: site.nombre,
    description: `${site.descripcionCorta}. ${site.frase}`,
    url: site.url,
    telephone: site.telefono,
    image: [`${site.url}/fotos/portada.jpg`],
    logo: `${site.url}/icon.png`,
    priceRange: "$$",
    currenciesAccepted: "ARS",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.direccion.calle}, ${site.direccion.esquina}`,
      addressLocality: site.direccion.ciudad,
      addressRegion: site.direccion.provincia,
      postalCode: site.direccion.codigoPostal,
      addressCountry: site.direccion.pais,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.direccion.lat, longitude: site.direccion.lng },
    hasMap: site.redes.googleMaps,
    areaServed: [
      { "@type": "City", name: "Mar del Plata" },
      { "@type": "City", name: "Batán" },
    ],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "13:00" },
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: site.calificacion.promedio, reviewCount: site.calificacion.cantidad, bestRating: 5 },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de mecánica",
      itemListElement: [...site.servicios, site.revisionVtv].map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.nombre,
          description: s.texto,
          areaServed: "Mar del Plata",
          provider: { "@id": id },
        },
      })),
    },
    sameAs: [site.redes.instagramTaller, site.redes.googleMaps],
  };
  return (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(datos).replace(/</g, "\\u003c") }} />
  );
}
