/*
 * Formulario de contacto.
 *
 * Este archivo es un Client Component porque usa estado (`useState`) y maneja
 * un evento del navegador (`onSubmit`). En Next.js App Router, los componentes
 * son de servidor por defecto; para usar interactividad hay que escribir
 * `"use client"` al principio del archivo.
 */
"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  /*
   * `sent` guarda si el usuario ha enviado el formulario.
   *
   * `useState(false)` significa que al cargar la pagina el formulario aun no
   * se ha enviado. Cuando llamamos a `setSent(true)`, React vuelve a pintar el
   * componente y muestra el mensaje de confirmacion.
   */
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        /*
         * Evitamos el comportamiento normal del navegador, que seria recargar
         * la pagina al enviar el formulario. En una version real, aqui se
         * llamaria a una Server Action o a un endpoint de API.
         */
        event.preventDefault();
        setSent(true);
      }}
    >
      {/* Campo de nombre. `htmlFor` conecta el label con el input por accesibilidad. */}
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-semibold text-slate-800">
          Nombre
        </label>
        <input
          id="name"
          required
          className="h-12 rounded-lg border border-slate-300 bg-white px-4 text-slate-950 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
          placeholder="Tu nombre o empresa"
        />
      </div>

      {/* Campo de email. `type="email"` activa validacion basica del navegador. */}
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-slate-800">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="h-12 rounded-lg border border-slate-300 bg-white px-4 text-slate-950 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
          placeholder="tu@email.com"
        />
      </div>

      {/* Campo largo para describir la necesidad del cliente. */}
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-slate-800">
          Que necesitas
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
          placeholder="Ejemplo: necesito una web sencilla para mi negocio local..."
        />
      </div>

      {/* Boton de envio. El icono es decorativo, por eso lleva `aria-hidden`. */}
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 font-semibold text-white transition hover:bg-slate-800"
      >
        Enviar solicitud
        <Send aria-hidden="true" className="size-4" />
      </button>

      {/* Mensaje condicional: solo aparece cuando `sent` es true. */}
      {sent ? (
        <p className="rounded-lg bg-teal-50 px-4 py-3 text-sm font-medium text-teal-800">
          Formulario de demo enviado. En produccion conectariamos esto a email, CRM o base de datos.
        </p>
      ) : null}
    </form>
  );
}
