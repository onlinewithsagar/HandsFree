import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://handsfree.co"),
  title: {
    default: "HandsFree — High-Speed Web Apps & Autonomous AI Systems",
    template: "%s | HandsFree",
  },
  description:
    "HandsFree engineers high-converting Next.js web applications, autonomous AI agent workflows, CRM synchronization, and automated billing to eliminate operational drag.",
  keywords: [
    "HandsFree",
    "Next.js web development",
    "AI automation agency",
    "AI agents",
    "autonomous business workflows",
    "Stripe automated billing",
    "HubSpot CRM automation",
    "conversion web apps",
    "enterprise AI automation",
  ],
  authors: [{ name: "HandsFree Systems Inc." }],
  creator: "HandsFree Systems Inc.",
  publisher: "HandsFree Systems Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HandsFree — High-Speed Web Apps & Autonomous AI Systems",
    description:
      "Eliminate manual drag. We engineer high-converting web applications, intelligent AI automations, and autonomous growth funnels.",
    url: "https://handsfree.co",
    siteName: "HandsFree",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HandsFree — Website • Automation • Growth",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HandsFree — High-Speed Web Apps & Autonomous AI Systems",
    description:
      "Eliminate manual drag. We build ultra-fast Next.js web apps and 24/7 autonomous AI systems.",
    images: ["/og-image.png"],
    creator: "@handsfree",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://handsfree.co/#organization",
        name: "HandsFree",
        url: "https://handsfree.co",
        logo: "https://handsfree.co/logo.png",
        image: "https://handsfree.co/og-image.png",
        description:
          "HandsFree builds high-converting Next.js web apps and autonomous AI workflows to eliminate operational drag.",
        sameAs: ["https://twitter.com/handsfree", "https://linkedin.com/company/handsfree"],
        contactPoint: {
          "@type": "ContactPoint",
          email: "hello@handsfree.co",
          contactType: "Customer Support",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://handsfree.co/#website",
        url: "https://handsfree.co",
        name: "HandsFree",
        description: "Autonomous Web Development and AI Operations",
        publisher: {
          "@id": "https://handsfree.co/#organization",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "HandsFree Autonomous Orchestrator",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Cloud / Edge",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-black text-white selection:bg-[#B8FF00] selection:text-black overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
