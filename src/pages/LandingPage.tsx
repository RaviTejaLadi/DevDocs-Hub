import { ArrowRight, BookOpen, ChevronRight, Terminal, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TOPICS } from '../topics';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* ================= HERO ================= */}
      <div className="mx-auto py-12 sm:py-20 px-4 sm:px-6 text-center">
        <div
          className="
            inline-flex items-center gap-2 px-4 py-1.5 rounded-full border
            border-green-200 dark:border-green-800
            bg-white/70 dark:bg-slate-900/70
            text-sm font-medium mb-8 shadow-sm
          "
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-green-700 dark:text-green-400">v2.0 Released</span>
        </div>

        <h1
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
            font-bold tracking-tight mb-4 sm:mb-6
            bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600
            bg-clip-text text-transparent leading-tight px-4
          "
        >
          Build amazing software
          <br className="hidden sm:inline" />
          with comprehensive docs
        </h1>

        <p
          className="
            text-base sm:text-lg md:text-xl
            text-slate-600 dark:text-slate-300
            mb-8 sm:mb-10 max-w-2xl mx-auto
            leading-relaxed px-4
          "
        >
          Your ultimate resource for modern web development. Detailed guides, interactive examples, and best practices
          all in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <button
            onClick={() => navigate('/docs/html/intro')}
            className="
              w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4
              bg-gradient-to-r from-indigo-600 to-purple-600
              text-white rounded-xl
              hover:from-indigo-700 hover:to-purple-700
              transition-all font-semibold
              flex items-center justify-center gap-2
              shadow-lg hover:shadow-xl hover:scale-105 group
            "
          >
            Get Started
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            className="
              w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4
              border-2 border-slate-300 dark:border-slate-700
              rounded-xl
              hover:bg-slate-50 dark:hover:bg-slate-800
              hover:border-slate-400 dark:hover:border-slate-600
              transition-all font-semibold
              text-slate-700 dark:text-slate-200
              shadow-sm hover:shadow-md
            "
          >
            View on GitHub
          </button>
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="border-t border-slate-200 dark:border-slate-800 my-12 sm:my-16" />

      {/* ================= TOPICS ================= */}
      <div className="px-4 sm:px-6 pb-16 sm:pb-20 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2 sm:mb-3">
            Choose Your Learning Path
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
            Select a topic below to start your journey in web development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {TOPICS.map((topic, index) => (
            <div
              key={topic.id}
              onClick={() => navigate(`/docs/${topic.id}/${topic.items[0].id}`)}
              style={{ animationDelay: `${index * 100}ms` }}
              className="
                group p-6 sm:p-8 border-2
                border-slate-200 dark:border-slate-800
                rounded-2xl
                bg-white dark:bg-slate-900
                hover:border-indigo-200 dark:hover:border-indigo-500
                hover:shadow-2xl dark:hover:shadow-none
                transition-all duration-300
                cursor-pointer hover:-translate-y-1
                relative overflow-hidden
              "
            >
              <div
                className={`
                  absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32
                  ${topic.bgColor}
                  rounded-bl-full opacity-50
                  group-hover:scale-150 transition-transform duration-500
                `}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl ${topic.bgColor} ${topic.color} group-hover:scale-110 transition-transform shadow-sm`}
                  >
                    {topic.icon}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3" />
                    {topic.items.length}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-300">
                  {topic.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {topic.description}
                </p>

                <div className="space-y-2 mb-4">
                  {topic.items.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-slate-400 dark:text-slate-500" />
                      {item.title}
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-sm font-medium text-slate-900 dark:text-slate-200 group-hover:gap-3 gap-2 transition-all">
                  <span>Start learning</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= FEATURES ================= */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Fast Learning */}
          <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 border border-amber-200 dark:border-slate-700 hover:shadow-lg transition-all">
            <div className="inline-flex p-3 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-sm mb-3 sm:mb-4">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
            </div>
            <h3 className="font-bold text-base sm:text-lg mb-2 text-slate-900 dark:text-slate-100">Fast Learning</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Quick, concise tutorials to get you productive fast
            </p>
          </div>

          {/* Code Examples */}
          <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-slate-900 dark:to-slate-800 border border-emerald-200 dark:border-slate-700 hover:shadow-lg transition-all">
            <div className="inline-flex p-3 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-sm mb-3 sm:mb-4">
              <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" />
            </div>
            <h3 className="font-bold text-base sm:text-lg mb-2 text-slate-900 dark:text-slate-100">Code Examples</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Real-world examples you can copy and customize
            </p>
          </div>

          {/* Comprehensive */}
          <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 border border-blue-200 dark:border-slate-700 hover:shadow-lg transition-all sm:col-span-2 md:col-span-1">
            <div className="inline-flex p-3 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-sm mb-3 sm:mb-4">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
            </div>
            <h3 className="font-bold text-base sm:text-lg mb-2 text-slate-900 dark:text-slate-100">Comprehensive</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Everything from basics to advanced concepts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
