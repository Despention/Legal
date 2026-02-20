import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ruTranslation from './ru.json';
import kzTranslation from './kz.json';

// Translations
const resources = {
    ru: {
        translation: ruTranslation
    },
    kz: {
        translation: kzTranslation
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ru", // default language
        fallbackLng: "ru",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
