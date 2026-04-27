export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  /** Optional initials override; otherwise derived from `author`. */
  initials?: string;
};

/**
 * Placeholder testimonials — written in the voice of the brands and
 * leadership Yusra has actually worked alongside, but treat as drafts.
 * Replace with real, attributable quotes when collected.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      'Yusra is the reason our campaign calendar finally felt like a system instead of a scramble. She held three departments to the same deadline without ever raising her voice.',
    author: 'Creative Head',
    role: 'Creative Direction',
    company: 'Hybriddot',
  },
  {
    quote:
      'She owns the brand voice the way founders own their product. Two consumer launches landed on time, on tone, and the engagement numbers backed it up.',
    author: 'Brand Lead',
    role: 'Brand & Growth',
    company: 'Zlenso · Layesha Cosmetics',
  },
  {
    quote:
      'Working with Yusra meant my CMO bandwidth doubled. She translated strategy into briefs the team could actually execute, and stayed close to the metrics that mattered.',
    author: 'Chief Marketing Officer',
    role: 'CMO Office',
    company: 'Hybriddot',
  },
  {
    quote:
      'Fast, calm, and unusually clear about what to cut. Our property reels found a voice the audience trusted — inquiries climbed week over week.',
    author: 'Sales & Marketing Lead',
    role: 'Real Estate Vertical',
    company: 'Blue Group of Companies',
  },
];
