import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Props = {
  text: string;
  /** Stagger delay between characters in seconds. */
  stagger?: number;
  /** Initial transform travel in px. */
  travel?: number;
  /** Initial blur in px (cinematic). 0 to disable. */
  blur?: number;
  /** Per-character class (color/italic/etc). */
  charClassName?: string;
  /** Wrapping class on the visible word run. */
  className?: string;
  /** Optional fixed delay before the whole reveal starts. */
  initialDelay?: number;
  /** Accessible label override; falls back to `text`. */
  ariaLabel?: string;
};

/**
 * Cinematic per-character reveal.
 *
 * - Visually animates each character with a small lift + blur fade.
 * - Spaces preserve layout via &nbsp;.
 * - Screen readers see the whole string once via aria-label; the visible
 *   spans are hidden from assistive tech.
 */
function SplitTextBase({
  text,
  stagger = 0.035,
  travel = 22,
  blur = 6,
  charClassName,
  className,
  initialDelay = 0,
  ariaLabel,
}: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <span aria-label={ariaLabel ?? text} className={className}>
        {text}
      </span>
    );
  }

  const characters = Array.from(text);

  return (
    <span
      aria-label={ariaLabel ?? text}
      className={`inline-block ${className ?? ''}`}
    >
      <span aria-hidden="true">
        {characters.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            className={`inline-block ${charClassName ?? ''}`}
            initial={{
              opacity: 0,
              y: travel,
              filter: blur > 0 ? `blur(${blur}px)` : undefined,
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: blur > 0 ? 'blur(0px)' : undefined,
            }}
            transition={{
              duration: 0.7,
              delay: initialDelay + i * stagger,
              ease: [0.2, 0.8, 0.2, 1],
            }}
          >
            {char === ' ' ? ' ' : char}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

export default memo(SplitTextBase);
