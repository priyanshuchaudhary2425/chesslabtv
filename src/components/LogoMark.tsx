type Props = { className?: string };

/**
 * ChessLabTV mark — a gold knight set in a deep-green board tile.
 * Pure SVG so it stays crisp at any size and needs no network request.
 */
export default function LogoMark({ className = "h-10 w-10" }: Props) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="ChessLabTV">
      <defs>
        <linearGradient id="clt-tile" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d4131" />
          <stop offset="100%" stopColor="#0f2118" />
        </linearGradient>
        <linearGradient id="clt-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e2c07d" />
          <stop offset="100%" stopColor="#b98a3c" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="48" height="48" rx="13" fill="url(#clt-tile)" />
      {/* faint checker corners */}
      <g fill="#ffffff" opacity="0.05">
        <rect x="0" y="0" width="12" height="12" />
        <rect x="24" y="0" width="12" height="12" />
        <rect x="12" y="12" width="12" height="12" />
        <rect x="36" y="12" width="12" height="12" />
        <rect x="0" y="24" width="12" height="12" />
        <rect x="24" y="24" width="12" height="12" />
        <rect x="12" y="36" width="12" height="12" />
        <rect x="36" y="36" width="12" height="12" />
      </g>
      <rect
        x="0.75"
        y="0.75"
        width="46.5"
        height="46.5"
        rx="12.5"
        fill="none"
        stroke="#c09447"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />

      {/* knight */}
      <text
        x="24"
        y="34.5"
        textAnchor="middle"
        fill="url(#clt-gold)"
        fontSize="27"
        fontFamily="'Segoe UI Symbol','Apple Symbols','Noto Sans Symbols 2','DejaVu Sans',serif"
      >
        {"\u265E"}
      </text>
    </svg>
  );
}
