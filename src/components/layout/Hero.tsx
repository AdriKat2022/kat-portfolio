import { animate, motion, useMotionValue, useMotionValueEvent, useTransform, type AnimationPlaybackControls } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowDown, Code2, Gamepad2, Globe } from 'lucide-react';
import { Button } from '@components/ui/Button';
import { useInViewport } from '@/hooks/useInViewport';
import avatarImg from '@/assets/avatar.png';
import { FullName } from '@/data/contact';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';

const ORBIT_RADIUS = 130;
const ORBIT_ITEMS = [
  { angle: -90, labelKey: 'hero.orbs.web', icon: Globe },
  { angle: 30, labelKey: 'hero.orbs.software', icon: Code2 },
  { angle: 150, labelKey: 'hero.orbs.game', icon: Gamepad2 },
] as const;

// Make an element orbit around the parent div. Adjust the parent's padding to control the orbit's radius.
const OrbitingElement = ({ angle, children, isHovering }: { angle: number, children: React.ReactNode, isHovering: boolean}) => {
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);
  const globalRotation = useMotionValue(0);
  useMotionValueEvent(globalRotation, "change", () => {});
  const counterRotation = useTransform(globalRotation, [0, 360], [360, 0]);
  const orbitRadians = (angle * Math.PI) / 180;
  const orbitX = Math.cos(orbitRadians) * ORBIT_RADIUS;
  const orbitY = Math.sin(orbitRadians) * ORBIT_RADIUS;

  useEffect(() => {
    const controls = animate(globalRotation, 360, {
      duration: 6,
      ease: "linear",
      repeat: Infinity
    });

    controlsRef.current = controls;

  }, []);

  useEffect(() => {
    if (controlsRef.current === null) return;

    animate(
      { animationSpeed: controlsRef.current.speed },
      { animationSpeed: isHovering ? 0.2 : 1 },
      {
        duration: 0.5,
        ease: "easeOut",
        onUpdate: (v) => {
          if (controlsRef.current) {
            controlsRef.current.speed = v;
            // console.log("NEW: " + v)
          }
        }
      }
    );
  }, [isHovering]);

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-20"
      style={{rotate: globalRotation}}
    >
      <div
        className="absolute left-1/2 top-1/2"
        style={{ left: `calc(50% + ${orbitX}px)`, top: `calc(50% + ${orbitY}px)`, transform: 'translate(-50%, -50%)' }}
      >
        <motion.div style={{ rotate: counterRotation }}>
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};

export function Hero() {
  const { t } = useTranslation();
  const inViewportRef = useInViewport();
  const [isHovering, setIsHovering] = useState(false);

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
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-12"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-shell scanline-overlay container text-center mx-auto px-5 md:px-10 pb-10 md:pt-5"
      >
        {/* Avatar Area with floating icons */}
        <div className="relative inline-block p-15 mb-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 10, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="h-40 w-40 md:h-48 md:w-48">
              <img
                src={avatarImg}
                alt="Adrien Schroedel"
                className="w-full h-full object-cover rounded-full"
                data-bright={isHovering ? "true" : "false"}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}/>
            </div>
          </motion.div>

          {ORBIT_ITEMS.map(({ angle, labelKey, icon: Icon }) => {
            const label = t(labelKey);

            return (
            <OrbitingElement key={labelKey} angle={angle} isHovering={isHovering}>
              <div className="relative flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--card-bg)/80 shadow-lg ring-1 ring-(--accent)/20 backdrop-blur-sm">
                  <Icon className="h-6 w-6 text-accent" data-aura={isHovering ? "true" : "false"} />
                </div>
                <motion.span
                  aria-hidden="true"
                  initial={false}
                  animate={isHovering ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="orbit-label"
                >
                  {label}
                </motion.span>
              </div>
            </OrbitingElement>
            );
          })}
        </div>

        {/* Title and intro */}
        <motion.h1 
          variants={itemVariants}
          className="mb-5 text-4xl font-extrabold tracking-tight text-glow md:text-6xl"
        >
          <div className="text-accent mb-4">{FullName}</div>
          <div>{t('hero.job-title')}</div>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="mx-auto mb-8 max-w-3xl text-2xl leading-relaxed"
        >
          {t('hero.job-subtitle')}
        </motion.p>

        {/* Button */}
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
      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-[var(--accent)] opacity-[0.06] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[var(--accent-2)] opacity-[0.08] blur-3xl" />
      </div> */}
    </section>
  );
}
