import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { RiseText } from "./RiseText";

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
    <div className="max-w-3xl">
      <Reveal>
        <p className="kicker">{kicker}</p>
      </Reveal>
      <h2 className="mt-4 font-display text-[clamp(1.7rem,3.4vw,2.7rem)] font-semibold leading-[1.15] tracking-[-0.01em]">
        <RiseText>{title}</RiseText>
      </h2>
      {children && (
        <Reveal delay={0.15} className="mt-5 text-ink-dim sm:text-lg">
          {children}
        </Reveal>
      )}
    </div>
  );
}
