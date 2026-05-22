import type { ReactNode } from 'react';
import type { Topic } from '@/data/topics';

type DocsFeedTopicZoneProps = {
  topic: Topic;
  children: ReactNode;
};

/** Groups feed posts by topic (semantic wrapper only — no background tint). */
export function DocsFeedTopicZone({ topic, children }: DocsFeedTopicZoneProps) {
  return (
    <section
      className="relative scroll-mt-20 py-2 sm:py-3 md:scroll-mt-24"
      data-topic-zone={topic.id}
      aria-label={topic.title}
    >
      <div className="flex min-w-0 flex-col gap-5 sm:gap-6">{children}</div>
    </section>
  );
}
