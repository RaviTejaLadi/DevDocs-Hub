import { Globe, Server, Settings, Shield, Database, TestTube, Smartphone } from 'lucide-react';
import type { QuizCategory } from '../types/quiz-category';
import { quizzesCards } from './quizzes-cards';

export const categories: QuizCategory[] = [
  {
    name: 'Frontend',
    icon: <Globe className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-blue-500 to-purple-500',
    quizzes: quizzesCards.filter((quiz) => quiz.category === 'Frontend'),
  },
  {
    name: 'Backend',
    icon: <Server className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-green-500 to-teal-500',
    quizzes: quizzesCards.filter((quiz) => quiz.category === 'Backend'),
  },
  {
    name: 'DevOps',
    icon: <Settings className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-orange-500 to-red-500',
    quizzes: quizzesCards.filter((quiz) => quiz.category === 'DevOps'),
  },
  {
    name: 'Testing & Quality Assurance',
    icon: <TestTube className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-indigo-500 to-blue-500',
    quizzes: quizzesCards.filter((quiz) => quiz.category === 'Testing'),
  },
  {
    name: 'Data & Analytics',
    icon: <Database className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-yellow-500 to-orange-500',
    quizzes: quizzesCards.filter((quiz) => quiz.category === 'Data'),
  },
  {
    name: 'Security',
    icon: <Shield className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-red-500 to-rose-500',
    quizzes: quizzesCards.filter((quiz) => quiz.category === 'Security'),
  },
  {
    name: 'Mobile',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-pink-500 to-purple-500',
    quizzes: quizzesCards.filter((quiz) => quiz.category === 'Mobile'),
  },
];
