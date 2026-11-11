type Props = {
  /** Nombre del archivo en /public/pato (sale de 01_marca/pato-animado). */
  nombre: "comenta" | "casco" | "saluda";
  size?: number;
  className?: string;
};

/**
 * El pato animado, con fondo transparente. Va en WebP animado porque el WebM transparente no se ve en iPhone.
 * Con «reducir movimiento» activado se muestra el cuadro quieto.
 */
export function Pato({ nombre, size = 180, className = "" }: Props) {
  return (
    <picture className={className}>
      <source media="(prefers-reduced-motion: reduce)" srcSet={`/pato/${nombre}-quieto.webp`} />
      <img src={`/pato/${nombre}.webp`} alt="" width={size} height={size} loading="lazy" decoding="async" aria-hidden="true" />
    </picture>
  );
}
