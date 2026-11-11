"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";

type Props = {
  /** Ruta sin extensión: se usan `${base}-antes.mp4|jpg` y `${base}-despues.mp4|jpg`, del mismo largo y sincronizados. */
  base: string;
  labelAntes: string;
  labelDespues: string;
};

/** Comparador con barra: a la izquierda el material como llegó, a la derecha el reel terminado. Los dos videos corren a la par. */
export function BeforeAfter({ base, labelAntes, labelDespues }: Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLVideoElement>(null);
  const beforeRef = useRef<HTMLVideoElement>(null);
  const [pos, setPos] = useState(50);

  useEffect(() => {
    const box = boxRef.current;
    const after = afterRef.current;
    const before = beforeRef.current;
    if (!box || !after || !before) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduce || saveData) return;

    // El terminado manda; el crudo se corrige si se desfasa más de una décima.
    const sync = () => {
      if (Math.abs(before.currentTime - after.currentTime) > 0.1) before.currentTime = after.currentTime;
    };
    after.addEventListener("timeupdate", sync);
    after.addEventListener("seeked", sync);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          after.play().catch(() => {});
          before.play().catch(() => {});
        } else {
          after.pause();
          before.pause();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(box);
    return () => {
      io.disconnect();
      after.removeEventListener("timeupdate", sync);
      after.removeEventListener("seeked", sync);
    };
  }, []);

  const drag = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos(Math.min(Math.max(((e.clientX - r.left) / r.width) * 100, 0), 100));
  };

  const tag = "absolute top-4 border border-line bg-bg/75 px-2.5 py-1 font-mono text-[0.72rem] uppercase tracking-[0.14em] backdrop-blur-sm transition-opacity duration-300";

  return (
    <div
      ref={boxRef}
      className="cut-corner relative aspect-[9/16] w-full cursor-ew-resize touch-pan-y overflow-hidden bg-raised select-none"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        drag(e);
      }}
      onPointerMove={(e) => e.currentTarget.hasPointerCapture(e.pointerId) && drag(e)}
    >
      <video
        ref={afterRef}
        src={`${base}-despues.mp4`}
        poster={`${base}-despues.jpg`}
        preload="none"
        muted
        loop
        playsInline
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <video
        ref={beforeRef}
        src={`${base}-antes.mp4`}
        poster={`${base}-antes.jpg`}
        preload="none"
        muted
        loop
        playsInline
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      <span className={`${tag} left-4 text-ink`} style={{ opacity: pos > 22 ? 1 : 0 }}>
        {labelAntes}
      </span>
      <span className={`${tag} right-4 text-gold`} style={{ opacity: pos < 78 ? 1 : 0 }}>
        {labelDespues}
      </span>

      <input
        type="range"
        min={0}
        max={100}
        step={0.5}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Comparar el video como llegó con el video terminado"
        aria-valuetext={`${Math.round(pos)} % del video como llegó`}
        className="peer pointer-events-none absolute inset-0 h-full w-full opacity-0"
      />

      <div className="pointer-events-none absolute inset-y-0 w-[2px] peer-focus-visible:[&>span]:outline-2 peer-focus-visible:[&>span]:outline-offset-4 peer-focus-visible:[&>span]:outline-gold -translate-x-1/2 bg-gold" style={{ left: `${pos}%` }} aria-hidden="true">
        <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-gold bg-bg/80 backdrop-blur-sm">
          <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
            <path d="M6 1L1 6l5 5M16 1l5 5-5 5" stroke="#FFD21F" strokeWidth="1.8" />
          </svg>
        </span>
      </div>
    </div>
  );
}
