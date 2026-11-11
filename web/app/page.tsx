import Image from "next/image";
import Link from "next/link";
import { Arrow, Button } from "@/components/Button";
import { HeroFold } from "@/components/HeroFold";
import { Marquee } from "@/components/Marquee";
import { BeforeAfter } from "@/components/BeforeAfter";
import { BookTilt } from "@/components/BookTilt";
import { Pato } from "@/components/Pato";
import { ReelRow } from "@/components/ReelRow";
import { RiseText } from "@/components/RiseText";
import { Unfold } from "@/components/Unfold";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { ServiceSheets } from "@/components/ServiceSheets";
import { REELS } from "@/content/portfolio";
import { WHATSAPP_DEFAULT } from "@/content/site";

export default function Home() {
  return (
    <>
      <HeroFold />

      <section className="py-24 sm:py-32">
        <div className="container-site">
          <SectionHead kicker="Portfolio" title="Videos hechos por DuckIA" />
          <div className="mt-14">
            <ReelRow reels={REELS.slice(0, 4)} cols={4} />
          </div>
          <Reveal className="mt-12">
            <Button href="/portfolio">Ver más trabajos</Button>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-24 sm:py-32">
        <div className="container-site grid items-center gap-14 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="mx-auto w-full max-w-[22rem]">
            <BeforeAfter base="/videos/antes-despues/ositos" labelAntes="Así llegó" labelDespues="Así salió" />
          </Reveal>
          <div>
            <SectionHead kicker="Antes y después" title="Grabás con el celular. Del resto me ocupo yo.">
              <p>
                Este video lo grabó la dueña del Maxikiosco La 21 en su local y me lo mandó por WhatsApp.
                Arrastrá la barra para comparar lo que llegó con lo que le devolví.
              </p>
            </SectionHead>
            <Reveal delay={0.2}>
              <ul className="mt-8 flex max-w-xl flex-wrap gap-1.5" aria-label="Lo que se le hizo en la edición">
                {(REELS.find((r) => r.id === "maxikiosco-ositos")?.tratamiento ?? []).map((t) => (
                  <li key={t} className="border border-line px-2 py-0.5 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-dim">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-site pb-24 sm:pb-32">
        <p className="max-w-[26ch] font-display text-[clamp(1.6rem,4vw,3rem)] font-semibold leading-[1.15] tracking-[-0.01em]">
          <RiseText>
            Hice cinturones que salían en la tele, tuve un local de consolas, un estudio de tatuajes y un kiosco.{" "}
            <span className="text-gold">Sé lo que es tener un negocio y no llegar a todo.</span>
          </RiseText>
        </p>
        <Reveal delay={0.1} className="mt-8">
          <Link href="/historia" className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-gold hover:text-gold-bright">
            Leer mi historia <Arrow />
          </Link>
        </Reveal>
      </section>

      <Marquee />

      <section className="paper py-24 sm:py-32">
        <div className="container-site">
          <SectionHead
            kicker="Servicios"
            title={
              <>
                Todo lo que tu negocio necesita para que <span className="text-gold">lo vean</span>
              </>
            }
          >
            Cada negocio necesita algo distinto: armamos la combinación justa, por trabajo o por mes.
          </SectionHead>
          <div className="mt-16">
            <ServiceSheets />
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-site grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <Unfold className="relative aspect-[4/5] overflow-hidden bg-raised">
            <Image
              src="/img/founder.jpg"
              alt="Nicolás Barra, fundador de DuckIA"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="duotone object-cover"
            />
          </Unfold>
          <div>
            <SectionHead
              kicker="Quién está del otro lado"
              title={
                <>
                  Fui el del mostrador. <span className="text-gold">Ahora hago el contenido.</span>
                </>
              }
            >
              <p>
                Programo desde los 8 años y di clases de programación durante cuatro años. Pero antes que
                nada fui comerciante: en el kiosco grabé, con un gorro de papel, un video que pasó el
                millón de visitas.
              </p>
            </SectionHead>
            <Reveal className="mt-8 flex flex-wrap gap-3">
              <Button href="/historia">Conocé la historia completa</Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-raised py-24 sm:py-28">
        <div className="container-site grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <p className="kicker">El libro</p>
            <p className="mt-4 font-display text-[clamp(1.7rem,3.4vw,2.7rem)] font-semibold leading-[1.15]">
              Sistema, no timba
            </p>
            <p className="mt-3 max-w-[48ch] text-ink-dim">
              Marketing digital para negocios chicos en un país que cambia de precios cada dos meses.
              El capítulo 1 es gratis.
            </p>
            <div className="mt-8">
              <Button href="/libro">Ver el libro</Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex justify-center md:justify-end">
            <BookTilt />
          </Reveal>
        </div>
      </section>

      <section className="paper py-28 text-center sm:py-36">
        <div className="container-site">
        <Reveal>
          <p className="kicker justify-center">Contacto</p>
          <p className="mx-auto mt-6 max-w-[20ch] font-display text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.02em]">
            <RiseText delay={0.1}>
              Contame qué necesita <span className="text-gold">tu negocio.</span>
            </RiseText>
          </p>
          <p className="mx-auto mt-6 max-w-[44ch] text-ink-dim">
            Te respondo yo. Vemos qué te sirve y te paso un presupuesto sin compromiso.
          </p>
          <div className="mt-6 flex flex-col items-center">
            <Pato nombre="comenta" size={170} />
            <Button href={WHATSAPP_DEFAULT} variant="solid">
              Escribime por WhatsApp
            </Button>
          </div>
        </Reveal>
        </div>
      </section>
    </>
  );
}
