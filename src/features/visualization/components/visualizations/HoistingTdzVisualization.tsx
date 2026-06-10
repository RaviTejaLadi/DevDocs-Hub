import { GENERIC_VISUALIZATION_CONFIGS } from '../../constants/genericVisualizationConfigs';
import { GenericConceptVisualization } from './GenericConceptVisualization';

export function HoistingTdzVisualization() {
  return <GenericConceptVisualization topicId="hoisting-tdz" config={GENERIC_VISUALIZATION_CONFIGS['hoisting-tdz']} />;
}
