import { Handle, Position } from '@xyflow/react';
import type { NodeProps } from '@xyflow/react';
import { NODE_TYPE_META, STATUS_COLOR } from './workflowAppearance';
import type { WorkflowNode } from '../types/workflow';

type WorkflowNodeComponentProps = NodeProps<WorkflowNode>;

export default function WorkflowGraphNode({ data, selected }: WorkflowNodeComponentProps) {
  const statusKey = data.status ?? 'idle';
  const typeKey = data.type ?? 'action';
  const status = STATUS_COLOR[statusKey];
  const typeMeta = NODE_TYPE_META[typeKey];
  const isRunning = statusKey === 'running';

  return (
    <div
      className="relative min-w-[200px] max-w-[260px] rounded-xl border text-left select-none transition-shadow duration-200"
      style={{
        background: status.bg,
        borderColor: selected ? typeMeta.accent : status.ring + '55',
        boxShadow: selected ? `0 0 0 2px ${typeMeta.accent}, 0 8px 32px ${typeMeta.accent}22` : `0 2px 12px #00000066`,
      }}
    >
      {isRunning && (
        <span className="absolute inset-0 rounded-xl animate-ping opacity-20" style={{ background: typeMeta.accent }} />
      )}

      <div
        className="flex items-center justify-between px-3 py-1.5 rounded-t-md text-[10px] font-semibold tracking-widest uppercase"
        style={{ background: typeMeta.accent + '22', borderBottom: `1px solid ${typeMeta.accent}33` }}
      >
        <span style={{ color: typeMeta.accent }}>
        {data.label}
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

      <Handle
        type="target"
        position={Position.Left}
        className="w-3! h-3! rounded-full! border-2! border-slate-600!"
        style={{ background: typeMeta.accent }}
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-3! h-3! rounded-full! border-2! border-slate-600!"
        style={{ background: typeMeta.accent }}
      />
    </div>
  );
}
