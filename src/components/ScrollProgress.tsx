import { memo } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Top-of-page scroll progress bar.
 * 2px gradient hairline — uses Framer's useScroll + spring for buttery feel.
 */
function ScrollProgressBase() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
      style={{
        scaleX,
        background:
          'linear-gradient(90deg, var(--accent), var(--accent-2))',
      }}
    />
  );
}

export default memo(ScrollProgressBase);
