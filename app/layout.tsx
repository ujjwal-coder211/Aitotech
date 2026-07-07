import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Header from '@/components/Header';
import FooterGate from '@/components/FooterGate';
import AmbientBackground from '@/components/AmbientBackground';
import JsonLdScript from '@/components/seo/JsonLdScript';
import { site } from '@/data/siteContent';
import './globals.css';

/**
 * Organization + WebSite structured data — tells Google that spelling
 * variants ("Aito Tech", "Aitotech") all mean this one brand, so typo
 * searches auto-correct to aitotech.in.
 */
const orgJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.website}/#organization`,
    name: site.name,
    alternateName: ['Aito Tech', 'Aitotech', 'AITOTECH', 'AitoTech India'],
    url: site.website,
    logo: `${site.website}/images/logo-mark.png`,
    email: site.email,
    foundingDate: '2026',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Delhi',
      addressCountry: 'IN',
    },
    sameAs: [site.social.github, site.social.linkedin, site.social.instagram].filter(Boolean),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.website}/#website`,
    name: site.name,
    alternateName: 'Aito Tech',
    url: site.website,
    publisher: { '@id': `${site.website}/#organization` },
  },
];

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.website),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    'AitoTech builds websites, mobile apps, AI tools, and workflow automation for small businesses and enterprises. Based in Delhi, India.',
  keywords: [
    'AitoTech',
    'website development',
    'mobile apps',
    'AI automation',
    'workflow automation',
    'AI chatbot',
    'Delhi',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: site.website,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description:
      'Websites, apps, AI tools, and workflow automation — engineered end to end for businesses of every size.',
    images: [{ url: '/images/og.png', width: 1200, height: 630, alt: 'AitoTech — AI · Automation · Development' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.tagline}`,
    description:
      'Websites, apps, AI tools, and workflow automation — engineered end to end for businesses of every size.',
    images: ['/images/og.png'],
  },
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <JsonLdScript data={orgJsonLd} />
        <AmbientBackground />
        <Header />
        <main className="relative z-10 flex-1">{children}</main>
        <FooterGate />
      </body>
    </html>
  );
}
