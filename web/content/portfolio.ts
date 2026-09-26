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
  red: string;
  handle: string;
  href: string;
  texto: string;
};

export const CANALES: Canal[] = [
  {
    id: "duckia-ig",
    red: "Instagram",
    handle: "@duckia_latam",
    href: SOCIAL.instagram,
    texto: "Todos los reels de DuckIA.",
  },
  {
    id: "duckia-tt",
    red: "TikTok",
    handle: "@duckia_latam",
    href: SOCIAL.tiktok,
    texto: "Reels y carruseles diarios, de lunes a sábado.",
  },
  {
    id: "melisa",
    red: "Instagram · clienta",
    handle: "@melisa_santoianni",
    href: "https://instagram.com/melisa_santoianni",
    texto: "La cuenta de una clienta de DuckIA.",
  },
  {
    id: "youtube",
    red: "YouTube",
    handle: "@Ai_Beats1979",
    href: SOCIAL.youtube,
    texto: "Trabajos más largos.",
  },
];
