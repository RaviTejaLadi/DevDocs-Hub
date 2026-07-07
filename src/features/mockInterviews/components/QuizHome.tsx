import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, Layers, Play, Search, Sparkles, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { categories } from '../data/quiz-categories';
import type { Quiz } from '../types/quiz';

const CATEGORY_VISUALS: Record<string, { emoji: string; accent: string; ring: string }> = {
  Frontend: { emoji: '🌐', accent: 'from-blue-500/10 to-transparent', ring: 'border-blue-500/20' },
  Backend: { emoji: '⚙️', accent: 'from-emerald-500/10 to-transparent', ring: 'border-emerald-500/20' },
  DevOps: { emoji: '🚀', accent: 'from-orange-500/10 to-transparent', ring: 'border-orange-500/20' },
  'Testing & Quality Assurance': { emoji: '🧪', accent: 'from-violet-500/10 to-transparent', ring: 'border-violet-500/20' },
  'Data & Analytics': { emoji: '📊', accent: 'from-amber-500/10 to-transparent', ring: 'border-amber-500/20' },
  Security: { emoji: '🛡️', accent: 'from-rose-500/10 to-transparent', ring: 'border-rose-500/20' },
  Mobile: { emoji: '📱', accent: 'from-cyan-500/10 to-transparent', ring: 'border-cyan-500/20' },
};

interface QuizHomeProps {
  startQuiz: (quiz: Quiz) => void;
}

function StatCard({ emoji, label, value }: { emoji: string; label: string; value: number }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border/40 bg-card/70 backdrop-blur-sm px-4 py-3 shadow-none">
      <div className="pointer-events-none absolute -right-3 -top-3 text-4xl opacity-[0.12] select-none" aria-hidden>
        {emoji}
      </div>
      <p className="text-2xl font-bold tabular-nums tracking-tight text-foreground">{value}</p>
      <p className="mt-0.5 text-xs font-medium text-muted-foreground">
        <span className="mr-1" aria-hidden>
          {emoji}
        </span>
        {label}
      </p>
    </div>
  );
}

const QuizHome = ({ startQuiz }: QuizHomeProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;

    const query = searchQuery.toLowerCase();
    return categories
      .map((category) => ({
        ...category,
        quizzes: category.quizzes.filter(
          (quiz) =>
            quiz.title.toLowerCase().includes(query) ||
            quiz.description.toLowerCase().includes(query) ||
            category.name.toLowerCase().includes(query)
        ),
      }))
      .filter((category) => category.quizzes.length > 0);
  }, [searchQuery]);

  const totalQuizzes = filteredCategories.reduce((sum, category) => sum + category.quizzes.length, 0);
  const totalCategories = filteredCategories.length;

  const clearSearch = () => setSearchQuery('');

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-4">
      <section
        className={cn(
          'group relative isolate overflow-hidden rounded-2xl border border-border/45',
          'bg-card/40 shadow-none backdrop-blur-xl dark:border-border/35 dark:bg-card/25'
        )}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-[20%] -top-[90%] h-52 w-52 rounded-full bg-primary/12 blur-3xl dark:bg-primary/16" />
          <div className="absolute -bottom-[70%] -left-[15%] h-44 w-44 rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-20%,hsl(var(--primary)/0.12),transparent_55%)]" />
        </div>

        <div className="relative p-6 sm:p-8 space-y-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border/40 bg-background/60 px-3 py-1.5 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:bg-background hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            {'Back to overview'}
          </Link>

          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Timed practice
              </div>
              <div className="flex items-start gap-3.5">
                <span
                  className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-linear-to-br from-primary/15 to-primary/5 text-2xl shadow-none"
                  aria-hidden
                >
                  🎤
                </span>
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gradient-sheen">
                    {'Mock Assessments'}
                  </h1>
                  <p className="text-muted-foreground mt-2 text-sm sm:text-base leading-relaxed">
                    {'Timed quizzes across frontend, backend, DevOps, and more — test your knowledge under pressure.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full sm:w-auto sm:min-w-[200px]">
              <StatCard emoji="📝" label={'Quizzes'} value={totalQuizzes} />
              <StatCard emoji="📂" label={'Categories'} value={totalCategories} />
            </div>
          </div>

          <p className="flex items-start gap-2 rounded-lg border border-border/35 bg-muted/25 px-3.5 py-2.5 text-xs sm:text-sm text-muted-foreground">
            <span className="text-base leading-none mt-0.5" aria-hidden>
              💡
            </span>
            {'Pick a quiz, answer under the timer, and review your score when you submit.'}
          </p>
        </div>
      </section>

      <Card className="border-border/40 bg-card/65 backdrop-blur-sm shadow-none">
        <CardContent className="pt-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <span aria-hidden>🔍</span>
              {'Search quizzes'}
            </div>
            {searchQuery ? (
              <Badge variant="outline" className="h-6 px-2.5 text-xs font-medium border-border/45 bg-muted/30">
                {`Found ${totalQuizzes} quiz${totalQuizzes === 1 ? '' : 'zes'}`}
              </Badge>
            ) : null}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative min-w-0 flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                placeholder={'Search quizzes...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-10 border-border/35 bg-background/85 focus-visible:ring-primary/30 rounded-xl"
              />
            </div>
            {searchQuery ? (
              <Button type="button" variant="ghost" size="sm" className="text-muted-foreground rounded-xl" onClick={clearSearch}>
                <X className="h-4 w-4 mr-1" />
                {'Clear'}
              </Button>
            ) : null}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {filteredCategories.length === 0 ? (
          <Card className="border-dashed border-border/50 bg-card/50 shadow-none">
            <CardContent className="py-12 text-center space-y-3">
              <span className="text-4xl block" aria-hidden>
                🔎
              </span>
              <p className="text-muted-foreground">{'No quizzes match your search.'}</p>
              <Button variant="outline" size="sm" className="rounded-xl" onClick={clearSearch}>
                {'Show all quizzes'}
              </Button>
            </CardContent>
          </Card>
        ) : (
          filteredCategories.map((category) => {
            const visual = CATEGORY_VISUALS[category.name] ?? {
              emoji: '📚',
              accent: 'from-primary/10 to-transparent',
              ring: 'border-primary/20',
            };

            return (
              <section
                key={category.name}
                className={cn(
                  'relative overflow-hidden rounded-2xl border bg-card/72 backdrop-blur-md p-5 sm:p-6',
                  'shadow-[var(--panel-shadow)] dark:bg-card/55 dark:backdrop-blur-sm dark:shadow-none',
                  visual.ring
                )}
              >
                <div
                  className={cn('pointer-events-none absolute inset-0 bg-linear-to-br opacity-80', visual.accent)}
                  aria-hidden
                />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="flex size-9 items-center justify-center rounded-lg border border-border/40 bg-background/70 text-lg shadow-none"
                        aria-hidden
                      >
                        {visual.emoji}
                      </span>
                      <h2 className="text-lg sm:text-xl font-semibold text-foreground">{category.name}</h2>
                    </div>
                    <Badge variant="secondary" className="h-7 px-3 border border-border/35 bg-secondary/65">
                      <Layers className="h-3.5 w-3.5 mr-1 opacity-70" />
                      {`${category.quizzes.length} quizzes`}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                    {category.quizzes.map((quiz) => (
                      <button
                        key={quiz.id}
                        type="button"
                        onClick={() => startQuiz(quiz)}
                        className={cn(
                          'group relative overflow-hidden rounded-xl border border-border/35 bg-card/90 backdrop-blur-sm p-3.5 text-left transition-all duration-200',
                          'shadow-none hover:bg-card hover:border-primary/30 hover:-translate-y-0.5'
                        )}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border/30 bg-primary/8 text-primary [&_svg]:size-4">
                              {quiz.icon}
                            </div>
                            <div className="min-w-0">
                              <p className="font-semibold text-sm text-foreground truncate transition-colors group-hover:text-primary">
                                {quiz.title}
                              </p>
                              <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                                <span aria-hidden>❓</span>
                                {`${quiz.questions} questions`}
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/70 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary shrink-0 mt-0.5" />
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-2">{quiz.description}</p>
                        <div className="mt-2.5 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                          <Play className="h-3 w-3" aria-hidden />
                          {'Start quiz'}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </section>
            );
          })
        )}
      </div>
    </div>
  );
};

export default QuizHome;
