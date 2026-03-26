import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function openExternalLink(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function enforceExternalLinks(html: string): string {
  return html.replace(/<a\b([^>]*)>/gi, (_match, attrs: string) => {
    const hasTarget = /\btarget\s*=\s*['"][^'"]*['"]/i.test(attrs);
    const hasRel = /\brel\s*=\s*['"][^'"]*['"]/i.test(attrs);

    let nextAttrs = attrs;

    if (!hasTarget) {
      nextAttrs += ' target="_blank"';
    } else {
      nextAttrs = nextAttrs.replace(/\btarget\s*=\s*['"][^'"]*['"]/i, 'target="_blank"');
    }

    if (!hasRel) {
      nextAttrs += ' rel="noopener noreferrer"';
    } else {
      nextAttrs = nextAttrs.replace(/\brel\s*=\s*['"][^'"]*['"]/i, 'rel="noopener noreferrer"');
    }

    return `<a${nextAttrs}>`;
  });
}
