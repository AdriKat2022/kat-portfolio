import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Home, Briefcase, User, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@components/ui/Button';
import { LanguageSwitcher } from '@components/ui/LanguageSwitcher';
import { ThemeToggle } from '@components/ui/ThemeToggle';

export function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'portfolio', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t('nav.home'), icon: Home },
    { id: 'portfolio', label: t('nav.games'), icon: Briefcase },
    { id: 'about', label: t('nav.about'), icon: User },
    { id: 'contact', label: t('nav.contact'), icon: Mail },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'nav-shell',
        isScrolled ? 'nav-shell-scrolled' : 'nav-shell-top'
      )}
    >
      <div className="nav-container container mx-auto px-4">
        {/* Logo/Brand */}
        <button 
          onClick={() => scrollTo('home')}
          className="nav-brand text-glow"
        >
          @AdriKat
        </button>

        {/* Desktop Nav */}
        <div className="nav-desktop-links">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollTo(item.id)}
              className={cn(
                'nav-link-button',
                activeSection === item.id ? 'nav-link-active' : 'nav-link-inactive'
              )}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="nav-active-indicator" />
              )}
            </Button>
          ))}
          <div className="nav-divider flex items-center justify-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="nav-mobile-controls">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'nav-mobile-panel',
          isMobileMenuOpen ? 'nav-mobile-panel-open' : 'nav-mobile-panel-closed'
        )}
      >
        <div className="nav-mobile-list">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                'nav-mobile-item',
                activeSection === item.id 
                  ? 'nav-mobile-item-active' 
                  : 'nav-mobile-item-inactive'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
