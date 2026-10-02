"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, User, Phone, Mail, FileText, ChevronDown, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import {
  okanBusiness,
  okanQuickQuoteServices,
  buildWhatsAppUrl,
  buildMailtoUrl,
} from "@/lib/okan-data";
import { toast } from "sonner";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const INITIAL: FormState = {
  name: "",
  phone: "",
  email: "",
  service: okanQuickQuoteServices[0],
  message: "",
};

export function QuickQuote() {
  const [form, setForm] = useState<FormState>(INITIAL);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast.error("Please complete name, phone, and project details.");
      return;
    }

    const message = [
      `*New Project Quote Request — OKAN Solutions*`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : null,
      `*Service needed:* ${form.service}`,
      ``,
      `*Project details:*`,
      form.message,
      ``,
      `_Sent from okansolutions.com landing page_`,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = buildWhatsAppUrl(message);
    const mailtoUrl = buildMailtoUrl(
      `New quote request from ${form.name} — ${form.service}`,
      message,
    );

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Fallback / backup — also prepare the mailto link as a toast action
    toast.success("Opening WhatsApp…", {
      description: "If WhatsApp doesn't open, tap here to email us instead.",
      duration: 8000,
      action: {
        label: "Email instead",
        onClick: () => (window.location.href = mailtoUrl),
      },
    });

    setForm(INITIAL);
  };

  const update = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <section
      id="quote"
      className="relative scroll-mt-24 overflow-hidden bg-okan-navy py-20 text-white lg:py-28"
      style={{ ["--okan-navy" as string]: "oklch(0.21 0.022 244)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 okan-section-grid opacity-20" />
      <div
        className="absolute -left-32 top-1/4 h-96 w-96 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.723 0.09 197), transparent 70%)" }}
      />
      <div
        className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.166 70), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:items-center">
          {/* Left: copy + value */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Free Quote · Reply Within 1 Business Day
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl"
            >
              Get your{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                free quote
              </span>{" "}
              — sent straight to WhatsApp
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 text-pretty text-base leading-relaxed text-white/75 sm:text-lg"
            >
              Tell us about your project. We&apos;ll review it and reply on WhatsApp with next steps,
              availability, and a transparent estimate — no sales pressure, no surprise fees.
            </motion.p>

            {/* Trust list */}
            <ul className="mt-8 space-y-3">
              {[
                { icon: Clock, text: "Quotes returned within one business day" },
                { icon: ShieldCheck, text: "Licensed · Bonded · Insured on every project" },
                { icon: CheckCircle2, text: "Free, no-obligation consultation & site walk" },
              ].map(({ icon: Icon, text }) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-3 text-sm font-medium text-white/85"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <Icon className="h-4 w-4" />
                  </div>
                  {text}
                </motion.li>
              ))}
            </ul>

            {/* Direct contact methods */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={buildWhatsAppUrl("Hi OKAN Solutions! I'd like to request a free quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02] hover:bg-[#1ebe5d]"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <a
                href={`mailto:${okanBusiness.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                {okanBusiness.email}
              </a>
            </div>
          </div>

          {/* Right: form card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-70 blur-2xl" />
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white p-6 text-foreground shadow-2xl sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">Quick Quote Form</h3>
                  <p className="text-xs text-muted-foreground">All fields with * are required</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Name */}
                <Field label="Your Name *" htmlFor="q-name" icon={<User className="h-4 w-4" />}>
                  <input
                    id="q-name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="e.g., Jordan Smith"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
                  />
                </Field>

                {/* Phone + Email row */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone *" htmlFor="q-phone" icon={<Phone className="h-4 w-4" />}>
                    <input
                      id="q-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="(250) 555-0123"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
                    />
                  </Field>
                  <Field label="Email" htmlFor="q-email" icon={<Mail className="h-4 w-4" />} optional>
                    <input
                      id="q-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
                    />
                  </Field>
                </div>

                {/* Service dropdown */}
                <Field label="Service Needed *" htmlFor="q-service">
                  <div className="relative">
                    <select
                      id="q-service"
                      required
                      value={form.service}
                      onChange={(e) => update("service", e.target.value)}
                      className="w-full appearance-none bg-transparent text-sm text-foreground focus:outline-none"
                    >
                      {okanQuickQuoteServices.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </Field>

                {/* Message */}
                <Field label="Project Details *" htmlFor="q-message">
                  <textarea
                    id="q-message"
                    required
                    rows={4}
                    placeholder="Tell us about your project — what needs doing, your timeline, and any details you have."
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="w-full resize-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
                  />
                </Field>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all hover:scale-[1.01] hover:bg-[#1ebe5d]"
              >
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                Send via WhatsApp
              </button>

              <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                Your details are only used to contact you about your project.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  icon,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  icon?: React.ReactNode;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground"
      >
        {label}
        {optional && <span className="ml-1 font-normal normal-case text-muted-foreground/70">(optional)</span>}
      </label>
      <div className="flex items-start gap-3 rounded-xl border border-border bg-muted/30 px-3.5 py-3 transition-colors focus-within:border-primary focus-within:bg-muted/60 focus-within:ring-2 focus-within:ring-primary/20">
        {icon && <div className="mt-0.5 text-muted-foreground">{icon}</div>}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
