export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'Creative Coordinator',
    company: 'Hybriddot — Creative Agency',
    location: 'Lahore, Pakistan',
    start: 'Feb 2026',
    end: 'Present',
    current: true,
    bullets: [
      'Provide strategic executive support to the Creative Head — overseeing budget allocation and procurement of creative resources for seamless campaign production.',
      'Maintain a master deadline tracker across all active projects, reducing missed deadlines and improving on-time delivery rates across departments.',
      'Coordinate cross-functional flow between creative, content, videography, and digital teams — eliminating production bottlenecks.',
      'Schedule and publish content across platforms while monitoring engagement metrics and responding to community interactions.',
      'Lead trend research and competitive analysis to inform campaign ideation and keep content culturally current.',
    ],
  },
  {
    role: 'Assistant to Chief Marketing Officer (CMO)',
    company: 'Hybriddot — Creative Agency',
    location: 'Lahore, Pakistan',
    start: 'May 2025',
    end: 'Feb 2026',
    bullets: [
      'Supported the CMO in steering strategic direction for integrated marketing campaigns across digital and broadcast channels.',
      'Supervised creative, content, and digital teams to ensure consistent, on-brand messaging across all client touchpoints.',
      'Served as a key liaison between agency leadership and clients, translating goals into actionable branding and digital strategies.',
      'Analyzed campaign KPIs to identify optimization opportunities that improved ROI and audience engagement.',
      'Introduced integrated planning frameworks that streamlined interdepartmental workflows and accelerated delivery.',
    ],
  },
  {
    role: 'Social Media Manager',
    company: 'Zlenso Eyewear / Layesha Cosmetics',
    location: 'Remote',
    start: 'Nov 2025',
    end: 'Mar 2026',
    bullets: [
      'Directed social media strategy for two consumer brands simultaneously — managing content calendars, campaigns, and audience engagement.',
      'Developed platform-specific content strategies aligned with each brand’s identity, lifting organic reach and brand awareness.',
      'Reported on performance metrics and continuously refined content and targeting to maximize engagement and conversion.',
    ],
  },
  {
    role: 'Social Media Manager',
    company: 'Blue Group of Companies',
    location: 'Lahore, Pakistan',
    start: 'Jan 2025',
    end: 'May 2025',
    bullets: [
      'Managed social media for multiple business units under Blue Group, building tailored content strategies for each audience.',
      'Implemented structured content calendars to ensure consistent messaging and timely delivery across platforms.',
      'Executed targeted digital campaigns that increased reach, engagement, and lead generation across property and business verticals.',
      'Managed client communications via social platforms, improving response times and customer satisfaction.',
    ],
  },
  {
    role: 'Social Media Marketing Officer',
    company: 'Blue Properties',
    location: 'Lahore, Pakistan',
    start: 'Nov 2023',
    end: 'Dec 2024',
    bullets: [
      'Owned the official social presence of a real estate brand — maintaining consistent identity and a reliable publishing rhythm.',
      'Created visually compelling, audience-targeted content that strengthened the brand’s online presence and supported lead generation.',
      'Engaged prospective clients directly through social platforms, building trust and enhancing digital reputation.',
      'Designed and executed digital campaigns that contributed to steady follower growth and inbound inquiries.',
    ],
  },
  {
    role: 'Internship — Monitoring Desk Specialist',
    company: 'Directorate General Public Relations',
    location: 'Lahore, Pakistan',
    start: 'Apr 2022',
    end: 'Jul 2022',
    bullets: [
      'Served in the Electronic Media Wing — hands-on experience in real-time news monitoring, media analysis, and institutional comms.',
      'Built a foundational understanding of how government media strategy and large-scale narratives are structured and executed.',
    ],
  },
];

export const education = [
  {
    degree: 'Master of Science — Media & Mass Communication',
    school: 'The University of Lahore',
    years: '2020 – 2023',
  },
  {
    degree: 'Bachelor of Arts — Journalism & English Literature',
    school: 'University of the Punjab',
    years: '2018 – 2020',
  },
  {
    degree: 'Intermediate — Pre-Medical',
    school: 'Punjab Group of Colleges',
    years: '2016 – 2018',
  },
] as const;
