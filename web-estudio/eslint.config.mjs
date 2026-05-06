/*
 * Configuracion de ESLint.
 *
 * ESLint analiza el codigo y detecta errores, malas practicas y problemas de
 * accesibilidad o React antes de que lleguen a produccion.
 */
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/*
 * `defineConfig` ayuda a escribir una configuracion compatible con ESLint.
 *
 * - `nextVitals`: reglas recomendadas por Next.js para rendimiento y calidad.
 * - `nextTs`: reglas especificas para proyectos con TypeScript.
 */
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  /*
   * Archivos/carpetas que ESLint debe ignorar.
   *
   * No se revisa `.next` porque es codigo generado automaticamente por Next.
   * Tampoco se revisa `next-env.d.ts` porque lo mantiene el propio framework.
   */
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
