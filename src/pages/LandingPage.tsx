import { BookOpen, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TOPICS } from '../topics';
import Footer from '@/components/Layout/Footer';
import FeaturesSection from '@/components/FeaturesSection';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
          Choose Your Learning Path
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Select a topic below to start your journey in web development
        </p>
      </div>

      {/* Topic Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 mb-16 sm:mb-20">
        {TOPICS.map((topic, index) => (
          <div
            key={topic.id}
            onClick={() => navigate(`/docs/${topic.id}/${topic.items[0].id}`)}
            style={{ animationDelay: `${index * 50}ms` }}
            className="
                group relative p-6 sm:p-7 
                border-2 border-slate-200 dark:border-slate-800
                rounded-md
                bg-white dark:bg-slate-900
                hover:border-indigo-300 dark:hover:border-indigo-600
                hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-indigo-900/20
                transition-all duration-300
                cursor-pointer hover:-translate-y-1.5
                overflow-hidden
                flex flex-col
                min-h-70
              "
          >
            {/* Background Accent */}
            <div
              className={`
                  absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40
                  rounded-bl-full opacity-40
                  group-hover:scale-150 transition-transform duration-500
                `}
            />

            <div className="relative flex flex-col h-full">
              {/* Header */}
              <div className="flex items-start justify-between mb-4 sm:mb-5">
                <div
                  className={`
                      p-3 rounded-md
                      group-hover:scale-110 transition-transform shadow-sm
                    `}
                >
                  {topic.icon}
                </div>

                <span className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                  <BookOpen className="w-3 h-3" />
                  {topic.items.length} topics
                </span>
              </div>

              {/* Title & Description */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-2.5 text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {topic.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{topic.description}</p>
              </div>

              {/* Preview Items */}
              <div className="space-y-2 grow">
                {topic.items.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-slate-400 dark:text-slate-500" />
                    <span className="line-clamp-1">{item.title}</span>
                  </div>
                ))}
                {topic.items.length > 3 && (
                  <div className="flex items-start text-xs sm:text-sm text-muted-foreground/70">
                    <ChevronRight className="w-4 h-4 mr-2 mt-0.5 shrink-0 opacity-0" />
                    <span>+{topic.items.length - 3} more...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <FeaturesSection />

      <Footer />
    </div>
  );
};

export default LandingPage;
