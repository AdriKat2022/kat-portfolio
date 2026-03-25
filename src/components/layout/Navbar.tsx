import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Home, Briefcase, User, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@components/ui/Button';
import { LanguageSwitcher } from '@components/ui/LanguageSwitcher';

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
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled 
          ? 'border-b border-[var(--border)] bg-[rgba(6,9,20,0.76)] py-2 backdrop-blur-md shadow-[0_10px_30px_rgba(3,8,18,0.45)]' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <button 
          onClick={() => scrollTo('home')}
          className="text-xl font-extrabold tracking-wider text-[var(--text-h)] text-glow transition-opacity hover:opacity-85"
        >
          @AdriKat
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollTo(item.id)}
              className={cn(
                'relative px-4',
                activeSection === item.id ? 'text-[var(--accent)] text-glow' : 'text-[var(--text)]'
              )}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-2))]" />
              )}
            </Button>
          ))}
          <div className="ml-4 pl-4 border-l border-[var(--border)]">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
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
          'absolute left-0 right-0 top-full origin-top border-b border-[var(--border)] bg-[rgba(6,9,20,0.95)] p-4 backdrop-blur-md transition-all duration-300 md:hidden',
          isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                'flex items-center gap-4 p-3 rounded-lg transition-colors',
                activeSection === item.id 
                  ? 'bg-[var(--accent-bg)] text-[var(--accent)]' 
                  : 'text-[var(--text)] hover:bg-[var(--social-bg)]'
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
