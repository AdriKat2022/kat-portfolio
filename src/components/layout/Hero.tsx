import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowDown } from 'lucide-react';
import { Button } from '../ui/Button';
import avatarImg from '../../assets/avatar.png';
import reactLogo from '../../assets/react.svg';
import viteLogo from '../../assets/vite.svg';

export function Hero() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 text-center z-10"
      >
        {/* Avatar Area with floating logos */}
        <div className="relative inline-block mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
            className="relative z-10"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-[var(--bg)] shadow-xl bg-[var(--social-bg)]">
              <img src={avatarImg} alt="Adrien Schroedel" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Floating Logos */}
          <motion.img
            src={reactLogo}
            alt="React"
            className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 z-20 drop-shadow-lg"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.img
            src={viteLogo}
            alt="Vite"
            className="absolute -bottom-4 -left-4 w-12 h-12 md:w-16 md:h-16 z-20 drop-shadow-lg"
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-extrabold mb-4 text-[var(--text-h)] tracking-tight"
        >
          {t('hero.job-title')}
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-[var(--text)] mb-8 max-w-2xl mx-auto leading-relaxed"
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
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--accent)] opacity-[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent)] opacity-[0.05] rounded-full blur-3xl" />
      </div>
    </section>
  );
}
