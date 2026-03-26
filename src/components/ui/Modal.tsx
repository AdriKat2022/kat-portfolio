import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ExternalLink, Download, TimerIcon, Gamepad2 } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';
import type { Project, ProjectAction } from '@/types/project';
import { Button } from '@components/ui/Button';
import { ImageCarousel } from '@components/ui/ImageCarousel';
import { TechBadge } from '@components/ui/TechBadge';
import { openExternalLink } from '@/lib/utils';
import { getLocalizedValue, getOptionalLocalizedValue } from '@/lib/i18n-utils';
import {
  parseProjectParagraph,
  splitProjectDescription,
} from '@/lib/project-description-trans';
import { IoLogoGithub } from 'react-icons/io';
import { FaItchIo } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

function makeProjectActionButton(idx: number, action: ProjectAction, t: Function, language: string) {

  let icon = <ExternalLink className="h-4 w-4" />;
  let display = t('projects.view-project');
  
  switch (action.type) {

    case 'GENERAL-LINK-NEW-TAB':
      break;
    
    case 'GITHUB':
      display = t('projects.view-project-github');
      icon = <IoLogoGithub className="h-4 w-4" />
      break;
    
    case 'ITCH':
      display = t('projects.view-project-itch');
      icon = <FaItchIo className="h-4 w-4" />
      break;
    
    case 'PLAY-IN-BROWSER':
      display = t('projects.play-in-browser');
      icon = <Gamepad2 className="h-4 w-4" />;
      break;
    
    case 'DOWNLOAD':
      display = t('projects.download');
      icon = <Download className="h-4 w-4" />
      break;
  }

  if (action.customDisplay !== undefined)
  {
    display = getLocalizedValue(action.customDisplay, language);
  }
  
  return (
    <Button
      key={idx}
      className="w-full justify-between"
      variant={idx === 0 ? 'primary' : 'outline'}
      onClick={() => openExternalLink(action.link)}
      disabled={action.type === 'UNAVAILABLE'}
    >
      {display}
      {icon}
    </Button>
  );
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
              <ImageCarousel
                className="mb-4"
                images={project.imgs.map((img, idx) => ({
                  src: img,
                  alt: `${title} - screenshot ${idx + 1}`,
                  key: `${project.id}-image-${idx}`,
                }))}
              />

              {/* Tags */}
              <div className="mb-4 flex justify-center">
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

                  <div className="flex flex-col gap-2">
                    {project.actions.map((action, idx) => makeProjectActionButton(idx, action, t, i18n.language))}
                  </div>
                </div>

                {/* Description */}
                <div className="lg:col-span-2">
                  <div className="prose-theme prose max-w-none space-y-2">
                    {descriptionParagraphs.map((paragraph, idx) => {
                      const { template, components } = parseProjectParagraph(paragraph, project.additionalLinks);

                      return (
                        <p key={`${project.id}-paragraph-${idx}`}>
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
