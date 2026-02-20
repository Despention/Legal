import { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Calculator() {
    const { t } = useTranslation();
    const [service, setService] = useState('registration');
    const [businessType, setBusinessType] = useState('small');

    const serviceKeyMap: any = {
        registration: 'r',
        litigation: 'l',
        consulting: 'c'
    };

    const businessKeyMap: any = {
        small: 's',
        medium: 'm',
        large: 'l'
    };

    const sKey = serviceKeyMap[service];
    const bKey = businessKeyMap[businessType];

    const currentFee = t(`calculator.results.${sKey}_${bKey}_f`);
    const currentDuty = t(`calculator.results.${sKey}_${bKey}_d`);

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
                <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{t('calculator.title')}</h3>
            </div>

            <div className="form-group">
                <label>{t('calculator.service_label')}</label>
                <select value={service} onChange={(e) => setService(e.target.value)} style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: '1rem' }}>
                    <option value="registration">{t('calculator.services.registration')}</option>
                    <option value="litigation">{t('calculator.services.litigation')}</option>
                    <option value="consulting">{t('calculator.services.consulting')}</option>
                </select>
            </div>

            <div className="form-group">
                <label>{t('calculator.business_label')}</label>
                <select value={businessType} onChange={(e) => setBusinessType(e.target.value)} style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: '1rem' }}>
                    <option value="small">{t('calculator.businesses.small')}</option>
                    <option value="medium">{t('calculator.businesses.medium')}</option>
                    <option value="large">{t('calculator.businesses.large')}</option>
                </select>
            </div>

            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--color-bg-alt)', borderRadius: '4px', borderLeft: '4px solid var(--color-accent)' }}>
                <p style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600 }}>
                    <span>{t('calculator.fee_label')}</span>
                    <span style={{ color: 'var(--color-accent)' }}>{currentFee}</span>
                </p>
                <p style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                    <span>{t('calculator.duty_label')}</span>
                    <span>{currentDuty}</span>
                </p>
            </div>
        </div>
    );
}
