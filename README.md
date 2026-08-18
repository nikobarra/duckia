# DuckIA — Landing

**[www.duckia.com.ar](https://www.duckia.com.ar)**

Landing de una sola página para DuckIA, agencia que ayuda a pymes y emprendedores a usar inteligencia artificial y tener presencia web, sin jerga técnica y sin gastar una fortuna.

## El proyecto

El sitio traduce el logo de DuckIA (una lámina de papel dorado que se pliega hasta formar un pato origami) en el mecanismo mismo de la página: el hero reproduce ese video sincronizado 1:1 con el scroll, y el resto del sitio hereda el mismo lenguaje de facetas, negro y dorado.

Contenido: qué es DuckIA, los 5 servicios, el proceso de trabajo en 3 pasos, una sección personal del fundador y contacto directo por WhatsApp.

## Stack

HTML, CSS y JavaScript planos. Sin framework, sin build, sin dependencias — se sirve tal cual.

## Estructura

```
index.html                   página única
assets/
  css/styles.css             estilos (design tokens, componentes)
  js/main.js                 scroll-scrubbing del hero + reveals
  img/                       fotos, posters del video, favicon
  video/                     el pliegue del logo, en 16:9 y 9:16
PRODUCT.md                   contexto de producto (audiencia, servicios, marca)
DESIGN.md                    sistema de diseño construido (paleta, tipografía, componentes)
.impeccable/design.json      los mismos tokens de DESIGN.md en formato máquina
```

Los `.pdf`, `.md` y `.png`/`.jpg` sueltos en la raíz (`DuckIA_*.pdf`, `frases_clave_duckia.md`, `contenido_banco/`, `destacada_*.png`, `logo_fondo_negro.jpeg`, etc.) son material de marca y de lanzamiento — logo fuente, one-pager de servicios, banco de contenido para Instagram — no assets que use el sitio directamente.

## Desarrollo local

No requiere instalación. Cualquier servidor estático alcanza, por ejemplo:

```bash
python -m http.server 5173
```

y abrir `http://localhost:5173`.

## Despliegue

Producción en Vercel, conectado a este repo (push a `main` despliega solo). DNS en Cloudflare, dominio en NIC.ar:
- `www.duckia.com.ar` → Vercel (CNAME)
- `duckia.com.ar` → redirige (301/308) a `www.duckia.com.ar`

## Diseño

Antes de tocar estilos o agregar una superficie nueva, leer [DESIGN.md](DESIGN.md) — documenta la paleta, la tipografía, el lenguaje de forma (facetas y pliegues, nunca esquinas redondeadas salvo el CTA) y las reglas del sistema construido.
