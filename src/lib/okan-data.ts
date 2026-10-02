/**
 * OKAN Solutions Inc. — Single source of truth for landing-page content.
 * Sourced from okansolutions.com (scraped on 2026-10-02).
 * Replace WhatsApp number + phone with the client's real numbers before launch.
 */

export const okanBusiness = {
  name: "OKAN Solutions Inc.",
  legalName: "OKAN Solutions Inc.",
  tagline: "Construction Experts in the Okanagan",
  slogan:
    "When you need Professional, Certified, Dependable, Customer Satisfaction — OKANS is here for your project.",
  description:
    "Based in Lake Country, BC, OKAN Solutions delivers expert construction services across the Okanagan Valley — from custom homes and full renovations to hi-rise commercial builds and responsive handyman work.",
  url: "https://okansolutions.com",
  email: "info@okansolutions.com",
  // ⚠️ Phone + WhatsApp are placeholders until client provides real numbers.
  // When `hasPhone` is false, the phone CTA is hidden and replaced with a Mailto CTA.
  hasPhone: false,
  phone: "+1 (250) 555-0142", // visible only if hasPhone = true
  phoneHref: "+12505550142",
  hasWhatsapp: false,
  whatsapp: "+1 (250) 555-0142",
  whatsappNumber: "12505550142", // digits only, international format
  address: {
    street: "Suite #202 – 1022 James Hockey Pl.",
    city: "Kelowna",
    region: "BC",
    postalCode: "V1X 7L2",
    country: "CA",
  },
  founded: 2016, // schema datePublished: 2016-09-30
  certifications: ["Licensed", "Bonded", "Insured"],
  serviceAreas: [
    "West Kelowna",
    "Peachland",
    "Summerland",
    "Lake Country",
    "Vernon",
    "Coldstream",
    "Armstrong",
  ],
  hours: "Mon–Fri 7:00 AM – 6:00 PM · Sat 8:00 AM – 2:00 PM",
  brandColors: {
    primary: "#30afb8",
    primaryDark: "#2299a1",
    navy: "#1a2230",
    amber: "#f59e0b",
    cream: "#fcfaf3",
  },
  social: {
    // No social accounts published on source site; empty by default
  },
} as const;

export const okanServices = [
  {
    id: "handyman",
    title: "Handyman Division",
    short: "From small fixes to major repairs — done right the first time.",
    description:
      "Peace of mind, from the smallest to the largest tasks, fulfilled efficiently and economically. Our handyman crews arrive on time, communicate clearly, and treat every home as if it were their own — no job too small, no detail overlooked.",
    image: "/okan/service-handyman.png",
    bottomImage: "/okan/bottom-handyman.png",
    accent: "teal",
    highlights: [
      "Framing & finishing",
      "Fencing & gates",
      "Decks, stairs & handrails",
      "Sheds, studios & garden rooms",
      "Pergolas & sun terraces",
      "Hot-tub install / removal",
      "Power washing",
      "Soffit & fascia",
    ],
    href: "#services",
  },
  {
    id: "residential",
    title: "Residential Division",
    short: "Custom homes, renovations, and outdoor living — crafted to last.",
    description:
      "Confidence in every project, professionally executed with knowledgeable expertise by crews whose craftsmanship is always by your side. We hold each client's design wishes to the highest standard — forging relationships through in-depth consultation, listening to your brief, and working alongside homeowners, suppliers, architects, engineers and city planning authorities to deliver on every promise.",
    image: "/okan/service-residential.jpg",
    bottomImage: "/okan/bottom-residential.png",
    accent: "amber",
    highlights: [
      "Custom home builds",
      "Full home renovations",
      "Kitchens & bathrooms",
      "Decks, terraces & balconies",
      "Concrete & walkways",
      "All flooring applications",
      "Windows & doors",
      "Interior / exterior painting",
    ],
    href: "#services",
  },
  {
    id: "commercial",
    title: "Commercial Division",
    short: "Supporting local businesses with dependable build & maintenance.",
    description:
      "Supporting local businesses — the beating pulse of our community. From Main Street retail and multi-storey condos to plazas, community centres, worship spaces and franchises, we deliver the same reliable character. Working alongside shareholders, building management, tenants, architects and city planning authorities, OKANS helps unlock untapped potential in every commercial space.",
    image: "/okan/service-commercial.png",
    bottomImage: "/okan/bottom-commercial.png",
    accent: "teal",
    highlights: [
      "Property shell maintenance",
      "Interior retrofits",
      "Signage installation",
      "Flooring & roofing",
      "Windows & doors",
      "Eavestrough maintenance",
      "Janitorial & post-construction",
      "Emergency response",
    ],
    href: "#services",
  },
] as const;

export const okanStats = [
  { value: 9, suffix: "+", label: "Years serving the Okanagan", sub: "Trusted since 2016" },
  { value: 3, suffix: "", label: "Specialized divisions", sub: "Handyman · Residential · Commercial" },
  { value: 7, suffix: "", label: "Cities served locally", sub: "Lake Country to Armstrong" },
  { value: 100, suffix: "%", label: "Satisfaction guarantee", sub: "Licensed · Bonded · Insured" },
] as const;

export const okanProjects = [
  {
    id: "p1",
    title: "Modern Custom Residence",
    category: "Residential",
    image: "/okan/project-gallery-01.jpg",
    location: "Lake Country, BC",
    span: "tall",
  },
  {
    id: "p2",
    title: "Retail Plaza Renovation",
    category: "Commercial",
    image: "/okan/project-gallery-02.jpg",
    location: "West Kelowna, BC",
    span: "normal",
  },
  {
    id: "p3",
    title: "Premium Deck & Outdoor Living",
    category: "Residential",
    image: "/okan/project-gallery-03.jpg",
    location: "Peachland, BC",
    span: "normal",
  },
  {
    id: "p4",
    title: "Boutique Commercial Fit-Out",
    category: "Commercial",
    image: "/okan/project-gallery-04.jpg",
    location: "Kelowna, BC",
    span: "wide",
  },
  {
    id: "p5",
    title: "Architectural Renovation",
    category: "Residential",
    image: "/okan/project-gallery-05.jpg",
    location: "Vernon, BC",
    span: "normal",
  },
  {
    id: "p6",
    title: "Condo Complex Upgrade",
    category: "Commercial",
    image: "/okan/project-gallery-06.jpg",
    location: "Summerland, BC",
    span: "tall",
  },
  {
    id: "p7",
    title: "Custom Home Build",
    category: "Residential",
    image: "/okan/project-gallery-07.jpg",
    location: "Coldstream, BC",
    span: "normal",
  },
  {
    id: "p8",
    title: "Commercial Interior Retrofit",
    category: "Commercial",
    image: "/okan/project-gallery-08.jpg",
    location: "Kelowna, BC",
    span: "normal",
  },
] as const;

export const okanProcess = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description:
      "We listen first. An in-depth conversation uncovers your goals, timeline and budget — then walk the site together so we can see what you see.",
    icon: "compass",
  },
  {
    step: "02",
    title: "Plan & Transparent Quote",
    description:
      "You receive a clear, itemized quote — no sales talk, no surprise fees. We coordinate with architects, engineers and city planning so you don't have to.",
    icon: "clipboard",
  },
  {
    step: "03",
    title: "Crafted Execution",
    description:
      "Our certified crews execute with craftsmanship on every detail. You get progress updates, scheduled milestones, and a site kept clean and safe throughout.",
    icon: "hammer",
  },
  {
    step: "04",
    title: "Walkthrough & Handover",
    description:
      "We walk every inch together. Anything that doesn't meet our standard gets fixed before handover — and we follow up after to make sure you're delighted.",
    icon: "check-circle",
  },
] as const;

export const okanTestimonials = [
  {
    name: "Sean O'Brien",
    role: "Product selection · Mr. Thomas Mc Kenna & OKANS staff",
    rating: 5,
    quote:
      "Thank you to Mr. Thomas Mc Kenna and the staff at OKANS for their patience and help in choosing the right products for my business. They made my decision easy — no fancy sales talk, no pushing me into something I didn't need. Just plain and simple down-to-earth help and cooperation.",
    initials: "SO",
  },
  {
    name: "Tara B.",
    role: "Custom deck build · Lake Country",
    rating: 5,
    quote:
      "We would like to thank the team at OKANS for our wonderful new deck. They went above and beyond from the get-go, ensuring no delays despite holdups. Truly can't speak highly enough of OKANS and their team.",
    initials: "TB",
  },
  {
    name: "JR Holland",
    role: "Full bathroom renovation · Kelowna",
    rating: 5,
    quote:
      "The OKAN Solutions crew arrived on site to complete our full bathroom renovation friendly, upbeat, and professional. We are absolutely thrilled and will for sure be hiring them again.",
    initials: "JH",
  },
  {
    name: "T. Pitt",
    role: "Commercial · multi-store convenience chain",
    rating: 5,
    quote:
      "As a local owner of multiple convenience stores in the Okanagan, I called several outfits about items needing ASAP attention. OKANS showed up after 11 PM and worked until 2 AM getting premises reopened for the following morning. Truly dependable — their crew wouldn't even accept a coffee.",
    initials: "TP",
  },
] as const;

export const okanWhyUs = [
  {
    title: "Insured, Bonded & Licensed",
    description:
      "Every OKANS project is backed by full insurance, bonding, and licensing — your property and investment are protected at every stage.",
    icon: "shield",
  },
  {
    title: "Local, Trusted Crews",
    description:
      "We live and work in the Okanagan. Our reputation in Lake Country, Kelowna, Vernon and beyond is built on referrals and repeat clients.",
    icon: "map-pin",
  },
  {
    title: "Cross-Discipline Expertise",
    description:
      "From hi-rise commercial to custom homes and handyman fixes — one accountable partner across residential, commercial, and maintenance work.",
    icon: "layers",
  },
  {
    title: "Transparent Pricing",
    description:
      "Itemized quotes, no hidden fees, no sales pressure. You see every line item before work begins, and we honor the number we quote.",
    icon: "receipt",
  },
] as const;

export const okanQuickQuoteServices = [
  "Handyman & Repairs",
  "Residential Renovation",
  "Custom Home Build",
  "Commercial Build / Fit-out",
  "Deck / Outdoor Living",
  "Kitchen / Bathroom",
  "Concrete / Driveway",
  "Painting (Interior / Exterior)",
  "Power Washing",
  "FireSmart Prevention",
  "Emergency Response",
  "Other — please describe",
] as const;

/** Build a pre-filled WhatsApp URL for the OKAN business account. */
export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${okanBusiness.whatsappNumber}?text=${encoded}`;
}

/** Build a pre-filled mailto URL for fallback lead generation. */
export function buildMailtoUrl(subject: string, body: string): string {
  return `mailto:${okanBusiness.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
