/**
 * Hero visual: the three things AitoTech ships, composed into one frame —
 * a website, the WhatsApp conversation behind it, and the dashboard the
 * owner watches. Pure markup so it stays sharp, themeable and weightless;
 * everything here is illustrative, not a real client's data.
 */
export default function HeroShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]" aria-hidden>
      {/* browser window — the website */}
      <div className="ap-card overflow-hidden shadow-[0_34px_80px_-44px_rgba(13,33,84,0.5)]">
        <div className="flex items-center gap-2 border-b border-hairline bg-wash px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#dfe7f1]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#dfe7f1]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#dfe7f1]" />
          <span className="ml-3 flex h-6 flex-1 items-center rounded-full bg-white px-3 text-[10.5px] font-medium text-quiet-soft">
            yourbusiness.in
          </span>
        </div>

        <div className="bg-white p-6">
          <div className="h-2.5 w-[46%] rounded-full bg-navy" />
          <div className="mt-3 h-2 w-[72%] rounded-full bg-[#e8eef6]" />
          <div className="mt-2 h-2 w-[58%] rounded-full bg-[#e8eef6]" />

          <div className="mt-5 flex gap-2">
            <span className="h-7 w-[108px] rounded-lg bg-azure-deep" />
            <span className="h-7 w-[88px] rounded-lg border border-hairline" />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-xl border border-hairline p-3">
                <span className="block h-6 w-6 rounded-lg bg-azure-wash" />
                <span className="mt-2.5 block h-1.5 w-full rounded-full bg-[#e8eef6]" />
                <span className="mt-1.5 block h-1.5 w-2/3 rounded-full bg-[#eef3f9]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* phone — the WhatsApp conversation */}
      <div className="absolute -bottom-10 -left-4 w-[178px] rounded-[22px] border border-hairline bg-white p-2 shadow-[0_26px_60px_-28px_rgba(13,33,84,0.5)] sm:-left-10">
        <div className="overflow-hidden rounded-[16px] bg-[#f3f6fa]">
          <div className="flex items-center gap-2 bg-[#0f7a52] px-3 py-2.5">
            <span className="h-5 w-5 rounded-full bg-white/25" />
            <span className="block h-1.5 w-16 rounded-full bg-white/60" />
          </div>
          <div className="space-y-2 p-3">
            <span className="block w-[78%] rounded-[10px_10px_10px_3px] bg-white px-2.5 py-2 text-[9px] leading-snug text-ink shadow-sm">
              Do you have 2BHK in my budget?
            </span>
            <span className="ml-auto block w-[82%] rounded-[10px_10px_3px_10px] bg-[#d6f3e3] px-2.5 py-2 text-[9px] leading-snug text-[#0c3f2c] shadow-sm">
              Yes — 3 available. Shall I book a visit?
            </span>
            <div className="flex items-center gap-1 pt-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9fb2c9]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#c3d0e0]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#dde5ee]" />
            </div>
          </div>
        </div>
      </div>

      {/* floating card — the owner's dashboard */}
      <div className="absolute -right-3 -top-7 w-[196px] rounded-2xl border border-hairline bg-white p-4 shadow-[0_26px_60px_-28px_rgba(13,33,84,0.5)] sm:-right-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-quiet-soft">
          This week
        </p>
        <p className="mt-2 font-heading text-[26px] font-extrabold leading-none text-ink">
          48 <span className="text-[13px] font-semibold text-quiet">enquiries</span>
        </p>

        <div className="mt-3 flex h-10 items-end gap-1">
          {[38, 55, 42, 68, 50, 80, 72].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm bg-azure/70"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        <div className="mt-3 flex items-center gap-1.5 border-t border-hairline pt-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-ok" />
          <span className="text-[10.5px] font-medium text-quiet">All replied within 2 min</span>
        </div>
      </div>
    </div>
  );
}
