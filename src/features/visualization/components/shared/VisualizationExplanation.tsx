import { BookOpen, Lightbulb, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from '@/i18n/I18nProvider';

type VisualizationExplanationProps = {
  overviewKey: string;
  howItWorksKeys: readonly string[];
  whenToUseKey: string;
  takeawayKey: string;
};

export function VisualizationExplanation({
  overviewKey,
  howItWorksKeys,
  whenToUseKey,
  takeawayKey,
}: VisualizationExplanationProps) {
  const { t } = useI18n();

  return (
    <Card className="border-border/40 shadow-none">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <BookOpen className="h-4 w-4 text-emerald-500" />
          {t('visualization.explanation')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm leading-relaxed text-foreground/85 sm:text-[0.95rem]">{t(overviewKey)}</p>

        <div>
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <Target className="h-3.5 w-3.5" />
            {t('visualization.howItWorks')}
          </p>
          <ul className="space-y-2 text-sm leading-relaxed text-foreground/80">
            {howItWorksKeys.map((key) => (
              <li key={key} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border/35 bg-muted/20 px-4 py-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {t('visualization.whenToUse')}
          </p>
          <p className="text-sm leading-relaxed text-foreground/85">{t(whenToUseKey)}</p>
        </div>

        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/8 px-4 py-3">
          <p className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
            <Lightbulb className="h-3.5 w-3.5" />
            {t('visualization.keyTakeaway')}
          </p>
          <p className="text-sm leading-relaxed text-foreground/90">{t(takeawayKey)}</p>
        </div>
      </CardContent>
    </Card>
  );
}
