import Link from 'next/link';
import PageShell from '@/components/ap/PageShell';

/**
 * Site-wide 404. Rendered for unknown URLs and for notFound() calls in the
 * dynamic service and industry pages, so it wears the same light chrome as
 * the rest of the site.
 */
export default function NotFound() {
  return (
    <PageShell>
      <section className="ap-sec">
        <div className="ap-wrap">
          <p className="ap-eyebrow mb-4">404 · Page not found</p>
          <h1 className="max-w-[22ch] text-[clamp(32px,4.6vw,54px)] font-extrabold">
            We couldn&rsquo;t find that page.
          </h1>
          <p className="ap-lead mt-5 max-w-[52ch]">
            The link may be old, or the page may have moved. These are where most people are
            headed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="ap-btn ap-btn-pri">
              Back to home
            </Link>
            <Link href="/solutions" className="ap-btn ap-btn-sec">
              See solutions
            </Link>
            <Link href="/contact" className="ap-btn ap-btn-sec">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
