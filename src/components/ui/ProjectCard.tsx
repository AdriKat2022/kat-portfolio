import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Pin, Eye } from 'lucide-react';
import type { Project } from '@/types/project';
import { TechBadge } from '@components/ui/TechBadge';
import { Skeleton } from '@components/ui/Skeleton';
import { Button } from '@components/ui/Button';
import { useLazyImage } from '@/hooks/useLazyImage';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'fr';
  const { imageSrc, isLoading, ref } = useLazyImage(project.cover_img);

  const title = project.title[currentLang];
  const date = project.date?.[currentLang];

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="scanline-overlay project-card group"
    >
      <div className="project-card-media" onClick={() => onClick(project)}>
        <div className="project-card-media-overlay" />
        {isLoading && <Skeleton className="absolute inset-0" />}
        <img
          src={imageSrc}
          alt={title}
          className="project-card-image"
          loading="lazy"
          />
        {project.pinned && (
          <div className="project-card-pin">
            <Pin className="h-4 w-4 fill-current" />
          </div>
        )}
      </div>

      <div className="project-card-body">
        <div className="project-card-header">
          <h3 className="project-card-title">
            {title}
          </h3>
          {date && (
            <span className="project-card-date">
              {date}
            </span>
          )}
        </div>

        <div className="project-card-tech">
          {project.technologies.slice(0, 3).map((tech) => (
            <TechBadge key={tech.id}>{tech.name}</TechBadge>
          ))}
          {project.technologies.length > 3 && (
            <span className="project-card-more-tech">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="project-card-actions">
          <Button 
            className="w-full" 
            variant="outline" 
            onClick={() => onClick(project)}
          >
            <Eye className="mr-2 h-4 w-4" />
            {t('projects.details')}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
