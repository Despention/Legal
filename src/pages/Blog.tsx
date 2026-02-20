import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
    {
        id: 1,
        title: 'Изменения в Налоговом кодексе РК в 2026 году: Что нужно знать бизнесу?',
        date: '15 Февраля 2026',
        excerpt: 'Разбираем ключевые поправки, касающиеся НДС, всеобщего декларирования и новых полномочий налоговых органов при проверках ТОО.',
        category: 'Налоги'
    },
    {
        id: 2,
        title: 'Как правильно оформить увольнение сотрудника, чтобы избежать суда',
        date: '02 Февраля 2026',
        excerpt: 'Трудовые споры — частая проблема работодателей. Пошаговая инструкция по процедуре расторжения трудового договора по инициативе работодателя.',
        category: 'Трудовое право'
    },
    {
        id: 3,
        title: 'Ответственность директора ТОО: За что могут привлечь к субсидиарной ответственности',
        date: '20 Января 2026',
        excerpt: 'Мифы и реальность об ответственности учредителей и первых руководителей при банкротстве компании. Анализ судебной практики СМЭС.',
        category: 'Корпоративное право'
    },
    {
        id: 4,
        title: 'ВЭД контракты: типичные ошибки при импорте товаров из Китая',
        date: '10 Января 2026',
        excerpt: 'На что обратить внимание: арбитражная оговорка, применимое право и базисы поставки Инкотермс 2020.',
        category: 'Договорное право'
    }
];

export default function Blog() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="page-blog"
        >
            <section className="section bg-light page-header">
                <div className="container">
                    <h1 className="page-title">Юридический блог</h1>
                    <p className="page-subtitle">Актуальные статьи, обзоры законодательства и советы от экспертов "Право & Защита".</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                        {articles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    background: 'var(--color-bg)',
                                    border: '1px solid var(--color-border)',
                                    borderRadius: 'var(--radius)',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'var(--transition)'
                                }}
                                className="blog-card"
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{ padding: '2rem', flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                        <span style={{ background: 'var(--color-bg-alt)', color: 'var(--color-accent)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>
                                            {article.category}
                                        </span>
                                        <span style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                            <Calendar size={16} /> {article.date}
                                        </span>
                                    </div>

                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', lineHeight: 1.4 }}>
                                        <Link to="#" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>{article.title}</Link>
                                    </h3>

                                    <p style={{ color: 'var(--color-text-light)' }}>{article.excerpt}</p>
                                </div>

                                <div style={{ padding: '1.5rem 2rem', borderTop: '1px solid var(--color-border)', background: 'var(--color-bg-alt)' }}>
                                    <Link to="#" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        Читать далее <ChevronRight size={18} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
