"use client";

import { useEffect, useRef, useState } from "react";

export function BrandMotion() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (preference.matches) video.current?.pause();
      else void video.current?.play().catch(() => {});
    };
    sync();
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);
  return (
    <>
      <video
        ref={video}
        muted
        loop
        playsInline
        preload="metadata"
        poster="/img/hero-poster-9-16.jpg"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-label="El pato de DuckIA se forma mediante un pliegue de papel"
      >
        <source src="/video/pliegue-9-16.mp4" type="video/mp4" />
      </video>
      <button
        className="motion-toggle"
        type="button"
        onClick={() => {
          if (playing) video.current?.pause();
          else void video.current?.play().catch(() => {});
        }}
      >
        {playing ? "Pausar animación" : "Ver animación"}
      </button>
    </>
  );
}
