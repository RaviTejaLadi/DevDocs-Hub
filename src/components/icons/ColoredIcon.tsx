import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ColoredIconProps = {
  children: ReactNode;
  className?: string;
  /** Uniform box size in px (SVGs scale inside). */
  size?: number;
};

/** Wraps brand SVGs without forcing `currentColor` onto fills. */
export function ColoredIcon({ children, className, size = 20 }: ColoredIconProps) {
  return (
    <span
      className={cn('inline-flex shrink-0 items-center justify-center [&_svg]:h-full [&_svg]:w-full', className)}
      style={{ width: size, height: size }}
    >
      {children}
    </span>
  );
}
