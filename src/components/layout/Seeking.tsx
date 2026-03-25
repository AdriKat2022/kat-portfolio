import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, Gamepad2 } from 'lucide-react';

export function Seeking() {
  const { t } = useTranslation();

  return (
    <section id="seeking" className="border-t border-[var(--border)] bg-[var(--bg)] py-24">
      <div className="container mx-auto px-4">
        <div className="section-shell flex flex-col items-center px-6 py-12 text-center md:px-10">
          <h2 className="mb-12 text-3xl font-bold text-[var(--text-h)] text-glow md:text-4xl">
            {t('sections.titles.seeking')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            <div className="flex flex-col items-center rounded-2xl border border-[var(--border)] bg-[rgba(20,30,54,0.7)] p-8 transition-all hover:border-[var(--accent-border)] hover:bg-[rgba(26,40,74,0.75)]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] shadow-[0_0_24px_rgba(88,243,255,0.2)]">
                <Gamepad2 className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[var(--text-h)]">
                {t('sections.seeking.position-title')}
              </h3>
              <p className="text-[var(--text)]">
                {t('sections.seeking.position-subtitle')}
              </p>
            </div>

            <div className="flex flex-col items-center rounded-2xl border border-[var(--border)] bg-[rgba(20,30,54,0.7)] p-8 transition-all hover:border-[var(--accent-border)] hover:bg-[rgba(26,40,74,0.75)]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] shadow-[0_0_24px_rgba(88,243,255,0.2)]">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[var(--text-h)]">
                {t('sections.seeking.availability-title')}
              </h3>
              <p className="text-[var(--text)]">
                {t('sections.seeking.date')}
              </p>
            </div>

            <div className="flex flex-col items-center rounded-2xl border border-[var(--border)] bg-[rgba(20,30,54,0.7)] p-8 transition-all hover:border-[var(--accent-border)] hover:bg-[rgba(26,40,74,0.75)]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] shadow-[0_0_24px_rgba(88,243,255,0.2)]">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[var(--text-h)]">
                {t('sections.seeking.location-title')}
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
