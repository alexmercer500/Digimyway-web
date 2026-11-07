/**
 * Single source of truth for every business, brand and contact detail used
 * across the site (header, footer, contact page, legal pages, SEO).
 *
 * Only publish facts that are confirmed. If a value is not known yet, leave the
 * field out rather than shipping a placeholder — payment-gateway (Cashfree) and
 * other service activations are checked against what is published here.
 */
export const site = {
  /** Product / brand name shown in the UI. */
  name: 'DigiMyWay',
  /** Short tagline used in the hero and metadata. */
  tagline: 'Compare, book and track device repairs — all in one place.',
  /** Longer one-line description used for SEO defaults. */
  description:
    'DigiMyWay connects you with verified, nearby repair technicians who bid live on your device repair. Compare real quotes, pay only after you verify the work, and track every repair end to end.',

  /** Canonical origin (kept in sync with astro.config SITE_URL). */
  url: 'https://www.digimyway.com',

  /**
   * Registered legal entity behind the brand. DigiMyWay is a product of the
   * parent company below; it appears in the footer and in the governing-law
   * clauses of the Terms, Privacy and Refund policies.
   */
  legal: {
    entity: 'Virashu Global Private Limited',
    address: {
      line1: 'D12, Landmark Meadows, Mandir Hasud',
      locality: 'Raipur',
      region: 'Chhattisgarh',
      postalCode: '492101',
      country: 'India',
    },
  },

  /** Support channels — surfaced on the contact page and in the footer. */
  contact: {
    email: 'contact@virashu.com',
    phone: '+91 70164 39782',
    whatsapp: '+91 70164 39782',
  },

  /** Footer/legal document last-updated stamp. */
  legalUpdated: '1 November 2026',
} as const;

export type Site = typeof site;

/** Primary navigation shown in the header. */
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

/** Legal documents linked from the footer and cross-linked from each other. */
export const legalLinks = [
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Refund & Cancellation', href: '/refund-policy' },
] as const;
