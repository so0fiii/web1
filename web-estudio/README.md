# NexoWeb Studio

Web de presentacion para un pequeno estudio de desarrollo web. Esta pensada como plantilla inicial para aprender React, Next.js, JavaScript/TypeScript, Node.js y despliegue en Vercel.

## Comandos

```bash
npm run dev
npm run build
npm run lint
```

Durante desarrollo, abrid `http://localhost:3000`.

## Arquitectura

El proyecto usa Next.js App Router:

- `src/app/layout.tsx`: layout raiz, metadata SEO y fuentes optimizadas con `next/font`.
- `src/app/page.tsx`: pagina principal. Es un Server Component por defecto, por eso no necesita JavaScript en el navegador salvo los componentes interactivos.
- `src/components`: componentes reutilizables de UI.
- `src/components/contact-form.tsx`: Client Component porque usa `useState` y gestiona el envio demo del formulario.
- `src/data/site.ts`: contenido editable de la web. Cambiad aqui servicios, planes, datos de contacto y textos comerciales.
- `src/proxy.ts`: proxy ligero de Next.js para anadir cabeceras de seguridad a las respuestas.
- `src/app/globals.css`: tokens globales, fuentes, seleccion de texto y scroll suave.
- `package.json`: define scripts (`dev`, `build`, `lint`) y dependencias. No lleva comentarios porque JSON no los permite.
- `package-lock.json`: fija versiones exactas instaladas por npm. No se edita a mano.
- `tsconfig.json`: configura TypeScript. Este archivo si admite comentarios estilo JSONC.
- `eslint.config.mjs`: reglas de calidad de codigo.
- `postcss.config.mjs`: conecta Tailwind CSS con PostCSS.
- `.gitignore`: explica que archivos no se suben a Git.
- `next-env.d.ts`: archivo generado por Next.js para tipos globales. No conviene editarlo.
- `public/*.svg` y `src/app/favicon.ico`: assets estaticos. Se comentan en documentacion porque editar comentarios dentro de SVG o binarios no aporta al aprendizaje del codigo de la app.

## Comentarios en el codigo

Los archivos principales estan comentados por bloques para estudiar:

- Que responsabilidad tiene cada archivo.
- Que hace cada seccion visual.
- Por que usamos Server Components y Client Components.
- Como funcionan `.map()`, props, renderizado condicional y clases de Tailwind.
- Que hace el proxy y por que no debe ser la unica capa de seguridad.

En proyectos profesionales normalmente no se comenta absolutamente todo, porque demasiado comentario puede distraer. Aqui lo hemos hecho a proposito como material de aprendizaje.

## Server Components y Client Components

En App Router, los componentes son Server Components por defecto. Eso mejora rendimiento porque no mandan JavaScript innecesario al cliente.

Usamos `"use client"` solo en `ContactForm`, ya que ese componente necesita estado del navegador para mostrar el mensaje de envio. Esta separacion es una buena practica: interactividad en hojas pequenas y el resto renderizado en servidor.

## Proxy / middleware

En Next.js moderno, el archivo recomendado es `proxy.ts`. En este proyecto lo usamos para:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`

No usamos el proxy para autenticar usuarios porque una capa de entrada nunca debe ser la unica proteccion. Cuando haya areas privadas, se debe validar tambien en Server Components, Server Actions o Route Handlers.

## Como evolucionar el producto

Primeros pasos recomendados:

1. Cambiar nombre, email, telefono y ciudad en `src/data/site.ts`.
2. Sustituir los precios orientativos por precios reales.
3. Conectar el formulario a una Server Action o a un servicio de email como Resend.
4. Crear paginas independientes si necesitais portfolio, blog o casos de exito.
5. Desplegar en Vercel y conectar un dominio propio.

## Despliegue en Vercel

Vercel detecta Next.js automaticamente:

1. Subid el proyecto a GitHub.
2. Importad el repositorio en Vercel.
3. Ejecutad el deploy con la configuracion por defecto.

Build command: `npm run build`

Output: gestionado automaticamente por Vercel para Next.js.

Nota: la plantilla usa Geist con `next/font`, la forma recomendada en Next.js para cargar fuentes sin saltos visuales en produccion.
