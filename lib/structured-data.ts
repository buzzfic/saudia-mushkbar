import { CONTACT, MAPS, PRACTICE, REVIEWS } from "@/lib/constants";
import { siteUrl } from "@/lib/seo";

/**
 * Schema.org graph for the practice.
 *
 * Only facts published on the site are described here: name, address, phone,
 * affiliation, specialty and the aggregate ratings shown on the review cards.
 * No credentials, awards or insurance claims are asserted beyond what the site
 * itself states.
 */

const ORG_ID = `${siteUrl}/#practice`;
const PHYSICIAN_ID = `${siteUrl}/#physician`;
const WEBSITE_ID = `${siteUrl}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: `${CONTACT.address.street}, ${CONTACT.address.unit}`,
  addressLocality: CONTACT.address.city,
  addressRegion: CONTACT.address.state,
  postalCode: CONTACT.address.postalCode,
  addressCountry: CONTACT.address.country,
} as const;

export function practiceGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "Physician"],
        "@id": PHYSICIAN_ID,
        name: PRACTICE.doctorNameWithCredentials,
        alternateName: PRACTICE.siteName,
        url: `${siteUrl}/`,
        telephone: CONTACT.phoneDisplay,
        image: `${siteUrl}/images/doctor/doctor-saudia-mushkbar-white-coat.jpg`,
        address: postalAddress,
        geo: {
          "@type": "GeoCoordinates",
          latitude: CONTACT.geo.latitude,
          longitude: CONTACT.geo.longitude,
        },
        hasMap: MAPS.directions,
        medicalSpecialty: "https://schema.org/FamilyPractice",
        areaServed: [
          { "@type": "City", name: "Toledo" },
          { "@type": "AdministrativeArea", name: "Northwest Ohio" },
        ],
        parentOrganization: {
          "@type": "MedicalOrganization",
          name: PRACTICE.affiliation,
          url: PRACTICE.affiliationUrl,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: REVIEWS.google.ratingValue,
          reviewCount: REVIEWS.google.reviewCount,
          bestRating: 5,
        },
        sameAs: [PRACTICE.affiliationUrl, REVIEWS.healthgrades.url],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${siteUrl}/`,
        name: PRACTICE.siteName,
        inLanguage: "en-US",
        publisher: { "@id": PHYSICIAN_ID },
      },
    ],
  };
}

export function webPage({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  const url = path === "/" ? `${siteUrl}/` : `${siteUrl}/${path.replace(/^\/+|\/+$/g, "")}/`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PHYSICIAN_ID },
  };
}

export function breadcrumbList(
  crumbs: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item:
        crumb.path === "/"
          ? `${siteUrl}/`
          : `${siteUrl}/${crumb.path.replace(/^\/+|\/+$/g, "")}/`,
    })),
  };
}

/**
 * A MedicalWebPage describing one service. `about` intentionally uses only the
 * service name shown on the page — no treatment claims or outcomes.
 */
export function medicalWebPage({
  path,
  name,
  description,
  serviceName,
}: {
  path: string;
  name: string;
  description: string;
  serviceName: string;
}) {
  const url = `${siteUrl}/${path.replace(/^\/+|\/+$/g, "")}/`;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    about: {
      "@type": "MedicalBusiness",
      "@id": PHYSICIAN_ID,
    },
    mainEntity: {
      "@type": "MedicalProcedure",
      name: serviceName,
      provider: { "@id": PHYSICIAN_ID },
    },
  };
}

export { ORG_ID, PHYSICIAN_ID, WEBSITE_ID };
