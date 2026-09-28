import type { Canal } from "@/content/portfolio";
import { Arrow } from "./Button";

const linkClass =
  "inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-gold transition-colors hover:text-gold-bright";

export function ChannelCard({ canal }: { canal: Canal }) {
  return (
    <div className="fold-card flex h-full flex-col justify-between gap-10 bg-raised p-8 transition-colors duration-300 hover:bg-raised-2">
      <p className="kicker">{canal.etiqueta}</p>
      <div>
        <p className="font-display text-[clamp(1.2rem,2vw,1.5rem)] font-semibold break-all">{canal.handle}</p>
        <p className="mt-2 text-sm text-ink-dim">{canal.texto}</p>

        {canal.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {canal.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${canal.handle}: ${l.red}`}
                className={linkClass}
              >
                {l.red} <Arrow />
              </a>
            ))}
          </div>
        )}

        {canal.cuentas && (
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {canal.cuentas.map((c) => (
              <li key={c.nombre} className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3">
                <span className="font-display text-[1.08rem] font-semibold">{c.nombre}</span>
                <span className="flex flex-wrap gap-x-5 gap-y-1">
                  {c.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${c.nombre}: ${l.red}`}
                      className={linkClass}
                    >
                      {l.red} <Arrow />
                    </a>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
