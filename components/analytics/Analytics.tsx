import Script from 'next/script';
import { Analytics as VercelAnalytics } from '@vercel/analytics/next';

/**
 * Site analytics.
 *
 * Vercel Web Analytics runs always: it is cookieless and aggregate, so it
 * needs no consent banner. Google Analytics is loaded only when
 * NEXT_PUBLIC_GA_ID is present, so the site ships zero third-party cookies
 * until that is deliberately turned on.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      <VercelAnalytics />

      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
          </Script>
        </>
      )}
    </>
  );
}
