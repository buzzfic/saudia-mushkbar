import type { Metadata } from "next";
import { SITE_URL, PRACTICE } from "@/lib/constants";

/**
 * The canonical origin. Configurable so preview deployments can be pointed at
 * themselves, but it defaults to the production domain so a missing env var can
 * never canonicalise the site to a Vercel preview URL or to localhost.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL).replace(
  /\/$/,
  "",
);

/** Shared Open Graph image, generated at /opengraph-image. */
const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${PRACTICE.doctorNameWithCredentials} — ${PRACTICE.specialty} and Primary Care in Toledo, Ohio`,
};

type PageSeoInput = {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/about". Use "/" for the homepage. */
  path: string;
  /** Set for pages that should not be indexed (there are none by default). */
  noIndex?: boolean;
  /** Overrides the default OG type of "website". */
  ogType?: "website" | "article";
};

/**
 * Builds page metadata with a self-referencing canonical URL, Open Graph and
 * Twitter cards. Canonical paths always match the public URL shape produced by
 * `trailingSlash: true` in next.config.ts.
 */
export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
  ogType = "website",
}: PageSeoInput): Metadata {
  const canonicalPath =
    path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`;

  return {
    title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: ogType,
      url: canonicalPath,
      siteName: PRACTICE.siteName,
      locale: "en_US",
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
