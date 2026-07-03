'use client';

import { useRef, useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import ServiceIcon from '@/components/ServiceIcon';
import { demosPage } from '@/data/siteContent';

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

/** Stylised browser-window preview so each template feels tangible without heavy images. */
function TemplateMock({ accent }: { accent: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface-raised">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-zinc-700" />
        <span className="h-2 w-2 rounded-full bg-zinc-700" />
        <span className="h-2 w-2 rounded-full bg-zinc-700" />
        <span className="ml-2 h-2 w-24 rounded-full bg-zinc-800" />
      </div>
      <div className="space-y-2 p-3">
        <div
          className="flex h-16 flex-col justify-center gap-1.5 rounded-lg px-3"
          style={{ background: `linear-gradient(135deg, ${accent}33, transparent 70%)` }}
        >
          <span className="h-2 w-1/2 rounded-full" style={{ backgroundColor: `${accent}99` }} />
          <span className="h-1.5 w-1/3 rounded-full bg-zinc-700" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-1 rounded-md border border-line p-2">
              <span className="block h-1.5 w-full rounded-full bg-zinc-800" />
              <span className="block h-1.5 w-2/3 rounded-full bg-zinc-800" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DemoStudio() {
  const { templates, automations, form, websitesTitle, automationsTitle, requestCta } = demosPage;
  const formRef = useRef<HTMLDivElement>(null);
  const [selectedType, setSelectedType] = useState<string>(form.types[0]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const requestDemo = (type: string) => {
    const match = form.types.find((t) => type.toLowerCase().includes(t.toLowerCase().split(' ')[0]));
    // Fall back to 'Other' so the controlled select never holds a value outside its options
    setSelectedType(match ?? 'Other');
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formEl = ev.currentTarget;
    const data = new FormData(formEl);
    const name = (data.get('name') as string)?.trim() ?? '';
    const email = (data.get('email') as string)?.trim() ?? '';
    const company = (data.get('company') as string)?.trim() ?? '';
    const detail = (data.get('message') as string)?.trim() ?? '';

    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setFeedback('Please enter your name and a valid email.');
      return;
    }

    setStatus('loading');
    setFeedback('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          message: `[Demo request — ${selectedType}] ${detail || 'No extra details provided.'}`,
          website: data.get('website'),
        }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus('success');
        setFeedback(form.success);
        formEl.reset();
      } else {
        setStatus('error');
        setFeedback(json.error ?? form.error);
      }
    } catch {
      setStatus('error');
      setFeedback(form.error);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-20">
      {/* ── Website templates ── */}
      <div>
        <h2 className="mb-6 font-display text-xl font-semibold text-white sm:text-2xl">{websitesTitle}</h2>
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
        >
          {templates.map((t) => (
            <motion.div
              key={t.slug}
              variants={card}
              className="group flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors duration-200 ease-out-expo hover:border-white/[0.14]"
            >
              <TemplateMock accent={t.accent} />
              <h3 className="mt-5 font-display text-base font-semibold text-white">{t.name}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-zinc-500">{t.blurb}</p>
              <p className="mt-3 text-xs text-zinc-600">{t.tags.join(' · ')}</p>
              <button
                type="button"
                onClick={() => requestDemo(t.name)}
                className="btn-glass mt-5 w-full cursor-pointer justify-center text-xs"
              >
                {requestCta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Automation demos ── */}
      <div>
        <h2 className="mb-6 font-display text-xl font-semibold text-white sm:text-2xl">{automationsTitle}</h2>
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
        >
          {automations.map((a) => (
            <motion.div
              key={a.slug}
              variants={card}
              className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors duration-200 ease-out-expo hover:border-white/[0.14] sm:p-6"
            >
              <span className="mt-0.5 shrink-0 text-zinc-500">
                <ServiceIcon name={a.icon} className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-base font-semibold text-white">{a.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">{a.blurb}</p>
                <button
                  type="button"
                  onClick={() => requestDemo(a.name)}
                  className="mt-3 cursor-pointer text-xs font-medium text-brand-light transition-colors hover:text-white"
                >
                  {requestCta} &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Requirement form ── */}
      <div ref={formRef} id="request" className="scroll-mt-24">
        <div className="glass-panel mx-auto max-w-2xl p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">{form.title}</h2>
          <p className="mt-1.5 text-sm text-zinc-500">{form.subtitle}</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            {/* Honeypot — hidden from real users, bots fill it and get silently dropped */}
            <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
              <label htmlFor="demo-website">Website</label>
              <input id="demo-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="demo-name" className="mb-1.5 block text-sm font-medium text-zinc-300">
                  {form.nameLabel} <span className="text-red-400">*</span>
                </label>
                <input id="demo-name" name="name" required className="input-field" autoComplete="name" />
              </div>
              <div>
                <label htmlFor="demo-email" className="mb-1.5 block text-sm font-medium text-zinc-300">
                  {form.emailLabel} <span className="text-red-400">*</span>
                </label>
                <input id="demo-email" name="email" type="email" required className="input-field" autoComplete="email" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="demo-company" className="mb-1.5 block text-sm font-medium text-zinc-300">
                  {form.companyLabel}
                </label>
                <input id="demo-company" name="company" className="input-field" autoComplete="organization" />
              </div>
              <div>
                <label htmlFor="demo-type" className="mb-1.5 block text-sm font-medium text-zinc-300">
                  {form.typeLabel}
                </label>
                <select
                  id="demo-type"
                  name="type"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="input-field cursor-pointer"
                >
                  {form.types.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="demo-message" className="mb-1.5 block text-sm font-medium text-zinc-300">
                {form.messageLabel}
              </label>
              <textarea
                id="demo-message"
                name="message"
                rows={4}
                className="input-field resize-y"
                placeholder={form.messagePlaceholder}
              />
            </div>

            {status === 'success' && (
              <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300" role="status">
                {feedback}
              </p>
            )}
            {status === 'error' && (
              <p className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300" role="alert">
                {feedback}
              </p>
            )}

            <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-50">
              {status === 'loading' ? form.sending : form.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
