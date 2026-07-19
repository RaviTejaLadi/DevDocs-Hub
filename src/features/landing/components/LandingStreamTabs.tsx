import { useEffect, useRef } from 'react';
import type { Stream } from '@/data/topics';
import { cn } from '@/lib/utils';
import { getStreamEmoji } from '../constants';

export type LandingExtraNavItem = {
  emoji: string;
  label: string;
  onClick: () => void;
};

const tabBaseClass =
  'inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg border px-2.5 py-1.5 text-xs sm:text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring max-sm:shadow-none';

const inactiveTabClass = 'border-border/45 text-muted-foreground hover:border-border/70 hover:text-foreground';

type LandingStreamTabsProps = {
  streams: Stream[];
  activeStreamId: string;
  activeStream: Stream | undefined;
  onSelectStream: (id: string) => void;
  extraNavItems?: LandingExtraNavItem[];
};

export function LandingStreamTabs({
  streams,
  activeStreamId,
  activeStream,
  onSelectStream,
  extraNavItems = [],
}: LandingStreamTabsProps) {
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;
    const tab = el.querySelector(`[data-stream-tab="${CSS.escape(activeStreamId)}"]`);
    if (tab instanceof HTMLElement) {
      tab.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
    }
  }, [activeStreamId, streams]);

  return (
    <div className={cn('mb-6 flex min-w-0 items-stretch gap-1 p-1', 'shadow-none')}>
      <div className="relative min-h-9 min-w-0 flex-1">
        <nav aria-label={'Streams'} className="flex min-h-9 min-w-0">
          <div ref={tabsRef} className="grid w-full grid-cols-2 gap-1.5 px-0.5 py-0.5 sm:grid-cols-3 lg:grid-cols-5">
            {streams.map((stream) => {
              const isActive = stream.id === activeStream?.id;
              const emoji = getStreamEmoji(stream.id);
              return (
                <button
                  key={stream.id}
                  type="button"
                  data-stream-tab={stream.id}
                  onClick={() => onSelectStream(stream.id)}
                  aria-pressed={isActive}
                  title={stream.title}
                  className={cn(
                    tabBaseClass,
                    'w-full min-w-0 justify-start',
                    isActive ? 'border-primary/45 font-semibold text-primary' : inactiveTabClass
                  )}
                >
                  <span className="text-sm leading-none shrink-0" aria-hidden>
                    {emoji}
                  </span>
                  <span className="font-medium truncate text-left">{stream.title}</span>
                </button>
              );
            })}
            {extraNavItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={item.onClick}
                title={item.label}
                className={cn(tabBaseClass, inactiveTabClass, 'w-full min-w-0 justify-start border-dashed')}
              >
                <span className="text-sm leading-none shrink-0" aria-hidden>
                  {item.emoji}
                </span>
                <span className="font-medium truncate text-left">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
