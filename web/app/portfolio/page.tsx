import type { Metadata } from "next";
import { Arrow, Button } from "@/components/Button";
import { ChannelCard } from "@/components/ChannelCard";
import { ReelCard } from "@/components/ReelCard";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { CANALES, REELS } from "@/content/portfolio";
import { SOCIAL } from "@/content/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Reels, videos y trabajos de edición de DuckIA.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="container-site pb-16 pt-36 sm:pt-44">
        <Reveal>
          <p className="kicker">Portfolio</p>
          <h1 className="mt-5 max-w-[16ch] font-display text-[clamp(2.2rem,6vw,4.4rem)] font-bold leading-[1.04] tracking-[-0.02em]">
            Mirá lo que <span className="text-gold">hago</span>.
          </h1>
          <p className="mt-6 max-w-[48ch] text-ink-dim sm:text-lg">
            Tres videos para darte una idea. El resto vive en las cuentas, que se actualizan todas
            las semanas.
          </p>
        </Reveal>
      </section>

      <section className="container-site pb-24">
        <div className="grid gap-10 sm:grid-cols-3">
          {REELS.map((r, i) => (
            <Reveal key={r.id} delay={i * 0.08}>
              <ReelCard reel={r} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-24 sm:py-32">
        <div className="container-site">
          <SectionHead kicker="Más trabajos" title="Seguí viendo en las cuentas" />
          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {CANALES.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.05}>
                <ChannelCard canal={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-raised py-24">
        <div className="container-site flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <p className="kicker">Desarrollo web</p>
            <p className="mt-4 max-w-[22ch] font-display text-[clamp(1.7rem,3.4vw,2.7rem)] font-semibold leading-[1.15]">
              Los proyectos web están en mi portfolio de desarrollador
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href={SOCIAL.dev}>
              nicolasbarra.dev <Arrow />
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
