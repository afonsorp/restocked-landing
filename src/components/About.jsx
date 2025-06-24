import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  // Função para formatar texto com quebras de linha
  const formatText = (text) => {
    return text.split('\n').map((paragraph, index) => (
      <p key={index} className="about__paragraph">
        {paragraph}
      </p>
    ));
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about__content">
          <div className="about__header">
            <div className="about__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <h2 className="about__title">{t('about.title')}</h2>
          </div>

          <div className="about__description">
            {formatText(t('about.content'))}
          </div>

          <div className="about__features">
            <div className="feature-card">
              <div className="feature-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="feature-card__title">Para Vendedores</h3>
              <p className="feature-card__description">
                Transforme stock parado em receita. Valorize equipamentos que 
                de outra forma não gerariam vendas.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                </svg>
              </div>
              <h3 className="feature-card__title">Para Compradores</h3>
              <p className="feature-card__description">
                Encontre peças em bom estado a preços competitivos. 
                Acesso a equipamentos descontinuados.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 className="feature-card__title">Circularidade</h3>
              <p className="feature-card__description">
                Economia circular que elimina o conceito de "obsoleto". 
                Sustentabilidade e eficiência económica.
              </p>
            </div>
          </div>

          <div className="about__tagline">
            <h3 className="about__tagline-text">{t('hero.subtitle')}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
