import { Navigate, useParams } from 'react-router-dom';
import { getPlaygroundById } from '../constants';
import { PlaygroundListPage } from './PlaygroundListPage';
import { ArrayPlaygroundPage } from './ArrayPlaygroundPage';

const PlaygroundPage = () => {
  const { playgroundId } = useParams<{ playgroundId?: string }>();

  if (!playgroundId) {
    return <PlaygroundListPage />;
  }

  const playground = getPlaygroundById(playgroundId);

  if (!playground?.available) {
    return <Navigate to="/playground" replace />;
  }

  if (playgroundId === 'js-arrays') {
    return <ArrayPlaygroundPage />;
  }

  return <Navigate to="/playground" replace />;
};

export default PlaygroundPage;
