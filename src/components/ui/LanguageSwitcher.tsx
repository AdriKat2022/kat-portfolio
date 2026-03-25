import { useTranslation } from 'react-i18next';
import { Button } from '@components/ui/Button';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 rounded-full border border-[var(--border)] px-3 hover:border-[var(--accent-border)]"
    >
      <Languages className="h-4 w-4" />
      <span className="uppercase">{i18n.language}</span>
    </Button>
  );
}
