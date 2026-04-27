import type { ComponentType, SVGProps } from 'react';
import { Mail, Phone } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from '../components/BrandIcons';

export type SocialIcon = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

export type SocialLink = {
  label: string;
  href: string;
  display: string;
  icon: SocialIcon;
};

export const socials: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yusra-nadeem-b05808247/',
    display: 'Yusra Nadeem',
    icon: LinkedinIcon,
  },
  {
    label: 'Email',
    href: 'mailto:yusrabutt04@gmail.com',
    display: 'yusrabutt04@gmail.com',
    icon: Mail as unknown as SocialIcon,
  },
  {
    label: 'Phone',
    href: 'tel:+923244480815',
    display: '+92 324 4480815',
    icon: Phone as unknown as SocialIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/lifeofyuss',
    display: '@lifeofyuss',
    icon: InstagramIcon,
  },
];
