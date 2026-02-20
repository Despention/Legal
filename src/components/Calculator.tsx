import { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';

export default function Calculator() {
    const [service, setService] = useState('registration');
    const [businessType, setBusinessType] = useState('small');

    // Simple pricing mock
    const pricing = {
        registration: {
            small: { fee: '50 000 ₸', duty: '0 ₸ (Онлайн)' },
            medium: { fee: '100 000 ₸', duty: 'Избегается онлайн' },
            large: { fee: '150 000 ₸', duty: 'По тарифам Egov' }
        },
        litigation: {
            small: { fee: 'от 300 000 ₸', duty: '1% от суммы иска' },
            medium: { fee: 'от 500 000 ₸', duty: '3% от суммы иска' },
            large: { fee: 'от 1 000 000 ₸', duty: '3% от суммы иска' }
        },
        consulting: {
            small: { fee: '30 000 ₸ / час', duty: 'Нет' },
            medium: { fee: '50 000 ₸ / час', duty: 'Нет' },
            large: { fee: '80 000 ₸ / час', duty: 'Нет' }
        }
    };

    const currentPrice = pricing[service as keyof typeof pricing][businessType as keyof typeof pricing['registration']];

    return (
        <div className="calculator-widget" style={{
            background: 'var(--color-bg)',
            padding: '2rem',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow)',
            border: '1px solid var(--color-border)',
            maxWidth: '600px',
            margin: '0 auto'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <CalcIcon size={32} color="var(--color-accent)" />
                <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Калькулятор услуг</h3>
            </div>

            <div className="form-group">
                <label>Тип услуги</label>
                <select value={service} onChange={(e) => setService(e.target.value)} style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: '1rem' }}>
                    <option value="registration">Регистрация компании (ТОО/АО)</option>
                    <option value="litigation">Судебное представительство</option>
                    <option value="consulting">Юридический консалтинг</option>
                </select>
            </div>

            <div className="form-group">
                <label>Категория бизнеса</label>
                <select value={businessType} onChange={(e) => setBusinessType(e.target.value)} style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: '1rem' }}>
                    <option value="small">Малый бизнес / Физ. лицо</option>
                    <option value="medium">Средний бизнес</option>
                    <option value="large">Крупный бизнес</option>
                </select>
            </div>

            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--color-bg-alt)', borderRadius: '4px', borderLeft: '4px solid var(--color-accent)' }}>
                <p style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600 }}>
                    <span>Примерный гонорар:</span>
                    <span style={{ color: 'var(--color-accent)' }}>{currentPrice.fee}</span>
                </p>
                <p style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                    <span>Государственная пошлина РК:</span>
                    <span>{currentPrice.duty}</span>
                </p>
            </div>
        </div>
    );
}
