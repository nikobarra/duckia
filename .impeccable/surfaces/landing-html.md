---
version: 1
slug: "landing-html"
primary_target: "landing.html"
related_targets: []
---

# Surface brief — Landing (www.duckia.com.ar)

## Scope and visitor mode
Persuade. Página única de scroll largo, sin navegación, publicada en www.duckia.com.ar. Llega tráfico de la bio de Instagram (@duckia_latam) y de DMs con el one-pager.

## Audience, job, action, proof, constraints
- Audiencia: pymes y emprendedores (Argentina), sin equipo técnico, escépticos o distantes de la IA.
- Job: entender qué es DuckIA y decidir escribir por WhatsApp.
- Acción primaria: CTA "Escribime por WhatsApp" (link precargado, ver PRODUCT.md).
- Prueba real disponible: logo, tagline, 5 servicios del one-pager, proceso de 3 pasos, foto del fundador (toque personal), video de plegado del logo (fondo animado con scroll-scrubbing).
- Sin testimonios/casos/precios confirmados — no inventar.
- Ejecutable por una sola persona (sin backend/CMS — HTML/CSS/JS estático).

## Chosen direction and memorable moment
Dirección aprobada: "Pliegue en escena" (`.impeccable/mocks/decision/assigned.jpg`, aprobado por el usuario 2026-08-18).
- Mundo: el pliegue de papel dorado del logo (video_16_9.mp4 / video_9_16.mp4) llevado a toda la página — facetas, ángulos duros, sombras de origami en vez de cards redondeadas.
- Momento memorable: el hero a pantalla completa muestra el papel a medio plegar; el scroll pliega/despliega el video en sincronía, y el título aparece entre los pliegues. El pliegue dorado reaparece como hilo conductor en la sección de proceso (diagnóstico → implementación → acompañamiento).
- Paleta base (muestreada del logo y del comp aprobado): negro casi puro de fondo (~#0a0a0a), dorado metálico cálido para acentos y bordes (~#D4AF6A brillante / ~#5C4419 sombra), gris plata/gunmetal para detalles secundarios (facetas del pato), texto blanco/off-white.
- Tipografía: sans geométrica de ángulos marcados (no serif librero, no las fuentes manidas de IA).

## Unresolved decisions
- Fuente exacta a usar (se define en build, con fallback de sistema si no hay web font cargable offline).
- Tratamiento exacto del hilo dorado conector en la sección de proceso (se resuelve en build, dentro del mundo aprobado).
