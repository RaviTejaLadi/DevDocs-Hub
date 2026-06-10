import { GENERIC_VISUALIZATION_CONFIGS } from '../../constants/genericVisualizationConfigs';
import { GenericConceptVisualization } from './GenericConceptVisualization';

export function DoWhileVisualization() {
  return <GenericConceptVisualization topicId="do-while" config={GENERIC_VISUALIZATION_CONFIGS['do-while']} />;
}
