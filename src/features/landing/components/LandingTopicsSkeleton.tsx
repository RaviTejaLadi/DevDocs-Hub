export function LandingTopicsSkeleton() {
  return (
    <div className="mb-14 space-y-6 min-w-0" aria-busy="true" aria-live="polite">
      <div className="flex flex-wrap gap-2 min-w-0 overflow-x-auto pb-0.5 [scrollbar-width:thin]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-10 w-36 shrink-0 animate-pulse rounded-lg bg-muted/35" />
        ))}
      </div>
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-32 animate-pulse rounded-lg border border-border/25 bg-muted/20" />
        ))}
      </div>
    </div>
  );
}
