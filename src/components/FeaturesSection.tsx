import { Zap, Code, BookOpen } from 'lucide-react';

const FEATURES = [
  {
    id: 'fast-learning',
    title: 'Quick revision',
    description: 'Simplified explanations so you can brush up fast—before interviews or deep dives.',
    icon: Zap,
  },
  {
    id: 'code-examples',
    title: 'Code & examples',
    description: 'Practical snippets and examples you can copy and use on the job.',
    icon: Code,
  },
  {
    id: 'comprehensive',
    title: 'Fullstack coverage',
    description: 'Frontend, backend, DSA, system design, databases, and more—all in one place.',
    icon: BookOpen,
  },
];

export default function FeaturesSection() {
  return (
    <section className="mt-20 pt-16 border-t border-border">
      <h2 className="text-lg font-semibold text-foreground mb-6 tracking-tight">Why use ReviseStack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {FEATURES.map(({ id, title, description, icon: Icon }) => (
          <div
            key={id}
            className="rounded-lg border border-border bg-card p-6 text-left transition-colors hover:bg-muted/30"
          >
            <div className="inline-flex p-2.5 rounded-lg bg-primary/10 text-primary mb-4">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
