"use client";

import { useEffect, useRef, useState } from "react";
import type { Reel } from "@/content/portfolio";

type Mode = "idle" | "preview" | "full";

/** Clip mudo y liviano de 6 s que vive al lado del video completo (ver public/videos/*-preview.mp4). */
const previewSrc = (src: string) => src.replace(/\.mp4$/, "-preview.mp4");

export function ReelCard({ reel }: { reel: Reel }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const fullRef = useRef<HTMLVideoElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<Mode>("idle");
  const modeRef = useRef<Mode>("idle");
  const canPreview = useRef(false);

  const set = (m: Mode) => {
    modeRef.current = m;
    setMode(m);
  };

  const startPreview = () => {
    if (!canPreview.current || modeRef.current !== "idle") return;
    const p = previewRef.current;
    if (!p) return;
    set("preview");
    p.play().catch(() => set("idle"));
  };

  const stopPreview = () => {
    if (modeRef.current !== "preview") return;
    previewRef.current?.pause();
    set("idle");
  };

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    canPreview.current = !reduce && !saveData;
    if (!canPreview.current) return;

    // Con mouse la vista previa arranca al pasar por encima; en pantallas táctiles, al quedar la tarjeta casi entera en pantalla.
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const box = boxRef.current;
    if (!box) return;
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? startPreview() : stopPreview()),
      { threshold: 0.85 },
    );
    io.observe(box);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playFull = () => {
    const v = fullRef.current;
    if (!v) return;
    previewRef.current?.pause();
    document.querySelectorAll("video[data-reel]").forEach((other) => {
      if (other !== v) (other as HTMLVideoElement).pause();
    });
    set("full");
    v.play().catch(() => set("idle"));
  };

  const onFullStop = () => {
    if (modeRef.current === "full") set("idle");
  };

  return (
    <figure className="group">
      <div
        ref={boxRef}
        className="cut-corner relative aspect-[9/16] overflow-hidden bg-raised"
        onPointerEnter={(e) => e.pointerType === "mouse" && startPreview()}
        onPointerLeave={(e) => e.pointerType === "mouse" && stopPreview()}
      >
        <video
          ref={fullRef}
          data-reel
          src={reel.src}
          poster={reel.poster}
          preload="none"
          playsInline
          controls={mode === "full"}
          onPause={onFullStop}
          onEnded={onFullStop}
          className="h-full w-full object-cover"
        />
        <video
          ref={previewRef}
          src={previewSrc(reel.src)}
          preload="none"
          muted
          loop
          playsInline
          aria-hidden="true"
          tabIndex={-1}
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            mode === "preview" ? "opacity-100" : "opacity-0"
          }`}
        />
        {mode !== "full" && (
          <button
            type="button"
            onClick={playFull}
            aria-label={`Reproducir con sonido: ${reel.titulo}`}
            className={`absolute inset-0 flex transition-colors duration-300 ${
              mode === "preview" ? "items-end justify-start bg-bg/0 p-4" : "items-center justify-center bg-bg/20"
            }`}
          >
            <span
              className={`flex items-center justify-center rounded-full border-[1.5px] border-gold bg-bg/60 backdrop-blur-sm transition-[width,height,transform] duration-300 ease-[var(--ease-fold)] group-hover:scale-110 ${
                mode === "preview" ? "h-11 w-11" : "h-16 w-16"
              }`}
            >
              <svg width={mode === "preview" ? 13 : 18} height={mode === "preview" ? 14 : 20} viewBox="0 0 18 20" aria-hidden="true">
                <path d="M2 1.5L16 10L2 18.5V1.5Z" fill="#FFD21F" />
              </svg>
            </span>
            {mode === "preview" && (
              <span className="mb-3.5 ml-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink [text-shadow:0_1px_8px_rgba(0,0,0,0.9)]">
                Ver con sonido
              </span>
            )}
          </button>
        )}
      </div>
      <figcaption className="mt-4">
        <p className="font-display text-[1.08rem] font-semibold">{reel.titulo}</p>
        <p className="mt-1 text-sm text-ink-dim">{reel.bajada}</p>
        {reel.tratamiento.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tratamiento de edición">
            {reel.tratamiento.map((t) => (
              <li key={t} className="border border-line px-2 py-0.5 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-dim">
                {t}
              </li>
            ))}
          </ul>
        )}
      </figcaption>
    </figure>
  );
}
