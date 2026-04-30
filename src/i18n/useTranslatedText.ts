import { useEffect, useState } from 'react';
import { useI18n } from './I18nProvider';
import { DEFAULT_LANGUAGE } from './translations';
import { translateText } from './runtimeTranslate';

export const useTranslatedText = (text: string) => {
  const { language } = useI18n();
  const [translated, setTranslated] = useState(text);

  useEffect(() => {
    let active = true;
    if (!text || language === DEFAULT_LANGUAGE) {
      setTranslated(text);
      return () => {
        active = false;
      };
    }

    translateText(text, language).then((value) => {
      if (active) setTranslated(value);
    });

    return () => {
      active = false;
    };
  }, [text, language]);

  return translated;
};
