import { motion } from 'framer-motion';
import { Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Cases() {
    const { t } = useTranslation();
    const cases = t('cases.list', { returnObjects: true }) as {
        title: string;
        client: string;
        problem: string;
        solution: string;
        result: string;
    }[];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="page-cases"
        >
            <section className="section bg-light page-header">
                <div className="container">
                    <h1 className="page-title">{t('cases.title')}</h1>
                    <p className="page-subtitle">{t('cases.subtitle')}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gap: '3rem' }}>
                        {cases.map((c, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    background: 'var(--color-bg)',
                                    border: '1px solid var(--color-border)',
                                    borderRadius: 'var(--radius)',
                                    padding: '2.5rem',
                                    boxShadow: 'var(--shadow-sm)'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <Trophy size={32} color="var(--color-secondary)" />
                                    <h2 style={{ margin: 0, fontSize: '1.8rem' }}>{c.title}</h2>
                                </div>

                                <p style={{ color: 'var(--color-text-light)', fontWeight: 600, marginBottom: '2rem' }}>
                                    {t('cases.client_label')}: {c.client}
                                </p>

                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '1.5rem' }}>
                                    <div style={{ background: 'var(--color-bg-alt)', padding: '1.5rem', borderRadius: '4px', borderLeft: '4px solid #f44336' }}>
                                        <h4 style={{ marginBottom: '0.5rem', color: '#d32f2f' }}>{t('cases.problem_label')}:</h4>
                                        <p>{c.problem}</p>
                                    </div>
                                    <div style={{ background: 'var(--color-bg-alt)', padding: '1.5rem', borderRadius: '4px', borderLeft: '4px solid #1976d2' }}>
                                        <h4 style={{ marginBottom: '0.5rem', color: '#1565c0' }}>{t('cases.solution_label')}:</h4>
                                        <p>{c.solution}</p>
                                    </div>
                                    <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '1.5rem', borderRadius: '4px', borderLeft: '4px solid #4caf50' }}>
                                        <h4 style={{ marginBottom: '0.5rem', color: '#2e7d32' }}>{t('cases.result_label')}:</h4>
                                        <p style={{ fontWeight: 600 }}>{c.result}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>{t('cases.cta_title')}</h3>
                        <Link to="/contact" className="btn btn-primary btn-large">
                            {t('cases.cta_btn')} <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
