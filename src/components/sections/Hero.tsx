"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Pause } from "lucide-react";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Slide = {
  img: string;
  tag: string;
  title: string;
  caption: string;
  metric: string;
  metricLabel: string;
  accent: string;
};

const HERO_SLIDES: Slide[] = [
  {
    img: "/products/flatbreads/roti-canai.jpg",
    tag: "Signature · Only in India",
    title: "Roti Canai",
    caption: "Flaky, layered, commercial scale",
    metric: "4,500",
    metricLabel: "pcs / hour",
    accent: "Only in India",
  },
  {
    img: "/products/meat/kebab-tandoori.jpg",
    tag: "Halal · Chef-tuned spice",
    title: "Tandoori Kebab",
    caption: "Smoky, marinated, ready to grill",
    metric: "Halal",
    metricLabel: "Every SKU",
    accent: "Chicken & Meat",
  },
  {
    img: "/products/gravies/makhani.jpg",
    tag: "Base gravy · Ready to cook",
    title: "Makhani Base Gravy",
    caption: "Classic tomato-butter base",
    metric: "1,000",
    metricLabel: "kg / hour",
    accent: "Gravies & Pastes",
  },
  {
    img: "/products/flatbreads/malabar-garlic.jpg",
    tag: "Flatbread · Layered",
    title: "Malabar Paratha · Garlic Coriander",
    caption: "Kerala-style, aromatic, flaky",
    metric: "8,000",
    metricLabel: "pcs / hour",
    accent: "Flatbreads & Tortillas",
  },
  {
    img: "/products/snacks/samosa-punjabi-70g.jpg",
    tag: "Frozen-to-fry · Classic",
    title: "Punjabi Samosa · 70g",
    caption: "Crisp, spiced, crowd favourite",
    metric: "1 lakh",
    metricLabel: "pcs / day",
    accent: "Frozen-to-Fry Snacks",
  },
];

type Floater = {
  img: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: number;
  duration: number;
  delay: number;
  rotateRange: number;
  floatRange: number;
};

/** Positions are relative to the headline wrapper — thumbnails sit in the
 *  left/right gutters around the centered headline text. */
const FLOATERS: Floater[] = [
  {
    img: "/products/flatbreads/roti-canai.jpg",
    top: "2%",
    left: "4%",
    size: 96,
    duration: 8,
    delay: 0,
    rotateRange: 4,
    floatRange: 8,
  },
  {
    img: "/products/meat/kebab-tandoori.jpg",
    top: "48%",
    left: "-1%",
    size: 88,
    duration: 9,
    delay: 1.5,
    rotateRange: 5,
    floatRange: 10,
  },
  {
    img: "/products/snacks/samosa-punjabi-70g.jpg",
    bottom: "12%",
    left: "8%",
    size: 72,
    duration: 7,
    delay: 0.8,
    rotateRange: 6,
    floatRange: 7,
  },
  {
    img: "/products/gravies/makhani.jpg",
    top: "6%",
    right: "5%",
    size: 88,
    duration: 10,
    delay: 0.4,
    rotateRange: 3,
    floatRange: 9,
  },
  {
    img: "/products/snacks/falafel.jpg",
    top: "44%",
    right: "-1%",
    size: 100,
    duration: 8.5,
    delay: 2,
    rotateRange: 4,
    floatRange: 8,
  },
  {
    img: "/products/snacks/bombay-vada.jpg",
    bottom: "14%",
    right: "7%",
    size: 72,
    duration: 7.5,
    delay: 1.2,
    rotateRange: 5,
    floatRange: 7,
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
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
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
      className="relative overflow-hidden bg-[color:var(--bg)] pb-16 pt-14 md:pb-24 md:pt-20"
    >
      <div
        aria-hidden
        className="orange-blob pointer-events-none absolute -right-32 -top-24 h-[520px] w-[520px] rounded-full"
      />
      <div
        aria-hidden
        className="orange-blob pointer-events-none absolute -left-40 top-60 hidden h-[420px] w-[420px] rounded-full opacity-70 md:block"
      />

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-10">
        {/* Headline wrapper — hosts floating product thumbnails in the gutters */}
        <div className="relative">
          {/* Floating product thumbnails orbiting the headline */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
          >
            {FLOATERS.map((f, i) => (
              <motion.div
                key={f.img + i}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [-f.floatRange, f.floatRange, -f.floatRange],
                  rotate: [-f.rotateRange, f.rotateRange, -f.rotateRange],
                }}
                transition={{
                  opacity: { duration: 0.6, ease: EASE, delay: 0.9 + i * 0.12 },
                  scale: { duration: 0.6, ease: EASE, delay: 0.9 + i * 0.12 },
                  y: {
                    duration: f.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: f.delay,
                  },
                  rotate: {
                    duration: f.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: f.delay,
                  },
                }}
                style={{
                  top: f.top,
                  bottom: f.bottom,
                  left: f.left,
                  right: f.right,
                  width: f.size,
                  height: f.size,
                }}
                className="absolute overflow-hidden rounded-full border-[3px] border-white bg-white shadow-[0_18px_36px_-12px_rgba(15,15,16,0.28)]"
              >
                <Image
                  src={f.img}
                  alt=""
                  fill
                  sizes={`${f.size}px`}
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="relative z-10 mx-auto max-w-[980px] text-center"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: EASE },
                },
              }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[color:var(--line)] bg-white py-1.5 pl-2 pr-4 text-[0.76rem] font-medium text-ink/80 shadow-[0_1px_2px_rgba(15,15,16,0.04)]"
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 animate-soft-pulse rounded-full bg-[color:var(--orange)]" />
              </span>
              Now serving the UAE &amp; Gulf
            </motion.div>

            <h1 className="font-display text-[clamp(2.75rem,7.5vw,6rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink text-balance">
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
                            ? "text-[color:var(--orange)]"
                            : "text-[color:var(--ink-muted)]"
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
                hidden: { opacity: 0, y: 14 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: EASE },
                },
              }}
              className="mx-auto mt-7 max-w-[38rem] text-[1.04rem] leading-relaxed text-ink-soft"
            >
              Over 30 years of precision manufacturing. State-of-the-art
              technology, BRC-certified lines, and a Roti Canai capability
              available only in India.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: EASE },
                },
              }}
              className="mt-9 flex flex-wrap items-center justify-center gap-3"
            >
              <a
                href="#contact"
                className="group btn-orange inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.92rem] font-semibold shadow-[0_10px_30px_-10px_rgba(255,106,44,0.6)]"
              >
                Request Partnership Kit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-6 py-3.5 text-[0.92rem] font-semibold text-ink transition-all hover:border-ink hover:bg-ink hover:text-white"
              >
                View Range
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Big rounded hero image with rotating crossfade + per-slide overlays */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.6 }}
          className="relative mt-14 aspect-[16/9] w-full overflow-hidden rounded-[28px] bg-ink md:mt-20 md:aspect-[21/9] md:rounded-[32px]"
        >
          {HERO_SLIDES.map((s, i) => (
            <motion.div
              key={s.img}
              initial={false}
              animate={{ opacity: i === idx ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={s.img}
                alt={s.title}
                fill
                priority={i === 0}
                sizes="(max-width: 1320px) 95vw, 1280px"
                className="object-cover"
              />
            </motion.div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/20" />

          <div className="absolute left-5 top-5 md:left-7 md:top-7">
            <AnimatePresence mode="wait">
              <motion.span
                key={`tag-${idx}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--orange)]" />
                {slide.tag}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-5 right-5 flex items-center gap-3 md:bottom-7 md:right-7">
            <div className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-2 backdrop-blur-md">
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
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink backdrop-blur-md transition-transform hover:scale-105"
            >
              {paused ? (
                <Play className="h-4 w-4" strokeWidth={2} />
              ) : (
                <Pause className="h-4 w-4" strokeWidth={2} />
              )}
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`card-${idx}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="absolute bottom-5 left-5 hidden max-w-[320px] rounded-2xl bg-white p-4 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.45)] md:bottom-7 md:left-7 md:block md:p-5"
            >
              <div className="mb-1 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--orange)]">
                {slide.accent}
              </div>
              <div className="font-display text-[1.05rem] font-extrabold leading-tight tracking-[-0.02em] text-ink">
                {slide.title}
              </div>
              <div className="mt-1 text-[0.82rem] leading-snug text-ink-soft">
                {slide.caption}
              </div>
              <div className="mt-3 flex items-baseline gap-1.5 border-t border-[color:var(--line-soft)] pt-3 text-ink-soft">
                <span className="font-display text-[1.1rem] font-bold text-ink">
                  {slide.metric}
                </span>
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em]">
                  {slide.metricLabel}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
