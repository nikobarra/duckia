import Link from "next/link";
import { SERVICIOS } from "@/content/servicios";
import { Arrow } from "./Button";
import { Reveal } from "./Reveal";

const GIROS = ["-0.9deg", "0.6deg", "-0.4deg", "0.8deg", "-0.6deg"];

/** Los servicios como hojas pegadas con cinta. Pensado para ir dentro de una sección `.paper`. */
export function ServiceSheets() {
  return (
    <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICIOS.map((s, i) => (
        <Reveal key={s.id} delay={i * 0.05}>
          <article className="sheet relative flex h-full flex-col bg-raised p-8 sm:p-9" style={{ rotate: GIROS[i % GIROS.length] }}>
            <span className="tape" aria-hidden="true" />
            <span className="relative flex h-12 w-12 items-center justify-center font-mono text-[0.85rem] font-medium">
              <svg className="absolute inset-0" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M25 5c11-2 19 5 19 17S36 43 23 43 4 34 5 22 12 6 27 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              {s.numero}
            </span>
            <h3 className="mt-5 font-display text-[1.2rem] font-semibold">{s.titulo}</h3>
            <p className="mt-3 text-ink-dim">{s.resumen}</p>
          </article>
        </Reveal>
      ))}
      <Reveal>
        <div className="sheet relative flex h-full flex-col justify-between gap-8 p-8 sm:p-9" style={{ background: "var(--pato)", rotate: "0.5deg" }}>
          <p className="font-display text-[1.2rem] font-semibold">¿No sabés por dónde empezar?</p>
          <Link href="/servicios" className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.14em]">
            Ver todos los servicios <Arrow />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
