import { Link } from 'react-router-dom';
import { BookOpen, ChevronLeft, Code2, Search, SlidersHorizontal, Sparkles, X } from 'lucide-react';
import { LEVEL_ORDER, LEVEL_LABELS } from '@/data/interviewQuestions';
import { Accordion } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { LEVEL_EMOJI, TOPIC_VISUALS, levelPillClass } from '../constants';
import { QuestionBlock } from './QuestionBlock';
import { useTopicDetailFilters } from '../hooks';

export function TopicDetailPage() {
  const {
    topic,
    allQuestions,
    filteredQuestions,
    levelFilter,
    setLevelFilter,
    searchQuery,
    setSearchQuery,
    onlyCodeChallenges,
    onlyTheory,
    setOnlyCodeWithExclusion,
    setOnlyTheoryWithExclusion,
    hasAnyFilters,
    clearAllFilters,
    codingCount,
    theoryCount,
  } = useTopicDetailFilters();

  if (!topic) {
    return (
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" size="sm" asChild className="mb-5 rounded-xl">
          <Link to="/interview-questions" className="inline-flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            {'Back to Interview Questions'}
          </Link>
        </Button>
        <Card className="border-dashed">
          <CardContent className="py-12 text-center space-y-2">
            <span className="text-4xl block" aria-hidden>
              😕
            </span>
            <p className="text-muted-foreground">{'Topic not found.'}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const Icon = topic.icon;
  const visual = TOPIC_VISUALS[topic.id];

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-10 sm:pb-12">
      <Button
        variant="outline"
        size="sm"
        asChild
        className="border-border/35 bg-card/50 hover:bg-accent/55 w-fit rounded-xl"
      >
        <Link to="/interview-questions" className="inline-flex items-center gap-2">
          <ChevronLeft className="h-4 w-4" />
          {'Back to Interview Questions'}
        </Link>
      </Button>

      <Card
        className={cn(
          'relative overflow-hidden border-border/45 shadow-none',
          'bg-linear-to-br from-card via-card to-primary/8'
        )}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <CardHeader className="relative space-y-5 pb-6">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div className="flex items-start gap-4 min-w-0">
              <div className="relative shrink-0">
                <div
                  className={cn(
                    'flex size-14 items-center justify-center rounded-2xl border border-border/35 shadow-none',
                    visual.iconBg
                  )}
                >
                  <Icon className={cn('h-7 w-7', visual.iconColor)} />
                </div>
                <span
                  className="absolute -bottom-1.5 -right-1.5 flex size-7 items-center justify-center rounded-full border border-border/40 bg-background text-sm shadow-none"
                  aria-hidden
                >
                  {visual.emoji}
                </span>
              </div>
              <div className="min-w-0 space-y-2">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/8 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                  <Sparkles className="h-3 w-3" />
                  Topic practice
                </div>
                <CardTitle className="text-2xl sm:text-3xl text-gradient-sheen leading-tight">
                  {`Top ${allQuestions.length} ${topic?.label ?? ''} Interview Questions`}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  {'Filter by level, question type, and search keyword to practice exactly what you need.'}
                </CardDescription>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="h-8 px-3.5 border border-sky-500/25 bg-sky-500/10 text-sky-700 dark:text-sky-300"
              >
                <Code2 className="h-3.5 w-3.5 mr-1.5" />
                💻 {codingCount} {'Coding'}
              </Badge>
              <Badge
                variant="secondary"
                className="h-8 px-3.5 border border-indigo-500/25 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300"
              >
                <BookOpen className="h-3.5 w-3.5 mr-1.5" />
                📖 {theoryCount} {'Theory'}
              </Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Card className="border-border/40 bg-card/65 backdrop-blur-sm shadow-none">
        <CardContent className="pt-6 space-y-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <SlidersHorizontal className="h-4 w-4 text-primary" />
            <span aria-hidden>🎛️</span>
            {'Filters'}
          </div>

          <div className="flex flex-nowrap sm:flex-wrap items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1 sm:overflow-visible sm:mx-0 sm:px-0 sm:pb-0 [scrollbar-width:thin]">
            <button
              type="button"
              onClick={() => setLevelFilter('all')}
              className={cn(
                'px-3.5 py-2 rounded-xl text-sm font-medium border transition-all duration-200 shrink-0',
                levelFilter === 'all'
                  ? 'bg-primary text-primary-foreground border-primary shadow-none scale-[1.02]'
                  : 'bg-muted/35 text-muted-foreground border-border/30 hover:bg-muted/65 hover:text-foreground'
              )}
            >
              ✨ {'All Levels'}
            </button>
            {LEVEL_ORDER.map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => setLevelFilter(lvl)}
                className={cn(
                  'px-3 py-1.5 rounded-xl text-sm font-semibold border transition-all shrink-0',
                  levelPillClass[lvl],
                  levelFilter === lvl
                    ? 'ring-2 ring-offset-2 ring-offset-background ring-foreground/20 shadow-none scale-[1.02]'
                    : 'opacity-85 hover:opacity-100 hover:scale-[1.01]'
                )}
              >
                {LEVEL_EMOJI[lvl]} {LEVEL_LABELS[lvl]}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
            <div className="flex items-center gap-2.5 rounded-xl border border-border/35 bg-muted/20 px-3 py-2">
              <Switch id="only-code" checked={onlyCodeChallenges} onCheckedChange={setOnlyCodeWithExclusion} />
              <label htmlFor="only-code" className="text-sm text-muted-foreground cursor-pointer select-none">
                💻 {'Only Coding'}
              </label>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-border/35 bg-muted/20 px-3 py-2">
              <Switch id="only-theory" checked={onlyTheory} onCheckedChange={setOnlyTheoryWithExclusion} />
              <label htmlFor="only-theory" className="text-sm text-muted-foreground cursor-pointer select-none">
                📖 {'Only Theory'}
              </label>
            </div>
            <div className="relative basis-full sm:basis-auto flex-1 min-w-0 sm:min-w-[220px] max-w-full sm:max-w-md sm:ml-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                placeholder={'Search questions...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-11 border-border/35 bg-background/85 focus-visible:ring-primary/30 rounded-xl"
              />
            </div>
            {hasAnyFilters && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-muted-foreground rounded-xl"
                onClick={clearAllFilters}
              >
                <X className="h-4 w-4 mr-1" />
                {'Clear filters'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-2">
        {filteredQuestions.length === 0 ? (
          <Card className="border-dashed border-border/50 bg-card/50">
            <CardContent className="py-12 text-center space-y-3">
              <span className="text-4xl block" aria-hidden>
                🎯
              </span>
              <p className="text-muted-foreground">{'No questions match your current filters.'}</p>
              {hasAnyFilters && (
                <Button variant="outline" size="sm" className="mt-2 rounded-xl" onClick={clearAllFilters}>
                  {'Reset filters'}
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
