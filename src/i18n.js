import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      EN: {
        translation: en,
      },
      FR: {
        translation: fr,
      },
    },
    lng: 'EN', // default language
    fallbackLng: 'FR',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
