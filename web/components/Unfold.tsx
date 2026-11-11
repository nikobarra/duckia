"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const CLOSED = "polygon(100% 88%, 100% 88%, 100% 88%, 88% 100%, 88% 100%)";
const OPEN = "polygon(0% 0%, 100% 0%, 100% 88%, 88% 100%, 0% 100%)";
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Caja de esquina cortada que se abre desde esa esquina, como un papel que se despliega.
 * La detección de «entró en pantalla» va en el envoltorio: el recorte cerrado dejaría sin área a la caja.
 */
export function Unfold({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : "closed"}
      whileInView="open"
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
    >
      <motion.div
        className={`cut-corner ${className}`}
        variants={{ closed: { clipPath: CLOSED }, open: { clipPath: OPEN } }}
        transition={{ duration: 1.1, ease: EASE }}
      >
        <motion.div
          className="absolute inset-0"
          variants={{ closed: { scale: 1.14 }, open: { scale: 1 } }}
          transition={{ duration: 1.5, ease: EASE }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
