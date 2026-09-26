const ITEMS = [
  "Reels",
  "TikTok",
  "Shorts",
  "Videos largos",
  "Edición",
  "Sonido",
  "Guiones",
  "Redes",
  "Métricas",
  "Web",
  "Landing pages",
  "Flyers",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-line bg-raised py-6" aria-hidden="true">
      <div className="marquee-track flex w-max gap-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-[clamp(1.4rem,3vw,2.2rem)] font-semibold whitespace-nowrap">
            {item}
            <span className="h-2.5 w-2.5 rotate-45 bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
