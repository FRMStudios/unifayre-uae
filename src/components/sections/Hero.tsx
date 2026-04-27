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
    transition: { duration: 0.8, ease: EASE },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
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
      className="relative isolate overflow-hidden bg-white text-ink"
    >
      {/* Soft background accents */}
      <div
        aria-hidden
        className="orange-blob pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full opacity-45"
      />
      <div
        aria-hidden
        className="orange-blob pointer-events-none absolute -right-32 -bottom-40 h-[420px] w-[420px] rounded-full opacity-30"
      />

      <div className="relative mx-auto max-w-[1320px] px-5 py-12 md:px-10 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12 lg:gap-16">
          {/* LEFT — text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="w-full"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: EASE },
                },
              }}
              className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[color:var(--line)] bg-white py-1.5 pl-2 pr-4 text-[0.72rem] font-medium text-ink/85 shadow-[0_1px_2px_rgba(15,15,16,0.04)]"
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 animate-soft-pulse rounded-full bg-[color:var(--orange)]" />
              </span>
              Now serving the UAE &amp; Gulf
            </motion.div>

            <h1 className="font-display text-[clamp(1.95rem,4.2vw,3.4rem)] font-extrabold leading-[1.04] tracking-[-0.035em] text-ink text-balance">
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
                hidden: { opacity: 0, y: 10 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: EASE },
                },
              }}
              className="mt-5 max-w-[28rem] text-[0.92rem] leading-relaxed text-ink-soft"
            >
              Over 30 years of precision manufacturing. State-of-the-art
              technology, BRC-certified lines, and a Roti Canai capability
              available only in India.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: EASE },
                },
              }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group btn-orange inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.86rem] font-semibold shadow-[0_12px_28px_-10px_rgba(255,106,44,0.55)]"
              >
                Request Partnership Kit
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-5 py-2.5 text-[0.86rem] font-semibold text-ink transition-all hover:border-ink hover:bg-ink hover:text-white"
              >
                View Range
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — image showcase (square container, no harsh crops) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.95, ease: EASE, delay: 0.2 }}
            className="relative aspect-square w-full overflow-hidden rounded-[28px] bg-[color:var(--orange-soft)] shadow-[0_30px_70px_-30px_rgba(15,15,16,0.22)] md:rounded-[32px]"
          >
            {HERO_SLIDES.map((s, i) => (
              <motion.div
                key={s.img}
                initial={false}
                animate={{ opacity: i === idx ? 1 : 0 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 768px) 95vw, 600px"
                  className="object-cover"
                />
              </motion.div>
            ))}

            {/* Top-left: per-slide category pill */}
            <div className="absolute left-4 top-4 md:left-5 md:top-5">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`cat-${idx}`}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-ink backdrop-blur-md"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--orange)]" />
                  {slide.category}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Slideshow controls — top-right */}
            <div className="absolute right-4 top-4 z-20 flex items-center gap-2 md:right-5 md:top-5">
              <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1.5 backdrop-blur-md">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Show slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === idx
                        ? "w-4 bg-[color:var(--orange)]"
                        : "w-1.5 bg-ink/25 hover:bg-ink/45"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-ink backdrop-blur-md transition-transform hover:scale-105"
              >
                {paused ? (
                  <Play className="h-3.5 w-3.5" strokeWidth={2} />
                ) : (
                  <Pause className="h-3.5 w-3.5" strokeWidth={2} />
                )}
              </button>
            </div>

            {/* Bottom-left: per-slide info card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`card-${idx}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="absolute bottom-4 left-4 right-4 flex items-center gap-4 rounded-2xl bg-white/95 p-3 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(15,15,16,0.3)] md:bottom-5 md:left-5 md:right-auto md:max-w-[300px] md:p-4"
              >
                <div className="min-w-0 flex-1">
                  <div className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[color:var(--orange)]">
                    Now showing
                  </div>
                  <div className="mt-0.5 truncate font-display text-[0.95rem] font-extrabold leading-tight tracking-[-0.02em] text-ink">
                    {slide.title}
                  </div>
                </div>
                <div className="border-l border-[color:var(--line)] pl-3 text-right">
                  <div className="font-display text-[1.05rem] font-extrabold leading-none text-[color:var(--orange)]">
                    {slide.metric}
                  </div>
                  <div className="mt-1 whitespace-nowrap text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                    {slide.metricLabel}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
