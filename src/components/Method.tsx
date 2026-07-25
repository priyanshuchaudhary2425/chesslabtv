import Reveal from "./Reveal";

const PRINCIPLES = [
  {
    move: "1. e4",
    title: "Take the centre",
    body: "Before tricks, before openings memorised from videos — students learn why the four middle squares decide most games. Space first, everything else follows.",
  },
  {
    move: "2. Nf3",
    title: "Develop with purpose",
    body: "Every piece gets a job. We build the habit of asking one question before each move: what does this piece do that it couldn't do before?",
  },
  {
    move: "3. Bc4",
    title: "Aim at the weakness",
    body: "The Italian bishop stares at f7 from move three. Students learn to find the weak square in any position — on the board, and later, in the opponent.",
  },
];

export default function Method() {
  return (
    <section id="method" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* photo column */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="overflow-hidden rounded-[18px] border border-line bg-cream-50 p-2 shadow-[0_34px_60px_-40px_rgba(18,39,29,.6)]">
                <img
                  src="https://images.pexels.com/photos/5062809/pexels-photo-5062809.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                  alt="A young student moving a piece during a coaching session"
                  loading="lazy"
                  className="h-[420px] w-full rounded-[12px] object-cover sm:h-[520px]"
                />
              </div>
              <div className="absolute -bottom-7 -right-3 w-[190px] rotate-[-2deg] rounded-xl border border-line bg-cream-50 p-4 shadow-[0_20px_38px_-24px_rgba(18,39,29,.7)] sm:-right-8">
                <p className="label text-gold">Coach's note</p>
                <p className="mt-1.5 font-display text-[14.5px] italic leading-snug text-forest-900">
                  “Play the board, not the rating.”
                </p>
              </div>
            </div>
          </Reveal>

          {/* text column */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="label flex items-center gap-2.5 text-gold">
                <span className="h-px w-6 bg-gold" />
                The Method
              </p>
              <h2 className="mt-5 font-display text-[clamp(30px,5vw,44px)] font-semibold leading-[1.06] tracking-[-0.02em] text-forest-900">
                We start where chess itself started.
              </h2>
              <p className="mt-5 max-w-[52ch] text-[16.5px] leading-relaxed text-ink-soft">
                Written down in Italy in 1497, the Italian Game is the oldest opening
                still played at the top level today. It teaches the three ideas that
                every good chess player runs on — so that's where every ChessLabTV
                student begins.
              </p>
            </Reveal>

            <ul className="mt-11 space-y-0">
              {PRINCIPLES.map((p, i) => (
                <Reveal as="li" key={p.move} delay={i * 90}>
                  <div className="group flex gap-5 border-t border-line py-7 transition-colors">
                    <span className="mt-0.5 shrink-0 rounded-lg bg-forest-900 px-2.5 py-1.5 font-sans text-[12.5px] font-bold tabular-nums text-gold-soft">
                      {p.move}
                    </span>
                    <div>
                      <h3 className="font-display text-[21px] font-semibold text-forest-900">
                        {p.title}
                      </h3>
                      <p className="mt-2 max-w-[48ch] text-[15.5px] leading-relaxed text-ink-soft">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={120}>
              <figure className="mt-8 border-l-2 border-gold pl-5">
                <blockquote className="font-display text-[18px] italic leading-snug text-forest-900">
                  “In order to improve your game, you must study the endgame before
                  everything else.”
                </blockquote>
                <figcaption className="label mt-2.5 text-sage">
                  José Raúl Capablanca · World Champion, 1921–27
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
