import { dataPrinciples, stack } from '@/data/automation';
import Reveal from './Reveal';

export default function TrustSection() {
  return (
    <section className="ap-sec">
      <div className="ap-wrap">
        <Reveal stagger={0.08} y={18} className="grid gap-11 lg:grid-cols-3">
          <div>
            <p className="ap-eyebrow mb-3.5">Built on</p>
            <h3 className="mb-5 text-[23px] font-extrabold">
              Production-grade tools, not experiments.
            </h3>
            <div className="flex flex-wrap gap-2">
              {stack.map((tool) => (
                <span key={tool} className="ap-chip">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="ap-eyebrow mb-3.5">How we handle your data</p>
            <h3 className="mb-5 text-[23px] font-extrabold">Your systems stay yours.</h3>
            <ul className="grid gap-3">
              {dataPrinciples.map((line) => (
                <li key={line} className="flex gap-3 text-[14.5px] text-quiet">
                  <span className="mt-[11px] h-0.5 w-3.5 flex-none bg-azure" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="ap-eyebrow mb-3.5">Company</p>
            <h3 className="mb-5 text-[23px] font-extrabold">AitoTech</h3>
            <div className="grid gap-2.5 text-[14.5px] text-quiet">
              <p>Founder-led studio based in Delhi, India.</p>
              <p>You work directly with the people who build your system.</p>
              <p>
                <a href="mailto:info@aitotech.in" className="text-azure-deep hover:text-azure">
                  info@aitotech.in
                </a>{' '}
                · +91 76783 22020
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
