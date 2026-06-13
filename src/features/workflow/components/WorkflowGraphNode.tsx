import { Handle, Position } from '@xyflow/react';
import type { NodeProps } from '@xyflow/react';
import type { WorkflowNode } from '../types/workflow';

type WorkflowNodeComponentProps = NodeProps<WorkflowNode>;

export default function WorkflowGraphNode({
  data,
  targetPosition = Position.Left,
  sourcePosition = Position.Right,
}: WorkflowNodeComponentProps) {
  return (
    <div className="relative min-w-[200px] max-w-[260px] rounded-xl border text-left select-none transition-shadow duration-200">
      <div className="flex items-center justify-between px-3 py-1.5 rounded-t-md text-[10px] font-semibold tracking-widest uppercase">
        <span className="flex items-center gap-1.5">
          <span className="truncate">{data.label}</span>
        </span>
      </div>

      <div className="px-3 py-2.5">
        {data.description && (
          <p className="text-slate-400 text-[11px] mt-0.5 leading-relaxed line-clamp-2">{data.description}</p>
        )}

        {data.meta && Object.keys(data.meta).length > 0 && (
          <div className="mt-2 space-y-0.5 border-t border-slate-700 pt-2">
            {Object.entries(data.meta).map(([k, v]) => (
              <div key={k} className="flex justify-between gap-2 text-[10px]">
                <span className="text-slate-500 truncate">{k}</span>
                <span className="text-slate-300 font-mono truncate max-w-[100px]" title={String(v)}>
                  {String(v)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <Handle type="target" position={targetPosition} className="w-3! h-3! rounded-full! border-2! border-slate-600!" />
      <Handle type="source" position={sourcePosition} className="w-3! h-3! rounded-full! border-2! border-slate-600!" />
    </div>
  );
}
