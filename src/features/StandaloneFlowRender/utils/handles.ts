import { HANDLE_RATIOS } from '../constants/theme';
import type { FlowNode, Point } from '../types';
import { getNodeCenter, getNodeSize } from './geometry';

export type HandleSide = 'top' | 'bottom' | 'left' | 'right';

const SIDE_BY_HANDLE: Record<string, HandleSide> = {
  w: 'top',
  x: 'bottom',
  y: 'left',
  z: 'right',
};

function getRatioFromHandle(handleId?: string): number {
  if (!handleId || handleId.length < 2) {
    return 0.5;
  }

  return HANDLE_RATIOS[handleId[1]] ?? 0.5;
}

export function getHandleSide(handleId?: string): HandleSide {
  if (!handleId) {
    return 'right';
  }

  return SIDE_BY_HANDLE[handleId[0]] ?? 'right';
}

function getSidePoint(node: FlowNode, side: HandleSide, ratio: number): Point {
  const { width, height } = getNodeSize(node);
  const x = node.position.x;
  const y = node.position.y;

  switch (side) {
    case 'top':
      return { x: x + width * ratio, y };
    case 'bottom':
      return { x: x + width * ratio, y: y + height };
    case 'left':
      return { x, y: y + height * ratio };
    case 'right':
      return { x: x + width, y: y + height * ratio };
    default:
      return getNodeCenter(node);
  }
}

export function getHandlePoint(node: FlowNode, handleId?: string, toward?: Point): Point {
  const side = getHandleSide(handleId);
  let ratio = getRatioFromHandle(handleId);

  if (toward) {
    const center = getNodeCenter(node);
    const { width, height } = getNodeSize(node);

    if (side === 'top' || side === 'bottom') {
      const clampedX = Math.max(node.position.x + 8, Math.min(toward.x, node.position.x + width - 8));
      ratio = (clampedX - node.position.x) / width;
    } else {
      const clampedY = Math.max(node.position.y + 8, Math.min(toward.y, node.position.y + height - 8));
      ratio = (clampedY - node.position.y) / height;
    }

    if (Math.abs(toward.x - center.x) < width * 0.35) {
      ratio = 0.5;
    }
  }

  return getSidePoint(node, side, ratio);
}

export function getSmartHandlePoint(node: FlowNode, handleId: string | undefined, other: Point): Point {
  const side = getHandleSide(handleId);
  const { width, height } = getNodeSize(node);
  const x = node.position.x;
  const y = node.position.y;
  const center = getNodeCenter(node);

  const dx = other.x - center.x;
  const dy = other.y - center.y;

  if (handleId) {
    const point = getHandlePoint(node, handleId, other);

    if (side === 'bottom' || side === 'top') {
      const aligned = Math.abs(dx) < width * 0.6;
      if (aligned) {
        return {
          x: center.x,
          y: side === 'bottom' ? y + height : y,
        };
      }
    }

    if (side === 'left' || side === 'right') {
      const aligned = Math.abs(dy) < height * 0.75;
      if (aligned) {
        return {
          x: side === 'right' ? x + width : x,
          y: center.y,
        };
      }
    }

    return point;
  }

  if (Math.abs(dx) > Math.abs(dy)) {
    return dx > 0 ? { x: x + width, y: center.y } : { x, y: center.y };
  }

  return dy > 0 ? { x: center.x, y: y + height } : { x: center.x, y };
}
