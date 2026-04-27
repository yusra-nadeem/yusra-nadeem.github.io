import { memo, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, MapPin, Sparkles } from 'lucide-react';
import { personal } from '../data/personal';
import ScrollPrompt from '../components/ScrollPrompt';
import BrandMarquee from '../components/BrandMarquee';
import SplitText from '../components/SplitText';
import Magnetic from '../components/Magnetic';

const ROLES = personal.roles;

const HERO_BRANDS = [
  'Hybriddot',
  'BloxDot',
  'Nine Dot Properties',
  'Dot Dukaan',
  'Zlenso',
  'Layesha Cosmetics',
  'Blue World City',
  'Khilafat Cola',
  'Blue Properties',
  'Sangat Attire',
  'Legends Enclave',
  'Ali Khan Swati',
] as const;

function HeroBase() {
  const reduced = useReducedMotion();
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [reduced]);

  const rise = (delay = 0) =>
    reduced
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.85,
            delay,
            ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
          },
        };

  // Headline reveal timing — first name first, then last name a beat later.
  const firstStagger = 0.05;
  const lastNameDelay =
    0.15 + (personal.firstName.length + 1) * firstStagger; // pause before last name

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-[6.5rem] pb-8 sm:pt-[7.5rem] sm:pb-12 lg:pt-[8.5rem] lg:pb-16 3xl:pt-[10rem]"
    >
      <div aria-hidden="true" className="glow-spot" />

      <div className="container-narrow relative">
        {/* Top label rail */}
        <motion.div
          {...rise(0)}
          className="flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          <span className="section-num">00</span>
          <span className="eyebrow">Portfolio &middot; 2026</span>
          {personal.available && (
            <span className="ml-auto inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-ink-soft backdrop-blur-sm">
              <span aria-hidden="true" className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent/50" />
                <span className="relative inline-block h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for senior roles
            </span>
          )}
        </motion.div>

        <div className="mt-8 grid gap-10 sm:mt-10 lg:mt-14 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:items-end lg:gap-14 3xl:gap-20">
          <div>
            {/* Cinematic headline — character-by-character reveal */}
            <h1
              id="hero-heading"
              aria-label={personal.fullName}
              className="display text-[clamp(2.6rem,1.4rem+9vw,5.6rem)] sm:text-[clamp(3rem,1rem+8vw,7rem)] lg:text-[clamp(3.6rem,2vw+3rem,8.5rem)] 3xl:text-[10rem]"
            >
              <SplitText
                text={personal.firstName}
                stagger={firstStagger}
                travel={28}
                blur={8}
                ariaLabel=""
                initialDelay={0.05}
                className="block"
              />
              <SplitText
                text={`${personal.lastName}.`}
                stagger={firstStagger}
                travel={28}
                blur={8}
                ariaLabel=""
                initialDelay={lastNameDelay}
                className="block italic gradient-text"
              />
            </h1>

            {/* Role rotator + location */}
            <motion.div
              {...rise(0.18 + lastNameDelay)}
              className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.95rem] text-ink-soft sm:mt-7 sm:text-[1.05rem] lg:text-[1.1rem]"
            >
              <motion.span
                key={roleIdx}
                initial={reduced ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                className="font-medium text-ink whitespace-nowrap"
              >
                {ROLES[roleIdx]}
              </motion.span>
              <span aria-hidden="true" className="text-ink-muted">·</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={15} strokeWidth={1.6} />
                {personal.location}
              </span>
            </motion.div>

            <motion.p
              {...rise(0.26 + lastNameDelay)}
              className="mt-7 max-w-[40ch] text-[1rem] leading-relaxed text-ink-soft sm:mt-9 sm:text-[1.1rem] lg:text-[1.18rem] 3xl:max-w-[44ch]"
            >
              {personal.tagline}
            </motion.p>

            {/* CTA pair — magnetic */}
            <motion.div
              {...rise(0.34 + lastNameDelay)}
              className="mt-8 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
            >
              <Magnetic strength={10}>
                <a href="#contact" className="btn btn-primary group">
                  <span>Start a conversation</span>
                  <ArrowDownRight
                    size={16}
                    strokeWidth={1.8}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </Magnetic>
              <Magnetic strength={8}>
                <a href="#projects" className="btn btn-secondary">
                  <Sparkles size={15} strokeWidth={1.6} className="text-accent" />
                  <span>View brands</span>
                </a>
              </Magnetic>
            </motion.div>

            {/* Now pill — what she's actively shipping */}
            <motion.div
              {...rise(0.44 + lastNameDelay)}
              className="mt-7 flex max-w-[40rem] items-start gap-3 rounded-2xl border border-border bg-surface/60 p-4 backdrop-blur-sm sm:mt-8 sm:gap-4 sm:p-5"
            >
              <span
                aria-hidden="true"
                className="relative mt-1.5 inline-flex h-2.5 w-2.5 flex-shrink-0"
              >
                <span className="absolute inset-0 animate-ping rounded-full bg-accent/55" />
                <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.68rem] uppercase tracking-[0.18em] text-ink-muted">
                  {personal.now.label}
                </span>
                <span className="mt-1 block text-[0.92rem] leading-relaxed text-ink sm:text-[0.98rem]">
                  {personal.now.line}
                </span>
              </span>
            </motion.div>
          </div>

          {/* Stats card — stacks on phones (<sm) so labels read fully,
              3-col from sm+ where there's room for the column layout. */}
          <motion.aside
            {...rise(0.5 + lastNameDelay)}
            className="relative grid grid-cols-1 gap-4 rounded-3xl border border-border bg-surface/70 p-4 backdrop-blur-sm sm:grid-cols-3 sm:gap-6 sm:p-6 lg:p-7"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-[inherit]"
              style={{
                background:
                  'radial-gradient(220px circle at 100% 0%, color-mix(in oklab, var(--accent), transparent 86%), transparent 60%)',
              }}
            />
            <Stat number="3+" label="Years leading content & campaigns" />
            <Stat number="14+" label="Brands managed end-to-end" />
            <Stat number="6" label="Verticals — agency to retail" />
          </motion.aside>
        </div>

        <motion.div
          {...rise(0.6 + lastNameDelay)}
          className="mt-10 flex flex-wrap items-center justify-between gap-4 sm:mt-12"
        >
          <ScrollPrompt />
          <p className="hidden text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted sm:block">
            Lahore &nbsp;·&nbsp; Open to remote &amp; on-site
          </p>
        </motion.div>
      </div>

      {/* Brand marquee */}
      <motion.div
        {...rise(0.65 + lastNameDelay)}
        className="mt-10 border-y border-border bg-bg-alt sm:mt-14"
      >
        <BrandMarquee items={HERO_BRANDS} />
      </motion.div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    // On phones the row is horizontal (number | label) so 3 stats stack into
    // a tight, readable card. From sm+ we go vertical (number above label).
    <div className="relative flex items-baseline gap-3 sm:block">
      <p className="display text-[clamp(1.7rem,1.2rem+1.5vw,2.4rem)] text-ink shrink-0">
        {number}
      </p>
      <p className="text-[11px] uppercase tracking-[0.16em] leading-snug text-ink-muted sm:mt-1 sm:text-[11px]">
        {label}
      </p>
    </div>
  );
}

export default memo(HeroBase);
