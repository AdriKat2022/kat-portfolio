import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Pin, ExternalLink } from 'lucide-react';
import type { Project } from '../../types/project';
import { TechBadge } from './TechBadge';
import { Button } from './Button';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'fr';

  const title = project.title[currentLang];
  const date = project.date?.[currentLang];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg)] shadow-sm transition-all hover:shadow-md"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.cover_img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {project.pinned && (
          <div className="absolute top-2 right-2 rounded-full bg-[var(--accent)] p-1.5 text-white shadow-sm">
            <Pin className="h-4 w-4 fill-current" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-lg font-bold text-[var(--text-h)] line-clamp-1">
            {title}
          </h3>
          {date && (
            <span className="text-xs text-[var(--text)] whitespace-nowrap ml-2">
              {date}
            </span>
          )}
        </div>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-[var(--text)] self-center ml-1">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="mt-auto flex gap-2">
          <Button 
            className="w-full" 
            variant="outline" 
            onClick={() => onClick(project)}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            {currentLang === 'fr' ? 'Détails' : 'Details'}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
