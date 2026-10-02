"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HardHat, MapPin, Clock, Award, Wrench } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Licensed",
    sub: "& Bonded",
  },
  {
    icon: HardHat,
    title: "Insured",
    sub: "Crews",
  },
  {
    icon: Award,
    title: "9+ Years",
    sub: "Okanagan",
  },
  {
    icon: MapPin,
    title: "7 Cities",
    sub: "Served",
  },
  {
    icon: Clock,
    title: "Same-Week",
    sub: "Quotes",
  },
  {
    icon: Wrench,
    title: "3 Divisions",
    sub: "One Partner",
  },
];

export function TrustBar() {
  return (
    <section
      aria-label="Trust indicators"
      className="relative z-20 -mt-px border-y border-border bg-card"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-y divide-border sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-6">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex items-center justify-center gap-3 px-4 py-6 text-center sm:py-7 lg:flex-col lg:gap-2"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="text-left lg:text-center">
                <div className="text-sm font-bold leading-tight text-foreground sm:text-base">
                  {item.title}
                </div>
                <div className="text-xs text-muted-foreground sm:text-sm">{item.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
