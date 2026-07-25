import { FILES, GLYPH, boardAtPly } from "../lib/chess";

type Props = {
  ply: number;
  className?: string;
};

export default function ChessBoard({ ply, className = "" }: Props) {
  const { board, from, to } = boardAtPly(ply);

  return (
    <div
      className={`relative aspect-square w-full overflow-hidden rounded-[10px] ${className}`}
      style={{ containerType: "inline-size" }}
      aria-hidden="true"
    >
      <div className="grid h-full w-full grid-cols-8 grid-rows-8">
        {board.map((row, r) =>
          row.map((piece, c) => {
            const name = FILES[c] + (8 - r);
            const dark = (r + c) % 2 === 1;
            const isFrom = name === from;
            const isTo = name === to;
            const white = piece ? piece === piece.toUpperCase() : false;
            return (
              <div
                key={name}
                className={`relative flex items-center justify-center ${
                  dark ? "bg-[#2f5342]" : "bg-[#e7dcc0]"
                }`}
              >
                {(isFrom || isTo) && (
                  <span
                    className={`absolute inset-0 ${
                      isTo ? "bg-gold/45" : "bg-gold/22"
                    } transition-colors duration-500`}
                  />
                )}
                {isTo && (
                  <span className="absolute inset-[6%] rounded-[3px] ring-2 ring-gold/70" />
                )}
                {piece && (
                  <span
                    key={piece + name + ply}
                    className="animate-pop relative select-none leading-none"
                    style={{
                      fontSize: "clamp(15px, 6.2cqw, 46px)",
                      color: white ? "#FBF8F0" : "#14211a",
                      textShadow: white
                        ? "0 1px 0 rgba(0,0,0,.35), 0 2px 6px rgba(0,0,0,.28)"
                        : "0 1px 0 rgba(255,255,255,.16), 0 2px 6px rgba(0,0,0,.25)",
                    }}
                  >
                    {GLYPH[piece.toLowerCase()]}
                  </span>
                )}
              </div>
            );
          }),
        )}
      </div>
    </div>
  );
}
