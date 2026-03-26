import { useTranslation } from 'react-i18next';
import { ArrowUp, Atom } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { contactMethods, socials, type ContactMethod, type SocialLink } from '@/data/contact';
import { enforceExternalLinks, openExternalLink } from '@/lib/utils';

function ContactMethodCard({ method }: { method: ContactMethod }) {
  const { t } = useTranslation();
  const valueClassName = method.truncateValue
    ? 'text-theme-strong font-medium truncate'
    : 'text-theme-strong font-medium';

  return (
    <a
      href={method.href}
      target="_blank"
      rel="noopener noreferrer"
      className="surface-card surface-card-hover contact-link-card group"
    >
      <div className="icon-chip">
        <method.icon className="h-6 w-6" />
      </div>
      <div className="text-left">
        <p className="text-theme text-xs font-semibold uppercase tracking-wider">
          {t(method.labelKey)}
        </p>
        <p className={valueClassName}>{method.value}</p>
      </div>
    </a>
  );
}

function SocialIconButton({ social }: { social: SocialLink }) {
  return (
    <div className="social-tooltip-wrap">
      <Button
        variant="outline"
        size="icon"
        className="social-icon-btn"
        onClick={() => openExternalLink(social.href)}
        aria-label={social.label}
      >
        <social.icon className="h-5 w-5" />
      </Button>
      <div role="tooltip" className="social-tooltip">
        {social.label}
        <div className="social-tooltip-arrow" />
      </div>
    </div>
  );
}

export function Contact() {
  const { t, i18n } = useTranslation();

  const lastUpdated = new Date(document.lastModified).toLocaleDateString(i18n.language, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="border-t border-[var(--border)] bg-[var(--bg)] py-24">
      <div className="container mx-auto px-4">
        <div className="section-shell flex flex-col items-center px-6 py-12 text-center md:px-10">
          <h2 className="text-theme-strong mb-6 text-3xl font-bold text-glow md:text-4xl">
            {t('sections.titles.contact')}
          </h2>
          
          <p className="text-theme mb-12 max-w-4xl text-xl leading-relaxed" 
             dangerouslySetInnerHTML={{ __html: enforceExternalLinks(t('sections.contact.subtitle')) }} 
          />

          {/* Contact Cards */}

          <div className="grid grid-cols md:grid-cols-2 gap-6 mb-12 w-full max-w-2xl">
            {contactMethods.map((method) => (
              <ContactMethodCard key={method.href} method={method} />
            ))}
          </div>

          {/* Socials */}

          <div className="flex gap-4 mb-16">
            {socials.map((social) => (
              <SocialIconButton key={social.key} social={social} />
            ))}
          </div>

          <div className="w-full pt-12 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <p className="text-theme text-sm">
                © {new Date().getFullYear()} @AdriKat. {t('sections.contact.rights-reserved')}
              </p>
              <span className="react-badge">
                <Atom className="h-3.5 w-3.5" />
                Made with React
              </span>
            </div>

            <p className="text-theme text-xs md:ml-auto">
              {t('common.last-updated')} {lastUpdated}
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
