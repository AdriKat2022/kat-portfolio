import { Trans, useTranslation } from 'react-i18next';
import { Download, CheckCircle2 } from 'lucide-react';
import { Button } from '@components/ui/Button';
import cvFileWeb from '@/assets/docs/Adrien_Schroedel_CV_2026_07_Web.pdf';
import cvFileSoftware from '@/assets/docs/Adrien_Schroedel_CV_2026_07_Logiciel.pdf';
import cvFileGame from '@/assets/docs/Adrien_Schroedel_CV_2026_06_Jeux.pdf';
import { aboutSkills } from '@/data/skills';
import { cn, openExternalLink } from '@/lib/utils';

export function About() {
  const { t, i18n } = useTranslation();
  const activeLanguage = i18n.resolvedLanguage || i18n.language;
  const skills = aboutSkills.filter(
    (skill) => skill.skillType === 'language' || skill.skillType === 'framework' || skill.skillType === "tool"
  );

  return (
    <section id="about" className="bg-(--social-bg) py-24">
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
                  nl: <br />,
                  portfolioLink: <a href="javascript:void(0);" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="underline decoration-dotted underline-offset-4" />,
                }}
              />
            </p>
            <p className="mt-6 text-theme text-lg leading-relaxed">{t('sections.about.p2')}</p>
            <p className="mt-6 text-theme text-lg leading-relaxed">{t('sections.about.p3')}</p>
            
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button className="group w-full sm:w-auto" size="lg" onClick={() => openExternalLink(cvFileWeb)}>
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                {t('sections.about.resume-title-web')}
              </Button>
              <Button className="group w-full sm:w-auto" size="lg" onClick={() => openExternalLink(cvFileSoftware)}>
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                {t('sections.about.resume-title-software')}
              </Button>
              <Button className="group w-full sm:w-auto" size="lg" onClick={() => openExternalLink(cvFileGame)}>
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                {t('sections.about.resume-title-game')}
              </Button>
            </div>
          </div>

          {/* Right Column: Skills & Tools */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
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
                  <li key={skill.id} className="skill-grid-item min-w-0">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-(--accent)" />
                    <span className="truncate" title={skill.name}>{skill.name}</span>
                    <span className={cn("ml-auto", "truncate", "skill-type-badge", skill.skillType)}>{ skill.skillType }</span>
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
