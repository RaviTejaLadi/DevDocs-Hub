import type { WorkflowEdge, WorkflowNode } from './workflow';

export type WorkflowPreset = 'ingest' | 'html' | 'javascript';

export type WorkflowPresetConfig = {
  title: string;
  subtitle: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
};
