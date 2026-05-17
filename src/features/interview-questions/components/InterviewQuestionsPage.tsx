import { useParams } from 'react-router-dom';
import { TopicListPage } from './TopicListPage';
import { TopicDetailPage } from './TopicDetailPage';

const InterviewQuestionsPage = () => {
  const { topicId } = useParams<{ topicId?: string }>();

  if (topicId) {
    return <TopicDetailPage />;
  }
  return <TopicListPage />;
};

export default InterviewQuestionsPage;
