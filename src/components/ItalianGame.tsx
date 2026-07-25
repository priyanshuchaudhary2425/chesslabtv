import { useEffect, useRef, useState } from "react";
import ChessBoard from "./ChessBoard";
import { ITALIAN } from "../lib/chess";

export default function ItalianGame() {
  const [ply, setPly] = useState(0);
  const [auto, setAuto] = useState(true);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (!auto) return;
    timer.current = window.setInterval(() => {
      setPly((p) => (p >= ITALIAN.length ? 0 : p + 1));
    }, 1900);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [auto]);

  const current = ply > 0 ? ITALIAN[ply - 1] : null;

  return (
    <div className="relative">
      {/* frame */}
      <div className="relative rounded-[20px] border border-line/80 bg-cream-50 p-3 shadow-[0_30px_60px_-32px_rgba(18,39,29,0.45)] sm:p-4">
        <div className="rounded-xl bg-forest-900 p-2.5 sm:p-3">
          <ChessBoard ply={ply} />
        </div>

        {/* notation strip */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5 px-0.5 sm:mt-4">
          {ITALIAN.map((m, i) => {
            const active = ply === i + 1;
            const played = ply >= i + 1;
            return (
              <button
                key={m.san}
                onClick={() => {
                  setAuto(false);
                  setPly(i + 1);
                }}
                className={`rounded-md px-2.5 py-1.5 font-sans text-[12.5px] font-semibold tabular-nums transition-all duration-200 ${
                  active
                    ? "bg-forest-800 text-cream-50 shadow-sm"
                    : played
                      ? "bg-gold-soft/60 text-forest-900 hover:bg-gold-soft"
                      : "text-ink-soft/60 hover:bg-cream-100 hover:text-forest-800"
                }`}
                aria-label={`Show position after ${m.san}`}
              >
                {m.san}
              </button>
            );
          })}
          <button
            onClick={() => {
              setAuto(false);
              setPly(0);
            }}
            className="ml-auto rounded-md px-2 py-1.5 text-[12px] font-semibold text-sage transition-colors hover:text-forest-800"
          >
            Reset
          </button>
        </div>

        {/* idea caption */}
        <div className="mt-2 min-h-[62px] rounded-xl bg-cream-100 px-4 py-3">
          <p className="label text-gold">
            {current ? "The idea" : "The Italian Game"}
          </p>
          <p className="mt-1 font-display text-[15px] italic leading-snug text-forest-900">
            {current
              ? current.idea
              : "The oldest recorded opening in chess. Tap a move — or watch it unfold."}
          </p>
        </div>
      </div>

      {/* floating badge */}
      <div className="animate-float absolute -right-3 -top-5 hidden rounded-full border border-line bg-cream-50 px-4 py-2 text-[12px] font-semibold text-forest-800 shadow-[0_14px_30px_-16px_rgba(18,39,29,.6)] sm:block">
        <span className="text-gold">♞</span> Giuoco Piano · est. 1497
      </div>
    </div>
  );
}
