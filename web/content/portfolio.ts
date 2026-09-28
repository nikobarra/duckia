import { SOCIAL } from "./site";

export type Reel = {
  id: string;
  titulo: string;
  bajada: string;
  src: string;
  poster: string;
};

export const REELS: Reel[] = [
  {
    id: "kiosco",
    titulo: "El kiosco",
    bajada: "La historia del kiosco, hablada a cámara.",
    src: "/videos/kiosco.mp4",
    poster: "/videos/kiosco.jpg",
  },
  {
    id: "pato",
    titulo: "Yo tengo un pato",
    bajada: "De dónde sale el nombre DuckIA.",
    src: "/videos/pato.mp4",
    poster: "/videos/pato.jpg",
  },
  {
    id: "conteo",
    titulo: "50 locales en Mar del Plata",
    bajada: "Investigación en la calle, local por local.",
    src: "/videos/conteo-mardel.mp4",
    poster: "/videos/conteo-mardel.jpg",
  },
];

export type Canal = {
  id: string;
  etiqueta: string;
  handle: string;
  texto: string;
  links: { red: string; href: string }[];
};

export const CANALES: Canal[] = [
  {
    id: "duckia",
    etiqueta: "DuckIA",
    handle: "@duckia_latam",
    texto: "Todos los reels de DuckIA, y en TikTok carruseles de lunes a sábado.",
    links: [
      { red: "Instagram", href: SOCIAL.instagram },
      { red: "TikTok", href: SOCIAL.tiktok },
    ],
  },
  {
    id: "melisa",
    etiqueta: "Clienta",
    handle: "@melisa_santoianni",
    texto: "Clienta de DuckIA: sus reels y la landing de su paquete completo de servicios.",
    links: [
      { red: "Instagram", href: "https://instagram.com/melisa_santoianni" },
      { red: "TikTok", href: "https://tiktok.com/@melisa_santoianni" },
      { red: "Landing", href: "https://www.melisantoianni.com/" },
    ],
  },
  {
    id: "youtube",
    etiqueta: "Cuentas que administro",
    handle: "@Ai_Beats1979",
    texto: "Las gestiono y creo su contenido. En YouTube, los trabajos más largos.",
    links: [
      { red: "YouTube", href: SOCIAL.youtube },
      { red: "TikTok", href: "https://tiktok.com/@ia_beats79" },
    ],
  },
];
