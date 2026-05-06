/*
 * Este archivo centraliza el contenido editable de la web.
 *
 * Idea importante:
 * En vez de escribir todos los textos directamente en `page.tsx`, guardamos
 * aqui datos como servicios, planes, valores y datos de contacto. Asi, cuando
 * querais cambiar el contenido comercial, tocais este archivo y no la
 * estructura visual de la pagina.
 */

/*
 * Importamos iconos desde lucide-react.
 *
 * Cada icono es un componente React. Por eso luego podemos guardarlo en los
 * arrays de datos y renderizarlo como `<Icon />` dentro de la pagina.
 */
import {
  CalendarCheck,
  CheckCircle2,
  Code2,
  Gauge,
  Globe2,
  HeartHandshake,
  LayoutTemplate,
  LifeBuoy,
  Rocket,
  SearchCheck,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Wrench,
} from "lucide-react";

/*
 * Datos principales del negocio.
 *
 * Estos valores se usan en varias zonas de la web: cabecera, hero y contacto.
 * Cuando tengais nombre definitivo, email real o ciudad final, este es el
 * primer bloque que deberiais actualizar.
 */
export const business = {
  name: "NexoWeb Studio",
  tagline: "Webs claras, rapidas y mantenibles para negocios que quieren vender mejor.",
  email: "hola@nexoweb.studio",
  phone: "+34 600 000 000",
  city: "Valencia, Espana",
};

/*
 * Enlaces de navegacion de la cabecera.
 *
 * `href: "#servicios"` apunta a una seccion dentro de la misma pagina cuyo
 * elemento tiene `id="servicios"`. Esto permite hacer scroll a esa zona.
 */
export const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Planes", href: "#planes" },
  { label: "Contacto", href: "#contacto" },
];

/*
 * Estadisticas del bloque visual del hero.
 *
 * Son datos de confianza. En una web real conviene que sean honestos y faciles
 * de demostrar. Al empezar, podeis usar metricas de proceso, tiempos o enfoque.
 */
export const stats = [
  { value: "2", label: "desarrolladores en formacion continua" },
  { value: "7 dias", label: "para una primera version navegable" },
  { value: "100%", label: "codigo explicado y mantenible" },
];

/*
 * Servicios principales actuales.
 *
 * Cada objeto tiene:
 * - `title`: titulo de la tarjeta.
 * - `description`: texto comercial breve.
 * - `icon`: componente de lucide-react que se renderiza en la UI.
 */
export const services = [
  {
    title: "Webs sencillas",
    description:
      "Paginas de presentacion, landing pages y sitios corporativos para negocios locales, profesionales y pequenas empresas.",
    icon: LayoutTemplate,
  },
  {
    title: "Mantenimiento web",
    description:
      "Actualizaciones, pequenos cambios, revision visual, optimizacion basica y soporte mensual sin complicaciones.",
    icon: Wrench,
  },
  {
    title: "Preparadas para crecer",
    description:
      "Arquitectura lista para anadir catalogos, reservas o e-commerce cuando el negocio necesite dar el siguiente paso.",
    icon: Rocket,
  },
];

/*
 * Servicios futuros.
 *
 * Esta lista comunica que ahora empezais con webs sencillas, pero que la base
 * tecnica puede crecer hacia funcionalidades mas avanzadas.
 */
export const futureServices = [
  { label: "Catalogos digitales", icon: Globe2 },
  { label: "Reservas online", icon: CalendarCheck },
  { label: "E-commerce", icon: ShoppingBag },
  { label: "SEO tecnico inicial", icon: SearchCheck },
];

/*
 * Pasos del proceso de trabajo.
 *
 * La web debe explicar como trabajais. Esto reduce dudas del cliente y ayuda a
 * vender profesionalidad aunque esteis empezando.
 */
export const process = [
  {
    step: "01",
    title: "Diagnostico",
    description:
      "Entendemos el negocio, el cliente ideal, el objetivo de la web y las paginas necesarias.",
  },
  {
    step: "02",
    title: "Propuesta visual",
    description:
      "Preparamos estructura, textos base y direccion visual antes de empezar a programar.",
  },
  {
    step: "03",
    title: "Desarrollo",
    description:
      "Construimos con Next.js, componentes reutilizables y estilos responsive desde el primer dia.",
  },
  {
    step: "04",
    title: "Entrega y soporte",
    description:
      "Publicamos en Vercel, documentamos el proyecto y dejamos un plan de mantenimiento claro.",
  },
];

/*
 * Planes comerciales orientativos.
 *
 * `highlighted: true` marca visualmente el plan recomendado. En `page.tsx`
 * usamos ese booleano para cambiar colores y hacerlo destacar.
 */
export const plans = [
  {
    name: "Web Esencial",
    price: "Desde 390 EUR",
    description: "Ideal para presentar un negocio y empezar a captar contactos.",
    features: [
      "Hasta 5 secciones en una pagina",
      "Diseno responsive",
      "Formulario o enlace directo a WhatsApp",
      "Despliegue en Vercel",
    ],
  },
  {
    name: "Web Profesional",
    price: "Desde 690 EUR",
    description: "Para pymes que necesitan una presencia mas completa y preparada.",
    highlighted: true,
    features: [
      "Hasta 5 paginas",
      "Arquitectura escalable",
      "SEO tecnico inicial",
      "Documentacion para el cliente",
    ],
  },
  {
    name: "Mantenimiento",
    price: "Desde 49 EUR/mes",
    description: "Acompanamiento mensual para cambios pequenos y supervision.",
    features: [
      "Cambios menores",
      "Revision visual mensual",
      "Actualizaciones basicas",
      "Informe simple de mejoras",
    ],
  },
];

/*
 * Valores diferenciales del estudio.
 *
 * Esta seccion no vende una funcionalidad concreta, sino una forma de trabajar:
 * velocidad, confianza, calidad, seguridad, soporte y detalle.
 */
export const values = [
  { label: "Performance", detail: "Webs ligeras y rapidas.", icon: Gauge },
  { label: "Confianza", detail: "Proceso claro, sin tecnicismos innecesarios.", icon: HeartHandshake },
  { label: "Calidad", detail: "Codigo ordenado y documentado.", icon: Code2 },
  { label: "Seguridad", detail: "Buenas practicas desde el inicio.", icon: ShieldCheck },
  { label: "Soporte", detail: "Mantenimiento realista para negocios pequenos.", icon: LifeBuoy },
  { label: "Detalle", detail: "UX pensada para convertir visitas en contactos.", icon: Sparkles },
];

/*
 * Checklist del bloque visual del hero.
 *
 * Primero partimos de un array simple de strings. Despues usamos `.map()` para
 * convertir cada string en un objeto con el texto y un icono comun.
 */
export const checklist = [
  "Diseno responsive para movil, tablet y escritorio",
  "Estructura preparada para SEO",
  "Carga rapida y buenas practicas de accesibilidad",
  "Componentes separados para facilitar cambios futuros",
  "Documentacion tecnica para seguir aprendiendo",
].map((item) => ({ item, icon: CheckCircle2 }));
