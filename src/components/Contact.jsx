import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação básica
    if (!email) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar email para luis@restocked.pt
      const response = await fetch('https://formspree.io/f/meovkjla', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          _replyto: email,
          _subject: 'Nova submissão de email - ReStocked.pt',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact__content">
          <div className="contact__header">
            <h2 className="contact__title">{t('contact.title')}</h2>
            <p className="contact__subtitle">{t('contact.subtitle')}</p>
            {/* <p className="contact__description">{t('contact.description')}</p> */}
          </div>

          <div className="contact__wrapper">
            <form className="contact__form" onSubmit={handleSubmit}>
              {submitStatus === 'success' && (
                <div className="alert alert--success">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  {t('messages.success')}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert--error">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                  {t('messages.error')}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  required
                  placeholder={t('contact.form.emailPlaceholder') || 'seu@email.com'}
                />
              </div>

              <button
                type="submit"
                className="btn btn--primary btn--lg btn--full-width"
                disabled={isSubmitting}
              >
                {isSubmitting ? '...' : t('contact.form.submit')}
              </button>
            </form>

            {/* <div className="contact__info">
              <div className="contact-card">
                <div className="contact-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact-card__content">
                  <h3 className="contact-card__title">{t("contact.email")}</h3>
                  <p className="contact-card__text">restocked@restocked.pt</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-card__content">
                  <h3 className="contact-card__title">{t("contact.location")}</h3>
                  <p className="contact-card__text">Portugal</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div className="contact-card__content">
                  <h3 className="contact-card__title">{t("contact.available")}</h3>
                  <p className="contact-card__text">24/7</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
