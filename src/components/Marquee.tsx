const ITEMS = [
  "Tactics",
  "Endgames",
  "Opening repertoire",
  "Calculation",
  "Game analysis",
  "Tournament prep",
  "Board vision",
  "Patience",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-line bg-cream-50/60 py-4">
      <div
        className="flex w-max gap-10 whitespace-nowrap"
        style={{ animation: "marquee 38s linear infinite" }}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-[17px] italic text-forest-900/70"
          >
            {item}
            <span className="text-gold not-italic">♞</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream to-transparent" />
    </div>
  );
}
