import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, Gamepad2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export function Seeking() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: Gamepad2,
      titleKey: 'sections.seeking.position-title',
      valueKey: 'sections.seeking.position-subtitle',
    },
    {
      icon: Calendar,
      titleKey: 'sections.seeking.availability-title',
      valueKey: 'sections.seeking.date',
    },
    {
      icon: MapPin,
      titleKey: 'sections.seeking.location-title',
      valueKey: 'sections.seeking.locations',
    },
  ] as const;

  const renderSeekingCard = (
    Icon: LucideIcon,
    titleKey: string,
    valueKey: string
  ) => (
    <div className="surface-card surface-card-hover flex flex-col items-center p-8">
      <div className="icon-chip mb-6">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-theme-strong mb-2 text-xl font-bold">
        {t(titleKey)}
      </h3>
      <p className="mt-auto text-right">
        {t(valueKey)}
      </p>
    </div>
  );

  return (
    <section id="seeking" className="border-t border-[var(--border)] bg-[var(--bg)] py-24">
      <div className="container mx-auto px-4">
        <div className="section-shell flex flex-col items-center px-6 py-12 text-center md:px-10">
          <h2 className="text-theme-strong mb-12 text-3xl font-bold text-glow md:text-4xl">
            {t('sections.titles.seeking')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {cards.map((card) => (
              <div key={card.titleKey}>
                {renderSeekingCard(card.icon, card.titleKey, card.valueKey)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
