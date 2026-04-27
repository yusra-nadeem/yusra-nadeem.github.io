import { memo, type ReactNode } from 'react';
import Reveal from './Reveal';

type Props = {
  number?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  id?: string;
};

function SectionHeadingBase({
  number,
  eyebrow,
  title,
  description,
  align = 'left',
  id,
}: Props) {
  const isCenter = align === 'center';
  return (
    <header
      id={id}
      className={[
        'mb-10 sm:mb-12 lg:mb-16',
        'max-w-[44rem]',
        isCenter ? 'mx-auto text-center' : '',
      ].join(' ')}
    >
      <Reveal>
        <div
          className={`flex flex-wrap items-center gap-3 ${
            isCenter ? 'justify-center' : ''
          }`}
        >
          {number && <span className="section-num">{number}</span>}
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="display mt-4 text-[clamp(1.85rem,1.4rem+2.4vw,3.6rem)] sm:mt-5 lg:text-[clamp(2.1rem,1rem+3vw,4.2rem)]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-[42ch] text-[0.97rem] leading-relaxed text-ink-soft sm:mt-5 sm:text-[1.05rem] lg:text-[1.1rem]">
            {description}
          </p>
        </Reveal>
      )}
    </header>
  );
}

export default memo(SectionHeadingBase);
