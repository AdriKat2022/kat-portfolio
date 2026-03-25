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
            <h2 className="text-theme-strong mb-8 text-3xl font-bold text-glow md:text-4xl">
              {t('sections.titles.about')}
            </h2>
            <div className="text-theme space-y-6 text-lg leading-relaxed">
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
            <div className="surface-card p-8">
              <h3 
                className="text-theme-strong mb-6 text-xl font-bold"
                dangerouslySetInnerHTML={{ __html: t('sections.profile.column-1-head') }}
              />
              <ul className="skill-list">
                {skills.map((skill) => (
                  <li key={skill.id} className="skill-item">
                    <div className="skill-item-head">
                      <span className="skill-item-name">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--accent)]" />
                        {skill.name}
                      </span>
                      <span className="skill-item-percent">{skill.percentage}%</span>
                    </div>
                    <div className="skill-meter" aria-hidden="true">
                      <div className="skill-meter-fill" style={{ width: `${skill.percentage}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-card p-8">
              <h3 
                className="text-theme-strong mb-6 text-xl font-bold"
                dangerouslySetInnerHTML={{ __html: t('sections.profile.column-2-head') }}
              />
              <ul className="skill-list">
                {tools.map((tool) => (
                  <li key={tool.id} className="skill-item">
                    <div className="skill-item-head">
                      <span className="skill-item-name">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--accent)]" />
                        {tool.name}
                      </span>
                      <span className="skill-item-percent">{tool.percentage}%</span>
                    </div>
                    <div className="skill-meter" aria-hidden="true">
                      <div className="skill-meter-fill" style={{ width: `${tool.percentage}%` }} />
                    </div>
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
