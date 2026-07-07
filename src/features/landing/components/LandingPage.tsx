import { useNavigate } from 'react-router-dom';
import Footer from '@/components/layout/Footer';
import FeaturesSection from '@/components/landing/FeaturesSection';
import GuidesSection from '@/components/landing/GuidesSection';
import { PageSEO } from '@/components/seo';
import { interviewQuestionsPath, ROUTE_PATHS } from '@/app/routes/paths';
import { DOCS_NAV_RESET_SCROLL } from '@/lib/docsLocationState';
import { SITE_DESCRIPTION } from '@/lib/seo/config';
import { websiteJsonLd } from '@/lib/seo/jsonLd';
import { useLandingStreams, useLandingTopics } from '../hooks';
import { LandingHero } from './LandingHero';
import { LandingTopicsPanel } from './LandingTopicsPanel';
import { LandingTopicsSkeleton } from './LandingTopicsSkeleton';
// import { StandaloneFlowDemo } from '@/features/StandaloneFlowRender';
// import frontendRoadmap from './js.json';

const LandingPage = () => {
  const navigate = useNavigate();
  const streams = useLandingStreams();
  const {
    searchQuery,
    setSearchQuery,
    viewMode,
    setViewMode,
    collapsed,
    activeStreamId,
    setActiveStreamId,
    activeStream,
    groupedTopics,
    toggleSection,
    totalTopicsInStream,
    filteredTopicsCount,
    hasSearch,
  } = useLandingTopics(streams);

  const handleTopicSelect = (topicId: string, itemId: string) => {
    navigate(`/docs/${topicId}/${itemId}`, { state: DOCS_NAV_RESET_SCROLL });
  };
  // const { nodes, edges } = frontendRoadmap;
  return (
    <div className="pb-16 sm:pb-20 max-w-6xl mx-auto w-full min-w-0 px-0 sm:px-0">
      <PageSEO title="Home" description={SITE_DESCRIPTION} path="/" jsonLd={websiteJsonLd()} />
      <LandingHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onVisualizationClick={() => navigate('/visualizations')}
      />
      {/* <StandaloneFlowDemo nodes={nodes} edges={edges} roadmapId="frontend" /> */}
      {streams === null ? (
        <LandingTopicsSkeleton />
      ) : (
        <LandingTopicsPanel
          streams={streams}
          activeStreamId={activeStreamId}
          activeStream={activeStream}
          onSelectStream={setActiveStreamId}
          groupedTopics={groupedTopics}
          viewMode={viewMode}
          collapsed={collapsed}
          onToggleSection={toggleSection}
          onTopicSelect={handleTopicSelect}
          totalTopicsInStream={totalTopicsInStream}
          filteredTopicsCount={filteredTopicsCount}
          hasSearch={hasSearch}
          extraNavItems={[
            {
              emoji: '🎯',
              label: 'Interview Questions (by level)',
              onClick: () => navigate(interviewQuestionsPath()),
            },
            {
              emoji: '🎤',
              label: 'Mock Assessments',
              onClick: () => navigate(ROUTE_PATHS.mockInterviews),
            },
          ]}
        />
      )}

      <GuidesSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
