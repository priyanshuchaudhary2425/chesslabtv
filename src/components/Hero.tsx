import ItalianGame from "./ItalianGame";
import Reveal from "./Reveal";
import { SITE, WA_TRIAL } from "../lib/site";
import { ArrowIcon, WhatsAppIcon } from "./Icons";

const STATS = [
  { k: "1:1", v: "Private coaching" },
  { k: "6", v: "Students per group" },
  { k: "Free", v: "First class, always" },
  { k: "All", v: "Ages 5 to 65" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-10 sm:pt-16">
      {/* faint board texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-0 right-0 h-[560px] opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(45deg,#12271d 25%,transparent 25%),linear-gradient(-45deg,#12271d 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#12271d 75%),linear-gradient(-45deg,transparent 75%,#12271d 75%)",
          backgroundSize: "56px 56px",
          backgroundPosition: "0 0, 0 28px, 28px -28px, -28px 0",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,.9), transparent 78%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,.9), transparent 78%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-cream-50/70 px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="label text-forest-800">
                Chess coaching in Silvassa
              </span>
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 font-display text-[clamp(40px,8.4vw,68px)] font-semibold leading-[0.98] tracking-[-0.025em] text-forest-900">
              Your first move
              <br />
              starts <em className="not-italic text-gold">here.</em>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-[46ch] text-[17.5px] leading-relaxed text-ink-soft">
              One-to-one and small-group coaching for kids and adults — taught the
              classical way, from your very first pawn move to tournament-ready play.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-3 font-display text-[17px] italic text-sage">
              “{SITE.tagline}”
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={WA_TRIAL}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-forest-900 px-7 py-4 text-[15px] font-semibold text-cream-50 shadow-[0_18px_34px_-20px_rgba(18,39,29,.95)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-forest-800 hover:shadow-[0_22px_40px_-18px_rgba(18,39,29,.9)]"
              >
                <WhatsAppIcon />
                Book your free trial
                <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href={SITE.phoneHref}
                className="border-b border-gold pb-1 text-[15px] font-semibold text-forest-900 transition-colors hover:text-sage"
              >
                or call {SITE.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <p className="mt-5 flex items-center gap-2 text-[13.5px] text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              No forms. No questions asked. Just a game.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pl-4">
          <ItalianGame />
        </Reveal>
      </div>

      {/* stat band */}
      <div className="relative border-y border-line/80 bg-cream-50/60">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-px px-5 sm:px-8 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.k}
              delay={i * 70}
              className="px-1 py-6 md:px-6 md:py-8 md:text-center"
            >
              <p className="font-display text-[30px] font-semibold leading-none text-forest-900">
                {s.k}
              </p>
              <p className="label mt-2 text-sage">{s.v}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
