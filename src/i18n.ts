import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '@/data/locales/en/translation.json';
import fr from '@/data/locales/fr/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',

    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },

    interpolation: {
      escapeValue: false, // important for React
    },

    // THIS IS CRITICAL FOR ARRAYS / OBJECTS
    returnObjects: true,
  });

export default i18n;
