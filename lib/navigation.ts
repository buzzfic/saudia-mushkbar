/**
 * Site navigation.
 *
 * The original WordPress menu was About / Services / Primary Medicare /
 * Contact. The structure is preserved; "Primary Medicare" is now labelled
 * "Medicare", and it and "Services" have grown into grouped menus now that the
 * individual service pages exist.
 */

export type NavLink = {
  label: string;
  href: string;
  /** Short line shown under the label in dropdown menus. */
  description?: string;
};

export type NavItem = NavLink & {
  children?: NavLink[];
};

export const servicePages: NavLink[] = [
  {
    label: "Same-Day Primary Care",
    href: "/same-day-primary-care-toledo",
    description: "Get seen today for urgent, non-emergency concerns.",
  },
  {
    label: "Annual Physical & Wellness Exam",
    href: "/annual-physical-exam-toledo",
    description: "Yearly checkups, screenings and vaccinations.",
  },
  {
    label: "Women’s Primary Care",
    href: "/womens-primary-care-doctor-toledo",
    description: "Care for women at every stage of life.",
  },
  {
    label: "Senior Primary Care",
    href: "/senior-primary-care-doctor-toledo",
    description: "Healthy aging, medication and chronic disease support.",
  },
  {
    label: "Diabetes Care",
    href: "/diabetes-doctor-toledo",
    description: "Blood sugar management and complication prevention.",
  },
  {
    label: "High Blood Pressure Care",
    href: "/high-blood-pressure-doctor-toledo",
    description: "Monitoring and management of hypertension.",
  },
  {
    label: "Weight Loss & GLP-1",
    href: "/weight-loss-doctor-toledo",
    description: "GLP-1 programs and personalized wellness plans.",
  },
];

export const medicarePages: NavLink[] = [
  {
    label: "Medicare Primary Care",
    href: "/medicare-primary-care-doctor-toledo",
    description: "Medicare and Medicare Advantage patients welcome.",
  },
  {
    label: "Medicare Annual Wellness Visit",
    href: "/medicare-annual-wellness-visit-toledo",
    description: "Your yearly preventive planning visit.",
  },
  {
    label: "Switch Your Medicare PCP",
    href: "/switch-medicare-primary-care-doctor-toledo",
    description: "We handle the paperwork for you.",
  },
];

export const primaryNav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    description: "Meet Dr. Mushkbar and how she practices.",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      ...servicePages,
      {
        label: "All Services",
        href: "/services",
        description: "Everything Dr. Mushkbar cares for in one place.",
      },
    ],
  },
  {
    label: "Medicare",
    href: "/medicare-primary-care-doctor-toledo",
    description: "Medicare and Medicare Advantage patients welcome.",
    children: medicarePages,
  },
  {
    label: "New Patients",
    href: "/new-patients",
    description: "What to expect at your first visit.",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Call the office or request an appointment.",
  },
];

/** Flat list of every indexable route, used by the sitemap and link checks. */
export const allRoutes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/new-patients", priority: 0.9, changeFrequency: "monthly" },
  { path: "/medicare-primary-care-doctor-toledo", priority: 0.9, changeFrequency: "monthly" },
  { path: "/medicare-annual-wellness-visit-toledo", priority: 0.8, changeFrequency: "monthly" },
  { path: "/switch-medicare-primary-care-doctor-toledo", priority: 0.8, changeFrequency: "monthly" },
  { path: "/same-day-primary-care-toledo", priority: 0.9, changeFrequency: "monthly" },
  { path: "/womens-primary-care-doctor-toledo", priority: 0.8, changeFrequency: "monthly" },
  { path: "/senior-primary-care-doctor-toledo", priority: 0.8, changeFrequency: "monthly" },
  { path: "/diabetes-doctor-toledo", priority: 0.8, changeFrequency: "monthly" },
  { path: "/high-blood-pressure-doctor-toledo", priority: 0.8, changeFrequency: "monthly" },
  { path: "/annual-physical-exam-toledo", priority: 0.8, changeFrequency: "monthly" },
  { path: "/weight-loss-doctor-toledo", priority: 0.8, changeFrequency: "monthly" },
];

/** Footer "Pages" column — mirrors the original WordPress footer menu. */
export const footerNav: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Medicare", href: "/medicare-primary-care-doctor-toledo" },
  { label: "New Patients", href: "/new-patients" },
  { label: "Contacts", href: "/contact" },
];
