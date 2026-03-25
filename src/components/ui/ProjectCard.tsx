import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Pin, ExternalLink } from 'lucide-react';
import type { Project } from '@/types/project';
import { TechBadge } from '@components/ui/TechBadge';
import { Button } from '@components/ui/Button';

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
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="scanline-overlay group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[linear-gradient(165deg,rgba(16,25,45,0.92),rgba(9,14,28,0.95))] shadow-[0_16px_40px_rgba(4,8,18,0.5)] transition-all hover:border-[var(--accent-border)] hover:shadow-[0_18px_48px_rgba(88,243,255,0.2)]"
    >
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.42)_100%)] z-10" />
        <img
          src={project.cover_img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {project.pinned && (
          <div className="absolute right-3 top-3 z-20 rounded-full border border-[var(--accent-border)] bg-[var(--accent)] p-1.5 text-slate-950 shadow-[0_0_20px_rgba(88,243,255,0.5)]">
            <Pin className="h-4 w-4 fill-current" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="line-clamp-1 text-lg font-bold text-[var(--text-h)]">
            {title}
          </h3>
          {date && (
            <span className="ml-2 whitespace-nowrap text-xs text-[var(--text)]">
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
