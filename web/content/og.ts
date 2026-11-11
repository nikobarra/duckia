import type { Metadata } from "next";

type OG = NonNullable<Metadata["openGraph"]>;

/** Imagen que aparece al compartir el link (Facebook, WhatsApp). Si se cambia el diseño, cambiar también el nombre: las redes guardan la imagen vieja por dirección. */
export const OG_IMAGE = {
  url: "/img/og-duckia-v2.jpg",
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "DuckIA: tu negocio en video, en redes y en la web",
};

/**
 * Datos de vista previa de una página. Cada página tiene que pasar los suyos completos:
 * si define `openGraph` a medias, pierde lo que hereda del layout (imagen, tipo, nombre del sitio).
 */
export function og(path: string, extra: Partial<OG> = {}): OG {
  return {
    type: "website",
    locale: "es_AR",
    siteName: "DuckIA",
    url: path,
    images: [OG_IMAGE],
    ...extra,
  } as OG;
}
