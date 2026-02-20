import { ArrowRight, BookOpen, Building, Handshake, Landmark, Package, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Services() {
    const { t } = useTranslation();
    const services = t('services_page.list', { returnObjects: true }) as { title: string, desc: string }[];
    const serviceIcons = [Building, Landmark, BookOpen, Handshake, Package, Scale];

    return (
        <div className="page-services">
            <section className="section bg-light page-header">
                <div className="container">
                    <h1 className="page-title">{t('services_page.title')}</h1>
                    <p className="page-subtitle">{t('services_page.subtitle')}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="services-grid-detailed">
                        {services.map((service, idx) => {
                            const Icon = serviceIcons[idx % serviceIcons.length];
                            return (
                                <div key={idx} className="service-card-detailed">
                                    <div className="service-icon-box">
                                        <Icon size={48} />
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="section cta-banner">
                <div className="container cta-banner-content">
                    <h2>{t('services_page.cta_title')}</h2>
                    <p>{t('services_page.cta_desc')}</p>
                    <Link to="/contact" className="btn btn-primary btn-large" style={{ marginTop: '1.5rem' }}>
                        {t('services_page.cta_btn')} <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
