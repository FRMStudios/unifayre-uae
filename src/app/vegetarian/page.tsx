import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CinematicHero from "@/components/ui/CinematicHero";
import CategorySection from "@/components/ui/CategorySection";
import LifestyleStrip from "@/components/ui/LifestyleStrip";
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

  const totalSkus =
    flatbreads.length + snacks.length + gravies.length + rice.length;

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        {/* Home hero — chef's pass multi-product composition.
            object-center keeps the spread of food intact at all viewports.
            overlayStyle "bottom-left" matches a multi-food / centred shot. */}
        <CinematicHero
          imageSrc="/images/veg/heroes/home-hero.png"
          imageAlt="Vegetarian range — chef's pass with parathas, gravy, rice, and frozen-to-fry snacks"
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
          objectPosition="center"
          overlayStyle="bottom-left"
          refined
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

        {/* Category sections — 4 cinematic blocks with food-on-right composition */}
        <CategorySection
          anchorId="flatbreads"
          number="01"
          title="Flatbreads & Tortillas"
          description="Malabar Paratha, Roti Canai, stuffed parathas and 4-grain tortillas. The flatbread engine for QSR wraps, breakfast platters, curry bases and dessert formats."
          capacity="15,500+ pcs / hr"
          bannerSrc="/images/veg/categories/flatbreads-banner.png"
          bannerAlt="Malabari Paratha layers cinematic banner"
          products={flatbreads}
          imageObjectPosition="right center"
          refined
        />

        <CategorySection
          anchorId="snacks-veg"
          number="02"
          title="Frozen-to-Fry Snacks"
          description="Samosas, kebabs, tikkis, kachoris, bhaji, pakoras and falafel. Frozen at peak so every fry comes out crisp, golden and consistent at scale."
          capacity="1 lakh pcs / day"
          bannerSrc="/images/veg/categories/snacks-banner.png"
          bannerAlt="Falafel mid-fry frozen-to-fry snacks banner"
          products={snacks}
          imageObjectPosition="right center"
          refined
        />

        <CategorySection
          anchorId="gravies"
          number="03"
          title="Base Gravies & Pastes"
          description="Makhani, Manchurian, Thai red and green curry, biryani pastes and base sauces. The backbone of any restaurant menu, ready to plate or build on."
          capacity="1,000 kg / hr"
          bannerSrc="/images/veg/categories/gravies-banner.png"
          bannerAlt="Makhani gravy in copper pot banner"
          products={gravies}
          imageObjectPosition="right center"
          refined
        />

        <CategorySection
          anchorId="rice"
          number="04"
          title="Retort Rice"
          description="Eight aromatic rice varieties from Basmati and Jeera to Saffron and Cilantro Lime. Shelf-stable at ambient temperature, ready in minutes."
          capacity="Ambient shelf stable"
          bannerSrc="/images/veg/categories/rice-banner.png"
          bannerAlt="Biryani in clay handi banner"
          products={rice}
          imageObjectPosition="right center"
          refined
        />

        {/* Lifestyle Strip — five cinematic frames showing where Unifayre lands */}
        <LifestyleStrip
          eyebrow="Where Unifayre lands"
          title={
            <>
              From QSR pass to{" "}
              <em className="italic">five-star buffet line.</em>
            </>
          }
          subline="The same SKU, plated across every Gulf restaurant context."
          frames={[
            {
              src: "/images/veg/lifestyle/qsr-plate.png",
              alt: "QSR menu — vegetarian burger build",
              caption: "QSR Menu",
            },
            {
              src: "/images/veg/lifestyle/cloud-kitchen.png",
              alt: "Cloud kitchen plating",
              caption: "Cloud Kitchen",
            },
            {
              src: "/images/veg/lifestyle/hotel-buffet.png",
              alt: "Hotel buffet spread",
              caption: "Hotel Buffet",
            },
            {
              src: "/images/veg/lifestyle/chef-plating.png",
              alt: "Chef plating mid-action, fine-dining",
              caption: "Fine-Dining Plating",
            },
            {
              src: "/images/veg/lifestyle/sizzle-closeup.png",
              alt: "Sizzle close-up — vegetarian snack on hot iron",
              caption: "Sensory Sizzle",
            },
          ]}
        />

        {/* Plant / Why Unifayre hero — Mohali plant at golden hour.
            Building is right-aligned in the photo, so we use object-right
            and a left sweep gradient to keep headline legibility. */}
        <CinematicHero
          imageSrc="/images/veg/plant/plant-hero.png"
          imageAlt="Unifayre Mohali manufacturing plant at golden hour"
          variant="inner"
          priority={false}
          eyebrow="Why Unifayre"
          headline={
            <>
              Engineered in Mohali.
              <br />
              <em className="italic">Plated across the Gulf.</em>
            </>
          }
          subline="Over 30 years of precision manufacturing. State-of-the-art technology, BRC-certified lines, and an R&D team that builds to your menu."
          primaryCta={{ label: "Tour the plant", href: "/manufacturing" }}
          secondaryCta={{ label: "Why Unifayre", href: "/why-unifayre" }}
          objectPosition="right center"
          overlayStyle="left"
          refined
        />

        {/* Customisation R&D CTA band */}
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
