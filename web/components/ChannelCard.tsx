import type { Canal } from "@/content/portfolio";
import { Arrow } from "./Button";

export function ChannelCard({ canal }: { canal: Canal }) {
  return (
    <a
      href={canal.href}
      target="_blank"
      rel="noopener noreferrer"
      className="fold-card group flex h-full flex-col justify-between gap-10 bg-raised p-8 transition-colors duration-300 hover:bg-raised-2"
    >
      <p className="kicker">{canal.red}</p>
      <div>
        <p className="font-display text-[clamp(1.2rem,2vw,1.5rem)] font-semibold break-all transition-colors group-hover:text-gold">
          {canal.handle}
        </p>
        <p className="mt-2 text-sm text-ink-dim">{canal.texto}</p>
        <p className="mt-6 inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-gold">
          Ver cuenta <Arrow />
        </p>
      </div>
    </a>
  );
}
