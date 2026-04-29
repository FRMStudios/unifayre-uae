import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CinematicHero from "@/components/ui/CinematicHero";

export const metadata: Metadata = {
  title: "Vegetarian Range | Unifayre Foods",
  description:
    "44 vegetarian SKUs built for menus that scale. Flatbreads, frozen-to-fry snacks, base gravies and retort rice engineered for the Gulf's busiest kitchens.",
};

/**
 * /vegetarian — Phase 1A scaffold.
 *
 * In Phase 1B, four CategorySection blocks will populate below the hero:
 *   01 Flatbreads & Tortillas
 *   02 Frozen-to-Fry Snacks
 *   03 Base Gravies & Pastes
 *   04 Retort Rice
 *
 * Hero placeholder: /products/flatbreads/malabar-garlic.jpg with dark
 * gradient overlay. Real shot brief: Malabar Paratha layers being separated
 * with chef's hands, steam rising, dark wooden surface.
 */

export default function VegetarianPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        <CinematicHero
          imageSrc="/products/flatbreads/malabar-garlic.jpg"
          imageAlt="Malabar Paratha vegetarian range"
          variant="page"
          eyebrow="Vegetarian range"
          headline={
            <>
              44 vegetarian SKUs.
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

        {/* Capability band — compact placeholder for Phase 1B */}
        <section className="border-y border-[color:var(--border-subtle)] bg-[color:var(--bg-warm-shadow)] py-12 md:py-16">
          <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-6 px-5 md:grid-cols-4 md:gap-10 md:px-10">
            <CapabilityStat number="18,000" suffix=" MT" label="Veg Capacity" />
            <CapabilityStat number="4" suffix="" label="Categories" />
            <CapabilityStat number="44" suffix=" SKUs" label="Active Range" />
            <CapabilityStat number="100%" suffix="" label="Halal-line ready" />
          </div>
        </section>

        {/* Phase 1B placeholder — will hold 4 × CategorySection components */}
        <section className="border-b border-[color:var(--border-subtle)] bg-[color:var(--bg-deep)] py-24 md:py-32">
          <div className="mx-auto max-w-[1320px] px-5 text-center md:px-10">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold)]">
              Coming next
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.015em] text-[color:var(--text-primary)]">
              Four cinematic category sections,
              <br />
              <em className="italic">arriving in Phase 1B.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[0.94rem] leading-relaxed text-[color:var(--text-secondary)]">
              Flatbreads & Tortillas, Frozen-to-Fry Snacks, Base Gravies & Pastes,
              and Retort Rice will each get their own dedicated banner, product
              gallery, and lifestyle strip.
            </p>
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
