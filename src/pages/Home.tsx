import { ArrowRight, ShieldCheck, Briefcase, FileText, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Home() {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="page-home"
        >
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="hero-text-box"
                    >
                        <h1>{t('hero.title')}</h1>
                        <p>{t('hero.subtitle')}</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                {t('hero.btn_primary')} <ArrowRight size={20} />
                            </Link>
                            <Link to="/services" className="btn btn-outline btn-large">
                                {t('hero.btn_secondary')}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Stats / Trust Section */}
            <section className="section bg-light">
                <div className="container stats-grid">
                    <div className="stat-card">
                        <h3>15+ лет</h3>
                        <p>Успешной практики на рынке РК</p>
                    </div>
                    <div className="stat-card">
                        <h3>95%</h3>
                        <p>Выигранных судебных споров</p>
                    </div>
                    <div className="stat-card">
                        <h3>5 млрд. ₸</h3>
                        <p>Сохранено средств клиентов</p>
                    </div>
                    <div className="stat-card">
                        <h3>500+</h3>
                        <p>Бизнес-проектов под защитой</p>
                    </div>
                </div>
            </section>

            {/* Services Preview Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Ключевые компетенции</h2>
                    <div className="services-grid">
                        {[
                            { icon: Briefcase, title: 'Корпоративное право', desc: 'Регистрация, реструктуризация и ликвидация ТОО и АО. Оформление сделок M&A по законам РК.' },
                            { icon: Scale, title: 'Разрешение споров', desc: 'Представление интересов в СМЭС (Специализированных межрайонных экономических судах).' },
                            { icon: FileText, title: 'Налоговые споры', desc: 'Обжалование уведомлений по результатам налоговых проверок Комитета государственных доходов.' },
                            { icon: ShieldCheck, title: 'Защита активов', desc: 'Правовой аудит (Due Diligence) и структурирование владения бизнесом для минимизации рисков.' }
                        ].map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="service-card"
                            >
                                <service.icon className="service-icon" size={40} />
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="center-action" style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/services" className="btn btn-outline">Все юридические услуги</Link>
                    </div>
                </div>
            </section>

            {/* Testimonials snippet */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title">Отзывы клиентов</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'var(--color-bg)', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid var(--color-border)' }}>
                            <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--color-text-light)' }}>"Юристы компании помогли нам выиграть сложный спор с налоговой инспекцией, сэкономив компании более 40 млн тенге. Исключительный профессионализм."</p>
                            <h4 style={{ margin: 0 }}>ТОО "СтройКазИнвест"</h4>
                        </div>
                        <div style={{ background: 'var(--color-bg)', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid var(--color-border)' }}>
                            <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--color-text-light)' }}>"Обращались за сопровождением крупной сделки M&A. Все документы были подготовлены безупречно, риски минимизированы. Рекомендуем."</p>
                            <h4 style={{ margin: 0 }}>АО "Алтын Коммерц"</h4>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
