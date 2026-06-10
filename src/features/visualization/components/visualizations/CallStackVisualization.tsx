import { GENERIC_VISUALIZATION_CONFIGS } from '../../constants/genericVisualizationConfigs';
import { GenericConceptVisualization } from './GenericConceptVisualization';

export function CallStackVisualization() {
  return <GenericConceptVisualization topicId="call-stack" config={GENERIC_VISUALIZATION_CONFIGS['call-stack']} />;
}
