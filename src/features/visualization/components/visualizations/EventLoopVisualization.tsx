import { GENERIC_VISUALIZATION_CONFIGS } from '../../constants/genericVisualizationConfigs';
import { GenericConceptVisualization } from './GenericConceptVisualization';

export function EventLoopVisualization() {
  return <GenericConceptVisualization topicId="event-loop" config={GENERIC_VISUALIZATION_CONFIGS['event-loop']} />;
}
