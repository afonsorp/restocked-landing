import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

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
    <section className="hero">
      <div className="hero__background">
        <div className="hero__overlay"></div>
        <div className="container">
          <div className="hero__content">
{/*             <div className="hero__badge">
              <span className="hero__badge-text">🏭 B2B Marketplace • 🌍 EU Coverage • ⏰ 24/7 Available</span>
            </div> */}

            <h1 className="hero__title">
              <span className="hero__title-main">{t('hero.title')}</span>
            </h1>

            <p className="hero__description">
              {t('hero.description')}
            </p>

            <div className="hero__actions">
              <button 
                className="btn btn--primary btn--lg hero__cta"
                onClick={() => scrollToSection('contact')}
              >
                {t('hero.cta.primary')}
              </button>
{/*               <button 
                className="btn btn--outline btn--lg hero__secondary"
                onClick={() => scrollToSection('about')}
              >
                {t('hero.cta.secondary')}
              </button> */}
            </div>

            <div className="hero__stats">
              <div className="hero__stat">
                <div className="hero__stat-icon">🚜</div>
                <div className="hero__stat-text">{t('hero.maquinas')}</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-icon">♻️</div>
                <div className="hero__stat-text">{t('hero.economia')}</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-icon">💰</div>
                <div className="hero__stat-text">{t('hero.competitivos')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
