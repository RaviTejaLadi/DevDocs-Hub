import type { Connection, Edge, Node } from '@xyflow/react';

export type WorkflowStatus = 'success' | 'error' | 'running' | 'idle' | 'warning';
export type WorkflowNodeType = 'trigger' | 'action' | 'condition' | 'transform' | 'output' | 'ai';

export interface WorkflowNodeData {
  [key: string]: unknown;
  label: string;
  description?: string;
  status?: WorkflowStatus;
  type?: WorkflowNodeType;
  duration?: string;
  meta?: Record<string, string | number | boolean>;
}

export interface WorkflowEdgeData {
  [key: string]: unknown;
  label?: string;
  dashed?: boolean;
  color?: string;
}

export type WorkflowNode = Node<WorkflowNodeData>;
export type WorkflowEdge = Edge<WorkflowEdgeData>;

export interface WorkflowCanvasProps {
  nodes?: WorkflowNode[];
  edges?: WorkflowEdge[];
  onNodeClick?: (node: WorkflowNode) => void;
  onEdgeClick?: (edge: WorkflowEdge) => void;
  onConnect?: (connection: Connection) => void;
  readOnly?: boolean;
  fitView?: boolean;
  className?: string;
  showStats?: boolean;
  showDetailPanel?: boolean;
}
