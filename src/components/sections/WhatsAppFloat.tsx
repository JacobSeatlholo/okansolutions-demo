"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail, X } from "lucide-react";
import { buildWhatsAppUrl, okanBusiness } from "@/lib/okan-data";

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const useWhatsapp = okanBusiness.hasWhatsapp;
  const whatsappUrl = buildWhatsAppUrl(
    "Hi OKAN Solutions! I'd like to request a free quote for my project.",
  );
  const mailtoUrl = `mailto:${okanBusiness.email}?subject=${encodeURIComponent(
    "New quote request from okansolutions.com",
  )}&body=${encodeURIComponent(
    "Hi OKAN Solutions!\n\nI'd like to request a free quote for my project.\n\nName: \nPhone: \nService needed: \nProject details: \n",
  )}`;

  const primaryUrl = useWhatsapp ? whatsappUrl : mailtoUrl;
  const Icon = useWhatsapp ? MessageCircle : Mail;
  const bgColor = useWhatsapp ? "#25D366" : "var(--primary)";
  const hoverColor = useWhatsapp ? "#1ebe5d" : "var(--primary)";
  const label = useWhatsapp ? "Chat with OKANS" : "Email OKANS";
  const cta = useWhatsapp ? "Open WhatsApp" : "Open Email";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6"
        >
          {/* Tooltip / mini CTA */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-xs overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-2xl"
              >
                <button
                  type="button"
                  onClick={() => setExpanded(false)}
                  className="absolute right-2 top-2 rounded-full p-1 text-muted-foreground hover:bg-muted"
                  aria-label="Close"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
                <div className="flex items-center gap-2 pr-5">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full text-white"
                    style={{ background: bgColor }}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{label}</div>
                    <div className="text-xs text-muted-foreground">Reply within 1 business day</div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Tap below to send your project details straight to our team.
                </p>
                <a
                  href={primaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-white transition-colors"
                  style={{ background: bgColor, ["--tw-bg-opacity" as string]: 1 }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = hoverColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = bgColor)}
                >
                  <Icon className="h-4 w-4" />
                  {cta}
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating action button */}
          <motion.button
            type="button"
            onClick={() => setExpanded((p) => !p)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-2xl ring-4 ring-white"
            style={{
              background: bgColor,
              boxShadow: `0 8px 24px -4px ${useWhatsapp ? "rgba(37,211,102,0.5)" : "rgba(48,175,184,0.5)"}`,
            }}
            aria-label={`Open ${useWhatsapp ? "WhatsApp" : "email"} chat`}
          >
            {/* Pulse */}
            <span
              className="absolute inset-0 -z-10 animate-ping rounded-full opacity-30"
              style={{ background: bgColor }}
            />
            {expanded ? <X className="h-6 w-6" /> : <Icon className="h-6 w-6" />}
            {/* Notification dot */}
            {!expanded && (
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-accent-foreground ring-2 ring-white">
                1
              </span>
            )}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
