import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useScrollViewport } from './scrollViewportContext';

const EASE = [0.22, 1, 0.36, 1] as const;

interface PageTransitionProps {
  children: React.ReactNode;
  routeKey: string;
}

export function PageTransition({ children, routeKey }: PageTransitionProps) {
  const reduceMotion = useReducedMotion();
  const viewportRef = useScrollViewport();
  const location = useLocation();

  useEffect(() => {
    const el = viewportRef?.current;
    if (!el) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }
    el.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.search, viewportRef]);

  if (reduceMotion) {
    return <div key={routeKey}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={routeKey}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.28, ease: EASE }}
        style={{ willChange: 'transform, opacity' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
