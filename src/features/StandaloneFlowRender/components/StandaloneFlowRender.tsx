import './StandaloneFlowRender.css';

import { useMemo, useState } from 'react';
import { THEME } from '../constants/theme';
import type { FlowGraphData, FlowNode, StandaloneFlowRenderProps } from '../types';
import { calculateViewBox, sortNodesByZIndex } from '../utils/geometry';
import { FlowEdgeShape } from './FlowEdgeShape';
import { FlowNodeShape } from './FlowNodeShape';
import { shouldOpenTopicSheet, TopicSheet } from './TopicSheet';

export function StandaloneFlowRender(props: StandaloneFlowRenderProps) {
  const { data, className = '', roadmapId, contentBaseUrl, onNodeClick } = props;
  const [selectedNode, setSelectedNode] = useState<FlowNode | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const viewBox = useMemo(() => calculateViewBox(data.nodes), [data.nodes]);

  const sortedNodes = useMemo(() => sortNodesByZIndex(data.nodes), [data.nodes]);

  const handleNodeClick = (node: FlowNode) => {
    setSelectedNode(node);
    onNodeClick?.(node);

    if (shouldOpenTopicSheet(node)) {
      setIsSheetOpen(true);
    }
  };

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <>
      <div className={`sfr-root ${className}`.trim()}>
        <svg
          className="sfr-svg"
          viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Roadmap flow diagram"
        >
          <rect x={viewBox.x} y={viewBox.y} width={viewBox.width} height={viewBox.height} fill={THEME.canvas} />

          <g className="sfr-layer sfr-layer--edges">
            {data.edges.map((edge) => (
              <FlowEdgeShape key={edge.id} edge={edge} nodes={data.nodes} />
            ))}
          </g>

          <g className="sfr-layer sfr-layer--nodes">
            {sortedNodes.map((node) => (
              <FlowNodeShape
                key={node.id}
                node={node}
                isSelected={selectedNode?.id === node.id && isSheetOpen}
                onClick={handleNodeClick}
              />
            ))}
          </g>
        </svg>
      </div>

      <TopicSheet
        roadmapId={roadmapId}
        contentBaseUrl={contentBaseUrl}
        node={selectedNode}
        isOpen={isSheetOpen}
        onClose={handleCloseSheet}
      />
    </>
  );
}

export type StandaloneFlowDemoProps = FlowGraphData & {
  roadmapId?: string;
  contentBaseUrl?: string;
};

export function StandaloneFlowDemo(props: StandaloneFlowDemoProps) {
  const { nodes, edges, roadmapId = 'frontend', contentBaseUrl } = props;

  return <StandaloneFlowRender data={{ nodes, edges }} roadmapId={roadmapId} contentBaseUrl={contentBaseUrl} />;
}
