import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, Gamepad2 } from 'lucide-react';

export function Seeking() {
  const { t } = useTranslation();

  return (
    <section id="seeking" className="border-t border-[var(--border)] bg-[var(--bg)] py-24">
      <div className="container mx-auto px-4">
        <div className="section-shell flex flex-col items-center px-6 py-12 text-center md:px-10">
          <h2 className="text-theme-strong mb-12 text-3xl font-bold text-glow md:text-4xl">
            {t('sections.titles.seeking')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            <div className="surface-card surface-card-hover flex flex-col items-center p-8">
              <div className="icon-chip mb-6">
                <Gamepad2 className="h-6 w-6" />
              </div>
              <h3 className="text-theme-strong mb-2 text-xl font-bold">
                {t('sections.seeking.position-title')}
              </h3>
              <p className="text-theme">
                {t('sections.seeking.position-subtitle')}
              </p>
            </div>

            <div className="surface-card surface-card-hover flex flex-col items-center p-8">
              <div className="icon-chip mb-6">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-theme-strong mb-2 text-xl font-bold">
                {t('sections.seeking.availability-title')}
              </h3>
              <p className="text-theme">
                {t('sections.seeking.date')}
              </p>
            </div>

            <div className="surface-card surface-card-hover flex flex-col items-center p-8">
              <div className="icon-chip mb-6">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-theme-strong mb-2 text-xl font-bold">
                {t('sections.seeking.location-title')}
              </h3>
              <p className="text-theme">
                {t('sections.seeking.locations')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
