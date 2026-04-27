import { memo } from 'react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { onPointerSheen } from '../lib/sheen';
import { skillGroups, tools, workMoves } from '../data/skills';

function SkillsBase() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-y relative"
    >
      <div className="container-narrow">
        <SectionHeading
          id="skills-heading"
          number="05"
          eyebrow="Expertise"
          title={
            <>
              Strategy, leadership, content,
              <br className="hidden sm:block" />{' '}
              <span className="italic text-accent">
                and the numbers behind them
              </span>
              .
            </>
          }
          description="A working stack — not a wishlist. Each capability has been used in production for clients with real budgets and real deadlines."
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6 3xl:grid-cols-4">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={idx * 0.05} as="article">
                <div
                  className="sheen group relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-elev sm:p-7"
                  onPointerMove={onPointerSheen}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl text-accent transition-transform duration-500 group-hover:scale-105"
                      style={{
                        background:
                          'color-mix(in oklab, var(--accent), transparent 86%)',
                      }}
                    >
                      <Icon size={19} strokeWidth={1.6} />
                    </span>
                    <h3 className="text-[1.05rem] font-medium leading-tight text-ink sm:text-[1.15rem]">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-2.5 text-[0.88rem] leading-relaxed text-ink-soft sm:text-[0.92rem]">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[0.65rem] inline-block h-[1.5px] w-3 flex-shrink-0 rounded-full bg-ink-muted/60"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* How I work — process strip */}
        <div className="mt-14 sm:mt-20">
          <Reveal>
            <p className="eyebrow">How I work</p>
          </Reveal>
          <Reveal delay={0.05}>
            <ol className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
              {workMoves.map((m, i) => {
                const Icon = m.icon;
                return (
                  <li
                    key={m.label}
                    className="flex items-center gap-2.5 rounded-2xl border border-border bg-surface px-3.5 py-3 text-[0.85rem] text-ink-soft transition-all hover:-translate-y-0.5 hover:border-accent/30 hover:bg-surface-elev sm:text-[0.9rem]"
                  >
                    <span className="flex-shrink-0 text-accent">
                      <Icon size={14} strokeWidth={1.7} />
                    </span>
                    <span>
                      <span className="text-ink-muted">
                        {String(i + 1).padStart(2, '0')}
                      </span>{' '}
                      {m.label}
                    </span>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>

        {/* Tools strip */}
        <div className="mt-14 sm:mt-16">
          <Reveal>
            <p className="eyebrow">Tools</p>
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="mt-5 flex flex-wrap gap-2">
              {tools.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default memo(SkillsBase);
