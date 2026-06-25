export type FlowNodeStyle = {
  fontSize?: number;
  justifyContent?: string;
  textAlign?: string;
  borderColor?: string;
  backgroundColor?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
  strokeLinecap?: string;
};

export type FlowLegendItem = {
  id: string;
  color: string;
  label: string;
};

export type FlowNodeLegend = {
  id: string;
  color: string;
  label: string;
  position?: string;
};

export type FlowNodeData = {
  label?: string;
  href?: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  style?: FlowNodeStyle;
  legend?: FlowNodeLegend;
  legends?: FlowLegendItem[];
  edgeStyle?: string;
};

export type FlowNode = {
  id: string;
  type: string;
  position: { x: number; y: number };
  width?: number;
  height?: number;
  measured?: { width?: number; height?: number };
  style?: { width?: number; height?: number };
  zIndex?: number;
  data: FlowNodeData;
};

export type FlowEdge = {
  id: string;
  source: string;
  target: string;
  sourceHandle?: string;
  targetHandle?: string;
  style?: FlowNodeStyle;
  data?: {
    edgeStyle?: string;
  };
};

export type FlowGraphData = {
  nodes: FlowNode[];
  edges: FlowEdge[];
};

export type StandaloneFlowRenderProps = {
  data: FlowGraphData;
  roadmapId?: string;
  contentBaseUrl?: string;
  className?: string;
  onNodeClick?: (node: FlowNode) => void;
};

export type ViewBox = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type Point = {
  x: number;
  y: number;
};
