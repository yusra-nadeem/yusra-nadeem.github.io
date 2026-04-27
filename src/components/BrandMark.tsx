import { memo, useId } from 'react';

type Props = {
  size?: number;
  className?: string;
  ariaLabel?: string;
};

/**
 * Premium 'yn' monogram — multi-layer SVG.
 *
 * - Warm copper-to-ember linear gradient (matches favicon exactly)
 * - Top-left specular highlight + bottom-right inner shadow for depth
 * - Hairline inner border (light + dark) for a satisfying "rim"
 * - Italic 'yn' set in Fraunces with tight kerning, fallback chain for safety
 * - Accent flourish dot with halo ring (recognizable at any size)
 *
 * Pure SVG, no font-loading dependency for the plate, scales perfectly from
 * 16 → 256+ px. `useId` keeps gradient IDs unique across multiple instances.
 */
function BrandMarkBase({
  size = 36,
  className = '',
  ariaLabel = 'Yusra Nadeem',
}: Props) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const ids = {
    bg: `bm-bg-${uid}`,
    hl: `bm-hl-${uid}`,
    sh: `bm-sh-${uid}`,
  };

  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      className={`shrink-0 ${className}`}
    >
      <defs>
        <linearGradient id={ids.bg} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5a07b" />
          <stop offset="45%" stopColor="#c4623d" />
          <stop offset="100%" stopColor="#7d3a1f" />
        </linearGradient>
        <radialGradient id={ids.hl} cx="28%" cy="18%" r="55%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={ids.sh} cx="80%" cy="95%" r="60%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Plate */}
      <rect width="64" height="64" rx="16" ry="16" fill={`url(#${ids.bg})`} />
      <rect width="64" height="64" rx="16" ry="16" fill={`url(#${ids.sh})`} />
      <rect width="64" height="64" rx="16" ry="16" fill={`url(#${ids.hl})`} />

      {/* Hairline rims */}
      <rect
        x="0.5"
        y="0.5"
        width="63"
        height="63"
        rx="15.5"
        ry="15.5"
        fill="none"
        stroke="rgba(0,0,0,0.18)"
        strokeWidth="1"
      />
      <rect
        x="1.25"
        y="1.25"
        width="61.5"
        height="61.5"
        rx="14.75"
        ry="14.75"
        fill="none"
        stroke="rgba(255,255,255,0.16)"
        strokeWidth="0.6"
      />

      {/* Monogram */}
      <text
        x="32"
        y="44.5"
        textAnchor="middle"
        fontFamily="Fraunces, 'Cormorant Garamond', 'Times New Roman', Georgia, serif"
        fontStyle="italic"
        fontWeight={500}
        fontSize="36"
        fill="#fffaf3"
        letterSpacing="-2.2"
      >
        yn
      </text>

      {/* Accent flourish */}
      <circle cx="50" cy="14" r="2.4" fill="#fffaf3" opacity="0.95" />
      <circle
        cx="50"
        cy="14"
        r="4.6"
        fill="none"
        stroke="#fffaf3"
        strokeWidth="0.7"
        opacity="0.45"
      />
    </svg>
  );
}

export default memo(BrandMarkBase);
