import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/layout/Hero';
import { Seeking } from './components/layout/Seeking';
import { PortfolioGrid } from './components/layout/PortfolioGrid';
import { About } from './components/layout/About';
import { Contact } from './components/layout/Contact';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Helmet>
        <title>{currentLang === 'fr' ? 'Adrien Schroedel | Portfolio Développeur' : 'Adrien Schroedel | Developer Portfolio'}</title>
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
