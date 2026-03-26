import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/layout/Hero';
import { Seeking } from '@/components/layout/Seeking';
import { PortfolioGrid } from '@/components/layout/PortfolioGrid';
import { About } from '@/components/layout/About';
import { Contact } from '@/components/layout/Contact';
import { useMediaQuery } from '@/hooks/useMediaQuery';

function App() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  return (
    <div className={`cosmic-shell min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)] ${prefersReducedMotion ? 'no-animations' : ''}`}>
      {/* <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="h-60 w-60 rounded-full bg-[radial-gradient(circle,_var(--ambient-1)_55%,_transparent_70%)] twinkle" />
        <div className="h-72 w-72 rounded-full bg-[radial-gradient(circle,_var(--ambient-2)_55%,_transparent_68%)] drift" />
        <div className="h-56 w-56 rounded-full bg-[radial-gradient(circle,_var(--ambient-3)_55%,_transparent_70%)] twinkle" />
      </div> */}
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('hero.job-subtitle')} />
        <html lang={currentLang} />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Seeking />
        <PortfolioGrid />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
