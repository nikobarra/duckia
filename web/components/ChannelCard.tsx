import type { Canal } from "@/content/portfolio";
import { Arrow } from "./Button";

export function ChannelCard({ canal }: { canal: Canal }) {
  return (
    <div className="fold-card flex h-full flex-col justify-between gap-10 bg-raised p-8 transition-colors duration-300 hover:bg-raised-2">
      <p className="kicker">{canal.etiqueta}</p>
      <div>
        <p className="font-display text-[clamp(1.2rem,2vw,1.5rem)] font-semibold break-all">{canal.handle}</p>
        <p className="mt-2 text-sm text-ink-dim">{canal.texto}</p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {canal.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${canal.handle} en ${l.red}`}
              className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-gold transition-colors hover:text-gold-bright"
            >
              {l.red} <Arrow />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
