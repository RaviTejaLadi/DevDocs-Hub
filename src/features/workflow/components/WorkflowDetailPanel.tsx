import type { WorkflowNode } from '../types/workflow';

type WorkflowDetailPanelProps = {
  node: WorkflowNode;
  onClose: () => void;
};

export default function WorkflowDetailPanel({ node, onClose }: WorkflowDetailPanelProps) {
  const { data } = node;

  return (
    <div className="p-4 space-y-4 text-sm min-w-0">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-white font-semibold leading-snug">{data.label}</p>
        </div>
        <button
          onClick={onClose}
          className="text-slate-500 hover:text-slate-300 text-lg leading-none mt-0.5 transition-colors"
          aria-label="Close panel"
        >
          ×
        </button>
      </div>

      {data.description && <p className="text-slate-400 text-xs leading-relaxed">{data.description}</p>}

      {data.meta && Object.keys(data.meta).length > 0 && (
        <div className="space-y-1.5">
          <p className="text-slate-500 text-[10px] uppercase tracking-widest">Properties</p>
          {Object.entries(data.meta).map(([k, v]) => (
            <div
              key={k}
              className="flex justify-between gap-3 px-2.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50"
            >
              <span className="text-slate-400 text-xs truncate">{k}</span>
              <span className="text-slate-200 text-xs font-mono truncate max-w-[100px]" title={String(v)}>
                {String(v)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
