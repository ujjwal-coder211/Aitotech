import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Header from '@/components/Header';
import FooterGate from '@/components/FooterGate';
import AmbientBackground from '@/components/AmbientBackground';
import { site } from '@/data/siteContent';
import './globals.css';

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <AmbientBackground />
        <Header />
        <main className="relative z-10 flex-1">{children}</main>
        <FooterGate />
      </body>
    </html>
  );
}
