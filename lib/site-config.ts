export const siteConfig = {
  name: "Fortis Ready",
  tagline: "Get audit-ready before you pay for the audit.",
  description:
    "Pre-audit engineering partner for serious EVM startups — fixed-scope readiness reviews, not theater.",
  email: "info@isuru.dev",
  payment: {
    network: "Base",
    currency: "USDC",
    address: "0x2415e94be90b4785f4b79f49db067c89925cc1ca",
  },
  sku1: {
    name: "Focused Contract Readiness Review",
    priceUsd: 299,
    altPrice: "300 USDC on Base",
    turnaround: "48–72h",
    scope: "≤ ~300 nSLOC / 1 contract",
  },
  sku2: {
    name: "Audit Prep Sprint",
    priceRange: "$1,500–$3,000",
  },
  // Default toward the production domain; can be overridden at deploy time.
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://fortisready.com",
} as const;

export type SiteConfig = typeof siteConfig;

