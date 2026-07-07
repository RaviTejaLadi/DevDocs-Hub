import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, Award, Clock } from 'lucide-react';
import type { Quiz } from '../types/quiz';
import { sampleQuestions } from '../data/quiz-data';
import NoQuestionsFallback from './NoQuestionsFallback';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import QuizHome from './QuizHome';
import { formatTime } from '../utils/formatTime';
import QuizReport from './QuizReport';
import { useQuizDataStore } from '../stores/useQuizDataStore';
import { useResultStore } from '../stores/useResultStore';
import { useRouteStore } from '../stores/useRouteStore';
import { useTimerStore } from '../stores/useTimerStore';
import { useShallow } from 'zustand/react/shallow';

export default function QuizApp() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(300);

  const questionsPerPage = 5;

  const { currentRoute, setCurrentRoute } = useRouteStore(
    useShallow((state) => ({
      currentRoute: state.currentRoute,
      setCurrentRoute: state.setCurrentRoute,
    }))
  );

  const { isTimerActive, setIsTimerActive } = useTimerStore(
    useShallow((state) => ({
      isTimerActive: state.isTimerActive,
      setIsTimerActive: state.setIsTimerActive,
    }))
  );

  const { selectedQuiz, setSelectedQuiz, answers, setAnswers } = useQuizDataStore(
    useShallow((state) => ({
      selectedQuiz: state.selectedQuiz,
      setSelectedQuiz: state.setSelectedQuiz,
      answers: state.answers,
      setAnswers: state.setAnswers,
    }))
  );

  const { score, setScore, showResult, setShowResult, maxStreak, setMaxStreak } = useResultStore(
    useShallow((state) => ({
      score: state.score,
      setScore: state.setScore,
      showResult: state.showResult,
      setShowResult: state.setShowResult,
      maxStreak: state.maxStreak,
      setMaxStreak: state.setMaxStreak,
    }))
  );

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            setIsTimerActive(false);
            handleTimeUp();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timeLeft]);

  const handleTimeUp = () => {
    setShowResult(true);
    calculateFinalScore();
  };

  const calculateFinalScore = () => {
    if (!selectedQuiz) return;

    const questions = sampleQuestions[selectedQuiz.id] || [];
    let correctAnswers = 0;
    let currentStreak = 0;
    let maxStreakInQuiz = 0;

    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctAnswers++;
        currentStreak++;
        maxStreakInQuiz = Math.max(maxStreakInQuiz, currentStreak);
      } else {
        currentStreak = 0;
      }
    });

    setScore(correctAnswers);
    setMaxStreak(maxStreakInQuiz);
  };

  const handleCardClick = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setCurrentRoute('quiz');
    setAnswers({});
    setScore(0);
    setShowResult(false);
    setTimeLeft(300);
    setIsTimerActive(true);
    setMaxStreak(0);
    setCurrentPage(0);
  };

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = { ...answers, [questionIndex]: answerIndex };
    setAnswers(newAnswers);
  };

  const handleFinishQuiz = () => {
    const confirmed = window.confirm(
      'Submit Quiz?\n\nAre you sure you want to submit the quiz? You won’t be able to change your answers after submission.'
    );
    if (!confirmed) return;

    setIsTimerActive(false);
    calculateFinalScore();
    setShowResult(true);
  };

  const handleBackHome = () => {
    setCurrentRoute('home');
    setSelectedQuiz(null);
    setAnswers({});
    setScore(0);
    setShowResult(false);
    setTimeLeft(300);
    setIsTimerActive(false);
    setMaxStreak(0);
    setCurrentPage(0);
  };

  const handleRetakeQuiz = () => {
    setAnswers({});
    setScore(0);
    setShowResult(false);
    setTimeLeft(300);
    setIsTimerActive(true);
    setMaxStreak(0);
    setCurrentPage(0);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  if (currentRoute === 'home') {
    return <QuizHome startQuiz={handleCardClick} />;
  }

  if (currentRoute === 'quiz' && selectedQuiz) {
    const questions = sampleQuestions[selectedQuiz.id] || [];
    const totalPages = Math.ceil(questions.length / questionsPerPage);
    const startIndex = currentPage * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const currentQuestions = questions.slice(startIndex, endIndex);

    if (showResult) {
      const percentage = Math.round((score / questions.length) * 100);
      const timeTaken = 300 - timeLeft;

      return (
        <QuizReport
          score={score / questions.length}
          percentage={percentage}
          timeTaken={timeTaken / questions.length}
          maxStreak={maxStreak}
          backToHome={handleBackHome}
          retakeQuiz={handleRetakeQuiz}
        />
      );
    }

    if (questions.length === 0) {
      return <NoQuestionsFallback goToHome={handleBackHome} />;
    }

    return (
      <div className="max-w-3xl mx-auto space-y-6 pb-4">
        <div className="space-y-4">
          <Button onClick={handleBackHome} variant="outline" size="sm" className="rounded-lg">
            <ChevronLeft className="h-4 w-4" aria-hidden />
            {'Back to quizzes'}
          </Button>

          <div className="rounded-2xl border border-border/45 bg-card/72 p-4 sm:p-5 backdrop-blur-md shadow-none">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-foreground">{`${selectedQuiz.title} quiz`}</h2>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  {`Page ${currentPage + 1} of ${totalPages} · ${questions.length} questions`}
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-destructive/25 bg-destructive/8 px-3 py-1 text-sm font-medium text-destructive">
                <Clock className="h-3.5 w-3.5" aria-hidden />
                {formatTime(timeLeft)}
              </div>
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted/50">
              <div
                className="h-full rounded-full bg-primary transition-all duration-300"
                style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground tabular-nums">
              {`${Object.keys(answers).length} of ${questions.length} answered`}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {currentQuestions.map((question, index) => {
            const questionIndex = startIndex + index;
            return (
              <Card key={questionIndex} className="border-border/40 bg-card/80 shadow-none">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold leading-relaxed text-foreground">
                    <span className="mr-2 text-primary">{`Q${questionIndex + 1}.`}</span>
                    {question.question}
                    {question?.code ? (
                      <pre className="mt-3 overflow-x-auto rounded-lg border border-border/50 bg-muted/40 p-3 text-xs font-mono">
                        <code>{question.code}</code>
                      </pre>
                    ) : null}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2 pt-0">
                  {question.options.map((option, optionIndex) => {
                    const isSelected = answers[questionIndex] === optionIndex;
                    return (
                      <Button
                        key={optionIndex}
                        onClick={() => handleAnswerSelect(questionIndex, optionIndex)}
                        variant={isSelected ? 'default' : 'outline'}
                        className={cn(
                          'h-auto min-h-10 justify-start whitespace-normal px-3 py-2.5 text-left text-sm',
                          !isSelected && 'border-border/40 bg-background/60 hover:bg-muted/40'
                        )}
                      >
                        <span
                          className={cn(
                            'mr-2.5 flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold',
                            isSelected
                              ? 'border-primary-foreground/30 bg-primary-foreground/15 text-primary-foreground'
                              : 'border-border/50 bg-muted/30 text-muted-foreground'
                          )}
                        >
                          {String.fromCharCode(65 + optionIndex)}
                        </span>
                        <span>{option}</span>
                      </Button>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2">
            <Button onClick={handlePreviousPage} disabled={currentPage === 0} variant="outline" size="sm" className="rounded-lg">
              <ChevronLeft className="h-4 w-4" aria-hidden />
              {'Previous'}
            </Button>
            <Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              variant="outline"
              size="sm"
              className="rounded-lg"
            >
              {'Next'}
              <ChevronLeft className="h-4 w-4 rotate-180" aria-hidden />
            </Button>
          </div>

          <Button onClick={handleFinishQuiz} size="sm" className="rounded-lg">
            <Award className="h-4 w-4" aria-hidden />
            {`Submit (${Object.keys(answers).length}/${questions.length})`}
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
