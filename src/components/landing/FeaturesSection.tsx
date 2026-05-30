import { Zap, Code, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nProvider';

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
    accent: 'from-sky-500/12 via-sky-500/4 to-transparent',
    ring: 'border-sky-500/25',
    iconClass: 'text-sky-600 dark:text-sky-400 bg-sky-500/12',
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
  const { t } = useI18n();
  const featureLabels = {
    'fast-learning': {
      title: t('features.quickRevision.title'),
      description: t('features.quickRevision.description'),
    },
    'code-examples': {
      title: t('features.codeExamples.title'),
      description: t('features.codeExamples.description'),
    },
    comprehensive: {
      title: t('features.multiStreamCoverage.title'),
      description: t('features.multiStreamCoverage.description'),
    },
  } as const;

  return (
    <section className="mt-20 pt-16 border-t border-border/40">
      <div className="text-center mb-8 space-y-2">
        <span className="text-2xl" aria-hidden>
          ✨
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gradient-sheen">{t('features.whyUse')}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {FEATURES.map(({ id, icon: Icon, emoji, accent, ring, iconClass }) => (
          <div
            key={id}
            className={cn(
              'group relative overflow-hidden rounded-2xl border bg-card/70 p-6 text-left h-full',
              'shadow-[0_12px_28px_-24px_hsl(var(--foreground)/0.55)] transition-all duration-300',
              'hover:-translate-y-1 hover:shadow-[0_18px_36px_-22px_hsl(var(--foreground)/0.5)]',
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
              <div className={cn('inline-flex p-2.5 rounded-xl border border-border/30 shadow-sm', iconClass)}>
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
