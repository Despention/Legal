import { ArrowRight, BookOpen, Building, Handshake, Landmark, Package, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: <Building size={48} />,
        title: 'Корпоративное право',
        desc: 'Полное сопровождение деятельности компаний. Регистрация ТОО/АО, разработка уставов и корпоративных договоров, проведение собраний участников/акционеров.',
    },
    {
        icon: <Landmark size={48} />,
        title: 'Судебные споры',
        desc: 'Ведение дел в судах общей юрисдикции и СМЭС Республики Казахстан. Взыскание дебиторской задолженности, оспаривание сделок.',
    },
    {
        icon: <BookOpen size={48} />,
        title: 'Налоговая практика',
        desc: 'Представительство в Департаменте государственных доходов. Оспаривание актов налоговых проверок, налоговое планирование и аудит.',
    },
    {
        icon: <Handshake size={48} />,
        title: 'Договорное право',
        desc: 'Разработка, правовая экспертиза и анализ контрактов любой сложности, включая внешнеэкономические (ВЭД) сделки.',
    },
    {
        icon: <Package size={48} />,
        title: 'Таможенное право',
        desc: 'Консультирование по вопросам таможенного оформления, обжалование корректировки таможенной стоимости, споры с ДГД.',
    },
    {
        icon: <Scale size={48} />,
        title: 'Уголовная защита',
        desc: 'Защита руководителей и должностных лиц по экономическим и коррупционным преступлениям на стадиях досудебного расследования и в суде.',
    }
];

export default function Services() {
    return (
        <div className="page-services">
            <section className="section bg-light page-header">
                <div className="container">
                    <h1 className="page-title">Наши практики и компетенции</h1>
                    <p className="page-subtitle">Широкий спектр юридических услуг для бизнеса и частных клиентов в Республике Казахстан.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="services-grid-detailed">
                        {services.map((service, idx) => (
                            <div key={idx} className="service-card-detailed">
                                <div className="service-icon-box">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section cta-banner">
                <div className="container cta-banner-content">
                    <h2>Не нашли нужную услугу?</h2>
                    <p>Свяжитесь с нами для обсуждения вашей нестандартной правовой проблемы. Мы найдем решение.</p>
                    <Link to="/contact" className="btn btn-primary btn-large" style={{ marginTop: '1.5rem' }}>
                        Обсудить задачу <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
