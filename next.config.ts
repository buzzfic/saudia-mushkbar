import type { NextConfig } from "next";

/**
 * Migration redirect map (WordPress -> Next.js).
 *
 * The legacy WordPress install answered every unknown path with a 301 to the
 * homepage, so there are no orphaned indexed URLs to rescue beyond the two
 * pages that were in the Yoast sitemap. Both of those keep their original URL:
 *
 *   /                                     -> preserved (homepage)
 *   /medicare-primary-care-doctor-toledo/ -> preserved (Medicare page)
 *   /medicare-glp-1-bridge-program/       -> was already 301 -> / on WordPress
 *
 * Everything below is a convenience alias pointing at the canonical URL, so
 * shorter marketing links and the paths WordPress used to swallow still resolve
 * in one hop. No redirect chains: every source points straight at its final URL.
 */
const redirects: NonNullable<NextConfig["redirects"]> = async () => {
  // Both source and destination carry the trailing slash that `trailingSlash:
  // true` enforces, so each of these resolves in a single hop rather than
  // bouncing through Next's own slash normalisation first.
  const map: [source: string, destination: string][] = [
    // Legacy WordPress URLs that appear in the old Yoast sitemap.
    ["/medicare-glp-1-bridge-program/", "/weight-loss-doctor-toledo/"],

    // Friendly aliases for the Medicare page, whose indexed URL is preserved.
    ["/primary-medicare/", "/medicare-primary-care-doctor-toledo/"],
    ["/medicare/", "/medicare-primary-care-doctor-toledo/"],

    // Common shorthand paths people link to.
    ["/about-us/", "/about/"],
    ["/contact-us/", "/contact/"],
    ["/our-services/", "/services/"],
    ["/new-patient/", "/new-patients/"],
    ["/same-day-care/", "/same-day-primary-care-toledo/"],
    ["/womens-health/", "/womens-primary-care-doctor-toledo/"],
    ["/weight-loss/", "/weight-loss-doctor-toledo/"],

    // Service pages that have been taken down for now. Redirected rather than
    // left to 404, since they were live and linked from the menu.
    ["/primary-care-doctor-toledo/", "/services/"],
    ["/hospital-follow-up-primary-care-toledo/", "/services/"],

    // Dead WordPress endpoints and archives that should not 404 for crawlers.
    // The old install answered all of these with a redirect to the homepage.
    ["/feed/", "/"],
    ["/comments/feed/", "/"],
    ["/author/:slug/", "/about/"],
    ["/category/:slug/", "/"],
    ["/tag/:slug/", "/"],
  ];

  return map.map(([source, destination]) => ({
    source,
    destination,
    // 301 rather than Next's default 308, matching the migration plan.
    statusCode: 301,
  }));
};

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // The WordPress site served URLs with a trailing slash; keep that shape so
  // existing links and the sitemap agree with what the server actually returns.
  trailingSlash: true,
  images: {
    // Every site-owned image is served from /public, so no remote patterns are
    // needed. Keep this empty rather than allowing arbitrary remote hosts.
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
  redirects,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
