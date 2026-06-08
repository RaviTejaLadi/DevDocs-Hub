import { createElement } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { visualizationPath } from '@/app/routes/paths';
import { getVisualizationById } from '../constants';
import { getVisualizationPageComponent, isImplementedVisualizationId } from '../visualizationRegistry';
import { VisualizationListPage } from './VisualizationListPage';

const VisualizationPage = () => {
  const { visualizationId } = useParams<{ visualizationId?: string }>();

  if (!visualizationId) {
    return <VisualizationListPage />;
  }

  const visualization = getVisualizationById(visualizationId);

  if (!visualization || !isImplementedVisualizationId(visualizationId)) {
    return <Navigate to={visualizationPath()} replace />;
  }

  return createElement(getVisualizationPageComponent(visualizationId)!);
};

export default VisualizationPage;
