import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from '@/i18n/I18nProvider';
import { visualizationPath } from '@/app/routes/paths';
import { getCategoryMeta } from '../../constants/categories';
import type { VisualizationCategory } from '../../types';

type VisualizationPageShellProps = {
  category: VisualizationCategory;
  titleKey: string;
  descriptionKey: string;
  stepIndex: number;
  stepCount: number;
  children: ReactNode;
};

export function VisualizationPageShell({
  category,
  titleKey,
  descriptionKey,
  stepIndex,
  stepCount,
  children,
}: VisualizationPageShellProps) {
  const { t } = useI18n();
  const categoryMeta = getCategoryMeta(category);

  return (
    <div className="mx-auto max-w-6xl space-y-5 pb-8">
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="outline" size="sm" asChild className="rounded-xl border-border/35 bg-card/50">
          <Link to={visualizationPath()} className="inline-flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            {t('visualization.backToVisualizations')}
          </Link>
        </Button>
        {categoryMeta && (
          <Badge variant="outline" className="h-7 border-emerald-500/25 bg-emerald-500/5 px-3">
            {t(categoryMeta.labelKey)}
          </Badge>
        )}
        <Badge variant="secondary" className="h-7 border border-border/35">
          {t('visualization.stepOf', { current: stepIndex + 1, total: stepCount })}
        </Badge>
      </div>

      <Card className="overflow-hidden border-border/45 bg-linear-to-br from-card via-card to-emerald-500/8 shadow-none">
        <CardHeader className="space-y-2 pb-4">
          <CardTitle className="text-2xl text-gradient-sheen sm:text-3xl">{t(titleKey)}</CardTitle>
          <CardDescription className="max-w-3xl text-sm leading-relaxed sm:text-base">
            {t(descriptionKey)}
          </CardDescription>
        </CardHeader>
      </Card>

      {children}
    </div>
  );
}
