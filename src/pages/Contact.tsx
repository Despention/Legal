import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you would typically send data to a backend
    };

    return (
        <div className="page-contact">
            <section className="section bg-light page-header">
                <div className="container">
                    <h1 className="page-title">{t('contact.title')}</h1>
                    <p className="page-subtitle">{t('contact.subtitle')}</p>
                </div>
            </section>

            <section className="section">
                <div className="container contact-container">
                    <div className="contact-info">
                        <h2>{t('contact.info_title')}</h2>
                        <p className="contact-desc">{t('contact.info_desc')}</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <MapPin className="contact-icon" size={24} />
                                <div>
                                    <h4>{t('contact.address_label')}</h4>
                                    <p style={{ whiteSpace: 'pre-line' }}>{t('contact.address_val')}</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <Phone className="contact-icon" size={24} />
                                <div>
                                    <h4>{t('contact.phone_label')}</h4>
                                    <p>{t('contact.phone_val1')}</p>
                                    <p>{t('contact.phone_val2')}</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <Mail className="contact-icon" size={24} />
                                <div>
                                    <h4>Электронная почта</h4>
                                    <p>info@lawfirm-kz.kz</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <Clock className="contact-icon" size={24} />
                                <div>
                                    <h4>{t('contact.time_label')}</h4>
                                    <p style={{ whiteSpace: 'pre-line' }}>{t('contact.time_val')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-box">
                        <h2>{t('contact.form_title')}</h2>
                        {submitted ? (
                            <div className="success-message">
                                <h3>{t('contact.success_title')}</h3>
                                <p>{t('contact.success_desc')}</p>
                                <button className="btn btn-outline" onClick={() => setSubmitted(false)} style={{ marginTop: '1rem' }}>
                                    {t('contact.form_submit')}
                                </button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">{t('contact.form_name')} *</label>
                                    <input type="text" id="name" required placeholder="" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">{t('contact.form_phone')} *</label>
                                    <input type="tel" id="phone" required placeholder="+7 (7XX) XXX-XX-XX" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">{t('contact.form_desc')}</label>
                                    <textarea id="message" rows={4} placeholder="..."></textarea>
                                </div>

                                <div className="form-policy">
                                    <label>
                                        <input type="checkbox" required />
                                        {t('contact.form_agree')}
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-large">
                                    {t('contact.form_submit')}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
