"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import type { PointerEvent } from "react";

/** Imagen del libro con una inclinación 3D suave que sigue al mouse. En pantallas táctiles queda inclinada fija. */
export function BookTilt() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { damping: 22, stiffness: 180 });
  const sy = useSpring(my, { damping: 22, stiffness: 180 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-22, -2]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [9, -5]);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className="w-full max-w-[26rem] [perspective:1100px]" onPointerMove={onMove} onPointerLeave={reset}>
      <motion.div
        className="relative aspect-[1200/630] border border-line shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9),0_0_60px_-30px_rgba(255,210,31,0.5)]"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <Image src="/libro/og-libro.jpg" alt="Sistema, no timba, el libro" fill sizes="(min-width: 768px) 26rem, 100vw" className="object-cover" />
      </motion.div>
    </div>
  );
}
