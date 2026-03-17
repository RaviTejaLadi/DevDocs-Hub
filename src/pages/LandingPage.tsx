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
              className="pl-10 h-11 rounded-lg border-border bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex items-center justify-center gap-1 rounded-lg border border-border bg-muted/30 p-1">
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
            className="gap-2 border-border bg-card/50 hover:bg-accent"
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
                  viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' : 'flex flex-col gap-3'
                )}
              >
                {topics.map((topic, index) => {
                  const color = colors[index % colors.length];

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
                        'group cursor-pointer rounded-lg border border-border bg-card text-card-foreground',
                        'transition-all duration-200 hover:border-primary/30 hover:shadow-sm',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                        viewMode === 'grid'
                          ? 'p-5'
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
                          <span className={cn('text-xs font-medium px-2 py-0.5 rounded-md shrink-0', color.badge)}>
                            {topic.items.length} topics
                          </span>
                        )}
                      </div>

                      <div className={viewMode === 'list' ? 'flex-1 min-w-0 space-y-2' : ''}>
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

                        <ul
                          className={cn(
                            viewMode === 'list' ? 'hidden sm:flex gap-4 text-xs text-muted-foreground/90' : 'space-y-1'
                          )}
                        >
                          {topic.items.slice(0, viewMode === 'list' ? 2 : 3).map((item) => (
                            <li
                              key={item.id}
                              className={cn(
                                'flex items-center gap-1.5 text-muted-foreground',
                                viewMode === 'list' ? 'min-w-0' : 'text-sm'
                              )}
                            >
                              <ChevronRight className="w-3.5 h-3.5 shrink-0 text-muted-foreground/70" />
                              <span className="truncate">{item.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {viewMode === 'list' && (
                        <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto pt-1 sm:pt-0">
                          <span className={cn('text-xs font-medium px-2 py-1 rounded-md shrink-0', color.badge)}>
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
