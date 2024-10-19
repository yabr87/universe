document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const burgerWrapper = document.querySelector('[data-burger-btn]');
  const desktopMenu = document.querySelector('[data-desktop-menu]');
  const mobileMenu = document.querySelector('[data-mob-menu]');

  let lastScrollTop = 0;
  let isHeaderVisible = true;

  burgerWrapper.addEventListener('click', () => {
    burgerWrapper.querySelector('[data-burger-icon]').classList.toggle('open');
    desktopMenu.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  document.addEventListener('click', event => {
    if (
      !desktopMenu.contains(event.target) &&
      !burgerWrapper.contains(event.target) &&
      !mobileMenu.contains(event.target)
    ) {
      closeMenus();
    }
  });

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && isHeaderVisible) {
      header.classList.add('hidden');
      isHeaderVisible = false;
    } else if (scrollTop < lastScrollTop && !isHeaderVisible) {
      header.classList.remove('hidden');
      isHeaderVisible = true;
    }

    lastScrollTop = scrollTop;

    if (desktopMenu.classList.contains('open')) {
      closeMenus();
    }
  });

  function closeMenus() {
    burgerWrapper.querySelector('[data-burger-icon]').classList.remove('open');
    desktopMenu.classList.remove('open');
    mobileMenu.classList.remove('open');
  }
});
