import { motion } from "framer-motion";

const ITEMS = [
  "Think Before You Move",
  "Stop Blundering Pieces",
  "Calculate With Confidence",
  "Understand Every Position",
  "Win More Endgames",
  "Build Better Habits",
  "Learn From Every Game",
  "Play Without Guessing",
];
export default function Marquee() {
  // Repeat enough times to create a long continuous strip
  const row = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <section className="relative overflow-hidden border-y border-line bg-cream-50/90 py-6">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />

      <motion.div
        className="flex w-max items-center"
        animate={{
          x: ["0%", "-25%"],
        }}
        transition={{
          ease: "linear",
          duration: 45,
          repeat: Infinity,
          repeatType: "loop",
        }}
        whileHover={{
          animationPlayState: "paused",
        }}
      >
        {row.map((item, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center"
          >
            <span
              className="
                shrink-0
                px-10
                font-display
                text-[15px]
                uppercase
                tracking-[0.22em]
                text-forest-900/80
                transition-colors
                duration-300
                hover:text-forest-900
              "
            >
              {item}
            </span>

            <span
              aria-hidden
              className="shrink-0 text-xl text-gold/70"
            >
              ♞
            </span>
          </div>
        ))}
      </motion.div>

      {/* Left Fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-cream via-cream/90 to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-cream via-cream/90 to-transparent" />
    </section>
  );
}