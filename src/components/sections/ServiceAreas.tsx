"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone } from "lucide-react";
import { okanBusiness } from "@/lib/okan-data";

export function ServiceAreas() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${okanBusiness.address.street}, ${okanBusiness.address.city}, ${okanBusiness.address.region} ${okanBusiness.address.postalCode}`,
  )}`;

  return (
    <section
      id="service-areas"
      className="relative scroll-mt-24 overflow-hidden bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          {/* Left: copy + cities */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary"
            >
              <Navigation className="h-3.5 w-3.5" />
              Local Coverage
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Proudly serving the{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Okanagan Valley
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              From our home base in Lake Country, OKANS provides a wealth of professional construction
              options across the region — for residential, commercial, and handyman needs alike.
            </motion.p>

            {/* Cities grid */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {okanBusiness.serviceAreas.map((city, i) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group flex items-center gap-2 rounded-xl border border-border bg-card p-3 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{city}</span>
                </motion.div>
              ))}
            </div>

            {/* Address + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-col gap-4 rounded-2xl border border-border bg-muted/30 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <div className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Head Office
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground">
                  {okanBusiness.address.street}
                </div>
                <div className="text-sm text-muted-foreground">
                  {okanBusiness.address.city}, {okanBusiness.address.region}{" "}
                  {okanBusiness.address.postalCode}
                </div>
              </div>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-md transition-all hover:scale-[1.02] hover:bg-primary/90"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </motion.div>
          </div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
              { }
              <img
                src="/okan/service-area-map.jpg"
                alt="OKAN Solutions service area map — Okanagan Valley, BC"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-okan-navy/60 via-transparent to-transparent" style={{ ["--okan-navy" as string]: "oklch(0.21 0.022 244)" }} />

              {/* Floating pin label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-foreground">
                    Lake Country, BC — Our Home
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Serving 7+ Okanagan communities
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating phone CTA */}
            <motion.a
              href={`tel:${okanBusiness.phoneHref}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -right-3 -top-3 hidden items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground shadow-lg sm:inline-flex"
            >
              <Phone className="h-4 w-4" />
              Call Today
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
