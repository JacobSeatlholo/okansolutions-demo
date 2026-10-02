"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ShieldCheck, Clock, ArrowUpRight, MessageCircle } from "lucide-react";
import { okanBusiness, buildWhatsAppUrl } from "@/lib/okan-data";

const QUICK_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why OKANS", href: "#why-us" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "Get a Quote", href: "#quote" },
];

const DIVISIONS = [
  { label: "Handyman Division", href: "#services" },
  { label: "Residential Division", href: "#services" },
  { label: "Commercial Division", href: "#services" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const whatsappUrl = buildWhatsAppUrl("Hi OKAN Solutions! I'd like to request a free quote.");

  return (
    <footer
      className="relative overflow-hidden bg-okan-navy text-white"
      style={{ ["--okan-navy" as string]: "oklch(0.21 0.022 244)" }}
    >
      {/* Top wave accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-5 border-b border-white/10 py-10 text-center sm:flex-row sm:text-left"
        >
          <div>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Ready to build with OKANS?
            </h3>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              Free quotes, friendly crews, and craftsmanship that lasts — let&apos;s start your project today.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-lg shadow-accent/30 transition-all hover:scale-[1.02] hover:brightness-95"
            >
              Get Free Quote
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all hover:scale-[1.02] hover:bg-[#1ebe5d]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Main footer grid */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-3">
              { }
              <img
                src="/okan/logo-white.png"
                alt="OKAN Solutions Inc."
                className="h-10 w-32 object-contain"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              {okanBusiness.tagline}. {okanBusiness.description}
            </p>

            {/* Certifications */}
            <div className="mt-5 flex flex-wrap gap-2">
              {okanBusiness.certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold text-white/85"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer — quick links">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white/80">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/65 transition-colors hover:text-white"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 text-primary opacity-0 transition-all group-hover:opacity-100" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Divisions */}
          <nav aria-label="Footer — divisions">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white/80">
              Divisions
            </h4>
            <ul className="mt-4 space-y-2.5">
              {DIVISIONS.map((d) => (
                <li key={d.label}>
                  <a
                    href={d.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/65 transition-colors hover:text-white"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 text-primary opacity-0 transition-all group-hover:opacity-100" />
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-2 text-xs text-white/55">
              <Clock className="h-3.5 w-3.5" />
              {okanBusiness.hours}
            </div>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white/80">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="text-white/70">
                  <div className="font-medium text-white">{okanBusiness.name}</div>
                  <div>{okanBusiness.address.street}</div>
                  <div>
                    {okanBusiness.address.city}, {okanBusiness.address.region}{" "}
                    {okanBusiness.address.postalCode}
                  </div>
                </div>
              </li>
              <li>
                <a
                  href={`tel:${okanBusiness.phoneHref}`}
                  className="group flex items-center gap-3 text-white/70 transition-colors hover:text-white"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>{okanBusiness.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${okanBusiness.email}`}
                  className="group flex items-center gap-3 text-white/70 transition-colors hover:text-white"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="break-all">{okanBusiness.email}</span>
                </a>
              </li>
            </ul>

            {/* Service area chip */}
            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-xs font-bold uppercase tracking-wider text-white/55">
                Serving
              </div>
              <div className="mt-1 text-sm font-medium text-white/85">
                {okanBusiness.serviceAreas.join(" · ")}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-center text-xs text-white/55 sm:flex-row sm:text-left">
          <div>
            © {year} {okanBusiness.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            {okanBusiness.certifications.join(" · ")} · Serving the Okanagan since {okanBusiness.founded}
          </div>
        </div>
      </div>
    </footer>
  );
}
