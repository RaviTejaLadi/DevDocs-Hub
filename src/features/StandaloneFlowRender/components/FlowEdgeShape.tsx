import { THEME } from '../constants/theme';
import type { FlowEdge, FlowNode } from '../types';
import { buildEdgePath } from '../utils/edge-path';
import { getHandleSide, getSmartHandlePoint } from '../utils/handles';
import { getNodeCenter, getNodeMap } from '../utils/geometry';

type FlowEdgeShapeProps = {
  edge: FlowEdge;
  nodes: FlowNode[];
};

export function FlowEdgeShape({ edge, nodes }: FlowEdgeShapeProps) {
  const nodeMap = getNodeMap(nodes);
  const source = nodeMap.get(edge.source);
  const target = nodeMap.get(edge.target);

  if (!source || !target) {
    return null;
  }

  const targetCenter = getNodeCenter(target);
  const sourceCenter = getNodeCenter(source);
  const start = getSmartHandlePoint(source, edge.sourceHandle, targetCenter);
  const end = getSmartHandlePoint(target, edge.targetHandle, sourceCenter);
  const sourceSide = getHandleSide(edge.sourceHandle);
  const targetSide = getHandleSide(edge.targetHandle);
  const path = buildEdgePath(start, end, sourceSide, targetSide);
  const isDashed = edge.data?.edgeStyle === 'dashed';

  return (
    <path
      className="sfr-edge"
      data-edge-id={edge.id}
      d={path}
      fill="none"
      stroke={isDashed ? THEME.edgeDashed : THEME.edgeSolid}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={isDashed ? '5 6' : undefined}
    />
  );
}
