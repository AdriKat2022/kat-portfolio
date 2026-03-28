import { Mail, Phone } from 'lucide-react';
import { IoLogoGithub } from 'react-icons/io';
import type { LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';
import { FaItchIo, FaLinkedinIn } from 'react-icons/fa';

export const FullName = "Adrien SCHROEDEL";
export interface ContactMethod {
  href: string;
  icon: LucideIcon | IconType;
  labelKey: string;
  value: string;
  truncateValue?: boolean;
}

export interface SocialLink {
  key: string;
  href: string;
  label: string;
  icon: LucideIcon | IconType;
}

export const contactMethods: ContactMethod[] = [
  {
    href: 'mailto:adrien.schroedel.pro@gmail.com',
    icon: Mail,
    labelKey: 'sections.contact.email-label',
    value: 'adrien.schroedel.pro@gmail.com',
    truncateValue: true,
  },
  {
    href: 'tel:+33781565695',
    icon: Phone,
    labelKey: 'sections.contact.phone-label',
    value: '+33 7 81 56 56 95',
  },
  {
    href: 'https://linkedin.com/in/adrien-schroedel',
    icon: FaLinkedinIn,
    labelKey: 'LinkedIn',
    value: 'Adrien SCHROEDEL',
  },
  {
    href: 'https://github.com/AdriKat2022/',
    icon: IoLogoGithub,
    labelKey: 'GitHub',
    value: 'AdriKat2022',
  },
];

export const socials: SocialLink[] = [
  { icon: FaItchIo, href: 'https://adrikat-1.itch.io', label: 'Itch.io', key: 'itchio' },
];
