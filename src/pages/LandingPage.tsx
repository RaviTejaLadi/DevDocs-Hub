import { ChevronRight, Search, Sparkles, Grid3x3, List, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';

import { TOPICS } from '../topics';
import Footer from '@/components/Layout/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { colors } from '@/constants/colors';
import { Separator } from '@/components/ui/separator';

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
    <div className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 max-w-7xl mx-auto">
      <div className="text-center mb-10 relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 border border-purple-100 dark:border-purple-900/30 mb-6">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium">Start Your Journey</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-linear-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
          Choose Your Learning Path
        </h1>

        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Learn frontend, backend, cloud, system design and more.
        </p>

        <div className="max-w-2xl mx-auto mt-6 flex gap-3 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics..."
              className="pl-12 h-10"
            />
          </div>

          <Button size="icon" variant={viewMode === 'grid' ? 'default' : 'outline'} onClick={() => setViewMode('grid')}>
            <Grid3x3 className="w-4 h-4" />
          </Button>

          <Button size="icon" variant={viewMode === 'list' ? 'default' : 'outline'} onClick={() => setViewMode('list')}>
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {Object.entries(groupedTopics).map(([category, topics]) => {
        const isCollapsed = collapsed[category];

        return (
          <section key={category} className="mb-12">
            <button onClick={() => toggleSection(category)} className="w-full flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold capitalize">{category.replace('-', ' ')}</h2>
              <ChevronDown className={cn('w-5 h-5 transition-transform', isCollapsed && '-rotate-90')} />
            </button>
            <Separator className="mb-2" />
            {!isCollapsed && (
              <div
                className={cn(
                  viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'flex flex-col gap-4'
                )}
              >
                {topics.map((topic, index) => {
                  const color = colors[index % colors.length];

                  return (
                    <div
                      key={topic.id}
                      onClick={() => navigate(`/docs/${topic.id}/${topic.items[0].id}`)}
                      className={cn(
                        'group cursor-pointer p-6 rounded-xl border transition-all',
                        color.border,
                        color.hover,
                        'bg-white dark:bg-slate-900'
                      )}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className={cn('p-3 rounded-lg', color.iconBg)}>{topic.icon}</div>
                        <span className={cn('text-xs px-2 py-1 rounded', color.badge)}>
                          {topic.items.length} topics
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold mb-2">{topic.title}</h3>

                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{topic.description}</p>

                      <div className="space-y-1">
                        {topic.items.slice(0, 3).map((item) => (
                          <div key={item.id} className="flex items-center text-sm text-slate-500">
                            <ChevronRight className="w-4 h-4 mr-2" />
                            {item.title}
                          </div>
                        ))}
                      </div>
                    </div>
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
