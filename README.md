# DigiMyWay — marketing site

Astro + Tailwind 4 static marketing site for **DigiMyWay** (the rebranded
Hikkari device-repair marketplace). It ships a landing page plus the standard
company and legal pages that payment gateways (Cashfree) and other service
providers ask for during merchant activation.

## Pages

| Route | Purpose |
|---|---|
| `/` | Landing page — hero, features, how it works, benefits, FAQ, CTA |
| `/about` | About us — story, mission, values, company details |
| `/contact` | Contact us — support channels, business details, contact form |
| `/terms` | Terms & Conditions |
| `/privacy` | Privacy Policy |
| `/refund-policy` | Refund & Cancellation Policy |
| `/404` | Not-found page |
| `/sitemap.xml` | Generated sitemap (see `src/pages/sitemap.xml.ts`) |
| `/robots.txt` | Static robots file (`public/robots.txt`) |

## Stack

| Piece | Choice |
|---|---|
| Framework | Astro 7 (`output: 'static'`) |
| Styling | Tailwind 4 via `@tailwindcss/vite` (tokens in `src/styles/global.css`) |
| Fonts | Inter Variable (body) + Plus Jakarta Sans Variable (display), self-hosted |
| Icons | Inline SVG set in `src/components/Icon.astro` (no icon font / JS) |

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:4321
npm run build      # production build to dist/
npm run preview    # serve the production build locally
npm run check      # Astro + TypeScript type check
```

> **Note:** this environment runs npm with `NODE_ENV=production`, which skips
> `devDependencies`. If `astro check`, `typescript` or `@types/node` go missing,
> reinstall with `npm install --include=dev`.

## Project layout

```
src/
  config/site.ts          # ALL business, contact, legal & nav data lives here
  styles/global.css       # Tailwind import + design tokens (@theme) + custom utilities
  layouts/
    BaseLayout.astro      # <head>, header, <slot />, footer
    LegalLayout.astro     # shared shell for the three legal documents
  components/
    Header.astro  Footer.astro  Logo.astro  Seo.astro  PageHero.astro  Icon.astro
  pages/
    index.astro  about.astro  contact.astro
    terms.astro  privacy.astro  refund-policy.astro
    404.astro  sitemap.xml.ts
public/
  favicon.svg  robots.txt
```

## Business details

Everything the site publishes about the business is centralised in
**`src/config/site.ts`**. Update it once and every page, the footer, the contact
section and the legal documents pick it up:

- `legal.entity` — registered legal entity (`Virashu Global Private Limited`).
- `legal.address` — registered office (D12, Landmark Meadows, Mandir Hasud,
  Raipur, Chhattisgarh 492101, India).
- `contact.email` / `contact.phone` / `contact.whatsapp` — `contact@virashu.com`
  and `+91 70164 39782`.

No placeholder values are shipped: fields that were not confirmed (company
identifiers such as CIN/GSTIN, marketing statistics, support hours) have been
removed rather than filled with invented data. Add them back only once confirmed.

A site-wide banner (`src/components/DevBanner.astro`) notes that the app and its
services are still under development — remove it from `src/layouts/BaseLayout.astro`
once the product is live.

Also review the policy wording — the Terms, Privacy and Refund pages are written
to be broadly accurate for an Indian device-repair marketplace, but they are a
starting point, not legal advice. Have them reviewed before publishing.

The contact form posts to `PUBLIC_CONTACT_FORM_ENDPOINT` if set (e.g. a
Formspree/Basin endpoint); otherwise it falls back to a `mailto:` handoff. See
`.env.example`.

## Brand tokens

Colours are defined once as Tailwind 4 theme variables in
`src/styles/global.css`:

- `brand` (orange 50–900) — primary brand ramp (mirrors the app palette).
- `ink` (slate 50–950) — text and neutral surfaces.
- `canvas` / `canvas-deep` — the deep-navy hero and footer bands.
- `verified` / `azure` / `amber` — supporting accents.

## Deployment

The build output in `dist/` is plain static HTML/CSS/JS — deploy it to any static
host (Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, Nginx). Set `SITE_URL`
to the production origin so canonical URLs, `og:url` and the sitemap are correct.
