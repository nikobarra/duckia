import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { WebShowcase } from "@/components/WebShowcase";
import { WebInquiry } from "@/components/WebInquiry";
export const metadata: Metadata = {
  title: "Desarrollo web",
  description:
    "Diseño y desarrollo web para negocios y profesionales. Mirá un proyecto real y contame qué necesitás.",
  alternates: { canonical: "/desarrollo-web" },
};
export default function Page() {
  return (
    <>
      <section className="service-intro container-site">
        <p className="kicker">Diseño + desarrollo web</p>
        <h1>
          Una web que se sienta
          <br />
          <span>tan tuya como tu negocio.</span>
        </h1>
        <p>
          Tu identidad, tus servicios y tus trabajos, en un lugar propio.
          Diseñamos el recorrido para que conocerte y consultarte sea fácil.
        </p>
        <Button href="#consulta" variant="solid">
          Contame qué tenés en mente ↗
        </Button>
      </section>
      <WebShowcase />
      <section className="premium-section container-site">
        <p className="kicker">Un punto de partida para cada negocio</p>
        <div className="web-options">
          {[
            [
              "01",
              "Una oferta clara",
              "Una página enfocada en presentar un servicio y recibir consultas.",
            ],
            [
              "02",
              "Tu negocio completo",
              "Un sitio con espacio para servicios, trabajos, historia y contacto.",
            ],
            [
              "03",
              "Tu catálogo",
              "Productos organizados para explorar y consultar. Definimos juntos las funciones necesarias.",
            ],
          ].map(([n, t, d]) => (
            <article key={n}>
              <span>{n}</span>
              <h2>{t}</h2>
              <p>{d}</p>
            </article>
          ))}
        </div>
        <p className="scope-note">
          Cada proyecto se presupuesta según su alcance. Antes de empezar
          acordamos páginas, contenidos, revisiones y fechas.
        </p>
      </section>
      <section className="premium-section container-site">
        <div className="premium-heading">
          <h2>
            Del primer mensaje
            <br />
            <span>a tu web publicada.</span>
          </h2>
        </div>
        <div className="web-options">
          {[
            [
              "01",
              "Entender",
              "Conversamos sobre tu negocio, tu público y lo que necesitás mostrar.",
            ],
            [
              "02",
              "Diseñar",
              "Ordenamos los contenidos y revisamos una propuesta visual.",
            ],
            [
              "03",
              "Construir y entregar",
              "Desarrollamos, probamos en celular y computadora y coordinamos la publicación.",
            ],
          ].map(([n, t, d]) => (
            <article key={n}>
              <span>{n}</span>
              <h2>{t}</h2>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="premium-section container-site faq">
        <p className="kicker">Antes de empezar</p>
        {[
          [
            "¿Qué incluye el presupuesto?",
            "Detallamos las páginas, funciones, contenidos, revisiones y entregas de tu proyecto. Así sabés qué estás contratando.",
          ],
          [
            "¿Dominio y alojamiento están incluidos?",
            "Los especificamos por separado en la propuesta, junto con sus costos y renovaciones. También revisamos qué servicios ya tenés.",
          ],
          [
            "¿Y si todavía no tengo textos o fotos?",
            "Lo conversamos al definir el alcance. Identificamos qué material podés aportar y qué hace falta preparar.",
          ],
          [
            "¿Puedo pedir cambios después?",
            "Sí, podemos presupuestar actualizaciones o mantenimiento. Las condiciones y revisiones incluidas se acuerdan antes de comenzar.",
          ],
        ].map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <span>+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </section>
      <section
        className="premium-section container-site inquiry-grid"
        id="consulta"
      >
        <div>
          <p className="kicker">Empecemos por tu idea</p>
          <h2>
            Contame qué
            <br />
            <span>querés construir.</span>
          </h2>
          <p>
            Te respondo personalmente para entender el proyecto y preparar una
            propuesta.
          </p>
        </div>
        <WebInquiry />
      </section>
    </>
  );
}
