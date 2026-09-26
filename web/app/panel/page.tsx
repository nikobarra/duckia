import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panel",
  robots: { index: false, follow: false },
};

export default function PanelPage() {
  return (
    <section className="container-site flex min-h-[80dvh] flex-col justify-center pt-24">
      <p className="kicker">Panel</p>
      <h1 className="mt-5 font-display text-[clamp(1.7rem,3.4vw,2.7rem)] font-semibold">Próximamente</h1>
      <p className="mt-4 max-w-[44ch] text-ink-dim">
        Acá va a vivir el panel privado de DuckIA para gestionar clientes y trabajos.
      </p>
    </section>
  );
}
