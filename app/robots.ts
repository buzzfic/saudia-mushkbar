import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/seo";

/**
 * Everything public is crawlable. Only Next.js internals are disallowed — the
 * root path is deliberately never blocked.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/static/chunks/", "/api/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
