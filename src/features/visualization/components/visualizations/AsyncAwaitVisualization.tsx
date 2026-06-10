import { GENERIC_VISUALIZATION_CONFIGS } from '../../constants/genericVisualizationConfigs';
import { GenericConceptVisualization } from './GenericConceptVisualization';

export function AsyncAwaitVisualization() {
  return <GenericConceptVisualization topicId="async-await" config={GENERIC_VISUALIZATION_CONFIGS['async-await']} />;
}
