"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { ShieldCheck, MapPin, Layers, Receipt, Award, HeartHandshake } from "lucide-react";
import { okanStats, okanWhyUs } from "@/lib/okan-data";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const display = useTransform(spring, (latest) => Math.floor(latest));

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return display.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
  }, [display, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative scroll-mt-24 overflow-hidden bg-okan-navy py-20 text-white lg:py-28"
      style={{ ["--okan-navy" as string]: "oklch(0.21 0.022 244)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 okan-section-grid opacity-20" />
      <div className="okan-radial-fade absolute inset-0 opacity-60" />
      <div
        className="absolute -right-32 top-0 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.723 0.09 197), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm"
            >
              <Award className="h-3.5 w-3.5 text-accent" />
              Why Okanagan Trusts OKANS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl"
            >
              Craftsmanship backed by{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                accountability
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-pretty text-base leading-relaxed text-white/75 sm:text-lg"
          >
            When you need Professional, Certified, Dependable, and Customer Satisfaction — OKANS is
            here for your project. We forge relationships through in-depth consultation, transparent
            quotes, and crews whose craftsmanship is always by your side.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {okanStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-6"
            >
              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl font-extrabold leading-none text-white sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <div className="mt-3 text-sm font-semibold text-white sm:text-base">{stat.label}</div>
              <div className="mt-1 text-xs text-white/55">{stat.sub}</div>
              <div className="absolute -bottom-1 -right-1 h-16 w-16 rounded-tl-3xl bg-gradient-to-tl from-primary/20 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Value props */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {okanWhyUs.map((item, i) => {
            const Icon =
              item.icon === "shield"
                ? ShieldCheck
                : item.icon === "map-pin"
                  ? MapPin
                  : item.icon === "layers"
                    ? Layers
                    : item.icon === "receipt"
                      ? Receipt
                      : HeartHandshake;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-white/[0.07]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
