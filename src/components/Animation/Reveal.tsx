import { motion, useReducedMotion } from 'motion/react';
import type { HTMLMotionProps } from 'motion/react';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export interface RevealProps extends Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'transition'> {
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: RevealDirection;
}

const EASE = [0.22, 1, 0.36, 1] as const;

function getOffset(direction: RevealDirection, distance: number) {
  switch (direction) {
    case 'up':
      return { x: 0, y: distance };
    case 'down':
      return { x: 0, y: -distance };
    case 'left':
      return { x: distance, y: 0 };
    case 'right':
      return { x: -distance, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.5,
  distance = 12,
  direction = 'up',
  className,
  style,
  ...rest
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <motion.div
        initial={false}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0 }}
        className={className}
        style={style}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }

  const offset = getOffset(direction, distance);

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
      style={{ willChange: 'transform, opacity', ...style }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
