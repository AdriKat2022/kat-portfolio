import { useTranslation } from 'react-i18next';
import { Download, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import cvFile from '../../assets/docs/CV_GAME_FIELD.pdf';

export function About() {
  const { t } = useTranslation();

  const skills = t('sections.profile.column-1-items', { returnObjects: true }) as string[];
  const tools = t('sections.profile.column-2-items', { returnObjects: true }) as string[];

  return (
    <section id="about" className="py-24 bg-[var(--social-bg)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Bio */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-h)] mb-8">
              {t('sections.titles.about')}
            </h2>
            <div className="space-y-6 text-lg text-[var(--text)] leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t('sections.about.p1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('sections.about.p2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('sections.about.p3') }} />
            </div>
            
            <div className="mt-10">
              <Button size="lg" onClick={() => window.open(cvFile, '_blank')}>
                <Download className="mr-2 h-5 w-5" />
                {t('sections.about.resume-title')}
              </Button>
            </div>
          </div>

          {/* Right Column: Skills & Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            <div className="bg-[var(--bg)] p-8 rounded-2xl border border-[var(--border)] shadow-sm">
              <h3 
                className="text-xl font-bold text-[var(--text-h)] mb-6"
                dangerouslySetInnerHTML={{ __html: t('sections.profile.column-1-head') }}
              />
              <ul className="space-y-3">
                {skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[var(--text)]">
                    <CheckCircle2 className="h-5 w-5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span dangerouslySetInnerHTML={{ __html: skill }} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--bg)] p-8 rounded-2xl border border-[var(--border)] shadow-sm">
              <h3 
                className="text-xl font-bold text-[var(--text-h)] mb-6"
                dangerouslySetInnerHTML={{ __html: t('sections.profile.column-2-head') }}
              />
              <ul className="space-y-3">
                {tools.map((tool, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[var(--text)]">
                    <CheckCircle2 className="h-5 w-5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span dangerouslySetInnerHTML={{ __html: tool }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
