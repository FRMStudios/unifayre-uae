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
  { plain: "", accent: "partner", accentColor: "orange" as const },
  { plain: "for the", accent: "Gulf's", accentColor: "orange-bright" as const },
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
      className="relative isolate overflow-hidden bg-[#16110D] text-white"
    >
      {/* Background image stack — full bleed on mobile, right-half on desktop */}
      <div className="pointer-events-none absolute inset-0 md:inset-y-0 md:left-auto md:right-0 md:w-[58%] lg:w-[55%]">
        {HERO_SLIDES.map((s, i) => (
          <motion.div
            key={s.img}
            initial={false}
            animate={{
              opacity: i === idx ? 1 : 0,
              scale: i === idx ? 1 : 1.04,
            }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 6, ease: "easeOut" },
            }}
            className="absolute inset-0"
          >
            <Image
              src={s.img}
              alt={s.title}
              fill
              priority={i === 0}
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          </motion.div>
        ))}

        {/* Gradient: heavy on mobile (full overlay), soft on desktop (left edge fade only) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#16110D] via-[#16110D]/82 to-[#16110D]/55 md:via-[#16110D]/35 md:to-transparent" />
        {/* Bottom darken */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#16110D]/85 to-transparent" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,transparent_30%,rgba(22,17,13,0.5)_85%)]" />
      </div>

      {/* Soft orange accent glow */}
      <div
        aria-hidden
        className="orange-blob pointer-events-none absolute -bottom-32 left-10 h-[420px] w-[420px] rounded-full opacity-50"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-[1320px] items-center px-5 py-24 md:px-10 md:py-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-[600px]"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
            }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] py-1.5 pl-2 pr-4 text-[0.74rem] font-medium text-white/90 backdrop-blur"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 animate-soft-pulse rounded-full bg-[color:var(--orange)]" />
            </span>
            Now serving the UAE &amp; Gulf
          </motion.div>

          <h1 className="font-display text-[clamp(2.6rem,6vw,5.2rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-white text-balance">
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
                        line.accentColor === "orange-bright"
                          ? "text-[color:var(--orange-bright)] italic"
                          : "text-[color:var(--orange)] italic"
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
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
            className="mt-7 max-w-[28rem] text-[1rem] leading-relaxed text-white/72"
          >
            Over 30 years of precision manufacturing. State-of-the-art
            technology, BRC-certified lines, and a Roti Canai capability
            available only in India.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group btn-orange inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.92rem] font-semibold shadow-[0_14px_36px_-12px_rgba(255,106,44,0.6)]"
            >
              Request Partnership Kit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-6 py-3.5 text-[0.92rem] font-semibold text-white backdrop-blur transition-all hover:border-white hover:bg-white hover:text-[color:var(--ink)]"
            >
              View Range
            </a>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { duration: 0.7, ease: EASE, delay: 0.2 } },
            }}
            className="mt-10 flex flex-wrap items-center gap-5 text-[0.7rem] uppercase tracking-[0.16em] text-white/55"
          >
            <span>BRC</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>FSSC 22000</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Halal</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>US FDA</span>
          </motion.div>

          {/* Per-slide info card (animates as slide changes) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.4 } },
            }}
            className="mt-10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`slide-card-${idx}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md md:max-w-[440px] md:p-5"
              >
                <div className="flex-1 min-w-0">
                  <div className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[color:var(--orange-bright)]">
                    Now showing
                  </div>
                  <div className="mt-1 truncate font-display text-[1.05rem] font-extrabold tracking-[-0.02em] text-white md:text-[1.1rem]">
                    {slide.title}
                  </div>
                  <div className="mt-1 text-[0.78rem] text-white/65">
                    {slide.category}
                  </div>
                </div>
                <div className="border-l border-white/10 pl-5 text-right">
                  <div className="font-display text-[1.2rem] font-extrabold leading-none text-[color:var(--orange-bright)] md:text-[1.35rem]">
                    {slide.metric}
                  </div>
                  <div className="mt-1.5 whitespace-nowrap text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-white/55">
                    {slide.metricLabel}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Slideshow controls */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 md:bottom-8 md:right-10">
        <div className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-2 backdrop-blur-md">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === idx
                  ? "w-5 bg-[color:var(--orange)]"
                  : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-transform hover:scale-105"
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
