import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };
  
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src="/logo-restocked.png" alt="ReStocked" />
        </div>
        
        <nav>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className="nav-link">{t('header.home')}</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">{t('header.about')}</a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">{t('header.services')}</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">{t('header.contact')}</a>
            </li>
          </ul>
        </nav>
        
        <div className="language-selector">
          <div 
            className={`language-option ${currentLang === 'pt' ? 'active' : ''}`}
            onClick={() => changeLanguage('pt')}
          >
            PT
          </div>
          <div 
            className={`language-option ${currentLang === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
          >
            EN
          </div>
          <div 
            className={`language-option ${currentLang === 'es' ? 'active' : ''}`}
            onClick={() => changeLanguage('es')}
          >
            ES
          </div>
          <div 
            className={`language-option ${currentLang === 'fr' ? 'active' : ''}`}
            onClick={() => changeLanguage('fr')}
          >
            FR
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;