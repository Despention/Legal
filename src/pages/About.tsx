import { Users, GraduationCap, Award, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const team = [
    {
        id: 1,
        name: 'Азамат Есенов',
        role: 'Старший партнер',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
        desc: 'Опыт 20+ лет. Специализация: Корпоративные споры, M&A.',
    },
    {
        id: 2,
        name: 'Динара Сулейменова',
        role: 'Руководитель налоговой практики',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
        desc: 'Опыт 15 лет. Специализация: Налоговый консалтинг, аудит.',
    },
    {
        id: 3,
        name: 'Тимур Сабитов',
        role: 'Адвокат по уголовным делам',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
        desc: 'Опыт 12 лет. Специализация: Экономические преступления.',
    }
];

const faqs = [
    {
        q: 'Сколько стоит первичная консультация?',
        a: 'Первичная оценка перспективы дела проводится бесплатно. Развернутая устная консультация с изучением документов — от 30 000 тенге.'
    },
    {
        q: 'С какими регионами Казахстана вы работаете?',
        a: 'Наш головной офис находится в Алматы, но мы представляем интересы клиентов по всей территории Республики Казахстан, включая Астану, Шымкент, Атырау и Караганду.'
    },
    {
        q: 'Каковы гарантии результата в суде?',
        a: 'Закон об адвокатской деятельности РК запрещает давать 100% гарантии выигрыша дела. Однако мы гарантируем профессиональный подход и максимальное использование всех правовых инструментов для защиты ваших интересов.'
    }
];

export default function About() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="page-about">
            {/* Intro */}
            <section className="section">
                <div className="container about-intro">
                    <div className="text-content">
                        <h1 className="page-title">О нашей компании</h1>
                        <p>Юридическая фирма "Право & Защита" была основана в 2011 году в Алматы. Мы объединили лучших юристов и адвокатов Казахстана для оказания высококвалифицированной правовой помощи бизнесу.</p>
                        <p>Наш подход строится на конфиденциальности, глубокой экспертизе и нацеленности на практический результат. Мы не просто цитируем законы — мы предлагаем работающие бизнес-решения.</p>
                        <div className="values-grid">
                            <div className="value-item">
                                <Users size={30} className="value-icon" />
                                <h4>Персональный подход</h4>
                            </div>
                            <div className="value-item">
                                <GraduationCap size={30} className="value-icon" />
                                <h4>Высокая экспертиза</h4>
                            </div>
                            <div className="value-item">
                                <Award size={30} className="value-icon" />
                                <h4>Репутация и опыт</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title">Наша команда</h2>
                    <div className="team-grid">
                        {team.map(member => (
                            <div key={member.id} className="team-card">
                                <div className="team-image-wrapper">
                                    <img src={member.image} alt={member.name} className="team-image" />
                                </div>
                                <div className="team-info">
                                    <h3>{member.name}</h3>
                                    <p className="team-role">{member.role}</p>
                                    <p className="team-desc">{member.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section">
                <div className="container faq-container">
                    <h2 className="section-title">Часто задаваемые вопросы</h2>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                                <button className="faq-question" onClick={() => toggleFaq(index)}>
                                    {faq.q}
                                    <ChevronDown className="faq-icon" size={20} />
                                </button>
                                <div className="faq-answer">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
