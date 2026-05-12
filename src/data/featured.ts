/**
 * Featured reels & on-camera work.
 *
 * Drop a 1080×1920 (9:16) video file into /public/videos and set
 * `videoSrc` on the matching entry to go live. If `videoSrc` is empty,
 * the card renders as a "Coming soon" placeholder and is not clickable.
 */

export type FeaturedReel = {
  id: string;
  brand: string;
  title: string;
  year: string;
  role: 'Featured talent' | 'Production lead' | 'Talent + Strategy';
  /** Path under /public, e.g. '/videos/zlenso-2026-a.mp4'. 9:16, 1080×1920. */
  videoSrc?: string;
  /** Optional external link (Instagram, YouTube, etc.) — currently unused. */
  href?: string;
  /** Optional accent override; used for the placeholder gradient when no video. */
  accent?: string;
};

export const featuredReels: FeaturedReel[] = [
  {
    id: 'zlenso-2026-a',
    brand: 'Zlenso',
    title: 'Eyewear campaign — primary cut',
    year: '2026',
    role: 'Featured talent',
    accent: '#e88a64',
    videoSrc: '/zlenso-2026-a.MP4'
  },
  {
    id: 'zlenso-2026-b',
    brand: 'Zlenso',
    title: 'Eyewear campaign — alt cut',
    year: '2026',
    role: 'Featured talent',
    accent: '#c4623d',
    videoSrc: '/Zlenso1.MP4'
  },
  {
    id: 'hybriddot-dvc-2026',
    brand: 'HybridDot',
    title: 'Brand DVC — agency identity',
    year: '2026',
    role: 'Talent + Strategy',
    accent: '#7d6f63',
    videoSrc: '/0512.MP4'
  },
  {
    id: 'zlenso-2025',
    brand: 'Zlenso',
    title: 'Launch reel',
    year: '2025',
    role: 'Featured talent',
    accent: '#a36b48',
    videoSrc: '/Zlenso2.MP4'
  },
  {
    id: 'sangat-2024-a',
    brand: 'Sangat Attire',
    title: 'Festive collection — feature 1',
    year: '2024',
    role: 'Featured talent',
    accent: '#8a5a8a',
    videoSrc: '/IMG_0532.MP4'
  },
  {
    id: 'sangat-2024-b',
    brand: 'Sangat Attire',
    title: 'Festive collection — feature 2',
    year: '2024',
    role: 'Featured talent',
    accent: '#6f4f7d',
    videoSrc: '/IMG_0533.MP4'
  },
  {
    id: 'sangat-2024-c',
    brand: 'Sangat Attire',
    title: 'Festive collection — feature 3',
    year: '2024',
    role: 'Featured talent',
    accent: '#5a3f6e',
    videoSrc: '/IMG_0534.MP4'
  },
  {
    id: 'blue-youth-2024',
    brand: 'Blue Youth',
    title: 'Lifestyle DVC',
    year: '2024',
    role: 'Featured talent',
    accent: '#3f6e8a',
    videoSrc: '/IMG_1548.MP4'
  },
];
