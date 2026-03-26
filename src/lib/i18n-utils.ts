import type { LocalizedContent } from '@/types/project';

export type SupportedLocale = 'en' | 'fr';

export function resolveLocale(language: string): SupportedLocale {
  return language === 'fr' ? 'fr' : 'en';
}

export function getLocalizedValue(content: LocalizedContent, language: string): string {
  const locale = resolveLocale(language);
  return content[locale] ?? content.en;
}

export function getOptionalLocalizedValue(
  content: LocalizedContent | null | undefined,
  language: string
): string | undefined {
  if (!content) {
    return undefined;
  }

  return getLocalizedValue(content, language);
}