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
    <section id="method" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          
          {/* Photo Column */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background block */}
              <div className="absolute -left-6 -top-6 h-full w-full rounded-[24px] border border-line bg-cream-50/50 hidden sm:block" />
              
              {/* Main Image */}
              <div className="relative z-10 overflow-hidden rounded-[20px] border border-line bg-white p-2.5 shadow-[0_32px_64px_-24px_rgba(18,39,29,0.15)] transition-transform duration-700 hover:scale-[1.01]">
                <img
                  src="https://images.pexels.com/photos/5062809/pexels-photo-5062809.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                  alt="A young student moving a piece during a coaching session"
                  loading="lazy"
                  className="h-[460px] w-full rounded-[14px] object-cover sm:h-[580px]"
                />
              </div>

              {/* Floating Coach's Note */}
              <div className="absolute -bottom-6 -right-4 z-20 w-[220px] rotate-[-3deg] rounded-2xl border border-line bg-white/90 p-5 shadow-[0_24px_48px_-12px_rgba(18,39,29,0.2)] backdrop-blur-md sm:-right-10 sm:-bottom-8">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-gold" />
                  <p className="label text-xs uppercase tracking-widest text-gold">Coach's note</p>
                </div>
                <p className="mt-3 font-display text-[16px] italic leading-snug text-forest-900">
                  “Play the board, not the rating.”
                </p>
              </div>
            </div>
          </Reveal>

          {/* Text Column */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="label text-sm uppercase tracking-wider text-gold">The Method</span>
              </div>
              <h2 className="mt-6 font-display text-[clamp(32px,5vw,48px)] font-bold leading-[1.05] tracking-[-0.02em] text-forest-900">
                We start where chess itself started.
              </h2>
              <p className="mt-6 max-w-[54ch] text-[17px] leading-relaxed text-ink-soft">
                Written down in Italy in 1497, the Italian Game is the oldest opening
                still played at the top level today. It teaches the three ideas that
                every good chess player runs on — so that's where every ChessLabTV
                student begins.
              </p>
            </Reveal>

            {/* Principles List */}
            <ul className="mt-12 flex flex-col gap-2">
              {PRINCIPLES.map((p, i) => (
                <Reveal as="li" key={p.move} delay={i * 90}>
                  <div className="group flex gap-6 rounded-2xl p-4 transition-colors duration-300 hover:bg-black/[0.02] sm:p-5 -mx-4 sm:-mx-5">
                    <span className="flex h-10 w-16 shrink-0 items-center justify-center rounded-lg bg-forest-900 font-sans text-[13px] font-bold tracking-wide text-gold-soft shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:bg-gold group-hover:text-forest-900">
                      {p.move}
                    </span>
                    <div>
                      <h3 className="font-display text-[22px] font-semibold tracking-tight text-forest-900">
                        {p.title}
                      </h3>
                      <p className="mt-2.5 max-w-[48ch] text-[15.5px] leading-relaxed text-ink-soft">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            {/* Quote Section */}
            <Reveal delay={120}>
              <figure className="mt-10 rounded-2xl border border-line bg-cream-50/30 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute -left-2 -top-4 text-[100px] text-gold opacity-10 font-serif leading-none">
                  "
                </div>
                <blockquote className="relative font-display text-[19px] italic leading-relaxed text-forest-900">
                  “In order to improve your game, you must study the endgame before everything else.”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <div className="h-px w-6 bg-gold/50" />
                  <span className="label text-[13px] uppercase tracking-wide text-sage">
                    José Raúl Capablanca · World Champion, 1921–27
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}