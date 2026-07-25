import { useEffect, useState } from "react";
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

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label={`${SITE.name} home`}>
      <LogoMark className="h-10 w-10 shrink-0 drop-shadow-[0_6px_14px_rgba(18,39,29,.35)] transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span className="leading-tight">
        <span className="block font-display text-[19px] font-semibold tracking-tight text-forest-900">
          ChessLab<span className="text-gold">TV</span>
        </span>
        {!compact && (
          <span className="label block text-[9.5px] text-sage">Silvassa · India</span>
        )}
      </span>
    </a>
  );
}

export default function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-line/70 bg-cream/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-3.5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[14px] font-medium text-ink-soft transition-colors hover:text-forest-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-line px-4 py-2 text-[13.5px] font-semibold text-forest-900 transition-colors hover:border-gold hover:bg-cream-50 sm:inline-flex"
          >
            <PhoneIcon className="h-[15px] w-[15px]" />
            {SITE.phoneDisplay}
          </a>
          <a
            href={WA_TRIAL}
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-2 rounded-full bg-forest-900 px-5 py-2.5 text-[13.5px] font-semibold text-cream-50 transition-all duration-200 hover:-translate-y-0.5 hover:bg-forest-800 hover:shadow-[0_12px_24px_-12px_rgba(18,39,29,.8)] lg:inline-flex"
          >
            <WhatsAppIcon className="h-[16px] w-[16px]" />
            Free trial
          </a>
        </div>
      </div>
    </header>
  );
}
