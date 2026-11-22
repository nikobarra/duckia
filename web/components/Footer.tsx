import Image from "next/image";
import Link from "next/link";
import { EMAIL, NAV, SOCIAL, WHATSAPP_DEFAULT, WHATSAPP_DISPLAY } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line pb-[calc(3rem+env(safe-area-inset-bottom))] pt-16">
      <div className="container-site grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/img/duckia-mark.svg" alt="" width={32} height={32} unoptimized />
            <span className="font-display text-lg font-semibold">DuckIA</span>
          </Link>
          <p className="mt-4 max-w-[32ch] text-sm text-ink-dim">
            Edición de video y desarrollo web para negocios. Atención directa y trabajo remoto desde Balcarce.
          </p>
        </div>

        <div>
          <p className="kicker mb-4">Sitio</p>
          <ul className="space-y-2 text-sm text-ink-dim">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition-colors hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={SOCIAL.dev} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">
                nicolasbarra.dev
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="kicker mb-4">Contacto</p>
          <ul className="space-y-2 text-sm text-ink-dim">
            <li>
              <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <span className="select-all">{EMAIL}</span>
            </li>
            <li>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">
                Instagram
              </a>
              {" · "}
              <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">
                TikTok
              </a>
              {" · "}
              <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="kicker mb-4">Trabajemos juntos</p>
          <p className="text-sm text-ink-dim">Online para todo el país. Encuentros presenciales a coordinar.</p>
        </div>
      </div>

      <div className="container-site mt-14 flex flex-wrap justify-between gap-4 border-t border-line pt-6 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-faint">
        <span>© {new Date().getFullYear()} DuckIA</span>
        <span>www.duckia.com.ar</span>
      </div>
    </footer>
  );
}
