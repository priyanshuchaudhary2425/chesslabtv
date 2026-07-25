import Reveal from "./Reveal";
import { ArrowIcon, CheckIcon, ClockIcon, WhatsAppIcon } from "./Icons";
import { WA_TRIAL } from "../lib/site";

const STEPS = [
  {
    n: "01",
    t: "Send one message",
    d: "Tap the WhatsApp button. Tell us the student's age and level — that's all we need.",
  },
  {
    n: "02",
    t: "Play a real class",
    d: "A full session, not a sales demo. Parents are welcome to sit in and watch the whole thing.",
  },
  {
    n: "03",
    t: "Decide freely",
    d: "Continue, switch format, or walk away. No questions asked, no follow-up pressure.",
  },
];

const TRUST = [
  "Personal attention in every single session",
  "Timings that work around school and work",
  "Beginners genuinely welcome — start from the rules",
  "Kids and adults, taught with the same care",
];

export default function Trial() {
  return (
    <section id="trial" className="grain relative overflow-hidden bg-forest-900 py-20 text-cream-50 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(45deg,#fff 25%,transparent 25%),linear-gradient(-45deg,#fff 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#fff 75%),linear-gradient(-45deg,transparent 75%,#fff 75%)",
          backgroundSize: "64px 64px",
          backgroundPosition: "0 0, 0 32px, 32px -32px, -32px 0",
          maskImage: "radial-gradient(60% 70% at 80% 10%, rgba(0,0,0,.85), transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(60% 70% at 80% 10%, rgba(0,0,0,.85), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="label flex items-center gap-2.5 text-gold">
                <span className="h-px w-6 bg-gold" />
                O-O — castle first, play safe
              </p>
              <h2 className="mt-5 font-display text-[clamp(30px,5.2vw,46px)] font-semibold leading-[1.04] tracking-[-0.02em] text-cream-50">
                Try it before
                <br />
                you commit.
              </h2>
              <p className="mt-6 max-w-[46ch] text-[16.5px] leading-relaxed text-cream-50/70">
                One free trial class. No forms, no card, no questions asked. If it isn't
                the right fit, we'll say so first.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a
                  href={WA_TRIAL}
                  target="_blank"
                  rel="noopener"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-gold px-7 py-4 text-[15px] font-bold text-forest-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-soft hover:shadow-[0_20px_40px_-18px_rgba(0,0,0,.7)]"
                >
                  <WhatsAppIcon />
                  Claim your free class
                  <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <p className="flex items-center gap-2 text-[13.5px] text-cream-50/65">
                  <ClockIcon className="h-4 w-4 text-gold" />
                  Usually replies the same day
                </p>
              </div>
            </Reveal>

            <ul className="mt-12 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {TRUST.map((t, i) => (
                <Reveal as="li" key={t} delay={i * 70}>
                  <div className="flex items-start gap-3 border-t border-cream-50/12 pt-4">
                    <CheckIcon className="mt-0.5 h-[17px] w-[17px] shrink-0 text-gold" />
                    <span className="text-[14.5px] leading-snug text-cream-50/80">{t}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* steps */}
          <Reveal delay={140}>
            <ol className="space-y-3">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="flex gap-5 rounded-2xl border border-cream-50/12 bg-cream-50/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-gold/40 hover:bg-cream-50/[0.07]"
                >
                  <span className="font-display text-[22px] font-semibold leading-none text-gold/70">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-display text-[19px] font-semibold text-cream-50">
                      {s.t}
                    </h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-cream-50/65">
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
