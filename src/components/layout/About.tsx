import { useTranslation } from 'react-i18next';
import { Download, CheckCircle2 } from 'lucide-react';
import { Button } from '@components/ui/Button';
import cvFile from '@/assets/docs/CV_GAME_FIELD.pdf';
import { aboutSkills } from '@/data/skills';

export function About() {
  const { t } = useTranslation();
  const skills = aboutSkills.filter((skill) => skill.skillType !== 'tool');
  const tools = aboutSkills.filter((skill) => skill.skillType === 'tool');

  return (
    <section id="about" className="bg-[var(--social-bg)] py-24">
      <div className="container mx-auto px-4">
        <div className="section-shell grid grid-cols-1 gap-16 px-6 py-10 lg:grid-cols-2 md:px-10 md:py-12">
          {/* Left Column: Bio */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-[var(--text-h)] text-glow md:text-4xl">
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
            <div className="rounded-2xl border border-[var(--border)] bg-[rgba(10,16,31,0.74)] p-8 shadow-[0_14px_36px_rgba(3,7,16,0.55)]">
              <h3 
                className="text-xl font-bold text-[var(--text-h)] mb-6"
                dangerouslySetInnerHTML={{ __html: t('sections.profile.column-1-head') }}
              />
              <ul className="space-y-3">
                {skills.map((skill) => (
                  <li key={skill.id} className="flex items-start gap-3 text-[var(--text)]">
                    <CheckCircle2 className="h-5 w-5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[rgba(10,16,31,0.74)] p-8 shadow-[0_14px_36px_rgba(3,7,16,0.55)]">
              <h3 
                className="text-xl font-bold text-[var(--text-h)] mb-6"
                dangerouslySetInnerHTML={{ __html: t('sections.profile.column-2-head') }}
              />
              <ul className="space-y-3">
                {tools.map((tool) => (
                  <li key={tool.id} className="flex items-start gap-3 text-[var(--text)]">
                    <CheckCircle2 className="h-5 w-5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{tool.name}</span>
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
