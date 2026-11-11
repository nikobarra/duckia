"use client";

import { motion, useReducedMotion } from "motion/react";
import { Children, isValidElement, type ReactNode } from "react";

type Word = { text: string; className?: string };

/** Parte el título en palabras, respetando los tramos con clase propia (por ejemplo, el dorado). */
function toWords(node: ReactNode, className?: string): Word[] {
  const out: Word[] = [];
  Children.forEach(node, (child) => {
    if (typeof child === "string" || typeof child === "number") {
      for (const text of String(child).split(/\s+/).filter(Boolean)) out.push({ text, className });
    } else if (isValidElement<{ children?: ReactNode; className?: string }>(child)) {
      out.push(...toWords(child.props.children, child.props.className ?? className));
    }
  });
  return out;
}

/** Título que se descubre palabra por palabra, como si saliera de un pliegue. */
export function RiseText({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  const words = toWords(children);
  return (
    <motion.span
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ staggerChildren: 0.045, delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span key={i}>
          <span className="-mb-[0.18em] inline-block overflow-hidden pb-[0.18em] align-bottom">
            <motion.span
              className={`inline-block ${w.className ?? ""}`}
              variants={{ hidden: { y: "105%" }, shown: { y: 0 } }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {w.text}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </motion.span>
  );
}
