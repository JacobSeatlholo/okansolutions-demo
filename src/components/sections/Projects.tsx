"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { okanProjects } from "@/lib/okan-data";

const CATEGORIES = ["All", "Residential", "Commercial"] as const;
type Category = (typeof CATEGORIES)[number];

export function Projects() {
  const [filter, setFilter] = useState<Category>("All");

  const filtered = useMemo(
    () => (filter === "All" ? okanProjects : okanProjects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="relative scroll-mt-24 bg-okan-cream py-20 lg:py-28" style={{ ["--okan-cream" as string]: "oklch(0.985 0.005 80)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Selected Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Projects crafted across the Okanagan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              From boutique custom homes to commercial fit-outs and outdoor living — every OKANS
              project is delivered with the same attention to detail and craftsmanship.
            </motion.p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap items-center gap-1 rounded-full border border-border bg-card p-1 shadow-sm">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  filter === cat ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter === cat && (
                  <motion.span
                    layoutId="active-filter"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", damping: 30, stiffness: 350 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Masonry grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const spanClass =
                project.span === "tall"
                  ? "sm:row-span-2"
                  : project.span === "wide"
                    ? "sm:col-span-2"
                    : "";
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10 ${spanClass}`}
                >
                  <div className={`relative ${project.span === "tall" ? "aspect-[3/4] sm:h-full" : project.span === "wide" ? "aspect-[16/9] sm:aspect-[2/1]" : "aspect-[4/3]"}`}>
                    { }
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.location}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-okan-navy/95 via-okan-navy/30 to-transparent opacity-90" style={{ ["--okan-navy" as string]: "oklch(0.21 0.022 244)" }} />

                    {/* Category badge */}
                    <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground shadow-md">
                      {project.category}
                    </div>

                    {/* Content overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-white/75">
                        <MapPin className="h-3.5 w-3.5" />
                        {project.location}
                      </div>
                      <h3 className="mt-1.5 font-display text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <a
                        href="#quote"
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      >
                        Start a similar project
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* CTA below */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex flex-col items-center justify-between gap-5 rounded-3xl border border-border bg-card p-6 text-center shadow-sm sm:flex-row sm:p-8 sm:text-left"
        >
          <div>
            <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              Want to see your project here next?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              Book a free consultation — we&apos;ll walk your site and deliver an itemized quote within one business day.
            </p>
          </div>
          <a
            href="#quote"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-md shadow-accent/25 transition-all hover:scale-[1.02] hover:brightness-95"
          >
            Book Free Consultation
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
