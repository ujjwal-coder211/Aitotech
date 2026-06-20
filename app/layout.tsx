import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Header from '@/components/Header';
import FooterGate from '@/components/FooterGate';
import AmbientBackground from '@/components/AmbientBackground';
import AgentChat from '@/components/AgentChat';
import { site } from '@/data/siteContent';
import { siteUrl } from '@/lib/seo/siteUrl';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — AI tools for business`,
    template: `%s | ${site.name}`,
  },
  description:
    'AitoTech builds AI tools for business — data automation, workflows, invoice reading, and Aksh AI coding. Delhi, India.',
  keywords: [
    'AI automation',
    'business automation',
    site.name,
    'Aksh',
    'Omni AI',
    'workflow',
    'B2B software',
    'India AI',
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} — AI tools for business`,
    description: 'AI automation and Aksh coding tool by AitoTech, India.',
    images: [{ url: '/images/og-aksh.svg', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: 'AI automation · Aksh AI coding tool',
    images: ['/images/og-aksh.svg'],
  },
  robots: { index: true, follow: true },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`dark ${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <AmbientBackground />
        <Header />
        <main className="relative z-10 flex-1">{children}</main>
        <FooterGate />
        {process.env.AGENTS_API_URL ? <AgentChat /> : null}
      </body>
    </html>
  );
}
