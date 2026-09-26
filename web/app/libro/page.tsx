import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { LIBRO } from "@/content/libro";
import { SITE_URL } from "@/content/site";

export const metadata: Metadata = {
  title: "Sistema, no timba · el libro",
  description:
    "Guía de marketing digital para negocios chicos en Argentina: 13 capítulos y 4 casos reales. Capítulo 1 gratis.",
  alternates: { canonical: "/libro" },
  openGraph: { images: [{ url: "/libro/og-libro.jpg", width: 1200, height: 630 }] },
};

export const revalidate = 3600;

const pesos = (n: number) => `$${n.toLocaleString("es-AR")}`;

export default function LibroPage() {
  const enLanzamiento = new Date() <= new Date(`${LIBRO.finLanzamiento}T23:59:59-03:00`);
  const precio = enLanzamiento ? LIBRO.precioLanzamiento : LIBRO.precioRegular;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: LIBRO.titulo,
    bookFormat: "https://schema.org/EBook",
    numberOfPages: LIBRO.paginas,
    inLanguage: "es-AR",
    author: { "@type": "Person", name: "Nicolás Barra" },
    publisher: { "@type": "Organization", name: "DuckIA", url: SITE_URL },
    url: `${SITE_URL}/libro`,
    image: `${SITE_URL}/libro/og-libro.jpg`,
    offers: { "@type": "Offer", price: String(precio), priceCurrency: "ARS", availability: "https://schema.org/InStock" },
  };

  return (
    <>
      <section className="container-site pb-20 pt-36 sm:pt-44">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="kicker">{LIBRO.kicker}</p>
            <h1 className="mt-5 font-display text-[clamp(2.4rem,7vw,5rem)] font-bold leading-[1.02] tracking-[-0.02em]">
              Sistema, <span className="text-gold">no timba</span>.
            </h1>
            <p className="mt-6 max-w-[40ch] text-lg">{LIBRO.bajada}</p>
            <p className="mt-4 max-w-[52ch] text-ink-dim">{LIBRO.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={LIBRO.ctaCapitulo} variant="solid">
                Pedí el capítulo 1 gratis
              </Button>
              <Button href={LIBRO.ctaComprar}>Comprar el libro · {pesos(precio)}</Button>
            </div>
            {enLanzamiento && (
              <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-faint">
                Precio de lanzamiento hasta el 30/9 · después {pesos(LIBRO.precioRegular)}
              </p>
            )}
          </Reveal>
          <Reveal delay={0.1}>
            <div className="cut-corner relative aspect-[1200/630] overflow-hidden border border-line">
              <Image src="/libro/og-libro.jpg" alt="Sistema, no timba" fill priority sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
            </div>
            <blockquote className="mt-6 border-l-2 border-gold pl-5 font-display text-[1.08rem] font-semibold leading-snug">
              «{LIBRO.cita}»
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-24">
        <div className="container-site">
          <SectionHead kicker="El problema" title="Tips sueltos no son un sistema" />
          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
            <Reveal className="bg-bg p-8 sm:p-10">
              <p className="kicker">Como veníamos</p>
              <p className="mt-4 text-ink-dim">{LIBRO.problema.antes}</p>
            </Reveal>
            <Reveal delay={0.08} className="bg-raised p-8 sm:p-10">
              <p className="kicker">Con este libro</p>
              <p className="mt-4">{LIBRO.problema.despues}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-24">
        <div className="container-site">
          <SectionHead kicker="Qué hay adentro" title="Cuatro partes, trece capítulos" />
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {LIBRO.partes.map((p, i) => (
              <Reveal key={p.nombre} delay={i * 0.05} className="fold-card bg-raised p-8">
                <span className="font-mono text-[0.72rem] tracking-[0.14em] text-gold">{p.caps}</span>
                <h3 className="mt-5 font-display text-[1.08rem] font-semibold">{p.nombre}</h3>
                <p className="mt-3 text-sm text-ink-dim">{p.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-24">
        <div className="container-site">
          <SectionHead kicker="Cuatro casos reales" title="Negocios que se parecen al tuyo" />
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {LIBRO.casos.map((c, i) => (
              <Reveal key={c.nombre} delay={i * 0.05} className="border-t border-gold/40 pt-6">
                <p className="font-display text-[1.2rem] font-semibold">
                  {c.nombre} <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-gold">· {c.rubro}</span>
                </p>
                <p className="mt-3 text-ink-dim">{c.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-gold py-24 text-[#0c0a06]">
        <div className="container-site grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em]">Probalo antes de comprar</p>
            <p className="mt-4 font-display text-[clamp(1.7rem,3.4vw,2.7rem)] font-bold leading-[1.1]">
              Te mando el capítulo 1 completo, gratis
            </p>
            <p className="mt-4 max-w-[52ch]">{LIBRO.capitulo1}</p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col items-start gap-3">
            <a
              href={LIBRO.ctaCapitulo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-bg px-7 py-4 font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              Pedirlo por WhatsApp
            </a>
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em]">Sin formularios · sin newsletter automática</span>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site grid gap-14 md:grid-cols-2">
          <Reveal>
            <p className="kicker">El libro completo</p>
            <p className="mt-5 font-display text-[clamp(2.4rem,6vw,4rem)] font-bold leading-none">{pesos(precio)}</p>
            <p className="mt-4 max-w-[40ch] text-ink-dim">
              PDF de {LIBRO.paginas} páginas, listo para leer en el celular o imprimir.
            </p>
            <div className="mt-8">
              <Button href={LIBRO.ctaComprar} variant="solid">
                Comprarlo por WhatsApp
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="kicker">Preguntas</p>
            <dl className="mt-5 divide-y divide-line border-y border-line">
              {LIBRO.faq.map((f) => (
                <div key={f.q} className="py-5">
                  <dt className="font-display text-[1.08rem] font-semibold">{f.q}</dt>
                  <dd className="mt-2 text-ink-dim">{f.a}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
