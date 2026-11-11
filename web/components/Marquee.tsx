"use client";

import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, useVelocity } from "motion/react";

const ITEMS = [
  "Reels",
  "TikTok",
  "Shorts",
  "Videos largos",
  "Edición",
  "Sonido",
  "Guiones",
  "Redes",
  "Métricas",
  "Web",
  "Landing pages",
  "Flyers",
];

/** Porcentaje del ancho de la cinta que avanza por segundo en reposo (la mitad en 38 s, como antes). */
const BASE = 50 / 38;

export function Marquee() {
  const reduce = useReducedMotion();
  const row = [...ITEMS, ...ITEMS];
  const pos = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 300 });
  const x = useTransform(pos, (v) => `${-v}%`);

  // La cinta acelera con la velocidad del scroll, hasta 5 veces su ritmo normal.
  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const boost = Math.min(Math.abs(velocity.get()) / 500, 4);
    pos.set((pos.get() + BASE * (1 + boost) * (Math.min(delta, 60) / 1000)) % 50);
  });

  return (
    <div className="overflow-hidden border-y border-line bg-raised py-6" aria-hidden="true">
      <motion.div className="flex w-max gap-10 will-change-transform" style={{ x }}>
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-[clamp(1.4rem,3vw,2.2rem)] font-semibold whitespace-nowrap">
            {item}
            <span className="h-2.5 w-2.5 rotate-45 bg-gold" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
