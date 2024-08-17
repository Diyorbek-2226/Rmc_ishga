// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en.json'; 
import uzTranslations from './locales/uz.json';
import ruTranslations from './locales/ru.json'; 

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: enTranslations },
      uz: { translation: uzTranslations },
      ru: { translation: ruTranslations },
    },
    lng: localStorage.getItem('lang')||'en', 
    fallbackLng: localStorage.getItem('lang')||'en', 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
