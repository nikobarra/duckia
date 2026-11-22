import Image from "next/image";
import { Button } from "./Button";

type Caso = {
  id: string;
  dominio: string;
  url: string;
  titulo: string;
  bajada: string;
  etiquetas: string;
  imagen?: { src: string; width: number; height: number; alt: string };
  video?: { src: string; poster: string; label: string };
};

const CASOS: Caso[] = [
  {
    id: "donsticker",
    dominio: "donsticker.com.ar",
    url: "https://www.donsticker.com.ar/",
    titulo: "Don Sticker · Tienda online",
    bajada:
      "Mi otro emprendimiento: catálogo de 1.217 diseños, precios que bajan con la cantidad, pago con Mercado Pago o transferencia, envíos a todo el país y un panel para manejar los pedidos.",
    etiquetas: "Tienda online · Mercado Pago · Panel de pedidos · Analíticas",
    video: {
      src: "/casos/donsticker-web.mp4",
      poster: "/casos/donsticker-web.jpg",
      label: "Recorrido por la tienda de Don Sticker: catálogo, carrito, pago con Mercado Pago y panel de pedidos",
    },
  },
  {
    id: "melisa",
    dominio: "melisantoianni.com",
    url: "https://melisantoianni.com/",
    titulo: "Melisa Santoianni · Coaching",
    bajada:
      "Una presencia propia para presentar sus servicios y conectar con quienes buscan acompañamiento.",
    etiquetas: "Diseño web · Identidad visual · Presentación de servicios",
    imagen: {
      src: "/casos/melisa-web.webp",
      width: 1568,
      height: 699,
      alt: "Vista del sitio de Melisa Santoianni",
    },
  },
];

export function WebShowcase() {
  return (
    <section className="premium-section container-site" id="trabajo-web">
      <div className="premium-heading">
        <div>
          <p className="kicker">Proyectos reales</p>
          <h2>
            Una identidad que
            <br />
            <span>también se navega.</span>
          </h2>
        </div>
        <p>
          Desde una web para presentar servicios hasta una tienda que cobra con
          Mercado Pago y tiene su propio panel.
        </p>
      </div>
      <div className="web-cases">
        {CASOS.map((c) => (
          <article key={c.id} className="web-case">
            <div className="browser-shell">
              <div className="browser-bar">
                <span>● ● ●</span>
                <span>{c.dominio}</span>
                <span>↗</span>
              </div>
              {c.video ? (
                <video
                  className="web-case-image"
                  src={c.video.src}
                  poster={c.video.poster}
                  aria-label={c.video.label}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                />
              ) : c.imagen ? (
                <Image
                  src={c.imagen.src}
                  width={c.imagen.width}
                  height={c.imagen.height}
                  unoptimized
                  alt={c.imagen.alt}
                  className="web-case-image"
                />
              ) : null}
            </div>
            <div className="case-bottom">
              <div>
                <h3 className="web-case-title">{c.titulo}</h3>
                <p className="web-case-text">{c.bajada}</p>
                <p>{c.etiquetas}</p>
              </div>
              <Button href={c.url}>Explorar el sitio real ↗</Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
