"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SOCIAL, WHATSAPP_DEFAULT } from "@/content/site";
import { Arrow } from "./Button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/img/duckia-mark.svg" alt="" width={28} height={28} priority unoptimized />
          <span className="font-display text-[1.08rem] font-semibold tracking-tight">DuckIA</span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`font-mono text-[0.72rem] uppercase tracking-[0.14em] transition-colors hover:text-gold ${
                  active ? "text-gold" : "text-ink-dim"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={SOCIAL.dev}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-dim transition-colors hover:text-gold"
          >
            Desarrollo web <Arrow />
          </a>
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-[1.5px] border-gold px-4 py-2 text-[0.85rem] font-medium transition-colors hover:bg-gold hover:text-[#0c0a06]"
          >
            Escribime
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-[1.5px] w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[3.75px] rotate-45" : ""}`}
          />
          <span
            className={`h-[1.5px] w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3.75px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        id="menu-movil"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] border-t border-line bg-bg md:hidden"
      >
        <nav aria-label="Menú móvil" className="container-site flex flex-col gap-1 pt-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`border-b border-line py-4 font-display text-2xl font-semibold ${
                pathname === item.href ? "text-gold" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SOCIAL.dev}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-b border-line py-4 font-display text-2xl font-semibold"
          >
            Desarrollo web <Arrow />
          </a>
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 self-start rounded-full bg-gold px-6 py-3 font-medium text-[#0c0a06]"
          >
            Escribime por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
