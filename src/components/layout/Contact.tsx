import { useTranslation } from 'react-i18next';
import { Mail, Phone, ArrowUp, Code2, Network } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Contact() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { icon: Code2, href: 'https://github.com/AdriKat2022', label: 'GitHub' },
    { icon: Network, href: 'https://www.linkedin.com/in/adrien-schroedel/', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="border-t border-[var(--border)] bg-[var(--bg)] py-24">
      <div className="container mx-auto px-4">
        <div className="section-shell flex flex-col items-center px-6 py-12 text-center md:px-10">
          <h2 className="mb-6 text-3xl font-bold text-[var(--text-h)] text-glow md:text-4xl">
            {t('sections.titles.contact')}
          </h2>
          
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[var(--text)]" 
             dangerouslySetInnerHTML={{ __html: t('sections.contact.subtitle') }} 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 w-full max-w-xl">
            <a 
              href="mailto:adrien.schroedel.pro@gmail.com"
              className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[rgba(18,28,52,0.78)] p-4 transition-all hover:border-[var(--accent-border)] hover:bg-[rgba(33,48,88,0.72)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--bg)] text-[var(--accent)] shadow-[0_0_18px_rgba(88,243,255,0.2)]">
                <Mail className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text)]">Email</p>
                <p className="text-[var(--text-h)] font-medium truncate">adrien.schroedel.pro@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+33781565695"
              className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[rgba(18,28,52,0.78)] p-4 transition-all hover:border-[var(--accent-border)] hover:bg-[rgba(33,48,88,0.72)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--bg)] text-[var(--accent)] shadow-[0_0_18px_rgba(88,243,255,0.2)]">
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
