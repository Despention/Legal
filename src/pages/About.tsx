import { Users, GraduationCap, Award, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const values = t('about.values', { returnObjects: true }) as string[];
    const team = t('about.team', { returnObjects: true }) as { name: string, role: string, desc: string }[];
    const faqs = t('about.faqs', { returnObjects: true }) as { q: string, a: string }[];

    const teamImages = [
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80'
    ];

    const ValueIcons = [Users, GraduationCap, Award];

    return (
        <div className="page-about">
            {/* Intro */}
            <section className="section">
                <div className="container about-intro">
                    <div className="text-content">
                        <h1 className="page-title">{t('about.title')}</h1>
                        <p>{t('about.p1')}</p>
                        <p>{t('about.p2')}</p>
                        <div className="values-grid">
                            {values.map((val, idx) => {
                                const Icon = ValueIcons[idx % ValueIcons.length];
                                return (
                                    <div key={idx} className="value-item">
                                        <Icon size={30} className="value-icon" />
                                        <h4>{val}</h4>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title">{t('about.team_title')}</h2>
                    <div className="team-grid">
                        {team.map((member, idx) => (
                            <div key={idx} className="team-card">
                                <div className="team-image-wrapper">
                                    <img src={teamImages[idx % teamImages.length]} alt={member.name} className="team-image" />
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
                    <h2 className="section-title">{t('about.faq_title')}</h2>
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
