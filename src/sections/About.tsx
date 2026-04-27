import { memo, type ReactNode } from 'react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { onPointerSheen } from '../lib/sheen';
import { personal } from '../data/personal';
import { education } from '../data/experience';

function AboutBase() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-y relative"
    >
      <div className="container-narrow">
        <SectionHeading
          id="about-heading"
          number="01"
          eyebrow="About"
          title={
            <>
              Brand stories told with{' '}
              <span className="italic text-accent">intention</span>.
            </>
          }
          description="A short introduction — who I am, what I’ve built, and how I work alongside senior teams."
        />

        {/* Top: Portrait + bio + values balance the row.
            Portrait sits in a 9/12 ratio frame so it crops elegantly. */}
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)] lg:items-start lg:gap-12">
          {/* Portrait slot — drop /portrait.webp into /public to activate */}
          <Reveal>
            <figure className="relative isolate overflow-hidden rounded-3xl border border-border bg-surface-elev">
              <div className="aspect-[4/5] w-full">
                <picture>
                  <source srcSet="/portrait.jpeg" type="image/jpeg" />
                  <source srcSet="/portrait.webp" type="image/webp" />
                  <img
                    src="/portrait.jpeg"
                    alt="Portrait of Yusra Nadeem"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      // Hide broken image gracefully — placeholder layer below shows.
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                    className="h-full w-full object-cover"
                  />
                </picture>
                {/* Editorial placeholder — visible until a real portrait is dropped in /public */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 grid place-items-center"
                  style={{
                    background:
                      'radial-gradient(120% 80% at 30% 20%, color-mix(in oklab, var(--accent), transparent 55%), transparent 60%), linear-gradient(155deg, var(--surface-elev), var(--surface))',
                  }}
                >
                  <div className="text-center">
                    <p
                      className="display text-[clamp(3.5rem,8vw,5.5rem)] leading-none text-accent opacity-70"
                      style={{ fontStyle: 'italic' }}
                    >
                      yn
                    </p>
                    <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                      Drop /portrait.jpg into /public
                    </p>
                  </div>
                </div>
              </div>
              {/* Caption strip — adds editorial weight */}
              <figcaption className="flex items-center justify-between gap-3 border-t border-border bg-surface/80 px-4 py-3 backdrop-blur-sm sm:px-5">
                <span className="text-[0.78rem] uppercase tracking-[0.16em] text-ink-muted">
                  {personal.location}
                </span>
                <span className="display text-[0.95rem] italic text-ink-muted">
                  2026
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Reveal>
              <p className="display max-w-[34ch] text-[clamp(1.4rem,1.1rem+1vw,1.95rem)] leading-snug text-ink">
                I build the bridge between
                <span className="italic text-accent"> creative ambition </span>
                and the calm, data-led execution that ships it.
              </p>
            </Reveal>

            <div className="mt-6 space-y-5 text-[0.97rem] leading-relaxed text-ink-soft sm:text-[1.05rem]">
              {personal.bio.map((paragraph, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {personal.values.map((v, i) => (
                <Reveal key={v.title} delay={0.05 + i * 0.05} as="li">
                  <article
                    className="sheen group h-full rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-accent/40 hover:bg-surface-elev sm:p-5"
                    onPointerMove={onPointerSheen}
                  >
                    <h3 className="text-[0.92rem] font-medium text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink-soft">
                      {v.copy}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom — meta DL + education */}
        <Reveal delay={0.15}>
          <div className="mt-10 grid gap-4 rounded-3xl border border-border bg-surface-elev p-6 sm:p-7 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-10 lg:p-8">
            <dl className="grid grid-cols-2 gap-5 text-sm sm:gap-7 lg:grid-cols-1 lg:gap-6 lg:self-center lg:border-r lg:border-border lg:pr-10">
              <Meta label="Based in" value={personal.location} />
              <Meta label="Languages" value="English · Urdu" />
              <Meta
                label="Reach me"
                value={
                  <a
                    href={`mailto:${personal.email}`}
                    className="break-all hover:text-accent"
                  >
                    {personal.email}
                  </a>
                }
              />
            </dl>

            <div>
              <p className="eyebrow">Education</p>
              <ul className="mt-4 space-y-3.5">
                {education.map((e) => (
                  <li
                    key={e.degree}
                    className="border-b border-border/70 pb-3.5 last:border-b-0 last:pb-0"
                  >
                    <p className="text-sm text-ink sm:text-[0.95rem]">
                      {e.degree}
                    </p>
                    <p className="mt-0.5 text-xs text-ink-muted sm:text-[0.8rem]">
                      {e.school} <span aria-hidden="true">·</span> {e.years}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div>
      <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted">
        {label}
      </dt>
      <dd className="mt-1.5 text-[0.92rem] text-ink sm:text-[0.95rem]">
        {value}
      </dd>
    </div>
  );
}

export default memo(AboutBase);
