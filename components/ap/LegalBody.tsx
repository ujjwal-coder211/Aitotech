import Reveal from './Reveal';

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

/** Shared reading layout for the privacy and terms pages. */
export default function LegalBody({
  updated,
  sections,
}: {
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <section className="ap-sec pt-4">
      <div className="ap-wrap">
        <Reveal className="max-w-[68ch]">
          <p className="mb-10 text-[13px] text-quiet-soft">Last updated: {updated}</p>

          {sections.map((section) => (
            <div key={section.heading} className="mb-10">
              <h2 className="mb-4 text-[21px] font-bold">{section.heading}</h2>

              {section.paragraphs?.map((p) => (
                <p key={p} className="mb-4 text-[15px] leading-[1.75] text-quiet">
                  {p}
                </p>
              ))}

              {section.list && (
                <ul className="mt-2 grid gap-3">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-[1.7] text-quiet">
                      <span className="mt-[13px] h-0.5 w-3 flex-none bg-azure" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="ap-card p-6">
            <h2 className="mb-2 text-[17px] font-bold">Questions</h2>
            <p className="text-[15px] text-quiet">
              Write to{' '}
              <a href="mailto:info@aitotech.in" className="text-azure-deep hover:text-azure">
                info@aitotech.in
              </a>{' '}
              and we will get back to you.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
