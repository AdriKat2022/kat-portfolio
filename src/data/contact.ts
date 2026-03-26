import { Mail, Phone, Link, Gamepad2Icon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const FullName = "Adrien SCHROEDEL";
export interface ContactMethod {
  href: string;
  icon: LucideIcon;
  labelKey: string;
  value: string;
  truncateValue?: boolean;
}

export interface SocialLink {
  key: string;
  href: string;
  label: string;
  icon: LucideIcon;
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
    icon: Link,
    labelKey: 'LinkedIn',
    value: 'Adrien SCHROEDEL',
  },
  {
    href: 'https://github.com/AdriKat2022/',
    icon: Link,
    labelKey: 'GitHub',
    value: 'AdriKat2022',
  },
];

export const socials: SocialLink[] = [
  { icon: Gamepad2Icon, href: 'https://adrikat-1.itch.io', label: 'Itch.io', key: 'itchio' },
];
