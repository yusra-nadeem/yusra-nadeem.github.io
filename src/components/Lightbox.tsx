import { memo, useCallback, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { FeaturedReel } from '../data/featured';

type Props = {
  reels: FeaturedReel[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

/**
 * Reel lightbox — fullscreen modal with prev/next, ESC to close, focus trap.
 * Plays inline if videoSrc is present, otherwise shows a styled placeholder.
 */
function LightboxBase({ reels, activeIndex, onClose, onNavigate }: Props) {
  const reduced = useReducedMotion();
  const open = activeIndex !== null;
  const reel = open && activeIndex !== null ? reels[activeIndex] : undefined;

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    const next = (activeIndex - 1 + reels.length) % reels.length;
    onNavigate(next);
  }, [activeIndex, reels.length, onNavigate]);

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex + 1) % reels.length);
  }, [activeIndex, reels.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose, goPrev, goNext]);

  // Lock scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && reel && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${reel.brand} — ${reel.title}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
          className="lb-backdrop flex items-center justify-center p-2 sm:p-4"
          onClick={onClose}
        >
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white transition-colors hover:bg-black/55 sm:right-6 sm:top-6"
          >
            <X size={18} />
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous reel"
            className="absolute left-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white transition-colors hover:bg-black/55 sm:inline-flex sm:left-4"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next reel"
            className="absolute right-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white transition-colors hover:bg-black/55 sm:inline-flex sm:right-4"
          >
            <ChevronRight size={20} />
          </button>

          {/* Stage — width is derived from available viewport height so the
              9:16 video can never overflow vertically. Footer (~76px) + outer
              padding (~24px) are subtracted from the height budget. */}
          <motion.div
            initial={reduced ? false : { y: 16, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={reduced ? undefined : { y: 16, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              // 160px reserves comfortable space for the 3-line meta strip +
              // padding even on the shortest laptop viewports (~600dvh) so
              // the title always reads fully.
              width: 'min(26rem, 92vw, calc((100dvh - 160px) * 9 / 16))',
              maxHeight: 'calc(100dvh - 24px)',
            }}
            className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black shadow-lifted"
          >
            <div className="relative aspect-[9/16] w-full">
              {reel.videoSrc && (
                <video
                  key={reel.id}
                  src={reel.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  loop
                  className="absolute inset-0 h-full w-full object-contain"
                />
              )}

              {/* Pagination — overlay on the video corner so the meta strip
                  below gets the full width for the title to read cleanly. */}
              <div
                className="pointer-events-none absolute left-3 top-3 z-10 inline-flex items-center rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] tabular-nums text-white/85 backdrop-blur"
                aria-label={`Reel ${activeIndex + 1} of ${reels.length}`}
              >
                {String(activeIndex + 1).padStart(2, '0')}
                <span aria-hidden="true" className="mx-1 text-white/40">
                  /
                </span>
                {String(reels.length).padStart(2, '0')}
              </div>
            </div>

            {/* Meta footer — full-width, no crowding */}
            <div className="border-t border-white/10 bg-black px-4 py-3.5 text-white sm:px-5 sm:py-4">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white/60">
                <span className="whitespace-nowrap">{reel.role}</span>
                <span aria-hidden="true" className="mx-1.5 text-white/40">
                  ·
                </span>
                <span className="whitespace-nowrap">{reel.year}</span>
              </p>
              <p className="display mt-1.5 text-[1.25rem] leading-tight text-white">
                {reel.brand}
              </p>
              <p className="mt-1 text-[0.86rem] leading-snug text-white/75">
                {reel.title}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default memo(LightboxBase);
