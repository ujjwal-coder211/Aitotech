'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { contactPage } from '@/data/siteContent';

type FieldErrors = Partial<Record<'name' | 'email' | 'company' | 'message', string>>;
type FieldStatus = Partial<Record<'name' | 'email' | 'company' | 'message', 'valid' | 'invalid'>>;

export default function ContactForm() {
  const { form } = contactPage;
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [fieldStatus, setFieldStatus] = useState<FieldStatus>({});
  const [message, setMessage] = useState('');

  const validate = (data: FormData): FieldErrors => {
    const e: FieldErrors = {};
    const name = (data.get('name') as string)?.trim() ?? '';
    const email = (data.get('email') as string)?.trim() ?? '';
    const company = (data.get('company') as string)?.trim() ?? '';
    const msg = (data.get('message') as string)?.trim() ?? '';

    if (name.length < 2) e.name = 'Name must be at least 2 characters.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Valid email required.';
    if (company.length > 150) e.company = 'Company name too long.';
    if (msg.length < 10) e.message = 'Message must be at least 10 characters.';
    if (msg.length > 2000) e.message = 'Message must be under 2000 characters.';

    return e;
  };

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formEl = ev.currentTarget;
    const data = new FormData(formEl);
    const validation = validate(data);

    setErrors(validation);
    const fs: FieldStatus = {};
    (['name', 'email', 'company', 'message'] as const).forEach((k) => {
      if (validation[k]) fs[k] = 'invalid';
      else if (data.get(k)) fs[k] = 'valid';
    });
    setFieldStatus(fs);

    if (Object.keys(validation).length > 0) return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          company: data.get('company'),
          message: data.get('message'),
          website: data.get('website'),
        }),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setStatus('success');
        setMessage(json.message ?? form.success);
        formEl.reset();
        setFieldStatus({});
      } else {
        setStatus('error');
        setMessage(json.error ?? 'Submission failed.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  const inputClass = (field: keyof FieldErrors) => {
    const base = 'input-field';
    if (fieldStatus[field] === 'invalid') return `${base} border-red-500/50 focus:border-red-500 focus:ring-red-500/20`;
    if (fieldStatus[field] === 'valid') return `${base} border-emerald-500/40`;
    return base;
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      onSubmit={handleSubmit}
      className="card space-y-4 p-5 sm:space-y-5 sm:p-6 md:p-8"
      noValidate
    >
      {/* Honeypot — hidden from real users, bots fill it and get silently dropped */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-300">
          {form.nameLabel} <span className="text-red-400">*</span>
        </label>
        <input id="name" name="name" required className={inputClass('name')} placeholder={form.placeholders.name} />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-300">
          {form.emailLabel} <span className="text-red-400">*</span>
        </label>
        <input id="email" name="email" type="email" required className={inputClass('email')} placeholder={form.placeholders.email} />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-zinc-300">
          {form.companyLabel}
        </label>
        <input id="company" name="company" className={inputClass('company')} placeholder={form.placeholders.company} />
        {errors.company && <p className="mt-1 text-xs text-red-400">{errors.company}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-300">
          {form.messageLabel} <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClass('message')} resize-y`}
          placeholder={form.placeholders.message}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      {status === 'success' && (
        <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300" role="status">
          {message}
        </p>
      )}
      {status === 'error' && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300" role="alert">
          {message}
        </p>
      )}

      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-50">
        {status === 'loading' ? form.sending : form.submit}
      </button>
    </motion.form>
  );
}
