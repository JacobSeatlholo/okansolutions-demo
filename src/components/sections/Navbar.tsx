"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, ChevronRight } from "lucide-react";
import { okanBusiness } from "@/lib/okan-data";
import { buildWhatsAppUrl } from "@/lib/okan-data";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why OKANS", href: "#why-us" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "Contact", href: "#quote" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const whatsappUrl = buildWhatsAppUrl(
    `Hi OKAN Solutions! I'd like to request a free quote for my project.`,
  );

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(49,59,72,0.18)] border-b border-border/60"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 lg:h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3 shrink-0" aria-label="OKAN Solutions home">
            <div className="relative h-9 w-24 lg:h-11 lg:w-32">
              { }
              <img
                src="/okan/logo-white.png"
                alt="OKAN Solutions Inc."
                className={`h-full w-full object-contain transition-all duration-300 ${
                  scrolled ? "" : "drop-shadow-lg"
                }`}
                style={scrolled ? { filter: "brightness(0) saturate(0)" } : undefined}
              />
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
                style={{ color: scrolled ? "var(--foreground)" : "rgba(255,255,255,0.92)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={`tel:${okanBusiness.phoneHref}`}
              className="group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all hover:bg-white/10"
              style={{
                borderColor: scrolled ? "var(--border)" : "rgba(255,255,255,0.3)",
                color: scrolled ? "var(--foreground)" : "#fff",
              }}
              aria-label={`Call OKAN Solutions at ${okanBusiness.phone}`}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{okanBusiness.phone}</span>
              <span className="xl:hidden">Call</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#25D366]/20 transition-all hover:scale-[1.03] hover:bg-[#1ebe5d]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="#quote"
              className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2 text-sm font-bold text-accent-foreground shadow-md shadow-accent/25 transition-all hover:scale-[1.03] hover:brightness-95"
            >
              Get Free Quote
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 lg:hidden"
            style={{ color: scrolled ? "var(--foreground)" : "#fff" }}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-[oklch(0.21_0.022_244)]/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border p-5">
                { }
                <img
                  src="/okan/logo-white.png"
                  alt="OKAN Solutions Inc."
                  className="h-9 w-28 object-contain brightness-0 saturate-0"
                />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md p-2 text-muted-foreground hover:bg-muted"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-col p-4" aria-label="Mobile">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-lg px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {link.label}
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </a>
                ))}
              </nav>

              <div className="space-y-3 border-t border-border p-5">
                <a
                  href={`tel:${okanBusiness.phoneHref}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-semibold"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {okanBusiness.phone}
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
                <a
                  href="#quote"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3.5 text-sm font-bold text-accent-foreground"
                >
                  Get Free Quote
                  <ChevronRight className="h-4 w-4" />
                </a>
                <p className="pt-2 text-center text-xs text-muted-foreground">
                  {okanBusiness.certifications.join(" · ")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
