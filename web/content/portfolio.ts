import { SOCIAL } from "./site";

export type Reel = {
  id: string;
  titulo: string;
  bajada: string;
  src: string;
  poster: string;
  /** Qué se le hizo en la edición (se muestra como etiquetas en la tarjeta). */
  tratamiento: string[];
};

/** Lo mismo en los reels del Maxikiosco: grabados con el celular y mandados por WhatsApp. */
const MAXIKIOSCO = ["Cortes", "Reescalado con IA", "Gráficos de Halloween", "Marca animada", "Subtítulos", "Zooms de énfasis", "Color", "Música con IA", "SFX", "Limpieza de ruido"];

export const REELS: Reel[] = [
  {
    id: "elektra",
    titulo: "Elektra Urbano · Día de la Madre",
    bajada: "Reel para un local de ropa deportiva de Balcarce.",
    src: "/videos/elektra.mp4",
    poster: "/videos/elektra.jpg",
    tratamiento: ["Color", "Limpieza de ruido", "Nivelación de audio", "Subtítulos", "Zooms de énfasis", "SFX", "Placa final de marca", "Bloopers"],
  },
  {
    id: "maxikiosco-ositos",
    titulo: "Maxikiosco La 21 · Halloween",
    bajada: "Lo graba la dueña con el celular y me lo manda por WhatsApp. Yo lo edito.",
    src: "/videos/maxikiosco-ositos.mp4",
    poster: "/videos/maxikiosco-ositos.jpg",
    tratamiento: MAXIKIOSCO,
  },
  {
    id: "kiosco",
    titulo: "El kiosco",
    bajada: "La historia del kiosco, hablada a cámara.",
    src: "/videos/kiosco.mp4",
    poster: "/videos/kiosco.jpg",
    tratamiento: ["Sonido limpio", "Música", "SFX"],
  },
  {
    id: "pato",
    titulo: "Yo tengo un pato",
    bajada: "De dónde sale el nombre DuckIA.",
    src: "/videos/pato.mp4",
    poster: "/videos/pato.jpg",
    tratamiento: ["Color, luces y sombras", "Sonido limpio", "Música", "SFX", "Subtítulos, motion e IA"],
  },
  {
    id: "conteo",
    titulo: "50 locales en Mar del Plata",
    bajada: "Investigación en la calle, local por local.",
    src: "/videos/conteo-mardel.mp4",
    poster: "/videos/conteo-mardel.jpg",
    tratamiento: ["Color, luces y sombras", "Sonido limpio", "Música", "SFX", "Contador animado"],
  },
  {
    id: "maxikiosco-halloween",
    titulo: "Maxikiosco La 21 · Todo lo de Halloween",
    bajada: "Recorrida por el local, producto por producto.",
    src: "/videos/maxikiosco-halloween.mp4",
    poster: "/videos/maxikiosco-halloween.jpg",
    tratamiento: MAXIKIOSCO,
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
    id: "maxikiosco",
    etiqueta: "Cliente",
    handle: "@maxikiosco_la_21",
    texto: "Maxikiosco La 21: la dueña graba con el celular y yo edito sus reels.",
    links: [{ red: "TikTok", href: "https://www.tiktok.com/@maxikiosco_la_21" }],
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
