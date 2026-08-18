---
name: DuckIA — Landing
description: IA simple para pymes y emprendedores, con el pliegue de papel dorado del logo como interfaz.
colors:
  bg: "#08080a"
  bg-raised: "#131313"
  bg-raised-2: "#1a1a1a"
  gold: "#d9b06a"
  gold-bright: "#f0c987"
  gold-deep: "#8a6a2e"
  gold-dim: "#4a3717"
  silver: "#b7bac0"
  silver-dim: "#6b6e73"
  ink: "#f6f4ee"
  ink-dim: "rgba(246, 244, 238, 0.66)"
  ink-faint: "rgba(246, 244, 238, 0.38)"
typography:
  display:
    fontFamily: "Unbounded, Segoe UI, sans-serif"
    fontSize: "clamp(1.7rem, 3.4vw, 2.7rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  hero-display:
    fontFamily: "Unbounded, Segoe UI, sans-serif"
    fontSize: "clamp(2.2rem, 6vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Hanken Grotesk, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Martian Mono, Consolas, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    letterSpacing: "0.14em"
rounded:
  pill: "999px"
  none: "0px"
spacing:
  section-y: "6rem"
  section-y-lg: "7rem"
  card-padding: "2.4rem"
  container-margin: "1.5rem"
components:
  button-primary:
    backgroundColor: "rgba(217, 176, 106, 0.06)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.95em 1.7em"
  button-primary-hover:
    backgroundColor: "{colors.gold}"
    textColor: "#0c0a06"
---

# Design System: DuckIA — Landing

## Overview

**Creative North Star: "El pliegue en escena"**

DuckIA es una agencia que traduce IA y presencia web a un lenguaje que un dueño de pyme o un emprendedor puede entender sin sentirse de afuera. El sistema visual no ilustra esa idea con un ícono: la lleva literalmente al mecanismo de la página. El logo de DuckIA ya es una lámina de papel dorado plegándose hasta convertirse en un pato origami; ese pliegue es el mundo entero, no solo el hero. Todo lo demás (cards, insignias, marcos de foto, líneas conectoras) habla en facetas y ángulos duros, nunca en esquinas redondeadas ni sombras difusas de "card de SaaS genérico".

Es un sistema restringido a propósito: negro casi puro como campo, dorado metálico como único acento con permiso para dominar, plata/gunmetal como voz secundaria tomada del cuerpo del pato del logo. No hay paleta de colores de producto (azul de confianza, verde de éxito); la disciplina cromática es en sí misma parte del mensaje "esto no es una plantilla".

**Key Characteristics:**
- El pliegue dorado del logo, no un ícono derivado, es la fuente de toda la geometría (facetas, esquinas cortadas, líneas de pliegue).
- Negro + dorado + plata es la paleta completa; no hay colores semánticos adicionales.
- Tipografía de display angulosa (Unbounded) en vez de las serif librero o los defaults manidos.
- El scroll controla el mecanismo de marca directamente (scroll-scrubbing del video del pliegue), no solo dispara animaciones de entrada.

## Colors

Paleta restringida y deliberada: un campo casi negro, un único acento dorado con permiso para dominar en vez de decorar, y plata como voz secundaria.

### Primary
- **Dorado de marca** (`#d9b06a`): borde y texto de CTAs, línea conectora del proceso, acento del kicker de sección, resplandor de hover. Es el único color con permiso para ocupar áreas grandes (fondo de botón en hover, resplandor de foto).
- **Dorado brillante** (`#f0c987`): texto de énfasis dentro de citas y titulares (`.porque__quote-accent`, `.contacto__accent`), siempre sobre negro, nunca como fondo.
- **Dorado profundo** (`#8a6a2e`) / **Dorado sombra** (`#4a3717`): el pliegue de las cards de servicio en reposo (`.servicio-card__fold`) y las sombras del dorado cuando no está en foco.

### Neutral
- **Negro campo** (`#08080a`): fondo de página. Nunca gris cálido tipo "casi negro con tinte marrón"; es negro puro deliberado.
- **Negro elevado** (`#131313` / `#1a1a1a`): paneles sobre el fondo (cards de servicio, marco de foto) — una elevación tonal sutil, no una sombra.
- **Marfil tinta** (`#f6f4ee`): texto principal.
- **Marfil atenuado** (`rgba(246,244,238,0.66)` / `rgba(246,244,238,0.38)`): texto secundario y terciario respectivamente.
- **Plata/gunmetal** (`#b7bac0` / `#6b6e73`): reservado para detalles que evocan el cuerpo metálico del pato del logo; uso mínimo, nunca como color de texto principal.

### Named Rules
**La regla del acento único.** El dorado es el único color con permiso para dominar un área grande (fondo de botón, resplandor). Todo lo demás vive en negro, marfil o plata. Ningún segundo acento de color (azul, verde, rojo) entra al sistema.

## Typography

**Display Font:** Unbounded (con Segoe UI, sans-serif como fallback)
**Body Font:** Hanken Grotesk (con Segoe UI, sans-serif como fallback)
**Label/Mono Font:** Martian Mono (con Consolas, monospace como fallback)

**Character:** Unbounded aporta el corte anguloso que necesita el mundo de facetas — no es una geométrica neutra, tiene personalidad propia sin caer en las opciones manidas (nada de Space Grotesk, Playfair, Fraunces). Hanken Grotesk resuelve el cuerpo de texto sin competir con el display. Martian Mono marca las etiquetas técnicas ("01 — Qué es") con un carácter de precisión que ancla el tono "IA" sin volverse frío.

### Hierarchy
- **Hero display** (700, `clamp(2.2rem, 6vw, 4.4rem)`, line-height 1.04): título del hero, la única vez que el display alcanza esa escala.
- **Display** (600, `clamp(1.7rem, 3.4vw, 2.7rem)`, line-height 1.15): títulos de sección (`.section-title`).
- **Título de componente** (500, `1.08–1.2rem`): encabezados de card de servicio y de paso del proceso.
- **Body** (400–500, `0.95–1rem`, line-height 1.5): párrafos y descripciones.
- **Label** (400, `0.72–0.85rem`, letter-spacing `0.14em`, uppercase): kickers de sección, firma del fundador, handle de Instagram.

### Named Rules
**La regla del display angular.** El display nunca usa un peso liviano ni cursiva; el corte anguloso de Unbounded es parte del lenguaje de facetas, no un detalle tipográfico incidental.

## Layout

Página de una sola sección de scroll largo, sin navegación. Contenedor central `min(1180px, 100% - 3rem)`, repetido de forma idéntica en cada sección (`--container`). Ritmo vertical de 5 a 8rem de padding entre secciones, sin variar el contenedor lateral.

El hero es la excepción estructural: se fija (`position: sticky`) dentro de una sección de `260vh`, de modo que el scroll dentro de ese rango controla el video en vez de desplazar la página — el resto del documento fluye normal por debajo.

Grillas: servicios en 4 columnas (desktop) → 2 (tablet, ≤880px) → 1 (mobile, ≤640px), con una card ancha (`--wide`) que ocupa 2 columnas. Proceso en 3 columnas → 1 columna apilada en mobile, donde el conector dorado se oculta (no tiene sentido en una columna).

## Elevation & Depth

Sistema mayormente plano: sin `box-shadow` decorativo en reposo. La profundidad se transmite por capas tonales (`--bg` → `--bg-raised` → `--bg-raised-2`) y por el propio material del pliegue dorado (sombras direccionales "horneadas" en el video/imagen, no en CSS). La única sombra real del sistema es el resplandor de hover en los CTAs.

### Shadow Vocabulary
- **CTA hover glow** (`box-shadow: 0 10px 30px -8px rgba(217, 176, 106, 0.55)`): único uso de sombra en todo el sistema, exclusivo del estado hover/focus de los botones.

### Named Rules
**La regla del plano en reposo.** Ninguna superficie tiene sombra por defecto. La sombra aparece solo como respuesta a una interacción (hover/focus de CTA), nunca como decoración ambiental de card o panel.

## Shapes

El lenguaje de forma es el pliegue: esquinas cortadas en ángulo, nunca redondeadas, excepto en los CTAs (que usan `border-radius: 999px`, una píldora — el único lugar del sistema donde se permite una curva, precisamente para que el CTA se lea como el elemento "accionable" frente a todo lo demás, que es geometría rígida).

- **Fold de card de servicio**: triángulo en la esquina superior derecha (`border-top: 34px solid`, `border-left: 34px solid transparent`), dorado sombra en reposo, dorado brillante en hover.
- **Marco de foto del fundador**: `clip-path: polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)` — una esquina inferior derecha cortada en diagonal, con un triángulo dorado (`.fundador__photo-fold`) marcando el corte.
- **Insignia de paso de proceso**: `clip-path` en pentágono, no círculo — mantiene el vocabulario de facetas incluso en un elemento tan chico como el número de paso.
- **Marcador de kicker**: triángulo CSS de 6px (`.facet-tag::before`) — el mismo lenguaje de corte aplicado al elemento más pequeño de la página.

### Named Rules
**La regla del corte, no la curva.** Ninguna superficie usa `border-radius` salvo los CTAs. Cualquier forma nueva que necesite distinguirse (insignia, marco, marcador) se resuelve con `clip-path` o bordes triangulares, nunca con una esquina redondeada.

## Components

### Buttons (CTA)
- **Shape:** píldora (`border-radius: 999px`), única curva permitida en el sistema.
- **Primary:** fondo `rgba(217, 176, 106, 0.06)`, borde `1.5px solid #d9b06a`, texto marfil (`#f6f4ee`), padding `0.95em 1.7em`.
- **Hover / Focus:** fondo pasa a dorado sólido (`#d9b06a`), texto a casi negro (`#0c0a06`), `translateY(-2px)` y resplandor dorado (`box-shadow` documentado en Elevation), transición `0.25s cubic-bezier(0.22, 1, 0.36, 1)` (`--ease-fold`).
- Sin variante secundaria/ghost: solo existe el CTA primario, repetido en hero y contacto — el sistema no ofrece una acción secundaria que compita por atención.

### Cards (servicios)
- **Corner Style:** esquinas rectas + fold triangular en la esquina superior derecha (ver Shapes).
- **Background:** `--bg-raised` (#131313), separadas por líneas de 1px en `rgba(217, 176, 106, 0.16)` formando una grilla con gap de 1px (efecto "una sola lámina cortada en paneles", no cards flotantes con separación).
- **Shadow Strategy:** ninguna (ver Elevation).
- **Internal Padding:** `2.4rem 1.9rem 2.6rem`.

### Fundador (componente de firma)
- Foto en proporción 5:4, filtro SVG duotono (`#duotone-gold`, definido inline) que mapea sombras a negro casi puro y luces al dorado de marca — nunca color de piel a full color ni gris neutro, para que la foto quede dentro del mismo mundo cromático que el resto del sistema.
- Marco con esquina cortada y fold dorado (ver Shapes).
- Firma en `Martian Mono`, nombre en dorado, cargo en marfil atenuado.

### Proceso (línea de tiempo)
- Insignia pentagonal dorada + línea punteada (`repeating-linear-gradient` horizontal, 10px trazo / 6px espacio) que nace pegada a cada insignia y se extiende hasta la siguiente — nunca una línea global calculada por porcentaje, siempre anclada al elemento real que conecta.

### Navigation
- No existe navegación tradicional: un wordmark fijo arriba a la izquierda (`mix-blend-mode: difference` sobre el hero, sólido en el resto) es el único elemento persistente. Un `skip-link` cubre accesibilidad de teclado sin agregar chrome visual.

### Hero de video (componente de firma)
- Video del pliegue del logo, controlado 1:1 por el scroll (`currentTime` sincronizado con el progreso de scroll dentro de la sección fijada), no una animación de reproducción automática.
- El copy (título, subtítulo, CTA) se desliza hacia arriba y se desvanece durante el primer 60% del recorrido del hero (curva smoothstep), para que el pliegue se lea como el protagonista del scroll y no quede tapado por texto fijo todo el tiempo.
- Solo el video correspondiente al viewport (16:9 desktop / 9:16 mobile) se descarga (`preload="none"` + activación por JS vía `matchMedia`), nunca los dos a la vez.

## Do's and Don'ts

### Do:
- **Do** usar `clip-path` o bordes triangulares para cualquier corte o marco nuevo — el lenguaje de forma es el pliegue, no la curva.
- **Do** mantener el dorado como único acento de color; si hace falta un segundo nivel de énfasis, usar `--gold-bright` o `--gold-deep`, nunca un color nuevo.
- **Do** anclar cualquier línea conectora al elemento real que conecta (flexbox `::after` que crece hasta el siguiente ítem), nunca calcular su posición por fracciones de porcentaje del contenedor.
- **Do** aplicar el filtro `#duotone-gold` a cualquier fotografía real que se sume al sistema, para que la piel/color no rompa la disciplina de paleta.
- **Do** cargar solo el asset de video/imagen que corresponde al viewport real, nunca los dos formatos a la vez.

### Don't:
- **Don't** usar `border-radius` en ningún elemento salvo los CTAs (píldora). Una card, badge o marco con esquinas redondeadas rompe el sistema.
- **Don't** agregar sombras decorativas en reposo. La única sombra del sistema vive en el hover del CTA.
- **Don't** usar Space Grotesk, Space Mono, Playfair Display, Fraunces ni el resto de las fuentes por defecto de IA — el par tipográfico del sistema es Unbounded + Hanken Grotesk + Martian Mono.
- **Don't** mostrar fotografías reales a color pleno o en escala de grises neutra; siempre pasan por el duotono negro→dorado.
- **Don't** inventar testimonios, casos de éxito o precios — PRODUCT.md registra esa ausencia explícitamente.
