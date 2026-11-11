import Script from 'next/script';
import { Analytics as VercelAnalytics } from '@vercel/analytics/next';
import CaptureSource from './CaptureSource';

/**
 * GA4 measurement ID. Not a secret — it is sent to every visitor in the page
 * source — so it can live in the repo. NEXT_PUBLIC_GA_ID overrides it, which
 * lets a preview or staging deploy report into a different property.
 */
const GA_MEASUREMENT_ID = 'G-WL8T254C63';

/**
 * Site analytics.
 *
 * Vercel Web Analytics (cookieless, aggregate) always runs. Google Analytics
 * adds conversion reporting on top; it sets its own _ga cookies, which the
 * privacy policy discloses.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || GA_MEASUREMENT_ID;

  return (
    <>
      <VercelAnalytics />
      {/* Remembers the referrer on arrival, so a lead that fills the form
          three pages later is still credited to whatever brought them. */}
      <CaptureSource />

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
