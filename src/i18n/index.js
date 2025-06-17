import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importando as traduções
import translationPT from '../locales/pt.json';
import translationEN from '../locales/en.json';
import translationES from '../locales/es.json';
import translationFR from '../locales/fr.json';

// Recursos de idiomas disponíveis
const resources = {
  pt: {
    translation: translationPT
  },
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // react já faz escape por padrão
    },
    detection: {
      order: ['navigator', 'localStorage', 'htmlTag'],
      caches: ['localStorage'],
    }
  });

export default i18n;
