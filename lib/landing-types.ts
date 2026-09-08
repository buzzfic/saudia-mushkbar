/**
 * Shape of a service landing page.
 *
 * Every page is described as data so the twelve pages share one layout,
 * one set of components and one SEO pattern. Copy lives in `lib/landing.ts`.
 */

/**
 * Accent for a page's split headline and call buttons. Defaults to the site's
 * red; the rest let a page pick up the dominant colour of its own artwork.
 */
export type PageAccent =
  | "alert"
  | "berry"
  | "navy"
  | "indigo"
  | "pink"
  | "violet"
  | "forest"
  | "rose"
  | "crimson"
  | "ultramarine"
  | "cobalt"
  | "sky";

export type LandingFeature = {
  title: string;
  description?: string;
  icon: string;
};

export type LandingStep = {
  title: string;
  description: string;
};

export type LandingReason = {
  label: string;
  text?: string;
};

export type LandingAside =
  | {
      kind: "checklist";
      title: string;
      items: string[];
      note?: { title: string; body: string };
    }
  | { kind: "trust" };

export type LandingPageData = {
  /** Route path without a trailing slash, e.g. "/diabetes-doctor-toledo". */
  path: string;
  /** Breadcrumb label and nav label. */
  label: string;
  /** <title> for the page. */
  metaTitle: string;
  metaDescription: string;
  /** Name used in MedicalProcedure structured data. */
  serviceName: string;
  /** Accent for the split headline and call buttons. Defaults to the red. */
  accent?: Exclude<PageAccent, "alert">;
  badge?: { label: string; icon: string };
  /** First headline line, set in the brand colour. */
  headingLead: string;
  /** Second headline line, set in a lighter tint of the brand colour. */
  headingAccent: string;
  tagline: string;
  intro: string;

  /** Four small icon points beneath the intro (used on most pages). */
  points?: LandingFeature[];
  /** Or a tick list, used on the "New Patients" and "Switch PCP" layouts. */
  checklist?: string[];

  /** Optional floating card over the portrait. Omit to show the photo alone. */
  aside?: LandingAside;
  image: { src: string; alt: string; width: number; height: number };

  /** The wide icon grid: "Comprehensive … Services". */
  grid?: { title: string; items: LandingFeature[] };
  /** Or a numbered process, used on the "Switch PCP" layout. */
  steps?: { title: string; items: LandingStep[] };

  /** Optional "is this right for you?" block, e.g. programme criteria. */
  eligibility?: { title: string; intro: string; items: string[] };
  whyChoose: { title: string; items: LandingReason[] };
  cta: { title: string; description: string };
  closing: { lead: string; script: string };
  /** Paths of related pages linked at the foot of the page. */
  related: string[];
};

/**
 * The subset of a landing page that the hero renders. Split out so bespoke
 * pages — the Medicare page — can share the same hero without inventing grid,
 * steps or closing content they do not use.
 */
export type LandingHeroData = Pick<
  LandingPageData,
  | "accent"
  | "badge"
  | "headingLead"
  | "headingAccent"
  | "tagline"
  | "intro"
  | "points"
  | "checklist"
  | "aside"
  | "image"
>;
