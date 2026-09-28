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

type Link = { red: string; href: string };

export type Canal = {
  id: string;
  etiqueta: string;
  handle: string;
  texto: string;
  links: Link[];
  cuentas?: { nombre: string; links: Link[] }[];
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
    id: "administradas",
    etiqueta: "Cuentas que administro",
    handle: "Tres proyectos",
    texto: "Las gestiono y creo todo su contenido. En YouTube, los trabajos más largos.",
    links: [],
    cuentas: [
      {
        nombre: "AI Beats",
        links: [
          { red: "YouTube", href: SOCIAL.youtube },
          { red: "TikTok", href: "https://tiktok.com/@ia_beats79" },
        ],
      },
      {
        nombre: "Impulso Diario",
        links: [{ red: "Facebook", href: "https://www.facebook.com/profile.php?id=61594072589173" }],
      },
      {
        nombre: "Compila y Sonríe",
        links: [{ red: "TikTok", href: "https://tiktok.com/@compilaysonrie" }],
      },
    ],
  },
];
