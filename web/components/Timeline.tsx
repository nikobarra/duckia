"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";

/** Lista de la historia: la línea dorada se va dibujando a medida que se baja. */
export function Timeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 65%"] });
  const scaleY = useSpring(scrollYProgress, { damping: 40, stiffness: 220 });
  return (
    <ol ref={ref} className="relative border-l border-line">
      {!reduce && (
        <motion.span
          aria-hidden="true"
          className="absolute -left-px top-0 h-full w-px origin-top bg-gold"
          style={{ scaleY }}
        />
      )}
      {children}
    </ol>
  );
}
