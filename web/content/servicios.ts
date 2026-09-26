export type Servicio = {
  id: string;
  numero: string;
  titulo: string;
  resumen: string;
  incluye: string[];
};

export const SERVICIOS: Servicio[] = [
  {
    id: "grabacion",
    numero: "01",
    titulo: "Grabación de video",
    resumen:
      "Grabo tu negocio en persona para que tengas contenido propio, no fotos de catálogo.",
    incluye: [
      "Videos verticales para Reels, TikTok y Shorts",
      "Videos largos",
      "Guiones previos que revisás y aprobás antes de grabar",
    ],
  },
  {
    id: "edicion",
    numero: "02",
    titulo: "Edición de video y sonido",
    resumen:
      "Tus videos crudos convertidos en piezas listas para publicar. Si ya grabás, me mandás el material y yo lo edito.",
    incluye: ["Edición de video", "Edición de sonido"],
  },
  {
    id: "redes",
    numero: "03",
    titulo: "Gestión de redes",
    resumen:
      "Me ocupo de que tu cuenta no quede muerta: qué se publica, cuándo y cómo le fue.",
    incluye: [
      "Creación de guiones",
      "Publicación y calendarización de videos",
      "Métricas: qué funcionó y qué ajustar",
    ],
  },
  {
    id: "web",
    numero: "04",
    titulo: "Desarrollo web",
    resumen:
      "Que te encuentren cuando te buscan: una web propia, rápida y hecha a medida.",
    incluye: ["Páginas web", "Landing pages", "Aplicaciones web"],
  },
  {
    id: "diseno",
    numero: "05",
    titulo: "Diseño",
    resumen: "Piezas gráficas con una identidad que se reconozca, no una plantilla más.",
    incluye: ["Flyers"],
  },
];

export const PROCESO = [
  {
    titulo: "Hablamos",
    texto:
      "Me escribís y, según lo que necesites, hacemos una videollamada o nos vemos en persona para entender tu negocio.",
  },
  {
    titulo: "Idea y presupuesto",
    texto:
      "Te presento una propuesta con presupuesto. Arrancamos solo si es lo que buscás.",
  },
  {
    titulo: "Guiones y fechas",
    texto:
      "Coordinamos entregas y, si hay que grabar, días y horarios. Te mando los guiones para que los revises, cambies o apruebes.",
  },
  {
    titulo: "Producción y entregas",
    texto:
      "Trabajo por entregas, con las correcciones que hagan falta hasta cerrar. También hay servicio mensual.",
  },
];

export const MODALIDAD = {
  presencial:
    "Grabo en persona en Balcarce, Mar del Plata, Tandil, Necochea y Miramar.",
  virtual:
    "En modalidad virtual trabajo con cualquier lugar del mundo: vos me enviás el material (los videos para editar, o las fotos y textos para tu web).",
};
