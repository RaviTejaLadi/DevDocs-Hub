import { PageSEO } from '@/components/seo';
import QuizApp from '@/features/mockInterviews/components';

const MockInterviewsPage = () => (
  <>
    <PageSEO
      title="Mock Assessments"
      description="Timed mock assessments and quizzes across frontend, backend, DevOps, testing, and more."
      path="/mock-interviews"
      keywords={['mock interviews', 'mock assessments', 'tech quiz', 'interview practice']}
    />
    <QuizApp />
  </>
);

export default MockInterviewsPage;
