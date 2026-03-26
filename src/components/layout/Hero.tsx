import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowDown, Sparkles, Rocket } from 'lucide-react';
import { Button } from '@components/ui/Button';
import { useInViewport } from '@/hooks/useInViewport';
import avatarImg from '@/assets/avatar.png';
import { FullName } from '@/data/contact';

export function Hero() {
  const { t } = useTranslation();
  const inViewportRef = useInViewport();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
  };

  return (
    <section 
      id="home"
      ref={inViewportRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-shell scanline-overlay container z-10 mx-auto px-6 py-14 text-center md:px-10"
      >
        {/* Avatar Area with floating logos */}
        <div className="relative inline-block mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 10, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="h-40 w-40 overflow-hidden rounded-3xl border border-[var(--accent-border)] bg-[var(--social-bg)] shadow-[0_14px_45px_rgba(2,7,18,0.7)] md:h-48 md:w-48">
              <img src={avatarImg} alt="Adrien Schroedel" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <Sparkles className="absolute -left-6 top-0 h-5 w-5 text-[var(--accent)] twinkle" />
          <Rocket className="absolute -right-6 bottom-4 h-5 w-5 text-[var(--accent-2)] twinkle" />
        </div>

        <motion.h1 
          variants={itemVariants}
          className="mb-5 text-4xl font-extrabold tracking-tight text-glow md:text-6xl"
        >
          <div className="text-accent mb-4">{FullName}</div>
          <div>{t('hero.job-title')}</div>
          
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="mx-auto mb-8 max-w-3xl text-2xl leading-relaxed"
        >
          {t('hero.job-subtitle')}
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button
            size="lg" 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="group"
          >
            {t('nav.games')}
            <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-[var(--accent)] opacity-[0.06] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[var(--accent-2)] opacity-[0.08] blur-3xl" />
      </div>
    </section>
  );
}
