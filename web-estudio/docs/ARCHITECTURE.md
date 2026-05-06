# Explicacion tecnica del proyecto

## Flujo de una peticion

1. El navegador pide una URL, por ejemplo `/`.
2. `src/proxy.ts` intercepta la peticion y anade cabeceras de seguridad.
3. Next.js resuelve la ruta usando el App Router.
4. `src/app/layout.tsx` envuelve la pagina con HTML comun, fuentes y metadata.
5. `src/app/page.tsx` renderiza la interfaz principal.
6. El componente `ContactForm` se hidrata en el navegador porque es interactivo.

## Estructura mental

`data -> page -> components`

- `data`: informacion del negocio.
- `page`: decide que secciones se muestran y en que orden.
- `components`: piezas reutilizables y pequenas.

Esta separacion ayuda a no mezclar estrategia comercial, estructura de pagina y detalles visuales.

## Por que TypeScript

TypeScript permite detectar errores antes de ejecutar la app. Por ejemplo, si un servicio necesita `title`, `description` e `icon`, el editor puede avisar cuando falta una propiedad o se usa mal.

## Por que Tailwind

Tailwind permite construir UI rapido sin crear muchos nombres de clases personalizados. En proyectos pequenos es muy practico, pero conviene mantener patrones repetibles: mismos radios, espaciados, colores y tamanos.

## Siguiente mejora tecnica

El formulario ahora es una demo. Una version real podria usar:

- Server Actions para recibir el formulario.
- Validacion con Zod.
- Resend para enviar emails.
- Una tabla de leads en una base de datos.

Ese seria el primer paso para convertir esta web en una herramienta comercial real.
