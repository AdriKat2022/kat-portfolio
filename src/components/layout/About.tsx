import { Trans, useTranslation } from 'react-i18next';
import { Download, CheckCircle2 } from 'lucide-react';
import { Button } from '@components/ui/Button';
import cvFile from '@/assets/docs/Adrien_Schroedel_CV_2026_03.pdf';
import { aboutSkills } from '@/data/skills';
import { openExternalLink } from '@/lib/utils';

export function About() {
  const { t, i18n } = useTranslation();
  const activeLanguage = i18n.resolvedLanguage || i18n.language;
  const skills = aboutSkills.filter(
    (skill) => skill.skillType === 'language' || skill.skillType === 'framework'
  );
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
            <p className="text-theme text-lg leading-relaxed">
              {/*  */}
              <Trans
                i18nKey="sections.about.p1"
                t={t}
                components={{
                  lineBreak: <br />,
                  portfolioLink: <a href="javascript:void(0);" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="underline decoration-dotted underline-offset-4" />,
                }}
              />
            </p>
            <p className="mt-6 text-theme text-lg leading-relaxed">{t('sections.about.p2')}</p>
            <p className="mt-6 text-theme text-lg leading-relaxed">{t('sections.about.p3')}</p>
            
            <div className="mt-10">
              <Button className="group" size="lg" onClick={() => openExternalLink(cvFile)}>
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                {t('sections.about.resume-title')}
              </Button>
            </div>
          </div>

          {/* Right Column: Skills & Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            <div className="surface-card p-8">
              <p className="text-theme-strong mb-6 text-xl font-bold">
                <Trans
                  key={`profile-col1-${activeLanguage}`}
                  i18nKey="sections.profile.column-1-head"
                  t={t}
                  components={{ emphasis: <strong /> }}
                />
              </p>
              <ul className="skill-grid">
                {skills.map((skill) => (
                  <li key={skill.id} className="skill-grid-item">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--accent)]" />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-card p-8">
              <p className="text-theme-strong mb-6 text-xl font-bold">
                <Trans
                  key={`profile-col2-${activeLanguage}`}
                  i18nKey="sections.profile.column-2-head"
                  t={t}
                  components={{ emphasis: <strong /> }}
                />
              </p>
              <ul className="skill-grid">
                {tools.map((tool) => (
                  <li key={tool.id} className="skill-grid-item">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--accent)]" />
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
