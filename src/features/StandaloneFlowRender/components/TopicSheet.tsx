import { useEffect } from 'react';
import type { FlowNode } from '../types';
import { useTopicContent } from '../hooks/use-topic-content';
import { isContentNodeType } from '../utils/parse-topic-html';

type TopicSheetProps = {
  roadmapId?: string;
  contentBaseUrl?: string;
  node: FlowNode | null;
  isOpen: boolean;
  onClose: () => void;
};

function ResourceLinks({
  links,
}: {
  links: { id: string; title: string; url: string; type: string }[];
}) {
  if (links.length === 0) {
    return null;
  }

  return (
    <div className="sfr-sheet__resources">
      <h3 className="sfr-sheet__resources-title">Resources</h3>
      <ul className="sfr-sheet__resource-list">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sfr-sheet__resource-link"
            >
              <span className="sfr-sheet__resource-type">{link.type}</span>
              <span>{link.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TopicSheet(props: TopicSheetProps) {
  const { roadmapId, contentBaseUrl, node, isOpen, onClose } = props;
  const { isLoading, error, title, html, links, hasContent } = useTopicContent({
    roadmapId,
    contentBaseUrl,
    node,
    isOpen,
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !node) {
    return null;
  }

  return (
    <div className="sfr-sheet">
      <button
        type="button"
        className="sfr-sheet__backdrop"
        aria-label="Close topic panel"
        onClick={onClose}
      />

      <aside
        className="sfr-sheet__panel"
        role="dialog"
        aria-modal="true"
        aria-label={title || node.data.label || 'Topic details'}
      >
        <div className="sfr-sheet__header">
          <div>
            <p className="sfr-sheet__eyebrow">{node.type}</p>
            <h2 className="sfr-sheet__title">{title || node.data.label}</h2>
          </div>
          <button
            type="button"
            className="sfr-sheet__close"
            aria-label="Close"
            onClick={onClose}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="sfr-sheet__body">
          {isLoading && (
            <div className="sfr-sheet__loading">Loading topic content...</div>
          )}

          {!isLoading && error && (
            <div className="sfr-sheet__empty">{error}</div>
          )}

          {!isLoading && !error && hasContent && (
            <div
              className="sfr-sheet__content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )}

          {!isLoading && !error && !hasContent && (
            <div className="sfr-sheet__empty">
              No detailed content is available for this topic yet.
            </div>
          )}

          {!isLoading && !error && <ResourceLinks links={links} />}
        </div>
      </aside>
    </div>
  );
}

export function shouldOpenTopicSheet(node: FlowNode): boolean {
  return isContentNodeType(node.type) && Boolean(node.data.label?.trim());
}
