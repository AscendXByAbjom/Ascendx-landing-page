/**
 * Site-wide configuration. Every CTA destination lives here so swapping the
 * placeholders for real URLs (app signup, login, demo booking…) is one edit.
 */

/**
 * STAGING ONLY: shows the real partner logos (Microsoft, Deloitte…) and the
 * Unilever testimonial exactly as in the design. Set to `false` before going
 * live unless written permission to use those brands has been obtained.
 */
export const SHOW_REAL_BRANDS = true;

export const site = {
  name: "AscendX Career Platform",
  shortName: "AscendX",
  description:
    "AscendX Career Platform is the all-in-one AI-powered platform that helps you explore career options, build in-demand skills, find the right opportunities and land your dream job.",
  url: "https://ascendxcareer.ai", // the marketing site is served here; the web app lives on app.ascendxcareer.ai
  contactEmail: "info@ascendxcareer.ai",
};

/** The AscendX web app. The bare domain redirects to its welcome screen, where people log in or sign up. */
export const appUrl = "https://app.ascendxcareer.ai";

/** Backend API, used by the contact form. Override per environment with NEXT_PUBLIC_API_URL. */
export const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.ascendxcareer.ai";

export const nav = [
  { label: "Home", href: "/" },
  { label: "Candidates", href: "/candidates" },
  { label: "Employers", href: "/employers" },
  { label: "Job Board", href: "/job-board" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
] as const;

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "Candidates", href: "/candidates" },
  { label: "Employers", href: "/employers" },
  { label: "Job Board", href: "/job-board" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalNav = [
  { label: "Privacy Policy", href: `${appUrl}/privacy` },
  { label: "Terms of Service", href: `${appUrl}/terms` },
  { label: "Community Guidelines", href: `${appUrl}/community-guidelines` },
  { label: "Cookie Settings", href: "#" },
] as const;

/** Placeholder destinations: replace "#" with real URLs when available. */
export const cta = {
  login: appUrl,
  getStarted: appUrl,
  startJourney: appUrl,
  postJob: "#",
  bookDemo: "#",
  bookSession: "#",
  startLearning: appUrl,
  viewProjects: "#",
  startNow: appUrl,
  apply: appUrl,
  // Internal destinations
  candidates: "/candidates",
  hireTalent: "/employers",
  aboutUs: "/about",
  learnMore: "/about",
  exploreFeatures: "/job-board",
  exploreCareers: "/job-board",
  exploreEmployerPlatform: "/pricing",
  contact: "/contact",
} as const;

export const socials = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com/ascendxcareer", icon: "instagram" },
  { label: "YouTube", href: "#", icon: "youtube" },
  { label: "TikTok", href: "https://tiktok.com/@ascendxcareer", icon: "tiktok" },
] as const;
