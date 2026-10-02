"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Star, ShieldCheck } from "lucide-react";
import { okanBusiness, buildWhatsAppUrl } from "@/lib/okan-data";

const SLIDES = [
  {
    image: "/okan/hero-slider-1.jpg",
    eyebrow: "Built on trust. Crafted to last.",
    title: "Construction Experts in the Okanagan",
    subtitle:
      "From custom homes to hi-rise commercial builds — Lake Country's most dependable crews deliver craftsmanship that stands the test of time.",
  },
  {
    image: "/okan/hero-slider-2.jpg",
    eyebrow: "Residential Division",
    title: "Your home, renovated with craftsmanship",
    subtitle:
      "Custom builds, full renovations, decks, kitchens and bathrooms — executed by crews who treat your home as if it were their own.",
  },
  {
    image: "/okan/hero-slider-3.jpg",
    eyebrow: "Commercial Division",
    title: "Keeping local businesses running",
    subtitle:
      "Retail, condos, plazas, community centres — and emergency response when minutes matter. We're the partner local owners count on.",
  },
  {
    image: "/okan/hero-slider-4.jpg",
    eyebrow: "Handyman Division",
    title: "From small fixes to major repairs",
    subtitle:
      "No job too small, no detail overlooked. Efficient, economical, dependable — peace of mind on every visit, big or small.",
  },
  {
    image: "/okan/hero-slider-5.jpg",
    eyebrow: "Licensed · Bonded · Insured",
    title: "One partner. Three divisions. Zero compromise.",
    subtitle:
      "Handyman, residential, and commercial — one accountable team across every project stage, from first consult to final walkthrough.",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((p) => (p + 1) % SLIDES.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6500);
    return () => clearInterval(id);
  }, [next, paused]);

  const whatsappUrl = buildWhatsAppUrl(
    "Hi OKAN Solutions! I'd like to request a free quote for my project.",
  );

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-okan-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="OKAN Solutions project showcase"
    >
      {/* Background slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          { }
          <img
            src={SLIDES[active].image}
            alt={SLIDES[active].title}
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 okan-hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Slide controls */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="group absolute left-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/5 p-3 text-white backdrop-blur-sm transition hover:bg-white/15 md:flex"
      >
        <svg className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="group absolute right-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/5 p-3 text-white backdrop-blur-sm transition hover:bg-white/15 md:flex"
      >
        <svg className="h-5 w-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}: ${slide.title}`}
            aria-current={active === i}
            className="group relative h-1.5 rounded-full transition-all duration-300"
            style={{
              width: active === i ? "44px" : "16px",
              background: active === i ? "var(--primary)" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl pt-28 pb-32 lg:pt-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              {/* Eyebrow */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                  {SLIDES[active].eyebrow}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.05] text-white drop-shadow-2xl sm:text-5xl lg:text-7xl">
                {SLIDES[active].title}
              </h1>

              {/* Subtitle */}
              <p className="mt-6 max-w-2xl text-pretty text-base font-light leading-relaxed text-white/85 sm:text-lg lg:text-xl">
                {SLIDES[active].subtitle}
              </p>

              {/* CTAs */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href="#quote"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-bold text-accent-foreground shadow-xl shadow-accent/30 transition-all hover:scale-[1.02] hover:brightness-95"
                >
                  Get Your Free Quote
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-base font-bold text-white shadow-xl shadow-[#25D366]/30 transition-all hover:scale-[1.02] hover:bg-[#1ebe5d]"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us Now
                </a>
              </div>

              {/* Trust row */}
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-white/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  Licensed · Bonded · Insured
                </div>
                <div className="hidden h-4 w-px bg-white/20 sm:block" />
                <div className="flex items-center gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                  <span className="ml-2">5.0 from real Okanagan clients</span>
                </div>
                <div className="hidden h-4 w-px bg-white/20 sm:block" />
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">{okanBusiness.founded ? new Date().getFullYear() - okanBusiness.founded : 9}+ years</span>
                  serving the Okanagan
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
