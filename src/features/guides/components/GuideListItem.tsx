import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getGuideHref, GUIDE_TYPE_LABELS, type Guide } from '@/data/guides';
import { cn } from '@/lib/utils';

const TYPE_STYLES: Record<Guide['type'], string> = {
  textual: 'border-sky-500/30 bg-sky-500/8 text-sky-700 dark:text-sky-300',
  question: 'border-amber-500/30 bg-amber-500/8 text-amber-700 dark:text-amber-300',
  roadmap: 'border-violet-500/30 bg-violet-500/8 text-violet-700 dark:text-violet-300',
};

type GuideListItemProps = {
  guide: Guide;
  className?: string;
  index:number
};

export function GuideListItem({ guide, className,index }: GuideListItemProps) {
  return (
    <Link
      to={getGuideHref(guide)}
      className={cn(
        'group flex flex-col gap-2 rounded-xl border border-border/40 bg-card/50 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4',
        'transition-all duration-200 hover:border-primary/30 hover:bg-card/80 hover:shadow-none',
        className
      )}
    >
      <span className="flex items-center gap-3 min-w-0">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/50 bg-muted/40 text-xs font-semibold tabular-nums text-muted-foreground">
          {index + 1}
        </span>
        <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary sm:text-base">
          {guide.title}
        </span>
      </span>

      <span className="flex shrink-0 flex-wrap items-center gap-2 text-xs">
        {(guide.isNew || guide.publishedMonth) && (
          <span className="text-muted-foreground">
            {guide.isNew && (
              <Badge
                variant="outline"
                className="mr-1.5 h-5 border-emerald-500/35 bg-emerald-500/10 px-1.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300"
              >
                {'New'}
              </Badge>
            )}
            {guide.publishedMonth && <span>{guide.publishedMonth}</span>}
          </span>
        )}

        <Badge
          variant="outline"
          className={cn('h-5 gap-1 px-2 text-[10px] font-semibold uppercase', TYPE_STYLES[guide.type])}
        >
          {GUIDE_TYPE_LABELS[guide.type]}
          <ArrowRight className="h-3 w-3 opacity-70 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Badge>
      </span>
    </Link>
  );
}
