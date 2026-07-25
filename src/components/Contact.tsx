import Reveal from "./Reveal";
import { SITE, WA_ASK } from "../lib/site";
import { ArrowIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

const ROWS = [
  {
    icon: PhoneIcon,
    label: "Call or WhatsApp",
    value: SITE.phoneDisplay,
    href: SITE.phoneHref,
  },
  { icon: MailIcon, label: "Email", value: SITE.email, href: SITE.emailHref },
  { icon: PinIcon, label: "Where we are", value: SITE.address },
];

export default function Contact() {
  return (
    <section id="contact" className="relative pb-24 pt-4 sm:pb-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="overflow-hidden rounded-[26px] border border-line bg-cream-50 shadow-[0_40px_80px_-60px_rgba(18,39,29,.8)]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* left */}
            <div className="p-8 sm:p-12">
              <Reveal>
                <p className="label flex items-center gap-2.5 text-gold">
                  <span className="h-px w-6 bg-gold" />
                  Checkmate — your move
                </p>
                <h2 className="mt-5 font-display text-[clamp(28px,4.6vw,40px)] font-semibold leading-[1.06] tracking-[-0.02em] text-forest-900">
                  Let's get you on the board.
                </h2>
                <p className="mt-4 max-w-[44ch] text-[16px] leading-relaxed text-ink-soft">
                  Reach out on WhatsApp or call directly and we'll find a slot for your
                  free trial class this week.
                </p>
              </Reveal>

              <div className="mt-9">
                {ROWS.map((r, i) => {
                  const Icon = r.icon;
                  const content = (
                    <>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-cream text-forest-900 transition-colors duration-200 group-hover:border-gold group-hover:bg-gold/10">
                        <Icon />
                      </span>
                      <span>
                        <span className="label block text-sage">{r.label}</span>
                        <span className="mt-0.5 block text-[16px] font-medium text-ink">
                          {r.value}
                        </span>
                      </span>
                    </>
                  );
                  return (
                    <Reveal key={r.label} delay={i * 80}>
                      {r.href ? (
                        <a
                          href={r.href}
                          className="group flex items-center gap-4 border-b border-line py-5 first:border-t"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="group flex items-center gap-4 border-b border-line py-5">
                          {content}
                        </div>
                      )}
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delay={160}>
                <a
                  href={WA_ASK}
                  target="_blank"
                  rel="noopener"
                  className="group mt-9 inline-flex items-center gap-2.5 rounded-xl bg-forest-900 px-7 py-4 text-[15px] font-semibold text-cream-50 transition-all duration-200 hover:-translate-y-0.5 hover:bg-forest-800 hover:shadow-[0_20px_38px_-20px_rgba(18,39,29,.9)]"
                >
                  <WhatsAppIcon />
                  Message ChessLabTV
                  <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </Reveal>
            </div>

            {/* right */}
            <div className="relative min-h-[320px] overflow-hidden bg-forest-900">
              <img
                src="https://images.pexels.com/photos/12214749/pexels-photo-12214749.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Close-up of a knight on a wooden chessboard"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/70 to-forest-900/20" />
              <div className="relative flex h-full flex-col justify-end p-8 sm:p-12">
                <Reveal>
                  <span className="label inline-flex rounded-full bg-gold px-3 py-1.5 text-forest-900">
                    Community
                  </span>
                  <h3 className="mt-5 font-display text-[24px] font-semibold leading-tight text-cream-50">
                    Join the ChessLabTV WhatsApp group
                  </h3>
                  <p className="mt-3 max-w-[36ch] text-[15px] leading-relaxed text-cream-50/70">
                    A daily puzzle, session reminders and results from our students —
                    free to follow, even before you join a class.
                  </p>
                  <a
                    href={SITE.groupLink}
                    target="_blank"
                    rel="noopener"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-gold/70 bg-gold/10 px-6 py-3.5 text-[14.5px] font-semibold text-gold-soft transition-colors duration-200 hover:bg-gold hover:text-forest-900 sm:w-auto"
                  >
                    <WhatsAppIcon className="h-[17px] w-[17px]" />
                    Join the group
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
