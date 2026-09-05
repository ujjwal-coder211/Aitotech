import Reveal from './Reveal';
import RoiCalculator from './RoiCalculator';

export default function RoiSection() {
  return (
    <section className="ap-sec">
      <div className="ap-wrap">
        <Reveal className="mb-10 max-w-[42ch] sm:mb-11">
          <p className="ap-eyebrow mb-3.5">Automation opportunity</p>
          <h2 className="text-[clamp(26px,3.4vw,42px)] font-extrabold">
            How many hours is your business spending by hand?
          </h2>
          <p className="ap-lead mt-4">
            Move the sliders. This is a rough estimate from your own numbers — we verify it properly
            in the audit.
          </p>
        </Reveal>

        <Reveal y={22}>
          <RoiCalculator />
        </Reveal>
      </div>
    </section>
  );
}
