import { useCallback, useMemo, useState } from 'react';
import { ReactFlow, Background, Controls, addEdge, useEdgesState, useNodesState, MarkerType } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import type { EdgeMouseHandler, NodeMouseHandler, NodeTypes, EdgeTypes, Connection } from '@xyflow/react';
import WorkflowDetailPanel from './WorkflowDetailPanel';
import WorkflowGraphEdge from './WorkflowGraphEdge';
import WorkflowGraphNode from './WorkflowGraphNode';
import type { WorkflowCanvasProps, WorkflowEdge, WorkflowNode } from '../types/workflow';
import { cn } from '@/lib/utils';

const NODE_TYPES: NodeTypes = { workflowNode: WorkflowGraphNode };
const EDGE_TYPES: EdgeTypes = { workflowEdge: WorkflowGraphEdge };

export default function WorkflowCanvas({
  nodes: propNodes = [],
  edges: propEdges = [],
  onNodeClick,
  onEdgeClick,
  onConnect: onConnectProp,
  readOnly = false,
  fitView = true,
  className = '',
  showDetailPanel = true,
}: WorkflowCanvasProps) {
  const normalizeNode = useCallback(
    (n: WorkflowNode): WorkflowNode => ({
      ...n,
      type: 'workflowNode',
      data: { status: 'idle', type: 'action', meta: {}, ...n.data },
    }),
    []
  );

  const normalizeEdge = useCallback(
    (e: WorkflowEdge): WorkflowEdge => ({
      ...e,
      type: 'workflowEdge',
      markerEnd: { type: MarkerType.ArrowClosed, color: '#475569' },
      data: e.data ?? {},
    }),
    []
  );

  const initialNodes = useMemo(() => propNodes.map(normalizeNode), [propNodes, normalizeNode]);
  const initialEdges = useMemo(() => propEdges.map(normalizeEdge), [propEdges, normalizeEdge]);
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<WorkflowNode | null>(null);

  const handleConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge(params, eds).map((edge) => normalizeEdge(edge as WorkflowEdge)));
      onConnectProp?.(params);
    },
    [setEdges, onConnectProp, normalizeEdge]
  );

  const handleNodeClick: NodeMouseHandler<WorkflowNode> = useCallback(
    (_event, node) => {
      setSelectedNode(node);
      onNodeClick?.(node);
    },
    [onNodeClick]
  );

  const handleEdgeClick: EdgeMouseHandler<WorkflowEdge> = useCallback(
    (_event, edge) => {
      onEdgeClick?.(edge);
    },
    [onEdgeClick]
  );

  const handlePaneClick = useCallback(() => setSelectedNode(null), []);
  const detailNode = selectedNode ? nodes.find((n) => n.id === selectedNode.id) : null;

  return (
    <div
      className={`relative flex min-w-0 w-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#080e18] h-[min(72vh,640px)] min-h-[320px] ${className}`}
    >
      <div className="min-w-0 flex-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={NODE_TYPES}
          edgeTypes={EDGE_TYPES}
          onNodesChange={!readOnly ? onNodesChange : undefined}
          onEdgesChange={!readOnly ? onEdgesChange : undefined}
          onConnect={!readOnly ? handleConnect : undefined}
          onNodeClick={handleNodeClick}
          onEdgeClick={handleEdgeClick}
          onPaneClick={handlePaneClick}
          fitView={fitView}
          fitViewOptions={{ padding: 0.2 }}
          nodesDraggable={!readOnly}
          nodesConnectable={!readOnly}
          elementsSelectable
          proOptions={{ hideAttribution: true }}
          style={{ background: 'transparent' }}
        >
          <Background color="#1e293b" gap={24} size={1.5} />
          <Controls
            showInteractive={false}
            className="[&>button]:bg-slate-800! [&>button]:border-slate-700! [&>button]:text-slate-300! [&>button:hover]:bg-slate-700!"
          />
        </ReactFlow>
      </div>

      {showDetailPanel ? (
        <div
          className={cn(
            'shrink-0 border-t border-slate-800 bg-[#0a1120] overflow-y-auto transition-all duration-300 ease-in-out',
            detailNode ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          )}
        >
          {detailNode ? <WorkflowDetailPanel node={detailNode} onClose={() => setSelectedNode(null)} /> : null}
        </div>
      ) : null}
    </div>
  );
}
