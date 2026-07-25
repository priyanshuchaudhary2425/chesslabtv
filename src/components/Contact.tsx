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
    <section id="contact" className="relative bg-cream-50/30 pb-24 pt-10 sm:pb-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        
        {/* Premium Card Container */}
        <div className="overflow-hidden rounded-[32px] border border-gold/20 bg-white shadow-[0_24px_64px_-12px_rgba(18,39,29,0.06)] transition-shadow duration-500 hover:shadow-[0_32px_80px_-16px_rgba(18,39,29,0.1)]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            
            {/* Left Column: Contact Details */}
            <div className="p-8 sm:p-14 lg:p-16">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-8 bg-gold/50" />
                  <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-gold uppercase">
                    Your Move
                  </span>
                </div>
                
                <h2 className="mt-6 font-display text-[clamp(32px,4.5vw,44px)] font-medium leading-[1.05] tracking-tight text-forest-900">
                  Let's get you <br className="hidden sm:block"/>
                  <span className="font-light italic text-forest-900/70">on the board.</span>
                </h2>
                
                <p className="mt-5 max-w-[42ch] text-[16.5px] font-light leading-relaxed text-ink-soft">
                  Reach out on WhatsApp or call directly, and we'll find a slot for your free trial class this week.
                </p>
              </Reveal>

              <div className="mt-12 flex flex-col">
                {ROWS.map((r, i) => {
                  const Icon = r.icon;
                  const content = (
                    <>
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-cream-50/50 text-forest-900 transition-all duration-300 group-hover:scale-110 group-hover:border-gold/50 group-hover:bg-gold/10 group-hover:text-gold">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="flex flex-col">
                        <span className="font-sans text-[12px] font-semibold uppercase tracking-wider text-sage">
                          {r.label}
                        </span>
                        <span className="mt-1 font-display text-[17px] font-medium tracking-wide text-forest-900 transition-colors group-hover:text-gold">
                          {r.value}
                        </span>
                      </div>
                    </>
                  );

                  return (
                    <Reveal key={r.label} delay={i * 80}>
                      {r.href ? (
                        <a
                          href={r.href}
                          className="group flex items-center gap-5 border-b border-line py-6 first:border-t hover:bg-black/[0.01]"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="group flex items-center gap-5 border-b border-line py-6">
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
                  rel="noopener noreferrer"
                  className="group mt-10 inline-flex items-center gap-3 overflow-hidden rounded-sm bg-forest-900 px-8 py-4 transition-all duration-500 hover:bg-forest-800"
                >
                  <WhatsAppIcon className="relative z-10 h-4 w-4 text-gold" />
                  <span className="relative z-10 font-sans text-[13px] font-bold uppercase tracking-wide text-gold">
                    Message ChessLabTV
                  </span>
                  <ArrowIcon className="relative z-10 h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Reveal>
            </div>

            {/* Right Column: WhatsApp Group */}
            <div className="relative flex min-h-[400px] flex-col justify-end overflow-hidden bg-forest-900 p-8 sm:p-14 lg:p-16">
              {/* Refined Image Treatment */}
              <img
                src="https://images.pexels.com/photos/12214749/pexels-photo-12214749.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600"
                alt="Close-up of a knight on a wooden chessboard"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/80 to-transparent" />
              
              <Reveal className="relative z-10">
                <span className="inline-flex rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-widest text-gold backdrop-blur-sm">
                  Community
                </span>
                
                <h3 className="mt-6 font-display text-[28px] font-medium leading-tight text-cream-50">
                  Join the ChessLabTV <br />
                  <span className="italic text-gold-soft">WhatsApp Club.</span>
                </h3>
                
                <p className="mt-4 max-w-[32ch] text-[15.5px] font-light leading-relaxed text-cream-50/70">
                  A daily puzzle, session reminders, and results from our students — free to follow, even before you take a class.
                </p>
                
                {/* Embedded WhatsApp Link */}
                <a
                  href="https://chat.whatsapp.com/EpKvNXbM0qF1W05PesYDzJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-sm border border-gold/50 bg-gold/10 px-8 py-4 backdrop-blur-sm transition-all duration-300 hover:bg-gold sm:w-auto"
                >
                  <WhatsAppIcon className="h-4 w-4 text-gold transition-colors duration-300 group-hover:text-forest-900" />
                  <span className="font-sans text-[13px] font-bold uppercase tracking-wide text-gold transition-colors duration-300 group-hover:text-forest-900">
                    Join the Group
                  </span>
                </a>
              </Reveal>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}