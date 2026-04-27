import { memo } from 'react';
import { socials } from '../data/socials';
import { personal } from '../data/personal';

function FooterBase() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-surface/40 sm:mt-24">
      <div className="container-narrow py-10 sm:py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12 lg:gap-16">
          <div>
            <p className="display text-[clamp(1.6rem,1.2rem+1vw,2.25rem)]">
              {personal.fullName}
            </p>
            <p className="mt-3 max-w-sm text-[0.92rem] leading-relaxed text-ink-soft sm:text-[0.95rem]">
              {personal.tagline}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.86rem] font-medium">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-ink underline-offset-4 hover:underline"
              >
                Start a conversation <span aria-hidden="true">→</span>
              </a>
              <a
                href={personal.resumeUrl}
                download={personal.resumeFileName}
                className="inline-flex items-center gap-1.5 text-ink-soft underline-offset-4 hover:text-accent hover:underline"
                aria-label="Download Yusra Nadeem's resume (PDF)"
              >
                Resume
                <span className="text-ink-muted/80">(PDF)</span>
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow">Connect</p>
            <ul className="mt-4 space-y-2.5 text-[0.88rem] sm:text-[0.92rem]">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-accent"
                    >
                      <Icon size={14} />
                      <span className="break-all">{s.display}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Studio</p>
            <p className="mt-4 text-[0.88rem] text-ink-soft sm:text-[0.92rem]">
              {personal.location}
            </p>
            <p className="mt-1.5 inline-flex items-center gap-1.5 text-[0.88rem] text-ink-soft sm:text-[0.92rem]">
              <span
                aria-hidden="true"
                className="relative inline-flex h-1.5 w-1.5"
              >
                <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
                <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {personal.available
                ? 'Open to senior roles'
                : 'Currently focused'}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-3 border-t border-border pt-6 text-[0.72rem] text-ink-muted sm:flex-row sm:items-center">
          <p>
            © {year} {personal.fullName}. All rights reserved.
          </p>
          <p>
            Made with{' '}
            <span aria-label="love" role="img" className="text-accent">
              ♥
            </span>{' '}
            <span aria-hidden="true">·</span> 2026 portfolio.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(FooterBase);
