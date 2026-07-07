import type { ComponentType, ReactElement } from 'react';
import SidebarWrapperDesktop from '@/components/layout/SidebarWrapperDesktop';
import SidebarWrapperMobile from '@/components/layout/SidebarWrapperMobile';
import { ROUTE_PATHS } from './paths';
import * as Pages from './pages';

export type RouteOutlet = 'main' | 'sidebar-mobile' | 'sidebar-desktop';

export type MainRouteDefinition = {
  id: string;
  path: string;
  Component: ComponentType;
};

/** Main content area — lazy pages with a catch-all 404. */
export const mainRoutes: readonly MainRouteDefinition[] = [
  { id: 'home', path: ROUTE_PATHS.home, Component: Pages.LandingPage },
  { id: 'guides', path: ROUTE_PATHS.guides, Component: Pages.GuidesPage },
  { id: 'guide', path: ROUTE_PATHS.guide, Component: Pages.GuideDetailPage },
  { id: 'docs', path: ROUTE_PATHS.docs, Component: Pages.DocumentationPage },
  { id: 'overview', path: ROUTE_PATHS.overview, Component: Pages.OverviewPage },
  { id: 'terms', path: ROUTE_PATHS.terms, Component: Pages.TermsOfServicePage },
  { id: 'interview-questions', path: ROUTE_PATHS.interviewQuestions, Component: Pages.InterviewQuestionsPage },
  { id: 'mock-interviews', path: ROUTE_PATHS.mockInterviews, Component: Pages.MockInterviewsPage },
  { id: 'visualizations', path: ROUTE_PATHS.visualizations, Component: Pages.VisualizationPage },
  { id: 'playground', path: ROUTE_PATHS.playground, Component: Pages.PlaygroundPage },
  { id: 'code-editor', path: ROUTE_PATHS.codeEditor, Component: Pages.CodeEditorPage },
  { id: 'not-found', path: '*', Component: Pages.NotFoundPage },
] as const;

export type SidebarRouteContext = {
  closeSidebar: () => void;
};

export const docsSidebarDesktopElement = <SidebarWrapperDesktop />;

export function docsSidebarMobileElement(ctx: SidebarRouteContext): ReactElement {
  return <SidebarWrapperMobile close={ctx.closeSidebar} />;
}
