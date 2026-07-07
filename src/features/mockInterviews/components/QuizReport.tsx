import { Award, ChevronLeft, Clock, Play, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { formatTime } from '../utils/formatTime';

interface QuizReportProps {
  score: number;
  timeTaken: number;
  maxStreak: number;
  percentage: number;
  backToHome: () => void;
  retakeQuiz: () => void;
}

function MetricCard({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: typeof Target;
  label: string;
  value: string;
  tone: string;
}) {
  return (
    <div className="rounded-xl border border-border/40 bg-card/70 p-4 text-center shadow-none">
      <div className={cn('mx-auto mb-2 flex size-10 items-center justify-center rounded-lg border', tone)}>
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <p className="text-2xl font-bold tabular-nums text-foreground">{value}</p>
      <p className="mt-0.5 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

const QuizReport = ({ score, percentage, timeTaken, maxStreak, backToHome, retakeQuiz }: QuizReportProps) => {
  const message =
    percentage >= 90
      ? { emoji: '🎉', title: 'Exceptional!', body: "You're a true expert in this field!" }
      : percentage >= 75
      ? { emoji: '🚀', title: 'Great job!', body: 'You have solid knowledge with room to grow.' }
      : percentage >= 60
      ? { emoji: '👍', title: 'Good work!', body: "You're on the right track — keep practicing." }
      : { emoji: '📚', title: 'Keep learning!', body: 'Review the concepts and try again.' };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-4">
      <Card className="overflow-hidden border-border/45 bg-card/72 shadow-none backdrop-blur-md">
        <div className="border-b border-border/40 bg-linear-to-br from-primary/12 via-primary/5 to-transparent px-6 py-8 text-center">
          <Award className="mx-auto mb-3 h-12 w-12 text-primary" aria-hidden />
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{'Quiz complete'}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{'Here is how you performed'}</p>
        </div>

        <CardContent className="space-y-6 p-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <MetricCard
              icon={Target}
              label="Score"
              value={String(score)}
              tone="border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
            />
            <MetricCard
              icon={Zap}
              label="Accuracy"
              value={`${percentage}%`}
              tone="border-primary/25 bg-primary/10 text-primary"
            />
            <MetricCard
              icon={Clock}
              label="Avg. time"
              value={formatTime(timeTaken)}
              tone="border-violet-500/25 bg-violet-500/10 text-violet-600 dark:text-violet-400"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-border/35 bg-muted/20 p-3.5">
              <Award className="h-5 w-5 shrink-0 text-amber-500" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-foreground">{'Max streak'}</p>
                <p className="text-xs text-muted-foreground">{`${maxStreak} correct in a row`}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-border/35 bg-muted/20 p-3.5">
              <Zap className="h-5 w-5 shrink-0 text-orange-500" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-foreground">{'Pace'}</p>
                <p className="text-xs text-muted-foreground">{`${Math.round(timeTaken)}s per question`}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border/35 bg-muted/20 px-4 py-5 text-center">
            <p className="text-2xl" aria-hidden>
              {message.emoji}
            </p>
            <p className="mt-1 text-lg font-semibold text-foreground">{message.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{message.body}</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button onClick={retakeQuiz} size="sm" className="rounded-lg">
              <Play className="h-4 w-4" aria-hidden />
              {'Retake quiz'}
            </Button>
            <Button onClick={backToHome} variant="outline" size="sm" className="rounded-lg">
              <ChevronLeft className="h-4 w-4" aria-hidden />
              {'Back to quizzes'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizReport;
