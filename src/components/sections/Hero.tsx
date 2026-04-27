"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Pause } from "lucide-react";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Slide = {
  img: string;
  title: string;
  category: string;
  metric: string;
  metricLabel: string;
};

const HERO_SLIDES: Slide[] = [
  {
    img: "/products/flatbreads/roti-canai.jpg",
    title: "Roti Canai",
    category: "Signature · Only in India",
    metric: "4,500",
    metricLabel: "pcs / hour",
  },
  {
    img: "/products/meat/kebab-tandoori.jpg",
    title: "Tandoori Kebab",
    category: "Halal · Chicken",
    metric: "Halal",
    metricLabel: "Every SKU",
  },
  {
    img: "/products/gravies/makhani.jpg",
    title: "Makhani Base Gravy",
    category: "Ready-to-cook · Gravy",
    metric: "1,000",
    metricLabel: "kg / hour",
  },
  {
    img: "/products/flatbreads/malabar-garlic.jpg",
    title: "Malabar Paratha · Garlic Coriander",
    category: "Layered · Flatbread",
    metric: "8,000",
    metricLabel: "pcs / hour",
  },
  {
    img: "/products/snacks/samosa-punjabi-70g.jpg",
    title: "Punjabi Samosa · 70g",
    category: "Frozen-to-fry · Snack",
    metric: "1 lakh",
    metricLabel: "pcs / day",
  },
];

const HEADLINE_LINES = [
  { plain: "The frozen food", accent: null, accentColor: null as string | null },
  { plain: "", accent: "partner", accentColor: "muted" as const },
  { plain: "for the", accent: "Gulf's", accentColor: "orange" as const },
  { plain: "best kitchens.", accent: null, accentColor: null },
];

const lineVariants = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.85, ease: EASE },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.15 },
  },
};

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(t);
  }, [paused]);

  const slide = HERO_SLIDES[idx];

  return (
    <section
      id="top"
      className="relative isolate min-h-[80svh] overflow-hidden bg-white text-ink md:h-[78svh] md:min-h-0"
    >
      {/* Full-bleed rotating images (no scale animation — pure crossfade) */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((s, i) => (
          <motion.div
            key={s.img}
            initial={false}
            animate={{ opacity: i === idx ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={s.img}
              alt={s.title}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        ))}

        {/* Continuous white-to-transparent gradient — no seam, no patch */}
        <div className="absolute inset-0 bg-gradient-to-r from-white from-50% via-white/65 to-white/15 md:from-42% md:via-white/30 md:to-transparent" />
        {/* Subtle bottom soft fade */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/55 to-transparent" />
      </div>

      {/* Soft orange accent glow behind text */}
      <div
        aria-hidden
        className="orange-blob pointer-events-none absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full opacity-50"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full min-h-[80svh] max-w-[1320px] items-center px-5 py-16 md:min-h-0 md:px-10 md:py-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="w-full max-w-[600px]"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
            }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[color:var(--line)] bg-white py-1.5 pl-2 pr-4 text-[0.74rem] font-medium text-ink/85 shadow-[0_1px_2px_rgba(15,15,16,0.04)]"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 animate-soft-pulse rounded-full bg-[color:var(--orange)]" />
            </span>
            Now serving the UAE &amp; Gulf
          </motion.div>

          <h1 className="font-display text-[clamp(2.3rem,5.2vw,4.4rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-ink text-balance">
            {HEADLINE_LINES.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-[0.06em]">
                <motion.span variants={lineVariants} className="block">
                  {line.plain && (
                    <span>
                      {line.plain}
                      {line.accent ? " " : ""}
                    </span>
                  )}
                  {line.accent && (
                    <span
                      className={
                        line.accentColor === "orange"
                          ? "text-[color:var(--orange)] italic"
                          : "text-[color:var(--ink-muted)] italic"
                      }
                    >
                      {line.accent}
                    </span>
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
            className="mt-5 max-w-[28rem] text-[0.96rem] leading-relaxed text-ink-soft"
          >
            Over 30 years of precision manufacturing. State-of-the-art
            technology, BRC-certified lines, and a Roti Canai capability
            available only in India.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group btn-orange inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.9rem] font-semibold shadow-[0_12px_30px_-10px_rgba(255,106,44,0.55)]"
            >
              Request Partnership Kit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-6 py-3 text-[0.9rem] font-semibold text-ink transition-all hover:border-ink hover:bg-ink hover:text-white"
            >
              View Range
            </a>
          </motion.div>

          {/* Per-slide info card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.3 } },
            }}
            className="mt-7"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`slide-card-${idx}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="flex items-center gap-5 rounded-2xl border border-[color:var(--line)] bg-white p-3.5 shadow-[0_8px_22px_-12px_rgba(15,15,16,0.18)] md:max-w-[440px] md:p-4"
              >
                <div className="min-w-0 flex-1">
                  <div className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[color:var(--orange)]">
                    Now showing
                  </div>
                  <div className="mt-0.5 truncate font-display text-[1rem] font-extrabold tracking-[-0.02em] text-ink md:text-[1.05rem]">
                    {slide.title}
                  </div>
                  <div className="mt-0.5 text-[0.74rem] text-ink-soft">
                    {slide.category}
                  </div>
                </div>
                <div className="border-l border-[color:var(--line)] pl-5 text-right">
                  <div className="font-display text-[1.15rem] font-extrabold leading-none text-[color:var(--orange)] md:text-[1.25rem]">
                    {slide.metric}
                  </div>
                  <div className="mt-1 whitespace-nowrap text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                    {slide.metricLabel}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Slideshow controls (white glass, ink dots) */}
      <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2 md:bottom-7 md:right-10">
        <div className="flex items-center gap-1.5 rounded-full border border-[color:var(--line)] bg-white/95 px-3 py-2 backdrop-blur-md shadow-[0_4px_12px_-4px_rgba(15,15,16,0.1)]">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === idx
                  ? "w-5 bg-[color:var(--orange)]"
                  : "w-1.5 bg-ink/25 hover:bg-ink/45"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-white/95 text-ink backdrop-blur-md shadow-[0_4px_12px_-4px_rgba(15,15,16,0.1)] transition-transform hover:scale-105"
        >
          {paused ? (
            <Play className="h-4 w-4" strokeWidth={2} />
          ) : (
            <Pause className="h-4 w-4" strokeWidth={2} />
          )}
        </button>
      </div>
    </section>
  );
}
