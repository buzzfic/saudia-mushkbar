import type { MetadataRoute } from "next";

import { allRoutes } from "@/lib/navigation";
import { siteUrl } from "@/lib/seo";

/**
 * Canonical public pages only — no 404, no redirect sources, no query-string
 * variants. URLs carry the trailing slash produced by `trailingSlash: true`,
 * so the sitemap matches exactly what the server returns with a 200.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return allRoutes.map((route) => ({
    url:
      route.path === "/"
        ? `${siteUrl}/`
        : `${siteUrl}/${route.path.replace(/^\/+|\/+$/g, "")}/`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
