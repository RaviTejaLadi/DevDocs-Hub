import { Navigate } from 'react-router-dom';
import { ROUTE_PATHS } from './paths';

/** Keeps legacy /overview bookmarks working after overview became the home route. */
export default function RedirectToHome() {
  return <Navigate to={ROUTE_PATHS.home} replace />;
}
