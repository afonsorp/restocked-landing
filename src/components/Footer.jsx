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
    <footer className="footer" >
      <div className="container">
        <div className="footer__content" style={{ justifyContent: 'center', alignItems: 'center' }}>
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
        </div>

        {/* <div className="footer__content">
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
*/
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} ReStocked.pt. {t('footer.copyright').split('© 2025 ReStocked.pt. ')[1]}
            </p>
          </div>
        </div> }
      </div>
    </footer>
  );
};

export default Footer;
