<div align="center">

<br />

# Yusra Nadeem

#### Creative Coordinator&nbsp;&nbsp;·&nbsp;&nbsp;Digital Marketing Strategist&nbsp;&nbsp;·&nbsp;&nbsp;Content Leader

<br />

*A 2026 portfolio for a creative who shapes brand stories,*<br />
*leads campaigns, and ships work that performs.*

<br />

[**Live site**](https://yusra-nadeem.github.io)&nbsp;&nbsp;·&nbsp;&nbsp;
[Resume](./public/Yusra-Nadeem-Resume.pdf)&nbsp;&nbsp;·&nbsp;&nbsp;
[LinkedIn](https://www.linkedin.com/in/yusra-nadeem-b05808247/)&nbsp;&nbsp;·&nbsp;&nbsp;
[Instagram](https://www.instagram.com/lifeofyuss)

<br />

![React](https://img.shields.io/badge/React-19-0d1526?style=flat-square&labelColor=14110f&color=c4623d)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-0d1526?style=flat-square&labelColor=14110f&color=c4623d)
![Vite](https://img.shields.io/badge/Vite-6-0d1526?style=flat-square&labelColor=14110f&color=c4623d)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-0d1526?style=flat-square&labelColor=14110f&color=c4623d)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-0d1526?style=flat-square&labelColor=14110f&color=c4623d)

<br />

---

</div>

## About

Lahore-based **Yusra Nadeem** has spent **3+ years** leading content strategy, social campaigns,
and cross-functional creative teams across **14+ brands** — from Pakistan's biggest real-estate
ecosystems to consumer fashion and a creative agency's in-house ventures.

This site is the long-form proof: timeline, cases, on-camera work, the way she thinks about
process, and how to reach her.

> *"I build the bridge between creative ambition and the calm, data-led execution that ships it."*

<br />

---

## What's inside

<table>
<tr>
<td width="180"><strong>Hero</strong></td>
<td>Cinematic per-character headline reveal, magnetic CTAs, a live <em>"Now"</em> pill, brand marquee, hero stats card.</td>
</tr>
<tr>
<td><strong>About</strong></td>
<td>Editorial portrait frame, pull-quote, three values, paired contact &amp; education card.</td>
</tr>
<tr>
<td><strong>Experience</strong></td>
<td>Vertical timeline with role, company, location, dates, a pulsing <em>Now</em> badge on the active role, and a one-click resume download.</td>
</tr>
<tr>
<td><strong>Brands</strong></td>
<td>Three-era card grid covering 14+ brands, two flagship case studies (challenge → approach → outcomes), and a disciplines strip.</td>
</tr>
<tr>
<td><strong>Featured</strong></td>
<td>On-camera reels in true 9:16, with year &amp; brand filter chips and a click-to-play lightbox modal (prev / next, ESC, focus-trapped).</td>
</tr>
<tr>
<td><strong>Skills</strong></td>
<td>Four expertise cards with cursor-aware sheen, an eight-step <em>How I work</em> process, and a tools rail.</td>
</tr>
<tr>
<td><strong>Testimonials</strong></td>
<td>Quote cards with gradient avatar initials, role, and company.</td>
</tr>
<tr>
<td><strong>Contact</strong></td>
<td>Mail-app-driven form (no backend), copy-email button, direct phone link, full social rail.</td>
</tr>
</table>

<br />

---

## Design language

- **Type** &mdash; *Fraunces* for display + italic accents, *Inter* (with `ss01` &amp; `cv11`) for body
- **Palette** &mdash; warm copper `#c4623d` on cream / deep ember; auto dark mode with system preference + persistent toggle
- **Motion** &mdash; Framer Motion entrance reveals, magnetic buttons, cursor-following sheen, top-of-page scroll progress
- **Layout** &mdash; fluid `clamp()` typography, custom breakpoints from **360 px** (xs) through **1760 px** (3xl) to **2080 px** (4xl)
- **Accessibility** &mdash; skip-link, focus rings, full keyboard nav, `prefers-reduced-motion` honored, semantic landmarks

<br />

---

## Performance

```text
Bundle (gzipped)
─────────────────────────────────
  app · index               ~19 KB
  framer-motion             ~45 KB
  react + react-dom         ~64 KB
  css                       ~11 KB
─────────────────────────────────
  Total                    ~139 KB
```

- Lazy-loaded sections below the fold
- Manual chunk split: vendor / motion / app
- AVIF → WebP → JPG `<picture>` fallback cascade for the portrait
- `preconnect` + `dns-prefetch` to Google Fonts
- All entrance animations short-circuit under `prefers-reduced-motion`

<br />

---

## SEO

- Complete `<meta>` set &mdash; title, description, keywords, robots, geo, hreflang
- Open Graph + Twitter card with a custom 1200&times;630 cover
- **JSON-LD** `@graph`: `Person`, `WebSite`, `ProfilePage`, `BreadcrumbList` &mdash; primed for Google's Knowledge Panel
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, `apple-touch-icon`, themed `theme-color`
- `<noscript>` fallback exposes bio + brand list + contact to crawlers that don't run JS

<br />

---

## Project structure

```text
yusra-nadeem/
│
├─ public/                                static, served at site root
│  ├─ favicon.svg                         multi-layer 'yn' monogram
│  ├─ og-image.svg                        1200×630 social cover
│  ├─ Yusra-Nadeem-Resume.pdf
│  ├─ robots.txt  ·  sitemap.xml  ·  manifest.webmanifest
│  └─ 404.html                            SPA fallback for GitHub Pages
│
├─ src/
│  ├─ components/                         Header · Footer · ThemeToggle ·
│  │                                       BrandMark · BrandMarquee · Magnetic ·
│  │                                       SplitText · ScrollProgress · Lightbox ·
│  │                                       SectionHeading · Reveal · ScrollPrompt
│  │
│  ├─ sections/                           Hero · About · Experience · Projects ·
│  │                                       Featured · Skills · Testimonials · Contact
│  │
│  ├─ data/                               single source of truth for all copy
│  │                                       personal · experience · projects ·
│  │                                       featured · skills · socials · testimonials
│  │
│  ├─ hooks/                              useTheme · useReveal · usePrefersReducedMotion
│  ├─ lib/                                sheen helper
│  ├─ App.tsx  ·  main.tsx  ·  index.css
│
├─ index.html                             meta + JSON-LD
├─ HELPME.md                              plain-English content guide
└─ vite.config.ts  ·  tsconfig.*.json  ·  package.json
```

<br />

---

## Updating content

All editable copy lives in **[`src/data/`](./src/data)** &mdash; every section reads from there.

> **For a friendly walk-through**, open **[HELPME.md](./HELPME.md)** &mdash;
> add a new job, drop in a reel video, swap the portrait, change the "Now" status,
> update the resume, all explained in plain English.

<br />

---

<div align="center">

<sub>Designed and built for Yusra Nadeem &middot; 2026</sub><br />
<sub>Made with care in Lahore.</sub>

</div>
