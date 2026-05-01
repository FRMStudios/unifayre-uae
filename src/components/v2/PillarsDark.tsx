"use client";

/**
 * PillarsDark — V2 four-pillar block on dark navy.
 * Bento layout: one large flagship tile (Consistency at scale) with embedded
 * stats + factory image backdrop, three smaller tiles for the other pillars.
 */

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clock,
  LayoutGrid,
  FlaskConical,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PillarsDark({ id = "pillars" }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative bg-[color:var(--bg-deep)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 flex flex-col items-start justify-between gap-5 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold)]">
              Why Unifayre
            </span>
            <h2 className="mt-3 max-w-[20ch] font-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-[color:var(--text-primary)]">
              Four{" "}
              <em className="italic text-[color:var(--accent-gold)]">
                non-negotiables.
              </em>
            </h2>
          </div>
          <p className="max-w-[26rem] text-base font-light leading-relaxed text-[color:var(--text-primary)]/85">
            Built for partners who can&rsquo;t afford inconsistency. Built for
            menus that scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2 md:gap-5">
          {/* Tile 1 — flagship (large) with factory bg */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[color:var(--border-subtle)] bg-[color:var(--bg-warm-shadow)] p-7 text-[color:var(--text-primary)] transition-all hover:border-[color:var(--accent-gold)] md:col-span-3 md:row-span-2 md:p-10"
          >
            <Image
              src="/images/veg/plant/plant-hero.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-[color:var(--bg-deep)]/95 via-[color:var(--bg-deep)]/80 to-[color:var(--bg-deep)]/40"
            />
            <div className="relative">
              <span className="inline-flex items-center rounded-full border border-[color:var(--border-gold)] bg-[color:var(--bg-deep)]/60 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[color:var(--accent-gold)] backdrop-blur">
                01 · Flagship
              </span>
              <LayoutGrid
                className="mt-6 h-6 w-6 text-[color:var(--accent-gold)]"
                strokeWidth={1.6}
              />
              <h3 className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight">
                Consistency at scale.
              </h3>
              <p className="mt-3 max-w-[28rem] text-base font-light leading-relaxed text-[color:var(--text-primary)]/85">
                Same spec, every shipment, every store. Across 5,000+ outlets
                served. Repeatable down to the gram.
              </p>
            </div>
            <div className="relative mt-8 grid grid-cols-3 gap-4 border-t border-[color:var(--border-subtle)] pt-6">
              <Stat value="5,000+" label="Stores served" />
              <Stat value="194+" label="Active SKUs" />
              <Stat value="30+" label="Years tuned" />
            </div>
          </motion.div>

          {/* Tile 2 — Reliability */}
          <PillarTile
            icon={Clock}
            number="02"
            title="Reliability you can forecast."
            body="Predictable lead times. On-time shipments. Built for export schedules, cold-chain and dry-freight."
            colSpan="md:col-span-3"
            delay={0.08}
          />

          {/* Tile 3 — Customisation (gold-tinted) */}
          <PillarTile
            icon={FlaskConical}
            number="03"
            title="Customisation, built-in."
            body="Science-backed R&D. Built to your menu, region, and palate."
            colSpan="md:col-span-2"
            delay={0.16}
            tinted
          />

          {/* Tile 4 — Compliance */}
          <PillarTile
            icon={ShieldCheck}
            number="04"
            title="Compliance & safety."
            body="BRC · FSSC 22000 · Halal · FDA."
            colSpan="md:col-span-1"
            delay={0.24}
            arrow
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-display text-[1.3rem] font-light leading-none tracking-tight text-[color:var(--text-primary)]">
        {value}
      </span>
      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--text-secondary)]">
        {label}
      </span>
    </div>
  );
}

type IconType = React.ComponentType<{
  className?: string;
  strokeWidth?: number;
}>;

function PillarTile({
  icon: Icon,
  number,
  title,
  body,
  colSpan,
  delay,
  tinted = false,
  arrow = false,
}: {
  icon: IconType;
  number: string;
  title: string;
  body: string;
  colSpan: string;
  delay: number;
  tinted?: boolean;
  arrow?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[24px] border p-7 transition-all hover:border-[color:var(--accent-gold)] md:p-8 ${colSpan} ${
        tinted
          ? "border-[color:var(--border-gold)] bg-[color:var(--accent-gold)]/8"
          : "border-[color:var(--border-subtle)] bg-[color:var(--bg-warm-shadow)]"
      }`}
    >
      <div className="flex items-start justify-between">
        <Icon
          className="h-6 w-6 text-[color:var(--accent-gold)]"
          strokeWidth={1.6}
        />
        {arrow ? (
          <ArrowUpRight
            className="h-4 w-4 text-[color:var(--text-secondary)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--accent-gold)]"
            strokeWidth={2}
          />
        ) : (
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[color:var(--accent-gold)]">
            {number}
          </span>
        )}
      </div>
      <div className="mt-10">
        {arrow && (
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[color:var(--accent-gold)]">
            {number}
          </span>
        )}
        <h3
          className={`font-display font-light leading-tight tracking-tight text-[color:var(--text-primary)] ${
            arrow
              ? "mt-2 text-[1.15rem]"
              : "text-[1.4rem] md:text-[1.6rem]"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-3 font-light leading-relaxed text-[color:var(--text-primary)]/80 ${
            arrow ? "text-[0.82rem]" : "text-[0.92rem]"
          }`}
        >
          {body}
        </p>
      </div>
    </motion.div>
  );
}
