'use client';

import { arya } from '@/data/aryaHomes';

/**
 * Instagram-style vertical video reels. The thumbnails animate with a subtle
 * "playing" shimmer; each links to the client's Instagram. Swap the gradient
 * posters for the client's real reels/MP4s once provided.
 */
export default function AryaReels() {
  return (
    <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible lg:grid-cols-5">
      {arya.videos.map((v) => (
        <a
          key={v.caption}
          href={arya.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-[9/16] w-56 shrink-0 snap-center overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-1 sm:w-auto"
          style={{ background: `linear-gradient(160deg, ${v.accent}, #020617)` }}
        >
          {/* moving sheen so the card reads as a video */}
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent [animation:reelSheen_3.5s_ease-in-out_infinite]" />
          <span className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:26px_26px]" />

          {/* top row: tag + duration */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
            <span className="rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur">
              {v.tag}
            </span>
            <span className="rounded bg-black/40 px-1.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
              {v.duration}
            </span>
          </div>

          {/* play button */}
          <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform duration-300 group-hover:scale-110">
            <svg className="ml-0.5 h-6 w-6 text-slate-900" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>

          {/* caption */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
            <p className="text-sm font-semibold leading-snug text-white">{v.caption}</p>
            <p className="mt-1 flex items-center gap-1.5 text-[11px] text-white/70">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.42 2.21 8.8 2.2 12 2.2zm0 3.05A6.75 6.75 0 1018.75 12 6.75 6.75 0 0012 5.25zm0 11.13A4.38 4.38 0 1116.38 12 4.38 4.38 0 0112 16.38zm6.96-11.4a1.58 1.58 0 11-1.58-1.57 1.58 1.58 0 011.58 1.57z" />
              </svg>
              Watch on Instagram
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
