import { lazy, Suspense } from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { LEVEL_LABELS, type ExperienceLevel, type InterviewQA } from '@/data/interviewQuestions';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nProvider';
import { useTranslatedText } from '@/i18n/useTranslatedText';
import { questionTypePillClass } from '../constants/pillClasses';

const AnswerMarkdownLazy = lazy(() =>
  import('@/components/markdown/AnswerMarkdown').then((mod) => ({ default: mod.AnswerMarkdown }))
);

export function QuestionBlock({
  item,
  index,
  levelPillClass,
}: {
  item: InterviewQA;
  index: number;
  levelPillClass: Record<ExperienceLevel, string>;
}) {
  const { t } = useI18n();
  const translatedQuestion = useTranslatedText(item.question);
  const questionTypeLabel = {
    coding: t('interview.coding'),
    theory: t('interview.theory'),
  } as const;

  return (
    <AccordionItem
      value={item.id}
      className="group border border-border/40 border-b! rounded-xl bg-card/80 backdrop-blur-sm overflow-hidden shadow-[0_10px_24px_-20px_hsl(var(--foreground)/0.8)] hover:shadow-[0_18px_36px_-24px_hsl(var(--foreground)/0.65)] hover:border-primary/30 transition-all duration-200"
    >
      <AccordionTrigger className="px-4 sm:px-5 py-4 hover:no-underline hover:bg-muted/20 data-[state=open]:bg-muted/35 transition-colors duration-200 [&>svg]:transition-transform [&>svg]:duration-200 [&>svg]:ease-[cubic-bezier(0.22,1,0.36,1)]">
        <div className="flex flex-wrap items-center justify-between gap-2 w-full text-left pr-2">
          <div className="flex items-start gap-2.5 min-w-0 flex-1">
            <span className="shrink-0 text-muted-foreground font-semibold text-xs rounded-md border border-border/40 bg-muted/30 px-2 py-1 mt-0.5">
              Q{index}
            </span>
            <span className="font-medium text-foreground leading-relaxed">{translatedQuestion}</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 w-full sm:w-auto justify-start sm:justify-end">
            <span
              className={cn(
                'px-2.5 py-0.5 rounded-full text-xs font-medium border',
                questionTypePillClass[item.questionType ?? 'theory']
              )}
            >
              {questionTypeLabel[item.questionType ?? 'theory']}
            </span>
            <span className={cn('px-2.5 py-0.5 rounded-full text-xs font-medium border', levelPillClass[item.level])}>
              {LEVEL_LABELS[item.level]}
            </span>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4 sm:px-5 pb-5 pt-0">
        <div className="pt-4 border-t border-border/40 mt-0 bg-linear-to-b from-transparent to-muted/10 -mx-4 sm:-mx-5 px-4 sm:px-5">
          <h3 className="text-sm font-semibold text-foreground mb-3 w-fit">{t('interview.answer')}</h3>
          <Suspense fallback={<div className="min-h-16 animate-pulse rounded-md bg-muted/30" aria-hidden />}>
            <AnswerMarkdownLazy content={item.answer} />
          </Suspense>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
