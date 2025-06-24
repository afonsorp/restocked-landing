import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const offsetTop = element.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <a href="#" className="header__logo-link">
              <img 
                src="/logo-restocked.png" 
                alt="ReStocked.pt" 
                className="header__logo-img"
                onError={(e) => {
                  // Fallback se a imagem não carregar
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="header__logo-text" style={{display: 'none', color: 'var(--color-brand-primary)', fontWeight: 'bold', fontSize: '1.5rem'}}>
                ReStocked.pt
              </span>
            </a>
          </div>

          <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
            <a 
              href="#about" 
              className="header__nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              {t('navigation.about')}
            </a>
            <a 
              href="#rules" 
              className="header__nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('rules');
              }}
            >
              {t('navigation.rules')}
            </a>
            <a 
              href="#how-to-post" 
              className="header__nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('how-to-post');
              }}
            >
              {t('navigation.howToPost')}
            </a>
            <a 
              href="#how-it-works" 
              className="header__nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('how-it-works');
              }}
            >
              {t('navigation.howItWorks')}
            </a>
            <a 
              href="#return-policy" 
              className="header__nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('return-policy');
              }}
            >
              {t('navigation.returnPolicy')}
            </a>
            <a 
              href="#commission" 
              className="header__nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('commission');
              }}
            >
              {t('navigation.commission')}
            </a>
            <a 
              href="#contact" 
              className="header__nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              {t('navigation.contact')}
            </a>
          </nav>

          <div className="header__actions">
            <label htmlFor="language-selector" style={{ display: "none" }}>
              {t('navigation.selectLanguage')}
            </label>
            <select 
              id="language-selector"
              className="language-selector"
              value={i18n.language} 
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="pt">🇵🇹 PT</option>
              <option value="en">🇬🇧 EN</option>
              <option value="es">🇪🇸 ES</option>
              <option value="fr">🇫🇷 FR</option>
            </select>

            <button 
              className={`header__menu-toggle ${isMobileMenuOpen ? 'header__menu-toggle--open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
