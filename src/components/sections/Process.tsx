"use client";

import { motion } from "framer-motion";
import { Compass, ClipboardList, Hammer, CheckCircle2 } from "lucide-react";
import { okanProcess } from "@/lib/okan-data";

const ICONS = {
  compass: Compass,
  clipboard: ClipboardList,
  hammer: Hammer,
  "check-circle": CheckCircle2,
} as const;

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 overflow-hidden bg-background py-20 lg:py-28">
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
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            A clear path from{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              first call to handover
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            No surprises, no sales pressure. Just a transparent process that keeps you informed at
            every milestone — from discovery through final walkthrough.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div className="absolute left-1/2 top-8 hidden h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {okanProcess.map((step, i) => {
              const Icon = ICONS[step.icon as keyof typeof ICONS] ?? Compass;
              return (
                <motion.li
                  key={step.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="relative flex flex-col items-start rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                    {/* Step number badge */}
                    <div className="mb-5 flex items-center gap-3">
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" />
                        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-extrabold text-accent-foreground shadow">
                          {step.step}
                        </span>
                      </div>
                      <span className="font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Step {step.step}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        {/* Reassurance row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid gap-3 sm:grid-cols-3"
        >
          {[
            "Free, no-obligation quotes within one business day",
            "Coordination with architects, engineers & city planning",
            "Post-handover follow-up to ensure you're delighted",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-2.5 rounded-xl border border-border bg-muted/40 p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium text-foreground">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
