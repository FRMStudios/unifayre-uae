import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CinematicHero from "@/components/ui/CinematicHero";
import CategorySection from "@/components/ui/CategorySection";
import { productsByCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "Vegetarian Range | Unifayre Foods",
  description:
    "44 vegetarian SKUs built for menus that scale. Flatbreads, frozen-to-fry snacks, base gravies and retort rice engineered for the Gulf's busiest kitchens.",
};

export default function VegetarianPage() {
  const flatbreads = productsByCategory("flatbreads");
  const snacks = productsByCategory("snacks");
  const gravies = productsByCategory("gravies");
  const rice = productsByCategory("rice");

  const totalSkus = flatbreads.length + snacks.length + gravies.length + rice.length;

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        <CinematicHero
          imageSrc="/images/v2/hero/veg-hero.png"
          imageAlt="Vegetarian range — Malabar Paratha layered hero"
          variant="page"
          eyebrow="Vegetarian range"
          headline={
            <>
              {totalSkus} vegetarian SKUs.
              <br />
              <em className="italic font-display text-[color:var(--accent-gold)]">
                Built for menus that scale.
              </em>
            </>
          }
          subline="Flatbreads, frozen-to-fry snacks, base gravies and retort rice. Engineered for the Gulf's busiest kitchens."
          primaryCta={{ label: "Request Sample", href: "/contact" }}
          secondaryCta={{ label: "View Non-Vegetarian", href: "/non-vegetarian" }}
        />

        {/* Capability strip */}
        <section className="border-y border-[color:var(--border-subtle)] bg-[color:var(--bg-warm-shadow)] py-12 md:py-14">
          <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-6 px-5 md:grid-cols-4 md:gap-10 md:px-10">
            <CapabilityStat number="18,000" suffix=" MT" label="Veg Capacity" />
            <CapabilityStat number="4" suffix="" label="Categories" />
            <CapabilityStat
              number={String(totalSkus)}
              suffix=" SKUs"
              label="Active Range"
            />
            <CapabilityStat number="100%" suffix="" label="Halal-line ready" />
          </div>
        </section>

        {/* Category sections — 4 cinematic blocks */}
        <CategorySection
          anchorId="flatbreads"
          number="01"
          title="Flatbreads & Tortillas"
          description="Malabar Paratha, Roti Canai, stuffed parathas and 4-grain tortillas. The flatbread engine for QSR wraps, breakfast platters, curry bases and dessert formats."
          capacity="15,500+ pcs / hr"
          bannerSrc="/images/v2/categories/flatbreads-banner.png"
          bannerAlt="Flatbreads & Tortillas cinematic banner"
          products={flatbreads}
        />

        <CategorySection
          anchorId="snacks-veg"
          number="02"
          title="Frozen-to-Fry Snacks"
          description="Samosas, kebabs, tikkis, kachoris, bhaji, pakoras and falafel. Frozen at peak so every fry comes out crisp, golden and consistent at scale."
          capacity="1 lakh pcs / day"
          bannerSrc="/images/v2/categories/snacks-veg-banner.png"
          bannerAlt="Frozen-to-Fry Snacks vegetarian banner"
          products={snacks}
        />

        <CategorySection
          anchorId="gravies"
          number="03"
          title="Base Gravies & Pastes"
          description="Makhani, Manchurian, Thai red and green curry, biryani pastes and base sauces. The backbone of any restaurant menu, ready to plate or build on."
          capacity="1,000 kg / hr"
          bannerSrc="/images/v2/categories/gravies-banner.png"
          bannerAlt="Base Gravies & Pastes Makhani banner"
          products={gravies}
        />

        <CategorySection
          anchorId="rice"
          number="04"
          title="Retort Rice"
          description="Eight aromatic rice varieties from Basmati and Jeera to Saffron and Cilantro Lime. Shelf-stable at ambient temperature, ready in minutes."
          capacity="Ambient shelf stable"
          bannerSrc="/images/v2/categories/rice-banner.png"
          bannerAlt="Retort Rice biryani banner"
          products={rice}
        />

        {/* Customisation CTA band */}
        <section className="bg-[color:var(--bg-warm-shadow)] py-20 md:py-24">
          <div className="mx-auto max-w-[1320px] px-5 text-center md:px-10">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold)]">
              R&amp;D capability
            </span>
            <h3 className="mx-auto mt-4 max-w-[28ch] font-display text-[clamp(1.8rem,3.6vw,2.6rem)] font-semibold leading-tight tracking-[-0.015em] text-[color:var(--text-primary)]">
              Need a custom spec? Our R&amp;D builds to{" "}
              <em className="italic">your menu, region, and palate.</em>
            </h3>
            <a
              href="/contact"
              className="btn-gold mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.88rem] font-semibold shadow-[0_14px_36px_-12px_rgba(201,169,97,0.5)]"
            >
              Brief our R&amp;D team
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function CapabilityStat({
  number,
  suffix,
  label,
}: {
  number: string;
  suffix: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="whitespace-nowrap font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-semibold leading-none tracking-[-0.02em] text-[color:var(--text-primary)]">
        {number}
        <span className="text-[color:var(--accent-gold)]">{suffix}</span>
      </span>
      <span className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
        {label}
      </span>
    </div>
  );
}
