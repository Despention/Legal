import { Scale, Phone, MapPin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LangSwitch from './LangSwitch';
import WhatsAppWidget from './WhatsAppWidget';

export default function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header className="navbar">
                <div className="container nav-container">
                    <Link to="/" className="logo" onClick={closeMenu}>
                        <Scale className="logo-icon" size={28} />
                        <span>Право & Защита</span>
                    </Link>

                    <nav className={isMenuOpen ? "nav-links open" : "nav-links"}>
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>{t('nav.home')}</Link>
                        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>{t('nav.about')}</Link>
                        <Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={closeMenu}>{t('nav.services')}</Link>
                        <Link to="/cases" className={location.pathname === '/cases' ? 'active' : ''} onClick={closeMenu}>{t('nav.cases')}</Link>
                        <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''} onClick={closeMenu}>{t('nav.blog')}</Link>
                        <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>{t('nav.contact')}</Link>

                        {/* Added Theme and Lang Controls */}
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: '1rem' }}>
                            <ThemeToggle />
                            <LangSwitch />
                        </div>
                    </nav>

                    <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </header>

            <main>
                <Outlet />
            </main>

            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <Link to="/" className="logo">
                                <Scale className="logo-icon" size={24} />
                                <span>Право & Защита</span>
                            </Link>
                            <p>{t('footer.brand_desc')}</p>
                        </div>

                        <div className="footer-links">
                            <h4>{t('footer.nav_title')}</h4>
                            <ul>
                                <li><Link to="/">{t('nav.home')}</Link></li>
                                <li><Link to="/about">{t('nav.about')}</Link></li>
                                <li><Link to="/services">{t('nav.services')}</Link></li>
                                <li><Link to="/cases">{t('nav.cases')}</Link></li>
                                <li><Link to="/blog">{t('nav.blog')}</Link></li>
                                <li><Link to="/contact">{t('nav.contact')}</Link></li>
                            </ul>
                        </div>

                        <div className="footer-contact">
                            <h4>{t('footer.contact_title')}</h4>
                            <p><Phone size={18} /> +7 (727) 300-00-00</p>
                            <p><Phone size={18} /> +7 (701) 000-00-00</p>
                            <p><MapPin size={18} /> {t('footer.address')}</p>
                            <p><Mail size={18} /> info@lawfirm-kz.kz</p>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
                    </div>
                </div>
            </footer>

            <WhatsAppWidget />
        </>
    );
}
