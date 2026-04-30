import { motion, useReducedMotion } from 'motion/react';
import type { HTMLMotionProps, Variants } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1] as const;

interface StaggerProps extends Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'variants' | 'transition'> {
  gap?: number;
  startDelay?: number;
}

export function Stagger({
  gap = 0.06,
  startDelay = 0,
  className,
  children,
  style,
  ...rest
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : gap,
        delayChildren: reduceMotion ? 0 : startDelay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends Omit<HTMLMotionProps<'div'>, 'variants' | 'initial' | 'animate'> {
  distance?: number;
}

const itemVariants = (distance: number, reduce: boolean): Variants => ({
  hidden: reduce ? { opacity: 1 } : { opacity: 0, y: distance },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduce ? 0 : 0.5, ease: EASE },
  },
});

export function StaggerItem({ distance = 12, className, children, style, ...rest }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      variants={itemVariants(distance, !!reduceMotion)}
      className={className}
      style={{ willChange: 'transform, opacity', ...style }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
