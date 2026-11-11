import type { Reel } from "@/content/portfolio";
import { ReelCard } from "./ReelCard";
import { Reveal } from "./Reveal";

/**
 * En celular es una fila que se desliza con el dedo (el video siguiente asoma);
 * desde 640 px vuelve a ser una grilla.
 */
export function ReelRow({ reels, cols }: { reels: Reel[]; cols: 3 | 4 }) {
  return (
    <div
      className={`reel-row -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-10 sm:overflow-visible sm:px-0 sm:pb-0 ${
        cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
      }`}
    >
      {reels.map((r, i) => (
        <Reveal key={r.id} delay={i * 0.08} className="w-[74vw] shrink-0 snap-center sm:w-auto">
          <ReelCard reel={r} />
        </Reveal>
      ))}
    </div>
  );
}
