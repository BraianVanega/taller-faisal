# Centro de Servicio Faisal · web del taller

Sitio de una sola página en Next.js 16 (App Router), Tailwind CSS v4 y Motion.

## Cómo correrlo

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Dónde está cada cosa

- `data/site.ts`: datos del taller (servicios, horarios, WhatsApp, reseñas). Para cambiar un dato, se edita solo este archivo.
- `app/globals.css`: paleta y tipografías.
- `components/ui/motion.tsx`: animaciones de entrada (respetan "reducir movimiento").

## Flujo de trabajo

Un PR por grupo de secciones, cada uno con su vista previa de Vercel. Nada llega a `main` sin la aprobación de Braian.
