import { SITE, WA_TRIAL } from "../lib/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-cream-50/95 px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl shadow-[0_-10px_30px_-18px_rgba(18,39,29,.5)] lg:hidden">
      <div className="flex gap-2.5">
        <a
          href={SITE.phoneHref}
          aria-label={`Call ${SITE.name}`}
          className="grid w-14 shrink-0 place-items-center rounded-xl border border-line bg-cream text-forest-900"
        >
          <PhoneIcon className="h-5 w-5" />
        </a>
        <a
          href={WA_TRIAL}
          target="_blank"
          rel="noopener"
          className="flex flex-1 items-center justify-center gap-2.5 rounded-xl bg-forest-900 py-3.5 text-[15px] font-semibold text-cream-50"
        >
          <WhatsAppIcon />
          Book free trial
        </a>
      </div>
    </div>
  );
}
