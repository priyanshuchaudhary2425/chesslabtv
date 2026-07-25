import Reveal from "./Reveal";
import { ArrowIcon, CheckIcon, WhatsAppIcon } from "./Icons";
import { WA_TRIAL } from "../lib/site";

const STEPS = [
  {
    n: "01",
    t: "Drop a quick message",
    d: "Tap WhatsApp and share the student's age and current experience level. That's the entire setup.",
  },
  {
    n: "02",
    t: "Play a genuine session",
    d: "Experience a complete lesson, not a disguised sales pitch. Parents are highly encouraged to sit in.",
  },
  {
    n: "03",
    t: "Decide on your terms",
    d: "Love it? We build a roadmap. Not a fit? Walk away with zero pressure or follow-up texts.",
  },
];

const TRUST = [
  "1-on-1 focus in every session",
  "Flexible timings for any time zone",
  "Absolute beginners welcome",
  "Tailored methods for kids & adults",
];

export default function Trial() {
  return (
    <section id="trial" className="relative overflow-hidden bg-forest-900 py-24 sm:py-32">
      {/* Premium Cinematic Glow instead of a harsh grid pattern */}
      <div className="pointer-events-none absolute left-0 top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-cream-50/5 blur-[100px]" />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          
          {/* Left Column: Copy & CTA */}
          <div className="flex flex-col justify-center">
            <Reveal>
              {/* Editorial Kicker */}
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-gold/40" />
                <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-gold uppercase">
                  O-O · Castle First
                </span>
              </div>
              
              <h2 className="mt-8 font-display text-[clamp(40px,5vw,56px)] font-medium leading-[1.05] tracking-tight text-cream-50">
                Experience a class <br />
                <span className="font-light italic text-cream-50/60">before you commit.</span>
              </h2>
              
              <p className="mt-6 max-w-[44ch] text-[17px] font-light leading-relaxed text-cream-50/70">
                One full, free session. No credit cards, no lengthy forms, no catch. 
                If we aren't the perfect fit for your chess journey, we'll tell you outright.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
                {/* Refined, Architectural Button */}
                <a
                  href={WA_TRIAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-3 overflow-hidden rounded-sm bg-gold px-8 py-4 transition-all duration-500 hover:bg-white"
                >
                  <WhatsAppIcon className="relative z-10 h-4 w-4 text-forest-900" />
                  <span className="relative z-10 font-sans text-[13px] font-bold uppercase tracking-wide text-forest-900">
                    Claim Your Free Class
                  </span>
                  <ArrowIcon className="relative z-10 h-4 w-4 text-forest-900 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>

            {/* Subtle Trust Line */}
            <div className="mt-16 border-t border-cream-50/10 pt-8">
              <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {TRUST.map((t, i) => (
                  <Reveal as="li" key={t} delay={i * 70}>
                    <div className="flex items-start gap-3">
                      <CheckIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-gold/70" />
                      <span className="text-[14.5px] font-light leading-snug text-cream-50/70">
                        {t}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Editorial Timeline */}
          <Reveal delay={140} className="relative flex items-center lg:pl-10">
            <ol className="relative flex flex-col">
              {/* Delicate vertical line */}
              <div className="absolute bottom-4 left-[23px] top-4 w-px bg-cream-50/10 sm:left-[27px]" />
              
              {STEPS.map((s, index) => (
                <li key={s.n} className="group relative flex gap-8 pb-14 last:pb-0">
                  {/* Minimalist Node */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-forest-900 transition-colors duration-500 group-hover:border-gold group-hover:bg-gold sm:h-14 sm:w-14">
                    <span className="font-mono text-[13px] text-gold transition-colors duration-500 group-hover:text-forest-900 sm:text-[14px]">
                      {s.n}
                    </span>
                  </div>
                  
                  {/* Clean Typography */}
                  <div className="pt-2 sm:pt-3">
                    <h3 className="font-display text-[22px] font-medium tracking-wide text-cream-50 transition-colors duration-300 group-hover:text-gold sm:text-[24px]">
                      {s.t}
                    </h3>
                    <p className="mt-3 max-w-[36ch] text-[15.5px] font-light leading-relaxed text-cream-50/60">
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