// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Canonical origin used for every canonical tag, og:url and the sitemap.
// Point this at the live domain (or a preview URL) via the SITE_URL env var.
const site = process.env.SITE_URL ?? 'https://www.digimyway.com';

// https://astro.build/config
export default defineConfig({
  site,
  // Fully static output: the marketing site is prerendered to plain HTML and
  // can be dropped on Vercel, Netlify, Cloudflare Pages or S3 unchanged.
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
