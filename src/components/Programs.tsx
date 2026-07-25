import Reveal from "./Reveal";
import { ArrowIcon, CheckIcon } from "./Icons";
import { wa } from "../lib/site";

const PROGRAMS = [
  {
    tag: "One-to-one",
    title: "Private coaching",
    lede: "A coach's full attention on your game — your pace, your goals, your calendar.",
    points: [
      "Session plan built from your own games",
      "Opening repertoire chosen for your style",
      "Homework puzzles between sessions",
      "Flexible slots, online or in person",
    ],
    cta: "Ask about 1:1",
    message:
      "Hi ChessLabTV, I'd like to know more about 1:1 private coaching (and the free trial).",
    featured: true,
  },
  {
    tag: "Monthly · small group",
    title: "Group sessions",
    lede: "Structured monthly batches with a handful of players at a similar level.",
    points: [
      "Maximum six students per batch",
      "Themed classes: tactics, endgames, openings",
      "Friendly rated games every session",
      "Level-matched: beginner, intermediate, club",
    ],
    cta: "Ask about groups",
    message:
      "Hi ChessLabTV, I'd like to know more about the monthly group sessions (and the free trial).",
    featured: false,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <Reveal className="max-w-[640px]">
          <p className="label flex items-center gap-2.5 text-gold">
            <span className="h-px w-6 bg-gold" />
            Programs
          </p>
          <h2 className="mt-5 font-display text-[clamp(30px,5vw,44px)] font-semibold leading-[1.06] tracking-[-0.02em] text-forest-900">
            Two ways to learn. One standard.
          </h2>
          <p className="mt-5 text-[16.5px] leading-relaxed text-ink-soft">
            Pick the format that fits your goals — or start with one and add the other
            later. Both begin with the same free trial class.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 110}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 sm:p-10 ${
                  p.featured
                    ? "border-forest-900/15 bg-forest-900 text-cream-50 shadow-[0_30px_60px_-40px_rgba(18,39,29,.9)]"
                    : "border-line bg-cream-50 shadow-[0_20px_44px_-38px_rgba(18,39,29,.7)]"
                }`}
              >
                {p.featured && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-12 text-[150px] leading-none text-cream-50/[0.06]"
                  >
                    ♞
                  </span>
                )}
                <span
                  className={`label inline-flex w-fit rounded-full px-3 py-1.5 ${
                    p.featured ? "bg-gold text-forest-900" : "bg-gold-soft/70 text-forest-900"
                  }`}
                >
                  {p.tag}
                </span>
                <h3
                  className={`mt-6 font-display text-[27px] font-semibold tracking-tight ${
                    p.featured ? "text-cream-50" : "text-forest-900"
                  }`}
                >
                  {p.title}
                </h3>
                <p
                  className={`mt-3 text-[15.5px] leading-relaxed ${
                    p.featured ? "text-cream-50/75" : "text-ink-soft"
                  }`}
                >
                  {p.lede}
                </p>

                <ul className="mt-7 space-y-3.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <CheckIcon
                        className={`mt-0.5 h-[17px] w-[17px] shrink-0 ${
                          p.featured ? "text-gold" : "text-sage"
                        }`}
                      />
                      <span
                        className={`text-[15px] ${
                          p.featured ? "text-cream-50/85" : "text-ink-soft"
                        }`}
                      >
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={wa(p.message)}
                  target="_blank"
                  rel="noopener"
                  className={`mt-9 inline-flex w-fit items-center gap-2 border-b pb-1 text-[14.5px] font-semibold transition-colors ${
                    p.featured
                      ? "border-gold text-gold hover:text-gold-soft"
                      : "border-gold text-forest-900 hover:text-sage"
                  }`}
                >
                  {p.cta}
                  <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-center text-[14px] text-sage">
            Fees are shared honestly on the first call — and only after you've had your
            free class.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
