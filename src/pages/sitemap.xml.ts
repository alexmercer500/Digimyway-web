import type { APIRoute } from 'astro';

/** Static, hand-maintained list of public routes. */
const ROUTES = ['/', '/about', '/contact', '/terms', '/privacy', '/refund-policy'];

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('https://www.digimyway.com')).origin;

  const urls = ROUTES.map((route) => {
    const loc = new URL(route, origin).href;
    const priority = route === '/' ? '1.0' : '0.7';
    return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  }).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
