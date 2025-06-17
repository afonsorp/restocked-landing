import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      id: 1,
      icon: '🚜',
      title: t('services.service1.title'),
      description: t('services.service1.description')
    },
    {
      id: 2,
      icon: '🛠️',
      title: t('services.service2.title'),
      description: t('services.service2.description')
    },
    {
      id: 3,
      icon: '📦',
      title: t('services.service3.title'),
      description: t('services.service3.description')
    }
  ];
  
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>{t('services.title')}</h2>
        <p className="section-description">{t('services.description')}</p>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;