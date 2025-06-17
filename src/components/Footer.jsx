import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-column">
            <h3>{t('footer.company')}</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <a href="#about">{t('footer.about')}</a>
              </li>
              <li className="footer-link">
                <a href="#services">{t('footer.services')}</a>
              </li>
              <li className="footer-link">
                <a href="#contact">{t('footer.contact')}</a>
              </li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>{t('footer.legal')}</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <a href="#">{t('footer.terms')}</a>
              </li>
              <li className="footer-link">
                <a href="#">{t('footer.privacy')}</a>
              </li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>{t('footer.social')}</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li className="footer-link">
                <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li className="footer-link">
                <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} ReStocked. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;