import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "solid";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: Props) {
  const external = /^https?:\/\//.test(href);
  const base =
    "inline-flex items-center gap-2 rounded-full px-[1.7em] py-[0.95em] text-[0.95rem] font-medium transition-[background-color,color,transform,box-shadow] duration-300 ease-[var(--ease-fold)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(255, 210, 31,0.55)]";
  const styles =
    variant === "solid"
      ? "bg-gold text-[#0c0a06] hover:bg-gold-bright"
      : "border-[1.5px] border-gold bg-gold/6 text-ink hover:bg-gold hover:text-[#0c0a06]";

  const cls = `${base} ${styles} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
