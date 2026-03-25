import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Filter } from 'lucide-react';
import type { Project } from '@/types/project';
import { projects } from '@/data/projects';
import { ProjectCard } from '@components/ui/ProjectCard';
import { Button } from '@components/ui/Button';
import { Modal } from '@components/ui/Modal';

export function PortfolioGrid() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const pinnedProjects = projects.filter((p) => p.pinned);
  const otherProjects = projects.filter((p) => !p.pinned);

  const displayedProjects = showAll ? projects : pinnedProjects;

  return (
    <section id="portfolio" className="py-24 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <div className="section-shell px-6 py-10 md:px-10 md:py-12">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold text-[var(--text-h)] text-glow md:text-4xl">
              {t('sections.titles.games')}
            </h2>
            <p className="text-lg leading-relaxed text-[var(--text)]">
              {t('sections.portfolio.description')}
            </p>
          </div>
          
          <Button
            variant={showAll ? 'primary' : 'outline'}
            onClick={() => setShowAll(!showAll)}
            className="md:self-end"
          >
            <Filter className="mr-2 h-4 w-4" />
            {showAll ? t('sections.portfolio.show-pinned') : t('sections.portfolio.show-all')}
          </Button>
        </div>

        {/* Grid */}
        <LayoutGroup>
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard
                    project={project}
                    onClick={(p) => setSelectedProject(p)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {!showAll && otherProjects.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <Button variant="ghost" onClick={() => setShowAll(true)}>
              {t('sections.portfolio.explore-all-games')}
            </Button>
          </motion.div>
        )}
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
}
