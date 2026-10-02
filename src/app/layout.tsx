import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { okanBusiness } from "@/lib/okan-data";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://okansolutions.com"),
  title: {
    default: "OKAN Solutions Inc. — Construction Experts in the Okanagan",
    template: "%s | OKAN Solutions Inc.",
  },
  description:
    "Lake Country's trusted construction company. Licensed, bonded & insured crews for custom homes, residential renovations, commercial builds and responsive handyman work across the Okanagan Valley. Get your free quote today.",
  keywords: [
    "Okanagan construction company",
    "Lake Country contractor",
    "Kelowna home builders",
    "Okanagan residential construction",
    "commercial construction Kelowna",
    "handyman Lake Country",
    "home renovation Okanagan",
    "custom home builders BC",
    "OKAN Solutions",
    "deck builder Kelowna",
    "bathroom renovation Okanagan",
  ],
  authors: [{ name: "OKAN Solutions Inc.", url: "https://okansolutions.com" }],
  creator: "OKAN Solutions Inc.",
  publisher: "OKAN Solutions Inc.",
  category: "Construction & Renovation",
  alternates: { canonical: "https://okansolutions.com" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://okansolutions.com",
    siteName: "OKAN Solutions Inc.",
    title: "OKAN Solutions Inc. — Construction Experts in the Okanagan",
    description:
      "Lake Country's trusted construction company. Licensed, bonded & insured crews for custom homes, residential renovations, commercial builds and responsive handyman work across the Okanagan Valley.",
    images: [{ url: "/okan/hero-slider-1.jpg", width: 1512, height: 374, alt: "OKAN Solutions construction project" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OKAN Solutions Inc. — Construction Experts in the Okanagan",
    description:
      "Lake Country's trusted construction company. Licensed, bonded & insured crews for custom homes, residential renovations, commercial builds and responsive handyman work across the Okanagan Valley.",
    images: ["/okan/hero-slider-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: { icon: "/okan/favicon.png", apple: "/okan/favicon.png" },
};

export const viewport: Viewport = {
  themeColor: "#30afb8",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GeneralContractor",
      "@id": "https://okansolutions.com/#business",
      name: okanBusiness.name,
      legalName: okanBusiness.legalName,
      description: okanBusiness.description,
      url: "https://okansolutions.com",
      logo: "https://okansolutions.com/wp-content/uploads/2024/07/cropped-logo-white2.png",
      image: "https://okansolutions.com/wp-content/uploads/2024/07/cropped-logo-white2.png",
      email: okanBusiness.email,
      telephone: okanBusiness.phone,
      foundingDate: `${okanBusiness.founded}-09-30`,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: okanBusiness.address.street,
        addressLocality: okanBusiness.address.city,
        addressRegion: okanBusiness.address.region,
        postalCode: okanBusiness.address.postalCode,
        addressCountry: okanBusiness.address.country,
      },
      areaServed: okanBusiness.serviceAreas.map((city) => ({
        "@type": "City",
        name: city,
      })),
      knowsAbout: [
        "Custom home construction",
        "Residential renovation",
        "Commercial construction",
        "Handyman services",
        "Deck and outdoor living",
        "Kitchen and bathroom renovation",
        "Concrete work",
        "FireSmart prevention",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Construction Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Handyman Division" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Residential Division" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Commercial Division" },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "4",
        bestRating: "5",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://okansolutions.com/#website",
      url: "https://okansolutions.com",
      name: "OKAN Solutions Inc.",
      publisher: { "@id": "https://okansolutions.com/#business" },
      inLanguage: "en-CA",
    },
    {
      "@type": "FAQPage",
      "@id": "https://okansolutions.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What areas does OKAN Solutions serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OKAN Solutions serves the entire Okanagan Valley — including West Kelowna, Peachland, Summerland, Lake Country, Vernon, Coldstream, and Armstrong, BC.",
          },
        },
        {
          "@type": "Question",
          name: "Is OKAN Solutions licensed, bonded, and insured?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. OKAN Solutions Inc. is fully Licensed, Bonded, and Insured — giving every client peace of mind on every project, from handyman fixes to commercial builds.",
          },
        },
        {
          "@type": "Question",
          name: "How do I request a free quote?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the Quick Quote form on this page, or message us directly via WhatsApp. We respond within one business day with an itemized quote — no sales pressure.",
          },
        },
        {
          "@type": "Question",
          name: "What types of projects does OKAN handle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Three specialized divisions: Handyman (small fixes to major repairs), Residential (custom homes, renovations, decks, kitchens, baths, outdoor living), and Commercial (retail, condos, plazas, community centres, franchises, and emergency response).",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
