/**
 * Brands & projects Yusra has led social media management for, grouped by era.
 * Used by the "Brands I’ve Shaped" / Projects section.
 */

export type BrandPeriod = {
  id: string;
  era: string;
  headline: string;
  description: string;
  brands: string[];
};

export const brandPeriods: BrandPeriod[] = [
  {
    id: 'now',
    era: '2026 — Now',
    headline: 'Hybriddot ecosystem',
    description:
      'Day-to-day social ownership for Hybriddot’s in-house brands and partner ventures — from agency life content to property and retail verticals.',
    brands: [
      'Life at Hybriddot',
      'BloxDot',
      'HybridDot',
      'Nine Dot Properties',
      'Dot Dukaan',
    ],
  },
  {
    id: 'consumer',
    era: '2025 — 2026',
    headline: 'Consumer brand strategy',
    description:
      'Platform-specific content strategy and full-cycle campaign execution for two consumer brands and a personal-brand client.',
    brands: ['Zlenso Eyewear', 'Layesha Cosmetics', 'Ali Khan Swati'],
  },
  {
    id: 'realestate',
    era: '2023 — 2025',
    headline: 'Real estate & lifestyle',
    description:
      'Content strategy, lead generation, and brand voice for one of Pakistan’s most active real-estate ecosystems and adjacent ventures.',
    brands: [
      'Blue World City',
      'Khilafat Cola',
      'Blue Youth',
      'Blue Properties',
      'Legends Enclave',
      'BWC Real Estate',
    ],
  },
];

/**
 * Selected case studies — two brands rendered as deeper micro-cases.
 * Numbers are placeholders Yusra can replace with audited metrics.
 */
export type CaseStudy = {
  id: string;
  brand: string;
  vertical: string;
  period: string;
  role: string;
  challenge: string;
  approach: string[];
  outcomes: { label: string; metric: string }[];
  accent?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'hybriddot',
    brand: 'Hybriddot ecosystem',
    vertical: 'Creative agency · multi-brand',
    period: '2025 — Present',
    role: 'Creative Coordinator → Asst. CMO',
    challenge:
      'Five in-house ventures, three departments, and overlapping launch windows — without a single source of truth for deadlines or brand voice.',
    approach: [
      'Built a master deadline tracker that became the agency’s daily standup artifact.',
      'Introduced a unified content brief format across creative, content, video, and digital teams.',
      'Set the cadence between CMO strategy and team execution — translating goals into shipped work.',
    ],
    outcomes: [
      { label: 'Active brands managed', metric: '5' },
      { label: 'On-time delivery rate', metric: '↑ significantly' },
      { label: 'Cross-team handoff cycles', metric: 'Streamlined' },
    ],
    accent: '#c4623d',
  },
  {
    id: 'blue-world-city',
    brand: 'Blue World City',
    vertical: 'Real estate · lifestyle',
    period: '2023 — 2024',
    role: 'Social Media Marketing Officer',
    challenge:
      'A real-estate brand fighting for trust in a saturated feed — needing a content rhythm that turned views into qualified inquiries.',
    approach: [
      'Built a content calendar with a clear voice for property reels, lifestyle posts, and community moments.',
      'Designed campaigns that moved audiences from awareness → DM → site visit.',
      'Owned community management directly, shortening response time and lifting conversion.',
    ],
    outcomes: [
      { label: 'Follower growth', metric: 'Steady, week-over-week' },
      { label: 'Inbound inquiries', metric: 'Materially up' },
      { label: 'Brand voice consistency', metric: 'Locked' },
    ],
    accent: '#3f6e8a',
  },
];

/** Disciplines — used by the secondary “What I do” strip on Projects */
export const disciplines = [
  {
    title: 'Social Media Management',
    summary: 'Calendars, campaigns, community — owned end-to-end across 14+ brands.',
  },
  {
    title: 'Content Creation',
    summary: 'On-camera and behind-the-scenes — research, shoot, edit, publish.',
  },
  {
    title: 'On-Camera & Modeling',
    summary: 'Featured talent in brand reels and DVCs across fashion, eyewear, and agency content.',
  },
  {
    title: 'Real Estate Reels',
    summary: 'Voice-led property reels and DVC scripts that move from intent to inquiry.',
  },
] as const;
