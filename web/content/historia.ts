// Fuente única: context/historia-nicolas.md (entrevista del 26/09/2026).
// No agregar datos que no estén en esa fuente.

export type Capitulo = {
  cuando: string;
  titulo: string;
  texto: string[];
  destacado?: string;
};

export const CAPITULOS: Capitulo[] = [
  {
    cuando: "A los 8 años",
    titulo: "Una Spectrum y un vecino",
    texto: [
      "Empecé a estudiar computación con una Spectrum y lenguaje BASIC. Me daba clases un vecino que era ingeniero en sistemas.",
    ],
  },
  {
    cuando: "Secundaria",
    titulo: "Dos escuelas técnicas",
    texto: [
      "Arranqué en la E.T. República Francesa, en Belgrano: ciclo básico y 4° año de electrónica, donde me destacaba en los talleres. Pero algo no me llenaba.",
      "Me cambié al Latzina, en Villa Luro, para estudiar informática. Tuve que volver a hacer 4° año porque era otra carrera. Ahí me recibí de técnico.",
    ],
  },
  {
    cuando: "2000",
    titulo: "El escudo que sigue en pie",
    texto: [
      "En mi último año hubo un concurso interno para rediseñar el escudo del Latzina, que hasta ese momento solo representaba a la otra carrera de la escuela. Con un compañero diseñamos una propuesta que sumaba informática, y ganamos.",
      "Ese escudo sigue representando a la institución. Veintiséis años después, la escuela me convocó para contar esta historia en su revista digital.",
    ],
    destacado: "escudo",
  },
  {
    cuando: "2002 – 2003",
    titulo: "Cinturones en la tele",
    texto: [
      "Tuve una fábrica de cinturones sin marca propia. Les vendía a Las Pepas, Cuesta Blanca y 47 Street; se exhibían en shoppings y aparecían en novelas de Polka.",
    ],
  },
  {
    cuando: "2003 – 2006",
    titulo: "La fábrica familiar",
    texto: ["Trabajé en la fábrica de marroquinería de mis padres."],
  },
  {
    cuando: "Desde 2006 · 7 años",
    titulo: "Consolas y PC",
    texto: [
      "Abrí un local de venta y reparación de consolas de videojuegos, accesorios y PC. Lo sostuve siete años.",
    ],
  },
  {
    cuando: "Mataderos · 6 años",
    titulo: "Tatuajes, remeras y discos",
    texto: [
      "Abrí Motoralmaisangre Tattoo, un estudio de tatuajes que me abrió la puerta al merchandising: estampaba remeras con serigrafía para bandas de rock under de Mataderos y del conurbano.",
      "El estudio pasó a llamarse Motoralmaisangre Tattoo y Merchandising, y sumó una pequeña discográfica que producía CDs para ese mismo ambiente.",
    ],
  },
  {
    cuando: "Diciembre 2017",
    titulo: "Balcarce",
    texto: [
      "Con mi mujer y mis dos hijos nos mudamos a Balcarce. Seguí con el estudio de tatuajes cuatro años más, y el último año sumé impresión 3D: muñecos pintados con aerógrafo.",
    ],
  },
  {
    cuando: "Pandemia",
    titulo: "Volver al primer amor",
    texto: [
      "La pandemia me obligó a reinventarme, como a tantos. Volví a la programación: hice cursos para actualizarme, porque desde que me recibí habían pasado unos veinte años.",
      "Mientras estudiaba, improvisamos un kiosco en la esquina de 21 y 20: La 21. Lo atendí tres años y hoy lo sigue mi mujer. Ahí grabé, con un gorro de papel, un video que pasó el millón de visitas.",
    ],
    destacado: "kiosco",
  },
  {
    cuando: "4 años",
    titulo: "Enseñar a programar",
    texto: [
      "Entré a Coderhouse como tutor y al poco tiempo pasé a profesor de Python, JavaScript y desarrollo web. Estuve dos años.",
      "Después di clases dos años más en Be Wise, una empresa de España, capacitando a otros desarrolladores en Python y distintos frameworks.",
    ],
  },
  {
    cuando: "2026",
    titulo: "Nace DuckIA",
    texto: [
      "Fundé DuckIA para hacer lo que vengo haciendo toda la vida, pero para otros negocios: contenido para redes, grabación y edición de video, desarrollo web, landing pages y diseño.",
    ],
  },
];

export const ORIGEN_NOMBRE = [
  "«Yo tengo un pato» era una frase de chico. No tenía sentido, pero la usaba para todo: mi frase interna para no quemarme la cabeza.",
  "Años después, programando, descubrí que cuando se te rompe el código la técnica oficial es explicarle el problema a un pato de goma, línea por línea. Al simplificarlo tanto, la solución aparece sola. Tengo uno en el escritorio y otro en el auto.",
  "Un día uní los puntos: la frase de chico, el pato en inglés, duck, y la herramienta que usamos todos los días para resolver problemas, la IA. Así nació DuckIA.",
];

// Link a la nota de la revista del Latzina: pendiente de publicación.
export const NOTA_LATZINA_URL: string | null = null;
