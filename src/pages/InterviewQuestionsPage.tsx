import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, BookOpen, ChevronLeft, Code2, HelpCircle, Search, SlidersHorizontal, X } from 'lucide-react';
import {
  INTERVIEW_QUESTIONS,
  INTERVIEW_TOPICS,
  TOPIC_CATEGORIES,
  getQuestionsByTopic,
  getTopicById,
  LEVEL_ORDER,
  LEVEL_LABELS,
  type TopicId,
  type ExperienceLevel,
  type InterviewQA,
} from '@/data/interviewQuestions';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { AnswerMarkdown } from '@/components/MarkdownRender/AnswerMarkdown';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nProvider';
import { TranslatedText } from '@/i18n/TranslatedText';
import { useTranslatedText } from '@/i18n/useTranslatedText';

const levelPillClass: Record<ExperienceLevel, string> = {
  entry: 'text-emerald-600 border-emerald-500/60 bg-emerald-500/10',
  junior: 'text-amber-600 border-amber-500/60 bg-amber-500/10',
  mid: 'text-orange-600 border-orange-500/60 bg-orange-500/10',
  senior: 'text-pink-600 border-pink-500/60 bg-pink-500/10',
  expert: 'text-purple-600 border-purple-500/60 bg-purple-500/10',
};

const questionTypePillClass = {
  coding: 'text-sky-600 border-sky-500/60 bg-sky-500/10',
  theory: 'text-indigo-600 border-indigo-500/60 bg-indigo-500/10',
} as const;

/** Topic list page with category sections and topic cards */
function TopicListPage() {
  const { t } = useI18n();
  const categories = Object.keys(TOPIC_CATEGORIES);
  const topicsByCategory = categories.reduce<Record<string, typeof INTERVIEW_TOPICS>>((acc, cat) => {
    acc[cat] = INTERVIEW_TOPICS.filter((t) => t.category === cat);
    return acc;
  }, {});

  const countForTopic = (topicId: string) => INTERVIEW_QUESTIONS.filter((q) => q.topicId === topicId).length;

  const totalQuestions = INTERVIEW_QUESTIONS.length;
  const totalTopics = INTERVIEW_TOPICS.length;
  const totalCategories = categories.length;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <section className="rounded-2xl border border-border/40/60 bg-linear-to-br from-card via-card to-primary/5 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              {t('interview.backToOverview')}
            </Link>
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl border border-primary/20 bg-primary/10">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{t('interview.pageTitle')}</h1>
                <p className="text-muted-foreground mt-1 max-w-2xl">
                  {t('interview.pageDescription')}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="h-7 px-3">
              {t('interview.questions', { count: totalQuestions })}
            </Badge>
            <Badge variant="secondary" className="h-7 px-3">
              {t('interview.topics', { count: totalTopics })}
            </Badge>
            <Badge variant="secondary" className="h-7 px-3">
              {t('interview.categories', { count: totalCategories })}
            </Badge>
          </div>
        </div>
      </section>

      <div className="space-y-6">
        {categories.map((category) => {
          const topics = topicsByCategory[category];
          if (!topics.length) return null;

          return (
            <section key={category} className="rounded-xl border border-border/40/60 bg-card/40 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3 mb-4">
                <h2 className="text-lg font-semibold text-foreground">
                  <TranslatedText text={category} />
                </h2>
                <Badge variant="outline">{t('interview.topicCount', { count: topics.length })}</Badge>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {topics.map((topic) => {
                  const count = countForTopic(topic.id);
                  const Icon = topic.icon;
                  return (
                    <Link
                      key={topic.id}
                      to={`/interview-questions/${topic.id}`}
                      className={cn(
                        'group rounded-xl border border-border/40/70 bg-card p-4 transition-all duration-200',
                        'hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5'
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-foreground truncate">
                              <TranslatedText text={topic.label} />
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {t('interview.topicQuestionsCount', { count })}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

/** Topic detail page with filters, search, and expandable Q&A */
function TopicDetailPage() {
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
    <div className="max-w-6xl mx-auto space-y-6">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/interview-questions" className="inline-flex items-center gap-2">
          <ChevronLeft className="h-4 w-4" />
          {t('interview.backToInterviewQuestions')}
        </Link>
      </Button>

      <Card className="overflow-hidden border-border/40/70 bg-linear-to-br from-card via-card to-primary/5">
        <CardHeader className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-3 rounded-xl border border-primary/20 bg-primary/10">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl sm:text-3xl">
                  {t('interview.topQuestions', { count: allQuestions.length, topic: translatedTopicLabel })}
                </CardTitle>
                <CardDescription className="mt-2 text-sm sm:text-base">
                  {t('interview.filterDescription')}
                </CardDescription>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="h-7 px-3">
                <Code2 className="h-3.5 w-3.5 mr-1" />
                {codingCount} {t('interview.coding')}
              </Badge>
              <Badge variant="secondary" className="h-7 px-3">
                <BookOpen className="h-3.5 w-3.5 mr-1" />
                {theoryCount} {t('interview.theory')}
              </Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Card className="border-border/40/70 bg-card/60">
        <CardContent className="pt-6 space-y-5">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <SlidersHorizontal className="h-4 w-4 text-primary" />
            {t('interview.filters')}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setLevelFilter('all')}
              className={cn(
                'px-3 py-1.5 rounded-md text-sm font-medium border transition-colors',
                levelFilter === 'all'
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-muted/50 text-muted-foreground border-transparent hover:bg-muted'
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
                    ? 'ring-2 ring-offset-2 ring-offset-background ring-foreground/20'
                    : 'opacity-80 hover:opacity-100'
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
                className="pl-9 h-10"
              />
            </div>
            {hasAnyFilters && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
                onClick={() => {
                  setLevelFilter('all');
                  setOnlyCodeChallenges(false);
                  setOnlyTheory(false);
                  setSearchQuery('');
                }}
              >
                <X className="h-4 w-4 mr-1" />
                {t('interview.clearFilters')}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-muted-foreground">
        <p>
          {t('interview.showing', { shown: filteredQuestions.length, total: allQuestions.length })}
        </p>
      </div>

      <div className="space-y-2">
        {filteredQuestions.length === 0 ? (
          <Card className="border-dashed">
            <CardContent className="py-10 text-center">
              <p className="text-muted-foreground">{t('interview.noQuestionsMatch')}</p>
              {hasAnyFilters && (
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4"
                  onClick={() => {
                    setLevelFilter('all');
                    setOnlyCodeChallenges(false);
                    setOnlyTheory(false);
                    setSearchQuery('');
                  }}
                >
                  {t('interview.resetFilters')}
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <Accordion type="single" collapsible className="w-full">
            {filteredQuestions.map((item, index) => (
              <QuestionBlock key={item.id} item={item} index={index + 1} levelPillClass={levelPillClass} />
            ))}
          </Accordion>
        )}
      </div>
    </div>
  );
}

function QuestionBlock({
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
      className="group border border-border/40/70 rounded-xl bg-card overflow-hidden mb-3 last:mb-0 shadow-sm hover:shadow-md transition-shadow"
    >
      <AccordionTrigger className="px-4 sm:px-5 py-4 hover:no-underline hover:bg-muted/20 data-[state=open]:bg-muted/30">
        <div className="flex flex-wrap items-center justify-between gap-2 w-full text-left pr-2">
          <div className="flex items-start gap-2.5 min-w-0 flex-1">
            <span className="shrink-0 text-muted-foreground font-semibold text-xs rounded-md border border-border/40 px-2 py-1 mt-0.5">
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
        <div className="pt-4 border-t border-border/40 mt-0">
          <h3 className="text-sm font-semibold text-foreground mb-3 w-fit">{t('interview.answer')}</h3>
          <AnswerMarkdown content={item.answer} />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

/** Renders topic list or topic detail based on route */
const InterviewQuestionsPage = () => {
  const { topicId } = useParams<{ topicId?: string }>();

  if (topicId) {
    return <TopicDetailPage />;
  }
  return <TopicListPage />;
};

export default InterviewQuestionsPage;
