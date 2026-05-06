/*
 * Layout raiz de la aplicacion.
 *
 * En Next.js App Router, `layout.tsx` envuelve todas las paginas que cuelgan de
 * esta carpeta. Como esta en `src/app/layout.tsx`, afecta a toda la app.
 */

/*
 * `Metadata` es un tipo de Next.js para definir metadatos SEO con seguridad de
 * tipos. Si escribimos una propiedad incorrecta, TypeScript puede avisarnos.
 */
import type { Metadata } from "next";

/*
 * `next/font/google` descarga y optimiza fuentes en build time.
 *
 * Geist es la fuente de Vercel. Usarla asi evita saltos visuales de carga y
 * mejora rendimiento frente a importar fuentes con una etiqueta externa.
 */
import { Geist, Geist_Mono } from "next/font/google";

/*
 * CSS global de la aplicacion. Aqui viven variables de color, fuentes base y
 * estilos que afectan a todo el documento.
 */
import "./globals.css";

/*
 * Configuracion de Geist Sans.
 *
 * `variable` crea una variable CSS que luego Tailwind puede usar.
 * `subsets: ["latin"]` descarga solo el subconjunto de caracteres necesario.
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/*
 * Configuracion de Geist Mono.
 *
 * La fuente monoespaciada se usa para numeros, codigo, etiquetas tecnicas o
 * elementos donde conviene que todos los caracteres ocupen el mismo ancho.
 */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/*
 * Metadata global de la web.
 *
 * Next.js convierte esto en etiquetas `<title>`, `<meta name="description">`
 * y metadatos Open Graph para compartir la web en redes sociales.
 */
export const metadata: Metadata = {
  title: "NexoWeb Studio | Desarrollo web para pymes",
  description:
    "Webs sencillas, modernas y mantenibles para empresas, pymes y negocios locales.",
  openGraph: {
    title: "NexoWeb Studio",
    description:
      "Desarrollo web y mantenimiento para negocios que quieren una presencia online profesional.",
    type: "website",
  },
};

/*
 * RootLayout recibe `children`.
 *
 * `children` es la pagina actual que Next.js renderiza dentro del layout. En
 * este proyecto, `children` sera principalmente el contenido de `page.tsx`.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /*
     * `lang="es"` ayuda a accesibilidad, lectores de pantalla y SEO.
     * Las variables de fuente se aplican en el elemento HTML para estar
     * disponibles en todo el documento.
     */
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      {/*
       * `antialiased` suaviza la renderizacion de texto.
       * `min-h-full` y `flex flex-col` preparan layouts verticales completos.
       */}
      <body className="flex min-h-full flex-col antialiased">{children}</body>
    </html>
  );
}
