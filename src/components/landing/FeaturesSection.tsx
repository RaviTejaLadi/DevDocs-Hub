import { Zap, Code, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

const FEATURES = [
  {
    id: 'fast-learning',
    icon: Zap,
    emoji: '⚡',
    accent: 'from-amber-500/12 via-amber-500/4 to-transparent',
    ring: 'border-amber-500/25',
    iconClass: 'text-amber-600 dark:text-amber-400 bg-amber-500/12',
  },
  {
    id: 'code-examples',
    icon: Code,
    emoji: '💻',
    accent: 'from-blue-500/12 via-blue-500/4 to-transparent',
    ring: 'border-blue-500/25',
    iconClass: 'text-blue-600 dark:text-sky-400 bg-blue-500/12',
  },
  {
    id: 'comprehensive',
    icon: BookOpen,
    emoji: '🌍',
    accent: 'from-violet-500/12 via-violet-500/4 to-transparent',
    ring: 'border-violet-500/25',
    iconClass: 'text-violet-600 dark:text-violet-400 bg-violet-500/12',
  },
] as const;

export default function FeaturesSection() {
  const featureLabels = {
    'fast-learning': {
      title: 'Quick revision',
      description:
        'Short, readable explanations so you can brush up fast — before exams, interviews, labs, or deeper study.',
    },
    'code-examples': {
      title: 'Code & examples',
      description:
        'Where a topic includes code or formulas, you get concrete examples you can copy, adapt, or compare against your notes.',
    },
    comprehensive: {
      title: 'Many streams, one place',
      description:
        'Switch between streams — development, engineering, basic sciences, and more — and grow the library over time without juggling dozens of bookmarks.',
    },
  } as const;

  return (
    <section className="mt-10">
      <div className="text-center mb-8 space-y-2">
        <span className="text-2xl" aria-hidden>
          ✨
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gradient-sheen">{'Why use ReviseStack'}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {FEATURES.map(({ id, icon: Icon, emoji, accent, ring, iconClass }) => (
          <div
            key={id}
            className={cn(
              'group relative overflow-hidden rounded-2xl border tahoe-glass p-6 text-left h-full',
              'transition-all duration-300',
              'hover:-translate-y-1 hover:shadow-[var(--panel-shadow-raised)] dark:hover:shadow-none',
              ring
            )}
          >
            <div
              className={cn('pointer-events-none absolute inset-0 bg-linear-to-br opacity-80', accent)}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-2 -top-2 text-5xl opacity-[0.08] transition-opacity group-hover:opacity-[0.14]"
              aria-hidden
            >
              {emoji}
            </div>
            <div className="relative space-y-3">
              <div className={cn('inline-flex p-2.5 rounded-xl border border-border/30 shadow-none', iconClass)}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground transition-colors duration-200 group-hover:text-primary flex items-center gap-2">
                <span aria-hidden>{emoji}</span>
                {featureLabels[id].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{featureLabels[id].description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
