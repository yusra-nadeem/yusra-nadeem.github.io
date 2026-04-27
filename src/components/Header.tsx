import { memo, useCallback, useEffect, useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import BrandMark from './BrandMark';
import ThemeToggle from './ThemeToggle';
import Magnetic from './Magnetic';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Brands' },
  { href: '#featured', label: 'Featured' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
] as const;

function HeaderBase() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close drawer if window grows past lg
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 64rem)');
    const onChange = () => mq.matches && setMobileOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const handleNavClick = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <motion.header
        initial={reduced ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'pt-2' : 'pt-3 sm:pt-4'
        }`}
      >
        <div className="container-narrow">
          <div
            className={`flex items-center justify-between gap-3 rounded-full pl-2 pr-2 transition-all duration-300 sm:pl-3 sm:pr-3 ${
              scrolled
                ? 'glass shadow-[0_8px_24px_-12px_rgba(15,12,10,0.18)] py-1.5'
                : 'border border-transparent py-2'
            }`}
          >
            <a
              href="#top"
              className="flex shrink-0 items-center gap-2 pl-1 text-ink transition-opacity hover:opacity-90"
              aria-label="Yusra Nadeem — back to top"
            >
              <BrandMark size={32} />
              <span className="hidden text-sm font-medium tracking-tight xs:inline">
                Yusra Nadeem
              </span>
            </a>

            <nav aria-label="Primary" className="hidden min-w-0 lg:block">
              <ul className="flex items-center">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="rounded-full px-2.5 py-2 text-[0.84rem] text-ink-soft transition-colors hover:text-ink hover:bg-surface-elev xl:px-3.5 xl:text-[0.86rem]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <ThemeToggle />
              <Magnetic strength={8} className="hidden xl:inline-flex">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 rounded-full text-[0.86rem] font-medium transition-shadow hover:shadow-lifted"
                  style={{
                    background: 'var(--ink)',
                    color: 'var(--bg)',
                    padding: '0.5rem 1.1rem',
                    boxShadow: 'var(--shadow-soft)',
                  }}
                >
                  <span>Let&apos;s talk</span>
                  <ArrowUpRight size={13} strokeWidth={1.8} />
                </a>
              </Magnetic>
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:bg-surface-elev lg:hidden"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/35 backdrop-blur-sm"
              onClick={handleNavClick}
            />
            <motion.nav
              aria-label="Mobile"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
              className="absolute inset-x-3 top-[4.75rem] rounded-3xl border border-border bg-surface p-3 shadow-lifted sm:inset-x-6"
            >
              <ul className="flex flex-col gap-0.5">
                {NAV.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={reduced ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.04 + i * 0.04 }}
                  >
                    <a
                      href={item.href}
                      onClick={handleNavClick}
                      className="block rounded-2xl px-4 py-3 text-base text-ink-soft transition-colors hover:bg-surface-elev hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
                <li className="mt-2">
                  <a
                    href="#contact"
                    onClick={handleNavClick}
                    className="block rounded-2xl px-4 py-3.5 text-center text-base font-medium"
                    style={{ background: 'var(--ink)', color: 'var(--bg)' }}
                  >
                    Let&apos;s talk
                  </a>
                </li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <span id="top" aria-hidden="true" />
    </>
  );
}

export default memo(HeaderBase);
