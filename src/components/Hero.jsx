import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        <button className="cta-button">{t('hero.cta')}</button>
      </div>
    </section>
  );
};

export default Hero;