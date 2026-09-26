import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHead({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <Reveal className="max-w-3xl">
      <p className="kicker">{kicker}</p>
      <h2 className="mt-4 font-display text-[clamp(1.7rem,3.4vw,2.7rem)] font-semibold leading-[1.15] tracking-[-0.01em]">
        {title}
      </h2>
      {children && <div className="mt-5 text-ink-dim sm:text-lg">{children}</div>}
    </Reveal>
  );
}
