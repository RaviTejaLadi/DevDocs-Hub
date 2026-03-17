import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type LogoProps = {
  /** Show "ReviseStack" text next to the icon */
  showText?: boolean;
  /** Size: 'sm' (navbar), 'md' (footer), 'lg' (hero) */
  size?: 'sm' | 'md' | 'lg';
  /** Use as link to home (default true when not inside a link) */
  asLink?: boolean;
  className?: string;
};

const sizeClasses = {
  sm: { icon: 'w-7 h-7', text: 'text-lg' },
  md: { icon: 'w-6 h-6', text: 'text-base' },
  lg: { icon: 'w-12 h-12 sm:w-12 sm:h-12', text: 'text-3xl sm:text-4xl md:text-5xl' },
};

export function Logo({ showText = true, size = 'sm', asLink = true, className }: LogoProps) {
  const { icon: iconClass, text: textClass } = sizeClasses[size];

  const logoSvg = (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0 text-primary', iconClass)}
      aria-hidden
    >
      <rect width="32" height="32" rx="7" fill="currentColor" />
      <rect x="5" y="7" width="22" height="3.5" rx="1.5" fill="white" fillOpacity="0.98" />
      <rect x="5" y="14.25" width="22" height="3.5" rx="1.5" fill="white" fillOpacity="0.9" />
      <rect x="5" y="21.5" width="15" height="3.5" rx="1.5" fill="white" fillOpacity="0.8" />
    </svg>
  );

  const content = (
    <>
      {logoSvg}
      {showText && <span className={cn('font-semibold text-foreground tracking-tight', textClass)}>ReviseStack</span>}
    </>
  );

  const wrapperClass = cn('inline-flex items-center gap-2 shrink-0 hover:opacity-90 transition-opacity', className);

  if (asLink) {
    return (
      <Link to="/" className={wrapperClass} aria-label="ReviseStack – Home">
        {content}
      </Link>
    );
  }

  return <span className={wrapperClass}>{content}</span>;
}
