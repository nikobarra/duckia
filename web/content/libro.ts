// Migrado de ebook/index.html (sitio anterior). Mismos datos, marca DuckIA.
import { whatsappLink } from "./site";

export const LIBRO = {
  titulo: "Sistema, no timba",
  kicker: "Libro · 13 capítulos · Argentina",
  bajada:
    "Marketing digital para negocios chicos en un país que cambia de precios cada dos meses.",
  intro:
    "Ya probaste publicar, quizás pagaste una campaña, y no supiste si funcionó o si tiraste la plata. No fue tu culpa: el método que probaste estaba pensado para otro país.",
  cita: "Nada de fórmulas mágicas. Un método que podés empezar a aplicar esta tarde.",
  paginas: 139,
  precioLanzamiento: 30000,
  precioRegular: 50000,
  finLanzamiento: "2026-09-30",
  ctaCapitulo: whatsappLink("Quiero el capítulo 1 gratis"),
  ctaComprar: whatsappLink("Quiero comprar el libro completo"),
  problema: {
    antes:
      "Probás algo que viste en un video, no sabés si funcionó, lo dejás. Arrancás otra cosa dos semanas después.",
    despues:
      "Cada capítulo se apoya en el anterior, y un tablero de seis números te dice qué ajustar y qué dejar quieto.",
  },
  partes: [
    {
      caps: "01–02",
      nombre: "Infraestructura",
      texto: "WhatsApp Business, Instagram profesional y Mercado Libre, configurados de cero.",
    },
    {
      caps: "03–05",
      nombre: "Estrategia",
      texto: "Quién te compra de verdad, cómo comunicar precio sin disculpas y en qué canal jugar.",
    },
    {
      caps: "06–09",
      nombre: "Ejecución",
      texto: "Contenido sostenible, IA para ahorrar horas y publicidad paga con presupuesto chico.",
    },
    {
      caps: "10–13",
      nombre: "Conversión y permanencia",
      texto: "Cerrar por WhatsApp, hacer que el cliente vuelva y medir con seis números.",
    },
  ],
  casos: [
    { nombre: "Male", rubro: "viandas", texto: "Descubrió que tenía dos clientes distintos detrás de una sola etiqueta." },
    { nombre: "Fede", rubro: "indumentaria", texto: "Dejó de esconder el precio y las consultas cambiaron de tono." },
    { nombre: "Naty", rubro: "nutrición", texto: "Mostró su trabajo sin sentirse influencer, con turnos en un solo paso." },
    { nombre: "Diego", rubro: "ferretería", texto: "Aprendió dónde conviene pagar publicidad y dónde no, con márgenes reales." },
  ],
  capitulo1:
    "Es el capítulo del quick win: ocho arreglos concretos que podés aplicar en una tarde para tapar las fugas por las que hoy se te van clientes. Si te sirve, seguís con el libro.",
  faq: [
    {
      q: "¿Sirve si mi negocio es muy chico?",
      a: "Está escrito para eso: una persona que atiende, produce y hace el marketing al mismo tiempo.",
    },
    {
      q: "¿Necesito presupuesto de publicidad?",
      a: "Los primeros siete capítulos no gastan un peso. La pauta paga arranca con lo que sale un café por día, y siempre podés apagarla.",
    },
    {
      q: "¿Sirve si vendo servicios y no productos?",
      a: "Dos de los cuatro casos son de servicios, y cada capítulo aclara qué cambia en ese caso.",
    },
  ],
};
