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
              <span className="hero__title-main">{t('hero.description')}</span>
            </h1>

            <p className="hero__description">
              {t('hero.subtitle')}
            </p>

{/*             <div className="hero__actions">
              <button 
                className="btn btn--primary btn--lg hero__cta"
                onClick={() => scrollToSection('contact')}
              >
                {t('hero.cta.primary')}
              </button>
              <button 
                className="btn btn--outline btn--lg hero__secondary"
                onClick={() => scrollToSection('about')}
              >
                {t('hero.cta.secondary')}
              </button>
            </div> */}

            <div className="hero__stats">
              <div className="hero__stat">
                <div className="hero__stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div className="hero__stat-content">
                  <div className="hero__stat-title">{t('features.machineParts.title')}</div>
                  <div className="hero__stat-text">{t('features.machineParts.description')}</div>
                </div>
              </div>
              
              <div className="hero__stat">
                <div className="hero__stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <div className="hero__stat-content">
                  <div className="hero__stat-title">{t('features.stockReduction.title')}</div>
                  <div className="hero__stat-text">{t('features.stockReduction.description')}</div>
                </div>
              </div>
              
              <div className="hero__stat">
                <div className="hero__stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <div className="hero__stat-content">
                  <div className="hero__stat-title">{t('features.economicValue.title')}</div>
                  <div className="hero__stat-text">{t('features.economicValue.description')}</div>
                </div>
              </div>
              
              <div className="hero__stat">
                <div className="hero__stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div className="hero__stat-content">
                  <div className="hero__stat-title">{t('features.shortLeadTime.title')}</div>
                  <div className="hero__stat-text">{t('features.shortLeadTime.description')}</div>
                </div>
              </div>
              
              <div className="hero__stat">
                <div className="hero__stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 1l4 4-4 4"/>
                    <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
                    <path d="M7 23l-4-4 4-4"/>
                    <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
                  </svg>
                </div>
                <div className="hero__stat-content">
                  <div className="hero__stat-title">{t('features.circularity.title')}</div>
                  <div className="hero__stat-text">{t('features.circularity.description')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
