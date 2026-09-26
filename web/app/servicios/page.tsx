import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { MODALIDAD, PROCESO, SERVICIOS } from "@/content/servicios";
import { whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Grabación de Reels y videos largos, edición de video y sonido, gestión de redes, desarrollo web y diseño para negocios.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <section className="container-site pb-16 pt-36 sm:pt-44">
        <Reveal>
          <p className="kicker">Servicios</p>
          <h1 className="mt-5 max-w-[18ch] font-display text-[clamp(2.2rem,6vw,4.4rem)] font-bold leading-[1.04] tracking-[-0.02em]">
            Hecho a la medida <span className="text-gold">de tu negocio</span>.
          </h1>
          <p className="mt-6 max-w-[52ch] text-ink-dim sm:text-lg">
            Los servicios cambian según lo que necesites. Estos son los bloques con los que trabajo;
            los combinamos por proyecto o como servicio mensual.
          </p>
        </Reveal>
      </section>

      <section className="container-site pb-24">
        <div className="border-t border-line">
          {SERVICIOS.map((s) => (
            <Reveal
              key={s.id}
              as="article"
              className="grid gap-6 border-b border-line py-12 md:grid-cols-[6rem_1fr_1fr] md:gap-10"
            >
              <span className="font-mono text-[0.72rem] tracking-[0.14em] text-gold">{s.numero}</span>
              <div>
                <h2 id={s.id} className="scroll-mt-28 font-display text-[clamp(1.4rem,2.6vw,2rem)] font-semibold leading-tight">
                  {s.titulo}
                </h2>
                <p className="mt-4 max-w-[42ch] text-ink-dim">{s.resumen}</p>
              </div>
              <div className="flex flex-col justify-between gap-8">
                <ul className="space-y-3">
                  {s.incluye.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Button href={whatsappLink(`Hola DuckIA, quiero un presupuesto de ${s.titulo.toLowerCase()}`)}>
                    Pedí tu presupuesto
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-raised py-24 sm:py-32">
        <div className="container-site">
          <SectionHead kicker="Cómo trabajamos" title="Cuatro pasos, sin vueltas" />
          <ol className="mt-14 grid gap-px border border-line bg-line md:grid-cols-4">
            {PROCESO.map((p, i) => (
              <Reveal as="li" key={p.titulo} delay={i * 0.06} className="bg-bg p-8">
                <span
                  className="flex h-10 w-10 items-center justify-center bg-gold font-mono text-sm text-[#0c0a06]"
                  style={{ clipPath: "polygon(50% 0, 100% 38%, 82% 100%, 18% 100%, 0 38%)" }}
                >
                  {i + 1}
                </span>
                <h3 className="mt-6 font-display text-[1.08rem] font-semibold">{p.titulo}</h3>
                <p className="mt-3 text-sm text-ink-dim">{p.texto}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-site grid gap-px py-24 sm:py-32 md:grid-cols-2">
        <Reveal className="border border-line p-8 sm:p-10">
          <p className="kicker">Presencial</p>
          <p className="mt-5 text-lg">{MODALIDAD.presencial}</p>
        </Reveal>
        <Reveal delay={0.08} className="border border-line p-8 sm:p-10">
          <p className="kicker">Virtual</p>
          <p className="mt-5 text-lg">{MODALIDAD.virtual}</p>
        </Reveal>
      </section>

      <section className="container-site pb-28 text-center">
        <Reveal>
          <p className="mx-auto max-w-[22ch] font-display text-[clamp(1.7rem,3.4vw,2.7rem)] font-semibold leading-[1.15]">
            ¿Querés saber cuánto sale lo tuyo?
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={whatsappLink("Hola DuckIA, quiero pedir un presupuesto")} variant="solid">
              Pedí tu presupuesto
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
