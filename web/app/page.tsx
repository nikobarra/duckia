import { BrandMotion } from "@/components/BrandMotion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { WebShowcase } from "@/components/WebShowcase";
import { ReelRow } from "@/components/ReelRow";
import { REELS } from "@/content/portfolio";
import { WHATSAPP_DEFAULT } from "@/content/site";
export default function Home() {
  return (
    <>
      <section className="new-hero container-site">
        <div>
          <p className="kicker">DuckIA / Estudio digital independiente</p>
          <h1>
            Tu negocio.
            <br />
            Una presencia
            <br />
            <span>que se nota.</span>
          </h1>
          <p className="hero-description">
            Edito los videos que grabás y diseño la web de tu negocio. Con tu
            identidad, atención directa y una forma simple de trabajar.
          </p>
          <div className="hero-actions">
            <Button href="/desarrollo-web" variant="solid">
              Quiero una web ↗
            </Button>
            <Button href="/edicion-de-video">Quiero editar mis videos</Button>
          </div>
          <p className="hero-note">Desde Balcarce. Trabajamos online.</p>
        </div>
        <div className="hero-art">
          <BrandMotion />
          <div className="art-caption">
            <span>Ideas que funcionan.</span>
            <span>01 / DUCKIA</span>
          </div>
        </div>
      </section>
      <section className="service-choice container-site">
        <Link href="/edicion-de-video">
          <span className="kicker">01 / Edición remota</span>
          <h2>
            Vos grabás.
            <br />
            Yo lo dejo listo.
          </h2>
          <p>
            Reels y shorts con la identidad de tu marca. Enviás tu material y
            recibís el video editado.
          </p>
          <span className="choice-link">Ver edición y precios ↗</span>
        </Link>
        <Link href="/desarrollo-web">
          <span className="kicker">02 / Desarrollo web</span>
          <h2>
            Tu propio lugar.
            <br />
            Hecho a tu medida.
          </h2>
          <p>
            Una web que presenta tu negocio, muestra tu trabajo y facilita que
            te contacten.
          </p>
          <span className="choice-link">Explorar desarrollo web ↗</span>
        </Link>
      </section>
      <WebShowcase />
      <section className="premium-section container-site">
        <div className="premium-heading">
          <div>
            <p className="kicker">Contenido real</p>
            <h2>
              El trabajo
              <br />
              <span>habla por sí mismo.</span>
            </h2>
          </div>
          <Button href="/edicion-de-video">Conocer el servicio ↗</Button>
        </div>
        <ReelRow
          reels={REELS.filter((r) => r.id === "elektra" || r.id === "pato")}
          cols={2}
        />
      </section>
      <section className="founder-compact container-site">
        <Image
          src="/img/founder.jpg"
          alt="Nicolás Barra, fundador de DuckIA"
          width={180}
          height={210}
        />
        <div>
          <p className="kicker">Hablás con quien lo hace</p>
          <h2>
            Soy Nicolás.
            <br />
            Tu proyecto lo trabajamos juntos.
          </h2>
          <p>
            Me ocupo del diseño, la edición y el desarrollo. Acordamos qué
            necesitás y revisamos las entregas con vos.
          </p>
          <Link href="/historia">Conocé mi historia ↗</Link>
        </div>
      </section>
      <section className="premium-contact container-site">
        <p className="kicker">Tu próximo paso</p>
        <h2>
          Hagamos que
          <br />
          <span>tu idea se vea.</span>
        </h2>
        <Button href={WHATSAPP_DEFAULT} variant="solid">
          Contame tu proyecto ↗
        </Button>
      </section>
    </>
  );
}
