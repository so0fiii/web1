/*
 * Pagina principal de la web.
 *
 * En Next.js App Router, un archivo `page.tsx` crea una ruta. Como este archivo
 * esta en `src/app/page.tsx`, representa la URL `/`.
 *
 * Este componente es un Server Component por defecto. Eso significa que se
 * renderiza en el servidor y envia menos JavaScript al navegador. La parte
 * interactiva del formulario vive en `ContactForm`, que si es Client Component.
 */

/*
 * Iconos usados directamente en esta pagina.
 *
 * Los iconos de lucide-react son componentes React. Se pueden usar como
 * `<ArrowRight />`, igual que cualquier otro componente.
 */
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";

/*
 * Componentes reutilizables creados por nosotros.
 */
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";

/*
 * Datos comerciales separados de la UI.
 *
 * Esta importacion permite construir la pagina a partir de arrays y objetos,
 * en vez de repetir tarjetas manualmente una por una.
 */
import {
  business,
  checklist,
  futureServices,
  plans,
  process,
  services,
  stats,
  values,
} from "@/data/site";

export default function Home() {
  return (
    /*
     * `<main>` representa el contenido principal de la pagina.
     * Las clases son de Tailwind CSS. Por ejemplo:
     * - `min-h-screen`: altura minima igual a la pantalla.
     * - `bg-white`: fondo blanco.
     * - `text-slate-950`: color base del texto.
     */
    <main className="min-h-screen bg-white text-slate-950">
      {/* Cabecera fija con logo, navegacion y boton de contacto. */}
      <SiteHeader />

      {/*
       * HERO
       *
       * Es la primera seccion que ve el usuario. Debe explicar rapidamente:
       * que haceis, para quien y que accion debe tomar el visitante.
       */}
      <section className="animated-grid relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#ecfeff_48%,#fef3c7_100%)]">
        {/*
         * Figuras 2D decorativas del hero.
         *
         * Son elementos HTML absolutamente posicionados. No tienen contenido ni
         * significado, por eso llevan `aria-hidden`.
         */}
        <div aria-hidden="true" className="absolute left-[6%] top-24 hidden size-16 rotate-12 rounded-[8px] border border-teal-300/60 bg-white/35 shadow-lg shadow-teal-900/5 md:block" />
        <div aria-hidden="true" className="absolute bottom-20 left-[42%] hidden h-10 w-28 -rotate-6 rounded-full border border-amber-300/70 bg-amber-100/45 md:block" />
        <div aria-hidden="true" className="absolute right-[7%] top-28 hidden size-20 rotate-45 border border-slate-300/80 bg-white/25 lg:block" />
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
          {/* Columna izquierda: mensaje comercial principal. */}
          <div className="reveal-up max-w-3xl">
            <p className="inline-flex rounded-lg border border-teal-200 bg-white/80 px-3 py-2 text-sm font-semibold text-teal-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              Desarrollo web para pymes, autonomos y negocios locales
            </p>

            {/* H1: titulo principal de la pagina. Solo deberia haber un H1 importante. */}
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              {business.tagline}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Somos dos estudiantes de Ingenieria Informatica construyendo un estudio web con foco en
              productos sencillos, bien explicados y faciles de mantener. Empezamos con webs de
              presentacion y mantenimiento mensual.
            </p>

            {/* Botones principales: presupuesto y exploracion de servicios. */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 font-semibold text-white transition hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-950/20"
              >
                Pedir presupuesto
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
              <a
                href="#servicios"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 font-semibold text-slate-950 transition hover:-translate-y-1 hover:border-slate-950 hover:shadow-xl hover:shadow-slate-900/10"
              >
                Ver servicios
              </a>
            </div>
          </div>

          {/*
           * Columna derecha: panel visual.
           *
           * No es una imagen externa; es UI hecha con HTML y Tailwind para dar
           * una sensacion moderna de producto digital.
           */}
          <div className="float-card reveal-up delay-200 rounded-[8px] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10">
            <div className="shine-panel rounded-[6px] border border-slate-200 bg-slate-950 p-4 text-white">
              {/* Tres circulos decorativos inspirados en ventanas de software. */}
              <div className="flex gap-2">
                <span className="size-3 rounded-full bg-rose-400" />
                <span className="size-3 rounded-full bg-amber-300" />
                <span className="size-3 rounded-full bg-teal-300" />
              </div>

              <div className="mt-8 grid gap-4">
                {/* Tarjeta clara interna con estadisticas. */}
                <div className="rounded-[6px] bg-white p-5 text-slate-950">
                  <p className="text-sm font-semibold text-teal-700">Proyecto activo</p>
                  <h2 className="mt-2 text-2xl font-semibold">Web local lista para captar clientes</h2>
                  <div aria-hidden="true" className="mt-4 grid gap-2">
                    <span className="meter-bar h-2 w-3/4 rounded-full bg-teal-200" />
                    <span className="meter-bar h-2 w-1/2 rounded-full bg-amber-200" />
                  </div>

                  {/*
                   * `.map()` convierte cada objeto de `stats` en una tarjeta.
                   * `key` ayuda a React a identificar cada elemento de la lista.
                   */}
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {stats.map((stat) => (
                      <div key={stat.label} className="lift-card rounded-[6px] bg-slate-100 p-3">
                        <p className="text-xl font-semibold">{stat.value}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Checklist breve de caracteristicas de entrega. */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {checklist.slice(0, 4).map(({ item, icon: Icon }) => (
                    <div key={item} className="lift-card flex items-start gap-3 rounded-[6px] border border-white/10 bg-white/10 p-4">
                      <Icon aria-hidden="true" className="mt-0.5 size-5 text-teal-300" />
                      <p className="text-sm leading-6 text-slate-100">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
       * SERVICIOS
       *
       * Seccion con lo que ofreceis ahora. El `id="servicios"` permite que los
       * enlaces `href="#servicios"` hagan scroll hasta aqui.
       */}
      <section id="servicios" className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Servicios iniciales"
            title="Empezamos por lo que mas valor aporta"
            description="Una buena web no tiene que ser enorme: debe explicar, generar confianza y facilitar el contacto."
          />

          {/* Tarjetas de servicios actuales generadas desde `services`. */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map(({ title, description, icon: Icon }) => (
              <article key={title} className="lift-card rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
                <Icon aria-hidden="true" className="size-7 text-teal-700" />
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>

          {/* Banda oscura para comunicar servicios futuros sin prometerlos como oferta actual. */}
          <div className="mt-10 rounded-[8px] bg-slate-950 p-6 text-white md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">Despues podremos ampliar</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {futureServices.map(({ label, icon: Icon }) => (
                <div key={label} className="lift-card flex items-center gap-3 rounded-[6px] border border-white/10 bg-white/10 p-4">
                  <Icon aria-hidden="true" className="size-5 text-amber-200" />
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*
       * PROCESO
       *
       * Explica como trabajais. Para clientes no tecnicos, entender el proceso
       * reduce incertidumbre y aumenta confianza.
       */}
      <section id="proceso" className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Metodo"
            title="Un proceso simple para evitar improvisacion"
            description="Cada proyecto debe tener objetivo, alcance y entregables definidos antes de escribir demasiado codigo."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {process.map((item) => (
              <article key={item.step} className="lift-card rounded-[8px] border border-slate-200 bg-white p-6">
                <p className="font-mono text-sm font-semibold text-teal-700">{item.step}</p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/*
       * DIFERENCIALES
       *
       * Esta seccion explica vuestra forma de trabajar. No vende "features",
       * vende confianza, criterio y calidad.
       */}
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">Diferenciales</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Profesionalidad desde el primer proyecto</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Como estudiantes, nuestro valor no es prometerlo todo: es construir bien lo que toca,
              documentarlo y dejar una base que podamos mejorar proyecto a proyecto.
            </p>
          </div>

          {/* Grid de valores diferenciales generado desde `values`. */}
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map(({ label, detail, icon: Icon }) => (
              <div key={label} className="lift-card flex gap-4 rounded-[8px] border border-slate-200 p-5">
                <Icon aria-hidden="true" className="size-6 shrink-0 text-teal-700" />
                <div>
                  <h3 className="font-semibold">{label}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
       * PLANES
       *
       * Plantilla comercial con precios orientativos. El plan destacado usa
       * `plan.highlighted` para cambiar las clases de Tailwind.
       */}
      <section id="planes" className="bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">Plantilla comercial</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Planes orientativos para empezar a vender</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Los precios son de ejemplo. Ajustadlos segun horas reales, experiencia, complejidad y valor para el cliente.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`lift-card rounded-[8px] border p-6 ${
                  plan.highlighted ? "border-teal-300 bg-white text-slate-950" : "border-white/10 bg-white/10"
                }`}
              >
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className={`mt-3 text-3xl font-semibold ${plan.highlighted ? "text-teal-700" : "text-teal-200"}`}>
                  {plan.price}
                </p>
                <p className={`mt-3 leading-7 ${plan.highlighted ? "text-slate-600" : "text-slate-300"}`}>
                  {plan.description}
                </p>

                {/* Lista de caracteristicas incluidas en cada plan. */}
                <ul className="mt-6 grid gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-teal-500" />
                      <span className={plan.highlighted ? "text-slate-700" : "text-slate-200"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/*
       * CONTACTO
       *
       * Ultima seccion de conversion. Combina datos de contacto visibles con
       * un formulario demo.
       */}
      <section id="contacto" className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">Contacto</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Contadnos que necesita vuestro primer cliente</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Este formulario ahora es una demo local. En una version real lo conectariamos con una Server Action, Resend,
              una base de datos o un CRM.
            </p>

            {/* Datos de contacto del negocio importados desde `business`. */}
            <div className="mt-8 grid gap-4 text-slate-700">
              <p className="flex items-center gap-3">
                <Mail aria-hidden="true" className="size-5 text-teal-700" />
                {business.email}
              </p>
              <p className="flex items-center gap-3">
                <Phone aria-hidden="true" className="size-5 text-teal-700" />
                {business.phone}
              </p>
              <p className="flex items-center gap-3">
                <MapPin aria-hidden="true" className="size-5 text-teal-700" />
                {business.city}
              </p>
            </div>
          </div>

          {/* Formulario interactivo separado en un Client Component. */}
          <div className="lift-card rounded-[8px] border border-slate-200 bg-slate-50 p-5 sm:p-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
