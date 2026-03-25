import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ExternalLink, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Project } from '@/types/project';
import { Button } from '@components/ui/Button';
import { TechBadge } from '@components/ui/TechBadge';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export function Modal({ isOpen, onClose, project }: ModalProps) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'fr';

  if (!project) return null;

  const title = project.title[currentLang];
  const date = project.date?.[currentLang];
  const description = project.description[currentLang];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-[var(--accent-border)] bg-[linear-gradient(170deg,rgba(13,21,39,0.98),rgba(7,11,22,0.98))] shadow-[0_18px_70px_rgba(3,7,16,0.85)]"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--border)] bg-[rgba(7,11,22,0.85)] p-4 backdrop-blur-md">
              <h2 className="text-xl font-bold text-[var(--text-h)] line-clamp-1">{title}</h2>
              <Button variant="ghost" size="icon" onClick={onClose} aria-label={t('projects.button-close')}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto p-4 sm:p-8 max-h-[calc(90vh-70px)]">
              {/* Image Gallery */}
              <div className="mb-8 flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {project.imgs.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${title} - screenshot ${idx + 1}`}
                    className="h-64 w-auto rounded-xl border border-[var(--border)] bg-[var(--social-bg)] object-contain sm:h-96"
                  />
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Info Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                  {date && (
                    <div>
                      <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--text)]">
                        <Calendar className="h-4 w-4" />
                        {currentLang === 'fr' ? 'Période' : 'Period'}
                      </h4>
                      <p className="text-[var(--text-h)]">{date}</p>
                    </div>
                  )}

                  <div>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--text)]">
                      {t('projects.technologies')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <TechBadge key={tech}>{tech}</TechBadge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    {project.actions.map((action, idx) => (
                      <Button
                        key={idx}
                        className="w-full justify-between"
                        variant={idx === 0 ? 'primary' : 'outline'}
                        onClick={() => window.open(action.link, '_blank')}
                        disabled={action.type === 'UNAVAILABLE'}
                      >
                        <span>
                          {action.type === 'DOWNLOAD' ? (currentLang === 'fr' ? 'Télécharger' : 'Download') : (currentLang === 'fr' ? 'Consulter' : 'View Project')}
                        </span>
                        {action.type === 'DOWNLOAD' ? <Download className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="lg:col-span-2">
                  <div 
                    className="prose max-w-none text-[var(--text)] leading-relaxed prose-headings:text-[var(--text-h)] prose-strong:text-[var(--text-h)] prose-a:text-[var(--accent)]"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
