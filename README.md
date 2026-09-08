# Dr. Saudia Mushkbar, MD — saudiamushkbar.com

Next.js rebuild of the practice website for Dr. Saudia Mushkbar, MD, a
board-certified family medicine physician at The Toledo Clinic in Toledo, Ohio.

Migrated from WordPress + Elementor. See [MIGRATION.md](MIGRATION.md) for the
audit, the URL map and the content decisions.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui
primitives on Radix · lucide-react · `next/font` · `next/image`

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values you need
npm run dev                  # http://localhost:3000
```

| Script | Does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Project layout

```
app/                     One folder per route; every page is statically rendered
  layout.tsx             Fonts, root metadata, header/footer, practice JSON-LD
  page.tsx               Homepage — the migrated WordPress single-page content
  robots.ts sitemap.ts   SEO file conventions
  opengraph-image.tsx    Generated 1200×630 social card
  not-found.tsx error.tsx
components/
  ui/                    Button, Card, Sheet, Accordion, Input — Radix + CVA
  layout/                Header, DesktopNav, MobileNavigation, Footer, Logo
  sections/              Homepage and shared page sections
  landing/               The service landing-page template
  common/                Container, SectionHeading, Breadcrumbs, JsonLd, Icon
lib/
  constants.ts           Business NAP data — the single source of truth
  content.ts             Copy migrated from the WordPress site
  landing.ts             Content for the 12 service landing pages
  navigation.ts          Menus and the canonical route list
  seo.ts                 Page metadata builder
  structured-data.ts     Schema.org helpers
public/images/           Site-owned assets, organised by subject
```

There is no `src/` directory — the app is rooted at the project root.

## Adding or editing a service landing page

The twelve landing pages share one layout and differ only in data.

1. Add an entry to `landingPages` in `lib/landing.ts`.
2. Create `app/<slug>/page.tsx`:

   ```tsx
   import type { Metadata } from "next";
   import { LandingPage } from "@/components/landing/LandingPage";
   import { getLandingPage } from "@/lib/landing";
   import { pageMetadata } from "@/lib/seo";

   const data = getLandingPage("/<slug>");

   export const metadata: Metadata = pageMetadata({
     title: data.metaTitle,
     description: data.metaDescription,
     path: data.path,
   });

   export default function Page() {
     return <LandingPage data={data} />;
   }
   ```

3. Add the route to `allRoutes` in `lib/navigation.ts` so it enters the sitemap,
   and to `servicePages` or `medicarePages` if it belongs in the menu.

Each route is its own folder rather than a dynamic segment, so URLs stay literal
and every page is prerendered at build time.

## Environment variables

All documented in `.env.example`. Nothing secret is referenced from client code.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | no | Canonical origin. Leave unset to use the production domain; an empty or malformed value falls back to it rather than failing the build. Only set it when a deployment must canonicalise to itself. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | no | GA4 property. Defaults to the ID carried over from WordPress; analytics only load in production. |

There are no secrets. Appointments are booked by phone, so the site sends no
email and needs no mail provider credentials.

Never commit `.env.local`.

## Conventions

- **Server Components by default.** Only the mobile drawer, the desktop menus
  and the click-to-load media embeds are client components.
- **Content lives in `lib/`,** not inside JSX, so copy can be updated without
  touching layout.
- **Business facts live in `lib/constants.ts`.** Name, address and phone are
  written once and reused, including in the structured data.
- **Third-party media is click-to-load.** The five WTOL / YouTube / iHeart
  embeds mount only when a visitor asks for them.
- **Booking is by phone.** Every primary call to action is a `tel:` link to the
  office; the secondary action goes to `/contact` for the address, hours, map
  and directions. Both labels come from `CTA` in `lib/constants.ts`.
- **No fabricated content.** Anything not published on the original site is
  either omitted or flagged in `lib/constants.ts`. See MIGRATION.md §4.

## Before going live

1. Add real social profile URLs to the footer, or leave them out.
2. Submit `https://www.saudiamushkbar.com/sitemap.xml` in Search Console and
   watch the coverage report for the two preserved URLs.
