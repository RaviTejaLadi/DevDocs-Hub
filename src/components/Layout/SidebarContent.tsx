import { Link, useNavigate } from "react-router-dom";
import { TOPICS } from "../../topics";
import { BookOpen, ChevronRight } from "lucide-react";

const SidebarContent = ({
  currentTopicId,
  activeSlug,
  closeSheet,
}: {
  currentTopicId: string | undefined;
  activeSlug?: string;
  closeSheet?: () => void;
}) => {
  const topic = TOPICS.find((t) => t.id === currentTopicId);
  const navigate = useNavigate();

  if (!topic)
    return (
      <div className="p-6 text-center">
        <BookOpen className="w-12 h-12 mx-auto mb-3 text-slate-300 dark:text-slate-600" />
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Select a topic to view contents
        </p>
      </div>
    );

  return (
    <div className="flex h-full flex-col">
      {/* ================= HEADER ================= */}
      <div
        className="
          px-6 py-5 border-b
          border-slate-200 dark:border-slate-800
          bg-gradient-to-br
          from-indigo-50 via-purple-50 to-pink-50
          dark:from-slate-900 dark:via-slate-900 dark:to-slate-800
        "
      >
        <Link
          to="/"
          onClick={closeSheet}
          className="
            flex items-center gap-2 mb-4 text-sm
            text-slate-600 dark:text-slate-400
            hover:text-indigo-600 dark:hover:text-indigo-400
            transition-colors group
          "
        >
          <ChevronRight className="h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Overview</span>
        </Link>

        <div className="flex items-center gap-3">
          <div
            className={`p-2.5 rounded-xl ${topic.bgColor} ${topic.color} shadow-sm`}
          >
            {topic.icon}
          </div>

          <div>
            <div className="font-semibold text-lg text-slate-900 dark:text-slate-100">
              {topic.title}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
              <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></span>
              {topic.items.length} chapters available
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex-1 overflow-y-auto py-3">
        <div className="px-3 space-y-1">
          {topic.items.map((item, index) => {
            const isActive = activeSlug === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  navigate(`/docs/${topic.id}/${item.id}`);
                  if (closeSheet) closeSheet();
                }}
                className={`
                  w-full text-left px-4 py-3 rounded-lg text-sm
                  transition-all relative group
                  ${
                    isActive
                      ? `
                        bg-gradient-to-r from-indigo-600 to-purple-600
                        text-white font-medium shadow-md scale-[1.02]
                      `
                      : `
                        text-slate-700 dark:text-slate-300
                        hover:bg-indigo-50 dark:hover:bg-slate-800
                        hover:text-indigo-900 dark:hover:text-indigo-300
                        hover:translate-x-1
                      `
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`
                      text-xs font-semibold
                      ${
                        isActive
                          ? "text-white/80"
                          : "text-slate-400 dark:text-slate-500"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.title}</span>
                </div>

                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white dark:bg-slate-200 rounded-r-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SidebarContent;
