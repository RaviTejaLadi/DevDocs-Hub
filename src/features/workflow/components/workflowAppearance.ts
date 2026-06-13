import type { WorkflowNodeType, WorkflowStatus } from '../types/workflow';

interface StatusColorMeta {
  ring: string;
  bg: string;
  label: string;
}

interface NodeTypeMeta {
  icon: string;
  accent: string;
  label: string;
}

export const STATUS_COLOR: Record<WorkflowStatus, StatusColorMeta> = {
  success: { ring: '#22c55e', bg: '#052e16', label: 'text-green-400' },
  error: { ring: '#ef4444', bg: '#2d0a0a', label: 'text-red-400' },
  running: { ring: '#6366f1', bg: '#1e1b4b', label: 'text-indigo-300' },
  idle: { ring: '#475569', bg: '#0f1623', label: 'text-slate-400' },
  warning: { ring: '#f59e0b', bg: '#1c1204', label: 'text-amber-400' },
};

export const NODE_TYPE_META: Record<WorkflowNodeType, NodeTypeMeta> = {
  trigger: { icon: '⚡', accent: '#6366f1', label: 'Trigger' },
  action: { icon: '⚙️', accent: '#0ea5e9', label: 'Action' },
  condition: { icon: '◈', accent: '#f59e0b', label: 'Condition' },
  transform: { icon: '⟳', accent: '#10b981', label: 'Transform' },
  output: { icon: '↗', accent: '#ec4899', label: 'Output' },
  ai: { icon: '✦', accent: '#a855f7', label: 'AI' },
};
