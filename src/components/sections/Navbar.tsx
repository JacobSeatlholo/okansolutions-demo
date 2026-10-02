"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, ChevronRight, ArrowRight } from "lucide-react";
import { okanBusiness, buildWhatsAppUrl } from "@/lib/okan-data";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why OKANS", href: "#why-us" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Areas", href: "#service-areas" },
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

  // Show phone CTA only when a real phone number is configured.
  const showPhoneCta = okanBusiness.hasPhone;

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
          {/* Logo — enlarged for premium feel */}
          <a href="#top" className="flex items-center gap-3 shrink-0" aria-label="OKAN Solutions home">
            <span className="sr-only">OKAN Solutions Inc.</span>
            <div className="relative h-11 w-32 lg:h-14 lg:w-40">
              { }
              <img
                src="/okan/logo-white.png"
                alt=""
                aria-hidden="true"
                className={`h-full w-full object-contain transition-all duration-300 ${
                  scrolled ? "" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
                }`}
                style={scrolled ? { filter: "brightness(0) saturate(0)" } : undefined}
              />
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:text-primary"
                style={{ color: scrolled ? "var(--foreground)" : "rgba(255,255,255,0.92)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right-side actions — single primary CTA + optional phone icon */}
          <div className="hidden items-center gap-2 lg:flex">
            {showPhoneCta ? (
              <a
                href={`tel:${okanBusiness.phoneHref}`}
                className="inline-flex items-center justify-center rounded-full p-2.5 transition-colors hover:bg-white/10"
                style={{
                  color: scrolled ? "var(--foreground)" : "#fff",
                  border: `1px solid ${scrolled ? "var(--border)" : "rgba(255,255,255,0.25)"}`,
                }}
                aria-label={`Call OKAN Solutions at ${okanBusiness.phone}`}
                title={okanBusiness.phone}
              >
                <PhoneIcon className="h-4 w-4" />
              </a>
            ) : (
              <a
                href={`mailto:${okanBusiness.email}`}
                className="inline-flex items-center justify-center rounded-full p-2.5 transition-colors hover:bg-white/10"
                style={{
                  color: scrolled ? "var(--foreground)" : "#fff",
                  border: `1px solid ${scrolled ? "var(--border)" : "rgba(255,255,255,0.25)"}`,
                }}
                aria-label={`Email OKAN Solutions at ${okanBusiness.email}`}
                title={okanBusiness.email}
              >
                <Mail className="h-4 w-4" />
              </a>
            )}
            <a
              href="#quote"
              className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-md shadow-accent/25 transition-all hover:scale-[1.03] hover:brightness-95"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
              className="absolute inset-0 bg-[oklch(0.21_0.022_244)]/85 backdrop-blur-sm"
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
                  className="h-10 w-32 object-contain brightness-0 saturate-0"
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
                    className="flex items-center justify-between rounded-lg px-4 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    {link.label}
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </a>
                ))}
              </nav>

              <div className="space-y-3 border-t border-border p-5">
                {showPhoneCta && (
                  <a
                    href={`tel:${okanBusiness.phoneHref}`}
                    className="flex items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-semibold"
                  >
                    <PhoneIcon className="h-4 w-4 text-primary" />
                    {okanBusiness.phone}
                  </a>
                )}
                <a
                  href={`mailto:${okanBusiness.email}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-semibold"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  Email Us
                </a>
                <a
                  href="#quote"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3.5 text-sm font-bold text-accent-foreground"
                >
                  Get Free Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
                <p className="pt-2 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
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

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
