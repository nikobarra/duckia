export const SITE_URL = "https://www.duckia.com.ar";

export const WHATSAPP_NUMBER = "5491172516870";
export const WHATSAPP_DISPLAY = "+54 9 11 7251-6870";
export const EMAIL = "duckialatam@gmail.com";

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const WHATSAPP_DEFAULT = whatsappLink(
  "Hola DuckIA, vi la web y quiero saber más",
);

export const SOCIAL = {
  instagram: "https://instagram.com/duckia_latam",
  tiktok: "https://tiktok.com/@duckia_latam",
  youtube: "https://www.youtube.com/@Ai_Beats1979",
  dev: "https://nicolasbarra.dev",
};

export const NAV = [
  { href: "/servicios", label: "Servicios" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/historia", label: "Historia" },
  { href: "/libro", label: "Libro" },
];

export const ZONAS = ["Balcarce", "Mar del Plata", "Tandil", "Necochea", "Miramar"];
