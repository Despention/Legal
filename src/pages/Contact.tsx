import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
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
                    <h1 className="page-title">Свяжитесь с нами</h1>
                    <p className="page-subtitle">Доверьте свои правовые вопросы профессионалам.</p>
                </div>
            </section>

            <section className="section">
                <div className="container contact-container">
                    <div className="contact-info">
                        <h2>Наши контакты</h2>
                        <p className="contact-desc">Мы всегда готовы обсудить вашу ситуацию и предложить оптимальное правовое решение. Звоните, пишите или приезжайте в наш офис в Алматы.</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <MapPin className="contact-icon" size={24} />
                                <div>
                                    <h4>Адрес</h4>
                                    <p>г. Алматы, Бостандыкский район, пр-т Аль-Фараби, 77/7, бизнес-центр "Esentai Tower", офис 1405</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <Phone className="contact-icon" size={24} />
                                <div>
                                    <h4>Телефоны</h4>
                                    <p>+7 (727) 300-00-00 (Многоканальный)</p>
                                    <p>+7 (701) 000-00-00 (Мобильный, WhatsApp)</p>
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
                                    <h4>Часы работы</h4>
                                    <p>Пн-Пт: 09:00 – 18:00</p>
                                    <p>Сб-Вс: Выходной</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-box">
                        <h2>Оставить заявку</h2>
                        {submitted ? (
                            <div className="success-message">
                                <p>Спасибо! Ваша заявка успешно отправлена. Наш юрист свяжется с вами в течение рабочего дня.</p>
                                <button className="btn btn-outline" onClick={() => setSubmitted(false)} style={{ marginTop: '1rem' }}>
                                    Отправить новую заявку
                                </button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Ваше имя *</label>
                                    <input type="text" id="name" required placeholder="Например, Арман" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Телефон *</label>
                                    <input type="tel" id="phone" required placeholder="+7 (7XX) XXX-XX-XX" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Краткое описание ситуации</label>
                                    <textarea id="message" rows={4} placeholder="Опишите ваш юридический вопрос..."></textarea>
                                </div>

                                <div className="form-policy">
                                    <label>
                                        <input type="checkbox" required />
                                        Я согласен на обработку персональных данных
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-large">
                                    Отправить запрос
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
