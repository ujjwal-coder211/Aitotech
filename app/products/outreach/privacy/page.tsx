import type { Metadata } from 'next';
import Link from 'next/link';
import { outreachProduct, site } from '@/data/siteContent';

export const metadata: Metadata = {
  title: 'Outreach Privacy Policy',
  description: 'Privacy policy for the Outreach mobile app by Aitotech.',
};

export default function OutreachPrivacyPage() {
  return (
    <div className="section-pad pt-20 sm:pt-24 lg:pt-32">
      <div className="container-page max-w-2xl prose prose-invert prose-zinc">
        <Link href="/products/outreach" className="text-sm font-medium text-brand-light no-underline hover:underline">
          ← Back to Outreach
        </Link>

        <h1 className="mt-6 font-display text-3xl font-bold text-white">Privacy Policy — Outreach</h1>
        <p className="text-zinc-500">
          <strong>Effective date:</strong> May 23, 2026 · <strong>Operator:</strong> Aitotech
        </p>

        <p className="text-zinc-400">
          Outreach is a B2B sales pilot app for bank officers. This policy explains how we collect, use, and protect
          your information.
        </p>

        <h2 className="font-display text-xl text-white">1. Information we collect</h2>
        <ul className="text-zinc-400">
          <li>
            <strong>Account data:</strong> Name, email, password (hashed), phone, bank/branch, PIN codes.
          </li>
          <li>
            <strong>Lead data:</strong> Business contacts you upload or save from the company registry.
          </li>
          <li>
            <strong>Attachments:</strong> PDFs/documents you upload for AI outreach context.
          </li>
          <li>
            <strong>Usage:</strong> Messages, follow-ups, and app activity tied to your account.
          </li>
        </ul>

        <h2 className="font-display text-xl text-white">2. How we use data</h2>
        <ul className="text-zinc-400">
          <li>Authenticate your account and enforce admin-approved access</li>
          <li>Filter company data by your assigned PIN codes only</li>
          <li>Generate AI outreach drafts based on your profile</li>
          <li>Send login credentials via email when admin approves access</li>
        </ul>

        <h2 className="font-display text-xl text-white">3. Data sharing</h2>
        <p className="text-zinc-400">
          We do not sell personal data. Processors: Railway (hosting), Supabase (database), Resend (email), AI
          providers (Groq/DeepSeek for message generation). WhatsApp/email opens via your device — we do not read those
          messages.
        </p>

        <h2 className="font-display text-xl text-white">4. Security</h2>
        <ul className="text-zinc-400">
          <li>HTTPS for all API traffic</li>
          <li>Passwords hashed with bcrypt; JWT for sessions</li>
          <li>Admin APIs protected by secret + rate limits</li>
          <li>File uploads restricted to safe types (Excel, PDF, images) — no scripts/executables</li>
          <li>Database queries via Prisma (parameterized — SQL injection protected)</li>
        </ul>

        <h2 className="font-display text-xl text-white">5. Retention & deletion</h2>
        <p className="text-zinc-400">
          Data is kept while your account is active. Request deletion:{' '}
          <a href={`mailto:${outreachProduct.contactEmail}`} className="text-brand-light">
            {outreachProduct.contactEmail}
          </a>
        </p>

        <h2 className="font-display text-xl text-white">6. Children</h2>
        <p className="text-zinc-400">Outreach is for business professionals 18+ only.</p>

        <h2 className="font-display text-xl text-white">7. Contact</h2>
        <p className="text-zinc-400">
          {site.name} ·{' '}
          <a href={`mailto:${outreachProduct.contactEmail}`} className="text-brand-light">
            {outreachProduct.contactEmail}
          </a>
        </p>
      </div>
    </div>
  );
}
