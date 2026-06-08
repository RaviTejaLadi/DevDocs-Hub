import { Loader2 } from 'lucide-react';

const RouteFallback = () => {
  
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center gap-2.5 text-sm text-muted-foreground"
      role="status"
      aria-live="polite"
    >
      <Loader2 className="h-5 w-5 shrink-0 animate-spin text-muted-foreground motion-reduce:animate-none" aria-hidden />
      <span>{'Loading...'}</span>
    </div>
  );
};

export default RouteFallback;
