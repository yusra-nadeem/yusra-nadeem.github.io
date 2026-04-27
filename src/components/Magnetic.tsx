import { useRef, type ReactNode, type PointerEvent as ReactPointerEvent } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

type Props = {
  children: ReactNode;
  /** Max pixels of pull at the edges of the element. */
  strength?: number;
  className?: string;
};

/**
 * Cursor-attraction wrapper.
 * Smooth spring follow on fine pointers; collapses to a static span on
 * touch / coarse pointers and respects prefers-reduced-motion.
 */
export default function Magnetic({
  children,
  strength = 14,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 18, mass: 0.55 });
  const sy = useSpring(y, { stiffness: 240, damping: 18, mass: 0.55 });

  if (reduced) {
    return <span className={className}>{children}</span>;
  }

  const handleMove = (e: ReactPointerEvent<HTMLSpanElement>) => {
    if (e.pointerType !== 'mouse') return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    // Normalize cursor offset to [-1, 1] of half-size, then scale by strength
    x.set(((e.clientX - cx) / (rect.width / 2)) * strength);
    y.set(((e.clientY - cy) / (rect.height / 2)) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={`magnetic ${className ?? ''}`}
    >
      {children}
    </motion.span>
  );
}
