import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { CAPITULOS, NOTA_LATZINA_URL, ORIGEN_NOMBRE } from "@/content/historia";
import { WHATSAPP_DEFAULT } from "@/content/site";

export const metadata: Metadata = {
  title: "Mi historia",
  description:
    "De una Spectrum a los 8 años a fundar DuckIA: cinturones, consolas, tatuajes, un kiosco y cuatro años enseñando a programar.",
  alternates: { canonical: "/historia" },
};

export default function HistoriaPage() {
  return (
    <>
      <section className="container-site pb-20 pt-36 sm:pt-44">
        <div className="grid items-end gap-12 md:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            <p className="kicker">Mi historia</p>
            <h1 className="mt-5 font-display text-[clamp(2.2rem,6vw,4.4rem)] font-bold leading-[1.04] tracking-[-0.02em]">
              Siempre emprendí. <span className="text-gold">Siempre volví a la tecnología.</span>
            </h1>
            <p className="mt-6 max-w-[50ch] text-ink-dim sm:text-lg">
              Soy Nicolás Barra, fundador de DuckIA. Antes de hacer contenido para negocios, tuve los
              míos. Esta es la historia completa.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="cut-corner relative aspect-[4/5] overflow-hidden bg-raised">
              <Image
                src="/img/founder.jpg"
                alt="Nicolás Barra"
                fill
                priority
                sizes="(min-width: 768px) 30vw, 100vw"
                className="duotone object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-site pb-24">
        <ol className="relative border-l border-line">
          {CAPITULOS.map((c) => (
            <Reveal as="li" key={c.titulo} className="relative pb-16 pl-8 sm:pl-14">
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rotate-45 border-[1.5px] border-gold bg-bg"
              />
              <div className="grid gap-4 md:grid-cols-[13rem_1fr] md:gap-10">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-gold">{c.cuando}</p>
                <div>
                  <h2 className="font-display text-[clamp(1.3rem,2.4vw,1.8rem)] font-semibold leading-tight">
                    {c.titulo}
                  </h2>
                  <div className="mt-4 max-w-[62ch] space-y-4 text-ink-dim">
                    {c.texto.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>

                  {c.destacado === "escudo" && (
                    <figure className="mt-8 flex flex-col gap-6 border border-line bg-raised p-6 sm:flex-row sm:items-center">
                      <Image
                        src="/img/escudo-latzina.png"
                        alt="Escudo de la Escuela Técnica N° 35 D.E. 18 Ing. Eduardo Latzina"
                        width={160}
                        height={193}
                        className="h-auto w-32 shrink-0"
                      />
                      <figcaption className="text-sm text-ink-dim">
                        <span className="block font-mono text-[0.72rem] uppercase tracking-[0.14em] text-gold">
                          E.T. N° 35 D.E. 18 · Ing. Eduardo Latzina
                        </span>
                        <span className="mt-2 block">
                          El escudo que diseñamos en 2000 y que la escuela sigue usando.
                        </span>
                        {NOTA_LATZINA_URL ? (
                          <a
                            href={NOTA_LATZINA_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-block text-gold hover:text-gold-bright"
                          >
                            Leer la nota en la revista de la escuela
                          </a>
                        ) : (
                          <span className="mt-3 block text-ink-faint">
                            La nota en la revista de la escuela se publica pronto.
                          </span>
                        )}
                      </figcaption>
                    </figure>
                  )}

                  {c.destacado === "kiosco" && (
                    <div className="mt-8 inline-flex flex-col border border-gold/40 bg-gold/5 px-6 py-5">
                      <span className="font-display text-[clamp(2rem,5vw,3rem)] font-bold leading-none text-gold">
                        1,4 M
                      </span>
                      <span className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-dim">
                        visitas · el video del gorro de papel · 2022
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-t border-line bg-raised py-24 sm:py-32">
        <div className="container-site grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="kicker">Por qué DuckIA</p>
            <p className="mt-5 font-display text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.05]">
              Yo tengo <span className="text-gold">un pato</span>.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg text-ink-dim">
            {ORIGEN_NOMBRE.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="container-site py-28 text-center">
        <Reveal>
          <p className="mx-auto max-w-[22ch] font-display text-[clamp(1.7rem,3.4vw,2.7rem)] font-semibold leading-[1.15]">
            Ahora quiero ayudar <span className="text-gold">a tu negocio</span>.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={WHATSAPP_DEFAULT} variant="solid">
              Escribime por WhatsApp
            </Button>
            <Button href="/servicios">Ver servicios</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
