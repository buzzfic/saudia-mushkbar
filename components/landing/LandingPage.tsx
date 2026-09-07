import { JsonLd } from "@/components/common/JsonLd";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingFeatureGrid } from "@/components/landing/LandingFeatureGrid";
import { LandingSteps } from "@/components/landing/LandingSteps";
import { LandingEligibility } from "@/components/landing/LandingEligibility";
import { WhyChooseAndReviews } from "@/components/landing/WhyChooseAndReviews";
import { LandingClosing } from "@/components/landing/LandingClosing";
import { LocationCard } from "@/components/sections/LocationCard";
import type { LandingPageData } from "@/lib/landing-types";
import { breadcrumbList, medicalWebPage } from "@/lib/structured-data";

/**
 * One layout for every service landing page. Each route stays its own file so
 * the URL is literal and statically rendered; only the content differs.
 */
export function LandingPage({ data }: { data: LandingPageData }) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: data.label, path: data.path },
  ];

  return (
    <>
      <JsonLd
        data={[
          medicalWebPage({
            path: data.path,
            name: data.metaTitle,
            description: data.metaDescription,
            serviceName: data.serviceName,
          }),
          breadcrumbList(crumbs),
        ]}
      />

      <LandingHero data={data} crumbs={crumbs} />

      {data.grid ? (
        <LandingFeatureGrid title={data.grid.title} items={data.grid.items} />
      ) : null}

      {data.steps ? (
        <LandingSteps title={data.steps.title} items={data.steps.items} />
      ) : null}

      {data.eligibility ? (
        <LandingEligibility
          title={data.eligibility.title}
          intro={data.eligibility.intro}
          items={data.eligibility.items}
        />
      ) : null}

      <WhyChooseAndReviews
        title={data.whyChoose.title}
        items={data.whyChoose.items}
      />

      <LocationCard
        ctaTitle={data.cta.title}
        ctaDescription={data.cta.description}
        accent={data.accent ?? "alert"}
      />

      <LandingClosing
        lead={data.closing.lead}
        script={data.closing.script}
        related={data.related}
      />
    </>
  );
}
