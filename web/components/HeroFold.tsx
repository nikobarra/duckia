"use client";

import { useEffect, useRef } from "react";
import { Button } from "./Button";
import { WHATSAPP_DEFAULT } from "@/content/site";

export function HeroFold() {
  const sectionRef = useRef<HTMLElement>(null);
  const landscapeRef = useRef<HTMLVideoElement>(null);
  const portraitRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const landscape = landscapeRef.current;
    const portrait = portraitRef.current;
    if (!section || !landscape || !portrait) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 640px)");
    let active: HTMLVideoElement | null = null;
    let duration = 0;
    let ticking = false;

    const onMeta = () => {
      duration = active?.duration || 0;
      requestScrub();
    };

    const scrub = () => {
      ticking = false;
      if (!active || !duration) return;
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      const progress = total > 0 ? scrolled / total : 0;
      const t = progress * duration;
      if (Math.abs(active.currentTime - t) > 0.03) {
        try {
          active.currentTime = t;
        } catch {}
      }
      const p = Math.min(progress / 0.6, 1);
      const eased = p * p * (3 - 2 * p);
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${-eased * 90}px)`;
        contentRef.current.style.opacity = String(1 - eased);
        contentRef.current.style.pointerEvents = eased > 0.85 ? "none" : "auto";
      }
      if (cueRef.current) cueRef.current.style.opacity = String(1 - Math.min(progress / 0.15, 1));
    };

    const requestScrub = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(scrub);
      }
    };

    // Only the video for the current viewport downloads; the other stays preload="none".
    const setActive = (video: HTMLVideoElement) => {
      if (video === active) return;
      if (active) {
        active.removeEventListener("loadedmetadata", onMeta);
        active.pause();
        active.preload = "none";
      }
      active = video;
      duration = 0;
      video.preload = "auto";
      video.addEventListener("loadedmetadata", onMeta);
      video.load();
      if (reduce) video.play().catch(() => {});
    };

    setActive(mobile.matches ? portrait : landscape);
    const onChange = (e: MediaQueryListEvent) => setActive(e.matches ? portrait : landscape);
    mobile.addEventListener("change", onChange);
    if (!reduce) {
      window.addEventListener("scroll", requestScrub, { passive: true });
      window.addEventListener("resize", requestScrub);
    }
    return () => {
      mobile.removeEventListener("change", onChange);
      window.removeEventListener("scroll", requestScrub);
      window.removeEventListener("resize", requestScrub);
      active?.removeEventListener("loadedmetadata", onMeta);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[260vh]" aria-label="Inicio">
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        <video
          ref={landscapeRef}
          className="absolute inset-0 hidden h-full w-full object-cover sm:block"
          src="/video/pliegue-16-9.mp4"
          poster="/img/hero-poster-16-9.jpg"
          muted
          playsInline
          preload="none"
          aria-hidden="true"
        />
        <video
          ref={portraitRef}
          className="absolute inset-0 h-full w-full object-cover sm:hidden"
          src="/video/pliegue-9-16.mp4"
          poster="/img/hero-poster-9-16.jpg"
          muted
          playsInline
          preload="none"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/10 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/85 via-bg/40 to-transparent" />

        <div ref={contentRef} className="container-site relative flex h-full flex-col justify-end pb-[18vh]">
          <p className="kicker">Balcarce · Mar del Plata · Tandil · y online</p>
          <h1 className="mt-5 max-w-[16ch] font-display text-[clamp(2.2rem,6vw,4.4rem)] font-bold leading-[1.04] tracking-[-0.02em]">
            Tu negocio en video, en redes y <span className="text-gold">en la web</span>.
          </h1>
          <p className="mt-6 max-w-[46ch] text-ink-dim sm:text-lg">
            Grabo, edito y publico el contenido de tu negocio, y te armo la web para que te
            encuentren. Tenés una idea, yo hago que funcione.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={WHATSAPP_DEFAULT}>Escribime por WhatsApp</Button>
            <Button href="/portfolio" variant="solid">
              Ver trabajos
            </Button>
          </div>
        </div>

        <div
          ref={cueRef}
          className="absolute bottom-6 right-6 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-faint"
          aria-hidden="true"
        >
          Scroll ↓
        </div>
      </div>
    </section>
  );
}
