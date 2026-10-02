"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { okanTestimonials } from "@/lib/okan-data";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 overflow-hidden bg-okan-cream py-20 lg:py-28"
      style={{ ["--okan-cream" as string]: "oklch(0.985 0.005 80)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Client Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Real words from{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Okanagan clients
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            The best measure of our work is the experience of those we&apos;ve helped — from small
            home projects to large-scale commercial improvements.
          </motion.p>
        </div>

        {/* Testimonial cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-7">
          {okanTestimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 sm:p-8"
            >
              {/* Decorative quote icon */}
              <div className="absolute right-6 top-6 text-primary/10 transition-colors group-hover:text-primary/20">
                <Quote className="h-12 w-12" />
              </div>

              {/* Stars */}
              <div className="relative z-10 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="relative z-10 mt-4 flex-1 text-pretty text-base leading-relaxed text-foreground sm:text-lg">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <figcaption className="relative z-10 mt-6 flex items-center gap-4 border-t border-border pt-5">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-primary-foreground shadow"
                  style={{
                    background:
                      i % 2 === 0
                        ? "linear-gradient(135deg, oklch(0.723 0.09 197), oklch(0.65 0.09 200))"
                        : "linear-gradient(135deg, oklch(0.78 0.166 70), oklch(0.7 0.16 75))",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-display text-base font-bold text-foreground">{t.name}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Reassurance banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex flex-col items-center justify-center gap-4 rounded-3xl bg-gradient-to-br from-primary to-primary/80 px-6 py-10 text-center shadow-xl shadow-primary/20 sm:px-12"
        >
          <div className="flex items-center gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-6 w-6 fill-white text-white" />
            ))}
          </div>
          <p className="max-w-2xl text-pretty font-display text-xl font-bold text-white sm:text-2xl">
            5.0 rating from real Okanagan clients — your project is in dependable hands.
          </p>
          <a
            href="#quote"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary shadow-md transition-all hover:scale-[1.02] hover:bg-white/90"
          >
            Become our next happy client
          </a>
        </motion.div>
      </div>
    </section>
  );
}
