"use client";

import { useRef, useState } from "react";
import type { Reel } from "@/content/portfolio";

export function ReelCard({ reel }: { reel: Reel }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      document.querySelectorAll("video[data-reel]").forEach((other) => {
        if (other !== v) (other as HTMLVideoElement).pause();
      });
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  };

  return (
    <figure className="group">
      <div className="cut-corner relative aspect-[9/16] overflow-hidden bg-raised">
        <video
          ref={ref}
          data-reel
          src={reel.src}
          poster={reel.poster}
          preload="none"
          playsInline
          controls={playing}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          className="h-full w-full object-cover"
        />
        {!playing && (
          <button
            type="button"
            onClick={toggle}
            aria-label={`Reproducir: ${reel.titulo}`}
            className="absolute inset-0 flex items-center justify-center bg-bg/20 transition-colors duration-300 group-hover:bg-bg/0"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border-[1.5px] border-gold bg-bg/60 backdrop-blur-sm transition-transform duration-300 ease-[var(--ease-fold)] group-hover:scale-110">
              <svg width="18" height="20" viewBox="0 0 18 20" aria-hidden="true">
                <path d="M2 1.5L16 10L2 18.5V1.5Z" fill="#d9b06a" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-4">
        <p className="font-display text-[1.08rem] font-semibold">{reel.titulo}</p>
        <p className="mt-1 text-sm text-ink-dim">{reel.bajada}</p>
      </figcaption>
    </figure>
  );
}
