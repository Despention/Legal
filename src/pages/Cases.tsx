import { motion } from 'framer-motion';
import { Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
    {
        id: 1,
        title: 'Отмена незаконных доначислений налогов',
        client: 'Крупная строительная компания, г. Астана',
        problem: 'По результатам комплексной налоговой проверки ДГД компании были доначислены КПН и НДС на сумму 350 млн тенге, а также выставлены пени. Счета компании были заблокированы.',
        solution: 'Наши юристы провели аудит акта проверки, выявили процессуальные нарушения со стороны проверяющих и доказали реальность сделок с контрагентами.',
        result: 'Решением СМЭС уведомление о результатах проверки признано незаконным и отменено в полном объеме. Счета разблокированы. Сэкономлено 350+ млн ₸.'
    },
    {
        id: 2,
        title: 'Защита активов при корпоративном конфликте',
        client: 'IT-компания, г. Алматы',
        problem: 'Миноритарный участник ТОО (30% доли) подал иск о принудительном выкупе доли по завышенной стоимости и наложил арест на программное обеспечение.',
        solution: 'Разработана встречная стратегия защиты, проведена независимая оценка стоимости активов, инициировано встречное требование об исключении участника за причинение вреда ТОО.',
        result: 'Заключено выгодное медиативное соглашение. Арест снят. Контроль над компанией и IT-продуктом сохранен за мажоритарными основателями.'
    },
    {
        id: 3,
        title: 'Взыскание долга по договору подряда',
        client: 'Производственное предприятие, г. Караганда',
        problem: 'Заказчик отказался оплачивать поставленное и смонтированное оборудование, ссылаясь на мнимые дефекты. Сумма долга — 80 млн тенге.',
        solution: 'Собрана доказательная база, проведена досудебная строительно-техническая экспертиза. Подан иск в СМЭС с требованием взыскания основного долга и неустойки.',
        result: 'Иск удовлетворен в полном объеме. Взыскано 80 млн тенге долга + 5 млн тенге неустойки и судебных расходов. Деньги фактически поступили на счет клиента.'
    }
];

export default function Cases() {
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
                    <h1 className="page-title">Выигранные дела (Кейсы)</h1>
                    <p className="page-subtitle">Реальные истории защиты бизнеса в Казахстане. Наш опыт говорит сам за себя.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gap: '3rem' }}>
                        {cases.map((c, index) => (
                            <motion.div
                                key={c.id}
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

                                <p style={{ color: 'var(--color-text-light)', fontWeight: 600, marginBottom: '2rem' }}>Клиент: {c.client}</p>

                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '1.5rem' }}>
                                    <div style={{ background: 'var(--color-bg-alt)', padding: '1.5rem', borderRadius: '4px', borderLeft: '4px solid #f44336' }}>
                                        <h4 style={{ marginBottom: '0.5rem', color: '#d32f2f' }}>Проблема:</h4>
                                        <p>{c.problem}</p>
                                    </div>
                                    <div style={{ background: 'var(--color-bg-alt)', padding: '1.5rem', borderRadius: '4px', borderLeft: '4px solid #1976d2' }}>
                                        <h4 style={{ marginBottom: '0.5rem', color: '#1565c0' }}>Решение:</h4>
                                        <p>{c.solution}</p>
                                    </div>
                                    <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '1.5rem', borderRadius: '4px', borderLeft: '4px solid #4caf50' }}>
                                        <h4 style={{ marginBottom: '0.5rem', color: '#2e7d32' }}>Результат:</h4>
                                        <p style={{ fontWeight: 600 }}>{c.result}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Нужна аналогичная помощь?</h3>
                        <Link to="/contact" className="btn btn-primary btn-large">
                            Связаться с юристом <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
