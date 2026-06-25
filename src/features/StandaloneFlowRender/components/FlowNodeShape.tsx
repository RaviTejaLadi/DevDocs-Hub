import {
  DEFAULT_FONT_SIZE,
  FONT_FAMILY,
  LEGEND_COLORS,
  LEGEND_DOT_RADIUS,
  THEME,
  TITLE_FONT_SIZE,
  TOPIC_FONT_SIZE,
} from '../constants/theme';
import type { FlowNode } from '../types';
import {
  getNodeSize,
  // getTextAnchor,
  getTextX,
  wrapText,
} from '../utils/geometry';

type FlowNodeShapeProps = {
  node: FlowNode;
  isSelected?: boolean;
  onClick?: (node: FlowNode) => void;
};

function getLegendColor(node: FlowNode): string | null {
  if (!node.data.legend) {
    return null;
  }

  return (
    LEGEND_COLORS[node.data.legend.id] ??
    node.data.legend.color ??
    THEME.accentRecommended
  );
}

function LegendMarker({
  x,
  y,
  color,
}: {
  x: number;
  y: number;
  color: string;
}) {
  return (
    <circle
      cx={x}
      cy={y}
      r={LEGEND_DOT_RADIUS}
      fill={color}
      stroke="#ffffff"
      strokeWidth={1.5}
    />
  );
}

function CardNode({
  node,
  variant,
  onClick,
  isSelected,
}: FlowNodeShapeProps & {
  variant: 'topic' | 'subtopic';
}) {
  const { width, height } = getNodeSize(node);
  const x = node.position.x;
  const y = node.position.y;
  const label = node.data.label ?? '';
  const accent = getLegendColor(node);
  const isTopic = variant === 'topic';
  const textPadding = 12;
  const maxChars = Math.max(
    8,
    Math.floor((width - textPadding * 2) / (DEFAULT_FONT_SIZE * 0.52)),
  );
  const lines = isTopic ? [label] : wrapText(label, maxChars);
  const lineHeight = isTopic ? TOPIC_FONT_SIZE + 2 : DEFAULT_FONT_SIZE + 3;
  const textBlockHeight = lines.length * lineHeight;
  const startY = y + (height - textBlockHeight) / 2 + lineHeight / 2;

  return (
    <g
      className={`sfr-node sfr-node--interactive sfr-node--${variant}${isSelected ? ' sfr-node--selected' : ''}`}
      data-type={node.type}
      data-node-id={node.id}
      onClick={() => onClick?.(node)}
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={6}
        ry={6}
        fill={isTopic ? THEME.topicFill : THEME.subtopicFill}
        stroke={isSelected ? THEME.selectedStroke : isTopic ? THEME.topicStroke : THEME.subtopicStroke}
        strokeWidth={isSelected ? 2 : 1.5}
      />
      {lines.map((line, index) => (
        <text
          key={`${node.id}-${index}`}
          x={getTextX(x, width, 'center')}
          y={startY + index * lineHeight}
          fill={isTopic ? THEME.topicText : THEME.subtopicText}
          fontFamily={FONT_FAMILY}
          fontSize={isTopic ? TOPIC_FONT_SIZE : DEFAULT_FONT_SIZE}
          fontWeight={isTopic ? 600 : 400}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {line}
        </text>
      ))}
      {accent && (
        <LegendMarker
          x={x + width + 10}
          y={y + height / 2}
          color={accent}
        />
      )}
    </g>
  );
}

function ParagraphNode({ node }: FlowNodeShapeProps) {
  const { width, height } = getNodeSize(node);
  const x = node.position.x;
  const y = node.position.y;
  const label = node.data.label ?? '';
  if (!label.trim()) {
    return null;
  }

  const fontSize = 14;
  const lines = wrapText(label, Math.max(12, Math.floor(width / 8)));

  return (
    <g className="sfr-node sfr-node--paragraph" data-type={node.type} data-node-id={node.id}>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={6}
        ry={6}
        fill={THEME.paragraphFill}
        stroke={THEME.paragraphStroke}
        strokeWidth={1}
      />
      {lines.map((line, index) => (
        <text
          key={`${node.id}-line-${index}`}
          x={getTextX(x, width, 'center')}
          y={y + 22 + index * (fontSize + 4)}
          fill={THEME.bodyText}
          fontFamily={FONT_FAMILY}
          fontSize={fontSize}
          textAnchor="middle"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function LegendNode({ node }: FlowNodeShapeProps) {
  const { width, height } = getNodeSize(node);
  const x = node.position.x;
  const y = node.position.y;
  const legends = node.data.legends ?? [];

  return (
    <g className="sfr-node sfr-node--legend" data-type={node.type} data-node-id={node.id}>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={6}
        ry={6}
        fill={THEME.legendFill}
        stroke={THEME.legendStroke}
        strokeWidth={1}
      />
      {legends.map((item, index) => (
        <g key={item.id} transform={`translate(${x + 14}, ${y + 20 + index * 28})`}>
          <circle
            cx={0}
            cy={0}
            r={5}
            fill={LEGEND_COLORS[item.id] ?? item.color}
          />
          <text
            x={14}
            y={1}
            fill={THEME.legendText}
            fontFamily={FONT_FAMILY}
            fontSize={13}
            dominantBaseline="middle"
          >
            {item.label}
          </text>
        </g>
      ))}
    </g>
  );
}

function VerticalNode({ node }: FlowNodeShapeProps) {
  const { width, height } = getNodeSize(node);
  const x = node.position.x;
  const y = node.position.y;

  return (
    <g className="sfr-node sfr-node--vertical" data-type={node.type} data-node-id={node.id}>
      <line
        x1={x + width / 2}
        y1={y}
        x2={x + width / 2}
        y2={y + height}
        stroke={THEME.verticalStroke}
        strokeWidth={2}
      />
    </g>
  );
}

function LabelNode({ node }: FlowNodeShapeProps) {
  const { width, height } = getNodeSize(node);
  const x = node.position.x;
  const y = node.position.y;

  return (
    <text
      className="sfr-node sfr-node--label"
      data-type={node.type}
      data-node-id={node.id}
      x={x + width / 2}
      y={y + height / 2}
      fill={THEME.bodyText}
      fontFamily={FONT_FAMILY}
      fontSize={13}
      fontWeight={500}
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {node.data.label}
    </text>
  );
}

function ButtonNode({ node, onClick, isSelected }: FlowNodeShapeProps) {
  const { width, height } = getNodeSize(node);
  const x = node.position.x;
  const y = node.position.y;
  const isSecondary = node.data.backgroundColor?.toLowerCase().includes('232');

  const handleClick = () => {
    if (node.data.href) {
      window.open(node.data.href, node.data.href.startsWith('http') ? '_blank' : '_self');
    }
    onClick?.(node);
  };

  return (
    <g
      className={`sfr-node sfr-node--interactive sfr-node--button${isSelected ? ' sfr-node--selected' : ''}`}
      data-type={node.type}
      data-node-id={node.id}
      onClick={handleClick}
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={6}
        ry={6}
        fill={isSecondary ? THEME.buttonSecondaryFill : THEME.buttonPrimaryFill}
        stroke={isSelected ? THEME.selectedStroke : 'transparent'}
        strokeWidth={2}
      />
      <text
        x={x + width / 2}
        y={y + height / 2}
        fill={isSecondary ? THEME.buttonSecondaryText : THEME.buttonPrimaryText}
        fontFamily={FONT_FAMILY}
        fontSize={14}
        fontWeight={600}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {node.data.label}
      </text>
    </g>
  );
}

export function FlowNodeShape({
  node,
  onClick,
  isSelected = false,
}: FlowNodeShapeProps) {
  switch (node.type) {
    case 'title':
      return (
        <text
          className="sfr-node sfr-node--title"
          data-type={node.type}
          data-node-id={node.id}
          x={node.position.x}
          y={node.position.y + getNodeSize(node).height * 0.65}
          fill={THEME.titleText}
          fontFamily={FONT_FAMILY}
          fontSize={TITLE_FONT_SIZE}
          fontWeight={700}
        >
          {node.data.label}
        </text>
      );
    case 'topic':
      return (
        <CardNode
          node={node}
          variant="topic"
          onClick={onClick}
          isSelected={isSelected}
        />
      );
    case 'subtopic':
      return (
        <CardNode
          node={node}
          variant="subtopic"
          onClick={onClick}
          isSelected={isSelected}
        />
      );
    case 'button':
      return (
        <ButtonNode node={node} onClick={onClick} isSelected={isSelected} />
      );
    case 'paragraph':
      return <ParagraphNode node={node} />;
    case 'legend':
      return <LegendNode node={node} />;
    case 'vertical':
      return <VerticalNode node={node} />;
    case 'label':
      return <LabelNode node={node} />;
    default:
      return null;
  }
}
