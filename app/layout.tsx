import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display, Space_Mono } from "next/font/google";

import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/common/JsonLd";
import { Analytics } from "@/components/common/Analytics";
import { ANALYTICS, PRACTICE } from "@/lib/constants";
import { siteUrl } from "@/lib/seo";
import { practiceGraph } from "@/lib/structured-data";

/**
 * Typography follows the WordPress Elementor kit: a light display serif for
 * headings, DM Sans for body copy and Space Mono for the small uppercase
 * eyebrow labels. Only the weights actually used are requested.
 */
const displayFont = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-playfair",
});

const sansFont = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

const monoFont = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Dr. Saudia Mushkbar, MD | Family Doctor & Primary Care in Toledo, Ohio",
    template: `%s | ${PRACTICE.siteName}`,
  },
  description:
    "As a family doctor in Toledo, Ohio, Dr. Saudia Mushkbar cares for children, adults, and seniors managing both everyday health concerns and long-term conditions.",
  applicationName: PRACTICE.siteName,
  authors: [{ name: PRACTICE.doctorNameWithCredentials }],
  creator: PRACTICE.doctorNameWithCredentials,
  publisher: PRACTICE.siteName,
  formatDetection: { telephone: true, address: true, email: true },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: ANALYTICS.googleSiteVerification,
  },
  // Icons come from the app/icon.png and app/apple-icon.png file conventions.
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: PRACTICE.siteName,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  category: "health",
};

export const viewport: Viewport = {
  themeColor: "#2F4749",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-US"
      className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[4px] focus:bg-brand focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main">{children}</main>
        <Footer />

        <JsonLd data={practiceGraph()} />
        <Analytics />
      </body>
    </html>
  );
}
