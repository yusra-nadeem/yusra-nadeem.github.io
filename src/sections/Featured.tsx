import { memo, useCallback, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Play } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Lightbox from '../components/Lightbox';
import { featuredReels, type FeaturedReel } from '../data/featured';

type Filter = { key: string; label: string };

function FeaturedBase() {
  const [filterKey, setFilterKey] = useState<string>('all');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Build year + brand chips from data — order: All, then years (desc), then brands (alpha)
  const filters = useMemo<Filter[]>(() => {
    const years = Array.from(new Set(featuredReels.map((r) => r.year))).sort(
      (a, b) => Number(b) - Number(a),
    );
    const brands = Array.from(
      new Set(featuredReels.map((r) => r.brand)),
    ).sort();
    return [
      { key: 'all', label: `All · ${featuredReels.length}` },
      ...years.map((y) => ({ key: `year:${y}`, label: y })),
      ...brands.map((b) => ({ key: `brand:${b}`, label: b })),
    ];
  }, []);

  const filtered = useMemo(() => {
    if (filterKey === 'all') return featuredReels;
    if (filterKey.startsWith('year:'))
      return featuredReels.filter(
        (r) => r.year === filterKey.slice('year:'.length),
      );
    if (filterKey.startsWith('brand:'))
      return featuredReels.filter(
        (r) => r.brand === filterKey.slice('brand:'.length),
      );
    return featuredReels;
  }, [filterKey]);

  // Only reels with a real video are navigable in the lightbox.
  // Index passed to Lightbox is the position within this playable subset.
  const playable = useMemo(
    () => filtered.filter((r) => Boolean(r.videoSrc)),
    [filtered],
  );

  const openReel = useCallback(
    (reel: FeaturedReel) => {
      const idx = playable.findIndex((r) => r.id === reel.id);
      if (idx >= 0) setActiveIndex(idx);
    },
    [playable],
  );
  const closeLb = useCallback(() => setActiveIndex(null), []);
  const navigate = useCallback((next: number) => setActiveIndex(next), []);

  return (
    <section
      id="featured"
      aria-labelledby="featured-heading"
      className="section-y relative"
    >
      <div className="container-narrow">
        <SectionHeading
          id="featured-heading"
          number="04"
          eyebrow="On camera"
          title={
            <>
              Reels &amp; DVCs I’ve been{' '}
              <span className="italic text-accent">featured in</span>.
            </>
          }
          description="Selected on-camera and production work across eyewear, fashion, agency identity, and lifestyle. Tap the play button to watch — reels not yet uploaded are marked Coming soon."
        />

        {/* Filter chips */}
        <div
          role="toolbar"
          aria-label="Filter reels"
          className="mb-6 flex flex-wrap gap-2 sm:mb-7"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilterKey(f.key)}
              aria-pressed={filterKey === f.key}
              className="chip"
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 xs:gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 3xl:grid-cols-4">
          {filtered.map((reel, idx) => (
            <Reveal key={reel.id} delay={idx * 0.04} as="article">
              <ReelCard reel={reel} onPlay={() => openReel(reel)} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-[0.92rem] text-ink-muted">
            No reels match this filter yet.
          </p>
        )}

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-[0.92rem] text-ink-muted sm:mt-14 sm:text-[0.95rem]">
            Want the full reel-roll, with original cuts and director notes?{' '}
            <a
              href="#contact"
              className="text-ink underline decoration-accent decoration-1 underline-offset-4 hover:decoration-2"
            >
              Send me a message
            </a>
            .
          </p>
        </Reveal>
      </div>

      <Lightbox
        reels={playable}
        activeIndex={activeIndex}
        onClose={closeLb}
        onNavigate={navigate}
      />
    </section>
  );
}

function ReelCard({
  reel,
  onPlay,
}: {
  reel: FeaturedReel;
  onPlay: () => void;
}) {
  const reduced = useReducedMotion();
  const hasVideo = Boolean(reel.videoSrc);
  const accent = reel.accent ?? 'var(--accent)';

  // Shared visual chrome — used by both video + placeholder variants.
  const chrome = (
    <>
      {/* Legibility wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/15"
      />

      {/* Year — top left */}
      <div className="absolute left-3 top-3 inline-flex items-center rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">
        {reel.year}
      </div>

      {/* Reel — top right */}
      <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">
        Reel
      </div>

      {/* Bottom info */}
      <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
        <p className="text-[10px] uppercase tracking-[0.18em] opacity-85">
          {reel.role}
        </p>
        <p className="display mt-1 text-[1.45rem] leading-tight sm:text-[1.65rem]">
          {reel.brand}
        </p>
        <p className="text-[0.82rem] opacity-90 sm:text-[0.86rem]">
          {reel.title}
        </p>
      </div>
    </>
  );

  // No video → static "Coming soon" tile (not clickable).
  if (!hasVideo) {
    return (
      <div
        aria-label={`${reel.brand} — ${reel.title} (${reel.year}). Coming soon.`}
        className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-border bg-surface"
      >
        <div className="relative aspect-[9/16] w-full overflow-hidden bg-surface-elev">
          <ComingSoon accent={accent} brand={reel.brand} />
          {chrome}

          {/* Static "Coming soon" badge centered, replaces play button */}
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-white/25 bg-black/45 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white backdrop-blur"
          >
            Coming soon
          </span>
        </div>
      </div>
    );
  }

  // Has video → button card, big play affordance, click opens Lightbox
  return (
    <motion.button
      type="button"
      onClick={onPlay}
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
      aria-label={`Play ${reel.brand} — ${reel.title} (${reel.year})`}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-border bg-surface text-left transition-colors hover:border-accent/40"
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-surface-elev">
        {/* First frame as preview — no autoplay, no controls.
            #t=0.1 forces the browser to decode/show the first frame in most engines. */}
        <video
          src={`${reel.videoSrc}#t=0.1`}
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {chrome}

        {/* Big play button */}
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-white/40 group-hover:bg-white/25 sm:h-16 sm:w-16"
        >
          <span
            aria-hidden="true"
            className="absolute -inset-1 rounded-full border border-white/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <Play
            size={22}
            strokeWidth={1.8}
            fill="currentColor"
            className="translate-x-[1px]"
          />
        </span>
      </div>
    </motion.button>
  );
}

function ComingSoon({ accent, brand }: { accent: string; brand: string }) {
  const initials = brand
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 3);

  return (
    <div
      className="absolute inset-0"
      style={{
        background: `radial-gradient(120% 80% at 30% 20%, ${accent}55, transparent 60%), linear-gradient(155deg, var(--surface-elev), var(--surface))`,
      }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(currentColor 0.5px, transparent 0.5px)',
          backgroundSize: '16px 16px',
        }}
      />
      <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 text-center">
        <p
          className="display text-[clamp(2.6rem,8vw,4.4rem)] leading-none"
          style={{ color: accent, opacity: 0.6 }}
        >
          {initials}
        </p>
      </div>
    </div>
  );
}

export default memo(FeaturedBase);
