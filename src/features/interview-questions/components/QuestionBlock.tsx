import { lazy, Suspense } from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { LEVEL_LABELS, type ExperienceLevel, type InterviewQA } from '@/data/interviewQuestions';
import { cn } from '@/lib/utils';
import { questionTypePillClass } from '../constants/pillClasses';
import { LEVEL_EMOJI } from '../constants/topicVisuals';

const AnswerMarkdownLazy = lazy(() =>
  import('@/components/markdown/AnswerMarkdown').then((mod) => ({ default: mod.AnswerMarkdown }))
);

const TYPE_EMOJI = { coding: '💻', theory: '📖' } as const;

export function QuestionBlock({
  item,
  index,
  levelPillClass,
}: {
  item: InterviewQA;
  index: number;
  levelPillClass: Record<ExperienceLevel, string>;
}) {
  const questionType = item.questionType ?? 'theory';
  const questionTypeLabel = {
    coding: 'Coding',
    theory: 'Theory',
  } as const;

  return (
    <AccordionItem
      value={item.id}
      className="group border border-border/40 border-b! rounded-2xl tahoe-glass overflow-hidden shadow-none hover:shadow-none hover:border-primary/35 transition-all duration-300"
    >
      <AccordionTrigger className="px-4 sm:px-5 py-4 hover:no-underline hover:bg-muted/25 data-[state=open]:bg-muted/40 transition-colors duration-200 [&>svg]:text-primary [&>svg]:transition-transform [&>svg]:duration-200">
        <div className="flex flex-wrap items-center justify-between gap-3 w-full text-left pr-2">
          <div className="flex items-start gap-3 min-w-0 flex-1">
            <span className="shrink-0 flex size-8 items-center justify-center rounded-lg border border-primary/25 bg-linear-to-br from-primary/15 to-primary/5 text-primary font-bold text-xs shadow-none">
              {index}
            </span>
            <span className="font-medium text-foreground leading-relaxed pt-0.5">{item.question}</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 w-full sm:w-auto justify-start sm:justify-end pl-11 sm:pl-0">
            <span
              className={cn(
                'inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border',
                questionTypePillClass[questionType]
              )}
            >
              <span aria-hidden>{TYPE_EMOJI[questionType]}</span>
              {questionTypeLabel[questionType]}
            </span>
            <span
              className={cn(
                'inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border',
                levelPillClass[item.level]
              )}
            >
              <span aria-hidden>{LEVEL_EMOJI[item.level]}</span>
              {LEVEL_LABELS[item.level]}
            </span>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4 sm:px-5 pb-5 pt-0">
        <div className="pt-4 border-t border-border/40 mt-0 bg-linear-to-b from-muted/5 to-muted/15 -mx-4 sm:-mx-5 px-4 sm:px-5 rounded-b-2xl">
          <Suspense fallback={<div className="min-h-16 animate-pulse rounded-xl bg-muted/30" aria-hidden />}>
            <AnswerMarkdownLazy content={item.answer} />
          </Suspense>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
