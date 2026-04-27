import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Props = {
  href?: string;
  label?: string;
};

function ScrollPromptBase({ href = '#about', label = 'Scroll to explore' }: Props) {
  const reduced = useReducedMotion();
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ink-muted transition-colors hover:text-ink"
    >
      <motion.span
        aria-hidden="true"
        className="relative inline-flex h-9 w-5 overflow-hidden rounded-full border border-ink-muted/40"
      >
        <motion.span
          className="absolute left-1/2 top-1.5 -translate-x-1/2 rounded-full bg-ink-muted"
          style={{ width: 3, height: 6 }}
          animate={
            reduced
              ? { y: 0 }
              : { y: [0, 10, 0], opacity: [1, 0.4, 1] }
          }
          transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity }}
        />
      </motion.span>
      <span className="font-medium">{label}</span>
    </a>
  );
}

export default memo(ScrollPromptBase);
