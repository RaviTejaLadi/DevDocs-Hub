import type { FlowNode, Point, ViewBox } from '../types';

const PADDING = 64;

export function getNodeSize(node: FlowNode): { width: number; height: number } {
  const width = node.width ?? node.measured?.width ?? node.style?.width ?? (node.type === 'label' ? 120 : 156);

  const height = node.height ?? node.measured?.height ?? node.style?.height ?? (node.type === 'label' ? 36 : 49);

  return { width: Number(width), height: Number(height) };
}

export function calculateViewBox(nodes: FlowNode[]): ViewBox {
  if (nodes.length === 0) {
    return { x: 0, y: 0, width: 1000, height: 600 };
  }

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const node of nodes) {
    const { width, height } = getNodeSize(node);
    const x = node.position.x;
    const y = node.position.y;

    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x + width);
    maxY = Math.max(maxY, y + height);
  }

  return {
    x: minX - PADDING,
    y: minY - PADDING,
    width: maxX - minX + PADDING * 2,
    height: maxY - minY + PADDING * 2,
  };
}

export function sortNodesByZIndex(nodes: FlowNode[]): FlowNode[] {
  return [...nodes].sort((a, b) => (a.zIndex ?? 0) - (b.zIndex ?? 0));
}

export function getNodeMap(nodes: FlowNode[]): Map<string, FlowNode> {
  return new Map(nodes.map((node) => [node.id, node]));
}

export function getNodeCenter(node: FlowNode): Point {
  const { width, height } = getNodeSize(node);
  return {
    x: node.position.x + width / 2,
    y: node.position.y + height / 2,
  };
}

export function wrapText(text: string, maxCharsPerLine: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) {
    lines.push(current);
  }

  return lines.length ? lines : [''];
}

export function getTextAnchor(textAlign?: string): 'start' | 'middle' | 'end' {
  if (textAlign === 'left' || textAlign === 'start') {
    return 'start';
  }

  if (textAlign === 'right' || textAlign === 'end') {
    return 'end';
  }

  return 'middle';
}

export function getTextX(x: number, width: number, textAlign?: string, padding = 12): number {
  const anchor = getTextAnchor(textAlign);

  if (anchor === 'start') {
    return x + padding;
  }

  if (anchor === 'end') {
    return x + width - padding;
  }

  return x + width / 2;
}

export function toPoint(x: number, y: number): Point {
  return { x, y };
}
