import { useState } from "react";
import Reveal from "./Reveal";
import { PlusIcon } from "./Icons";

const QA = [
  {
    q: "My child has never played before. Is that a problem?",
    a: "Not at all — most students start from zero. The first sessions cover how the pieces move, basic checkmates, and simple tactics, at whatever pace suits the child.",
  },
  {
    q: "What age do you teach?",
    a: "From around five years old up to adults. Kids and adults are taught in separate group batches, and 1:1 coaching is always shaped around the individual.",
  },
  {
    q: "Are classes online or in person?",
    a: "Both. In-person sessions are held in Silvassa; online sessions run over video with a shared digital board, which works well for students outside the area.",
  },
  {
    q: "How long is each session, and how often?",
    a: "Sessions typically run 45–60 minutes. Most students take one or two sessions a week — we'll suggest a rhythm after the trial class.",
  },
  {
    q: "Do you prepare students for tournaments?",
    a: "Yes. For students who want to compete, we build an opening repertoire, work through classic games, and do timed practice with post-game analysis.",
  },
  {
    q: "What do the fees look like?",
    a: "Fees depend on format (1:1 or group) and frequency. They're shared plainly on the first call — and only after you've had the free class, never before.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="label flex items-center gap-2.5 text-gold">
              <span className="h-px w-6 bg-gold" />
              Straight answers
            </p>
            <h2 className="mt-5 font-display text-[clamp(30px,5vw,42px)] font-semibold leading-[1.06] tracking-[-0.02em] text-forest-900">
              What parents usually ask.
            </h2>
            <p className="mt-5 max-w-[38ch] text-[16px] leading-relaxed text-ink-soft">
              Anything else on your mind? Message us on WhatsApp — a real person answers.
            </p>
          </Reveal>

          <div>
            {QA.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={i * 50}>
                  <div className="border-t border-line last:border-b">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span
                        className={`font-display text-[18px] font-semibold transition-colors ${
                          isOpen ? "text-forest-900" : "text-forest-900/80"
                        }`}
                      >
                        {item.q}
                      </span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-gold bg-gold text-forest-900"
                            : "border-line text-sage"
                        }`}
                      >
                        <PlusIcon />
                      </span>
                    </button>
                    <div
                      className="grid transition-all duration-400 ease-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[58ch] pb-6 pr-10 text-[15.5px] leading-relaxed text-ink-soft">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
