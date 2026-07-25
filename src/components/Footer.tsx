import { SITE, WA_TRIAL } from "../lib/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";
import LogoMark from "./LogoMark";

const LINKS = [
  { href: "#method", label: "The Method" },
  { href: "#programs", label: "Programs" },
  { href: "#trial", label: "Free Trial" },
  { href: "#faq", label: "Questions" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream-50/70 pb-28 pt-14 lg:pb-14">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-[30ch]">
            <div className="flex items-center gap-3">
              <LogoMark className="h-11 w-11" />
              <span className="font-display text-[20px] font-semibold text-forest-900">
                ChessLab<span className="text-gold">TV</span>
              </span>
            </div>
            <p className="mt-4 font-display text-[16px] italic text-sage">
              “{SITE.tagline}”
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{SITE.address}</p>
          </div>

          <nav className="grid gap-2.5">
            <p className="label mb-1 text-sage">Explore</p>
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[14.5px] text-ink-soft transition-colors hover:text-forest-900"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="grid gap-2.5">
            <p className="label mb-1 text-sage">Reach us</p>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 text-[14.5px] text-ink-soft transition-colors hover:text-forest-900"
            >
              <PhoneIcon className="h-4 w-4 text-gold" />
              {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.emailHref}
              className="text-[14.5px] text-ink-soft transition-colors hover:text-forest-900"
            >
              {SITE.email}
            </a>
            <a
              href={WA_TRIAL}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-line px-4 py-2 text-[13.5px] font-semibold text-forest-900 transition-colors hover:border-gold hover:bg-cream"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Book a free trial
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-[12.5px] text-sage sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built move by move in Silvassa <span className="text-gold">♞</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
