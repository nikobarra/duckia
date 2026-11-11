"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
  /** Para lo que se ve apenas carga la página: entra con CSS, sin esperar a JavaScript. */
  intro?: boolean;
};

export function Reveal({ children, delay = 0, className, as = "div", intro = false }: Props) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  if (intro) {
    const Plain = as;
    return (
      <Plain className={`intro-rise ${className ?? ""}`} style={{ animationDelay: `${delay}s` }}>
        {children}
      </Plain>
    );
  }
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28, "--fold": 0 }}
      whileInView={{ opacity: 1, y: 0, "--fold": 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1], "--fold": { duration: 0.7, delay: delay + 0.35, ease: [0.22, 1, 0.36, 1] } }}
    >
      {children}
    </Tag>
  );
}
