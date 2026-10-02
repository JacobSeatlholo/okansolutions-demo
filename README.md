# OKAN Solutions Inc. — Landing Page (Demo)

A high-converting, premium interactive landing page for **OKAN Solutions Inc.** — Lake Country's trusted construction company serving the Okanagan Valley.

> Demo build for client review. Production deployment: [okansolutions-demo on Vercel](https://vercel.com) (once connected).

---

## ✨ Features

- **Conversion-focused hero** — 5-slide auto-rotating carousel with dual CTAs (Get Quote + WhatsApp)
- **Three division showcase** — Handyman · Residential · Commercial, with real project imagery
- **Animated stats counter** — 9+ years, 3 divisions, 7 cities, 100% satisfaction
- **Filterable projects gallery** — Masonry grid with category filters (All / Residential / Commercial)
- **4-step process timeline** — Discovery → Quote → Execution → Handover
- **Real client testimonials** — 4 verbatim reviews from Sean, Tara, JR Holland, and T. Pitt
- **Service area visualizer** — Map of Okanagan Valley + 7-city grid
- **WhatsApp-powered Quick Quote form** — Submits a pre-filled WhatsApp message with all lead details
- **Floating WhatsApp button** — Sticky CTA with expandable chat bubble
- **Sticky responsive navbar** — Transparent over hero, solid on scroll, mobile drawer
- **SEO + AI-search optimized** — LocalBusiness JSON-LD schema, FAQ schema, OpenGraph, Twitter cards
- **Premium motion design** — Framer Motion animations, hover effects, smooth transitions
- **Mobile-first responsive** — Tested on iPhone 14 viewport + desktop

---

## 🎨 Brand & Design

| Token | Value | Usage |
|-------|-------|-------|
| Primary teal | `#30afb8` (oklch 0.723 0.09 197) | Brand accents, primary CTAs, logo treatment |
| Accent amber | `#f59e0b` (oklch 0.78 0.166 70) | High-conversion CTA color (Get Quote buttons) |
| Navy deep | `#1a2230` (oklch 0.21 0.022 244) | Hero overlay, footer, dark sections |
| Cream off-white | `oklch(0.985 0.005 80)` | Soft section backgrounds |
| Body text | `#313b48` | Headings and body |
| WhatsApp green | `#25D366` | WhatsApp CTAs |

**Typography**: Montserrat (headings + body) + Open Sans (display) via `next/font/google`.

All imagery is sourced from the live okansolutions.com site (logo, hero slider, project gallery, service-area map).

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
bun install

# 2. Run dev server
bun run dev          # → http://localhost:3000

# 3. Lint check
bun run lint

# 4. Production build
bun run build
bun run start
```

---

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript 5 (strict)
- **Styling**: Tailwind CSS 4 with CSS-first theme tokens
- **UI**: shadcn/ui (New York) + Lucide icons
- **Animations**: Framer Motion 12
- **Forms**: React Hook Form + Sonner toasts
- **Fonts**: Montserrat + Open Sans via `next/font/google`

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css         # OKAN brand theme tokens + utilities
│   ├── layout.tsx          # Metadata, fonts, JSON-LD structured data
│   └── page.tsx             # Composes all landing sections
├── components/
│   ├── sections/            # Modular landing-page sections
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── Services.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Projects.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ServiceAreas.tsx
│   │   ├── QuickQuote.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFloat.tsx
│   └── ui/                 # shadcn/ui components
└── lib/
    └── okan-data.ts        # Single source of truth (business info, services, etc.)
public/
└── okan/                   # Real OKAN images (logo, hero, projects, map)
```

---

## ⚠️ Before Launch — Replace Placeholders

The original okansolutions.com does not publish a phone or WhatsApp number. The following values in `src/lib/okan-data.ts` are placeholders and MUST be updated before launch:

```ts
phone: "+1 (250) 000-0000",       // ← replace with real phone
phoneHref: "+12500000000",        // ← replace with real phone (E.164, digits only)
whatsapp: "+12500000000",         // ← replace with real WhatsApp
whatsappNumber: "12500000000",    // ← digits only, international format
```

Once updated, every CTA (call, WhatsApp, Quick Quote form) will route to the correct contact.

---

## 🚢 Deployment

### Option A — Vercel (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) → Import the repo
3. Framework preset: **Next.js** (auto-detected)
4. Click **Deploy** — done in ~60s

### Option B — Manual production build

```bash
bun run build
bun run start
```

---

## 📊 SEO & AI Search Optimization

- **LocalBusiness / GeneralContractor JSON-LD** — full schema with address, areaServed, aggregateRating
- **FAQPage JSON-LD** — 4 Q&A pairs that surface in AI search results
- **OpenGraph + Twitter cards** — proper social sharing preview
- **Optimized meta tags** — title, description, keywords targeting Okanagan construction searches
- **Semantic HTML** — proper heading hierarchy, ARIA labels, alt text on all images
- **Mobile-friendly** — passes Google's mobile-first indexing criteria

---

## 📞 Contact OKAN Solutions

- **Address**: Suite #202 – 1022 James Hockey Pl., Kelowna, BC V1X 7L2
- **Email**: info@okansolutions.com
- **Service areas**: West Kelowna · Peachland · Summerland · Lake Country · Vernon · Coldstream · Armstrong
- **Certifications**: Licensed · Bonded · Insured

---

© OKAN Solutions Inc. — Construction Experts in the Okanagan.
