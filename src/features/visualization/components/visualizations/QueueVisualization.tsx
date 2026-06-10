import { GENERIC_VISUALIZATION_CONFIGS } from '../../constants/genericVisualizationConfigs';
import { GenericConceptVisualization } from './GenericConceptVisualization';

export function QueueVisualization() {
  return <GenericConceptVisualization topicId="queue" config={GENERIC_VISUALIZATION_CONFIGS.queue} />;
}
