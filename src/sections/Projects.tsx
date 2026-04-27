import { memo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { onPointerSheen } from '../lib/sheen';
import {
  brandPeriods,
  caseStudies,
  disciplines,
  type CaseStudy,
} from '../data/projects';

function ProjectsBase() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-y relative"
    >
      <div className="container-narrow">
        <SectionHeading
          id="projects-heading"
          number="03"
          eyebrow="Brands I’ve shaped"
          title={
            <>
              Three eras. Fourteen brands.
              <br className="hidden sm:block" />{' '}
              <span className="italic text-accent">One throughline.</span>
            </>
          }
          description="From Pakistan’s most active real-estate ecosystems to consumer fashion and a creative agency’s in-house ventures — here’s where the work has lived."
        />

        {/* Brand periods */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {brandPeriods.map((period, idx) => (
            <Reveal key={period.id} delay={idx * 0.06} as="article">
              <div
                className="sheen group relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-elev sm:p-7 lg:p-8"
                onPointerMove={onPointerSheen}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="eyebrow">{period.era}</p>
                  <span className="display text-[0.95rem] italic text-ink-muted">
                    {String(period.brands.length).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="display mt-4 text-[1.45rem] leading-tight text-ink sm:text-[1.65rem] lg:text-[1.85rem]">
                  {period.headline}
                </h3>

                <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-soft sm:text-[0.95rem]">
                  {period.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                  {period.brands.map((brand) => (
                    <li key={brand} className="tag">
                      {brand}
                    </li>
                  ))}
                </ul>

                <span
                  aria-hidden="true"
                  className="mt-7 flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.16em] text-ink-muted transition-colors group-hover:text-accent"
                >
                  <span className="h-px w-6 bg-current" />
                  Active brand portfolio
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Selected cases — deep dive on two flagship engagements */}
        <div className="mt-16 sm:mt-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <p className="eyebrow">Selected cases</p>
              <p className="hidden text-[0.78rem] text-ink-muted sm:block">
                {caseStudies.length} flagship engagements
              </p>
            </div>
          </Reveal>

          <div className="mt-5 grid gap-4 lg:grid-cols-2 lg:gap-6">
            {caseStudies.map((cs, idx) => (
              <Reveal key={cs.id} delay={idx * 0.06} as="article">
                <CaseCard study={cs} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Disciplines strip */}
        <div className="mt-16 sm:mt-20">
          <Reveal>
            <p className="eyebrow">Disciplines</p>
          </Reveal>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {disciplines.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.05} as="article">
                <div className="group flex h-full items-start justify-between gap-3 rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface-elev">
                  <div>
                    <h4 className="text-[0.9rem] font-medium text-ink sm:text-[0.95rem]">
                      {d.title}
                    </h4>
                    <p className="mt-1.5 text-[0.86rem] leading-relaxed text-ink-soft sm:text-[0.9rem]">
                      {d.summary}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.6}
                    className="mt-0.5 flex-shrink-0 text-ink-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseCard({ study }: { study: CaseStudy }) {
  const accent = study.accent ?? 'var(--accent)';

  return (
    <div
      className="sheen group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-accent/40"
      onPointerMove={onPointerSheen}
    >
      {/* Header band — gradient tinted by case-specific accent */}
      <div
        className="relative px-6 pb-5 pt-6 sm:px-7 sm:pb-6 sm:pt-7"
        style={{
          background: `linear-gradient(160deg, color-mix(in oklab, ${accent}, transparent 86%) 0%, transparent 70%)`,
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-2">
          <p className="eyebrow">{study.vertical}</p>
          <span className="display text-[0.88rem] italic text-ink-muted">
            {study.period}
          </span>
        </div>
        <h3 className="display mt-3 text-[1.5rem] leading-tight text-ink sm:text-[1.75rem]">
          {study.brand}
        </h3>
        <p className="mt-1 text-[0.8rem] uppercase tracking-[0.14em] text-ink-muted">
          {study.role}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-5 px-6 pb-6 sm:px-7 sm:pb-7">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.16em] text-ink-muted">
            Challenge
          </p>
          <p className="mt-2 text-[0.92rem] leading-relaxed text-ink sm:text-[0.95rem]">
            {study.challenge}
          </p>
        </div>

        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.16em] text-ink-muted">
            Approach
          </p>
          <ul className="mt-2 space-y-2 text-[0.88rem] leading-relaxed text-ink-soft sm:text-[0.92rem]">
            {study.approach.map((step) => (
              <li key={step} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[0.65rem] inline-block h-[1.5px] w-3 flex-shrink-0 rounded-full bg-ink-muted/60"
                />
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* Stacks on phones (<sm) so longer metric strings like
            "↑ significantly" read fully; 3-col from sm+ */}
        <div className="mt-auto grid grid-cols-1 gap-3 border-t border-border pt-5 sm:grid-cols-3 sm:gap-3">
          {study.outcomes.map((o) => (
            <div
              key={o.label}
              className="flex items-baseline gap-3 sm:block"
            >
              <p
                className="display text-[1.05rem] shrink-0 sm:text-[1.05rem]"
                style={{ color: accent }}
              >
                {o.metric}
              </p>
              <p className="text-[0.7rem] uppercase tracking-[0.14em] leading-snug text-ink-muted sm:mt-1">
                {o.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectsBase);
