import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
    ru: {
        translation: {
            "nav": {
                "home": "Главная",
                "about": "О нас",
                "services": "Практики",
                "cases": "Кейсы",
                "blog": "Блог",
                "contact": "Связаться"
            },
            "hero": {
                "title": "Профессиональная защита бизнеса в Казахстане",
                "subtitle": "Мы предлагаем экспертные юридические услуги компаниям и частным лицам. Наш подход основан на многолетнем опыте и глубоком знании законодательства РК.",
                "btn_primary": "Заказать консультацию",
                "btn_secondary": "Наши практики"
            }
        }
    },
    kz: {
        translation: {
            "nav": {
                "home": "Басты бет",
                "about": "Біз туралы",
                "services": "Қызметтер",
                "cases": "Істер",
                "blog": "Блог",
                "contact": "Байланыс"
            },
            "hero": {
                "title": "Қазақстандағы бизнесті кәсіби қорғау",
                "subtitle": "Біз компаниялар мен жеке тұлғаларға сарапшылық заң қызметтерін ұсынамыз. Біздің тәсіліміз көп жылдық тәжірибеге және ҚР заңнамасын терең білуге негізделген.",
                "btn_primary": "Консультацияға тапсырыс беру",
                "btn_secondary": "Біздің тәжірибе"
            }
        }
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
