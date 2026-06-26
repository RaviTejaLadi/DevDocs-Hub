import { EDGE_CORNER_RADIUS } from '../constants/theme';
import type { Point } from '../types';
import type { HandleSide } from './handles';

function roundedStepPath(points: Point[], radius: number): string {
  if (points.length < 2) {
    return '';
  }

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let index = 1; index < points.length; index += 1) {
    const prev = points[index - 1];
    const current = points[index];
    const next = points[index + 1];

    if (!next) {
      path += ` L ${current.x} ${current.y}`;
      continue;
    }

    const dx1 = current.x - prev.x;
    const dy1 = current.y - prev.y;
    const dx2 = next.x - current.x;
    const dy2 = next.y - current.y;

    const len1 = Math.hypot(dx1, dy1);
    const len2 = Math.hypot(dx2, dy2);
    const corner = Math.min(radius, len1 / 2, len2 / 2);

    if (corner <= 0 || len1 === 0 || len2 === 0) {
      path += ` L ${current.x} ${current.y}`;
      continue;
    }

    const p1 = {
      x: current.x - (dx1 / len1) * corner,
      y: current.y - (dy1 / len1) * corner,
    };
    const p2 = {
      x: current.x + (dx2 / len2) * corner,
      y: current.y + (dy2 / len2) * corner,
    };

    path += ` L ${p1.x} ${p1.y} Q ${current.x} ${current.y} ${p2.x} ${p2.y}`;
  }

  return path;
}

function buildWaypoints(start: Point, end: Point, sourceSide: HandleSide, targetSide: HandleSide): Point[] {
  const gap = 24;

  if (sourceSide === 'bottom' && targetSide === 'top') {
    const midY = start.y + (end.y - start.y) / 2;
    return [start, { x: start.x, y: midY }, { x: end.x, y: midY }, end];
  }

  if (sourceSide === 'top' && targetSide === 'bottom') {
    const midY = start.y - gap;
    return [start, { x: start.x, y: midY }, { x: end.x, y: midY }, end];
  }

  if (sourceSide === 'right' && targetSide === 'left') {
    const midX = start.x + Math.max(gap, (end.x - start.x) / 2);
    return [start, { x: midX, y: start.y }, { x: midX, y: end.y }, end];
  }

  if (sourceSide === 'left' && targetSide === 'right') {
    const midX = start.x - Math.max(gap, (start.x - end.x) / 2);
    return [start, { x: midX, y: start.y }, { x: midX, y: end.y }, end];
  }

  if (sourceSide === 'bottom' && targetSide === 'left') {
    return [start, { x: start.x, y: end.y }, end];
  }

  if (sourceSide === 'right' && targetSide === 'top') {
    return [start, { x: end.x, y: start.y }, end];
  }

  if (sourceSide === 'right' && targetSide === 'bottom') {
    return [start, { x: end.x, y: start.y }, end];
  }

  if (sourceSide === 'bottom' && targetSide === 'right') {
    return [start, { x: start.x, y: end.y }, end];
  }

  const midX = start.x + (end.x - start.x) / 2;
  const midY = start.y + (end.y - start.y) / 2;

  if (Math.abs(end.x - start.x) > Math.abs(end.y - start.y)) {
    return [start, { x: midX, y: start.y }, { x: midX, y: end.y }, end];
  }

  return [start, { x: start.x, y: midY }, { x: end.x, y: midY }, end];
}

export function buildEdgePath(start: Point, end: Point, sourceSide: HandleSide, targetSide: HandleSide): string {
  const points = buildWaypoints(start, end, sourceSide, targetSide);
  return roundedStepPath(points, EDGE_CORNER_RADIUS);
}
