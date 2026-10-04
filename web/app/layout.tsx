import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { EMAIL, SITE_URL, SOCIAL, WHATSAPP_DISPLAY } from "@/content/site";
import { hanken, martian, unbounded } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DuckIA · Contenido, video y web para negocios",
    template: "%s · DuckIA",
  },
  description:
    "Grabación y edición de Reels, gestión de redes y desarrollo web para comercios. Presencial en Balcarce, Mar del Plata, Tandil, Necochea y Miramar; virtual para todo el mundo.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "DuckIA",
    images: [
      {
        url: "/img/og-duckia.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "DuckIA: contenido, video y web para negocios",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DuckIA",
  url: SITE_URL,
  image: `${SITE_URL}/img/og-duckia.jpg`,
  email: EMAIL,
  telephone: WHATSAPP_DISPLAY,
  founder: { "@type": "Person", name: "Nicolás Barra", url: SOCIAL.dev },
  address: { "@type": "PostalAddress", addressLocality: "Balcarce", addressRegion: "Buenos Aires", addressCountry: "AR" },
  areaServed: ["Balcarce", "Mar del Plata", "Tandil", "Necochea", "Miramar"],
  sameAs: [SOCIAL.instagram, SOCIAL.tiktok, SOCIAL.youtube],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${unbounded.variable} ${hanken.variable} ${martian.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-[#0c0a06]"
        >
          Saltar al contenido
        </a>
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <filter id="duotone-gold" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0" />
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.031 1.000" />
              <feFuncG type="table" tableValues="0.031 0.824" />
              <feFuncB type="table" tableValues="0.039 0.122" />
            </feComponentTransfer>
          </filter>
        </svg>
        <SmoothScroll />
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
