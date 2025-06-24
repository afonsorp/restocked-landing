import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar traduções
import en from './locales/en.json';
import pt from './locales/pt.json';
import es from './locales/es.json';
import fr from './locales/fr.json';

const resources = {
  en: { translation: en },
  pt: { translation: pt },
  es: { translation: es },
  fr: { translation: fr },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // idioma padrão
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false, // React já faz escape
    },
  });

export default i18n;
