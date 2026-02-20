import { ArrowRight, ShieldCheck, Briefcase, FileText, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Home() {
    const { t } = useTranslation();

    const stats = t('home.stats', { returnObjects: true }) as { val: string, desc: string }[];
    const services = t('home.services', { returnObjects: true }) as { title: string, desc: string }[];
    const testimonials = t('home.testimonials', { returnObjects: true }) as { quote: string, author: string }[];

    // Icons map for the services list
    const serviceIcons = [Briefcase, Scale, FileText, ShieldCheck];

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
                        <h1>{t('home.hero.title')}</h1>
                        <p>{t('home.hero.subtitle')}</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                {t('home.hero.btn_primary')} <ArrowRight size={20} />
                            </Link>
                            <Link to="/services" className="btn btn-outline btn-large">
                                {t('home.hero.btn_secondary')}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Stats / Trust Section */}
            <section className="section bg-light">
                <div className="container stats-grid">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="stat-card">
                            <h3>{stat.val}</h3>
                            <p>{stat.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Preview Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">{t('home.services_title')}</h2>
                    <div className="services-grid">
                        {services.map((service, idx) => {
                            const Icon = serviceIcons[idx % serviceIcons.length];
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="service-card"
                                >
                                    <Icon className="service-icon" size={40} />
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                    <div className="center-action" style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/services" className="btn btn-outline">{t('home.all_services_btn')}</Link>
                    </div>
                </div>
            </section>

            {/* Testimonials snippet */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title">{t('home.testimonials_title')}</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {testimonials.map((testim, idx) => (
                            <div key={idx} style={{ background: 'var(--color-bg)', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid var(--color-border)' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--color-text-light)' }}>{testim.quote}</p>
                                <h4 style={{ margin: 0 }}>{testim.author}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
