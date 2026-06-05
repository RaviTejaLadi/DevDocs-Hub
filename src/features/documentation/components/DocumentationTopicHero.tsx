import { FileText } from 'lucide-react';
import type { Topic } from '@/data/topics';
import { TranslatedText } from '@/i18n/TranslatedText';

export function DocumentationTopicHero({ topic }: { topic: Topic }) {
  const iconEl = topic.icon ?? (
    <FileText className="size-5 text-primary" strokeWidth={1.75} aria-hidden />
  );

  return (
    <div className="not-prose flex items-start gap-3 rounded-xl border border-border/40 bg-card/50 px-4 py-3 sm:px-5 sm:py-4">
      <div
        className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border/40 bg-muted/20 text-primary [&_svg]:size-5"
        aria-hidden
      >
        {iconEl}
      </div>
      <div className="min-w-0 space-y-1">
        <h1 className="text-lg font-semibold leading-tight text-foreground sm:text-xl">
          <TranslatedText text={topic.title} />
        </h1>
        {topic.description ? (
          <p className="text-sm leading-relaxed text-muted-foreground">
            <TranslatedText text={topic.description} />
          </p>
        ) : null}
      </div>
    </div>
  );
}
