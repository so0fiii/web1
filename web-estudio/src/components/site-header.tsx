/*
 * Cabecera principal de la web.
 *
 * Contiene logo, navegacion interna y boton de contacto. La separamos en un
 * componente propio porque una cabecera suele reutilizarse en muchas paginas.
 */

/*
 * `next/link` optimiza navegacion interna en Next.js.
 * `lucide-react` aporta iconos como componentes React.
 */
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import { business, navItems } from "@/data/site";

export function SiteHeader() {
  return (
    /*
     * `sticky top-0` fija la cabecera arriba durante el scroll.
     * `backdrop-blur` da un efecto de cristal suave cuando hay contenido detras.
     */
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo: enlace a la home con un icono y el nombre del negocio. */}
        <Link href="/" className="flex items-center gap-3 font-semibold text-slate-950">
          <span className="grid size-9 place-items-center rounded-lg bg-slate-950 text-white">
            <Code2 aria-hidden="true" className="size-5" />
          </span>
          <span>{business.name}</span>
        </Link>

        {/*
         * Navegacion de escritorio.
         * `hidden md:flex` significa: oculta en movil, visible desde pantallas medianas.
         */}
        <nav aria-label="Navegacion principal" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link-effect text-sm font-medium text-slate-600 hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Llamada a la accion principal de la cabecera. */}
        <a
          href="#contacto"
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-teal-600 px-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/20"
        >
          Hablemos
          <ArrowRight aria-hidden="true" className="size-4" />
        </a>
      </div>
    </header>
  );
}
