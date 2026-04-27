import { memo, useCallback, useState, type FormEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Check, Copy, Mail, Phone, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Magnetic from '../components/Magnetic';
import { onPointerSheen } from '../lib/sheen';
import { personal } from '../data/personal';
import { socials } from '../data/socials';

type FormState = {
  name: string;
  email: string;
  message: string;
};

const INITIAL: FormState = { name: '', email: '', message: '' };

function ContactBase() {
  const reduced = useReducedMotion();
  const [form, setForm] = useState<FormState>(INITIAL);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError(null);

      if (
        !form.name.trim() ||
        !form.email.trim() ||
        !form.message.trim()
      ) {
        setError('All fields are required.');
        return;
      }

      // Open the user's email client with a pre-filled message —
      // zero-backend pattern that works perfectly on GitHub Pages.
      const subject = encodeURIComponent(
        `Portfolio enquiry — ${form.name.trim()}`,
      );
      const body = encodeURIComponent(
        `Hi Yusra,\n\n${form.message.trim()}\n\n— ${form.name.trim()}\n${form.email.trim()}`,
      );
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    },
    [form],
  );

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }, []);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-y relative"
    >
      <div className="container-narrow">
        <SectionHeading
          id="contact-heading"
          number="07"
          eyebrow="Contact"
          title={
            <>
              Have a brand to launch, a campaign to lead,
              <br className="hidden sm:block" />{' '}
              <span className="italic text-accent">or a team to coordinate?</span>
            </>
          }
          description="The easiest way to start is a short note about what you’re building. I usually reply within a working day."
        />

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-7">
          {/* Form */}
          <Reveal>
            <form
              onSubmit={handleSubmit}
              noValidate
              onPointerMove={onPointerSheen}
              className="sheen relative overflow-hidden rounded-3xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 sm:p-7 lg:p-8"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-px opacity-60"
                style={{
                  background:
                    'radial-gradient(420px circle at 100% 0%, color-mix(in oklab, var(--accent), transparent 88%), transparent 60%)',
                }}
              />
              <div className="relative grid gap-4 sm:grid-cols-2">
                <Field
                  label="Your name"
                  name="name"
                  value={form.name}
                  autoComplete="name"
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  autoComplete="email"
                  onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                />
                <div className="sm:col-span-2">
                  <Field
                    label="What can I help with?"
                    name="message"
                    value={form.message}
                    multiline
                    onChange={(v) => setForm((f) => ({ ...f, message: v }))}
                  />
                </div>

                {error && (
                  <p
                    className="text-[0.86rem] text-accent sm:col-span-2"
                    role="alert"
                  >
                    {error}
                  </p>
                )}

                <div className="flex flex-col-reverse items-stretch gap-3 pt-2 sm:col-span-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                  <p className="text-[0.72rem] text-ink-muted">
                    Submitting opens your mail app — no third-party tracking.
                  </p>
                  <Magnetic strength={10}>
                    <motion.button
                      type="submit"
                      whileHover={reduced ? undefined : { y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="btn btn-primary"
                    >
                      <span>Send message</span>
                      <Send size={15} strokeWidth={1.8} />
                    </motion.button>
                  </Magnetic>
                </div>
              </div>
            </form>
          </Reveal>

          {/* Direct */}
          <Reveal delay={0.1}>
            <aside className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-surface-elev p-5 sm:p-7 lg:p-8">
              <div>
                <p className="eyebrow">Direct lines</p>
                <p className="mt-3 text-[0.95rem] text-ink-soft sm:text-[1rem]">
                  Prefer to skip the form? These reach me just as quickly.
                </p>
              </div>

              <div className="grid gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface p-4 text-left transition-colors hover:border-accent/40"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-bg-alt text-ink-muted">
                      <Mail size={16} strokeWidth={1.6} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-ink-muted">
                        Email
                      </span>
                      <span className="mt-0.5 block truncate text-[0.92rem] font-medium text-ink sm:text-[0.95rem]">
                        {personal.email}
                      </span>
                    </span>
                  </span>
                  <span className="text-[0.78rem] text-ink-muted">
                    {copied ? (
                      <span className="inline-flex items-center gap-1 text-accent">
                        <Check size={13} strokeWidth={2} /> Copied
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1">
                        <Copy size={13} strokeWidth={1.6} /> Copy
                      </span>
                    )}
                  </span>
                </button>

                <a
                  href={`tel:${personal.phoneRaw}`}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-accent/40"
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-bg-alt text-ink-muted">
                      <Phone size={16} strokeWidth={1.6} />
                    </span>
                    <span>
                      <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-ink-muted">
                        Phone
                      </span>
                      <span className="mt-0.5 block text-[0.92rem] font-medium text-ink sm:text-[0.95rem]">
                        {personal.phone}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.6}
                    className="text-ink-muted"
                  />
                </a>
              </div>

              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface px-4 py-3 transition-colors hover:border-accent/40"
                    >
                      <span className="inline-flex items-center gap-2 text-[0.88rem] text-ink sm:text-[0.92rem]">
                        <Icon size={14} />
                        {s.label}
                      </span>
                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.6}
                        className="text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  );
                })}
              </div>

              <p className="mt-auto text-[0.78rem] text-ink-muted">
                Based in {personal.location}. Available for remote and on-site
                work.
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
};

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  autoComplete,
  multiline,
}: FieldProps) {
  const baseClass =
    'peer block w-full rounded-2xl border border-border bg-bg px-4 pb-2.5 pt-6 text-[0.95rem] text-ink placeholder-transparent transition-colors focus:border-accent focus:outline-none';

  return (
    <label className="relative block">
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={label}
          rows={5}
          className={`${baseClass} min-h-[140px] resize-y`}
        />
      ) : (
        <input
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={type}
          placeholder={label}
          autoComplete={autoComplete}
          className={baseClass}
        />
      )}
      <span className="pointer-events-none absolute left-4 top-2 text-[0.65rem] uppercase tracking-[0.16em] text-ink-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[0.92rem] peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-ink-muted/80 peer-focus:top-2 peer-focus:text-[0.65rem] peer-focus:tracking-[0.16em] peer-focus:text-accent">
        {label}
      </span>
    </label>
  );
}

export default memo(ContactBase);
