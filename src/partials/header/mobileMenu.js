document.addEventListener('DOMContentLoaded', () => {
  const getElement = selector => document.querySelector(selector);

  const toggleClass = (element, className) =>
    element.classList.toggle(className);

  const initMobileMenu = () => {
    const burgerBtn = getElement('.js-burger-btn');
    const mobileMenu = getElement('.js-mobile-menu');
    const burgerIcon = getElement('.js-burger-icon');
    const body = document.body;

    const handleMenuToggle = () => {
      toggleClass(mobileMenu, 'menu-open');
      toggleClass(burgerIcon, 'burger-active');
      toggleClass(body, 'is-menu-open');

      setTimeout(() => toggleClass(mobileMenu, 'menu-bg'), 10);
    };

    const handleOutsideClick = event => {
      if (
        !mobileMenu.contains(event.target) &&
        !burgerBtn.contains(event.target)
      ) {
        mobileMenu.classList.remove('menu-open', 'menu-bg');
        burgerIcon.classList.remove('burger-active');
        body.classList.remove('is-menu-open');
      }
    };

    burgerBtn.addEventListener('click', handleMenuToggle);
    document.addEventListener('click', handleOutsideClick);
  };

  initMobileMenu();
});
