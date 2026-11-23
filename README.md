# AscendX Career Platform: marketing site

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Lenis smooth scroll.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run typecheck
```

## Pages
`/` Home · `/candidates` · `/employers` · `/job-board` (coming soon) · `/pricing` · `/about` · `/contact`

`/individuals` and `/features` permanently redirect to `/candidates` and `/job-board` (`next.config.ts`).
The original feature showcase is kept, unrouted, in `app/_feature-showcase/` for when it returns.

Home, Individuals, Employers and Features follow the reference designs and the
copy document word-for-word. **Pricing, About and Contact use placeholder copy**
(marked at the top of `content/pricing.ts`, `content/about.ts` and
`app/contact/page.tsx`).

## Where things live
| What | Where |
| --- | --- |
| All page copy | `content/*.ts` |
| CTA links, nav, socials, contact email | `lib/site.ts` |
| Logo | `components/layout/Logo.tsx` (inline, recolours automatically); static SVGs in `public/brand/` |
| Ireti (AI) mark | `components/ui/IretiMark.tsx`; static `public/brand/ireti.svg` |
| Favicon | `app/icon.svg`, `app/favicon.ico`, `app/apple-icon.png` (the X from the logo) |
| Platform stats | `content/stats.ts` (used on Home, Candidates and About) |
| Photos | `public/images/` (swap a file to replace it); credits in `public/images/CREDITS.md` |
| Design tokens (colours, fonts, type scale, motion CSS) | `app/globals.css` |
| Live product mockups (phone, dashboard, chat…) | `components/mockups/` |
| Scroll motion | `components/motion/` (`SmoothScroll`, `Reveal`, `CountUp`) |

## Before going live
- [ ] Set `SHOW_REAL_BRANDS = false` in `lib/site.ts` unless you have permission to
      show the partner logos (Microsoft, Deloitte, NHS…) and the Unilever testimonial.
- [ ] Replace the `"#"` placeholder CTAs in `lib/site.ts` (Get Started, Log In, Post a Job, Book a Demo…).
- [ ] Set `site.url` and `site.contactEmail` in `lib/site.ts`.
- [ ] Confirm pricing, About copy and the Contact form destination (it validates client-side but has no backend yet).
- [ ] Swap stock photography for brand photography.
- [ ] "Watch Video" buttons were intentionally left out — add them back when a video exists.

## Motion notes
Animations are progressive: without JavaScript, or with *reduce motion* enabled,
all content renders in its final state. Reveals are CSS transitions triggered by
an IntersectionObserver (`[data-in]`); smooth scrolling uses Lenis. There is no
parallax.
