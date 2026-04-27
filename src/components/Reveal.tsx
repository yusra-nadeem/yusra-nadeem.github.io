import { memo, type ComponentType, type ReactNode } from 'react';
import { motion, useReducedMotion, type MotionProps } from 'framer-motion';

type RevealAs = 'div' | 'section' | 'span' | 'li' | 'article';

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: RevealAs;
  once?: boolean;
};

const COMPONENT_MAP: Record<RevealAs, ComponentType<MotionProps & { className?: string; children?: ReactNode }>> = {
  div: motion.div,
  section: motion.section,
  span: motion.span,
  li: motion.li,
  article: motion.article,
};

/**
 * Subtle in-view reveal — fade + tiny lift.
 * Honors prefers-reduced-motion automatically.
 */
function RevealBase({
  children,
  delay = 0,
  y = 16,
  className,
  as = 'div',
  once = true,
}: Props) {
  const reduced = useReducedMotion();
  const Tag = COMPONENT_MAP[as];

  return (
    <Tag
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}

export default memo(RevealBase);
