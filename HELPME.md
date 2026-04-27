# How to Update Your Portfolio

Hi Yusra! This guide explains how to keep your portfolio up to date — adding a new job, dropping in a video, changing your photo, anything.

**You don't need to know how to code.** Just follow the steps. Each section tells you which file to open, what to change, and what to save.

---

## Before you start

Almost everything you'll edit lives in one folder:

```
src/data/
```

Inside that folder are simple text files. You change words inside quotes. That's it.

**A few rules before you touch anything:**

1. Always wrap text in **quotes** like `'this'` or `"this"`. Use straight quotes, not curly ones.
2. Keep every **comma** at the end of lines.
3. Keep every **bracket** `[ ]` and **brace** `{ }` exactly where it is.
4. If something breaks after a save, press **Ctrl+Z** (Cmd+Z on Mac) to undo and try again.
5. Save the file after every change.

---

## Table of Contents

1. [Add a new job](#1-add-a-new-job)
2. [Update an existing job](#2-update-an-existing-job)
3. [Add a new brand to your portfolio](#3-add-a-new-brand-to-your-portfolio)
4. [Add or upload a new reel video](#4-add-or-upload-a-new-reel-video)
5. [Add your portrait photo](#5-add-your-portrait-photo)
6. [Update your bio](#6-update-your-bio)
7. [Change your "Currently working on…" line](#7-change-your-currently-working-on-line)
8. [Update your resume PDF](#8-update-your-resume-pdf)
9. [Update social links (LinkedIn, Instagram, etc.)](#9-update-social-links)
10. [Add or edit a testimonial](#10-add-or-edit-a-testimonial)
11. [Add a new case study](#11-add-a-new-case-study)
12. [Update your education](#12-update-your-education)
13. [Update your skills, tools, or process](#13-update-your-skills-tools-or-process)
14. [Change your contact info (email, phone)](#14-change-your-contact-info)
15. [How to preview your changes](#15-how-to-preview-your-changes)
16. [Common mistakes to avoid](#16-common-mistakes-to-avoid)

---

## 1. Add a new job

**File to open:** `src/data/experience.ts`

Find the line that says:
```
export const experience: ExperienceItem[] = [
```

Right under that line, paste this block (newest jobs go at the top):

```ts
{
  role: 'Your new job title',
  company: 'Your new company name',
  location: 'City, Country',
  start: 'Month Year',
  end: 'Present',
  current: true,
  bullets: [
    'First thing you did or owned in this role.',
    'Second thing you did or owned.',
    'Third thing you did or owned.',
    'Add as many bullets as you want.',
  ],
},
```

**Tips:**
- If the job is your **current one**, keep `end: 'Present'` and `current: true`.
- If the job has **ended**, change `end:` to the actual end month/year (e.g. `'Nov 2025'`) and **delete the `current: true` line**.
- Save the file.

---

## 2. Update an existing job

**File:** `src/data/experience.ts`

Scroll to the job you want to change. Edit any of these fields between the quotes:

- `role:` &mdash; your job title
- `company:` &mdash; the company name
- `location:` &mdash; city / country
- `start:` &mdash; month + year you started
- `end:` &mdash; month + year you ended, or `'Present'`
- `bullets:` &mdash; the list of things you did

**To add or remove a bullet point**, add a new line inside the `bullets: [` block (always wrap in quotes, end with a comma):

```ts
bullets: [
  'Existing bullet.',
  'Your new bullet here.',  // ← added
],
```

Save. Done.

---

## 3. Add a new brand to your portfolio

You manage brands in two places:

### (a) The era cards (the three brand-period cards on the Brands section)

**File:** `src/data/projects.ts`

Find `export const brandPeriods` near the top. There are three eras:

- `id: 'now'` &mdash; Hybriddot ecosystem (2026)
- `id: 'consumer'` &mdash; Consumer brands (2025–2026)
- `id: 'realestate'` &mdash; Real estate / lifestyle (2023–2025)

Pick the era your new brand belongs to. Inside that era's `brands: [...]` list, add the brand name on its own line wrapped in quotes:

```ts
brands: [
  'Existing Brand',
  'Existing Brand',
  'Your New Brand',  // ← added
],
```

Save.

### (b) The hero brand marquee (the scrolling brand strip at the top of the page)

**File:** `src/sections/Hero.tsx`

Find this list near the top of the file:

```ts
const HERO_BRANDS = [
  'Hybriddot',
  ...
] as const;
```

Add your brand to the list (wrap in quotes, end with comma):

```ts
const HERO_BRANDS = [
  'Hybriddot',
  'Your New Brand',  // ← added
  ...
] as const;
```

Save.

---

## 4. Add or upload a new reel video

You'll do **two things**: drop the video file into the right folder, then point the website to it.

### Step 1 — Prepare the video

- Format: **MP4** (H.264 codec)
- Aspect ratio: **9:16** (1080 × 1920 pixels — vertical / portrait)
- Keep the file under **20 MB** if possible (compress it before uploading)
- Pick a simple, lowercase filename without spaces, e.g. `zlenso-2026.mp4`

### Step 2 — Drop the file into the right folder

Place the video here:

```
public/videos/your-video-name.mp4
```

If the `videos` folder doesn't exist yet, create it inside `public`.

### Step 3 — Tell the site to use it

**File:** `src/data/featured.ts`

Find the reel entry that matches (e.g. `id: 'zlenso-2026-a'`). Add or update its `videoSrc` line. The path **must start with `/videos/`** (NOT `/public/videos/`):

```ts
{
  id: 'zlenso-2026-a',
  brand: 'Zlenso',
  title: 'Eyewear campaign — primary cut',
  year: '2026',
  role: 'Featured talent',
  accent: '#e88a64',
  videoSrc: '/videos/zlenso-2026.mp4',  // ← added or updated
},
```

Save. The card on the site will switch from "Coming soon" to a playable video automatically.

### To add a brand-new reel (not yet listed at all)

In `src/data/featured.ts`, paste a new block inside the `featuredReels: [` list:

```ts
{
  id: 'unique-id-no-spaces',         // make this up — must be unique
  brand: 'Brand name',
  title: 'Short campaign description',
  year: '2026',
  role: 'Featured talent',           // or 'Production lead' or 'Talent + Strategy'
  accent: '#e88a64',                 // optional warm color used as a tint
  videoSrc: '/videos/your-file.mp4', // skip this line if no video yet
},
```

Save.

---

## 5. Add your portrait photo

The site is ready to display your photo as soon as you drop it in.

1. Save your portrait. Recommended:
   - Aspect ratio **4:5** (e.g. 800 × 1000 pixels)
   - Under 200 KB if possible
   - JPG, WebP, or AVIF format
2. Name the file exactly `portrait.jpg` (or `.webp` or `.avif`).
3. Place it in the `public/` folder (root of the project).

That's it. Refresh the site and you'll see it.

**Pro tip:** If you have multiple formats, drop all of them in:

```
public/portrait.avif
public/portrait.webp
public/portrait.jpg
```

The site will automatically pick the smallest one your visitor's browser supports.

---

## 6. Update your bio

**File:** `src/data/personal.ts`

Find the `bio:` block. Each entry in the list is one paragraph:

```ts
bio: [
  'First paragraph of your bio.',
  'Second paragraph.',
  'Third paragraph.',
],
```

You can:
- **Edit** any paragraph &mdash; just change the text inside the quotes.
- **Add** another paragraph &mdash; add a new line in quotes, ending with a comma.
- **Remove** a paragraph &mdash; delete that line completely.

Save.

---

## 7. Change your "Currently working on…" line

**File:** `src/data/personal.ts`

Find the `now:` block:

```ts
now: {
  label: 'Currently',
  line: 'Coordinating creative production at Hybriddot — owning the master deadline tracker across 9 active campaigns.',
},
```

Edit `line:` to whatever you're focused on right now. Keep `label:` as `'Currently'` (or change it to something like `'This week'` or `'Right now'` if you want).

Save. The little pulsing pill in the hero will update.

---

## 8. Update your resume PDF

### Option A — Same filename

The simplest way: just **replace the existing file** in `public/`:

1. Delete the old `public/Yusra-Nadeem-Resume.pdf`.
2. Save your new resume in `public/` with the **same exact name**: `Yusra-Nadeem-Resume.pdf`.
3. Done.

### Option B — Different filename

If your new resume has a different name (e.g. `Yusra-Nadeem-Resume-2027.pdf`):

1. Drop the new file into `public/`.
2. Open `src/data/personal.ts`.
3. Update both lines:

```ts
resumeUrl: '/Your-New-Filename.pdf',
resumeFileName: 'Your-New-Filename.pdf',
```

Save.

---

## 9. Update social links

**File:** `src/data/socials.ts`

Each social entry has three fields:

```ts
{
  label: 'LinkedIn',                 // small label shown next to the icon in Contact
  href: 'https://linkedin.com/...',  // the actual URL it opens
  display: 'Yusra Nadeem',           // text shown in the Footer
  icon: LinkedinIcon,                // don't change this
},
```

To **change a link**, edit `href:`.
To **change what the Footer shows**, edit `display:`.

Save.

---

## 10. Add or edit a testimonial

**File:** `src/data/testimonials.ts`

Each testimonial is a block like this:

```ts
{
  quote: 'The kind words your client / colleague / boss said about you.',
  author: 'Their name (or just role title if private)',
  role: 'Their job title',
  company: 'Their company',
},
```

To **add** one, paste a new block inside the `testimonials: [` list (with a comma at the end).
To **edit** one, change the text in any field.
To **delete** one, remove the whole block (from the opening `{` to the closing `},`).

Save.

---

## 11. Add a new case study

**File:** `src/data/projects.ts`

Find `export const caseStudies`. Add a new block in the list:

```ts
{
  id: 'unique-id',
  brand: 'Brand or project name',
  vertical: 'Industry · short tag',
  period: '2025 — 2026',
  role: 'Your role on this engagement',
  challenge: 'What problem the brand was facing.',
  approach: [
    'First thing you did to solve it.',
    'Second thing.',
    'Third thing.',
  ],
  outcomes: [
    { label: 'Reach', metric: 'Up 3×' },
    { label: 'Engagement', metric: 'Doubled' },
    { label: 'Inquiries', metric: 'Materially up' },
  ],
  accent: '#c4623d',  // optional warm color used as the card tint
},
```

Save.

---

## 12. Update your education

**File:** `src/data/experience.ts`

Find `export const education`. Each entry looks like:

```ts
{
  degree: 'Master of Science — Media & Mass Communication',
  school: 'The University of Lahore',
  years: '2020 – 2023',
},
```

Add, edit, or remove entries the same way as jobs. Save.

---

## 13. Update your skills, tools, or process

**File:** `src/data/skills.ts`

This file has three lists:

- **`skillGroups`** &mdash; the four expertise category cards (Strategic Marketing, Leadership, Content, Analytics)
- **`tools`** &mdash; the tag pills at the bottom of the Skills section
- **`workMoves`** &mdash; the eight-step "How I work" strip

To **add a new skill** to a category, find the category and add a new line in its `items: [` list:

```ts
items: [
  'Existing skill',
  'Your new skill',  // ← added
],
```

To **add a tool**, find `tools = [` and add it in quotes with a comma:

```ts
'Existing tool',
'Your new tool',  // ← added
```

Save.

---

## 14. Change your contact info

**File:** `src/data/personal.ts`

Find these lines and edit them:

```ts
email: 'yusrabutt04@gmail.com',
phone: '+92 324 4480815',
phoneRaw: '+923244480815',   // same number with no spaces — used for the "tap to call" link
location: 'Lahore, Pakistan',
```

Save.

---

## 15. How to preview your changes

After you save any change, you can see it live on your computer.

1. Open the **Terminal** (or **Command Prompt** on Windows) inside the project folder.
2. Type this and press Enter:
   ```
   npm run dev
   ```
3. The terminal will show a URL like `http://localhost:5173/`.
4. Open that link in your browser. Every save you make will update the page automatically.
5. To stop the preview, press **Ctrl+C** in the terminal.

If `npm run dev` ever fails, ask the developer who built the site for help.

---

## 16. Common mistakes to avoid

**Things NOT to do**

- **Don't delete the comma** at the end of a line. Always end items with `,`.
- **Don't delete brackets** `[`, `]`, `{`, or `}`. They tell the file where each section starts and ends.
- **Don't use curly quotes** — only straight quotes `'` and `"`. If you copy from Word or Notes, paste into the file as plain text first.
- **Don't change file names** in the `data` folder (`personal.ts`, `experience.ts`, etc.). Only edit what's *inside* them.

**Safe habits**

- If something breaks after a save, **press Ctrl+Z** (Cmd+Z on Mac) repeatedly until the file looks like it did before.
- When in doubt, **save and refresh the preview** to see if it still works.
- Make one change at a time. If 5 things break at once, it's harder to find which one caused it.

---

## Final tip

You don't need to memorize any of this. Bookmark this file and come back to the section you need. Every routine update — new job, new reel, new testimonial — has a step-by-step here.

If something feels confusing or doesn't work after following the steps, message the developer and show them:
1. **Which file** you were editing
2. **What you changed**
3. A **screenshot** of any error message

That's all the information needed to get you unstuck quickly.

— Made with care for Yusra Nadeem · 2026.
