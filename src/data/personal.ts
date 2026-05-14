/**
 * Personal data — single source of truth.
 * Edit this file to update name, contact, headline, bio, etc.
 */

export const personal = {
  firstName: 'Yusra',
  lastName: 'Nadeem',
  fullName: 'Yusra Nadeem',
  initials: 'YN',
  roles: ['Social Media Manager', 'Digital Marketing Strategist', 'Content Leader'],
  tagline:
    'I shape brand stories, lead creative teams, and turn campaign ideas into measurable outcomes.',
  location: 'Lahore, Pakistan',
  available: true,
  availableLine: 'Open to senior marketing & creative leadership roles',
  email: 'yusrabutt04@gmail.com',
  phone: '+92 324 4480815',
  phoneRaw: '+923244480815',
  /** PDF resume — lives in /public, served at the site root. */
  resumeUrl: '/Yusra-Nadeem-Resume.pdf',
  resumeFileName: 'Yusra-Nadeem-Resume.pdf',
  bio: [
    'I’m a Creative Coordinator and Digital Marketing professional with 3+ years leading content strategy, social media campaigns, and cross-functional teams for creative agencies and real estate brands.',
    'My work sits at the intersection of brand storytelling, executive coordination, and analytics — I’ve owned campaigns from ideation to publication, tracked KPIs that actually moved the needle, and built workflows leadership trusts.',
    'I care about clarity, on-time delivery, and content that feels human. I’m happiest when a campaign closes the loop between a clear creative idea and the numbers that prove it worked.',
  ],
  /** Currently shipping — surfaced as a small "Now" pill in the hero. */
  now: {
    label: 'Currently',
    line: 'Coordinating creative production at Hybriddot — owning the master deadline tracker across 9 active campaigns.',
  },
  values: [
    {
      title: 'Strategy with intention',
      copy: 'Every campaign starts with a clear question: who are we speaking to, and what do we want them to feel, do, or remember?',
    },
    {
      title: 'Calm coordination',
      copy: 'Deadlines met, stakeholders aligned, creative shipped — without the drama. Process is a feature, not a tax.',
    },
    {
      title: 'Numbers that mean something',
      copy: 'Reach, engagement, retention — but always tied back to a real business outcome, not vanity reporting.',
    },
  ],
} as const;

export type Personal = typeof personal;
