import { lazy } from 'react';

/** Code-split page modules — add new pages here only. */
export const LandingPage = lazy(() => import('@/pages/LandingPage'));
export const GuidesPage = lazy(() => import('@/pages/GuidesPage'));
export const GuideDetailPage = lazy(() => import('@/pages/GuideDetailPage'));
export const DocumentationPage = lazy(() => import('@/pages/DocumentationPage'));
export const TermsOfServicePage = lazy(() => import('@/pages/TermsOfServicePage'));
export const InterviewQuestionsPage = lazy(() => import('@/pages/InterviewQuestionsPage'));
export const VisualizationPage = lazy(() => import('@/pages/VisualizationPage'));
export const PlaygroundPage = lazy(() => import('@/pages/PlaygroundPage'));
export const CodeEditorPage = lazy(() => import('@/pages/CodeEditorPage'));
export const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
