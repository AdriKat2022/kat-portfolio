import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/layout/Hero';
import { Seeking } from '@/components/layout/Seeking';
import { PortfolioGrid } from '@/components/layout/PortfolioGrid';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const AboutSection = lazy(() => import('@/components/layout/About').then((module) => ({ default: module.About })));
const ContactSection = lazy(() => import('@/components/layout/Contact').then((module) => ({ default: module.Contact })));

function App() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  return (
    <div className={`cosmic-shell min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)] ${prefersReducedMotion ? 'no-animations' : ''}`}>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[8%] top-[12%] h-60 w-60 rounded-full bg-[radial-gradient(circle,_rgba(88,243,255,0.18)_0%,_transparent_70%)] blur-3xl twinkle" />
        <div className="absolute right-[5%] top-[28%] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(95,140,255,0.2)_0%,_transparent_68%)] blur-3xl drift" />
        <div className="absolute bottom-[4%] left-[32%] h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(95,140,255,0.16)_0%,_transparent_70%)] blur-3xl twinkle" />
      </div>
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
        <Suspense fallback={null}>
          <AboutSection />
          <ContactSection />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
