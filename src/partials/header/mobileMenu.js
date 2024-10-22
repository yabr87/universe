document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const burgerWrapper = document.querySelector('[data-burger-btn]');
  const desktopMenu = document.querySelector('[data-desktop-menu]');
  const mobileMenu = document.querySelector('[data-mob-menu]');

  let lastScrollTop = 0;
  let isHeaderVisible = true;

  const toggleBurgerMenu = () => {
    burgerWrapper.querySelector('[data-burger-icon]').classList.toggle('open');
    desktopMenu.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  };

  const closeMenus = () => {
    burgerWrapper.querySelector('[data-burger-icon]').classList.remove('open');
    desktopMenu.classList.remove('open');
    mobileMenu.classList.remove('open');
  };

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const handleScroll = debounce(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop < lastScrollTop) {
      if (!isHeaderVisible) {
        header.classList.remove('hidden');
        isHeaderVisible = true;
      }
    } else {
      if (isHeaderVisible) {
        header.classList.add('hidden');
        isHeaderVisible = false;
      }
    }

    header.classList.toggle('scrolled', scrollTop > 0);

    lastScrollTop = scrollTop;

    if (desktopMenu.classList.contains('open')) {
      closeMenus();
    }
  }, 100);

  burgerWrapper.addEventListener('click', toggleBurgerMenu);

  document.addEventListener('click', event => {
    if (
      !desktopMenu.contains(event.target) &&
      !burgerWrapper.contains(event.target) &&
      !mobileMenu.contains(event.target)
    ) {
      closeMenus();
    }
  });

  window.addEventListener('scroll', handleScroll);
});
