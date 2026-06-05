import { useNavigate } from 'react-router-dom';
import Footer from '@/components/layout/Footer';
import FeaturesSection from '@/components/landing/FeaturesSection';
import { DOCS_NAV_RESET_SCROLL } from '@/lib/docsLocationState';
import { useLandingStreams, useLandingTopics } from '../hooks';
import { LandingHero } from './LandingHero';
import { LandingTopicsPanel } from './LandingTopicsPanel';
import { LandingTopicsSkeleton } from './LandingTopicsSkeleton';

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

  return (
    <div className="pb-16 sm:pb-20 max-w-6xl mx-auto w-full min-w-0 px-0 sm:px-0">
      <LandingHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onInterviewClick={() => navigate('/interview-questions')}
      />

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
        />
      )}

      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
