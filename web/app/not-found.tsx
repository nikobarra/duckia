import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[80dvh] flex-col justify-center pt-24">
      <p className="kicker">404</p>
      <h1 className="mt-5 max-w-[18ch] font-display text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.08]">
        Esta página se la llevó <span className="text-gold">el pato</span>.
      </h1>
      <div className="mt-8">
        <Button href="/">Volver al inicio</Button>
      </div>
    </section>
  );
}
