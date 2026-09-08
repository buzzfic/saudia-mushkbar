/**
 * Single source of truth for business (NAP) data, verified against the live
 * WordPress site at https://www.saudiamushkbar.com/ during the migration audit.
 *
 * Do not add unverified information here. Anything marked PENDING CONFIRMATION
 * came from client-supplied layout mockups rather than the live site.
 */

export const SITE_URL = "https://www.saudiamushkbar.com";

export const PRACTICE = {
  doctorName: "Dr. Saudia Mushkbar",
  doctorNameWithCredentials: "Dr. Saudia Mushkbar, MD",
  siteName: "Saudia Mushkbar",
  specialty: "Family Medicine",
  affiliation: "The Toledo Clinic",
  affiliationUrl: "https://toledoclinic.com/doctor/saudia-mushkbar/",
  tagline: "Family Medicine. Compassionate Care.",
} as const;

export const CONTACT = {
  phoneDisplay: "419-517-7687",
  phoneHref: "tel:+14195177687",
  address: {
    street: "4417 N. Holland-Sylvania Rd.",
    unit: "Suite C",
    city: "Toledo",
    state: "OH",
    stateFull: "Ohio",
    postalCode: "43623",
    country: "US",
  },
  geo: {
    latitude: 41.696739,
    longitude: -83.6906133,
  },
  googlePlaceId: "ChIJSSxTJM5wPIgR3K9MU1w_pFQ",
} as const;

export const ADDRESS_ONE_LINE = `${CONTACT.address.street}, ${CONTACT.address.unit}, ${CONTACT.address.city}, ${CONTACT.address.state} ${CONTACT.address.postalCode}`;

/**
 * Office hours are not published on the site. The site never invented them and
 * they have now been removed at the client's request, so every hours block is
 * hidden and the practice's structured data makes no opening-hours claim.
 *
 * To publish them again, set this to an array of { days, hours } and add a
 * matching openingHoursSpecification in lib/structured-data.ts.
 */
export const OFFICE_HOURS: { readonly days: string; readonly hours: string }[] | null =
  null;

export const MAPS = {
  /** Directions link used across the site (matches the live site's link). */
  directions:
    "https://www.google.com/maps/search/?api=1&query=Saudia+Mushkbar+MD%2C+4417+N+Holland+Sylvania+Rd+C%2C+Toledo%2C+OH+43623&query_place_id=ChIJSSxTJM5wPIgR3K9MU1w_pFQ",
  /** Keyless embed — no API key required, so nothing is exposed client-side. */
  embed:
    "https://www.google.com/maps?q=4417+N+Holland+Sylvania+Rd+Suite+C,+Toledo,+OH+43623&output=embed",
} as const;

export const REVIEWS = {
  google: {
    label: "Google",
    rating: "5.0",
    count: "200+",
    /** Numeric values for structured data. */
    ratingValue: 5,
    reviewCount: 200,
    url: MAPS.directions,
  },
  healthgrades: {
    label: "Healthgrades",
    rating: "4.8",
    count: "60+",
    ratingValue: 4.8,
    reviewCount: 60,
    url: "https://www.healthgrades.com/physician/dr-saudia-mushkbar-2jsts",
  },
} as const;

/** Google Analytics 4 property carried over from the WordPress site. */
export const ANALYTICS = {
  gaMeasurementId:
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-3VY9D6RKJF",
  googleSiteVerification: "Li89H58pJhBs2VbJi2MatWNKY9m0N7n20TgElm6BazI",
} as const;

/**
 * Appointments are booked by phone, as they were on the original site, so the
 * primary call to action dials the office directly. The secondary action goes
 * to the contact page for the address, hours and directions.
 */
export const CTA = {
  callHref: CONTACT.phoneHref,
  callLabel: `Call ${CONTACT.phoneDisplay}`,
  contactHref: "/contact",
  contactLabel: "Contact & Directions",
} as const;
