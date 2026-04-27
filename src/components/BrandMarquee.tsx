import { memo } from 'react';

type Props = {
  items: readonly string[];
  className?: string;
};

/**
 * Continuous infinite-scroll brand strip.
 * Pure CSS animation, GPU-cheap, pauses on hover, masks both edges.
 * Honors prefers-reduced-motion via the global media-query rule in index.css.
 */
function BrandMarqueeBase({ items, className = '' }: Props) {
  // Duplicate the list so the keyframe can translate -50% seamlessly.
  const sequence = [...items, ...items];

  return (
    <div
      className={`marquee-mask relative w-full overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="marquee py-2 sm:py-3">
        {sequence.map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="display flex shrink-0 items-center gap-6 px-6 text-[clamp(1.4rem,2.4vw,2.4rem)] text-ink-muted sm:gap-10 sm:px-10"
          >
            {item}
            <span
              className="inline-block h-[6px] w-[6px] rounded-full bg-accent/70"
              aria-hidden="true"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default memo(BrandMarqueeBase);
