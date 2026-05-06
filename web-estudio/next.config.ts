/*
 * Configuracion principal de Next.js.
 *
 * Este archivo permite activar opciones del framework: imagenes externas,
 * redirecciones, rewrites, experimental flags, configuracion de Turbopack, etc.
 */
import type { NextConfig } from "next";

/*
 * `NextConfig` da autocompletado y validacion de TypeScript para las opciones.
 * De momento no necesitamos opciones especiales, por eso el objeto esta vacio.
 */
const nextConfig: NextConfig = {};

/*
 * Export default para que Next.js pueda leer esta configuracion al ejecutar
 * `npm run dev`, `npm run build` o `npm run start`.
 */
export default nextConfig;
