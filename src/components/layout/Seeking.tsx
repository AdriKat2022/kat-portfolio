import { useTranslation } from 'react-i18next';
import { Target, Calendar, MapPin } from 'lucide-react';

export function Seeking() {
  const { t } = useTranslation();

  return (
    <section id="seeking" className="py-24 bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-h)] mb-12">
            {t('sections.titles.seeking')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            <div className="p-8 rounded-2xl bg-[var(--social-bg)] border border-[var(--border)] flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] flex items-center justify-center mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-h)] mb-2">
                {t('sections.seeking.position-title')}
              </h3>
              <p className="text-[var(--text)]">
                {t('sections.seeking.position-subtitle')}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[var(--social-bg)] border border-[var(--border)] flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] flex items-center justify-center mb-6">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-h)] mb-2">
                {t('nav.profile') === 'Mon Profil' ? 'Disponibilité' : 'Availability'}
              </h3>
              <p className="text-[var(--text)]">
                {t('sections.seeking.date')}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[var(--social-bg)] border border-[var(--border)] flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-h)] mb-2">
                {t('nav.profile') === 'Mon Profil' ? 'Localisation' : 'Location'}
              </h3>
              <p className="text-[var(--text)]">
                {t('sections.seeking.locations')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
