import type { TopicItem } from '@/data/topics';
import introduction from './introduction.mdx?raw';
import language_models from './language-models.mdx?raw';
import text_preprocessing from './text-preprocessing.mdx?raw';
import word_embeddings from './word-embeddings.mdx?raw';

export const nlpTopics: TopicItem[] = [
  { id: 'nlp-introduction', title: '📖 Introduction', content: introduction },
  { id: 'nlp-language-models', title: 'Language Models', content: language_models },
  { id: 'nlp-text-preprocessing', title: 'Text Preprocessing', content: text_preprocessing },
  { id: 'nlp-word-embeddings', title: 'Word Embeddings', content: word_embeddings },
];
