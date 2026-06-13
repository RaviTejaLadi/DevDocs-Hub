import { BaseEdge, EdgeLabelRenderer, getSmoothStepPath } from '@xyflow/react';
import type { EdgeProps } from '@xyflow/react';
import type { WorkflowEdge } from '../types/workflow';

type WorkflowEdgeComponentProps = EdgeProps<WorkflowEdge>;

export default function WorkflowGraphEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
  markerEnd,
  selected,
}: WorkflowEdgeComponentProps) {
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    borderRadius: 0,
    offset: 18,
  });

  const stroke = selected ? '#a855f7' : data?.color ?? '#334155';

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        markerEnd={markerEnd}
        style={{
          stroke,
          strokeWidth: selected ? 2.5 : 1.5,
          strokeDasharray: data?.dashed ? '6 3' : undefined,
          filter: selected ? `drop-shadow(0 0 4px ${stroke})` : undefined,
          transition: 'stroke 0.2s, stroke-width 0.2s',
        }}
      />
      {data?.label && (
        <EdgeLabelRenderer>
          <div
            className="absolute pointer-events-none px-1.5 py-0.5 rounded text-[10px] font-medium text-slate-300 border border-slate-700"
            style={{ transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`, background: '#0f1623' }}
          >
            {data.label}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}
