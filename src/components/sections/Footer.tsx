import { WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/data";

const PRODUCT_LINKS = [
  "Flatbreads & Tortillas",
  "Frozen-to-Fry Snacks",
  "Base Gravies & Pastes",
  "Retort Rice",
  "Roti Canai",
];

const COMPANY_LINKS = ["About", "Manufacturing", "Sustainability", "Careers"];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white">
      <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:gap-14">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <span className="relative inline-flex h-3 w-3 items-center justify-center rounded-full bg-[color:var(--orange)]">
                <span className="absolute inset-[3px] rounded-full bg-white/70" />
              </span>
              <span className="font-display text-[1.55rem] font-extrabold tracking-[-0.03em]">
                unifayre
              </span>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--orange-bright)]">
                Foods
              </span>
            </div>
            <p className="max-w-sm font-display text-[1.1rem] font-semibold leading-snug tracking-[-0.015em] text-white">
              Frozen food, built for the Gulf&rsquo;s best kitchens.
            </p>
            <p className="max-w-sm text-[0.86rem] leading-relaxed text-white/55">
              Unifayre Foods is the export identity of Chatha Foods Limited.
              Over 30 years of frozen food manufacturing from Mohali, India.
            </p>
          </div>

          <FooterCol title="Products" items={PRODUCT_LINKS} href="#products" />
          <FooterCol title="Company" items={COMPANY_LINKS} href="#" />

          <div>
            <h4 className="eyebrow mb-5 text-[color:var(--orange-bright)]">
              UAE Desk
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.92rem] text-white/70 transition-colors hover:text-white"
                >
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href="mailto:uae@unifayre.com"
                  className="text-[0.92rem] text-white/70 transition-colors hover:text-white"
                >
                  uae@unifayre.com
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[0.92rem] text-white/70 transition-colors hover:text-white"
                >
                  Request Partnership Kit
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-4 px-5 py-6 text-[0.78rem] text-white/50 md:flex-row md:items-center md:px-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>&copy; 2026 Unifayre Foods</span>
            <span className="h-1 w-1 rounded-full bg-white/25" />
            <span>A Chatha Foods Limited brand</span>
            <span className="h-1 w-1 rounded-full bg-white/25" />
            <span>BSE Listed</span>
          </div>
          <div className="flex items-center gap-5">
            <a className="hover:text-white" href="#">
              Privacy
            </a>
            <a className="hover:text-white" href="#">
              Terms
            </a>
            <a className="hover:text-white" href="#">
              Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
  href,
}: {
  title: string;
  items: string[];
  href: string;
}) {
  return (
    <div>
      <h4 className="eyebrow mb-5 text-[color:var(--orange-bright)]">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((p) => (
          <li key={p}>
            <a
              href={href}
              className="text-[0.92rem] text-white/70 transition-colors hover:text-white"
            >
              {p}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
