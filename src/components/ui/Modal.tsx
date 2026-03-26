import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ExternalLink, Download, TimerIcon } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';
import type { Project } from '@/types/project';
import { Button } from '@components/ui/Button';
import { TechBadge } from '@components/ui/TechBadge';
import { Skeleton } from '@components/ui/Skeleton';
import { useLazyImage } from '@/hooks/useLazyImage';
import { openExternalLink } from '@/lib/utils';
import { getLocalizedValue, getOptionalLocalizedValue } from '@/lib/i18n-utils';
import {
  parseProjectParagraph,
  splitProjectDescription,
} from '@/lib/project-description-trans';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export function Modal({ isOpen, onClose, project }: ModalProps) {
  const { t, i18n } = useTranslation();

  if (!project) return null;

  const title = getLocalizedValue(project.title, i18n.language);
  const date = getOptionalLocalizedValue(project.date, i18n.language);
  const developmentTime = getOptionalLocalizedValue(project.developmentTime, i18n.language);
  const description = getLocalizedValue(project.description, i18n.language);
  const descriptionParagraphs = splitProjectDescription(description);

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
            className="modal-shell"
          >
            {/* Header */}
            <div className="modal-header">
              <h2 className="text-theme-strong line-clamp-1 text-xl font-bold">{title}</h2>
              <Button variant="ghost" size="icon" onClick={onClose} aria-label={t('projects.button-close')}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Body */}
            <div className="modal-body">
              {/* Image Gallery */}
              <div className="mb-4 flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {project.imgs.map((img, idx) => (
                  <ModalImage key={idx} src={img} alt={`${title} - screenshot ${idx + 1}`} />
                ))}
              </div>

              {/* Tags */}
              <div className="mb-4 flex justify-center">
                {/* <h4 className="modal-label">
                  {t('projects.technologies')}
                </h4> */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech.id}>{tech.name}</TechBadge>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Info Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                  {date && (
                    <div>
                      <h4 className="modal-label">
                        <Calendar className="h-4 w-4" />
                        {t('projects.period')}
                      </h4>
                      <p className="modal-copy">{date}</p>
                    </div>
                  )}

                  {developmentTime && (
                    <div>
                      <h4 className="modal-label">
                        <TimerIcon className="h-4 w-4" />
                        {t('projects.development-time')}
                      </h4>
                      <p className="modal-copy">{developmentTime}</p>
                    </div>
                  )}

                  <div className="pt-4 space-y-3">
                    {project.actions.map((action, idx) => (
                      <Button
                        key={idx}
                        className="w-full justify-between"
                        variant={idx === 0 ? 'primary' : 'outline'}
                        onClick={() => openExternalLink(action.link)}
                        disabled={action.type === 'UNAVAILABLE'}
                      >
                        <span>
                          {action.type === 'DOWNLOAD' ? t('projects.download') : t('projects.view-project')}
                        </span>
                        {action.type === 'DOWNLOAD' ? <Download className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="lg:col-span-2">
                  <div className="prose-theme prose max-w-none space-y-4">
                    {descriptionParagraphs.map((paragraph) => {
                      const { template, components } = parseProjectParagraph(paragraph, project.additionalLinks);

                      return (
                        <p>
                          <Trans defaults={template} components={components} />
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/**
 * Lazy-loaded image for modal gallery
 */
function ModalImage({ src, alt }: { src: string; alt: string }) {
  const { imageSrc, isLoading, ref } = useLazyImage(src);

  return (
    <div
      ref={ref}
      className="modal-media scrollbar-hide"
    >
      {isLoading && <Skeleton className="absolute inset-0" />}
      <img
        src={imageSrc}
        alt={alt}
        className="h-full w-full object-contain"
        loading="lazy"
      />
    </div>
  );
}
