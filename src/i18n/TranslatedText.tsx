import { useTranslatedText } from './useTranslatedText';

export const TranslatedText = ({ text }: { text: string }) => {
  const translated = useTranslatedText(text);
  return <>{translated}</>;
};
