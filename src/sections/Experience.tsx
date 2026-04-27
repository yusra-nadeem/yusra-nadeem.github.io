import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Download, MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { experience } from '../data/experience';
import { personal } from '../data/personal';

function ExperienceBase() {
  const reduced = useReducedMotion();

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-y relative"
    >
      <div className="container-narrow">
        <SectionHeading
          id="experience-heading"
          number="02"
          eyebrow="Experience"
          title={
            <>
              A timeline of{' '}
              <span className="italic text-accent">campaigns</span>, teams, and
              trust.
            </>
          }
          description="From real-estate verticals to creative agencies — three years of progressive responsibility, on-time delivery, and measurable lift."
        />

        <ol className="relative">
          {/* Vertical spine */}
          <div
            aria-hidden="true"
            className="absolute left-[10px] top-2 bottom-2 w-px bg-border md:left-[calc(11rem+10px)] lg:left-[calc(12rem+10px)]"
          />

          {experience.map((item, idx) => (
            <motion.li
              key={`${item.company}-${item.start}`}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -8% 0px' }}
              transition={{
                duration: 0.55,
                delay: idx * 0.04,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="group relative grid gap-3 rounded-2xl px-2 py-5 transition-colors hover:bg-surface md:grid-cols-[11rem_1fr] md:gap-6 md:px-3 md:py-6 lg:grid-cols-[12rem_1fr] lg:gap-8"
            >
              {/* Date column */}
              <div className="relative pl-7 md:pl-0 md:pr-6 md:text-right">
                {/* Dot */}
                <span
                  aria-hidden="true"
                  className="absolute left-[3px] top-[7px] inline-flex h-3.5 w-3.5 items-center justify-center md:left-auto md:right-[-9px]"
                >
                  <span className="absolute inset-0 rounded-full bg-accent/20 transition-transform duration-500 group-hover:scale-150" />
                  <span className="relative inline-block h-3 w-3 rounded-full border-2 border-bg bg-accent" />
                </span>

                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-ink-muted">
                  {item.start} <span aria-hidden="true">—</span> {item.end}
                </p>
                {item.current && (
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-accent">
                    <span
                      aria-hidden="true"
                      className="relative inline-flex h-1.5 w-1.5"
                    >
                      <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
                      <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    Now
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="pl-7 md:pl-2">
                <h3 className="text-[1.05rem] font-medium leading-tight text-ink sm:text-[1.15rem] lg:text-[1.25rem]">
                  {item.role}
                </h3>
                <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.85rem] text-ink-soft sm:text-[0.92rem]">
                  <span className="font-medium">{item.company}</span>
                  <span aria-hidden="true" className="text-ink-muted">·</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={13} strokeWidth={1.6} />
                    {item.location}
                  </span>
                </p>
                <ul className="mt-4 space-y-2.5 text-[0.88rem] leading-relaxed text-ink-soft sm:text-[0.95rem]">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.65rem] inline-block h-[1.5px] w-3 flex-shrink-0 rounded-full bg-ink-muted/60"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface-elev p-5 sm:p-7">
            <p className="text-[0.95rem] text-ink-soft sm:text-base">
              Want the long version? My resume expands every campaign with
              KPIs and before/after numbers.
            </p>
            <a
              href={personal.resumeUrl}
              download={personal.resumeFileName}
              className="btn btn-primary"
              aria-label="Download Yusra Nadeem's resume (PDF)"
            >
              <Download size={15} strokeWidth={1.8} />
              Download resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default memo(ExperienceBase);
