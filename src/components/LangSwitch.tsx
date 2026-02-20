import { useTranslation } from 'react-i18next';

export default function LangSwitch() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'ru' ? 'kz' : 'ru';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="lang-switch"
            style={{
                background: 'none',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                cursor: 'pointer',
                color: 'var(--color-primary)',
                padding: '0.3rem 0.6rem',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem'
            }}
        >
            {i18n.language.toUpperCase()}
        </button>
    );
}
