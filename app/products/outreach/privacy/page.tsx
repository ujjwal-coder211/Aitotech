import type { Metadata } from 'next';
import Link from 'next/link';
import { outreachProduct, site } from '@/data/siteContent';
import PageShell from '@/components/ap/PageShell';

export const metadata: Metadata = {
  title: 'SalesConnect Privacy Policy',
  description: 'Privacy policy for SalesConnect, the AI sales assistant by AitoTech.',
};

export default function SalesConnectPrivacyPage() {
  return (
    <PageShell>
      <section className="ap-sec">
      <div className="ap-wrap max-w-2xl prose">
        <Link href="/products/outreach" className="text-sm font-medium text-azure-deep no-underline hover:underline">
          ← Back to SalesConnect
        </Link>

        <h1 className="mt-6 font-heading text-3xl font-bold text-ink">Privacy Policy — SalesConnect</h1>
        <p className="text-quiet-soft">
          <strong>Operator:</strong> AitoTech · SalesConnect is currently in development.
        </p>

        <p className="text-quiet">
          SalesConnect is an AI sales assistant for local businesses. This policy explains how we collect, use, and
          protect your information. It will be finalised before public launch.
        </p>

        <h2 className="font-heading text-xl text-ink">1. Information we collect</h2>
        <ul className="text-quiet">
          <li>
            <strong>Account data:</strong> Name, email, password (hashed), phone number, and your business profile.
          </li>
          <li>
            <strong>Lead data:</strong> Enquiry contacts you add, upload, or that arrive from your connected channels.
          </li>
          <li>
            <strong>Content:</strong> Message drafts, replies, and follow-ups created in the app.
          </li>
          <li>
            <strong>Usage:</strong> App activity tied to your account, used to improve reliability.
          </li>
        </ul>

        <h2 className="font-heading text-xl text-ink">2. How we use data</h2>
        <ul className="text-quiet">
          <li>Authenticate your account and keep it secure</li>
          <li>Draft personalised replies based on your business profile</li>
          <li>Schedule and remind you of follow-ups</li>
          <li>Send you service and account emails</li>
        </ul>

        <h2 className="font-heading text-xl text-ink">3. Data sharing</h2>
        <p className="text-quiet">
          We do not sell personal data. Processors we rely on include Supabase (database), Resend (email), and AI
          providers (such as Groq, DeepSeek, and Gemini) used only to generate message drafts. WhatsApp and email open
          via your own device — we do not read those conversations.
        </p>

        <h2 className="font-heading text-xl text-ink">4. Security</h2>
        <ul className="text-quiet">
          <li>HTTPS for all API traffic</li>
          <li>Passwords hashed; signed tokens for sessions</li>
          <li>Access controls and rate limits on our APIs</li>
          <li>Uploads restricted to safe file types — no scripts or executables</li>
          <li>Parameterized database queries to protect against injection</li>
        </ul>

        <h2 className="font-heading text-xl text-ink">5. Retention & deletion</h2>
        <p className="text-quiet">
          Data is kept while your account is active. Request deletion:{' '}
          <a href={`mailto:${outreachProduct.contactEmail}`} className="text-azure-deep">
            {outreachProduct.contactEmail}
          </a>
        </p>

        <h2 className="font-heading text-xl text-ink">6. Children</h2>
        <p className="text-quiet">SalesConnect is intended for business owners 18+ only.</p>

        <h2 className="font-heading text-xl text-ink">7. Contact</h2>
        <p className="text-quiet">
          {site.name} ·{' '}
          <a href={`mailto:${outreachProduct.contactEmail}`} className="text-azure-deep">
            {outreachProduct.contactEmail}
          </a>
        </p>
      </div>
      </section>
    </PageShell>
  );
}
