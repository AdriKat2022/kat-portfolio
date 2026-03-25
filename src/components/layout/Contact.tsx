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
          <h2 className="text-theme-strong mb-6 text-3xl font-bold text-glow md:text-4xl">
            {t('sections.titles.contact')}
          </h2>
          
          <p className="text-theme mb-12 max-w-4xl text-xl leading-relaxed" 
             dangerouslySetInnerHTML={{ __html: t('sections.contact.subtitle') }} 
          />

          <div className="grid grid-cols md:grid-cols-2 gap-6 mb-12 w-full max-w-2xl">
            <a 
              href="mailto:adrien.schroedel.pro@gmail.com"
              className="surface-card surface-card-hover contact-link-card group"
            >
              <div className="icon-chip">
                <Mail className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="text-theme text-xs font-semibold uppercase tracking-wider">{t('sections.contact.email-label')}</p>
                <p className="text-theme-strong font-medium truncate">adrien.schroedel.pro@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+33781565695"
              className="surface-card surface-card-hover contact-link-card group"
            >
              <div className="icon-chip">
                <Phone className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="text-theme text-xs font-semibold uppercase tracking-wider">{t('sections.contact.phone-label')}</p>
                <p className="text-theme-strong font-medium">+33 7 81 56 56 95</p>
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
            <p className="text-theme text-sm">
              © {new Date().getFullYear()} @AdriKat. {t('sections.contact.rights-reserved')}
            </p>
            
            <Button variant="ghost" size="sm" onClick={scrollToTop} className="group">
              {t('sections.contact.back-to-top')}
              <ArrowUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
