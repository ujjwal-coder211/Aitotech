import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Header from '@/components/Header';
import FooterGate from '@/components/FooterGate';
import AmbientBackground from '@/components/AmbientBackground';
import AgentChat from '@/components/AgentChat';
import { site } from '@/data/siteContent';
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
  title: {
    default: `${site.name} — Enterprise AI Automation`,
    template: `%s | ${site.name}`,
  },
  description:
    'AitoTech delivers enterprise-grade AI automation — data pipelines, workflow orchestration, invoice intelligence, and custom intelligent systems with measurable ROI.',
  keywords: ['enterprise automation', 'AI automation', site.name, 'workflow', 'B2B software'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
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
