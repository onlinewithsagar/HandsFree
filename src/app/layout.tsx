import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import Chatbot from "@/components/Chatbot";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://handsfree-three.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HandsFree — High-Speed Web Apps & Autonomous AI Systems",
    template: "%s | HandsFree",
  },
  description:
    "HandsFree builds high-converting Next.js web apps, autonomous AI agent workflows, CRM sync, and automated billing to eliminate operational drag.",
  keywords: [
    "HandsFree",
    "HandsFree AI",
    "Next.js web development",
    "AI automation agency",
    "AI agents",
    "autonomous business workflows",
    "Stripe automated billing",
    "HubSpot CRM automation",
    "conversion web apps",
    "enterprise AI automation",
    "workflow automation",
    "handsfree systems",
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
      "Stop manual drag. We engineer high-converting web applications, intelligent AI automations, and autonomous growth funnels.",
    url: siteUrl,
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
      "Stop manual drag. We engineer high-converting Next.js web apps and 24/7 autonomous AI systems.",
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
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
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
        "@id": `${siteUrl}/#organization`,
        name: "HandsFree",
        url: siteUrl,
        logo: `${siteUrl}/favicon-32x32.png`,
        image: `${siteUrl}/og-image.png`,
        description:
          "HandsFree builds high-converting Next.js web apps and autonomous AI workflows to eliminate operational drag.",
        sameAs: ["https://twitter.com/handsfree", "https://linkedin.com/company/handsfree"],
        contactPoint: {
          "@type": "ContactPoint",
          email: "handsfree.in@gmail.com",
          contactType: "Customer Support",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "HandsFree",
        description: "High-Speed Web Applications & Autonomous AI Workflows",
        publisher: {
          "@id": `${siteUrl}/#organization`,
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
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What solutions does HandsFree build?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "HandsFree builds sub-second Next.js web applications, multi-model AI agent automation pipelines, CRM integrations, and automated Stripe billing systems.",
            },
          },
          {
            "@type": "Question",
            name: "How fast can HandsFree deploy a project?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Standard rapid web app sprints deploy within 7 to 14 days, while AI automation pipelines can be integrated live in 3 to 7 days.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth" data-scroll-behavior="smooth">
      <head>
        {/* Fallback explicit meta tags for WhatsApp & OpenGraph link scrapers */}
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta property="og:image:secure_url" content={`${siteUrl}/og-image.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="HandsFree — Website • Automation • Growth" />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-black text-white selection:bg-[#B8FF00] selection:text-black overflow-x-hidden`}
      >
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
          <Chatbot />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
