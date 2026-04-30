import { Zap, Code, BookOpen } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { Reveal, Stagger, StaggerItem } from '@/components/Animation';

const FEATURES = [
  {
    id: 'fast-learning',
    icon: Zap,
  },
  {
    id: 'code-examples',
    icon: Code,
  },
  {
    id: 'comprehensive',
    icon: BookOpen,
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
      title: t('features.fullstackCoverage.title'),
      description: t('features.fullstackCoverage.description'),
    },
  } as const;

  return (
    <section className="mt-20 pt-16 border-t border-border/40">
      <Reveal>
        <h2 className="text-lg font-semibold text-foreground mb-6 tracking-tight">{t('features.whyUse')}</h2>
      </Reveal>
      <Stagger gap={0.06} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {FEATURES.map(({ id, icon: Icon }) => (
          <StaggerItem key={id}>
            <div className="group rounded-lg border border-border/40 bg-card p-6 text-left transition-colors hover:bg-muted/30 h-full">
              <div className="inline-flex p-2.5 rounded-lg bg-primary/10 text-primary mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 transition-colors duration-200 group-hover:text-primary">
                {featureLabels[id].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{featureLabels[id].description}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
