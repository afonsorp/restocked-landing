import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

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
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <div className="footer__logo">
              <img 
                src="/logo-restocked.png" 
                alt="ReStocked.pt" 
                className="footer__logo-img"
                onError={(e) => {
                  // Fallback se a imagem não carregar
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="footer__logo-text" style={{display: 'none', color: 'var(--color-brand-primary)', fontWeight: 'bold', fontSize: '1.5rem'}}>
                ReStocked.pt
              </span>
            </div>
            <p className="footer__tagline">
              {t('footer.tagline')}
            </p>
            <p className="footer__description">
              {t('about.content').split('\n')[0]}
            </p>
{/*             <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div> */}
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h4 className="footer__column-title">{t('footer.company')}</h4>
              <a 
                href="#about" 
                className="footer__link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                {t('navigation.about')}
              </a>
              <a 
                href="#contact" 
                className="footer__link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                {t('navigation.contact')}
              </a>
              <a 
                href="#commission" 
                className="footer__link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('commission');
                }}
              >
                {t('navigation.commission')}
              </a>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">{t('footer.platform')}</h4>
              <a 
                href="#how-to-post" 
                className="footer__link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('how-to-post');
                }}
              >
                {t('navigation.howToPost')}
              </a>
              <a 
                href="#how-it-works" 
                className="footer__link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('how-it-works');
                }}
              >
                {t('navigation.howItWorks')}
              </a>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">{t('footer.policies')}</h4>
              <a 
                href="#rules" 
                className="footer__link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('rules');
                }}
              >
                {t('navigation.rules')}
              </a>
              <a 
                href="#return-policy" 
                className="footer__link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('return-policy');
                }}
              >
                {t('navigation.returnPolicy')}
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} ReStocked.pt. {t('footer.copyright').split('© 2025 ReStocked.pt. ')[1]}
            </p>
{/*             <div className="footer__bottom-links">
              <a href="#" className="footer__bottom-link">Política de Privacidade</a>
              <a href="#" className="footer__bottom-link">Termos de Uso</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
