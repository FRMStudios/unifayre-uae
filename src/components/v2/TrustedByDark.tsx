"use client";

/**
 * TrustedByDark — V2 dark-theme QSR client logos marquee.
 * Two rows running in opposite directions, pause on hover, edge fade masks.
 * Logos are inverted to white via filter so PNGs designed for white bgs
 * render cleanly on the navy backdrop.
 */

import Image from "next/image";
import { motion } from "framer-motion";
import { QSR_LOGOS } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

type Logo = (typeof QSR_LOGOS)[number];

function Row({ logos, reverse = false }: { logos: Logo[]; reverse?: boolean }) {
  const doubled = [...logos, ...logos];
  return (
    <div
      className={`flex w-max items-center gap-12 md:gap-16 ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {doubled.map((logo, i) => (
        <div
          key={`${logo.name}-${i}`}
          className="group relative h-10 w-24 shrink-0 md:h-12 md:w-32"
          title={logo.name}
          aria-hidden={i >= logos.length}
        >
          <Image
            src={logo.src}
            alt={i < logos.length ? logo.name : ""}
            fill
            sizes="(max-width: 768px) 96px, 128px"
            className="object-contain opacity-55 brightness-0 invert transition-all duration-500 group-hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
}

export default function TrustedByDark() {
  const firstRow = QSR_LOGOS;
  const secondRow = [...QSR_LOGOS].reverse();

  return (
    <section className="bg-[color:var(--bg-warm-shadow)] py-16 md:py-20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 flex flex-col items-center gap-2 text-center"
        >
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold)]">
            Trusted by 30+ QSR brands globally
          </span>
          <p className="max-w-xl font-display text-2xl md:text-3xl lg:text-4xl font-light leading-tight tracking-tight text-[color:var(--text-primary)]">
            Chosen for{" "}
            <em className="italic text-[color:var(--accent-gold)]">
              consistency at scale.
            </em>
          </p>
        </motion.div>
      </div>

      <div className="marquee-pause relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[color:var(--bg-warm-shadow)] via-[color:var(--bg-warm-shadow)]/90 to-transparent md:w-48" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[color:var(--bg-warm-shadow)] via-[color:var(--bg-warm-shadow)]/90 to-transparent md:w-48" />

        <div className="flex flex-col gap-10 py-2 md:gap-12">
          <Row logos={firstRow} />
          <Row logos={secondRow} reverse />
        </div>
      </div>
    </section>
  );
}
