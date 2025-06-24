import { useTranslation } from 'react-i18next';
import './Sections.css';

const Sections = () => {
  const { t } = useTranslation();

  // Função para formatar texto com quebras de linha
  const formatText = (text, isWhite) => {
    return text.split('\n').map((paragraph, index) => (
      <p key={index} className={`info-section__paragraph ${isWhite ? 'white' : ''}`}>
        {paragraph}
      </p>
    ));
  };

  return (
    <>
      {/* Rules Section */}
      <section id="rules" className="info-section section--secondary">
        <div className="container">
          <div className="info-section__content">
            <div className="info-section__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4"/>
                <path d="M21 12c.552 0 1-.448 1-1V8a2 2 0 0 0-2-2h-4l-2-3H8L6 6H2a2 2 0 0 0-2 2v3c0 .552.448 1 1 1"/>
                <path d="M3 21h18a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"/>
              </svg>
            </div>
            <div>
              <h2 className="info-section__title">{t('rules.title')}</h2>
              <div className="info-section__description">
                {formatText(t('rules.content'))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Post Section */}
      <section id="how-to-post" className="info-section section--primary">
        <div className="container">
          <div className="info-section__content">
            <div className="info-section__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
            </div>
            <div>
              <h2 className="info-section__title">{t('howToPost.title')}</h2>
              <div className="info-section__description">
                {formatText(t('howToPost.content'))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="info-section section--secondary">
        <div className="container">
          <div className="info-section__content">
            <div className="info-section__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </div>
            <div>
              <h2 className="info-section__title">{t('howItWorks.title')}</h2>
              <div className="info-section__description">
                {formatText(t('howItWorks.content'))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return Policy Section */}
      <section id="return-policy" className="info-section section--primary">
        <div className="container">
          <div className="info-section__content">
            <div className="info-section__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 4 23 10 17 10"/>
                <polyline points="1 20 1 14 7 14"/>
                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
              </svg>
            </div>
            <div>
              <h2 className="info-section__title">{t('returnPolicy.title')}</h2>
              <div className="info-section__description">
                {formatText(t('returnPolicy.content'))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Section */}
      <section id="commission" className="commission-section">
        <div className="container">
          <div className="commission-section__content">
            <div className="commission-section__header">
              <div className="commission-section__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h2 className="commission-section__title">{t('commission.title')}</h2>
              <p className="commission-section__content-text white">
                {t('commission.content')}
              </p>
            </div>

            <div className="commission-section__details">
              <h3 className="commission-section__subtitle">
                {t('commission.subtitle')}
              </h3>
              <div className="commission-section__description">
                {formatText(t('commission.subcontent'), true)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;
