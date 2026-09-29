document.addEventListener('DOMContentLoaded', () => {
  // Payment provider configuration (Stripe-ready).
  // Replace these empty placeholders with real hosted Checkout / Payment Link
  // URLs from your payment provider (e.g. Stripe Payment Links) once your
  // account is set up. Enable ACH/direct-deposit in the provider's dashboard
  // for the "bank" link. Until these are configured, the payment buttons
  // fall back to a safe "contact us" email so no broken or fabricated
  // payment URL is ever shown to visitors.
  const PAYMENT_LINKS = {
    card: '', // e.g. 'https://buy.stripe.com/xxxxxxxxxxxx'
    bank: '', // e.g. 'https://buy.stripe.com/yyyyyyyyyyyy' (with ACH/direct deposit enabled)
  };

  document.querySelectorAll('.payment-cta').forEach((link) => {
    const configuredUrl = PAYMENT_LINKS[link.dataset.paymentType];
    if (configuredUrl) {
      link.href = configuredUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });

  const setLanguage = (language) => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-en][data-ar]').forEach((element) => {
      element.textContent = element.dataset[language];
    });
    document.querySelectorAll('.lang-btn').forEach((button) => {
      button.classList.toggle('active', button.dataset.lang === language);
    });
    localStorage.setItem('mena-language', language);
  };

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  document.querySelectorAll('.pricing-tab-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const region = button.dataset.region;
      document.querySelectorAll('.pricing-tab-btn').forEach((item) => item.classList.toggle('active', item === button));
      document.querySelectorAll('.pricing-content').forEach((panel) => panel.classList.toggle('active', panel.dataset.region === region));
    });
  });

  const savedLanguage = localStorage.getItem('mena-language');
  setLanguage(savedLanguage === 'ar' ? 'ar' : 'en');
});
