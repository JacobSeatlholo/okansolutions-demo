"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { okanServices } from "@/lib/okan-data";

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Three Divisions, One Standard
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Built for every project,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              large or small
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Whether it&apos;s commercial, residential or handyman maintenance needs, you can rely on
            OKANS to deliver quality craftsmanship and superior customer service — every single time.
          </motion.p>
        </div>

        {/* Division cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-7">
          {okanServices.map((service, i) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Image */}
              <div className="relative aspect-[16/11] overflow-hidden">
                { }
                <img
                  src={service.image}
                  alt={`${service.title} — OKAN Solutions`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-okan-navy/85 via-okan-navy/20 to-transparent" />

                {/* Floating badge */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground shadow-md backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Division {i + 1}
                </div>

                {/* Title overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-2xl font-bold text-white drop-shadow">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-white/85">{service.short}</p>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>

                {/* Highlights */}
                <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
                  {service.highlights.slice(0, 6).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs font-medium text-foreground">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#quote"
                  className="group/cta mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-primary/80"
                >
                  Request a Quote
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                </a>
              </div>

              {/* Bottom accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/40 to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
