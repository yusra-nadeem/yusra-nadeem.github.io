import type { LucideIcon } from 'lucide-react';
import {
  Target,
  Users,
  Sparkles,
  LineChart,
  Megaphone,
  Calendar,
  Camera,
  Video,
  PenLine,
  Search,
  Compass,
  ShieldCheck,
} from 'lucide-react';

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Strategic Marketing',
    icon: Target,
    items: [
      'Digital & Social Media Marketing',
      'Integrated Campaign Planning',
      'Brand Development & Positioning',
      'Market & Competitor Research',
    ],
  },
  {
    title: 'Leadership & Coordination',
    icon: Users,
    items: [
      'Cross-Functional Team Leadership',
      'Project & Deadline Management',
      'Executive & CMO-Level Support',
      'Client Communication & Relations',
    ],
  },
  {
    title: 'Content & Creative',
    icon: Sparkles,
    items: [
      'End-to-End Content Production',
      'Campaign Ideation & Execution',
      'Video / Reel Production Coordination',
      'Storytelling & Brand Voice',
    ],
  },
  {
    title: 'Analytics & Reporting',
    icon: LineChart,
    items: [
      'KPI Tracking & Performance Analysis',
      'Audience Insights & Engagement Metrics',
      'Data-Driven Optimization',
      'Reporting for Senior Leadership',
    ],
  },
];

export const tools = [
  'Meta Business Suite',
  'Canva',
  'CapCut',
  'Microsoft Office',
  'Instagram',
  'Facebook',
  'TikTok',
  'LinkedIn',
] as const;

/** Decorative iconography for the “How I work” strip */
export const workMoves: { label: string; icon: LucideIcon }[] = [
  { label: 'Brief & research', icon: Search },
  { label: 'Strategy', icon: Compass },
  { label: 'Calendar', icon: Calendar },
  { label: 'Production', icon: Camera },
  { label: 'Edit & cut', icon: Video },
  { label: 'Copy & voice', icon: PenLine },
  { label: 'Publish', icon: Megaphone },
  { label: 'Review & report', icon: ShieldCheck },
];
