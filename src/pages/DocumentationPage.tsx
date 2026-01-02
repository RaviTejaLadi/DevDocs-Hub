import { Link, useNavigate, useParams } from "react-router-dom";
import { TOPICS } from "../topics";
import { useEffect, useState } from "react";
import { Check, ChevronRight, Copy } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "../components/ui/button";
import remarkGfm from "remark-gfm";

const DocumentationPage = () => {
  const { categoryId, slug } = useParams();
  const topic = TOPICS.find((t) => t.id === categoryId);
  const content = topic?.items.find((i) => i.id === slug);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const currentIndex = topic?.items.findIndex((i) => i.id === slug) ?? -1;
  const nextItem = topic?.items[currentIndex + 1];
  const prevItem = topic?.items[currentIndex - 1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId, slug]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!topic || !content)
    return (
      <div className="p-8 text-center">
        <div className="text-6xl mb-4">📚</div>
        <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
        <p className="text-slate-600 mb-6">
          The documentation page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
        >
          Back to Home
        </button>
      </div>
    );

  return (
    <div className="w-full">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 flex-wrap">
        <Link
          to="/"
          className="hover:text-slate-900 transition-colors font-medium"
        >
          Documentation
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link
          to={`/docs/${topic.id}/${topic.items[0].id}`}
          className={`hover:text-slate-900 transition-colors flex items-center gap-1.5 ${topic.color}`}
        >
          {topic.icon}
          <span className="font-medium">{topic.title}</span>
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-slate-900 font-medium">{content.title}</span>
      </div>

      {/* Main Content */}
      <div className="prose prose-slate max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // Headings
            h1: ({ ...props }) => (
              <h1
                className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-foreground leading-tight "
                {...props}
              />
            ),
            h2: ({ ...props }) => (
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight mt-16 mb-6 pb-4 border-b-2 border-slate-200 text-foreground"
                {...props}
              />
            ),
            h3: ({ ...props }) => (
              <h3
                className="text-2xl sm:text-3xl font-semibold tracking-tight mt-12 mb-5 text-foreground"
                {...props}
              />
            ),
            h4: ({ ...props }) => (
              <h4
                className="text-xl sm:text-2xl font-semibold tracking-tight mt-8 mb-4 text-foreground"
                {...props}
              />
            ),
            h5: ({ ...props }) => (
              <h5
                className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-foreground"
                {...props}
              />
            ),
            h6: ({ ...props }) => (
              <h6
                className="text-base sm:text-lg font-semibold mt-6 mb-3 text-foreground"
                {...props}
              />
            ),

            // Paragraphs and Text
            p: ({ ...props }) => (
              <p
                className="leading-relaxed text-base sm:text-lg text-muted-foreground mb-6"
                {...props}
              />
            ),
            strong: ({ ...props }) => (
              <strong className="font-semibold text-foreground" {...props} />
            ),
            em: ({ ...props }) => (
              <em className="italic text-slate-700" {...props} />
            ),

            // Lists
            ul: ({ ...props }) => (
              <ul className="my-6 ml-6 list-none space-y-3" {...props} />
            ),
            ol: ({ ...props }) => (
              <ol
                className="my-6 ml-6 list-decimal space-y-3 marker:text-muted-foreground marker:font-semibold"
                {...props}
              />
            ),
            li: ({ ordered, ...props }: any) => (
              <li
                className={`relative text-slate-700 ${
                  ordered
                    ? "pl-2"
                    : "pl-6 before:content-['→'] before:absolute before:left-0 before:text-indigo-500 before:font-bold"
                }`}
                {...props}
              />
            ),

            // Links
            a: ({ ...props }) => (
              <a
                className="text-indigo-600 hover:text-indigo-700 font-medium underline decoration-indigo-300 hover:decoration-indigo-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                {...props}
              />
            ),

            // Blockquotes
            blockquote: ({ ...props }) => (
              <blockquote
                className="border-l-4 border-indigo-500 bg-slate-50 pl-6 pr-4 py-4 my-8 italic text-muted-foreground rounded-r-lg"
                {...props}
              />
            ),

            // Horizontal Rule
            hr: ({ ...props }) => (
              <hr className="my-12 border-t-2 border-slate-200" {...props} />
            ),

            // Tables
            table: ({ ...props }) => (
              <div className="my-8 overflow-x-auto rounded-xl border-2 border-slate-200 shadow-sm">
                <table
                  className="min-w-full divide-y divide-slate-200"
                  {...props}
                />
              </div>
            ),
            thead: ({ ...props }) => (
              <thead className="bg-slate-50" {...props} />
            ),
            tbody: ({ ...props }) => (
              <tbody
                className="divide-y divide-slate-200 bg-white"
                {...props}
              />
            ),
            tr: ({ ...props }) => (
              <tr className="hover:bg-slate-50 transition-colors" {...props} />
            ),
            th: ({ ...props }) => (
              <th
                className="px-6 py-4 text-left text-sm font-semibold text-foreground uppercase tracking-wider"
                {...props}
              />
            ),
            td: ({ ...props }) => (
              <td
                className="px-6 py-4 text-sm text-muted-foreground"
                {...props}
              />
            ),

            // Images
            img: ({ ...props }) => (
              <img
                className="rounded-xl border-2 border-slate-200 shadow-lg my-8 w-full"
                {...props}
              />
            ),

            // Code Blocks and Inline Code
            code: ({ inline, className, children, ...props }: any) => {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <div className="relative my-8 rounded-xl border-input overflow-hidden bg-slate-950 shadow-xl">
                  <div className="flex items-center justify-between px-6 py-3 border-b border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                        {match[1]}
                      </span>
                    </div>
                    <button
                      className="p-2 hover:bg-slate-800 rounded-lg transition-all text-slate-400 hover:text-white group"
                      onClick={() => handleCopy(String(children))}
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      )}
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      className="!m-0 !bg-transparent !p-6 text-sm sm:text-base"
                      showLineNumbers={false}
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  </div>
                </div>
              ) : (
                <code
                  className="p-1 mx-1 rounded-md bg-indigo-50 border border-indigo-200 text-sm font-mono text-indigo-900 font-semibold"
                  {...props}
                >
                  {children}
                </code>
              );
            },
            pre: ({ ...props }) => <pre className="my-6" {...props} />,

            // Task Lists (GFM)
            input: ({ ...props }: any) => (
              <input
                className="mr-2 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                disabled
                {...props}
              />
            ),

            // Strikethrough (GFM)
            del: ({ ...props }) => (
              <del className="text-muted-foreground line-through" {...props} />
            ),
          }}
        >
          {content.content}
        </ReactMarkdown>
      </div>

      {/* Navigation Footer */}
      <div className="mt-16 pt-8 border-t-2 border-slate-200">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          {prevItem ? (
            <Button
              onClick={() => navigate(`/docs/${topic.id}/${prevItem.id}`)}
              variant="outline"
              className="flex-1 group p-6 h-auto border-2 border-slate-200 rounded-xl hover:border-indigo-300 hover:shadow-lg transition-all justify-start"
            >
              <div className="text-left w-full">
                <div className="text-sm text-slate-500 mb-2 font-medium">
                  Previous
                </div>
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  {prevItem.title}
                </div>
              </div>
            </Button>
          ) : (
            <div className="flex-1"></div>
          )}

          {nextItem ? (
            <Button
              onClick={() => navigate(`/docs/${topic.id}/${nextItem.id}`)}
              className="flex-1 group p-6 h-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-right w-full">
                <div className="text-sm text-indigo-200 mb-2 font-medium">
                  Next
                </div>
                <div className="flex items-center justify-end gap-2 text-white font-semibold">
                  {nextItem.title}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Button>
          ) : (
            <div className="flex-1"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
