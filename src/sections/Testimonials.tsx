import { memo } from 'react';
import { Quote } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { onPointerSheen } from '../lib/sheen';
import { testimonials, type Testimonial } from '../data/testimonials';

function deriveInitials(t: Testimonial) {
  if (t.initials) return t.initials;
  return t.author
    .split(' ')
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function TestimonialsBase() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="section-y relative"
    >
      <div className="container-narrow">
        <SectionHeading
          id="testimonials-heading"
          number="06"
          eyebrow="Testimonials"
          title={
            <>
              Words from the people I’ve{' '}
              <span className="italic text-accent">shipped beside</span>.
            </>
          }
          description="Selected reflections from creative directors, brand leads, and marketing officers I’ve partnered with on launches and long-running campaigns."
        />

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6 3xl:grid-cols-4">
          {testimonials.map((t, idx) => (
            <Reveal key={t.author + t.company} delay={idx * 0.06} as="article">
              <figure
                className="sheen group relative flex h-full flex-col rounded-3xl border border-border bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-elev sm:p-7"
                onPointerMove={onPointerSheen}
              >
                <Quote
                  size={22}
                  strokeWidth={1.4}
                  className="text-accent opacity-80"
                  aria-hidden="true"
                />
                <blockquote className="mt-4 text-[0.97rem] leading-relaxed text-ink sm:text-[1.02rem]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border/70 pt-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[0.78rem] font-medium text-bg"
                    style={{
                      background:
                        'linear-gradient(135deg, var(--accent), var(--accent-2))',
                    }}
                  >
                    {deriveInitials(t)}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.88rem] font-medium text-ink sm:text-[0.92rem]">
                      {t.author}
                    </span>
                    <span className="block text-[0.78rem] text-ink-muted sm:text-[0.8rem]">
                      {t.role} <span aria-hidden="true">·</span> {t.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-[0.84rem] text-ink-muted sm:mt-10">
            Want a reference call?{' '}
            <a
              href="#contact"
              className="text-ink underline decoration-accent decoration-1 underline-offset-4 hover:decoration-2"
            >
              Get in touch
            </a>{' '}
            and I’ll connect you with the right person.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default memo(TestimonialsBase);
