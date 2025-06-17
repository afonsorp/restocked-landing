import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>{t('about.title')}</h2>
        <div className="about-grid">
          <div className="about-content">
            <p>{t('about.paragraph1')}</p>
            <p>{t('about.paragraph2')}</p>
            <p>{t('about.paragraph3')}</p>
          </div>
          <div className="about-image">
            <img src="/image.png" alt={t('about.imageAlt')} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;