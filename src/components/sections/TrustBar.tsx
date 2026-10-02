"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HardHat, Award, MapPin, Clock, Wrench } from "lucide-react";

const TRUST_ITEMS = [
  { icon: ShieldCheck, title: "Licensed", sub: "& Bonded" },
  { icon: HardHat, title: "Insured", sub: "Crews" },
  { icon: Award, title: "9+ Years", sub: "in Okanagan" },
  { icon: MapPin, title: "7 Cities", sub: "Served" },
  { icon: Clock, title: "Same-Week", sub: "Quotes" },
  { icon: Wrench, title: "3 Divisions", sub: "One Partner" },
];

export function TrustBar() {
  return (
    <section
      aria-label="Trust indicators"
      className="relative z-20 -mt-12 bg-transparent"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-card/95 shadow-[0_8px_32px_-12px_rgba(49,59,72,0.25)] backdrop-blur-md">
          <div className="grid grid-cols-2 divide-x divide-y divide-border sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-6">
            {TRUST_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex items-center justify-center gap-3 px-4 py-5 text-center sm:py-6 lg:flex-col lg:gap-2"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="text-left lg:text-center">
                  <div className="font-display text-sm font-bold leading-tight text-foreground sm:text-base">
                    {item.title}
                  </div>
                  <div className="mt-0.5 text-xs font-medium text-muted-foreground sm:text-sm">
                    {item.sub}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
