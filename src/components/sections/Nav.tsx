"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why Unifayre" },
  { href: "#uae", label: "For UAE" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[color:var(--line)] bg-white/90 backdrop-blur-xl"
          : "border-b border-transparent bg-white/70 backdrop-blur-md"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1320px] items-center justify-between px-5 transition-[height] duration-300 ease-out md:px-10 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link
          href="#top"
          className={`flex origin-left items-center gap-2.5 transition-transform duration-300 ease-out ${
            scrolled ? "scale-90" : "scale-100"
          }`}
        >
          <span className="relative inline-flex h-3 w-3 items-center justify-center rounded-full bg-[color:var(--orange)]">
            <span className="absolute inset-[3px] rounded-full bg-white/70" />
          </span>
          <span className="font-display text-[1.55rem] font-extrabold tracking-[-0.03em] text-ink">
            unifayre
          </span>
          <span className="hidden rounded-full bg-[color:var(--orange-soft)] px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--orange)] sm:inline">
            Foods
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 rounded-full border border-[color:var(--line)] bg-white/70 p-1.5 backdrop-blur md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-[0.85rem] text-ink/70 transition-all hover:bg-[color:var(--bg-muted)] hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={`btn-orange inline-flex items-center gap-2 rounded-full font-medium text-white shadow-[0_6px_18px_-6px_rgba(255,106,44,0.55)] transition-all duration-300 ${
            scrolled ? "px-4 py-2 text-[0.82rem]" : "px-5 py-2.5 text-[0.86rem]"
          }`}
        >
          Partner With Us
        </a>
      </div>
    </header>
  );
}
