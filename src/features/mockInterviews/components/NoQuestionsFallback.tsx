import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface NoQuestionsFallbackProps {
  goToHome: () => void;
}

const NoQuestionsFallback = ({ goToHome }: NoQuestionsFallbackProps) => (
  <div className="max-w-lg mx-auto pb-4">
    <Card className="border-dashed border-border/50 bg-card/50 shadow-none">
      <CardContent className="py-10 text-center space-y-4">
        <span className="text-4xl block" aria-hidden>
          📭
        </span>
        <p className="text-muted-foreground">{'No questions available for this quiz yet.'}</p>
        <Button onClick={goToHome} variant="outline" size="sm" className="rounded-xl">
          <ChevronLeft className="h-4 w-4" aria-hidden />
          {'Back to quizzes'}
        </Button>
      </CardContent>
    </Card>
  </div>
);

export default NoQuestionsFallback;
