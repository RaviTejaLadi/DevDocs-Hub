import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { guidesPath } from '@/app/routes/paths';
import { Button } from '@/components/ui/button';
import { HOMEPAGE_GUIDES } from '@/data/guides';
import { GuideListItem } from '@/features/guides/components/GuideListItem';

export default function GuidesSection() {
  return (
    <section className="mt-20 pt-16 border-t border-b border-border/40 pb-16">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-3 text-sm font-semibold text-foreground">
            <BookOpen className="h-10 w-10 text-primary" aria-hidden />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">{'Guides'}</h1>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {HOMEPAGE_GUIDES.map((guide, index) => (
          <GuideListItem key={guide.slug} guide={guide} index={index} />
        ))}
      </div>

      <div className="mt-6 flex justify-center sm:justify-end">
        <Button
          asChild
          variant="outline"
          className="h-9 gap-2 rounded-lg border-primary/25 bg-primary/5 px-4 text-sm hover:bg-primary/10 hover:border-primary/40 shadow-none"
        >
          <Link to={guidesPath()}>
            {'View All Guides'}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
