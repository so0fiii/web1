/*
 * Configuracion de PostCSS.
 *
 * PostCSS procesa el CSS durante el build. En este proyecto lo usamos para que
 * Tailwind CSS v4 transforme sus directivas y genere las clases finales.
 */
const config = {
  plugins: {
    /*
     * Plugin oficial de Tailwind para PostCSS.
     *
     * Lee `@import "tailwindcss"` en `globals.css` y genera las utilidades que
     * usamos en los componentes.
     */
    "@tailwindcss/postcss": {},
  },
};

export default config;
