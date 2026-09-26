import Image from "next/image";
import Link from "next/link";
import { Arrow, Button } from "@/components/Button";
import { HeroFold } from "@/components/HeroFold";
import { Marquee } from "@/components/Marquee";
import { ReelCard } from "@/components/ReelCard";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { REELS } from "@/content/portfolio";
import { SERVICIOS } from "@/content/servicios";
import { WHATSAPP_DEFAULT } from "@/content/site";

export default function Home() {
  return (
    <>
      <HeroFold />

      <section className="container-site py-24 sm:py-32">
        <Reveal>
          <p className="max-w-[26ch] font-display text-[clamp(1.6rem,4vw,3rem)] font-semibold leading-[1.15] tracking-[-0.01em]">
            Hice cinturones que salían en la tele, tuve un local de consolas, un estudio de tatuajes y un kiosco.{" "}
            <span className="text-gold">Sé lo que es tener un negocio y no llegar a todo.</span>
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <Link href="/historia" className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-gold hover:text-gold-bright">
            Leer mi historia <Arrow />
          </Link>
        </Reveal>
      </section>

      <Marquee />

      <section className="container-site py-24 sm:py-32">
        <SectionHead kicker="Servicios" title="Todo lo que tu negocio necesita para que lo vean">
          Cada negocio necesita algo distinto: armamos la combinación justa, por trabajo o por mes.
        </SectionHead>
        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05} className="fold-card flex flex-col bg-raised p-8 sm:p-10">
              <span className="font-mono text-[0.72rem] tracking-[0.14em] text-gold">{s.numero}</span>
              <h3 className="mt-6 font-display text-[1.2rem] font-semibold">{s.titulo}</h3>
              <p className="mt-3 text-ink-dim">{s.resumen}</p>
            </Reveal>
          ))}
          <Reveal className="flex flex-col justify-between gap-8 bg-gold p-8 text-[#0c0a06] sm:p-10">
            <p className="font-display text-[1.2rem] font-semibold">¿No sabés por dónde empezar?</p>
            <Link href="/servicios" className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.14em]">
              Ver todos los servicios <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-24 sm:py-32">
        <div className="container-site">
          <SectionHead kicker="Portfolio" title="Videos hechos por DuckIA" />
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {REELS.map((r, i) => (
              <Reveal key={r.id} delay={i * 0.08}>
                <ReelCard reel={r} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Button href="/portfolio">Ver más trabajos</Button>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-24 sm:py-32">
        <div className="container-site grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative">
            <div className="cut-corner relative aspect-[4/5] overflow-hidden bg-raised">
              <Image
                src="/img/founder.jpg"
                alt="Nicolás Barra, fundador de DuckIA"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="duotone object-cover"
              />
            </div>
          </Reveal>
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
        <div className="container-site flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <p className="kicker">El libro</p>
            <p className="mt-4 font-display text-[clamp(1.7rem,3.4vw,2.7rem)] font-semibold leading-[1.15]">
              Sistema, no timba
            </p>
            <p className="mt-3 max-w-[48ch] text-ink-dim">
              Marketing digital para negocios chicos en un país que cambia de precios cada dos meses.
              El capítulo 1 es gratis.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/libro">Ver el libro</Button>
          </Reveal>
        </div>
      </section>

      <section className="container-site py-28 text-center sm:py-36">
        <Reveal>
          <p className="kicker justify-center">Contacto</p>
          <p className="mx-auto mt-6 max-w-[20ch] font-display text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.02em]">
            Contame qué necesita <span className="text-gold">tu negocio</span>.
          </p>
          <p className="mx-auto mt-6 max-w-[44ch] text-ink-dim">
            Te respondo yo. Vemos qué te sirve y te paso un presupuesto sin compromiso.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href={WHATSAPP_DEFAULT} variant="solid">
              Escribime por WhatsApp
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
