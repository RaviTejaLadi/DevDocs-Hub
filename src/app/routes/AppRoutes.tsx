import { Route, Routes, type Location } from 'react-router-dom';
import { docsSidebarDesktopElement, docsSidebarMobileElement, mainRoutes, type SidebarRouteContext } from './config';
import { ROUTE_PATHS } from './paths';

type AppRoutesProps = {
  location: Location;
};

export const MainAppRoutes = ({ location }: AppRoutesProps) => (
  <Routes location={location}>
    {mainRoutes.map(({ id, path, Component }) => (
      <Route key={id} path={path} element={<Component />} />
    ))}
  </Routes>
);

export const DocsSidebarMobileRoutes = ({ location, closeSidebar }: AppRoutesProps & SidebarRouteContext) => (
  <Routes location={location}>
    <Route path={ROUTE_PATHS.docs} element={docsSidebarMobileElement({ closeSidebar })} />
  </Routes>
);

export const DocsSidebarDesktopRoutes = ({ location }: AppRoutesProps) => (
  <Routes location={location}>
    <Route path={ROUTE_PATHS.docs} element={docsSidebarDesktopElement} />
  </Routes>
);
