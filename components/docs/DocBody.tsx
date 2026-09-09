import type { DocPage } from '@/data/sairaDocs';

export default function DocBody({ doc }: { doc: DocPage }) {
  return (
    <article className="prose-docs">
      {doc.sections.map((section) => (
        <section key={section.id} id={section.id} className="mb-10 scroll-mt-24">
          <h2 className="font-heading text-xl font-semibold text-ink sm:text-2xl">{section.title}</h2>
          {section.body && <p className="mt-3 text-base leading-relaxed text-quiet">{section.body}</p>}
          {section.items && (
            <ul className="mt-4 space-y-3 text-sm text-quiet sm:text-base">
              {section.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {section.code && (
            <pre className="mt-4 overflow-x-auto rounded-xl border border-hairline bg-[#0a0a0f] p-4 text-xs leading-relaxed text-quiet sm:text-sm">
              <code>{section.code}</code>
            </pre>
          )}
          {section.note && (
            <p className="mt-3 rounded-lg border border-violet-500/20 bg-violet-500/10 px-4 py-3 text-sm text-violet-200">
              {section.note}
            </p>
          )}
        </section>
      ))}
    </article>
  );
}
