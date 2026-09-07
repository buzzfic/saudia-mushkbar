# WordPress → Next.js migration record

Source site audited: **https://www.saudiamushkbar.com/** (WordPress 7.1, Elementor
4.2.4, "biovital" theme, Yoast SEO 28.4) — audited 3 September 2026.

---

## 1. What the WordPress site actually contained

The Yoast sitemap listed three page URLs, and the server answered **every** other
path with a 301 to the homepage — including `/robots.txt`, `/about/`,
`/services/` and `/contact/`.

| Old URL | Status | Notes |
| --- | --- | --- |
| `/` | 200 | Long single-page site; `#about`, `#services`, `#contact` were in-page anchors |
| `/medicare-primary-care-doctor-toledo/` | 200 | The only real inner page |
| `/medicare-glp-1-bridge-program/` | 301 → `/` | Stale sitemap entry; page no longer existed |
| everything else | 301 → `/` | Catch-all, including category/tag/author archives |

So there were **two indexable pages**. `About`, `Services` and `Contact` in the
navigation were anchors on the homepage, and `#contact` pointed at the footer.

### Existing SEO values (preserved or improved)

| Field | Old value | New value |
| --- | --- | --- |
| Homepage `<title>` | `Saudia Mushkbar` | `Dr. Saudia Mushkbar, MD \| Family Doctor & Primary Care in Toledo, Ohio` |
| Homepage description | *(unchanged — carried over verbatim)* | same |
| Homepage canonical | `https://www.saudiamushkbar.com/` | same |
| Medicare page title | `Medicare Primary Care Doctor Toledo - Saudia Mushkbar` | `Medicare Primary Care Doctor in Toledo, OH \| Saudia Mushkbar` |
| Medicare page description | *(none — Yoast fell back to an auto-generated OG description)* | written |
| Robots | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` | same |
| OG image | `humana-logo.webp` (an insurance logo, 1500×309) | generated 1200×630 card at `/opengraph-image` |
| Google Site Verification | `Li89H58pJhBs2VbJi2MatWNKY9m0N7n20TgElm6BazI` | preserved |
| Google Analytics | GA4 `G-3VY9D6RKJF` (via MonsterInsights) | preserved, loaded `afterInteractive`, production only |
| `robots.txt` | **did not exist** (301'd to the homepage) | generated at `/robots.txt` |
| Sitemap | Yoast, included empty tag/category/author archives | generated, canonical pages only |

---

## 2. URL map

### Preserved (unchanged — no redirect needed)

```
/                                        → /
/medicare-primary-care-doctor-toledo/    → /medicare-primary-care-doctor-toledo/
```

The Medicare page keeps the exact URL it was indexed under. `/primary-medicare/`
is provided as an alias that 301s to it rather than replacing it, so no ranking
signal moves.

### 301 redirects (all single-hop, defined in `next.config.ts`)

```
/medicare-glp-1-bridge-program/  → /weight-loss-doctor-toledo/
/primary-medicare/               → /medicare-primary-care-doctor-toledo/
/medicare/                       → /medicare-primary-care-doctor-toledo/
/about-us/                       → /about/
/contact-us/                     → /contact/
/our-services/                   → /services/
/new-patient/                    → /new-patients/
/same-day-care/                  → /same-day-primary-care-toledo/
/womens-health/                  → /womens-primary-care-doctor-toledo/
/weight-loss/                    → /weight-loss-doctor-toledo/
/feed/                           → /
/comments/feed/                  → /
/author/:slug/                   → /about/
/category/:slug/                 → /
/tag/:slug/                      → /
```

Source and destination both carry the trailing slash enforced by
`trailingSlash: true`, so each resolves in one hop with no chain.

### New pages (additive — nothing was removed to make room)

```
/about/                                        /same-day-primary-care-toledo/
/services/                                     /primary-care-doctor-toledo/
/contact/                                      /womens-primary-care-doctor-toledo/
/new-patients/                                 /senior-primary-care-doctor-toledo/
/medicare-annual-wellness-visit-toledo/        /diabetes-doctor-toledo/
/switch-medicare-primary-care-doctor-toledo/   /high-blood-pressure-doctor-toledo/
/annual-physical-exam-toledo/                  /hospital-follow-up-primary-care-toledo/
/weight-loss-doctor-toledo/
```

The homepage keeps its full original content, so `About`/`Services`/`Contact`
now exist both as real pages and as the homepage sections they were before.

---

## 3. Design tokens

Taken from the Elementor global kit
(`wp-content/uploads/elementor/css/post-41.css`) — not invented:

| Token | Value | Use |
| --- | --- | --- |
| `brand` | `#053228` | Primary deep green (was `#2F4749` in the Elementor kit; changed at the client's request) |
| `accent` | `#F7C99B` | Warm peach buttons and highlights |
| `gold` | `#AD9771` | Eyebrow labels, small accents |
| `alert` | `#EA292D` | The red used inside the hero headline, now also the call CTA |
| `cream` / `accent.soft` / `mint` | `#FCF7ED` / `#FEF1E9` / `#EAF6E8` | Section tints |
| `canvas` / `hairline` / `body` / `ink` | `#FDFCFA` / `#EAE6DF` / `#625A53` / `#272626` | Surfaces, borders, text |

Type scale from the same kit: h1 76px, h2 60px, h3 46px, h4 32px, body 18px/1.55
weight 300, eyebrow labels in uppercase mono with 2px tracking. Reproduced as
fluid `clamp()` sizes.

**Typography note.** The kit declared `Butler Local`, `Dm Sans Local` and
`Space Mono Local`, but **no `@font-face` rule exists anywhere in the site's
CSS** — those families never load, so the live site renders in browser
fallbacks. The declared intent is honoured here with `next/font/google`:
Playfair Display (display serif, standing in for Butler), DM Sans (body) and
Space Mono (eyebrow labels). Swap `displayFont` in `app/layout.tsx` if a
licensed Butler webfont is available.

---

## 4. Content decisions

Everything on the new site comes from the live WordPress site. Where the old
site had a placeholder, it was dropped rather than invented:

- **Social links** — the footer had Facebook, Instagram and X icons all pointing
  at `href="#"`. Omitted. Add real profile URLs to `components/layout/Footer.tsx`
  when they exist.
- **Newsletter** — the footer had a "Subscribe to Our Newsletter" heading with no
  form rendered behind it. Omitted.
- **Contact form** — the old site had none; appointments were booked by phone,
  and that is preserved. Every call to action dials the office directly, and
  `/contact` carries the number, address, hours, map and directions.
- **Office hours** — not published anywhere on the live site. The values in
  `lib/constants.ts` (`Mon–Fri 8:00 AM – 5:00 PM`, weekends closed) came from the
  client-supplied layout mockups and are flagged `PENDING CLIENT CONFIRMATION`.
  Set `OFFICE_HOURS` to `null` to hide them site-wide.
- **Review counts** — the live site says *5.0 / 200+ Google reviews* and
  *4.8 / 60+ Healthgrades*. The mockups say "244+". The site's own published
  numbers are used.
- **Header logo link** — on WordPress the logo linked off-site to
  toledoclinic.com. It now links to the homepage (standard behaviour); the
  Toledo Clinic profile is still linked from the footer.
- Reviews, publications, media appearances, the doctor bio and all service
  descriptions are reproduced as written on the original site.

### Assets

Every image was downloaded from the WordPress uploads directory and is served
from `/public`. No remote image domains are configured. Files were renamed to
describe their contents, e.g. `home-2-1.png` → `doctor-saudia-mushkbar-hero.png`,
`new-patient.webp` → `toledo-clinic-office-exterior.webp`.

---

## 5. Verification performed

| Check | Result |
| --- | --- |
| Production build | 24 routes, all statically prerendered |
| `eslint .` | clean |
| `tsc --noEmit` | clean |
| Internal link crawl | 19 URLs reached, **0 non-200** |
| Unique `<title>` | 17/17 |
| Unique meta description | 17/17 |
| Canonical URL | correct and self-referencing on every page |
| `<h1>` count | exactly 1 per page, at every viewport |
| Images without `alt` | none |
| Console errors | none |
| Horizontal overflow | none at 320 / 375 / 390 / 414 / 768 / 1024 / 1280 / 1440 / 1920 (162 page renders checked) |
| Redirects | all 301, all single-hop |
| `robots.txt` / `sitemap.xml` | both served, sitemap lists 17 canonical URLs |
| Structured data | 4 blocks on the homepage, 6 on inner pages |
| Google Maps embed | loads (keyless embed, no API key exposed) |

External links from the original site were re-checked; PubMed, The Hospitalist,
MDedge, AAFP, Course Hero, Toledo Clinic and Healthgrades all resolve. (Course
Hero and Healthgrades return 403 to automated requests but work in a browser.)
