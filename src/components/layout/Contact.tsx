import { useTranslation } from 'react-i18next';
import { Mail, Phone, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { Button } from '../ui/Button';

export function Contact() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { icon: Github, href: 'https://github.com/AdriKat2022', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/adrien-schroedel/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/AdriKat_', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-24 bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-h)] mb-6">
            {t('sections.titles.contact')}
          </h2>
          
          <p className="text-[var(--text)] text-lg mb-12 max-w-2xl leading-relaxed" 
             dangerouslySetInnerHTML={{ __html: t('sections.contact.subtitle') }} 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 w-full max-w-xl">
            <a 
              href="mailto:adrien.schroedel.pro@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-[var(--social-bg)] border border-transparent hover:border-[var(--accent-border)] hover:bg-[var(--accent-bg)] transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--bg)] flex items-center justify-center text-[var(--accent)] shadow-sm">
                <Mail className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text)]">Email</p>
                <p className="text-[var(--text-h)] font-medium truncate">adrien.schroedel.pro@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+33781565695"
              className="flex items-center gap-4 p-4 rounded-xl bg-[var(--social-bg)] border border-transparent hover:border-[var(--accent-border)] hover:bg-[var(--accent-bg)] transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--bg)] flex items-center justify-center text-[var(--accent)] shadow-sm">
                <Phone className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text)]">{t('nav.profile') === 'Mon Profil' ? 'Téléphone' : 'Phone'}</p>
                <p className="text-[var(--text-h)] font-medium">+33 7 81 56 56 95</p>
              </div>
            </a>
          </div>

          <div className="flex gap-4 mb-16">
            {socials.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12"
                onClick={() => window.open(social.href, '_blank')}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Button>
            ))}
          </div>

          <div className="w-full pt-12 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[var(--text)] text-sm">
              © {new Date().getFullYear()} @AdriKat. {t('nav.profile') === 'Mon Profil' ? 'Tous droits réservés.' : 'All rights reserved.'}
            </p>
            
            <Button variant="ghost" size="sm" onClick={scrollToTop} className="group">
              {t('nav.profile') === 'Mon Profil' ? 'Retour en haut' : 'Back to top'}
              <ArrowUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
