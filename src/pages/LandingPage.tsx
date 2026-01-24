import { ChevronRight, Search, Sparkles, Grid3x3, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { TOPICS } from '../topics';
import Footer from '@/components/Layout/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { colors } from '@/constants/colors';

const LandingPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const filteredTopics = TOPICS.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.items.some((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-12 relative">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-200/30 dark:bg-purple-900/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-200/30 dark:bg-blue-900/10 rounded-full blur-3xl -z-10" />

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 border border-purple-100 dark:border-purple-900/30 mb-6">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium text-purple-900 dark:text-purple-300">Start Your Journey Today</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-slate-100 dark:via-purple-200 dark:to-slate-100 bg-clip-text text-transparent">
          Choose Your Learning Path
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4 mb-8">
          Master web development with our carefully curated topics and interactive learning experience
        </p>

        <div className="max-w-2xl mx-auto mb-4">
          <div className="flex gap-2 justify-between items-center">
            <div className="relative group w-[90%]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-purple-500 transition-colors" />
              <Input
                type="text"
                placeholder="Search topics, tutorials, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-9 pl-12 pr-4 py-4 rounded-md border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-300 dark:focus:border-purple-700 focus:ring-4 focus:ring-purple-50 dark:focus:ring-purple-950/50 transition-all shadow-sm hover:shadow-md"
              />
            </div>
            <div className="flex gap-2 ml-auto">
              <Button
                size="sm"
                onClick={() => setViewMode('grid')}
                className={cn(
                  'p-2 rounded-lg transition-all',
                  viewMode === 'grid'
                    ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                )}
              >
                <Grid3x3 className="w-5 h-5" />
              </Button>
              <Button
                size="sm"
                onClick={() => setViewMode('list')}
                className={cn(
                  'p-2 rounded-lg transition-all ',
                  viewMode === 'list'
                    ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                )}
              >
                <List className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-3">
            {searchQuery && (
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Found {filteredTopics.length} {filteredTopics.length === 1 ? 'result' : 'results'}
              </p>
            )}
          </div>
        </div>
      </div>

      {filteredTopics.length > 0 ? (
        <div
          className={cn(
            'mb-16 sm:mb-20',
            viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'flex flex-col gap-4'
          )}
        >
          {filteredTopics.map((topic, index) => {
            const colorScheme = colors[index % colors.length];

            if (viewMode === 'list') {
              return (
                <div
                  key={topic.id}
                  onClick={() => navigate(`/docs/${topic.id}/${topic.items[0].id}`)}
                  className={cn(
                    'group relative p-6',
                    'border',
                    colorScheme.border,
                    'rounded-xl',
                    'bg-white dark:bg-slate-900',
                    'hover:shadow-xl',
                    colorScheme.hover,
                    'transition-all duration-300',
                    'cursor-pointer',
                    'overflow-hidden'
                  )}
                >
                  <div
                    className={cn(
                      'absolute inset-0 bg-linear-to-br',
                      colorScheme.gradient,
                      'opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                    )}
                  />

                  <div className="relative flex items-start gap-6">
                    <div className={`p-4 rounded-xl ${colorScheme.iconBg} shrink-0`}>
                      <div className={colorScheme.iconColor}>{topic.icon}</div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-slate-800 dark:group-hover:text-slate-50 transition-colors">
                          {topic.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full ${colorScheme.badge} text-xs font-semibold whitespace-nowrap ml-4`}
                        >
                          {topic.items.length} topics
                        </span>
                      </div>

                      <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">{topic.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {topic.items.slice(0, 5).map((item) => (
                          <span
                            key={item.id}
                            className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors"
                          >
                            {item.title}
                          </span>
                        ))}
                        {topic.items.length > 5 && (
                          <span className="px-3 py-1 text-slate-500 dark:text-slate-500 text-sm">
                            +{topic.items.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>

                    <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </div>
                </div>
              );
            }

            return (
              <div
                key={topic.id}
                onClick={() => navigate(`/docs/${topic.id}/${topic.items[0].id}`)}
                className={`
                  group relative p-6
                  border ${colorScheme.border}
                  rounded-xl
                  bg-white dark:bg-slate-900
                  hover:shadow-xl ${colorScheme.hover}
                  transition-all duration-300
                  cursor-pointer hover:-translate-y-1
                  overflow-hidden
                  flex flex-col
                `}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${colorScheme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl ${colorScheme.iconBg} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className={colorScheme.iconColor}>{topic.icon}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full ${colorScheme.badge} text-xs font-semibold`}>
                      {topic.items.length} topics
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100 group-hover:text-slate-800 dark:group-hover:text-slate-50 transition-colors">
                    {topic.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1">{topic.description}</p>

                  <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                    {topic.items.slice(0, 3).map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 shrink-0 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                        <span className="line-clamp-1">{item.title}</span>
                      </div>
                    ))}
                    {topic.items.length > 3 && (
                      <p className="text-xs text-slate-500 dark:text-slate-500 ml-6">
                        +{topic.items.length - 3} more topics
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <Search className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">No results found</h3>
          <p className="text-slate-600 dark:text-slate-400">Try searching with different keywords</p>
        </div>
      )}

      <FeaturesSection />

      <Footer />
    </div>
  );
};

export default LandingPage;
