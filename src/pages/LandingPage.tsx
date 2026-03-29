import { ChevronRight, Search, Grid3x3, List, ChevronDown, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';

import { TOPICS } from '../topics';
import Footer from '@/components/Layout/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import { Logo } from '@/components/Logo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { colors } from '@/constants/colors';

type ViewMode = 'grid' | 'list';

const badgeToneClasses = [
  'border-sky-400/25 bg-sky-500/10 text-sky-200',
  'border-violet-400/25 bg-violet-500/10 text-violet-200',
  'border-emerald-400/25 bg-emerald-500/10 text-emerald-200',
  'border-amber-400/25 bg-amber-500/10 text-amber-200',
  'border-rose-400/25 bg-rose-500/10 text-rose-200',
  'border-cyan-400/25 bg-cyan-500/10 text-cyan-200',
  'border-fuchsia-400/25 bg-fuchsia-500/10 text-fuchsia-200',
  'border-teal-400/25 bg-teal-500/10 text-teal-200',
];

const LandingPage = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const filteredTopics = useMemo(() => {
    if (!searchQuery) return TOPICS;

    const query = searchQuery.toLowerCase();

    return TOPICS.filter(
      (topic) =>
        topic.title.toLowerCase().includes(query) ||
        topic.description.toLowerCase().includes(query) ||
        topic.items.some((item) => item.title.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const groupedTopics = useMemo(() => {
    return filteredTopics.reduce<Record<string, typeof TOPICS>>((acc, topic) => {
      if (!acc[topic.category]) acc[topic.category] = [];
      acc[topic.category].push(topic);
      return acc;
    }, {});
  }, [filteredTopics]);

  const toggleSection = (category: string) => {
    setCollapsed((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-20 max-w-5xl mx-auto">
      {/* Hero – roadmap.sh style */}
      <header className="text-center pt-8 sm:pt-12 pb-12 sm:pb-16">
        <h1 className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-3">
          <Logo showText size="lg" asLink={false} className="justify-center hover:opacity-100" />
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8">
          Fullstack developer topics in a simplified way—your go-to place for quick revision before interviews or
          day-to-day coding.
        </p>

        <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics..."
              className="pl-10 h-11 rounded-lg border-border/40 bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex items-center justify-center gap-1 rounded-lg border border-border/40 bg-muted/30 p-1">
            <Button
              size="icon"
              variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
              // className=" px-3"
              onClick={() => setViewMode('grid')}
            >
              <Grid3x3 className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant={viewMode === 'list' ? 'secondary' : 'ghost'}
              // className=" px-3"
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="mt-6">
          <Button
            variant="outline"
            className="gap-2 border-border/40 bg-card/50 hover:bg-accent"
            onClick={() => navigate('/interview-questions')}
          >
            <HelpCircle className="h-4 w-4" />
            Interview Questions (by level)
          </Button>
        </div>
      </header>

      {/* Topic sections */}
      {Object.entries(groupedTopics).map(([category, topics]) => {
        const isCollapsed = collapsed[category];

        return (
          <section key={category} className="mb-14">
            <button
              type="button"
              onClick={() => toggleSection(category)}
              className="w-full flex items-center justify-between py-2 text-left group"
            >
              <h2 className="text-lg font-semibold text-foreground capitalize tracking-tight">
                {category.replace(/-/g, ' ')}
              </h2>
              <ChevronDown
                className={cn('w-5 h-5 text-muted-foreground transition-transform', isCollapsed && '-rotate-90')}
              />
            </button>

            {!isCollapsed && (
              <div
                className={cn(
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr'
                    : 'flex flex-col gap-3'
                )}
              >
                {topics.map((topic, index) => {
                  const color = colors[index % colors.length];
                  const badgeItems = topic.items.slice(0, 8);
                  const extraBadgeCount = Math.max(topic.items.length - 8, 0);

                  return (
                    <article
                      key={topic.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => navigate(`/docs/${topic.id}/${topic.items[0].id}`)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          navigate(`/docs/${topic.id}/${topic.items[0].id}`);
                        }
                      }}
                      className={cn(
                        'group cursor-pointer rounded-lg border border-border/40 bg-card text-card-foreground',
                        'transition-all duration-200 hover:border-primary/30 hover:shadow-sm',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                        viewMode === 'grid'
                          ? 'p-5 h-full flex flex-col'
                          : 'p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5'
                      )}
                    >
                      <div
                        className={cn(
                          viewMode === 'grid'
                            ? 'flex items-start justify-between gap-2 mb-3'
                            : 'flex items-center gap-3 shrink-0'
                        )}
                      >
                        <div className={cn('shrink-0 p-2.5 rounded-lg', color.iconBg, color.iconColor)}>
                          {topic.icon}
                        </div>
                        {viewMode === 'grid' && (
                          <span className="text-xs font-medium px-2 py-0.5 rounded-md shrink-0 border border-border/40 bg-muted/35 text-muted-foreground/90">
                            {topic.items.length} topics
                          </span>
                        )}
                      </div>

                      <div className={cn(viewMode === 'list' ? 'flex-1 min-w-0 space-y-2' : 'flex-1')}>
                        <h3 className={cn('font-semibold text-foreground', viewMode === 'list' ? 'text-base' : 'mb-1')}>
                          {topic.title}
                        </h3>
                        <p
                          className={cn(
                            'text-sm text-muted-foreground',
                            viewMode === 'list' ? 'line-clamp-1 sm:line-clamp-2' : 'mb-3 line-clamp-2'
                          )}
                        >
                          {topic.description}
                        </p>

                        <div className={cn('flex flex-wrap gap-2', viewMode === 'grid' ? 'mt-4' : 'mt-2')}>
                          {badgeItems.map((item, badgeIndex) => (
                            <span
                              key={item.id}
                              className={cn(
                                'inline-flex max-w-full items-center rounded-md border px-2.5 py-1 text-xs',
                                badgeToneClasses[badgeIndex % badgeToneClasses.length]
                              )}
                            >
                              <span className="truncate">{item.title}</span>
                            </span>
                          ))}
                          {extraBadgeCount > 0 && (
                            <span className="inline-flex items-center rounded-md border border-border/40 bg-muted/35 px-2.5 py-1 text-xs text-muted-foreground/90">
                              +{extraBadgeCount} more
                            </span>
                          )}
                        </div>
                      </div>

                      {viewMode === 'list' && (
                        <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto pt-1 sm:pt-0">
                          <span className="text-xs font-medium px-2 py-1 rounded-md shrink-0 border border-border/40 bg-muted/35 text-muted-foreground/90">
                            {topic.items.length} topics
                          </span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        );
      })}

      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
