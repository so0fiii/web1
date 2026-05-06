/*
 * Componente reutilizable para titulos de seccion.
 *
 * Lo usamos para que secciones como "Servicios" y "Proceso" compartan el mismo
 * estilo visual. Esto evita repetir el mismo JSX varias veces.
 */

/*
 * TypeScript define que propiedades recibe el componente.
 *
 * `description?: string` significa que `description` es opcional. El simbolo
 * `?` indica que el componente puede renderizarse con o sin descripcion.
 */
type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

/*
 * Funcion componente de React.
 *
 * Recibe props, devuelve JSX y Next/React lo transforma en HTML renderizable.
 */
export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {/* Texto pequeno superior. Sirve como categoria o etiqueta de la seccion. */}
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
        {eyebrow}
      </p>

      {/* Titulo principal de la seccion. */}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>

      {/* Renderizado condicional: solo mostramos el parrafo si existe descripcion. */}
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
