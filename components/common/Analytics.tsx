import Script from "next/script";

import { ANALYTICS } from "@/lib/constants";

/**
 * Google Analytics 4, carried over from the WordPress install.
 *
 * Loaded with `afterInteractive` so it never blocks rendering, and skipped
 * entirely outside production so preview and local traffic is not recorded.
 * The measurement ID is public by design; set NEXT_PUBLIC_GA_MEASUREMENT_ID to
 * an empty string to disable tracking without touching code.
 */
export function Analytics() {
  const id = ANALYTICS.gaMeasurementId;

  if (process.env.NODE_ENV !== "production" || !id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}
