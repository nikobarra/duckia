import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ReelRow } from "@/components/ReelRow";
import { REELS } from "@/content/portfolio";
import { whatsappLink } from "@/content/site";
export const metadata: Metadata = {
  title: "Edición de video",
  description:
    "Edición remota de reels y shorts con la identidad de tu marca. Videos individuales y packs mensuales.",
  alternates: { canonical: "/edicion-de-video" },
};
export default function Page() {
  return (
    <>
      <section className="service-intro container-site">
        <p className="kicker">Edición remota / Reels y shorts</p>
        <h1>
          Vos grabás.
          <br />
          <span>Yo lo dejo listo para publicar.</span>
        </h1>
        <p>
          Mandame tus videos y los edito con la identidad de tu marca: cortes,
          color, subtítulos, animaciones y sonido.
        </p>
        <Button
          href={whatsappLink("Hola Nicolás, quiero editar mis videos")}
          variant="solid"
        >
          Consultar por edición ↗
        </Button>
      </section>
      <section className="service-choice container-site">
        <article>
          <p className="kicker">Por pieza</p>
          <h2>
            $15.000 <small>ARS</small>
          </h2>
          <p>
            Un reel o short de hasta 60 segundos. Incluye una ronda de cambios.
          </p>
        </article>
        <article>
          <p className="kicker">Pack mensual</p>
          <h2>
            $150.000 <small>ARS</small>
          </h2>
          <p>
            12 videos al mes, de hasta 60 segundos cada uno. Una ronda de
            cambios por pieza.
          </p>
        </article>
      </section>
      <section className="premium-section container-site">
        <div className="premium-heading">
          <h2>
            Material real.
            <br />
            <span>Identidad propia.</span>
          </h2>
        </div>
        <ReelRow
          reels={REELS.filter((r) => r.id === "elektra" || r.id === "pato")}
          cols={2}
        />
        <p className="scope-note">
          Antes de empezar revisamos el material y acordamos el tratamiento y la
          fecha de entrega. Publicación y gestión de redes se cotizan aparte.
        </p>
      </section>
    </>
  );
}
