import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookOpen, ChevronLeft, Code2, Search, SlidersHorizontal, X } from 'lucide-react';
import {
  getQuestionsByTopic,
  getTopicById,
  LEVEL_ORDER,
  LEVEL_LABELS,
  type ExperienceLevel,
  type TopicId,
} from '@/data/interviewQuestions';
import { Accordion } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nProvider';
import { useTranslatedText } from '@/i18n/useTranslatedText';
import { levelPillClass } from '../constants/pillClasses';
import { QuestionBlock } from './QuestionBlock';

export function TopicDetailPage() {
  const { t } = useI18n();
  const { topicId } = useParams<{ topicId: string }>();
  const topic = topicId ? getTopicById(topicId as TopicId) : undefined;
  const allQuestions = useMemo(() => (topic ? getQuestionsByTopic(topic.id) : []), [topic]);
  const translatedTopicLabel = useTranslatedText(topic?.label ?? '');

  const [levelFilter, setLevelFilter] = useState<ExperienceLevel | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyCodeChallenges, setOnlyCodeChallenges] = useState(false);
  const [onlyTheory, setOnlyTheory] = useState(false);
  const hasAnyFilters = levelFilter !== 'all' || onlyCodeChallenges || onlyTheory || Boolean(searchQuery.trim());
  const clearAllFilters = () => {
    setLevelFilter('all');
    setOnlyCodeChallenges(false);
    setOnlyTheory(false);
    setSearchQuery('');
  };

  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      const matchLevel = levelFilter === 'all' || q.level === levelFilter;
      const matchSearch = !searchQuery.trim() || q.question.toLowerCase().includes(searchQuery.trim().toLowerCase());
      const type = q.questionType ?? 'theory';
      const matchType =
        (!onlyCodeChallenges && !onlyTheory) ||
        (onlyCodeChallenges && type === 'coding') ||
        (onlyTheory && type === 'theory');
      return matchLevel && matchSearch && matchType;
    });
  }, [allQuestions, levelFilter, searchQuery, onlyCodeChallenges, onlyTheory]);

  if (!topic) {
    return (
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" size="sm" asChild className="mb-5">
          <Link to="/interview-questions" className="inline-flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            {t('interview.backToInterviewQuestions')}
          </Link>
        </Button>
        <Card className="border-dashed">
          <CardContent className="py-12 text-center text-muted-foreground">{t('interview.topicNotFound')}</CardContent>
        </Card>
      </div>
    );
  }

  const Icon = topic.icon;
  const codingCount = allQuestions.filter((q) => (q.questionType ?? 'theory') === 'coding').length;
  const theoryCount = allQuestions.length - codingCount;

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-10 sm:pb-12">
      <Button variant="outline" size="sm" asChild className="border-border/35 bg-card/50 hover:bg-accent/55 w-fit">
        <Link to="/interview-questions" className="inline-flex items-center gap-2">
          <ChevronLeft className="h-4 w-4" />
          {t('interview.backToInterviewQuestions')}
        </Link>
      </Button>

      <Card className="overflow-hidden border-border/40 bg-linear-to-br from-card via-card to-primary/10 shadow-[0_20px_45px_-30px_hsl(var(--foreground)/0.55)]">
        <CardHeader className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-3 rounded-xl border border-primary/20 bg-primary/10">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl sm:text-3xl text-gradient-sheen">
                  {t('interview.topQuestions', { count: allQuestions.length, topic: translatedTopicLabel })}
                </CardTitle>
                <CardDescription className="mt-2 text-sm sm:text-base">
                  {t('interview.filterDescription')}
                </CardDescription>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="h-7 px-3 border border-border/35 bg-secondary/65">
                <Code2 className="h-3.5 w-3.5 mr-1" />
                {codingCount} {t('interview.coding')}
              </Badge>
              <Badge variant="secondary" className="h-7 px-3 border border-border/35 bg-secondary/65">
                <BookOpen className="h-3.5 w-3.5 mr-1" />
                {theoryCount} {t('interview.theory')}
              </Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Card className="border-border/40 bg-card/65 backdrop-blur-sm shadow-[0_14px_35px_-25px_hsl(var(--foreground)/0.65)]">
        <CardContent className="pt-6 space-y-5">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <SlidersHorizontal className="h-4 w-4 text-primary" />
            {t('interview.filters')}
          </div>

          <div className="flex flex-nowrap sm:flex-wrap items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1 sm:overflow-visible sm:mx-0 sm:px-0 sm:pb-0 [scrollbar-width:thin]">
            <button
              type="button"
              onClick={() => setLevelFilter('all')}
              className={cn(
                'px-3 py-1.5 rounded-md text-sm font-medium border transition-colors',
                levelFilter === 'all'
                  ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                  : 'bg-muted/35 text-muted-foreground border-border/30 hover:bg-muted/65 hover:text-foreground'
              )}
            >
              {t('interview.allLevels')}
            </button>
            {LEVEL_ORDER.map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => setLevelFilter(lvl)}
                className={cn(
                  'px-2.5 py-1 rounded-md text-sm font-semibold border transition-all',
                  levelPillClass[lvl],
                  levelFilter === lvl
                    ? 'ring-2 ring-offset-2 ring-offset-background ring-foreground/20 shadow-sm'
                    : 'opacity-85 hover:opacity-100'
                )}
              >
                {LEVEL_LABELS[lvl]}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <div className="flex items-center gap-2">
              <Switch
                id="only-code"
                checked={onlyCodeChallenges}
                onCheckedChange={(checked) => {
                  setOnlyCodeChallenges(checked);
                  if (checked) setOnlyTheory(false);
                }}
              />
              <label htmlFor="only-code" className="text-sm text-muted-foreground cursor-pointer">
                {t('interview.onlyCoding')}
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                id="only-theory"
                checked={onlyTheory}
                onCheckedChange={(checked) => {
                  setOnlyTheory(checked);
                  if (checked) setOnlyCodeChallenges(false);
                }}
              />
              <label htmlFor="only-theory" className="text-sm text-muted-foreground cursor-pointer">
                {t('interview.onlyTheory')}
              </label>
            </div>
            <div className="relative basis-full sm:basis-auto flex-1 min-w-0 sm:min-w-[220px] max-w-full sm:max-w-md sm:ml-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                placeholder={t('interview.searchQuestions')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-10 border-border/35 bg-background/85 focus-visible:ring-primary/30"
              />
            </div>
            {hasAnyFilters && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
                onClick={clearAllFilters}
              >
                <X className="h-4 w-4 mr-1" />
                {t('interview.clearFilters')}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-muted-foreground">
        <p>{t('interview.showing', { shown: filteredQuestions.length, total: allQuestions.length })}</p>
      </div>

      <div className="space-y-2">
        {filteredQuestions.length === 0 ? (
          <Card className="border-dashed border-border/50 bg-card/50">
            <CardContent className="py-10 text-center">
              <p className="text-muted-foreground">{t('interview.noQuestionsMatch')}</p>
              {hasAnyFilters && (
                <Button variant="outline" size="sm" className="mt-4" onClick={clearAllFilters}>
                  {t('interview.resetFilters')}
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <Accordion type="multiple" className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start">
              {[0, 1].map((col) => (
                <div key={col} className="flex flex-col gap-4 sm:gap-5">
                  {filteredQuestions
                    .map((item, index) => ({ item, index }))
                    .filter(({ index }) => index % 2 === col)
                    .map(({ item, index }) => (
                      <QuestionBlock key={item.id} item={item} index={index + 1} levelPillClass={levelPillClass} />
                    ))}
                </div>
              ))}
            </div>
          </Accordion>
        )}
      </div>
    </div>
  );
}
