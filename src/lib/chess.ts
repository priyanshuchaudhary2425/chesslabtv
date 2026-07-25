export type Board = (string | null)[][]; // [row 0 = rank 8][col 0 = file a]

const START_ROWS = [
  "rnbqkbnr",
  "pppppppp",
  "........",
  "........",
  "........",
  "........",
  "PPPPPPPP",
  "RNBQKBNR",
];

export const startBoard = (): Board =>
  START_ROWS.map((row) => row.split("").map((c) => (c === "." ? null : c)));

export const sq = (name: string): [number, number] => {
  const file = name.charCodeAt(0) - 97; // a = 0
  const rank = parseInt(name[1], 10); // 1..8
  return [8 - rank, file];
};

export type Ply = {
  san: string;
  from: string;
  to: string;
  by: "white" | "black";
  idea: string;
};

/** The Italian Game — Giuoco Piano, the oldest recorded opening in chess. */
export const ITALIAN: Ply[] = [
  {
    san: "1. e4",
    from: "e2",
    to: "e4",
    by: "white",
    idea: "Claim the centre. Nothing happens until you take space.",
  },
  {
    san: "1... e5",
    from: "e7",
    to: "e5",
    by: "black",
    idea: "Black answers in kind. A fair fight, symmetrical and honest.",
  },
  {
    san: "2. Nf3",
    from: "g1",
    to: "f3",
    by: "white",
    idea: "Develop with a threat. Every piece should do two jobs.",
  },
  {
    san: "2... Nc6",
    from: "b8",
    to: "c6",
    by: "black",
    idea: "Defend by developing. Never move a piece just to save one.",
  },
  {
    san: "3. Bc4",
    from: "f1",
    to: "c4",
    by: "white",
    idea: "The Italian bishop eyes f7 — the weakest square on the board.",
  },
  {
    san: "3... Bc5",
    from: "f8",
    to: "c5",
    by: "black",
    idea: "Giuoco Piano — 'the quiet game'. Now the real thinking begins.",
  },
];

export function boardAtPly(ply: number): { board: Board; from?: string; to?: string } {
  const board = startBoard();
  for (let i = 0; i < ply && i < ITALIAN.length; i++) {
    const m = ITALIAN[i];
    const [fr, fc] = sq(m.from);
    const [tr, tc] = sq(m.to);
    board[tr][tc] = board[fr][fc];
    board[fr][fc] = null;
  }
  const last = ply > 0 ? ITALIAN[Math.min(ply, ITALIAN.length) - 1] : undefined;
  return { board, from: last?.from, to: last?.to };
}

export const GLYPH: Record<string, string> = {
  k: "\u265A",
  q: "\u265B",
  r: "\u265C",
  b: "\u265D",
  n: "\u265E",
  p: "\u265F",
};

export const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];
