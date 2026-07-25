import { useEffect, useState } from "react";
import { SITE, WA_TRIAL } from "../lib/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

const LINKS = [
  { href: "#method", label: "The Method" },
  { href: "#programs", label: "Programs" },
  { href: "#trial", label: "Free Trial" },
  { href: "#faq", label: "Questions" },
  { href: "#contact", label: "Contact" },
];

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-4" aria-label={`${SITE.name} home`}>
      <img 
        src="/chesslabtv-logo.jpeg" 
        alt="ChessLabTV Logo" 
        className="h-12 w-12 shrink-0 rounded-xl object-cover shadow-[0_8px_16px_rgba(18,39,29,0.12)] transition-transform duration-500 group-hover:-translate-y-1 sm:h-14 sm:w-14" 
      />
      <span className="leading-tight">
        <span className="block font-display text-[20px] font-semibold tracking-tight text-forest-900 sm:text-[22px]">
          ChessLab<span className="text-gold">TV</span>
        </span>
        {!compact && (
          <span className="label mt-0.5 block text-[10px] uppercase tracking-[0.15em] text-sage">
            Silvassa · India
          </span>
        )}
      </span>
    </a>
  );
}

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll to shrink header
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
        solid || menuOpen
          ? "border-b border-gold/10 bg-cream-50/90 py-3 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(18,39,29,0.05)]"
          : "border-b border-transparent bg-transparent py-5 sm:py-7"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 sm:px-8">
        
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[15px] font-medium tracking-wide text-ink-soft transition-colors duration-300 hover:text-forest-900"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2.5 rounded-full border border-line px-6 py-3 text-[14.5px] font-semibold text-forest-900 transition-all duration-300 hover:border-gold/60 hover:bg-gold/5"
          >
            <PhoneIcon className="h-4 w-4" />
            {SITE.phoneDisplay}
          </a>
          
          <a
            href={WA_TRIAL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full bg-forest-900 px-7 py-3 text-[14.5px] font-semibold text-cream-50 shadow-[0_8px_20px_-8px_rgba(18,39,29,.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-forest-800 hover:shadow-[0_16px_30px_-12px_rgba(18,39,29,.7)]"
          >
            <WhatsAppIcon className="h-4 w-4 text-gold" />
            Free trial
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="relative z-50 ml-auto flex h-12 w-12 flex-col items-center justify-center gap-[5px] text-forest-900 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`h-[2px] w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[2px] w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden bg-cream-50/95 backdrop-blur-xl transition-all duration-500 ease-in-out lg:hidden ${
          menuOpen ? "max-h-screen border-b border-gold/20 shadow-2xl" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 pb-10 pt-6 sm:px-10">
          <nav className="flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={handleLinkClick}
                className="border-b border-line/50 py-5 font-display text-[20px] font-medium tracking-wide text-forest-900 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="mt-10 flex flex-col gap-4">
            <a
              href={SITE.phoneHref}
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-3 rounded-full border border-forest-900/20 py-4 text-[15px] font-semibold text-forest-900 active:bg-black/5"
            >
              <PhoneIcon className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
            
            <a
              href={WA_TRIAL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-3 rounded-full bg-forest-900 py-4 text-[15px] font-semibold text-cream-50 shadow-[0_8px_20px_-8px_rgba(18,39,29,.5)] active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-5 w-5 text-gold" />
              Claim your free trial
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}