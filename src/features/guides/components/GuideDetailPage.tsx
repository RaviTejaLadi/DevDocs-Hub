import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Home } from 'lucide-react';
import MarkdownRender from '@/components/markdown';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getGuideBySlug, GUIDE_TYPE_LABELS } from '@/data/guides';
import { guidesPath } from '@/app/routes/paths';
import { cn } from '@/lib/utils';

type GuideDetailPageProps = {
  slug: string | undefined;
};

export default function GuideDetailPage({ slug }: GuideDetailPageProps) {
  const navigate = useNavigate();
  const guide = getGuideBySlug(slug);
  const [content, setContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!guide) {
      setContent(null);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    guide
      .contentLoader()
      .then((mod) => setContent(mod.default))
      .finally(() => setIsLoading(false));
  }, [guide]);

  if (!guide) {
    return (
      <div className="mx-auto max-w-4xl">
        <Button variant="ghost" size="sm" asChild className="mb-5 rounded-xl">
          <Link to={guidesPath()} className="inline-flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            {'Back to guides'}
          </Link>
        </Button>
        <Card className="border-dashed border-border/50 bg-card/50">
          <CardContent className="space-y-4 py-12 text-center">
            <span className="block text-5xl" aria-hidden>
              📖
            </span>
            <h2 className="text-2xl font-bold text-foreground">{'Guide Not Found'}</h2>
            <p className="text-muted-foreground">{"This guide doesn't exist or couldn't be found."}</p>
            <Button onClick={() => navigate(guidesPath())} className="w-full rounded-xl sm:w-auto">
              <Home className="mr-2 h-4 w-4" />
              {'View all guides'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <article className="mx-auto w-full min-w-0 max-w-4xl space-y-6 pb-10">
      <div className="space-y-4 border-b border-border/40 pb-6">
        <Link
          to={guidesPath()}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border/40 bg-background/60 px-3 py-1.5 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:bg-background hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          {'Back to guides'}
        </Link>

        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            {guide.isNew && (
              <Badge
                variant="outline"
                className="h-5 border-emerald-500/35 bg-emerald-500/10 px-1.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300"
              >
                {'New'}
              </Badge>
            )}
            <Badge variant="outline" className="h-5 border-border/45 bg-muted/30 px-2 text-[10px] font-semibold uppercase">
              {GUIDE_TYPE_LABELS[guide.type]}
            </Badge>
            {guide.publishedMonth && (
              <span className="text-xs text-muted-foreground">{guide.publishedMonth}</span>
            )}
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-gradient-sheen sm:text-3xl lg:text-4xl">
            {guide.title}
          </h1>

          {guide.description && (
            <p className="max-w-2xl text-sm text-muted-foreground leading-relaxed sm:text-base">
              {guide.description}
            </p>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="space-y-3" aria-busy="true">
          <div className="h-8 w-2/3 max-w-md animate-pulse rounded-lg bg-muted/35" />
          <div className="h-64 animate-pulse rounded-2xl border border-border/35 bg-muted/20" />
        </div>
      ) : content ? (
        <div className={cn('guide-article min-w-0')}>
          <MarkdownRender content={content} headingIdScope={guide.slug} />
        </div>
      ) : null}
    </article>
  );
}
