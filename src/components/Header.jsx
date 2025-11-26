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

  const flags = {
    pt: (
      <svg width="20" height="15" viewBox="0 0 600 400" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
        <rect width="600" height="400" fill="#060"/>
        <rect width="240" height="400" fill="#f00"/>
        <circle cx="240" cy="200" r="80" fill="#ff0" stroke="#00f" strokeWidth="8"/>
      </svg>
    ),
    en: (
      <svg width="20" height="15" viewBox="0 0 60 30" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
        <rect width="60" height="30" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#t)"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </svg>
    ),
    es: (
      <svg width="20" height="15" viewBox="0 0 750 500" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
        <rect width="750" height="500" fill="#c60b1e"/>
        <rect y="125" width="750" height="250" fill="#ffc400"/>
      </svg>
    ),
    fr: (
      <svg width="20" height="15" viewBox="0 0 900 600" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
        <rect width="900" height="600" fill="#ED2939"/>
        <rect width="600" height="600" fill="#fff"/>
        <rect width="300" height="600" fill="#002395"/>
      </svg>
    )
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

          {/* <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
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
          </nav> */}

          <div className="header__actions">
            <label htmlFor="language-selector" style={{ display: "none" }}>
              {t('navigation.selectLanguage')}
            </label>
            <div className="language-selector-wrapper">
              <select 
                id="language-selector"
                className="language-selector"
                value={i18n.language} 
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="pt">PT - Português</option>
                <option value="en">EN - English</option>
                <option value="es">ES - Español</option>
                <option value="fr">FR - Français</option>
              </select>
              <div className="language-selector-display">
                {flags[i18n.language]}
                <span>{i18n.language.toUpperCase()}</span>
              </div>
            </div>

            {/* <button 
              className={`header__menu-toggle ${isMobileMenuOpen ? 'header__menu-toggle--open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
