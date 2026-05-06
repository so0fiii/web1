/*
 * Proxy de Next.js.
 *
 * Este archivo se ejecuta antes de que Next renderice una ruta que coincida con
 * `config.matcher`. Sirve para tareas ligeras como redirecciones, rewrites o
 * anadir cabeceras globales.
 */

/*
 * `NextResponse` representa la respuesta HTTP que Next.js enviara al navegador.
 * Usamos `NextResponse.next()` para decir: "continua con la ruta normal".
 */
import { NextResponse } from "next/server";

export function proxy() {
  /*
   * Creamos una respuesta que permite seguir al siguiente paso del pipeline de
   * Next.js. Despues le anadimos cabeceras de seguridad.
   */
  const response = NextResponse.next();

  /*
   * Evita que el navegador intente interpretar archivos como otro tipo MIME.
   * Es una cabecera sencilla de defensa contra algunos ataques de contenido.
   */
  response.headers.set("X-Content-Type-Options", "nosniff");

  /*
   * Impide que la web se cargue dentro de un iframe de otra pagina.
   * Ayuda a prevenir ataques de clickjacking.
   */
  response.headers.set("X-Frame-Options", "DENY");

  /*
   * Controla cuanta informacion de la URL anterior se envia al navegar.
   * `strict-origin-when-cross-origin` es un equilibrio razonable entre analitica
   * y privacidad.
   */
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

/*
 * Matcher del proxy.
 *
 * Aplica el proxy a casi todas las rutas, excepto archivos internos de Next,
 * imagenes optimizadas y favicon. Asi evitamos tocar assets que no lo necesitan.
 */
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
