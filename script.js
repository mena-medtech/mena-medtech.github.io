document.addEventListener('DOMContentLoaded', () => {
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
