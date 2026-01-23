import { Zap, Terminal, BookOpen } from 'lucide-react';

const FEATURES = [
  {
    id: 'fast-learning',
    title: 'Fast Learning',
    description: 'Quick, concise tutorials to get you productive fast',
    icon: Zap,
    gradient: 'from-amber-50 to-orange-50',
    border: 'border-amber-200',
    iconColor: 'text-amber-500',
  },
  {
    id: 'code-examples',
    title: 'Code Examples',
    description: 'Real-world examples you can copy and customize',
    icon: Terminal,
    gradient: 'from-emerald-50 to-green-50',
    border: 'border-emerald-200',
    iconColor: 'text-emerald-500',
  },
  {
    id: 'comprehensive',
    title: 'Comprehensive',
    description: 'Everything from basics to advanced concepts',
    icon: BookOpen,
    gradient: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
    iconColor: 'text-blue-500',
    colSpan: 'sm:col-span-2 lg:col-span-1',
  },
];

export default function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {FEATURES.map(({ id, title, description, icon: Icon, gradient, border, iconColor, colSpan }) => (
        <div
          key={id}
          className={`
              text-center p-6 sm:p-8 rounded-md
              bg-linear-to-br ${gradient}
              dark:from-slate-900 dark:to-slate-800
              border ${border} dark:border-slate-700
              hover:shadow-lg transition-all duration-300
              ${colSpan ?? ''}
            `}
        >
          <div className="inline-flex p-4 rounded-md bg-white dark:bg-slate-900 shadow-sm mb-4">
            <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${iconColor}`} />
          </div>

          <h3 className="font-bold text-lg sm:text-xl mb-2 text-foreground">{title}</h3>

          <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
        </div>
      ))}
    </div>
  );
}
