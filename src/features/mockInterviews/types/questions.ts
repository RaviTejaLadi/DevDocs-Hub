export type Question = {
  id: number;
  question: string;
  code?: string;
  options: string[];
  correctAnswer: number;
};
